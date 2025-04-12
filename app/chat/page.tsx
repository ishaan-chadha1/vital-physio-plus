"use client";

import { useState, useRef, useEffect } from "react";
import systemInstructions from "@/lib/systemInstructions";
import {
  Plus,
  Globe,
  Search,
  MoreHorizontal,
  Mic,
  Send,
  Loader2,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
const getISTTimestamp = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 330); // Add 5 hours 30 minutes
  return now.toISOString().replace("T", " ").slice(0, 19); // Optional: format to 'YYYY-MM-DD HH:mm:ss'
};

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
  const supabase = createClient(); // Initialize Supabase client

  const saveDataToSupabase = async (
    name: string,
    email: string,
    phone: string,
    chatHistory: Message[],
    extractedJson: any
  ) => {
    try {
      const { error } = await supabase.from("gemini_data").insert([
        {
          session_id: crypto.randomUUID(), // Generate a unique session ID
          timestamp: getISTTimestamp(),
          patient_name: name,
          patient_email: email,
          patient_phone: phone,
          chat_history: chatHistory, // Store entire chat history
          extracted_json: extractedJson, // Store structured patient data
        },
      ]);

      if (error) {
        console.error("❌ Error saving data to Supabase:", error.message);
      } else {
        console.log("✅ Data successfully saved to Supabase!");
      }
    } catch (err) {
      console.error("⚠️ Unexpected error:", err);
    }
  };

  useEffect(() => {
    initializeChat();
    if (inputRef.current) inputRef.current.focus();

    // ✅ Load chat history from localStorage
    const savedHistory = localStorage.getItem("chatHistory");
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);
  // Auto-scroll to the bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      timestamp: getISTTimestamp(),
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
      const jsonMatch = responseText.match(
        /```jsonc?\n([\s\S]*?)\n```|```json\n([\s\S]*?)\n```/
      );

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
            jsonOutput = JSON.parse(
              responseText.substring(jsonStart, jsonEnd + 1)
            );
          } catch (error) {
            console.warn("⚠️ Failed to parse JSON from inline text:", error);
          }
        }
      }

      // ✅ Log extracted JSON
      console.log(
        "🟢 Extracted JSON Output:",
        jsonOutput ? JSON.stringify(jsonOutput, null, 2) : "No JSON detected."
      );

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
        // ✅ Log extracted details to verify correctness
        console.log("🩺 Patient Name:", extractedName);
        console.log("📞 Patient Phone:", extractedPhone);
        console.log("📧 Patient Email:", extractedEmail);

        // ✅ Save to Supabase
        await saveDataToSupabase(
          extractedName,
          extractedEmail,
          extractedPhone,
          chatHistory,
          jsonOutput
        );
      }

      // // ✅ Log extracted details AFTER state updates
      // setTimeout(() => {
      //   console.log("🩺 Patient Name:", patientName || "Not provided");
      //   console.log("📞 Patient Phone:", patientPhone || "Not provided");
      // }, 500); // Delay to ensure state updates

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: jsonOutput
          ? "✅ Your information has been recorded."
          : responseText,
        sender: "ai",
        timestamp: getISTTimestamp(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setChatHistory((prev) => {
        const updatedHistory = [...prev, aiMessage];

        // ✅ Save chat history to localStorage
        localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));

        // ✅ Log the chat history immediately after update
        const chatJSON = getChatHistoryJSON(updatedHistory);
        console.log(
          "📜 Updated Chat History:",
          JSON.stringify(chatJSON, null, 2)
        );

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
          timestamp: getISTTimestamp(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  const getChatHistoryJSON = (history) => ({
    sessionId: crypto.randomUUID(),
    timestamp: getISTTimestamp(),
    messages: [...history], // ✅ Uses latest history instead of stale state
  });

  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full bg-[#38bdf8] text-white px-4 py-6 sm:px-6">
      {/* HEADER */}
      {/* CHAT CONTAINER */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 flex flex-col justify-between h-[70vh] sm:h-[75vh] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 className="text-5xl font-bold text-[#38bdf8] opacity-30 select-none">
            Vital Physio +
          </h1>
        </div>
        <div className="overflow-y-auto flex-1 space-y-4 pr-2 scroll-smooth custom-scrollbar">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm text-sm sm:text-base ${
                    message.sender === "user"
                      ? "bg-[#38bdf8] text-white rounded-br-none"
                      : "bg-[#f0f9ff] text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                  <p className="text-[11px] mt-1 text-black-400 text-right">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-gray-200 text-gray-900 rounded-2xl px-4 py-3 shadow animate-pulse">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* INPUT FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl mx-auto bg-white rounded-full px-5 py-3 shadow-lg flex items-center"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask anything..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 border-none outline-none text-sm sm:text-base"
        />
        {inputValue.trim() && (
          <motion.button
            type="submit"
            whileTap={{ scale: 0.9 }}
            className="ml-2 p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Send size={20} className="text-gray-600" />
          </motion.button>
        )}
      </form>
    </div>
  );
}
