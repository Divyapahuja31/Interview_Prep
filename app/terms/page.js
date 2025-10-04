"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Terms() {
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
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-xl border border-white/80"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h2>
          <p className="text-sm text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h3>
              <p className="leading-relaxed">
                By accessing and using Craft My Prep, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Use License</h3>
              <p className="leading-relaxed">
                Permission is granted to temporarily access the materials on Craft My Prep for personal, non-commercial use only.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3. User Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintain the confidentiality of your account</li>
                <li>Provide accurate and complete information</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Not misuse or abuse the platform</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Disclaimer</h3>
              <p className="leading-relaxed">
                The materials on Craft My Prep are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Limitations</h3>
              <p className="leading-relaxed">
                In no event shall Craft My Prep be liable for any damages arising out of the use or inability to use the materials on our platform.
              </p>
            </section>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
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
