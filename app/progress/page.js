"use client";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

export default function Progress() {
  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Progress Tracking</h1>
            <p className="text-xl text-gray-700">Monitor your learning journey</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/80 text-center"
        >
          <div className="text-8xl mb-6">📊</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Progress Tracking Coming Soon</h2>
          <p className="text-lg text-gray-700">
            Track your skills, completion rates, and learning streaks
          </p>
        </motion.div>
      </main>
    </div>
  );
}
