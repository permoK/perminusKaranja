"use client"

import { motion } from "framer-motion"
import { fadeIn } from "../lib/animations"
import { useState, useEffect } from "react"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"

const slideLabels = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Check if page is scrolled for background opacity
      setIsScrolled(scrollY > 50)

      // Check if we're in the hero section (first screen)
      setIsHeroSection(scrollY < window.innerHeight * 0.8)

      // Section detection
      const sections = slideLabels.map((item) => item.href.substring(1))
      const scrollPosition = scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop Navigation Bar - Fixed and Sticky */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[9999] hidden md:block py-4 lg:py-6"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex justify-center">
          <div
            className={`backdrop-blur-xl border border-white/20 rounded-full shadow-2xl px-4 lg:px-6 xl:px-8 py-3 lg:py-4 transition-all duration-300 ${
              isScrolled ? "bg-black/80 border-white/40 shadow-xl" : "bg-black/40 border-white/20"
            }`}
          >
            <div className="flex items-center justify-between min-w-[500px] lg:min-w-[600px] xl:min-w-[700px]">
              {/* Logo/Brand - Left Side */}
              <div className="mr-6 lg:mr-8">
                <motion.button
                  onClick={() => scrollToSection("#home")}
                  className="text-white font-light tracking-widest text-sm lg:text-base hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  PERMO K
                </motion.button>
              </div>

              {/* Navigation Menu */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                {slideLabels.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-xs lg:text-sm font-medium tracking-wide transition-all duration-300 rounded-full px-3 lg:px-4 py-2 min-h-[36px] lg:min-h-[40px] flex items-center justify-center space-x-2 ${
                      activeSection === item.href.substring(1)
                        ? "text-white bg-white/20 shadow-lg border border-white/30"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={14} />
                    <span className="hidden lg:block">{item.name}</span>

                    {/* Active indicator */}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute w-1 h-1 bg-white rounded-full -bottom-1 left-1/2 transform -translate-x-1/2"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Top Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9999] md:hidden py-3 xs:py-4"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex justify-center px-4">
          <div
            className={`backdrop-blur-xl border border-white/20 rounded-full px-3 xs:px-4 sm:px-6 py-2 xs:py-3 shadow-2xl transition-all duration-300 ${
              isScrolled ? "bg-black/80 border-white/40 shadow-xl" : "bg-black/40 border-white/20"
            }`}
          >
            <div className="flex items-center justify-between min-w-[260px] xs:min-w-[280px] sm:min-w-[320px]">
              {/* Logo/Brand - Mobile */}
              <motion.button
                onClick={() => scrollToSection("#home")}
                className="text-white font-light text-xs xs:text-sm sm:text-base tracking-widest"
                whileHover={{ scale: 1.05 }}
              >
                PERMO K
              </motion.button>

              {/* Mobile Menu Indicator */}
              <div className="flex items-center space-x-2 xs:space-x-3">
                <span className="text-white/80 text-xs sm:text-sm font-light">
                  {slideLabels.find((item) => item.href.substring(1) === activeSection)?.name || "Home"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu - Bottom Bar - Hidden in Hero Section */}
      <motion.div
        className={`fixed bottom-0 left-0 right-0 z-[9998] md:hidden py-3 xs:py-4 sm:py-6 transition-all duration-500 ${
          isHeroSection
            ? "opacity-0 pointer-events-none translate-y-full"
            : "opacity-100 pointer-events-auto translate-y-0"
        }`}
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex justify-center px-4">
          <div className="flex items-center space-x-2 xs:space-x-3 bg-black/90 backdrop-blur-md px-3 xs:px-4 py-2 xs:py-3 rounded-full border border-white/30 shadow-xl">
            {slideLabels.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-10 h-10 xs:w-11 xs:h-11 rounded-full transition-all duration-300 flex items-center justify-center ${
                  activeSection === item.href.substring(1)
                    ? "bg-white text-black scale-110 shadow-lg"
                    : "bg-white/20 text-white/70 hover:bg-white/30 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={item.name}
              >
                <item.icon size={16} />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}
