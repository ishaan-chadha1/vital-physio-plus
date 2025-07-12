"use client";

import React, { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnimatePresence, motion } from "framer-motion";
import systemInstruction from "@/lib/systemInstruction";
import { createClient } from "@/utils/supabase/client";
import IntroLayout from "@/components/IntroLayout";
import speakWithElevenLabs from "@/utils/temp";
import { useRouter } from "next/navigation";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

function cleanResponseMarkdown(raw: string): string {
  return raw
    .replace(/```[a-z]*\n?/gi, "")
    .replace(/```/g, "")
    .trim();
}

export default function FormBotPage() {
  const [chat, setChat] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<{ question: any; value: any }[]>([]);
  const [question, setQuestion] = useState<any>(null);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState(null);
  const [done, setDone] = useState(false);
  const supabase = createClient();

  // --- State for managing the final submission ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setAuthChecked(true);
      if (!user) {
        router.replace("/sign-in?redirect=/form");
      } else {
        setIsAuthed(true);
        setUser(user);
      }
    }
    checkAuth();
  }, [router]);

  const populateFinalJSON = (history) => {
    const finalData = {
      demographics: {},
      chiefComplaint: {},
      historyOfPresentIllness: {},
      pastMedicalHistory: [],
      medications: [],
      allergies: [],
      familyHistory: [],
      socialHistory: {},
      reviewOfSystems: {},
      diagnosticImpressions: [],
    };

    history.forEach((entry) => {
      const key = entry.question.fieldKey;
      const value = entry.value;

      if (key.startsWith("demographics.")) {
        const field = key.split(".")[1];
        finalData.demographics[field] = value;
      } else if (key.startsWith("chiefComplaint.")) {
        const field = key.split(".")[1];
        finalData.chiefComplaint[field] = value;
      } else if (key.startsWith("historyOfPresentIllness.")) {
        const field = key.split(".")[1];
        finalData.historyOfPresentIllness[field] = value;
      } else if (key.startsWith("socialHistory.")) {
        const field = key.split(".")[1];
        finalData.socialHistory[field] = value;
      } else if (key.startsWith("reviewOfSystems.")) {
        const field = key.split(".")[1];
        finalData.reviewOfSystems[field] = value;
      } else if (key.startsWith("pastMedicalHistory.")) {
          const field = key.split(".")[1];
          if (finalData.pastMedicalHistory.length === 0 || finalData.pastMedicalHistory[finalData.pastMedicalHistory.length - 1][field]) {
              finalData.pastMedicalHistory.push({ [field]: value });
          } else {
              finalData.pastMedicalHistory[finalData.pastMedicalHistory.length - 1][field] = value;
          }
      } else if (key.startsWith("medications.")) {
          const field = key.split(".")[1];
          if (finalData.medications.length === 0 || finalData.medications[finalData.medications.length - 1][field]) {
              finalData.medications.push({ [field]: value });
          } else {
              finalData.medications[finalData.medications.length - 1][field] = value;
          }
      } else if (key.startsWith("allergies.")) {
          const field = key.split(".")[1];
          if (finalData.allergies.length === 0 || finalData.allergies[finalData.allergies.length - 1][field]) {
              finalData.allergies.push({ [field]: value });
          } else {
              finalData.allergies[finalData.allergies.length - 1][field] = value;
          }
      } else if (key.startsWith("familyHistory.")) {
          const field = key.split(".")[1];
          if (finalData.familyHistory.length === 0 || finalData.familyHistory[finalData.familyHistory.length - 1][field]) {
              finalData.familyHistory.push({ [field]: value });
          } else {
              finalData.familyHistory[finalData.familyHistory.length - 1][field] = value;
          }
      } else if (key.startsWith("diagnosticImpressions.")) {
          const field = key.split(".")[1];
          if (finalData.diagnosticImpressions.length === 0 || finalData.diagnosticImpressions[finalData.diagnosticImpressions.length - 1][field]) {
              finalData.diagnosticImpressions.push({ [field]: value });
          } else {
              finalData.diagnosticImpressions[finalData.diagnosticImpressions.length - 1][field] = value;
          }
      }
    });

    return finalData;
  };

  const saveDataToSupabase = async (finalJSON, history) => {
    try {
      const { data, error } = await supabase.from("form_data").insert([
        {
          session_id: crypto.randomUUID(),
          patient_name: finalJSON.demographics?.name || "Unknown",
          patient_email: finalJSON.demographics?.contactInfo || "",
          final_json: finalJSON,
          chat_history: history,
        },
      ]);
      if (error) console.error("❌ Error saving data to Supabase:", error.message);
      else console.log("✅ Data successfully saved to Supabase:", data);
    } catch (err) {
      console.error("⚠️ Unexpected error:", err);
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError(null);

    const finalJSON = populateFinalJSON(history);
    await saveDataToSupabase(finalJSON, history);

    // --- MODIFIED: Log data to console for debugging ---
    console.log("✅ Form submission initiated. Data logged below.");
    console.log("Final JSON Payload:", finalJSON);
    console.log("Chat History:", history);

    // The POST request is removed for now. You can add it back later.
    // We will just show a success message to the user.
    alert("Submission complete! Data has been logged to the console.");

    setIsSubmitting(false);

    // The redirect is also removed for now.
    // router.push('/protected');
  };

  useEffect(() => {
    const initChat = async () => {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        generationConfig,
        systemInstruction,
      });
      const session = await model.startChat({ history: [] });
      setChat(session);
      const result = await session.sendMessage("start");
      const cleaned = cleanResponseMarkdown(result.response.text());
      const parsed = JSON.parse(cleaned);
      setQuestion(parsed);
    };
    if (isAuthed) {
      initChat();
    }
  }, [isAuthed]);

  useEffect(() => {
    if (question?.label) {
      speakWithElevenLabs(question.label);
    }
  }, [question]);

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
    try {
      const parsed = JSON.parse(cleaned);
      if (parsed.type === "done") {
        setDone(true);
        setQuestion(null);
      } else {
        setQuestion(parsed);
      }
    } catch (err) {
      console.error("Failed to parse Gemini response:", err);
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) return;
    const prev = history[currentIndex - 1];
    setQuestion(prev.question);
    setInput(prev.value);
    setCurrentIndex((i) => i - 1);
  };

  const handleRestart = () => {
    location.reload();
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const renderInput = () => {
    // This function remains unchanged
    switch (question?.type) {
      case "input":
        return (
          <input
            ref={inputRef}
            type={
              question.fieldType === "number"
                ? "number"
                : question.fieldType === "date"
                ? "date"
                : "text"
            }
            placeholder={question.placeholder || ""}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full text-black text-xl p-3 rounded border border-gray-300 bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        );
      case "scale":
        return (
          <div className="w-full flex flex-col items-center">
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={input || 5}
              onChange={(e) => setInput(e.target.value)}
              className="w-full accent-blue-600"
            />
            <span className="mt-2 font-semibold text-lg">{input || 5}</span>
          </div>
        );
      case "select":
        return (
          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  const selected = option;
                  const newHistory = [
                    ...history.slice(0, currentIndex),
                    { question, value: selected },
                  ];
                  setHistory(newHistory);
                  setCurrentIndex((i) => i + 1);
                  setInput("");
                  const responseObj = JSON.stringify({
                    fieldKey: question.fieldKey,
                    value: selected,
                  });
                  chat.sendMessage(responseObj).then((result) => {
                    const cleaned = cleanResponseMarkdown(result.response.text());
                    try {
                      const parsed = JSON.parse(cleaned);
                      if (parsed.type === "done") {
                        setDone(true);
                        setQuestion(null);
                      } else {
                        setQuestion(parsed);
                      }
                    } catch (err) {
                      console.error("Failed to parse Gemini response:", err);
                    }
                  });
                }}
                className={`px-4 py-2 rounded shadow text-green-700 bg-white hover:bg-green-100 transition ${
                  input === option ? "ring-2 ring-white" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (!authChecked || !isAuthed) {
    return (
      <IntroLayout>
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="text-xl font-semibold animate-pulse">
            Checking authentication…
          </div>
        </div>
      </IntroLayout>
    );
  }

  return (
    <IntroLayout>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="w-full max-w-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={done ? "summary" : question?.fieldKey || "loading"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {done ? (
                // --- SIMPLIFIED Summary View ---
                  <>
                    <h2 className="text-2xl font-bold mb-6">✅ Intake Summary</h2>
                    
                    {/* Display error message if submission fails */}
                    {submissionError && (
                      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 text-left">
                        <p className="font-bold">Submission Failed</p>
                        <p>{submissionError}</p>
                      </div>
                    )}

                    <div className="bg-blue-50 text-blue-800 rounded-md p-6 mb-6 text-left space-y-3 max-h-96 overflow-y-auto">
                      {history.map((entry, index) => (
                        <div key={index}>
                          <strong>{entry.question.label}</strong>
                          <p className="text-gray-700">{entry.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                       <button onClick={handleRestart} className="bg-gray-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-gray-700 transition">
                         Restart ↺
                       </button>
                       <button onClick={handleFinalSubmit} disabled={isSubmitting} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition disabled:bg-blue-300">
                         {isSubmitting ? "Submitting..." : "Submit"}
                       </button>
                    </div>
                  </>
              ) : (
                // --- Active conversation part (unchanged) ---
                <>
                  <h2 className="text-xl font-bold mb-6 text-gray-800">
                    {question?.label || "Loading..."}
                  </h2>
                  {renderInput()}
                  {question?.type !== "select" && (
                    <div className="flex justify-between items-center mt-6">
                      <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition">
                        ← Back
                      </button>
                      <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition">
                        OK ↵
                      </button>
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
