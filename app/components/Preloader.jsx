"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

/**
 * Reusable paper-craft style Preloader overlay.
 * - Parchment-like background using layered CSS gradients (no external assets).
 * - "LOADING…" letters styled as paper cut-outs with varied patterns/colors.
 * - Each letter unfolds sequentially with a soft bounce.
 * - Overlay fades out after animations and unmounts, revealing the page below.
 */
export default function Preloader({
  text = "LOADING PROJECT VIBE",
  letterDelay = 120, // ms between letters (stagger)
  unfoldDuration = 800, // ms per letter unfold (spring duration cap)
  exitDuration = 700, // ms fade-out duration
  minDotsDuration = 5000, // ms, ensure dots are visible ~5s (shorter by ~2-3s)
  onComplete,
}) {
  const [show, setShow] = useState(true);

  // Estimate when all letters have finished unfolding to schedule fade-out
  const totalTime = useMemo(() => {
    const n = Math.max(0, (text?.length || 0) - 1);
    const lastLetterDelay = n * letterDelay;
    return lastLetterDelay + unfoldDuration; // last letter finish time
  }, [text, letterDelay, unfoldDuration]);

  // Keep preloader visible for at least the scene duration
  useEffect(() => {
    const endAll = setTimeout(() => setShow(false), Math.max(minDotsDuration, totalTime + 800));
    return () => clearTimeout(endAll);
  }, [totalTime, minDotsDuration]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: exitDuration / 1000 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={parchmentStyle}
          aria-label="Page loading"
          role="status"
        >
          <div className="pointer-events-none select-none flex flex-col items-center gap-6 sm:gap-8">
            <CharacterScene />
            <TileRow text={text} letterDelay={letterDelay} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Center paper-craft character with gentle float and orbiting items
function CharacterScene() {
  return (
    <div className="relative w-full max-w-[1100px] h-[45vh] sm:h-[50vh] flex items-center justify-center mx-auto">
      {/* Sparkles */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[8%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-16 w-px bg-white/60 blur-[0.3px]" />
      </motion.div>

      {/* Floating items */}
      <FloatingItem className="left-[8%] top-[24%]" kind="heart" delay={0} />
      <FloatingItem className="right-[10%] top-[22%]" kind="clipboard" delay={0.2} />
      <FloatingItem className="right-[22%] top-[5%]" kind="cap" delay={0.4} />
      <FloatingItem className="left-[22%] top-[6%]" kind="search" delay={0.6} />

      {/* Robot - Centered */}
      <motion.div
        className="relative"
        animate={{ y: [0, -10, 0], rotate: [0, -2, 0, 2, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/robot.png"
          alt="Robot"
          width={1200}
          height={1200}
          priority
          className="w-[60vw] sm:w-[50vw] max-w-[700px] h-auto drop-shadow-[0_24px_40px_rgba(0,0,0,0.18)] mx-auto"
        />
      </motion.div>
    </div>
  );
}

function FloatingItem({ className = "", kind = "clipboard", delay = 0 }) {
  const y = [0, -10, 0];
  const common = {
    className: `absolute ${className}`,
    animate: { y },
    transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay },
  };
  return (
    <motion.div {...common}>
      {kind === "clipboard" && <ClipboardSVG className="w-16 sm:w-20 opacity-80" />}
      {kind === "cap" && <CapSVG className="w-16 sm:w-20 opacity-80" />}
      {kind === "search" && <SearchSVG className="w-14 sm:w-16 opacity-80" />}
      {kind === "heart" && <HeartCardSVG className="w-16 sm:w-20 opacity-80" />}
    </motion.div>
  );
}

function TileRow({ text, letterDelay = 120 }) {
  const letters = Array.from(text);
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3">
      {letters.map((ch, i) => (
        ch === " " ? (
          <span key={`sp-${i}`} className="w-2 sm:w-3" />
        ) : (
          <Tile key={`${ch}-${i}`} ch={ch} index={i} letterDelay={letterDelay} />
        )
      ))}
    </div>
  );
}

function Tile({ ch, index, letterDelay = 120 }) {
  const colors = [
    "#c7f0d8", // mint
    "#fde4c8", // peach
    "#dbeafe", // light blue
    "#e9d5ff", // lavender
    "#fff5cc", // pale yellow
    "#e2f2ff", // sky
  ];
  const bg = colors[index % colors.length];
  const delaySec = (index * Math.max(0, letterDelay)) / 1000;
  return (
    <motion.div
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[10px] grid place-items-center"
      style={{
        backgroundColor: bg,
        boxShadow:
          "0 12px 22px rgba(0,0,0,0.14), 0 4px 10px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(0,0,0,0.05)",
      }}
      initial={{ y: -12, scale: 0.9, opacity: 0 }}
      animate={{ y: [ -12, 0, -4, 0 ], scale: [0.9, 1.02, 1, 1], opacity: 1 }}
      transition={{ duration: 1.8, delay: delaySec, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.6, times: [0, 0.35, 0.65, 1] }}
    >
      <span className="font-bold text-[#3b4856] text-lg sm:text-xl md:text-2xl tracking-[0.18em]">{ch}</span>
    </motion.div>
  );
}

// Minimal SVGs to resemble reference items
function RobotSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.18" />
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <rect x="60" y="60" rx="16" ry="16" width="80" height="80" fill="#a8e6f0" stroke="#7ccbd9" strokeWidth="3" />
        <rect x="72" y="72" rx="12" ry="12" width="56" height="56" fill="#fffdea" />
        <circle cx="92" cy="96" r="6" fill="#2b2b2b" />
        <circle cx="124" cy="96" r="6" fill="#2b2b2b" />
        <rect x="96" y="112" width="24" height="8" rx="4" fill="#ffb3b3" />
        {/* antenna */}
        <rect x="98" y="40" width="4" height="20" rx="2" fill="#a8e6f0" />
        <circle cx="100" cy="36" r="6" fill="#ffd9a3" />
        {/* limbs */}
        <rect x="40" y="92" width="24" height="12" rx="6" fill="#bfe7a8" />
        <rect x="136" y="92" width="24" height="12" rx="6" fill="#bfe7a8" />
        <rect x="92" y="140" width="16" height="24" rx="6" fill="#e7d19e" />
      </g>
    </svg>
  );
}

function ClipboardSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="14" y="10" width="36" height="48" rx="6" fill="#fff" stroke="#c7ced6" />
      <rect x="24" y="6" width="16" height="10" rx="4" fill="#ffd9a3" />
      <rect x="20" y="24" width="24" height="4" rx="2" fill="#c7ced6" />
      <rect x="20" y="32" width="20" height="4" rx="2" fill="#dbe2ea" />
    </svg>
  );
}

function CapSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path d="M8 28 L32 16 L56 28 L32 40 Z" fill="#bfe7a8" stroke="#8ac07a" />
      <rect x="20" y="40" width="24" height="6" rx="3" fill="#a8e6f0" />
    </svg>
  );
}

function SearchSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <circle cx="28" cy="28" r="14" stroke="#7ccbd9" strokeWidth="6" fill="none" />
      <line x1="38" y1="38" x2="52" y2="52" stroke="#7ccbd9" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function HeartCardSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="8" y="12" width="48" height="40" rx="6" fill="#ffe9ed" stroke="#f7c6cf" />
      <path d="M32 40c8-6 12-10 12-16a6 6 0 0 0-12-2 6 6 0 0 0-12 2c0 6 4 10 12 16Z" fill="#ff9db1" />
    </svg>
  );
}

function Word({ text, letterDelay, unfoldDuration }) {
  const letters = Array.from(text);
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: Math.max(0, letterDelay) / 1000,
        delayChildren: 0,
      },
    },
  };

  return (
    <motion.div
      className="flex gap-2 sm:gap-3 md:gap-4"
      style={{ perspective: 800 }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {letters.map((ch, i) => (
        <Letter key={`${ch}-${i}`} ch={ch} index={i} duration={unfoldDuration} />
      ))}
    </motion.div>
  );
}

function Letter({ ch, index, duration }) {
  const style = useMemo(
    () => ({
      transformOrigin: "left center",
      transformPerspective: 600,
      // Different paper textures/colors per letter using layered gradients
      ...paperPattern(index),
      boxShadow:
        "0 8px 18px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.04)",
    }),
    [index]
  );

  const variants = {
    hidden: { rotateY: 90, scale: 0.9, opacity: 0 },
    show: {
      rotateY: 0,
      opacity: 1,
      scale: [0.9, 1.06, 0.98, 1],
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18,
        mass: 0.9,
        duration: Math.max(0.2, duration / 1000),
      },
    },
  };

  return (
    <motion.span
      className="inline-flex items-center justify-center font-bold tracking-widest text-[18px] sm:text-[22px] md:text-[28px] leading-none px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-[6px] shadow-black/40 [will-change:transform,opacity]"
      style={{ ...style, transformStyle: "preserve-3d" }}
      variants={variants}
    >
      {ch}
    </motion.span>
  );
}

