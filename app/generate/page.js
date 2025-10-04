"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function GeneratePlan() {
  const { data: session } = useSession();
  const [jobDescription, setJobDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingMessages = [
    "Extracting Skills...",
    "Mapping Topics...",
    "Building Plan...",
    "Finalizing Your Roadmap..."
  ];

  const handleGenerate = async () => {
    if (!jobDescription.trim()) return;
    
    setIsGenerating(true);
    setLoadingStep(0);
    
    // Simulate loading steps
    const interval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobDescription }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate plan');
      }

      const data = await response.json();
      
      // Clear the loading interval
      clearInterval(interval);
      
      // Small delay for better UX
      setTimeout(() => {
        setIsGenerating(false);
        setGeneratedPlan(data);
      }, 1000);

    } catch (error) {
      console.error('Error generating plan:', error);
      clearInterval(interval);
      setIsGenerating(false);
      
      // Show fallback plan on error
      setGeneratedPlan({
        skills: ["JavaScript", "React", "Node.js", "SQL"],
        projects: [
          { title: "Build a Task Management App", icon: "✅" },
          { title: "Create REST API with Authentication", icon: "🔐" },
          { title: "Database Design Project", icon: "🗄️" }
        ],
        questions: [
          { title: "Explain React Component Lifecycle", icon: "⚛️" },
          { title: "Database Optimization Techniques", icon: "🚀" },
          { title: "API Security Best Practices", icon: "🔒" }
        ],
        resources: [
          { title: "React Official Documentation", icon: "📚" },
          { title: "Node.js Best Practices Guide", icon: "📖" },
          { title: "SQL Tutorial Series", icon: "🎥" }
        ],
        timeline: [
          { title: "Week 1-2: Core Concepts Review", icon: "📅" },
          { title: "Week 3-4: Project Implementation", icon: "⏱️" }
        ]
      });
    }
  };

  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 xl:pt-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Generate Your Plan</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">AI-Powered Interview Preparation</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto flex-wrap">
            {session ? (
              <Link href="/dashboard" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-sm font-medium text-gray-700 hover:bg-white/90 transition-all"
                >
                  Dashboard
                </motion.button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-sm font-medium text-gray-700 hover:bg-white/90 transition-all"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link href="/signup" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-all"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#7ec4b6]/50">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Paste Job Description</h2>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste your job description here..."
              className="w-full h-32 sm:h-40 p-3 sm:p-4 rounded-xl border-2 border-blue-200 focus:border-[#7ec4b6] focus:outline-none resize-none bg-white/90 backdrop-blur-sm transition-all shadow-sm mb-4 sm:mb-6 text-sm sm:text-base text-gray-900"
            />
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGenerate}
                disabled={!jobDescription.trim() || isGenerating}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold text-base sm:text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Generate My Plan
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-3xl mx-auto mb-8 sm:mb-12"
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl border border-white/80 text-center">
                {/* Animated Mascot */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 10, 0],
                    y: [0, -10, 0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl sm:text-9xl mb-4 sm:mb-6"
                >
                  🤖
                </motion.div>
                
                {/* Floating Icons */}
                <div className="relative h-16 sm:h-24 mb-4 sm:mb-6">
                  <motion.div
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-1/4 top-0 text-2xl sm:text-4xl"
                  >
                    🐍
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute right-1/4 top-0 text-2xl sm:text-4xl"
                  >
                    🗄️
                  </motion.div>
                  <motion.div
                    animate={{ y: [-5, 15, -5], x: [10, -10, 10] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="absolute left-1/2 top-0 text-2xl sm:text-4xl"
                  >
                    ⚛️
                  </motion.div>
                </div>

                {/* Loading Message */}
                <motion.p
                  key={loadingStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lg sm:text-2xl font-bold text-gray-800"
                >
                  {loadingMessages[loadingStep]}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Generated Plan Output */}
        <AnimatePresence>
          {generatedPlan && !isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {/* Skill Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Skill Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {generatedPlan.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 text-gray-800 font-medium text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Mini Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mini Projects</h3>
                <div className="space-y-3">
                  {generatedPlan.projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-pink-100/50 hover:bg-pink-100 transition-all cursor-pointer"
                    >
                      <span className="text-2xl">{project.icon}</span>
                      <span className="text-sm font-medium text-gray-800">{project.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Practice Questions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Questions</h3>
                <div className="space-y-3">
                  {generatedPlan.questions.map((question, index) => (
                    <motion.div
                      key={question.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-cyan-100/50 hover:bg-cyan-100 transition-all cursor-pointer"
                    >
                      <span className="text-2xl">{question.icon}</span>
                      <span className="text-sm font-medium text-gray-800">{question.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Resources / Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resources / Links</h3>
                <div className="space-y-3">
                  {generatedPlan.resources.map((resource, index) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-green-100/50 hover:bg-green-100 transition-all cursor-pointer"
                    >
                      <span className="text-2xl">{resource.icon}</span>
                      <span className="text-sm font-medium text-gray-800">{resource.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline / Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80 md:col-span-2"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline / Schedule</h3>
                <div className="space-y-3">
                  {generatedPlan.timeline.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-orange-100/50 hover:bg-orange-100 transition-all cursor-pointer"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-800">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
