"use client";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function MiniProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const projects = [
    {
      id: 1,
      title: "Build a React Todo List",
      icon: "✅",
      difficulty: "Easy",
      xp: 50,
      description: "Create a simple todo list with add, delete, and mark complete functionality",
      language: "React",
      color: "from-blue-200 to-blue-100"
    },
    {
      id: 2,
      title: "SQL User Database Schema",
      icon: "🗄️",
      difficulty: "Medium",
      xp: 75,
      description: "Design a normalized database schema for a user management system",
      language: "SQL",
      color: "from-green-200 to-green-100"
    },
    {
      id: 3,
      title: "Python API Integration",
      icon: "🔌",
      difficulty: "Medium",
      xp: 75,
      description: "Build a REST API client that fetches and processes data",
      language: "Python",
      color: "from-yellow-200 to-yellow-100"
    },
    {
      id: 4,
      title: "JavaScript Array Methods",
      icon: "🎯",
      difficulty: "Easy",
      xp: 40,
      description: "Practice map, filter, reduce with real-world examples",
      language: "JavaScript",
      color: "from-purple-200 to-purple-100"
    },
    {
      id: 5,
      title: "CSS Flexbox Layout",
      icon: "📐",
      difficulty: "Easy",
      xp: 45,
      description: "Create a responsive navigation bar using Flexbox",
      language: "CSS",
      color: "from-pink-200 to-pink-100"
    },
    {
      id: 6,
      title: "Node.js Express Server",
      icon: "🚀",
      difficulty: "Hard",
      xp: 100,
      description: "Build a RESTful API server with authentication",
      language: "Node.js",
      color: "from-orange-200 to-orange-100"
    },
  ];

  const handleRunCode = () => {
    // Simulate code execution
    setResult("✅ Code executed successfully! +50 XP earned");
    setTimeout(() => setResult(""), 3000);
  };

  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Mini Projects</h1>
            <p className="text-xl text-gray-700">Practice coding with hands-on projects</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/80">
              <span className="text-sm font-semibold text-gray-800">Total XP: 450</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {!selectedProject ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => setSelectedProject(project)}
                className={`bg-gradient-to-br ${project.color} rounded-3xl p-6 shadow-xl border border-white/80 cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.difficulty === "Easy" ? "bg-green-500 text-white" :
                      project.difficulty === "Medium" ? "bg-yellow-500 text-white" :
                      "bg-red-500 text-white"
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-semibold text-gray-800">
                      +{project.xp} XP
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-medium text-gray-800">
                    {project.language}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Code Editor View */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              <span>←</span> Back to Projects
            </button>

            {/* Project Header */}
            <div className={`bg-gradient-to-br ${selectedProject.color} rounded-3xl p-8 shadow-xl border border-white/80`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{selectedProject.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                    <p className="text-lg text-gray-700">{selectedProject.description}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    selectedProject.difficulty === "Easy" ? "bg-green-500 text-white" :
                    selectedProject.difficulty === "Medium" ? "bg-yellow-500 text-white" :
                    "bg-red-500 text-white"
                  }`}>
                    {selectedProject.difficulty}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/70 text-sm font-semibold text-gray-800">
                    +{selectedProject.xp} XP
                  </span>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Editor */}
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Code Editor</h3>
                  <span className="px-3 py-1 rounded-full bg-gray-200 text-xs font-medium text-gray-700">
                    {selectedProject.language}
                  </span>
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder={`// Write your ${selectedProject.language} code here...\n\nfunction solution() {\n  // Your code\n}`}
                  className="w-full h-96 p-4 rounded-xl border-2 border-gray-300 focus:border-[#7ec4b6] focus:outline-none resize-none bg-gray-900 text-green-400 font-mono text-sm"
                  style={{ fontFamily: "monospace" }}
                />
                <div className="flex gap-3 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRunCode}
                    className="flex-1 px-6 py-3 rounded-xl bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-all shadow-lg"
                  >
                    Run Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-white/70 hover:bg-white/90 border border-gray-300 text-gray-800 font-semibold transition-all"
                  >
                    Submit
                  </motion.button>
                </div>
              </div>

              {/* Output & Instructions */}
              <div className="space-y-6">
                {/* Instructions */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Instructions</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7ec4b6] font-bold">1.</span>
                      <span>Read the project description carefully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7ec4b6] font-bold">2.</span>
                      <span>Write your code in the editor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7ec4b6] font-bold">3.</span>
                      <span>Click "Run Code" to test your solution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7ec4b6] font-bold">4.</span>
                      <span>Submit when you're confident in your solution</span>
                    </li>
                  </ul>
                </div>

                {/* Output Console */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Output</h3>
                  <div className="bg-gray-900 rounded-xl p-4 min-h-32">
                    {result ? (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-400 font-mono text-sm"
                      >
                        {result}
                      </motion.p>
                    ) : (
                      <p className="text-gray-500 font-mono text-sm">
                        Output will appear here...
                      </p>
                    )}
                  </div>
                </div>

                {/* Mascot Encouragement */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-6 shadow-xl border border-white/80 text-center"
                >
                  <div className="text-6xl mb-3">🤖</div>
                  <p className="text-sm font-medium text-gray-800">
                    You've got this! Take your time and think it through.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
