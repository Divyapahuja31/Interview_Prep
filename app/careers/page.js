"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Careers() {
  const positions = [
    {
      title: "Senior Full Stack Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Build and scale our AI-powered interview prep platform"
    },
    {
      title: "ML Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Develop and improve our AI models for skill extraction and personalization"
    },
    {
      title: "Product Designer",
      type: "Full-time",
      location: "Remote",
      description: "Design beautiful, intuitive experiences for our users"
    },
    {
      title: "Content Writer",
      type: "Contract",
      location: "Remote",
      description: "Create engaging tutorials, blog posts, and interview prep content"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 mb-8 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7ec4b6] to-[#6eb4a6] flex items-center justify-center shadow-lg">
              <span className="text-xl">✨</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Craft My Prep</h1>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-700">Help us empower millions to land their dream tech roles</p>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <p className="text-gray-700 mb-3">{position.description}</p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#7ec4b6]/20 text-sm font-medium text-gray-800">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-200/50 text-sm font-medium text-gray-800">
                      📍 {position.location}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold shadow-lg"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/80 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="font-bold text-gray-900 mb-2">Remote First</h4>
              <p className="text-sm text-gray-700">Work from anywhere in the world</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <h4 className="font-bold text-gray-900 mb-2">Competitive Pay</h4>
              <p className="text-sm text-gray-700">Top market salaries and equity</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Growth</h4>
              <p className="text-sm text-gray-700">Learn and grow with the team</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
