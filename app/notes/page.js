"use client";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

export default function Notes() {
  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 xl:pt-8">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">My Notes</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">Keep track of important concepts</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/80 text-center"
        >
          <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">📝</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Notes Feature Coming Soon</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Create, organize, and review your study notes
          </p>
        </motion.div>
      </main>
    </div>
  );
}
