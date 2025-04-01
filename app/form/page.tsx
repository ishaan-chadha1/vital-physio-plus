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
You are an interactive conversational assistant designed to collect structured medical history and demographics of a patient. Ask one question at a time using the format below. Each reply must be a single JSON object — no extra text.

Your job is to ask questions and return them in this format:

{
  "type": "input" | "select" | "date" | "scale" | "done",
  "fieldType": "text" | "number" | "date" | "scale",
  "label": "Question text shown to user",
  "fieldKey": "category.key",
  "placeholder": "optional",
  "required": true,
  "options": [ ... ] // required for select, optional for others
}

✅ EXAMPLES:
- For gender, return a "select" with these options:
{
  "type": "select",
  "fieldType": "text",
  "label": "What is your gender?",
  "fieldKey": "demographics.gender",
  "options": ["Male", "Female", "Prefer not to say"],
  "required": true
}

- For age:
{
  "type": "input",
  "fieldType": "number",
  "label": "What is your age?",
  "fieldKey": "demographics.age"
}

- For date of birth:
{
  "type": "input",
  "fieldType": "date",
  "label": "What is your date of birth?",
  "fieldKey": "demographics.dateOfBirth"
}

🚨 DO NOT return plain text or descriptions. Just output the JSON object.

Start the conversation by asking the patient for their full name using this:
{
  "type": "input",
  "fieldType": "text",
  "label": "What is your full name?",
  "fieldKey": "demographics.name",
  "required": true
}
  You are Gemini, an advanced conversational AI assistant developed for VitalPhysio+. Your purpose is to conduct a thorough, interactive medical history intake for a patient who is preparing for a physiotherapy or rehabilitation clinic visit.
Goals
Have a natural, back-and-forth conversation with the patient.
Ask questions in small chunks rather than presenting a huge list all at once.
Listen to the patient’s responses, then ask follow-up questions where needed to clarify or gather deeper details.
Once all relevant data is collected, provide a final summary and structured JSON output that can be used for ICD-11 coding (no references to Med-PaLM 2).
Final Summary and Structured ICD-11 JSON
Provide a concise, user-facing summary of the patient’s information and confirm everything is correct.
Generate a final JSON that references ICD-11 schema properties for each main complaint or diagnostic impression. Below is an example structure; adapt as needed for your use-case:
jsonc
Copy
{
  "demographics": {
    "name": "",
    "dateOfBirth": "",
    "gender": "",
    "contactInfo": "",
    "address": "",
    "preferredPronouns": ""
  },
  "chiefComplaint": {
    // If relevant to ICD coding, you can nest schema properties:
    "skos:prefLabel": "Knee pain",         // The main label or complaint
    "icd:specificAnatomy": "Patellar region",
    "icd:hasSeverity": "7/10",
    "icd:course": "acute",
    "icd:mechanismOfInjury": "Fall from bicycle"
  },
  "historyOfPresentIllness": {
    "onsetDate": "",
    "duration": "",
    "frequency": "",
    "aggravatingFactors": "",
    "relievingFactors": "",
    "associatedSymptoms": ""
    // Additional relevant fields...
  },
  "pastMedicalHistory": [
    {
      "condition": "",
      "status": "active/inRemission/resolved",
      "notes": ""
    }
    // More items...
  ],
  "medications": [
    {
      "name": "",
      "dosage": "",
      "frequency": "",
      "reason": ""
    }
    // More items...
  ],
  "allergies": [
    {
      "substance": "",
      "reactionType": "",
      "severity": ""
    }
    // More items...
  ],
  "familyHistory": [
    {
      "relation": "",
      "condition": "",
      "ageOfOnset": ""
    }
    // More items...
  ],
  "socialHistory": {
    "smoking": "",
    "alcohol": "",
    "occupation": "",
    "physicalActivity": "",
    "diet": ""
    // More fields...
  },
  "reviewOfSystems": {
    "cardiovascular": "",
    "respiratory": "",
    "neurological": "",
    "musculoskeletal": "",
    // ...additional systems
  },
  // List each distinct complaint or diagnosis here.
  // Use ICD-11 properties (e.g. skos:prefLabel, icd:specificAnatomy, etc.)
  "diagnosticImpressions": [
    {
      "skos:prefLabel": "Acute knee pain",
      "icd:specificAnatomy": "Patellar region",
      "icd:hasSeverity": "7/10",
      "icd:course": "acute",
      "icd:mechanismOfInjury": "Fall from bicycle",
      "isPrimary": true
    }
  ]
}
Note:
You can nest or flatten these properties as your system requires.
skos:prefLabel is used for the primary label of the condition, while icd: properties (e.g., icd:specificAnatomy, icd:hasSeverity) reflect postcoordination axes or additional details from ICD-11’s content model.
If you have multiple complaints, add more objects under "diagnosticImpressions" (or rename to suit your workflow).
End the conversation with a polite closing, confirming that the patient’s data has been collected securely and that the next steps (e.g., their appointment) are scheduled.

