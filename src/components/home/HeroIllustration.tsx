"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="lg:w-[450px] w-full shrink-0">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-stroke" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#33E092" stopOpacity="0.9" />
            <stop offset="1" stopColor="#0CCE6B" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="hero-glow" cx="200" cy="200" r="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#33E092" stopOpacity="0.18" />
            <stop offset="1" stopColor="#33E092" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#hero-glow)"
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {[140, 100, 60].map((r, i) => (
          <motion.circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            stroke="url(#hero-stroke)"
            strokeWidth="1.2"
            fill="none"
            initial={{ rotate: 0 }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 24 + i * 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px" }}
            strokeDasharray={i === 1 ? "4 8" : undefined}
          />
        ))}

        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = +(200 + Math.cos(angle) * 140).toFixed(2);
          const y = +(200 + Math.sin(angle) * 140).toFixed(2);
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="6"
              fill="#33E092"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
            />
          );
        })}

        <motion.circle
          cx="200"
          cy="200"
          r="12"
          fill="#33E092"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
