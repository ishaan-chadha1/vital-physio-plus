"use client";

import React, { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnimatePresence, motion } from "framer-motion";
import systemInstruction from "@/lib/systemInstruction";
import summaryInstruction from "@/lib/summaryInstruction"; 
import { createClient } from "@/utils/supabase/client";
import IntroLayout from "@/components/IntroLayout";
import speakWithElevenLabs from "@/utils/temp";
import { useRouter } from "next/navigation";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

const generationConfig = {
  temperature: 0.7, 
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

function cleanResponseMarkdown(raw: string): string {
  return raw.replace(/```[a-z]*\n?/gi, "").replace(/```/g, "").trim();
}

export default function FormBotPage() {
  const [chat, setChat] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<{ question: any; value: any }[]>([]);
  const [question, setQuestion] = useState<any>(null);
  const [input, setInput] = useState("");
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);
  const [done, setDone] = useState(false);
  const supabase = createClient();

  const [summaryText, setSummaryText] = useState("");
  const [editInput, setEditInput] = useState("");
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.replace("/sign-in?redirect=/form");
      else setIsAuthed(true);
    }
    checkAuth();
  }, [router]);

  const populateFinalJSON = (history) => {
    const finalData = { demographics: {}, chiefComplaint: {}, historyOfPresentIllness: {}, pastMedicalHistory: [], medications: [], allergies: [], familyHistory: [], socialHistory: {}, reviewOfSystems: {}, diagnosticImpressions: [] };
    
    const handleArrayLogic = (section, field, value) => {
      let lastEntry = finalData[section][finalData[section].length - 1];
      if (!lastEntry || lastEntry.hasOwnProperty(field)) {
        finalData[section].push({ [field]: value });
      } else {
        lastEntry[field] = value;
      }
    };

    history.forEach((entry) => {
      const key = entry.question.fieldKey;
      const value = entry.value;
      const [section, field] = key.split('.');

      switch(section) {
        case "demographics":
        case "chiefComplaint":
        case "historyOfPresentIllness":
        case "socialHistory":
        case "reviewOfSystems":
          finalData[section][field] = value;
          break;
        case "pastMedicalHistory":
        case "medications":
        case "allergies":
        case "familyHistory":
        case "diagnosticImpressions":
          handleArrayLogic(section, field, value);
          break;
        default:
          break;
      }
    });
    return finalData;
  };

  const saveDataToSupabase = async (finalJSON, history) => {
    try { const { data, error } = await supabase.from("form_data").insert([{ session_id: crypto.randomUUID(), patient_name: finalJSON.demographics?.name || "Unknown", patient_email: finalJSON.demographics?.contactInfo || "", final_json: finalJSON, chat_history: history, }]); if (error) console.error("❌ Error saving data to Supabase:", error.message); else console.log("✅ Data successfully saved to Supabase:", data); } catch (err) { console.error("⚠️ Unexpected error:", err); }
  };

  const generateSummary = async (prompt) => {
    setIsGeneratingSummary(true);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig, systemInstruction: summaryInstruction });
    const result = await model.generateContent(prompt);
    const newSummary = cleanResponseMarkdown(result.response.text());
    setSummaryText(newSummary);
    setIsGeneratingSummary(false);
  };

  const handleSummaryUpdate = () => {
    if (!editInput.trim()) return;
    const prompt = `EDIT_SUMMARY: [EXISTING_SUMMARY] ${summaryText} [USER_REQUEST] ${editInput}`;
    generateSummary(prompt);
    setEditInput("");
  };

  useEffect(() => {
    if (done) {
      const finalJSON = populateFinalJSON(history);
      const prompt = `GENERATE_SUMMARY: ${JSON.stringify(finalJSON)}`;
      generateSummary(prompt);
    }
  }, [done, history]);
  
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError(null);
    const finalJSON = populateFinalJSON(history);
    await saveDataToSupabase(finalJSON, history);
    const payload = { patient_text: { ...finalJSON }, medication_text: finalJSON.medications || [] };
    delete payload.patient_text.medications;

    console.log("Attempting to send data to /api/codify...");
    console.log("Final JSON Payload:", JSON.stringify(finalJSON, null, 2));

    try {
      const response = await fetch("/api/codify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) { const result = await response.json().catch(() => ({ error: "Failed to parse error response." })); throw new Error(result.error || `Request failed with status ${response.status}`); }
      console.log("✅ Submission Successful!");
      router.push('/protected');
    } catch (error) { const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."; setSubmissionError(errorMessage); console.error("Submission Error:", errorMessage);
    } finally { setIsSubmitting(false); }
  };

  useEffect(() => {
    const initChat = async () => {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig, systemInstruction });
      const session = await model.startChat({ history: [] });
      setChat(session);
      const result = await session.sendMessage("start");
      const cleaned = cleanResponseMarkdown(result.response.text());
      try {
        const parsed = JSON.parse(cleaned);
        setQuestion(parsed);
      } catch(e) {
        console.error("Failed to parse initial question:", e, cleaned);
      }
    };
    if (isAuthed) { initChat(); }
  }, [isAuthed]);

  const handleSubmit = async () => {
    if (!chat || !question?.fieldKey) return;
    const value = input;
    const newHistory = [...history.slice(0, currentIndex), { question, value }];
    setHistory(newHistory);
    setCurrentIndex((i) => i + 1);
    setInput("");
    const responseObj = JSON.stringify({ fieldKey: question.fieldKey, value });
    const result = await chat.sendMessage(responseObj);
    const cleaned = cleanResponseMarkdown(result.response.text());
    try { const parsed = JSON.parse(cleaned); if (parsed.type === "done") { setDone(true); setQuestion(null); } else { setQuestion(parsed); }
    } catch (err) { console.error("Failed to parse Gemini response:", err, cleaned); }
  };
  
  const handleRestart = () => location.reload();
  const handleBack = () => { if (currentIndex === 0) return; const prev = history[currentIndex - 1]; setQuestion(prev.question); setInput(prev.value); setCurrentIndex((i) => i - 1); };
  const handleKeyPress = (e) => { if (e.key === "Enter") handleSubmit(); };
  const handleEditKeyPress = (e) => { if (e.key === "Enter") handleSummaryUpdate(); };
  
  const renderInput = () => {
    switch (question?.type) {
      case "input": return ( <input type={ question.fieldType === "number" ? "number" : question.fieldType === "date" ? "date" : "text" } placeholder={question.placeholder || ""} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} className="w-full text-black text-xl p-3 rounded border border-gray-300 bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> );
      case "scale": return ( <div className="w-full flex flex-col items-center"> <input type="range" min={1} max={10} step={1} value={input || 5} onChange={(e) => setInput(e.target.value)} className="w-full accent-blue-600" /> <span className="mt-2 font-semibold text-lg">{input || 5}</span> </div> );
      case "select": return ( <div className="grid grid-cols-2 gap-4"> {question.options.map((option, index) => ( <button key={index} onClick={() => { const selected = option; const newHistory = [ ...history.slice(0, currentIndex), { question, value: selected }, ]; setHistory(newHistory); setCurrentIndex((i) => i + 1); setInput(""); const responseObj = JSON.stringify({ fieldKey: question.fieldKey, value: selected, }); chat.sendMessage(responseObj).then((result) => { const cleaned = cleanResponseMarkdown(result.response.text()); try { const parsed = JSON.parse(cleaned); if (parsed.type === "done") { setDone(true); setQuestion(null); } else { setQuestion(parsed); } } catch (err) { console.error("Failed to parse Gemini response:", err); } }); }} className={`px-4 py-2 rounded shadow text-green-700 bg-white hover:bg-green-100 transition ${ input === option ? "ring-2 ring-white" : "" }`} > {option} </button> ))} </div> );
      default: return null;
    }
  };

  if (!isAuthed) {
    return ( <IntroLayout> <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-green-50"> <div className="text-xl font-semibold animate-pulse"> Checking authentication… </div> </div> </IntroLayout> );
  }

  return (
    <IntroLayout>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="w-full max-w-2xl text-center">
          <AnimatePresence mode="wait">
            <motion.div key={done ? "summary" : question?.fieldKey || "loading"} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full">
              {done ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">✅ Please Review Your Summary</h2>
                  <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-6 text-left min-h-[150px]">
                    {isGeneratingSummary ? (
                      <div className="animate-pulse">Generating summary...</div>
                    ) : (
                      <p className="whitespace-pre-wrap">{summaryText}</p>
                    )}
                  </div>

                  <div className="text-left mb-6">
                    <label className="font-semibold text-gray-700">Need to make a change?</label>
                    <div className="flex gap-2 mt-2">
                       <input
                         type="text"
                         value={editInput}
                         onChange={(e) => setEditInput(e.target.value)}
                         onKeyDown={handleEditKeyPress}
                         placeholder="e.g., Change my address to 123 Main St"
                         className="flex-grow p-2 border rounded-md"
                       />
                       <button onClick={handleSummaryUpdate} disabled={isGeneratingSummary} className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition disabled:bg-green-300">
                         Update
                       </button>
                    </div>
                  </div>
                  
                  {submissionError && ( <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 text-left"> <p className="font-bold">Submission Failed</p> <p>{submissionError}</p> </div> )}

                  <div className="flex justify-between items-center border-t pt-6">
                     <button onClick={handleRestart} className="bg-gray-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-gray-700 transition"> Restart ↺ </button>
                     <button onClick={handleFinalSubmit} disabled={isSubmitting || isGeneratingSummary} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition disabled:bg-blue-300">
                       {isSubmitting ? "Submitting..." : "Looks Good, Submit"}
                     </button>
                  </div>
                </>
              ) : (
                <>
                  {/* This logic ensures the greeting only shows for the first question */}
                  {currentIndex === 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mb-4 text-gray-600 p-4 bg-blue-50 rounded-lg"
                    >
                      <p>Hello! I'm a friendly assistant from VitalPhysio+. I'll be collecting some information for your upcoming physiotherapy appointment. Everything you share is confidential.</p>
                    </motion.div>
                  )}
                  <h2 className="text-xl font-bold mb-6 text-gray-800">{question?.label || "Loading..."}</h2>
                  {renderInput()}
                  {question?.type !== "select" && (
                    <div className="flex justify-between items-center mt-6">
                      <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition">← Back</button>
                      <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition">OK ↵</button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </IntroLayout>
  );
}
