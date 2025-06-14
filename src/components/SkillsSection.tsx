"use client"

import { motion } from "framer-motion"
import { textReveal, fadeInUp, staggerText } from "../lib/animations"
import {
  Code,
  Database,
  Server,
  Globe,
  Layers,
  Container,
  Settings,
  GitBranch,
  Cloud,
  Monitor,
  HardDrive,
  Network,
  Shield,
  FileCode,
  Palette,
  Brain,
  Activity,
} from "lucide-react"

const skills = [
  { name: "Python", level: 95 },
  { name: "Django", level: 90 },
  { name: "Docker", level: 85 },
  { name: "Kubernetes", level: 80 },
  { name: "PostgreSQL", level: 88 },
  { name: "HTML/CSS", level: 92 },
  { name: "JavaScript", level: 85 },
  { name: "TensorFlow", level: 80 },
  { name: "PyTorch", level: 78 },
  { name: "REST APIs", level: 90 },
  { name: "AWS EC2", level: 75 },
  { name: "GitHub Actions", level: 82 },
  { name: "Linux", level: 85 },
  { name: "MySQL", level: 88 },
  { name: "Nginx", level: 80 },
]

const techCategories = [
  {
    title: "Backend Development",
    icon: Server,
    techs: [
      { name: "Python", icon: FileCode },
      { name: "Django", icon: Server },
      { name: "Django REST", icon: Network },
      { name: "Gunicorn", icon: Settings },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    techs: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Palette },
      { name: "SCSS", icon: Palette },
      { name: "JavaScript", icon: Code },
      { name: "jQuery", icon: Code },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: Container,
    techs: [
      { name: "Docker", icon: Container },
      { name: "Kubernetes", icon: Layers },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "AWS EC2", icon: Cloud },
      { name: "Nginx", icon: Server },
      { name: "Linux", icon: Monitor },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    techs: [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Activity },
      { name: "Python", icon: FileCode },
      { name: "Data Analysis", icon: Activity },
    ],
  },
  {
    title: "Tools & Others",
    icon: Settings,
    techs: [
      { name: "Git", icon: GitBranch },
      { name: "Postman", icon: Network },
      { name: "Ubuntu", icon: Monitor },
      { name: "Kali Linux", icon: Shield },
      { name: "REST APIs", icon: Network },
      { name: "Excel", icon: HardDrive },
    ],
  },
]

export default function SkillsSection() {
  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 py-24 sm:py-28 md:py-32 lg:py-36">
      <div className="w-full max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start w-full">
          {/* Left side - Skills progress bars */}
          <motion.div
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            variants={staggerText}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2">
                Technical Proficiency
              </h2>
              <p className="text-gray-200 font-light text-xs xs:text-sm sm:text-base">
                Core technologies and skill levels
              </p>
            </motion.div>

            <motion.div
              className="space-y-3 sm:space-y-4 lg:space-y-6"
              variants={staggerText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group"
                  variants={fadeInUp}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-white font-light tracking-wide text-sm xs:text-base sm:text-lg">
                      {skill.name}
                    </span>
                    <span className="text-gray-300 text-xs sm:text-sm font-mono">{skill.level}%</span>
                  </div>

                  <div className="w-full h-px bg-white/10 relative overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + index * 0.05,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Tech categories */}
          <motion.div
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2"
            variants={staggerText}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/10 leading-none mb-4 sm:mb-6 lg:mb-8"
              variants={textReveal}
            >
              SKILLS
            </motion.h1>

            {/* Tech Categories */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={staggerText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {techCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="border border-white/10 rounded-lg p-4 sm:p-6 hover:border-white/20 transition-colors"
                  variants={fadeInUp}
                  transition={{ delay: 0.8 + categoryIndex * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <category.icon size={18} className="text-white" />
                    </div>
                    <h3 className="text-white font-medium text-sm sm:text-base">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {category.techs.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        className="flex items-center space-x-2 px-2 sm:px-3 py-2 bg-white/5 border border-white/20 rounded text-gray-300 text-xs sm:text-sm font-light hover:bg-white/10 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + categoryIndex * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <tech.icon size={14} className="text-white/80 flex-shrink-0" />
                        <span className="truncate">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
