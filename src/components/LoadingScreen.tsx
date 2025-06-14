"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  loadingContainer,
  loadingNameContainer,
  loadingLetterReveal,
  loadingSubtitle,
  loadingProgress,
} from "../lib/animations"

interface LoadingScreenProps {
  isLoading: boolean
  onLoadingComplete: () => void
}

export default function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const name = "PERMO K"
  const subtitle = "FULL-STACK DEVELOPER"

  // Auto-complete loading after animation sequence
  React.useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        onLoadingComplete()
      }, 6000) // 6 seconds for full sequence

      return () => clearTimeout(timer)
    }
  }, [isLoading, onLoadingComplete])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black overflow-hidden"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variants={loadingContainer}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Sophisticated background */}
          <div className="absolute inset-0 w-full h-full">
            {/* Primary gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-gray-950 to-black" />

            {/* Subtle radial gradient overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

            {/* Animated grid pattern */}
            <motion.div
              className="absolute inset-0 w-full h-full opacity-[0.015]"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Main content container - Centered */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 w-full max-w-4xl mx-auto min-h-screen">
            {/* Company/Brand mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="mb-8 sm:mb-12 md:mb-16"
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-sm"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Animated name with professional typography */}
            <motion.div
              className="mb-6 sm:mb-8 md:mb-12"
              variants={loadingNameContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.2em] leading-none">
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={loadingLetterReveal}
                    className="inline-block"
                    style={{
                      marginRight: letter === " " ? "0.4em" : "0",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* Elegant subtitle */}
            <motion.div
              variants={loadingSubtitle}
              initial="initial"
              animate="animate"
              className="text-xs sm:text-sm md:text-base font-light tracking-[0.3em] text-white/60 uppercase mb-12 sm:mb-16 md:mb-20"
            >
              {subtitle}
            </motion.div>

            {/* Sophisticated progress indicator */}
            <motion.div
              className="flex justify-center mb-8 sm:mb-12 w-full"
              variants={loadingProgress}
              initial="initial"
              animate="animate"
            >
              <div className="relative w-64 sm:w-80 md:w-96 h-px bg-white/10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  style={{ transformOrigin: "left" }}
                />
                <motion.div
                  className="absolute left-0 top-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2"
                  animate={{
                    x: [0, "calc(100% + 8px)", 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>
            </motion.div>

            {/* Loading percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="relative mb-6 sm:mb-8"
            >
              <motion.div
                className="text-xl sm:text-2xl font-light text-white/80 font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  Loading...
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Minimal loading text with pulse effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="relative"
            >
              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-24 h-24 sm:w-32 sm:h-32 border border-white/5 rounded-full"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="relative text-xs sm:text-sm font-light tracking-widest text-white/40 uppercase px-4">
                Initializing Portfolio Experience
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
