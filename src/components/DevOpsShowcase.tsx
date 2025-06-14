"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerText } from "../lib/animations"
import { Container, Layers, GitBranch, Cloud, Server, Monitor, Settings, Zap, Shield } from "lucide-react"

const devopsTools = [
  {
    category: "Containerization",
    icon: Container,
    tools: [
      { name: "Docker", icon: Container, level: 85 },
      { name: "Docker Compose", icon: Layers, level: 80 },
      { name: "Kubernetes", icon: Layers, level: 75 },
    ],
  },
  {
    category: "CI/CD",
    icon: GitBranch,
    tools: [
      { name: "GitHub Actions", icon: GitBranch, level: 82 },
      { name: "Git", icon: GitBranch, level: 90 },
      { name: "Automated Testing", icon: Zap, level: 78 },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    tools: [
      { name: "AWS EC2", icon: Cloud, level: 75 },
      { name: "Linux Administration", icon: Monitor, level: 85 },
      { name: "Nginx", icon: Server, level: 80 },
    ],
  },
  {
    category: "Monitoring & Security",
    icon: Shield,
    tools: [
      { name: "System Monitoring", icon: Monitor, level: 70 },
      { name: "Security Best Practices", icon: Shield, level: 75 },
      { name: "Performance Optimization", icon: Settings, level: 80 },
    ],
  },
]

export default function DevOpsShowcase() {
  return (
    <div className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={staggerText}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4" variants={fadeInUp}>
            DevOps & Infrastructure
          </motion.h2>
          <motion.p
            className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Modern development practices with containerization, automation, and cloud infrastructure
          </motion.p>
        </motion.div>

        {/* DevOps Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={staggerText}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {devopsTools.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              variants={fadeInUp}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-medium text-lg">{category.category}</h3>
              </div>

              {/* Tools List */}
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + categoryIndex * 0.1 + toolIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <tool.icon size={16} className="text-gray-300" />
                        <span className="text-gray-200 text-sm font-light">{tool.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs font-mono">{tool.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.8 + categoryIndex * 0.1 + toolIndex * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DevOps Workflow */}
        <motion.div
          className="mt-16 sm:mt-20"
          variants={staggerText}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-light text-white text-center mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            Development Workflow
          </motion.h3>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12">
            {[
              { icon: GitBranch, label: "Version Control", desc: "Git & GitHub" },
              { icon: Container, label: "Containerization", desc: "Docker & K8s" },
              { icon: Zap, label: "CI/CD Pipeline", desc: "GitHub Actions" },
              { icon: Cloud, label: "Cloud Deploy", desc: "AWS Infrastructure" },
            ].map((step, index) => (
              <motion.div
                key={step.label}
                className="flex flex-col items-center text-center group"
                variants={fadeInUp}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-3 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <step.icon size={28} className="text-white" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">{step.label}</h4>
                <p className="text-gray-400 text-xs">{step.desc}</p>

                {/* Arrow connector (hidden on mobile, last item) */}
                {index < 3 && (
                  <div className="hidden sm:block absolute top-8 left-full w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
