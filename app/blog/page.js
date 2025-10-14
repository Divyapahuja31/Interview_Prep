"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: "react-interview-questions-2025",
      title: "Top 10 React Interview Questions for 2025",
      excerpt: "Master these essential React concepts to ace your next interview",
      date: "Jan 15, 2025",
      category: "React",
      color: "from-blue-200 to-blue-100",
      readTime: "8 min read"
    },
    {
      id: "sql-joins-explained",
      title: "SQL Joins Explained with Real Examples",
      excerpt: "A comprehensive guide to understanding database joins",
      date: "Jan 12, 2025",
      category: "SQL",
      color: "from-green-200 to-green-100",
      readTime: "6 min read"
    },
    {
      id: "python-best-practices",
      title: "Python Best Practices for Technical Interviews",
      excerpt: "Write clean, efficient Python code that impresses interviewers",
      date: "Jan 10, 2025",
      category: "Python",
      color: "from-yellow-200 to-yellow-100",
      readTime: "10 min read"
    },
    {
      id: "system-design-interviews",
      title: "How to Prepare for System Design Interviews",
      excerpt: "A step-by-step approach to tackling system design questions",
      date: "Jan 8, 2025",
      category: "System Design",
      color: "from-purple-200 to-purple-100",
      readTime: "12 min read"
    },
    {
      id: "behavioral-interview-tips",
      title: "Behavioral Interview Tips from FAANG Engineers",
      excerpt: "Learn how to structure your answers using the STAR method",
      date: "Jan 5, 2025",
      category: "Career",
      color: "from-pink-200 to-pink-100",
      readTime: "7 min read"
    },
    {
      id: "data-structures-guide",
      title: "Data Structures Every Developer Should Know",
      excerpt: "Essential data structures and when to use them",
      date: "Jan 3, 2025",
      category: "DSA",
      color: "from-orange-200 to-orange-100",
      readTime: "15 min read"
    },
    {
      id: "javascript-closures-scopes",
      title: "Mastering JavaScript Closures and Scopes",
      excerpt: "A deep dive into JavaScript's scoping rules and closure patterns",
      date: "Feb 5, 2025",
      category: "JavaScript",
      color: "from-amber-200 to-amber-100",
      readTime: "9 min read"
    },
    {
      id: "css-grid-complete-guide",
      title: "The Complete Guide to CSS Grid Layout",
      excerpt: "Master modern CSS layout techniques with this comprehensive guide",
      date: "Feb 10, 2025",
      category: "CSS",
      color: "from-indigo-200 to-indigo-100",
      readTime: "11 min read"
    },
    {
      id: "nodejs-microservices",
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Architecture patterns and best practices for microservices",
      date: "Feb 15, 2025",
      category: "Backend",
      color: "from-emerald-200 to-emerald-100",
      readTime: "14 min read"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
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
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Blog & Resources</h2>
          <p className="text-xl text-gray-700">Latest tips, tutorials, and insights for interview success</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`bg-gradient-to-br ${post.color} rounded-3xl p-6 shadow-xl border border-white/80 cursor-pointer h-full`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-semibold text-gray-800">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-600">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/30">
                  <span className="text-xs text-gray-700">{post.date}</span>
                  <span className="group flex items-center text-[#5aa898] hover:text-[#3d8e7d] font-medium text-sm transition-colors">
                    Read More
                    <svg 
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
