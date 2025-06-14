"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Globe, X, ChevronLeft, ChevronRight } from "lucide-react"
import { textReveal, fadeInUp, staggerText } from "../lib/animations"
import { useState, useCallback } from "react"

const projects = [
  {
    id: 1,
    title: "FIVE STAR SEWER",
    subtitle: "Professional Sewer & Drain Services",
    year: "2024",
    category: "BUSINESS",
    image: "/images/projects/fivestarsewer.jpg",
    gallery: [
      "/images/projects/fivestarsewer.jpg",
      "/images/projects/fivestarsewer-services.jpg",
      "/images/projects/fivestarsewer-mobile.jpg",
    ],
    description:
      "A comprehensive business website for Five Star Sewer, a professional sewer and drain cleaning service in the Twin Cities. Features service booking, emergency contact, testimonials, and detailed service information with a focus on reliability and professionalism.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "Responsive Design"],
    features: ["Service Booking", "Emergency Contact", "Customer Testimonials", "Mobile Responsive", "SEO Optimized"],
    links: {
      github: "https://github.com/permoK/fivestarsewer",
      live: "https://fivestarsewer.com",
    },
  },
  {
    id: 2,
    title: "SDG DIGITAL ELEVATIONS",
    subtitle: "Faith-Based Digital Agency",
    year: "2024",
    category: "AGENCY",
    image: "/images/projects/sdg-digital-main.jpg",
    gallery: [
      "/images/projects/sdg-digital-main.jpg",
      "/images/projects/sdg-digital-foundation.jpg",
      "/images/projects/sdg-services.jpg",
    ],
    description:
      "A faith-based digital agency website built on biblical foundations, featuring web design and development services. The site emphasizes excellence, integrity, and craftsmanship with a modern dark theme, incorporating scripture-based values into professional digital services.",
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "Vercel"],
    features: [
      "Faith-Based Foundation",
      "Service Portfolio",
      "Newsletter Signup",
      "Modern Design",
      "Biblical Values Integration",
    ],
    links: {
      github: "https://github.com/permoK/sdg-digital-elevations",
      live: "https://sdgdigitalelevations.com/",
    },
  },
  {
    id: 3,
    title: "ECO FARM PLATFORM",
    subtitle: "Sustainable Agriculture Management",
    year: "2024",
    category: "AGRICULTURE",
    image: "/images/projects/ecofarm.jpg",
    gallery: [
      "/images/projects/ecofarm.jpg",
      "/images/projects/ecofarm-dashboard.jpg",
      "/images/projects/ecofarm-mobile.jpg",
    ],
    description:
      "An innovative eco-friendly farming platform that helps farmers manage sustainable agricultural practices. Features crop monitoring, resource management, weather integration, and sustainability tracking with modern web technologies.",
    technologies: ["Django", "Python", "PostgreSQL", "JavaScript", "Bootstrap", "Chart.js"],
    features: [
      "Crop Monitoring",
      "Resource Management",
      "Weather Integration",
      "Sustainability Tracking",
      "Farmer Dashboard",
    ],
    links: {
      github: "https://github.com/permoK/ecofarm-platform",
      live: "https://ecofarm.cecilgachie.tech/",
    },
  },
  {
    id: 4,
    title: "CZ SUPPLY COMPANY",
    subtitle: "Industrial Supply & Equipment",
    year: "2024",
    category: "E-COMMERCE",
    image: "/images/projects/czsupply.jpg",
    gallery: [
      "/images/projects/czsupply.jpg",
      "/images/projects/czsupply-catalog.jpg",
      "/images/projects/czsupply-mobile.jpg",
    ],
    description:
      "A comprehensive e-commerce platform for CZ Supply Company, specializing in industrial supplies and equipment. Features product catalog, inventory management, order processing, and customer account management with secure payment integration.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript", "Payment Gateway"],
    features: ["Product Catalog", "Inventory Management", "Order Processing", "Customer Accounts", "Secure Payments"],
    links: {
      github: "https://github.com/permoK/czsupply-ecommerce",
      live: "https://www.czsupply.com/",
    },
  },
  {
    id: 5,
    title: "TRADING JOURNAL",
    subtitle: "Personal Trading Analytics Platform",
    year: "2024",
    category: "FINTECH",
    image: "/images/projects/trading-journal.jpg",
    gallery: [
      "/images/projects/trading-journal.jpg",
      "/images/projects/trading-analytics.jpg",
      "/images/projects/trading-mobile.jpg",
    ],
    description:
      "A sophisticated trading journal application for tracking and analyzing personal trading performance. Features trade logging, performance analytics, profit/loss tracking, and detailed reporting with interactive charts and data visualization.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Chart.js", "Vercel"],
    features: ["Trade Logging", "Performance Analytics", "P&L Tracking", "Interactive Charts", "Data Export"],
    links: {
      github: "https://github.com/permoK/trading-journal",
      live: "https://trading-journal-inky.vercel.app/",
    },
  },
  {
    id: 6,
    title: "PORTFOLIO WEBSITE",
    subtitle: "Personal Developer Portfolio",
    year: "2024",
    category: "PORTFOLIO",
    image: "/images/projects/portfolio-website.jpg",
    gallery: [
      "/images/projects/portfolio-website.jpg",
      "/images/projects/portfolio-mobile.jpg",
      "/images/projects/portfolio-animations.jpg",
    ],
    description:
      "A modern, animated portfolio website built with Next.js and Framer Motion, featuring smooth animations, responsive design, and optimized performance. Showcases projects, skills, and professional experience with interactive elements.",
    technologies: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript", "Vercel"],
    features: ["Smooth Animations", "Responsive Design", "SEO Optimized", "Fast Loading", "Interactive Elements"],
    links: {
      github: "https://github.com/permoK/portfolio",
      live: "https://permok.dev",
    },
  },
]

