'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AnimatePresence, motion } from 'framer-motion';
import systemInstruction from "@/lib/systemInstruction";
import { createClient } from "@/utils/supabase/client";


const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

function cleanResponseMarkdown(raw: string): string {
  return raw.replace(/```[a-z]*\n?/gi, '').replace(/```/g, '').trim();
}

export default function FormBotPage() {
  const [chat, setChat] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<{ question: any; value: any }[]>([]);
  const [question, setQuestion] = useState<any>(null);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [done, setDone] = useState(false);
  const supabase = createClient(); // Initialize Supabase client
  // Helper function to build the final JSON structure from the conversation history
// Helper function to build the final JSON structure from the conversation history
const populateFinalJSON = (history) => {
  const finalData = {
    demographics: {
      name: '',
      dateOfBirth: '',
      gender: '',
      contactInfo: '',
      address: '',
      preferredPronouns: '',
    },
    chiefComplaint: {
      "skos:prefLabel": '',
      "icd:specificAnatomy": '',
      "icd:hasSeverity": '',
      "icd:course": '',
      "icd:mechanismOfInjury": '',
    },
    historyOfPresentIllness: {
      onsetDate: '',
      duration: '',
      frequency: '',
      aggravatingFactors: '',
      relievingFactors: '',
      associatedSymptoms: '',
    },
    pastMedicalHistory: [],
    medications: [],
    allergies: [],
    familyHistory: [],
    socialHistory: {
      smoking: '',
      alcohol: '',
      occupation: '',
      physicalActivity: '',
      dailyActivity: '',
    },
    reviewOfSystems: {
      weightChanges: '',
      fatigue: '',
      feverChillsNightSweats: '',
      cardiovascular: '',
      gastrointestinal: '',
      skinChanges: '',
      neurological: '',
      musculoskeletal: '',
    },
    diagnosticImpressions: [],
  };

  history.forEach((entry) => {
    const key = entry.question.fieldKey;
    const value = entry.value;

    // Handle Object sections:
    if (key.startsWith('demographics.')) {
      const field = key.split('.')[1];
      finalData.demographics[field] = value;
    } else if (key.startsWith('chiefComplaint.')) {
      const field = key.split('.')[1];
      if (field === 'description' || field === 'skos:prefLabel') {
        finalData.chiefComplaint["skos:prefLabel"] = value;
      } else if (field === 'specificAnatomy') {
        finalData.chiefComplaint["icd:specificAnatomy"] = value;
      } else if (field === 'painScale' || field === 'hasSeverity') {
        finalData.chiefComplaint["icd:hasSeverity"] = value;
      } else if (field === 'course') {
        finalData.chiefComplaint["icd:course"] = value;
      } else if (field === 'mechanismOfInjury') {
        finalData.chiefComplaint["icd:mechanismOfInjury"] = value;
      }
    } else if (key.startsWith('historyOfPresentIllness.')) {
      const field = key.split('.')[1];
      finalData.historyOfPresentIllness[field] = value;
    } else if (key.startsWith('socialHistory.')) {
      const field = key.split('.')[1];
      finalData.socialHistory[field] = value;
    } else if (key.startsWith('reviewOfSystems.')) {
      const field = key.split('.')[1];
      finalData.reviewOfSystems[field] = value;
    }
    // Handle Array sections:
    else if (key.startsWith('pastMedicalHistory.')) {
      const parts = key.split('.');
      if (parts.length === 3 && !isNaN(parts[1])) {
        // Format: pastMedicalHistory.<index>.<field>
        const index = parseInt(parts[1], 10);
        const field = parts[2];
        if (!finalData.pastMedicalHistory[index]) {
          finalData.pastMedicalHistory[index] = {};
        }
        finalData.pastMedicalHistory[index][field] = value;
      } else if (parts.length === 2) {
        // Non-indexed key: pastMedicalHistory.<field>
        const field = parts[1];
        if (finalData.pastMedicalHistory.length === 0) {
          finalData.pastMedicalHistory.push({});
        }
        let lastEntry = finalData.pastMedicalHistory[finalData.pastMedicalHistory.length - 1];
        if (!lastEntry.hasOwnProperty(field)) {
          lastEntry[field] = value;
        } else {
          finalData.pastMedicalHistory.push({ [field]: value });
        }
      }
    } else if (key.startsWith('medications.')) {
      const parts = key.split('.');
      if (parts.length === 3 && !isNaN(parts[1])) {
        const index = parseInt(parts[1], 10);
        const field = parts[2];
        if (!finalData.medications[index]) {
          finalData.medications[index] = {};
        }
        finalData.medications[index][field] = value;
      } else if (parts.length === 2) {
        const field = parts[1];
        if (finalData.medications.length === 0) {
          finalData.medications.push({});
        }
        let lastEntry = finalData.medications[finalData.medications.length - 1];
        if (!lastEntry.hasOwnProperty(field)) {
          lastEntry[field] = value;
        } else {
          finalData.medications.push({ [field]: value });
        }
      }
    } else if (key.startsWith('allergies.')) {
      const parts = key.split('.');
      if (parts.length === 3 && !isNaN(parts[1])) {
        const index = parseInt(parts[1], 10);
        const field = parts[2];
        if (!finalData.allergies[index]) {
          finalData.allergies[index] = {};
        }
        finalData.allergies[index][field] = value;
      } else if (parts.length === 2) {
        const field = parts[1];
        if (finalData.allergies.length === 0) {
          finalData.allergies.push({});
        }
        let lastEntry = finalData.allergies[finalData.allergies.length - 1];
        if (!lastEntry.hasOwnProperty(field)) {
          lastEntry[field] = value;
        } else {
          finalData.allergies.push({ [field]: value });
        }
      }
    } else if (key.startsWith('familyHistory.')) {
      const parts = key.split('.');
      if (parts.length === 3 && !isNaN(parts[1])) {
        const index = parseInt(parts[1], 10);
        const field = parts[2];
        if (!finalData.familyHistory[index]) {
          finalData.familyHistory[index] = {};
        }
        finalData.familyHistory[index][field] = value;
      } else if (parts.length === 2) {
        const field = parts[1];
        if (finalData.familyHistory.length === 0) {
          finalData.familyHistory.push({});
        }
        let lastEntry = finalData.familyHistory[finalData.familyHistory.length - 1];
        if (!lastEntry.hasOwnProperty(field)) {
          lastEntry[field] = value;
        } else {
          finalData.familyHistory.push({ [field]: value });
        }
      }
    } else if (key.startsWith('diagnosticImpressions.')) {
      const parts = key.split('.');
      if (parts.length === 3 && !isNaN(parts[1])) {
        const index = parseInt(parts[1], 10);
        const field = parts[2];
        if (!finalData.diagnosticImpressions[index]) {
          finalData.diagnosticImpressions[index] = { isPrimary: false };
        }
        finalData.diagnosticImpressions[index][field] = value;
        if (field === 'isPrimary') {
          finalData.diagnosticImpressions[index][field] = value === 'true' || value === true;
        }
      } else if (parts.length === 2) {
        const field = parts[1];
        if (finalData.diagnosticImpressions.length === 0) {
          finalData.diagnosticImpressions.push({ isPrimary: false });
        }
        let lastEntry = finalData.diagnosticImpressions[finalData.diagnosticImpressions.length - 1];
        if (!lastEntry.hasOwnProperty(field)) {
          lastEntry[field] = value;
        } else {
          finalData.diagnosticImpressions.push({ [field]: value, isPrimary: false });
        }
        if (field === 'isPrimary') {
          finalData.diagnosticImpressions[finalData.diagnosticImpressions.length - 1][field] = value === 'true' || value === true;
        }
      }
    }
  });

  return finalData;
};



const saveDataToSupabase = async (finalJSON, history) => {
  // 1) Extract the patient's name directly
  const patientName = finalJSON.demographics?.name || "Unknown";

  // 2) Attempt to parse an email from 'contactInfo' 
  //    (if you store the email directly in `finalJSON.demographics.email`, just use that)
  let patientEmail = "";
  const contactInfo = finalJSON.demographics?.contactInfo || "";
  const emailMatch = contactInfo.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
  if (emailMatch) {
    patientEmail = emailMatch[0];
  }

  try {
    const { data, error } = await supabase
      .from('form_data')
      .insert([
        {
          session_id: crypto.randomUUID(),   // or use your own ID strategy
          patient_name: patientName,
          patient_email: patientEmail,
          final_json: finalJSON,              // The final structured JSON
          chat_history: history,             // The entire Q&A flow
        },
      ]);

    if (error) {
      console.error('❌ Error saving data to Supabase:', error.message);
    } else {
      console.log('✅ Data successfully saved to Supabase:', data);
    }
  } catch (err) {
    console.error('⚠️ Unexpected error:', err);
  }
};

  
  // 👀 On mount
  useEffect(() => {
    const initChat = async () => {
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        generationConfig,
        systemInstruction,
      });

      const session = await model.startChat({ history: [] });
      setChat(session);

      const result = await session.sendMessage('start');
      const cleaned = cleanResponseMarkdown(result.response.text());
      const parsed = JSON.parse(cleaned);
      setQuestion(parsed);
    };

    initChat();
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem('formResponses', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (done) {
      const finalJSON = populateFinalJSON(history);
      console.log("Final Structured JSON:", JSON.stringify(finalJSON, null, 2));
  
      // Check for missing fields
      const missingFields = [];
      // Check demographics
      Object.entries(finalJSON.demographics).forEach(([key, value]) => {
        if (!value) missingFields.push(`demographics.${key}`);
      });
      // Check chiefComplaint
      Object.entries(finalJSON.chiefComplaint).forEach(([key, value]) => {
        if (!value) missingFields.push(`chiefComplaint.${key}`);
      });
      // Check historyOfPresentIllness
      Object.entries(finalJSON.historyOfPresentIllness).forEach(([key, value]) => {
        if (!value) missingFields.push(`historyOfPresentIllness.${key}`);
      });
      // Check socialHistory
      Object.entries(finalJSON.socialHistory).forEach(([key, value]) => {
        if (!value) missingFields.push(`socialHistory.${key}`);
      });
      // Check reviewOfSystems
      Object.entries(finalJSON.reviewOfSystems).forEach(([key, value]) => {
        if (!value) missingFields.push(`reviewOfSystems.${key}`);
      });
      // Optionally check other array sections if needed
  
      console.log("Missing Fields:", missingFields);
      saveDataToSupabase(finalJSON,history);

    }
  }, [done, history]);
  
  
  

  const handleSubmit = async () => {
    if (!chat || !question?.fieldKey) return;

    const value = input;
    const newHistory = [...history.slice(0, currentIndex), { question, value }];
    setHistory(newHistory);
    setCurrentIndex((i) => i + 1);
    setInput('');

    const responseObj = JSON.stringify({ fieldKey: question.fieldKey, value });
    const result = await chat.sendMessage(responseObj);
    const cleaned = cleanResponseMarkdown(result.response.text());

    try {
      const parsed = JSON.parse(cleaned);
      if (parsed.type === 'done') {
        setDone(true);
        setQuestion(null);
      } else {
        setQuestion(parsed);
      }
    } catch (err) {
      console.error('Failed to parse Gemini response:', err);
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
    setHistory([]);
    setCurrentIndex(0);
    setInput('');
    setDone(false);
    localStorage.removeItem('formResponses');
    location.reload(); // quick reset
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const renderInput = () => {
    switch (question?.type) {
      case 'input':
        return (
          <input
  ref={inputRef}
  type={question.fieldType === 'number' ? 'number' : question.fieldType === 'date' ? 'date' : 'text'}
  placeholder={question.placeholder || ''}
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={handleKeyPress}
  className="w-full text-black text-xl p-3 rounded border border-gray-300 bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

        );
  
      case 'scale':
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
  
        case 'select':
          return (
            <div className="grid grid-cols-2 gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const selected = option;
                    const newHistory = [...history.slice(0, currentIndex), { question, value: selected }];
                    setHistory(newHistory);
                    setCurrentIndex((i) => i + 1);
                    setInput('');
        
                    const responseObj = JSON.stringify({ fieldKey: question.fieldKey, value: selected });
                    chat.sendMessage(responseObj).then((result) => {
                      const cleaned = cleanResponseMarkdown(result.response.text());
                      try {
                        const parsed = JSON.parse(cleaned);
                        if (parsed.type === 'done') {
                          setDone(true);
                          setQuestion(null);
                        } else {
                          setQuestion(parsed);
                        }
                      } catch (err) {
                        console.error('Failed to parse Gemini response:', err);
                      }
                    });
                  }}
                  className={`px-4 py-2 rounded shadow text-green-700 bg-white hover:bg-green-100 transition ${
                    input === option ? 'ring-2 ring-white' : ''
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
  
  
  

  return (
    <div className="bg-white text-blue-700 flex flex-col justify-start items-center px-4 transition-all">
      <div className="w-full max-w-xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={done ? 'summary' : question?.fieldKey || 'loading'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {done ? (
              <>
                <h2 className="text-2xl font-bold mb-6">✅ Summary</h2>
                <div className="bg-blue-50 text-blue-800 rounded-md p-6 mb-6 text-left space-y-3">
                  {history.map((entry, index) => (
                    <div key={index}>
                      <strong>{entry.question.label}</strong>
                      <p>{entry.value}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleRestart}
                  className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition"
                >
                  Restart ↺
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-6">{question?.label || 'Loading...'}</h2>
  
                {renderInput()}
  
                {(question?.fieldType !== 'scale' && question?.type !== 'select') && (
                  <div className="flex justify-between items-center mt-6">
                    <button
                      onClick={handleBack}
                      className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition"
                    >
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
  );
  
}