// Three small paper boxes that bounce sequentially up/down
function Dots({ isVisible, startDelayMs = 0, staggerMs = 120 }) {
  const baseTransition = {
    duration: 0.9,
    ease: [0.22, 0.61, 0.36, 1],
    repeat: Infinity,
    repeatType: "loop",
  };

  return (
    <div className="flex items-center gap-2 ml-2" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-[4px]"
          style={{
            ...paperPattern(i + 4),
            boxShadow:
              "0 6px 12px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.05)",
          }}
          initial={{ y: 0, opacity: 0.9 }}
          animate={isVisible ? { y: [0, -10, 0], opacity: [0.9, 1, 0.9] } : {}}
          transition={{
            ...baseTransition,
            delay: (startDelayMs + i * staggerMs) / 1000,
          }}
        />
      ))}
    </div>
  );
}

// Parchment-like background using layered gradients (no external image)
const parchmentStyle = {
  backgroundColor: "#efe7d1",
  backgroundImage: [
    // subtle vignette
    "radial-gradient(1200px 800px at 50% 40%, rgba(0,0,0,0.08), rgba(0,0,0,0) 55%)",
    // mottled fibers
    "radial-gradient(10px 8px at 20% 30%, rgba(0,0,0,0.03), transparent 60%)",
    "radial-gradient(12px 10px at 70% 65%, rgba(0,0,0,0.025), transparent 60%)",
    "radial-gradient(9px 9px at 40% 80%, rgba(0,0,0,0.02), transparent 60%)",
    // light crumple streaks
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.35) 0 2px, rgba(255,255,255,0) 2px 8px)",
  ].join(","),
  backgroundBlendMode: "multiply, normal, normal, normal, screen",
};

// Generate varied paper patterns for each letter
function paperPattern(i) {
  const palettes = [
    { fg: "#2b2b2b", base: "#f7d7b8" },
    { fg: "#222", base: "#d6e8f7" },
    { fg: "#1f2937", base: "#f7f0d0" },
    { fg: "#1a1a1a", base: "#e9f7d9" },
    { fg: "#111", base: "#fde2e4" },
    { fg: "#111", base: "#e7e1ff" },
    { fg: "#111", base: "#fff0cc" },
    { fg: "#111", base: "#e2f2ff" },
  ];
  const p = palettes[i % palettes.length];

  // Rotate through simple paper patterns: speckles, stripes, dots, checks
  const patternIndex = i % 4;
  const common = {
    color: p.fg,
    textShadow: "0 2px 0 rgba(0,0,0,0.06)",
  };

  if (patternIndex === 0) {
    return {
      ...common,
      backgroundColor: p.base,
      backgroundImage:
        "radial-gradient(1px 1px at 10% 20%, rgba(0,0,0,0.09), transparent 60%), radial-gradient(1px 1px at 70% 60%, rgba(0,0,0,0.06), transparent 60%)",
      backgroundSize: "auto, auto",
    };
  }
  if (patternIndex === 1) {
    return {
      ...common,
      backgroundImage:
        `linear-gradient(135deg, ${p.base} 0%, ${shade(p.base, -6)} 100%), repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0 2px, rgba(255,255,255,0) 2px 6px)`,
      backgroundBlendMode: "multiply, screen",
    };
  }
  if (patternIndex === 2) {
    return {
      ...common,
      backgroundColor: p.base,
      backgroundImage:
        "radial-gradient(circle at 10px 10px, rgba(255,255,255,0.65) 2px, rgba(255,255,255,0) 3px), radial-gradient(circle at 22px 18px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0) 3px)",
      backgroundSize: "28px 28px, 28px 28px",
    };
  }
  return {
    ...common,
    backgroundImage:
      `linear-gradient(135deg, ${p.base} 0%, ${shade(p.base, -5)} 100%), linear-gradient(90deg, rgba(0,0,0,0.06) 50%, transparent 50%)`,
    backgroundSize: "auto, 10px 10px",
    backgroundBlendMode: "multiply, normal",
  };
}

function shade(hex, percent) {
  // Simple hex shade util: percent in [-100..100]
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const t = (p) => Math.max(0, Math.min(255, Math.round((p >= 0 ? 255 - p/100* (255 - 0) : 1 + p/100) * (p >= 0 ? 255 : 1))))
  const rr = Math.round(r + (percent/100) * (percent > 0 ? 255 - r : r));
  const gg = Math.round(g + (percent/100) * (percent > 0 ? 255 - g : g));
  const bb = Math.round(b + (percent/100) * (percent > 0 ? 255 - b : b));
  const toHex = (n) => n.toString(16).padStart(2, '0');
  return `#${toHex(rr)}${toHex(gg)}${toHex(bb)}`;
}
