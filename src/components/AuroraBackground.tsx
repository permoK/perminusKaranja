"use client"

import { motion } from "framer-motion"

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Main aurora gradients */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/20 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute -top-1/3 -right-1/3 w-3/4 h-3/4 opacity-15"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-tl from-cyan-400/20 via-transparent to-purple-600/25 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute -bottom-1/2 -right-1/4 w-2/3 h-2/3 opacity-10"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-pink-500/15 via-transparent to-indigo-500/20 blur-3xl" />
      </motion.div>

      {/* Subtle moving particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gentle wave effect */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  )
}
