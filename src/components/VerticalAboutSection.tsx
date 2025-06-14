"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerText, textReveal } from "../lib/animations"
import { Code, Database, Brain, Container, GitBranch, Cloud } from "lucide-react"

export default function VerticalAboutSection() {
  const interests = [
    { icon: Code, title: "Full-Stack Development", desc: "End-to-end web applications" },
    { icon: Container, title: "DevOps & Containerization", desc: "Docker, Kubernetes, CI/CD" },
    { icon: Database, title: "Database Architecture", desc: "PostgreSQL, MySQL, optimization" },
    { icon: Brain, title: "Machine Learning", desc: "TensorFlow, PyTorch, AI models" },
    { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS, scalable deployments" },
    { icon: GitBranch, title: "Version Control & CI/CD", desc: "Git, GitHub Actions, automation" },
  ]

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 py-24 sm:py-28 md:py-32 lg:py-36">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </motion.div>

      {/* Main Content Container */}
      <div className="w-full max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            variants={staggerText}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Large Background Text */}
            <motion.div
              className="absolute -left-1 xs:-left-2 sm:-left-4 lg:-left-8 top-1/2 transform -translate-y-1/2 -z-10 opacity-20 sm:opacity-30 lg:opacity-100"
              variants={textReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h1 className="text-[4rem] xs:text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[14rem] 2xl:text-[16rem] font-bold text-white/5 leading-none select-none">
                ABOUT
              </h1>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Full-Stack
                <br />
                <span className="text-white/80">Developer</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-3 sm:space-y-4 lg:space-y-6 text-gray-100 text-sm xs:text-base sm:text-lg leading-relaxed max-w-xl"
              variants={staggerText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                I'm a passionate software engineer with expertise in Python, Django, and modern web technologies. I love
                building scalable applications and exploring the intersection of web development and machine learning.
              </motion.p>

              <motion.p variants={fadeInUp} transition={{ delay: 0.6 }} className="hidden xs:block">
                With experience in both frontend and backend development, I create comprehensive solutions that deliver
                exceptional user experiences while maintaining robust, secure architectures.
              </motion.p>

              <motion.p variants={fadeInUp} transition={{ delay: 0.8 }} className="hidden sm:block">
                When I'm not coding, you'll find me contributing to open-source projects, learning new technologies, or
                working on machine learning experiments with TensorFlow and PyTorch.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} transition={{ delay: 1.0 }}>
              <motion.button
                onClick={() => {
                  const workSection = document.getElementById("work")
                  if (workSection) workSection.scrollIntoView({ behavior: "smooth" })
                }}
                className="group flex items-center space-x-2 sm:space-x-3 text-white/80 hover:text-white font-light tracking-wider text-xs sm:text-sm border-b border-white/30 hover:border-white/80 pb-1 sm:pb-2 transition-all duration-300"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>VIEW MY WORK</span>
                <motion.span className="transform transition-transform group-hover:translate-x-1">→</motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interests Grid */}
          <motion.div
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2"
            variants={staggerText}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Interests Header */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.6 }}>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4 lg:mb-6">
                Areas of Interest
              </h3>
            </motion.div>

            {/* Interests Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              variants={staggerText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  className="group p-4 sm:p-6 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                  variants={fadeInUp}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                      <interest.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base mb-1">{interest.title}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{interest.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8"
              variants={staggerText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div className="text-center" variants={fadeInUp} transition={{ delay: 1.2 }}>
                <div className="text-xl xs:text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">3+</div>
                <div className="text-gray-200 text-xs sm:text-sm tracking-wider">Years Experience</div>
              </motion.div>

              <motion.div className="text-center" variants={fadeInUp} transition={{ delay: 1.3 }}>
                <div className="text-xl xs:text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">25+</div>
                <div className="text-gray-200 text-xs sm:text-sm tracking-wider">Projects Completed</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
