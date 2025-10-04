"use client";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AIMentor() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm Vibe, your AI mentor. How can I help you prepare for your interview today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { type: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Great question! Let me help you with that...",
        "Here's what you need to know about React Hooks...",
        "SQL joins can be tricky. Let's break it down step by step.",
        "That's an excellent topic to master for interviews!",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: "bot", text: randomResponse }]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Mentor</h1>
            <p className="text-xl text-gray-700">Chat with Vibe, your AI interview coach</p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/80 flex flex-col overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 p-8 overflow-y-auto space-y-4">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start gap-3 max-w-2xl ${message.type === "user" ? "flex-row-reverse" : ""}`}>
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === "user" ? "bg-[#7ec4b6]" : "bg-gradient-to-br from-purple-200 to-pink-200"
                    }`}>
                      <span className="text-2xl">{message.type === "user" ? "👤" : "🤖"}</span>
                    </div>
                    
                    {/* Message Bubble */}
                    <div className={`px-6 py-4 rounded-2xl ${
                      message.type === "user" 
                        ? "bg-[#7ec4b6] text-white" 
                        : "bg-white/90 text-gray-800 border border-gray-200"
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start gap-3 max-w-2xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center flex-shrink-0">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="text-2xl"
                    >
                      🤖
                    </motion.span>
                  </div>
                  <div className="px-6 py-4 rounded-2xl bg-white/90 border border-gray-200">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 rounded-full bg-gray-400"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-gray-400"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 rounded-full bg-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200/50 bg-white/50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about interview prep..."
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#7ec4b6] focus:outline-none bg-white/90 backdrop-blur-sm shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="px-8 py-4 rounded-full bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-all shadow-lg"
              >
                Send
              </motion.button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Explain React Hooks", "SQL Joins Tutorial", "Python Best Practices", "Interview Tips"].map((topic) => (
                <motion.button
                  key={topic}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setInput(topic);
                    setTimeout(handleSend, 100);
                  }}
                  className="px-4 py-2 rounded-full bg-white/70 hover:bg-white/90 border border-gray-200 text-sm font-medium text-gray-700 transition-all"
                >
                  {topic}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
