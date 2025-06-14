"use client"

import { useEffect, useRef } from "react"

interface Shape {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  color: string
  type: "triangle" | "circle" | "polygon"
  speed: { x: number; y: number }
}

export default function AnimatedCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const shapesRef = useRef<Shape[]>([])
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"

      ctx.scale(dpr, dpr)
    }

    const createShapes = () => {
      const shapes: Shape[] = []
      const screenWidth = window.innerWidth

      // Responsive shape count based on screen size
      let shapeCount = 8 // Default for mobile
      if (screenWidth >= 1024)
        shapeCount = 12 // Desktop
      else if (screenWidth >= 768)
        shapeCount = 10 // Tablet
      else if (screenWidth >= 640) shapeCount = 9 // Large mobile

      const canvasRect = canvas.getBoundingClientRect()

      for (let i = 0; i < shapeCount; i++) {
        const baseSize = screenWidth < 640 ? 40 : screenWidth < 1024 ? 80 : 120
        const sizeVariation = screenWidth < 640 ? 30 : screenWidth < 1024 ? 60 : 100

        shapes.push({
          x: Math.random() * canvasRect.width,
          y: Math.random() * canvasRect.height,
          size: Math.random() * sizeVariation + baseSize,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * (screenWidth < 640 ? 0.01 : 0.02),
          opacity: Math.random() * 0.2 + 0.05,
          color: ["#0ea5e9", "#3b82f6", "#1e40af", "#0f172a", "#1e293b"][Math.floor(Math.random() * 5)],
          type: ["triangle", "circle", "polygon"][Math.floor(Math.random() * 3)] as "triangle" | "circle" | "polygon",
          speed: {
            x: (Math.random() - 0.5) * (screenWidth < 640 ? 0.2 : 0.4),
            y: (Math.random() - 0.5) * (screenWidth < 640 ? 0.2 : 0.4),
          },
        })
      }

      shapesRef.current = shapes
    }

    const drawTriangle = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.beginPath()
      ctx.moveTo(0, -shape.size / 2)
      ctx.lineTo(-shape.size / 2, shape.size / 2)
      ctx.lineTo(shape.size / 2, shape.size / 2)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    const drawCircle = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.beginPath()
      ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const drawPolygon = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.beginPath()
      const sides = 6
      for (let i = 0; i < sides; i++) {
        const angle = (i * Math.PI * 2) / sides
        const x = (Math.cos(angle) * shape.size) / 2
        const y = (Math.sin(angle) * shape.size) / 2
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      const canvasRect = canvas.getBoundingClientRect()
      timeRef.current += 0.01

      // Create dynamic gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvasRect.width, canvasRect.height)
      const hue1 = (timeRef.current * 20) % 360
      const hue2 = (timeRef.current * 15 + 60) % 360

      gradient.addColorStop(0, `hsl(${hue1}, 70%, 15%)`)
      gradient.addColorStop(0.5, `hsl(${hue2}, 60%, 10%)`)
      gradient.addColorStop(1, `hsl(${(hue1 + 120) % 360}, 80%, 8%)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvasRect.width, canvasRect.height)

      // Update and draw shapes
      shapesRef.current.forEach((shape) => {
        // Update position
        shape.x += shape.speed.x
        shape.y += shape.speed.y

        // Update rotation
        shape.rotation += shape.rotationSpeed

        // Bounce off edges
        if (shape.x < -shape.size || shape.x > canvasRect.width + shape.size) {
          shape.speed.x *= -1
        }
        if (shape.y < -shape.size || shape.y > canvasRect.height + shape.size) {
          shape.speed.y *= -1
        }

        // Keep shapes in bounds
        shape.x = Math.max(-shape.size, Math.min(canvasRect.width + shape.size, shape.x))
        shape.y = Math.max(-shape.size, Math.min(canvasRect.height + shape.size, shape.y))

        // Dynamic color and opacity
        const colorShift = Math.sin(timeRef.current + shape.x * 0.01) * 30
        const baseHue = 200 + colorShift
        shape.opacity = 0.05 + Math.sin(timeRef.current * 2 + shape.y * 0.01) * 0.1

        ctx.fillStyle = `hsla(${baseHue}, 70%, 50%, ${shape.opacity})`

        // Draw shape
        switch (shape.type) {
          case "triangle":
            drawTriangle(ctx, shape)
            break
          case "circle":
            drawCircle(ctx, shape)
            break
          case "polygon":
            drawPolygon(ctx, shape)
            break
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      createShapes()
    }

    // Initialize
    resizeCanvas()
    createShapes()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} />
}
