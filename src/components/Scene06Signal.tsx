import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'E-Mail',
    href: 'mailto:hello@dominikhein.de',
    display: 'hello@dominikhein.de',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dominikhein',
    display: 'linkedin.com/in/dominikhein',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/dominikhein',
    display: 'github.com/dominikhein',
  },
]

const ctaLetters = 'LASS UNS BAUEN.'.split('')

export function Scene06Signal() {
  return (
    <section
      data-scene="06"
      className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden"
    >
      {/* Mega CTA text */}
      <div className="text-center px-4 mb-16">
        <h2 className="mega-text flex flex-wrap justify-center" style={{ fontSize: 'clamp(3rem, 12vw, 14rem)' }}>
          {ctaLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: i * 0.04,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={letter === ' ' ? 'w-[0.25em]' : ''}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Available badge */}
      <motion.div
        className="flex items-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className="relative">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: '#4ade80' }}
          />
          <div
            className="absolute inset-0 w-2.5 h-2.5 rounded-full"
            style={{
              background: '#4ade80',
              animation: 'pulse-ring 2s ease-out infinite',
            }}
          />
        </div>
        <span
          className="text-sm tracking-[0.15em] uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
        >
          Verfügbar für Projekte
        </span>
      </motion.div>

      {/* Contact links */}
      <div className="flex flex-col items-center gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="group flex items-center gap-3 transition-colors duration-300 hover:text-[var(--color-accent)]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <link.icon className="w-4 h-4" />
            <span
              className="text-sm tracking-wider"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {link.display}
            </span>
          </a>
        ))}
      </div>

      {/* Scene number */}
      <div className="absolute bottom-8 left-6 scene-number">
        <span style={{ color: 'var(--color-accent)' }}>06</span> — Signal
      </div>
    </section>
  )
}
