import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // GSAP text animation
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char')
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'back.out(1.7)',
          delay: 0.3,
        }
      )
    }
  }, [])

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Hero background gradient */}
      <div className="bg-hero-gradient absolute inset-0" />
      
      {/* Placeholder for background image - will be replaced */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />

      <div className="container relative z-10 text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex"
        >
          <span className="liquid-glass-btn rounded-full px-4 py-2 text-sm text-text-secondary">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
            Bundessieg Jugend forscht 2022
          </span>
        </motion.div>

        {/* Main title with character animation */}
        <h1
          ref={titleRef}
          className="mb-6 text-5xl font-bold leading-tight text-text-primary md:text-7xl lg:text-8xl"
          style={{ perspective: '1000px' }}
        >
          {splitText('Dominik Hein')}
        </h1>

        {/* Subtitle */}
        <motion.p
          ref={subtitleRef}
          className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Software Developer & Innovator.{' '}
          <span className="text-gradient font-semibold">
            Building digital experiences
          </span>{' '}
          that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(127, 255, 212, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Meine Projekte
          </motion.a>
          <motion.a
            href="#contact"
            className="liquid-glass-btn rounded-full px-8 py-3 font-medium text-text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontakt aufnehmen
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex h-14 w-8 items-start justify-center rounded-full border-2 border-glass-border p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="h-3 w-1 rounded-full bg-accent"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="liquid-glass absolute bottom-20 left-10 h-20 w-20 rounded-2xl"
        animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-20 h-16 w-16 rounded-full border border-accent/30 bg-accent/10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
