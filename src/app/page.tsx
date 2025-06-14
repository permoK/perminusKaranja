"use client"

import { useState, useEffect } from "react"
import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import VerticalAboutSection from "../components/VerticalAboutSection"
import ProjectSection from "../components/ProjectSection"
import SkillsSection from "../components/SkillsSection"
import DevOpsShowcase from "../components/DevOpsShowcase"
import ContactSection from "../components/ContactSection"
import LoadingScreen from "../components/LoadingScreen"
import PerformanceOptimizer from "../components/PerformanceOptimizer"
import AuroraBackground from "../components/AuroraBackground"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Add a small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 500)
  }

  // Ensure loading screen shows first and manage body classes
  useEffect(() => {
    // Add loading class to body to remove padding and prevent scroll
    if (isLoading) {
      document.body.classList.add("loading")
      document.body.style.overflow = "hidden"
    } else {
      document.body.classList.remove("loading")
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.classList.remove("loading")
      document.body.style.overflow = "auto"
    }
  }, [isLoading])

  return (
    <main className="relative min-h-screen">
      {/* Loading Screen - Always render first */}
      <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />

      {/* Main Content - Only show after loading is complete */}
      {showContent && (
        <>
          <AuroraBackground />
          <PerformanceOptimizer />
          <Navigation />
          <div className="relative z-10 w-full">
            <section id="home">
              <HeroSection />
            </section>
            <section id="about">
              <VerticalAboutSection />
            </section>
            <section id="work">
              <ProjectSection />
            </section>
            <section id="skills">
              <SkillsSection />
            </section>
            <DevOpsShowcase />
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        </>
      )}
    </main>
  )
}