interface ProjectModalProps {
  project: (typeof projects)[0]
  isOpen: boolean
  onClose: () => void
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 z-30 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ pointerEvents: 'auto' }}
      >
        <motion.div
          className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-video bg-gray-800 overflow-hidden">
              <img
                src={project.gallery[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery Navigation */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">About This Project</h4>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-base font-semibold shadow-md w-full sm:w-auto"
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-base font-semibold shadow-md w-full sm:w-auto"
              >
                <Globe size={20} />
                <span>Live Site</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const openModal = useCallback((project: (typeof projects)[0]) => {
    setSelectedProject(project)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-black px-4 py-24 sm:py-28 md:py-32 lg:py-36 overflow-visible">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20"
          variants={staggerText}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/10 leading-none mb-4 sm:mb-6"
            variants={textReveal}
          >
            WORK
          </motion.h1>
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">Featured Projects</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Real-world applications and websites I've built for clients and personal projects
              </p>
            </div>
            <div className="text-right">
              <span className="text-gray-400 text-sm font-mono">{projects.length} Live Projects</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerText}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              variants={fadeInUp}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
            >
              {/* Project Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500">
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                    {project.category}
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.year}
                  </div>

                  {/* Hover Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  >
                    <div className="flex space-x-3">
                      <motion.button
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.links.github, "_blank")
                        }}
                      >
                        <Github size={18} />
                      </motion.button>
                      <motion.button
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.links.live, "_blank")
                        }}
                      >
                        <ExternalLink size={18} />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* View Details Button */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <button className="w-full py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/30 transition-colors">
                      View Details
                    </button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${
                      hoveredProject === project.id ? "rgba(59, 130, 246, 0.5)" : "transparent"
                    }, transparent)`,
                  }}
                  animate={{
                    background:
                      hoveredProject === project.id
                        ? "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent)"
                        : "linear-gradient(45deg, transparent, transparent, transparent)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="https://github.com/permoK"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2">View More on GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject as (typeof projects)[0]}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </div>
  )
}
