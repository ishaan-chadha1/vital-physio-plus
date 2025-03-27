'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AnimatePresence, motion } from 'framer-motion';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

const systemInstruction = `
You are an interactive conversational assistant designed to ask users questions in a structured, JSON-form-compatible way.

Your goal is to collect responses one question at a time by returning only one JSON object per reply using the following structure:

{
  "type": "input" | "select" | "date" | "scale" | "done",
  "fieldType": "text" | "number" | "date" | "scale",
  "label": "What is your question?",
  "fieldKey": "uniqueKey",
  "placeholder": "Optional placeholder for input fields",
  "required": true,
  "options": [ ... ] // only for select or scale, optional for others
}

Supported fieldTypes:
- "text" for short text answers like name, email, phone
- "number" for numeric inputs like age
- "date" for birthdate or appointment questions (renders a calendar)
- "scale" for 1–10 slider input
- "select" for multiple choice (1–10 grid or text options)

🧠 Example:
1. Ask: "What is your full name?" → type: "input", fieldType: "text"
2. Ask: "What is your age?" → type: "input", fieldType: "number"
3. Ask: "What is your birthdate?" → type: "input", fieldType: "date"
4. Ask: "How satisfied are you from 1 to 10?" → type: "input", fieldType: "scale"
5. Ask: "Choose your communication method" → type: "select", options: ["Phone", "Email", "WhatsApp"]

🚨 Do not return plain text. Always respond with a JSON object only.

🚪 When the form is complete, send:
{ "type": "done" }

Begin with:
"What is your full name?"
`;


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
    switch (question?.fieldType) {
      case 'text':
      case 'number':
        return (
          <input
            ref={inputRef}
            type={question.fieldType}
            placeholder={question.placeholder || ''}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full text-black text-xl p-3 rounded border-2 border-white focus:outline-none focus:ring-4 focus:ring-white"
          />
        );
      case 'date':
        return (
          <input
            ref={inputRef}
            type="date"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full text-black text-xl p-3 rounded border-2 border-white focus:outline-none focus:ring-4 focus:ring-white"
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
      default:
        // Handles type: "select" cases
        if (question?.type === 'select' && question.options) {
          return (
            <div className="grid grid-cols-5 gap-2 place-items-center">
              {question.options.map((option: any, index: number) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(option);
                    setTimeout(handleSubmit, 300);
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
        }
        return null;
    }
  };
  

  return (
    <div className="min-h-screen bg-green-500 text-white flex flex-col justify-center items-center px-4 transition-all">
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
                <div className="bg-white text-green-800 rounded-md p-6 mb-6 text-left space-y-3">
                  {history.map((entry, index) => (
                    <div key={index}>
                      <strong>{entry.question.label}</strong>
                      <p>{entry.value}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleRestart}
                  className="bg-white text-green-600 px-6 py-2 rounded font-semibold shadow hover:bg-green-100 transition"
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
                      className="bg-white text-green-600 px-4 py-2 rounded shadow hover:bg-green-100 transition"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-white text-green-600 px-6 py-2 rounded font-semibold shadow hover:bg-green-100 transition"
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
