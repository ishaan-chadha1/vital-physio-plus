"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Plus, Globe, Search, MoreHorizontal, Mic, Send, Loader2 } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { GoogleGenerativeAI } from "@google/generative-ai"

type Message = {
    id: string;
    content: string;
    sender: "user" | "ai";
    timestamp: string; // ✅ Ensures consistency with ISO format
  };
  
  
// Initialize the Google Generative AI model
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "")
const model = genAI.getGenerativeModel({ model: "gemini-pro" })

export default function ChatInterface() {
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") as "light" | "dark" || "dark";
    }
    return "dark";
  });
  

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [])
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!inputValue.trim()) return

    const userMessage: Message = {
        id: crypto.randomUUID(), // Generates a stable unique ID
        content: inputValue,
        sender: "user",
        timestamp: new Date().toISOString(), // Ensure timestamp is stable
      };

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      const result = await model.generateContent(inputValue)
      const response = await result.response
      const text = response.text()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: text,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error generating response:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error while processing your request. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return (
    <div
      className={`flex flex-col items-center justify-between min-h-screen ${theme === "dark" ? "bg-[#1a1a1a] text-white" : "bg-gray-100 text-gray-900"} p-4 transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center mb-4 px-6">
        <h1 className="text-2xl font-bold">Vital Physio + </h1>
      </div>

      {messages.length === 0 ? (
        <div className="w-full max-w-3xl mx-auto mt-20 flex-grow flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-8"
          >
            What can I help with?
          </motion.h2>
        </div>
      ) : (
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
                    className={`max-w-[90%] md:max-w-[70%] rounded-2xl px-4 py-3${
                      message.sender === "user"
                        ? `${theme === "dark" ? "bg-[#4a4a4a]" : "bg-blue-500"} text-white rounded-tr-none`
                        : `${theme === "dark" ? "bg-[#2a2a2a]" : "bg-gray-200"} ${theme === "dark" ? "text-white" : "text-gray-900"} rounded-tl-none`
                    } shadow-lg`}
                  >
                    <p className="whitespace-pre-wrap break-words">{message.content}</p>
                    <p className="text-xs text-gray-400 mt-1">
  {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
</p>

                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start"
                >
                  <div
                    className={`${theme === "dark" ? "bg-[#2a2a2a] text-white" : "bg-gray-200 text-gray-900"} rounded-2xl rounded-tl-none px-4 py-3 shadow-lg`}
                  >
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

<div className="w-full px-6">
        <form
          onSubmit={handleSubmit}
          className={`relative ${theme === "dark" ? "bg-[#2a2a2a]" : "bg-white"} rounded-2xl p-2 shadow-lg transition-colors duration-300`}
        >
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask anything"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`flex-1 ${theme === "dark" ? "bg-transparent text-white placeholder-gray-400" : "bg-white text-gray-900 placeholder-gray-500"} border-none outline-none py-3 px-4 transition-colors duration-300`}
            />
            {inputValue.trim() && (
              <motion.button
                type="submit"
                className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-[#3a3a3a]" : "hover:bg-gray-100"} transition-colors mr-2`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send size={20} className={theme === "dark" ? "text-gray-300" : "text-gray-600"} />
              </motion.button>
            )}
          </div>

          <div className="flex items-center justify-between mt-2 px-2">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-hide">
              <motion.button
                type="button"
                className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-[#3a3a3a]" : "hover:bg-gray-100"} transition-colors flex-shrink-0`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={20} className={theme === "dark" ? "text-gray-400" : "text-gray-600"} />
              </motion.button>

              <motion.button
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === "dark" ? "bg-[#3a3a3a] hover:bg-[#4a4a4a]" : "bg-gray-200 hover:bg-gray-300"} transition-colors flex-shrink-0`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={18} className={theme === "dark" ? "text-gray-300" : "text-gray-600"} />
                <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Search</span>
              </motion.button>

              <motion.button
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === "dark" ? "bg-[#3a3a3a] hover:bg-[#4a4a4a]" : "bg-gray-200 hover:bg-gray-300"} transition-colors flex-shrink-0`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={18} className={theme === "dark" ? "text-gray-300" : "text-gray-600"} />
                <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Deep research</span>
              </motion.button>

              <motion.button
                type="button"
                className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-[#3a3a3a]" : "hover:bg-gray-100"} transition-colors flex-shrink-0`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MoreHorizontal size={20} className={theme === "dark" ? "text-gray-400" : "text-gray-600"} />
              </motion.button>
            </div>

            <motion.button
              type="button"
              className={`p-2 rounded-full ${theme === "dark" ? "bg-[#3a3a3a] hover:bg-[#4a4a4a]" : "bg-gray-200 hover:bg-gray-300"} transition-colors flex-shrink-0`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mic size={20} className={theme === "dark" ? "text-gray-300" : "text-gray-600"} />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  )
}

