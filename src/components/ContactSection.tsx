"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, User } from "lucide-react"
import { fadeInUp, staggerText, scaleIn } from "../lib/animations"

const socialLinks = [
  { icon: Github, href: "https://github.com/permoK", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/perminus-karanja-41b0b6272/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/peekayKaranja", label: "Twitter" },
]

const contactInfo = [
  { icon: Mail, text: "perminusk21@gmail.com", href: "mailto:perminusk21@gmail.com", label: "Email" },
  { icon: Phone, text: "+254 714 025 354", href: "tel:+254714025354", label: "Phone" },
  { icon: MapPin, text: "Nairobi, Kenya", href: "#", label: "Address" },
]

const achievements = [
  { title: "Codewars", desc: "Active problem solver", href: "https://www.codewars.com/users/permoK" },
  { title: "GitHub", desc: "Open source contributor", href: "https://github.com/permoK" },
  { title: "Docker Hub", desc: "Container images published", href: "https://hub.docker.com/u/permok" },
  { title: "Projects", desc: "25+ containerized applications", href: "#work" },
]

export default function ContactSection() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black flex items-center justify-center px-4 py-24 sm:py-28 md:py-32 lg:py-36 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Dotted pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        />

        {/* Moving dots animation */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center w-full">
          {/* Left side - Get in touch text and profile */}
          <motion.div
            className="flex flex-col justify-center order-2 lg:order-1"
            variants={staggerText}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <motion.div
              className="mb-8 sm:mb-12 flex justify-center lg:justify-start"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Professional profile photo with enhanced zoom and clarity */}
                  <img
                    src="/images/profile-photo.png"
                    alt="Karanja Perminus - Full-Stack Developer"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(1.15) contrast(1.1) saturate(1.05) sharpen(1px)",
                      objectPosition: "center 15%",
                      transform: "scale(1.3)",
                      transformOrigin: "center 30%",
                    }}
                  />

                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </motion.div>

                {/* Enhanced animated ring around profile */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-400"
                  style={{
                    background: "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                    padding: "2px",
                    borderRadius: "50%",
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                />

                {/* Status indicator */}
                <motion.div
                  className="absolute bottom-3 right-3 w-7 h-7 bg-green-500 rounded-full border-3 border-white shadow-xl flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="w-2.5 h-2.5 bg-white rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Large "Get in touch" text */}
            <motion.div
              className="mb-8 sm:mb-12 text-center lg:text-left"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Get in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  touch.
                </span>
              </h1>
            </motion.div>

            {/* Achievements - Redesigned as cards */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              variants={staggerText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.a
                  key={achievement.title}
                  href={achievement.href}
                  target={achievement.href.startsWith("http") ? "_blank" : "_self"}
                  rel={achievement.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="group p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/30 transition-all duration-300 hover:bg-white/10"
                  variants={fadeInUp}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className="text-center">
                    <h4 className="text-white font-medium text-sm sm:text-base mb-1">{achievement.title}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{achievement.desc}</p>
                    <ExternalLink
                      size={12}
                      className="text-white/40 group-hover:text-white/80 transition-colors mx-auto mt-2"
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Contact information */}
          <motion.div
            className="flex flex-col justify-center space-y-8 sm:space-y-10 lg:space-y-12 order-1 lg:order-2"
            variants={staggerText}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4 lg:mb-6">
                Let's Build Something Amazing
              </h2>
              <p className="text-gray-200 text-sm xs:text-base sm:text-lg leading-relaxed">
                I'm always excited about new opportunities and interesting projects. Whether you need a full-stack web
                application, machine learning solution, or just want to discuss technology, let's connect!
              </p>
            </motion.div>

            {/* Contact information - Enhanced design */}
            <motion.div
              className="space-y-6 sm:space-y-8"
              variants={staggerText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.text}
                  className="group"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <contact.icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-lg mb-1">{contact.label}</h3>
                      <motion.a
                        href={contact.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        {contact.text}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Follow Us section */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.8 }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg mb-4">Follow Me</h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors"
                        variants={scaleIn}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} transition={{ delay: 1.2 }}>
              <motion.a
                href="mailto:perminusk21@gmail.com"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium tracking-wide text-sm sm:text-base rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} className="mr-3" />
                START A PROJECT
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-xs font-light tracking-widest"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 2 }}
      >
        © 2024 KARANJA PERMINUS
      </motion.div>
    </div>
  )
}
