import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Projekte', href: '#projects' },
  { name: 'Shops', href: '#shops' },
  { name: 'Blog', href: '#blog' },
  { name: 'Kontakt', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-glass-border py-4' : 'py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container flex items-center justify-between">
        <Link to="/">
          <motion.img
            src="/logo.webp"
            alt="Dominik Hein"
            className="h-8 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="link-underline text-sm font-medium text-text-secondary hover:text-text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="https://linkedin.com/in/dominikhein"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <span className="h-0.5 w-6 bg-text-primary" />
          <span className="h-0.5 w-6 bg-text-primary" />
          <span className="h-0.5 w-4 bg-text-primary" />
        </motion.button>
      </div>
    </motion.header>
  )
}
