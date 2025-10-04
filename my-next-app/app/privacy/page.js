"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
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

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-xl border border-white/80"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
          <p className="text-sm text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h3>
              <p className="leading-relaxed">
                We collect information you provide directly to us, including name, email address, and usage data when you use Craft My Prep services.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h3>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your interview preparation experience</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Data Security</h3>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Your Rights</h3>
              <p className="leading-relaxed">
                You have the right to access, update, or delete your personal information at any time. Contact us at privacy@craftmyprep.com for assistance.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Contact Us</h3>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at support@craftmyprep.com
              </p>
            </section>
          </div>
        </motion.div>

        {/* Back Link */}
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
