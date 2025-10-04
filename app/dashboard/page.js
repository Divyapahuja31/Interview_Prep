"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [skills] = useState([
    { name: "React", progress: 75, color: "#FF6B9D" },
    { name: "SQL", progress: 40, color: "#FFA94D" },
    { name: "Python", progress: 20, color: "#845EC2" },
  ]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <p className="text-xl text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 xl:pt-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Welcome back, {session?.user?.name}!</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">Your Tech Interview Roadmap</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link href="/generate" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-all text-sm sm:text-base"
              >
                Generate New Plan
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Progress Rings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-white/80"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke={skill.color}
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 352" }}
                    animate={{ strokeDasharray: `${(skill.progress / 100) * 352} 352` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </svg>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{skill.progress}%</span>
                  <span className="text-sm text-gray-600">{skill.progress}%</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-gray-900">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Daily Challenge & XP Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Daily Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/80"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Daily Challenge</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">Explain React Hooks</p>
            <Link href="/blog/react-interview-questions-2025">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-all shadow-lg cursor-pointer text-sm sm:text-base"
              >
                Start Challenge
              </motion.button>
            </Link>
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 shadow-xl border border-white/80 flex flex-col items-center justify-center"
          >
            <div className="text-6xl sm:text-8xl mb-4">🤖</div>
            <p className="text-xs sm:text-sm text-gray-700 text-center">Keep going! You're doing great!</p>
          </motion.div>
        </div>

        {/* Skill Tags & Practice Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Skill Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Skill Tags</h3>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-800">XP</span>
                <span className="text-sm text-gray-600">Level 3 - 450 XP</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="h-full bg-gradient-to-r from-[#7ec4b6] to-[#6eb4a6]"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["React", "Python", "SQL"].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 text-gray-800 font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Practice Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Practice Questions</h3>
            <div className="flex flex-wrap justify-around items-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">First Login</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">⭐</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Achievements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-200 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Top Scorer</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline/Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Timeline / Schedule</h3>
          <div className="relative">
            {/* Roadmap Path */}
            <svg className="w-full h-24 sm:h-32" viewBox="0 0 800 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#845EC2" />
                  <stop offset="33%" stopColor="#FFA94D" />
                  <stop offset="66%" stopColor="#FF6B9D" />
                  <stop offset="100%" stopColor="#F9A8D4" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 50 50 Q 200 20, 300 50 T 550 50 T 750 50"
                stroke="url(#roadmapGradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />
            </svg>
            
            {/* Milestones */}
            <div className="grid grid-cols-2 sm:flex sm:justify-between items-center gap-4 sm:gap-0 mt-4">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-300 border-4 border-white flex items-center justify-center mb-2">
                  <span className="text-xl">📚</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">Week 1: Basics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-orange-300 border-4 border-white flex items-center justify-center mb-2">
                  <span className="text-xl">💻</span>
                </div>
                <p className="text-xs font-medium text-gray-700">Projects</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pink-300 border-4 border-white flex items-center justify-center mb-2">
                  <span className="text-xl">🔍</span>
                </div>
                <p className="text-xs font-medium text-gray-700">Deep Dive</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-rose-300 border-4 border-white flex items-center justify-center mb-2">
                  <span className="text-xl">🎯</span>
                </div>
                <p className="text-xs font-medium text-gray-700">Timeline / Schedule</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
