import { useState, useEffect } from 'react'

const SCENES = ['Opening', 'Origin', 'Craft', 'Commerce', 'Story', 'Signal', 'Credits']

export function Navigation() {
  const [activeScene, setActiveScene] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY
      setHidden(y > lastScroll && y > 100)
      setLastScroll(y)

      const sections = document.querySelectorAll('[data-scene]')
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveScene(i)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  function scrollToScene(index: number) {
    const sections = document.querySelectorAll('[data-scene]')
    sections[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 transition-transform duration-500"
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        background: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <a
        href="#"
        className="text-sm tracking-[0.15em] uppercase"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        D.H.
      </a>

      <div className="flex items-center gap-3">
        {SCENES.map((scene, i) => (
          <button
            key={scene}
            onClick={() => scrollToScene(i)}
            className={`nav-dot ${i === activeScene ? 'active' : ''}`}
            aria-label={`Szene: ${scene}`}
            title={scene}
          />
        ))}
      </div>
    </nav>
  )
}
