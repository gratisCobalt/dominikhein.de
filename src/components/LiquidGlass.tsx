import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, type ReactNode } from 'react'

interface LiquidGlassProps {
  children: ReactNode
  className?: string
  intensity?: number // 0-1, controls effect strength
  borderRadius?: string
  glowColor?: string
}

export function LiquidGlass({
  children,
  className = '',
  intensity = 0.5,
  borderRadius = '1.5rem',
  glowColor = 'rgba(127, 255, 212, 0.5)',
}: LiquidGlassProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Mouse position relative to element center
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring animation
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)
  
  // Transform for refraction offset (edge distortion)
  const refractionX = useTransform(smoothX, [-1, 1], [-3 * intensity, 3 * intensity])
  const refractionY = useTransform(smoothY, [-1, 1], [-3 * intensity, 3 * intensity])
  
  // Light reflection position
  const highlightX = useTransform(smoothX, [-1, 1], ['-50%', '150%'])
  const highlightY = useTransform(smoothY, [-1, 1], ['-30%', '130%'])
  
  // Edge glow opacity based on distance from center
  const glowOpacity = useTransform(
    [smoothX, smoothY],
    ([x, y]) => {
      const dist = Math.sqrt((x as number) ** 2 + (y as number) ** 2)
      return 0.2 + dist * 0.3 * intensity
    }
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Normalize to -1 to 1
      const x = (e.clientX - centerX) / (rect.width / 2)
      const y = (e.clientY - centerY) / (rect.height / 2)
      
      mouseX.set(Math.max(-1, Math.min(1, x)))
      mouseY.set(Math.max(-1, Math.min(1, y)))
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={ref}
      className={`liquid-glass-container ${className}`}
      style={{
        position: 'relative',
        borderRadius,
        overflow: 'hidden',
      }}
    >
      {/* SVG Filter Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="liquid-glass-filter" x="-50%" y="-50%" width="200%" height="200%">
            {/* Blur for glass effect */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            
            {/* Displacement map for refraction */}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01" 
              numOctaves="2" 
              result="noise" 
            />
            <feDisplacementMap 
              in="blur" 
              in2="noise" 
              scale={2 * intensity} 
              xChannelSelector="R" 
              yChannelSelector="G" 
              result="displaced"
            />
            
            {/* Specular lighting for glass highlights */}
            <feSpecularLighting 
              in="displaced" 
              surfaceScale="2" 
              specularConstant="0.8" 
              specularExponent="20" 
              lightingColor="white"
              result="specular"
            >
              <fePointLight x="50" y="50" z="100" />
            </feSpecularLighting>
            
            {/* Composite everything */}
            <feComposite in="displaced" in2="specular" operator="arithmetic" k1="0" k2="1" k3="0.3" k4="0" />
          </filter>
        </defs>
      </svg>

      {/* Background blur layer */}
      <div
        className="liquid-glass-backdrop"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderRadius,
        }}
      />

      {/* Inner edge highlight (top) */}
      <motion.div
        className="liquid-glass-edge-top"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)`,
          borderRadius: `${borderRadius} ${borderRadius} 0 0`,
          opacity: glowOpacity,
          pointerEvents: 'none',
        }}
      />

      {/* Refraction edge glow (left) */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '2px',
          background: `linear-gradient(180deg, ${glowColor}, transparent 50%, ${glowColor})`,
          opacity: useTransform(smoothX, [-1, 0, 1], [0.8, 0.3, 0.1]),
          filter: 'blur(1px)',
          pointerEvents: 'none',
        }}
      />

      {/* Refraction edge glow (right) */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '2px',
          background: `linear-gradient(180deg, ${glowColor}, transparent 50%, ${glowColor})`,
          opacity: useTransform(smoothX, [-1, 0, 1], [0.1, 0.3, 0.8]),
          filter: 'blur(1px)',
          pointerEvents: 'none',
        }}
      />

      {/* Specular highlight (moves with mouse) */}
      <motion.div
        className="liquid-glass-highlight"
        style={{
          position: 'absolute',
          width: '60%',
          height: '40%',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
          left: highlightX,
          top: highlightY,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          filter: 'blur(20px)',
        }}
      />

      {/* Border with gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -1px 1px rgba(0, 0, 0, 0.1),
            0 8px 32px rgba(0, 0, 0, 0.3)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Outer glow */}
      <motion.div
        style={{
          position: 'absolute',
          inset: -1,
          borderRadius,
          boxShadow: `0 0 40px ${glowColor}`,
          opacity: glowOpacity,
          pointerEvents: 'none',
        }}
      />

      {/* Content with subtle refraction offset */}
      <motion.div
        style={{
          position: 'relative',
          x: refractionX,
          y: refractionY,
          zIndex: 1,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Simpler version for cards
export function LiquidGlassCard({
  children,
  className = '',
  glowColor = 'rgba(127, 255, 212, 0.4)',
}: {
  children: ReactNode
  className?: string
  glowColor?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  
  const springConfig = { stiffness: 200, damping: 25 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Gradient position for specular highlight
  const gradientX = useTransform(smoothX, [0, 1], ['0%', '100%'])
  const gradientY = useTransform(smoothY, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width)
      mouseY.set((e.clientY - rect.top) / rect.height)
    }

    const handleMouseLeave = () => {
      mouseX.set(0.5)
      mouseY.set(0.5)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={ref}
      className={`liquid-glass-card ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic specular highlight */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${gradientX.get()}% ${gradientY.get()}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Top edge glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom shadow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Outer glow on hover */}
      <motion.div
        style={{
          position: 'absolute',
          inset: -2,
          borderRadius: '1.75rem',
          boxShadow: `0 0 30px ${glowColor}`,
          opacity: 0,
          pointerEvents: 'none',
        }}
        whileHover={{ opacity: 0.5 }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  )
}
