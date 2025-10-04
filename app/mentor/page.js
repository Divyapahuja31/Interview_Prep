"use client";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AIMentor() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm Vibe, your AI mentor. How can I help you prepare for your interview today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // React Hooks responses
    if (lowerQuestion.includes('react') && lowerQuestion.includes('hook')) {
      return `Great question about React Hooks! 🎯

React Hooks are functions that let you use state and other React features in functional components. Here are the key hooks:

**useState** - Manages component state
Example: const [count, setCount] = useState(0);

**useEffect** - Handles side effects (API calls, subscriptions)
Example: useEffect(() => { fetchData(); }, []);

**useContext** - Accesses context values without prop drilling

**useRef** - Creates mutable references that persist across renders

**Key Benefits:**
✓ Write cleaner, more reusable code
✓ Avoid class components complexity
✓ Better code organization
✓ Easier to test and maintain

Want to dive deeper into any specific hook? Just ask!`;
    }
    
    // SQL Joins responses
    if (lowerQuestion.includes('sql') && lowerQuestion.includes('join')) {
      return `Let me explain SQL Joins! 📊

SQL Joins combine rows from two or more tables based on related columns. Here are the main types:

**INNER JOIN** - Returns matching rows from both tables
SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;

**LEFT JOIN** - Returns all rows from left table + matching rows from right
SELECT * FROM customers LEFT JOIN orders ON customers.id = orders.customer_id;

**RIGHT JOIN** - Returns all rows from right table + matching rows from left

**FULL OUTER JOIN** - Returns all rows when there's a match in either table

**Quick Tips:**
✓ INNER JOIN is most common and fastest
✓ Use LEFT JOIN when you need all records from the first table
✓ Always index foreign key columns for better performance
✓ Understand the difference between WHERE and ON clauses

Need examples for a specific join type? Let me know!`;
    }
    
    // Python responses
    if (lowerQuestion.includes('python')) {
      return `Python Best Practices for Interviews! 🐍

Here are essential tips to ace Python interviews:

**1. Follow PEP 8 Style Guide**
- Use 4 spaces for indentation
- snake_case for functions/variables
- PascalCase for classes

**2. Use List Comprehensions**
squares = [x**2 for x in range(10)]

**3. Leverage Built-in Functions**
Use sum(), max(), min(), enumerate() instead of loops

**4. Handle Exceptions Properly**
try:
    risky_operation()
except ValueError as e:
    handle_error(e)

**5. Use Type Hints**
def greet(name: str) -> str:
    return f"Hello, {name}"

**Common Patterns:**
✓ Two pointers technique
✓ Hash maps for O(1) lookups
✓ Collections module (Counter, defaultdict)
✓ Generator expressions for memory efficiency

Want to practice specific Python concepts?`;
    }
    
    // Interview Tips responses
    if (lowerQuestion.includes('interview') && lowerQuestion.includes('tip')) {
      return `Top Interview Tips! 💼

**Before the Interview:**
✓ Research the company thoroughly
✓ Practice coding problems on LeetCode
✓ Prepare STAR method stories
✓ Review your resume and projects

**During the Interview:**
✓ Think out loud - explain your reasoning
✓ Ask clarifying questions
✓ Start with a brute force solution, then optimize
✓ Test your code with edge cases
✓ Discuss time and space complexity

**Technical Interview Strategy:**
1. Understand the problem completely
2. Think of examples and edge cases
3. Explain your approach before coding
4. Write clean, readable code
5. Test and debug systematically

**Behavioral Interview:**
Use the STAR method:
- Situation: Set the context
- Task: Explain the challenge
- Action: Describe what YOU did
- Result: Share outcomes with metrics

Remember: Interviewers want you to succeed! Show enthusiasm and be authentic.

Need help with a specific interview type?`;
    }
    
    // System Design responses
    if (lowerQuestion.includes('system') && lowerQuestion.includes('design')) {
      return `System Design Interview Guide! 🏗️

**Framework: RESHADED**
R - Requirements (functional & non-functional)
E - Estimations (scale, storage, bandwidth)
S - Storage (database selection)
H - High-level design (architecture)
A - API design (key endpoints)
D - Detailed design (deep dive)
E - Evaluation (trade-offs)
D - Discuss bottlenecks

**Key Concepts:**
✓ CAP Theorem (Consistency, Availability, Partition Tolerance)
✓ Load Balancing (Round Robin, Least Connections)
✓ Caching (Redis, Memcached)
✓ Database Sharding
✓ Message Queues (Kafka, RabbitMQ)
✓ CDN for static content

**Common Questions:**
- Design URL Shortener
- Design Twitter Feed
- Design YouTube
- Design Uber

Start simple, then iterate. Always discuss trade-offs!

Want to practice a specific system design problem?`;
    }
    
    // Default response
    return `That's a great question! 🌟

I can help you with:
• React Hooks and components
• SQL queries and joins
• Python programming tips
• Interview preparation strategies
• System design concepts
• Data structures and algorithms

Try asking me about:
- "Explain React Hooks"
- "SQL Joins Tutorial"
- "Python Best Practices"
- "Interview Tips"
- "System Design basics"

What would you like to learn about?`;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    // Add user message
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response with intelligent answers
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { type: "bot", text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <Sidebar />
      
      <main className="flex-1 p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Mentor</h1>
            <p className="text-xl text-gray-700">Chat with Vibe, your AI interview coach</p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/80 flex flex-col overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 p-8 overflow-y-auto space-y-4">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start gap-3 max-w-2xl ${message.type === "user" ? "flex-row-reverse" : ""}`}>
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === "user" ? "bg-[#7ec4b6]" : "bg-gradient-to-br from-purple-200 to-pink-200"
                    }`}>
                      <span className="text-2xl">{message.type === "user" ? "👤" : "🤖"}</span>
                    </div>
                    
                    {/* Message Bubble */}
                    <div className={`px-6 py-4 rounded-2xl ${
                      message.type === "user" 
                        ? "bg-[#7ec4b6] text-white" 
                        : "bg-white/90 text-gray-800 border border-gray-200"
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start gap-3 max-w-2xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center flex-shrink-0">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="text-2xl"
                    >
                      🤖
                    </motion.span>
                  </div>
                  <div className="px-6 py-4 rounded-2xl bg-white/90 border border-gray-200">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 rounded-full bg-gray-400"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-gray-400"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 rounded-full bg-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200/50 bg-white/50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about interview prep..."
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#7ec4b6] focus:outline-none bg-white/90 backdrop-blur-sm shadow-sm text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="px-8 py-4 rounded-full bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-all shadow-lg"
              >
                Send
              </motion.button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Explain React Hooks", "SQL Joins Tutorial", "Python Best Practices", "Interview Tips"].map((topic) => (
                <motion.button
                  key={topic}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setInput(topic);
                    setTimeout(handleSend, 100);
                  }}
                  className="px-4 py-2 rounded-full bg-white/70 hover:bg-white/90 border border-gray-200 text-sm font-medium text-gray-700 transition-all"
                >
                  {topic}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
