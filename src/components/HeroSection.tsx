"use client"

import { motion } from "framer-motion"
import { textReveal, staggerText, fadeIn } from "../lib/animations"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import AnimatedCanvasBackground from "./AnimatedCanvasBackground"

export default function HeroSection() {
  const name = "KARANJA PERMINUS"
  const title = "FULL-STACK DEVELOPER"
  const subtitle = "& SOFTWARE ENGINEER"

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Canvas Background */}
      <AnimatedCanvasBackground />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mobile Layout (< lg) */}
          <div className="lg:hidden flex flex-col items-center justify-center text-center h-full space-y-6 sm:space-y-8">
            {/* Profile Image - Mobile */}
            <motion.div
              className="relative"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
                    backgroundSize: "300% 300%",
                    padding: "3px",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img
                      src="/images/profile-photo.png"
                      alt="Karanja Perminus - Full-Stack Developer"
                      className="w-full h-full object-cover"
                      style={{
                        filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                        objectPosition: "center 20%",
                        transform: "scale(1.2)",
                        transformOrigin: "center 30%",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Status Indicator - Mobile */}
                <motion.div
                  className="absolute -bottom-2 -right-2 flex items-center space-x-1 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-2 py-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <span className="text-green-300 text-xs font-medium">Available</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Main Content - Mobile */}
            <motion.div className="space-y-4 sm:space-y-6" variants={staggerText} initial="initial" animate="animate">
              {/* Main Heading - Mobile */}
              <motion.h1
                className="text-4xl xs:text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight"
                variants={textReveal}
                transition={{ delay: 0.4 }}
              >
                Creative
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                  Developer
                </span>
              </motion.h1>

              {/* Name - Mobile */}
              <motion.div className="space-y-2" variants={textReveal} transition={{ delay: 0.6 }}>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-light text-white/90 tracking-widest">{name}</h2>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm xs:text-base sm:text-lg text-blue-300 font-light tracking-wider">
                    {title}
                  </span>
                  <span className="text-sm xs:text-base sm:text-lg text-blue-300 font-light tracking-wider">
                    {subtitle}
                  </span>
                </div>
              </motion.div>

              {/* Description - Mobile */}
              <motion.p
                className="text-gray-300 text-sm xs:text-base sm:text-lg max-w-md mx-auto leading-relaxed"
                variants={textReveal}
                transition={{ delay: 0.8 }}
              >
                Passionate about building scalable web applications and exploring machine learning technologies.
              </motion.p>

              {/* Social Links - Mobile */}
              <motion.div
                className="flex items-center justify-center space-x-4"
                variants={staggerText}
                initial="initial"
                animate="animate"
              >
                {[
                  { icon: Github, href: "https://github.com/permoK", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/perminus-karanja-41b0b6272/",
                    label: "LinkedIn",
                  },
                  { icon: Mail, href: "mailto:perminusk21@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    variants={fadeIn}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button - Mobile */}
              <motion.div variants={textReveal} transition={{ delay: 1.3 }}>
                <motion.button
                  onClick={() => {
                    const workSection = document.getElementById("work")
                    if (workSection) workSection.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-sm rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">View My Work</span>
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 xl:gap-20 items-center h-full">
            {/* Left Side - Main Content */}
            <motion.div
              className="flex flex-col justify-center space-y-8"
              variants={staggerText}
              initial="initial"
              animate="animate"
            >
              {/* Main Heading */}
              <motion.div className="space-y-4" variants={staggerText} initial="initial" animate="animate">
                <motion.h1
                  className="text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-tight tracking-tight"
                  variants={textReveal}
                  transition={{ delay: 0.2 }}
                >
                  Creative
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                    Developer
                  </span>
                </motion.h1>
              </motion.div>

              {/* Name */}
              <motion.div className="space-y-2" variants={textReveal} transition={{ delay: 0.4 }}>
                <h2 className="text-2xl xl:text-3xl font-light text-white/90 tracking-widest">{name}</h2>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg xl:text-xl text-blue-300 font-light tracking-wider">{title}</span>
                  <span className="text-lg xl:text-xl text-blue-300 font-light tracking-wider">{subtitle}</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-lg xl:text-xl max-w-xl leading-relaxed"
                variants={textReveal}
                transition={{ delay: 0.6 }}
              >
                Passionate about building scalable web applications and exploring machine learning technologies.
                Experienced in Python, Django, and modern web development with a focus on creating exceptional user
                experiences.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex items-center space-x-6"
                variants={staggerText}
                initial="initial"
                animate="animate"
              >
                {[
                  { icon: Github, href: "https://github.com/permoK", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/perminus-karanja-41b0b6272/",
                    label: "LinkedIn",
                  },
                  { icon: Mail, href: "mailto:perminusk21@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    variants={fadeIn}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={textReveal} transition={{ delay: 1.0 }}>
                <motion.button
                  onClick={() => {
                    const workSection = document.getElementById("work")
                    if (workSection) workSection.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-base rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-3">View My Work</span>
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              className="flex justify-center items-center"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Profile Image */}
                <motion.div
                  className="relative w-80 h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
                      backgroundSize: "300% 300%",
                      padding: "4px",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                      <img
                        src="/images/profile-photo.png"
                        alt="Karanja Perminus - Full-Stack Developer"
                        className="w-full h-full object-cover"
                        style={{
                          filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                          objectPosition: "center 20%",
                          transform: "scale(1.2)",
                          transformOrigin: "center 30%",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-500 rounded-full opacity-60"
                    animate={{
                      y: [0, 10, 0],
                      x: [0, 5, 0],
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />

                  <motion.div
                    className="absolute top-1/4 -left-8 w-6 h-6 bg-purple-500 rounded-full opacity-70"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                      filter: "blur(30px)",
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Status Indicator */}
                <motion.div
                  className="absolute bottom-8 right-8 flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <span className="text-green-300 text-sm font-medium">Available</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only on desktop */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors group z-20"
        variants={textReveal}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.4 }}
        whileHover={{ y: -2 }}
      >
        <span className="text-sm font-light tracking-wider">Scroll Down</span>
        <motion.div
          className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/80 transition-colors"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/90 transition-colors"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.button>

      {/* Decorative Elements - Desktop only */}
      <motion.div
        className="absolute top-1/4 left-8 w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-16 w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent hidden lg:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      />
    </div>
  )
}
