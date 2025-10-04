"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Support() {
  const faqs = [
    {
      question: "How does the AI plan generation work?",
      answer: "Our AI analyzes job descriptions to extract key skills and requirements, then creates a personalized study plan tailored to your target role."
    },
    {
      question: "Is Craft My Prep free to use?",
      answer: "We offer a free tier with basic features. Premium plans unlock advanced AI features, unlimited plan generations, and priority support."
    },
    {
      question: "Can I track my progress?",
      answer: "Yes! Our dashboard shows your progress across different skills, XP earned, and completion rates for your study plan."
    },
    {
      question: "What programming languages are supported?",
      answer: "We support all major languages including JavaScript, Python, Java, C++, SQL, and more. Our AI adapts to your specific needs."
    },
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email."
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h2>
          <p className="text-xl text-gray-700">Find answers to common questions</p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/80"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-[#7ec4b6] to-[#6eb4a6] rounded-3xl p-8 shadow-xl text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
          <p className="mb-6">Our support team is here to assist you</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-white text-[#7ec4b6] font-semibold shadow-lg"
            >
              Contact Support
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
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
