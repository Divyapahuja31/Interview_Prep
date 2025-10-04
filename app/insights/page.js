"use client";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function CompanyInsights() {
  const [companyName, setCompanyName] = useState("");

  const insights = {
    skills: [
      { name: "SQL/Cloud", percentage: 35, color: "#FFA94D" },
      { name: "Python", percentage: 25, color: "#FF6B9D" },
      { name: "AWS/Cloud", percentage: 25, color: "#845EC2" },
      { name: "React", percentage: 20, color: "#4D9DE0" },
    ],
    demand: [
      { name: "React", value: 1 },
      { name: "SQL", value: 2 },
      { name: "Python", value: 2.5 },
      { name: "SQL", value: 3 },
      { name: "100/259", value: 3.5 },
    ],
  };

  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Company Insights</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-[#FF9B9B] hover:bg-[#FF8B8B] text-white font-semibold transition-all shadow-lg"
          >
            Generate Insights
          </motion.button>
        </div>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="max-w-2xl">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Company Name"
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#7ec4b6] focus:outline-none bg-white/90 backdrop-blur-sm shadow-sm text-lg"
            />
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Breakdown Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Skills Breakdown</h3>
            <div className="relative w-64 h-64 mx-auto">
              <svg viewBox="0 0 200 200" className="transform -rotate-90">
                {insights.skills.map((skill, index) => {
                  const total = insights.skills.reduce((sum, s) => sum + s.percentage, 0);
                  const startAngle = insights.skills.slice(0, index).reduce((sum, s) => sum + (s.percentage / total) * 360, 0);
                  const endAngle = startAngle + (skill.percentage / total) * 360;
                  const largeArc = (skill.percentage / total) > 0.5 ? 1 : 0;
                  
                  const startX = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
                  const startY = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
                  const endX = 100 + 80 * Math.cos((endAngle * Math.PI) / 180);
                  const endY = 100 + 80 * Math.sin((endAngle * Math.PI) / 180);

                  return (
                    <motion.path
                      key={skill.name}
                      d={`M 100 100 L ${startX} ${startY} A 80 80 0 ${largeArc} 1 ${endX} ${endY} Z`}
                      fill={skill.color}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    />
                  );
                })}
                <circle cx="100" cy="100" r="50" fill="white" />
              </svg>
              
              {/* Legend */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                </div>
              </div>
            </div>
            
            {/* Labels */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {insights.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.color }} />
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.percentage}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Demand Trends Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skill Demand Trends (Q4 2023)</h3>
            <div className="space-y-4">
              {insights.demand.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    <span className="text-sm text-gray-600">{item.value}%</span>
                  </div>
                  <div className="w-full h-8 bg-gray-200 rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / 3.5) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-lg"
                      style={{
                        background: index === 0 ? "#7ec4b6" : index === 1 ? "#FFA94D" : index === 2 ? "#FF6B9D" : index === 3 ? "#845EC2" : "#FFD93D"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Common Interview Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Interview Questions</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all">
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👨‍💻</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">React</p>
                  <p className="text-sm text-gray-600">Tell me about a road you built</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all">
                <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👩‍💻</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Try again</p>
                  <p className="text-sm text-gray-600">What is the time for insertion in a binary tree?</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Past Employee Tips with Mascot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80 relative"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Employee Tips / Trends</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50">
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <p className="text-sm text-gray-700">They dont care about your entire project and order great on the fly</p>
                </div>
              </div>
            </div>
            
            {/* Mascot */}
            <div className="absolute bottom-4 right-4">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-7xl"
              >
                🤖
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
