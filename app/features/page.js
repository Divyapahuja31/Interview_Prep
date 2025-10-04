"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CodeExecutor from "../components/CodeExecutor";
import VoiceChat from "../components/VoiceChat";

export default function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState("database");

  const tabs = [
    { id: "database", label: "🗄️ Database", icon: "🗄️" },
    { id: "code", label: "⚡ Code Execution", icon: "⚡" },
    { id: "voice", label: "🎤 Voice Chat", icon: "🎤" },
    { id: "api", label: "🔌 API Testing", icon: "🔌" }
  ];

  return (
    <div className="min-h-screen p-8" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-[#7ec4b6] hover:text-[#6eb4a6] font-medium mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🚀 New Features Showcase</h1>
          <p className="text-xl text-gray-700">Explore the latest additions to your interview prep platform</p>
        </div>

        {/* Implementation Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ Implementation Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { feature: "Real AI Integration (Gemini)", status: "completed", description: "Google Gemini 2.0 Flash API integrated" },
              { feature: "User Authentication (NextAuth)", status: "completed", description: "Google OAuth with session management" },
              { feature: "Database Persistence (Prisma + PostgreSQL)", status: "completed", description: "Full database schema with user data" },
              { feature: "Real-time Code Execution", status: "completed", description: "Sandboxed JavaScript execution" },
              { feature: "Voice Chat with Mascot", status: "completed", description: "Speech recognition & synthesis" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-50 border-2 border-green-200 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 text-xl">✅</span>
                  <h3 className="font-semibold text-green-800">{item.feature}</h3>
                </div>
                <p className="text-sm text-green-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#7ec4b6] text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-white/90'
              }`}
            >
              {tab.icon} {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "database" && (
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🗄️ Database Integration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 Database Schema</h4>
                    <div className="space-y-2">
                      {[
                        "👤 Users - Authentication & profiles",
                        "📋 Interview Plans - AI-generated plans",
                        "📈 User Progress - Skill tracking & XP",
                        "📝 Notes - Personal study notes",
                        "🔐 Sessions & Accounts - NextAuth data"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-2 h-2 bg-[#7ec4b6] rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">🔌 API Endpoints</h4>
                    <div className="space-y-2">
                      {[
                        "GET/POST /api/plans - Manage interview plans",
                        "GET/POST /api/progress - Track user progress",
                        "GET/POST /api/notes - Personal notes system",
                        "All endpoints require authentication",
                        "Automatic data persistence"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    <strong>🔧 Setup Required:</strong> Add DATABASE_URL to your .env.local file and run `npx prisma migrate dev` to create the database.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="space-y-6">
              <CodeExecutor />
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Code Execution Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">🔒 Security Features</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Sandboxed execution environment</li>
                      <li>• 5-second timeout protection</li>
                      <li>• Restricted dangerous operations</li>
                      <li>• No file system access</li>
                      <li>• No network requests allowed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">✨ Supported Features</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• JavaScript ES6+ syntax</li>
                      <li>• Console output capture</li>
                      <li>• Error handling & display</li>
                      <li>• Pre-built code examples</li>
                      <li>• Real-time execution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "voice" && (
            <div className="space-y-6">
              <VoiceChat />
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎤 Voice Chat Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">🗣️ Speech Recognition</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Real-time voice-to-text</li>
                      <li>• Continuous conversation</li>
                      <li>• Multiple language support</li>
                      <li>• Noise cancellation</li>
                      <li>• Browser-based (no server required)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">🔊 AI Responses</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Gemini AI-powered responses</li>
                      <li>• Text-to-speech synthesis</li>
                      <li>• Interview-focused advice</li>
                      <li>• Conversational interface</li>
                      <li>• Animated mascot feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔌 Complete API Overview</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-2 px-4 font-semibold">Endpoint</th>
                        <th className="text-left py-2 px-4 font-semibold">Method</th>
                        <th className="text-left py-2 px-4 font-semibold">Purpose</th>
                        <th className="text-left py-2 px-4 font-semibold">Auth</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {[
                        { endpoint: "/api/auth/[...nextauth]", method: "GET/POST", purpose: "NextAuth handlers", auth: "No" },
                        { endpoint: "/api/test-gemini", method: "GET/POST", purpose: "Test Gemini API", auth: "No" },
                        { endpoint: "/api/generate-plan", method: "POST", purpose: "Generate interview plans", auth: "No" },
                        { endpoint: "/api/generate-plan-stream", method: "POST", purpose: "Streaming plan generation", auth: "No" },
                        { endpoint: "/api/execute-code", method: "POST", purpose: "Execute JavaScript code", auth: "No" },
                        { endpoint: "/api/plans", method: "GET/POST", purpose: "Manage user plans", auth: "Yes" },
                        { endpoint: "/api/progress", method: "GET/POST", purpose: "Track user progress", auth: "Yes" },
                        { endpoint: "/api/notes", method: "GET/POST", purpose: "Personal notes", auth: "Yes" },
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2 px-4 font-mono text-xs bg-gray-50 rounded">{row.endpoint}</td>
                          <td className="py-2 px-4">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{row.method}</span>
                          </td>
                          <td className="py-2 px-4">{row.purpose}</td>
                          <td className="py-2 px-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              row.auth === "Yes" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                            }`}>
                              {row.auth}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex gap-4">
                  <Link href="/test-api">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-all"
                    >
                      🧪 Test APIs
                    </motion.button>
                  </Link>
                  <Link href="/generate">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold transition-all"
                    >
                      🤖 Try AI Generation
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-[#7ec4b6] to-[#a8d5ba] rounded-3xl p-8 text-white mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">🎯 Ready to Use!</h2>
          <p className="text-lg mb-6">
            All major features have been implemented and are ready for testing. Your interview prep platform now includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <span>Real AI-powered interview plan generation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <span>Secure user authentication & data persistence</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <span>Interactive code execution environment</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <span>Voice-powered AI assistant</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-white text-[#7ec4b6] font-semibold hover:bg-gray-100 transition-all"
              >
                📊 Go to Dashboard
              </motion.button>
            </Link>
            <Link href="/generate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-all border-2 border-white/50"
              >
                🚀 Generate Your First Plan
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
