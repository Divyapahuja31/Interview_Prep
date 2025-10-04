"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navItems = [
    { icon: "🔍", label: "My Plans", href: "/dashboard" },
    { icon: "📊", label: "Progress", href: "/progress" },
    { icon: "📝", label: "Notes", href: "/notes" },
    { icon: "🏆", label: "Leaderboard", href: "/leaderboard" },
    { icon: "💡", label: "Company Insights", href: "/insights" },
    { icon: "🤖", label: "AI Mentor", href: "/mentor" },
    { icon: "⚡", label: "Mini Projects", href: "/projects" },
    { icon: "ℹ️", label: "About", href: "/about" },
  ];

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-72 min-h-screen bg-gradient-to-b from-[#a8d5e2]/30 to-[#c7f0d8]/30 backdrop-blur-md border-r border-white/30 p-6"
    >
      {/* Logo */}
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mb-8 flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7ec4b6] to-[#6eb4a6] flex items-center justify-center shadow-lg">
            <span className="text-xl">✨</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Craft My Prep</h1>
        </motion.div>
      </Link>

      {/* Navigation */}
      <nav className="space-y-4">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer mt-2 ${
                  isActive
                    ? "bg-white/70 shadow-md border border-white/80"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-gray-800">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      {session && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <img 
              src={session.user.image} 
              alt={session.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-800 text-sm">{session.user.name}</p>
              <p className="text-xs text-gray-600">{session.user.email}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => signOut()}
            className="w-full px-3 py-2 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-all"
          >
            Sign Out
          </motion.button>
        </motion.div>
      )}

      {/* Mascot Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-auto pt-8"
      >
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 text-center">
          <div className="text-6xl mb-2">🤖</div>
          <p className="text-sm text-gray-700 font-medium">
            Your AI buddy Vibe is here to help!
          </p>
        </div>
      </motion.div>
    </motion.aside>
  );
}
