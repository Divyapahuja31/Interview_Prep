"use client";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

export default function Leaderboard() {
  const topUsers = [
    { rank: 1, name: "Alex Chen", xp: 2450, avatar: "👨‍💻" },
    { rank: 2, name: "Sarah Kim", xp: 2100, avatar: "👩‍💻" },
    { rank: 3, name: "Mike Johnson", xp: 1890, avatar: "👨‍🎓" },
    { rank: 4, name: "Emma Davis", xp: 1650, avatar: "👩‍🎓" },
    { rank: 5, name: "You", xp: 450, avatar: "🤖" },
  ];

  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 xl:pt-8">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Leaderboard</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">Compete with other learners</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/80">
            <div className="space-y-4">
              {topUsers.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl ${
                    user.name === "You" 
                      ? "bg-gradient-to-r from-[#7ec4b6]/30 to-[#6eb4a6]/30 border-2 border-[#7ec4b6]" 
                      : "bg-white/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                    user.rank === 1 ? "bg-yellow-300" :
                    user.rank === 2 ? "bg-gray-300" :
                    user.rank === 3 ? "bg-orange-300" :
                    "bg-blue-200"
                  }`}>
                    {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : user.rank}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{user.avatar}</span>
                      <span className="font-bold text-gray-900">{user.name}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{user.xp}</div>
                    <div className="text-sm text-gray-600">XP</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
