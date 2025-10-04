"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function TestAPI() {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");

  const testGeminiConnection = async () => {
    setLoading(true);
    setTestResult(null);
    try {
      const response = await fetch('/api/test-gemini');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ error: error.message });
    }
    setLoading(false);
  };

  const testCustomPrompt = async () => {
    if (!customPrompt.trim()) return;
    
    setLoading(true);
    setTestResult(null);
    try {
      const response = await fetch('/api/test-gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: customPrompt }),
      });
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ error: error.message });
    }
    setLoading(false);
  };

  const testPlanGeneration = async () => {
    setLoading(true);
    setTestResult(null);
    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          jobDescription: "Full Stack Developer with React, Node.js, and MongoDB experience. Must know AWS deployment." 
        }),
      });
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-[#7ec4b6] hover:text-[#6eb4a6] font-medium mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">API Testing Dashboard</h1>
          <p className="text-xl text-gray-700">Test Gemini AI endpoints</p>
        </div>

        {/* Test Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={testGeminiConnection}
            disabled={loading}
            className="px-6 py-4 rounded-xl bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold shadow-lg disabled:opacity-50 transition-all"
          >
            Test Connection
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={testPlanGeneration}
            disabled={loading}
            className="px-6 py-4 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-lg disabled:opacity-50 transition-all"
          >
            Test Plan Generation
          </motion.button>

          <Link href="/generate">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg transition-all"
            >
              Go to Generate Page
            </motion.button>
          </Link>
        </div>

        {/* Custom Prompt Test */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Test Custom Prompt</h3>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Enter your custom prompt here..."
            className="w-full h-24 p-4 rounded-xl border-2 border-gray-300 focus:border-[#7ec4b6] focus:outline-none resize-none bg-white/90 mb-4"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={testCustomPrompt}
            disabled={loading || !customPrompt.trim()}
            className="px-6 py-3 rounded-xl bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold shadow-lg disabled:opacity-50 transition-all"
          >
            Test Custom Prompt
          </motion.button>
        </motion.div>

        {/* Loading */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4"
            >
              🤖
            </motion.div>
            <p className="text-xl font-semibold text-gray-800">Testing API...</p>
          </motion.div>
        )}

        {/* Results */}
        {testResult && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">API Response</h3>
              {testResult.success && (
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  ✓ Success
                </span>
              )}
              {testResult.error && (
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold">
                  ✗ Error
                </span>
              )}
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-auto max-h-96 text-sm">
              {JSON.stringify(testResult, null, 2)}
            </pre>
          </motion.div>
        )}

        {/* API Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80 mt-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Available Endpoints</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <code className="text-sm font-mono text-blue-700">GET /api/test-gemini</code>
              <p className="text-sm text-gray-600 mt-1">Test Gemini API connection</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <code className="text-sm font-mono text-purple-700">POST /api/test-gemini</code>
              <p className="text-sm text-gray-600 mt-1">Test with custom prompt</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <code className="text-sm font-mono text-green-700">POST /api/generate-plan</code>
              <p className="text-sm text-gray-600 mt-1">Generate interview preparation plan</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <code className="text-sm font-mono text-orange-700">POST /api/generate-plan-stream</code>
              <p className="text-sm text-gray-600 mt-1">Generate plan with streaming</p>
            </div>
          </div>
        </motion.div>

        {/* Environment Check */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-6 mt-8"
        >
          <h3 className="text-lg font-bold text-yellow-900 mb-2">⚠️ Environment Setup</h3>
          <p className="text-sm text-yellow-800">
            Make sure you have set up your <code className="bg-yellow-100 px-2 py-1 rounded">GEMINI_API_KEY</code> in your <code className="bg-yellow-100 px-2 py-1 rounded">.env.local</code> file.
          </p>
          <p className="text-sm text-yellow-800 mt-2">
            Get your API key from: <a href="https://makersuite.google.com/app/apikey" target="_blank" className="underline font-semibold">Google AI Studio</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