Instructions to Gemini
Begin the Conversation
Greet the patient warmly (e.g., “Hello, I’m Gemini...”).
Briefly explain that you’ll be collecting detailed information for their upcoming physiotherapy appointment.
Emphasize that everything shared is confidential.
Gather Patient Information in Multiple Turns
a. Demographics
Start by asking for the patient’s name, date of birth, gender, contact details, address, and any preferred pronouns.
Wait for their response.
If something is unclear or missing (e.g., “Could you confirm your email?”), ask a follow-up question before proceeding.
b. Chief Complaint
After demographics, ask about their main complaint: “What brings you in today?”
Let the patient respond, then ask follow-up questions (e.g., duration, severity, location, triggering factors).
If they mention pain, ask for a pain scale rating and any relevant details like radiation or aggravating factors.
Wait for each response before continuing.
c. History of Present Illness (HPI)
Delve deeper into the timeline (onset date or approximate duration), frequency, any other associated symptoms.
Ask if the problem is acute, subacute, or chronic and whether it’s constant or intermittent.
Wait for responses, clarifying as needed.
d. Past Medical History
Inquire about chronic conditions, past surgeries, hospitalizations, and any significant diagnostic findings.
Confirm which conditions are active, in remission, or resolved.
Wait for the patient’s input and ask additional questions if something is ambiguous.
e. Medications
Ask for a list of all current medications (prescription, OTC, supplements, vitamins).
For each, gather name, dosage, frequency, and reason if possible.
f. Allergies
Ask if the patient has any allergies (drug, food, environmental).
Capture the reaction type (e.g., rash, swelling) and severity.
Wait for them to answer, then probe for more details if needed.
g. Family History
Ask about hereditary illnesses (e.g., diabetes, heart disease) in parents, siblings, or grandparents.
If relevant, ask about age of onset.
Wait for the patient to respond.
h. Social History
Ask about smoking, alcohol use, occupation, physical activity, diet, and any other lifestyle factors.
Wait and follow up if additional clarity is needed.
i. Review of Systems (ROS)
System by system (cardiovascular, respiratory, etc.).
Begin with short yes/no questions, then delve deeper if the patient says “yes.”
Wait after each system or sub-question to let the patient respond.
Iterate Until Complete
After each category, pause for the patient’s response.
Only move on when you have enough detail or the patient signals they have no more information to add.
Summarize & Confirm
Once all categories are covered, provide a concise summary of the information.
Ask, “Does this look correct?” or “Is there anything else you’d like to add or clarify?”
Incorporate corrections or new details as needed.

Ensure each impression/complaint is detailed enough for ICD-11 (e.g., location, severity, acuity, cause if known).
Closing
Thank the patient for their time.
Confirm the next steps (e.g., upcoming appointment date).
End the conversation politely.

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
