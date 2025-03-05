"use client";

import { useState, useRef, useEffect } from "react";
import {
  Plus,
  Globe,
  Search,
  MoreHorizontal,
  Mic,
  Send,
  Loader2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: string;
};

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// ✅ Debug API Key to check if it's being read
console.log("✅ API KEY LOADED:", API_KEY);
const genAI = new GoogleGenerativeAI(API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default function ChatInterface() {
  const [inputValue, setInputValue] = useState("");
  const [patientName, setPatientName] = useState<string | null>(null);
  const [patientPhone, setPatientPhone] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeChat();
    if (inputRef.current) inputRef.current.focus();
  
    // ✅ Load chat history from localStorage
    const savedHistory = localStorage.getItem("chatHistory");
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);
  

  const initializeChat = async () => {
    if (!chatSession) {
      console.log("🟢 Initializing chat session...");
      const generationConfig = {
        temperature: 1,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ];

      const chat = model.startChat({ generationConfig, safetySettings });
      setChatSession(chat);

      const systemInstructions = `
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
      Important Notes
      Do not dump all questions at once. Prompt–response–prompt–response is key.
      Ask clarifying questions when the patient’s answers are vague.
      Only produce the structured JSON at the very end of the conversation.
      Your final user-facing statement should be a closing that acknowledges the patient’s responses and describes next steps.`;
      await chat.sendMessage(systemInstructions);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: inputValue,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setChatHistory((prev) => {
      const updatedHistory = [...prev, userMessage];
      // console.log("📝 Updated Chat History:", JSON.stringify(updatedHistory, null, 2));
      return updatedHistory;
    });    
    setInputValue("");
    setIsTyping(true);

    try {
      if (!chatSession) {
        console.error("❌ Chat session is not initialized!");
        return;
      }

      const result = await chatSession.sendMessage(inputValue);
      const responseText = await result.response.text();


      let jsonOutput = null;

      // Try extracting JSON from a code block in the response
      const jsonMatch = responseText.match(/```jsonc?\n([\s\S]*?)\n```|```json\n([\s\S]*?)\n```/);
      
      if (jsonMatch) {
        try {
          jsonOutput = JSON.parse(jsonMatch[1] || jsonMatch[2]);
        } catch (error) {
          console.warn("⚠️ Failed to parse extracted JSON:", error);
          jsonOutput = null; // Prevent crashing
        }
        
      } else {
        // Try finding the JSON object within the text response
        const jsonStart = responseText.indexOf("{");
        const jsonEnd = responseText.lastIndexOf("}");
      
        if (jsonStart !== -1 && jsonEnd !== -1) {
          try {
            jsonOutput = JSON.parse(responseText.substring(jsonStart, jsonEnd + 1));
          } catch (error) {
            console.warn("⚠️ Failed to parse JSON from inline text:", error);
          }
        }
      }
      
      // ✅ Log extracted JSON
      console.log("🟢 Extracted JSON Output:", jsonOutput ? JSON.stringify(jsonOutput, null, 2) : "No JSON detected.");
      
      if (jsonOutput && typeof jsonOutput === "object") {
        const demographics = jsonOutput.demographics || {}; // ✅ Extract the demographics section safely
      
        // Extract and set the patient name
        const extractedName = demographics.name || "Not provided";
        setPatientName(extractedName);
      
        // Extract and set the patient phone number
        let extractedPhone = "Not provided";
        if (demographics.contactInfo) {
          const phoneMatch = demographics.contactInfo.match(/\b\d{10,}\b/); // ✅ Extracts only the phone number
          if (phoneMatch) {
            extractedPhone = phoneMatch[0];
          }
        }
        setPatientPhone(extractedPhone);
        let extractedEmail = "Not provided";
        if (demographics.contactInfo) {
          const emailMatch = demographics.contactInfo.match(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
          ); // ✅ Extracts email using regex
          if (emailMatch) {
            extractedEmail = emailMatch[0];
          }
        }
      
        // ✅ Log extracted details to verify correctness
        console.log("🩺 Patient Name:", extractedName);
        console.log("📞 Patient Phone:", extractedPhone);
        console.log("📧 Patient Email:", extractedEmail);
      }
      
      // // ✅ Log extracted details AFTER state updates
      // setTimeout(() => {
      //   console.log("🩺 Patient Name:", patientName || "Not provided");
      //   console.log("📞 Patient Phone:", patientPhone || "Not provided");
      // }, 500); // Delay to ensure state updates
      

      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: jsonOutput ? "✅ Your information has been recorded." : responseText,
        sender: "ai",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setChatHistory((prev) => {
        const updatedHistory = [...prev, aiMessage];
      
        // ✅ Save chat history to localStorage
        localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      
        // ✅ Log the chat history immediately after update
        const chatJSON = getChatHistoryJSON(updatedHistory);
        console.log("📜 Updated Chat History:", JSON.stringify(chatJSON, null, 2));
      
        return updatedHistory;
      });
      
    } catch (error) {
      console.error("❌ Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: "❌ Error: Please try again.",
          sender: "ai",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  const getChatHistoryJSON = (history) => ({
    sessionId: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    messages: [...history], // ✅ Uses latest history instead of stale state
  });
  
  
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Vital Physio +</h1>

      <div className="w-full flex-grow overflow-hidden flex flex-col px-6">
        <div className="overflow-y-auto flex-grow pr-2 space-y-4 pb-2">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-gray-200 text-gray-900 rounded-2xl px-4 py-3 shadow-lg">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl p-2 shadow-lg w-full"
      >
        <div className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask anything"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent text-gray-900 border-none outline-none py-3 px-4"
          />
          {inputValue.trim() && (
            <motion.button
              type="submit"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Send size={20} className="text-gray-600" />
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
}
