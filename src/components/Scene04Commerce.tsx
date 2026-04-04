import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import manubetonImg from '../assets/onlineshops/manubeton.webp'
import bepureImg from '../assets/onlineshops/bepure.webp'
import zahnheldImg from '../assets/onlineshops/zahnheld.webp'
import { ArrowUpRight } from 'lucide-react'

const shops = [
  {
    name: 'Manubeton',
    url: 'https://manubeton.de',
    img: manubetonImg,
    desc: 'Handgefertigte Betonmöbel',
  },
  {
    name: 'bepure',
    url: 'https://bepure.de',
    img: bepureImg,
    desc: 'Premium Nahrungsergänzung',
  },
  {
    name: 'Zahnheld',
    url: 'https://zahnheld.de',
    img: zahnheldImg,
    desc: 'Zahnpflege-Innovationen',
  },
]

export function Scene04Commerce() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} data-scene="04" className="relative py-32 md:py-48 overflow-hidden">
      {/* Big scene number background */}
      <div
        className="absolute top-1/4 right-0 scene-transition select-none pointer-events-none"
        aria-hidden="true"
      >
        04
      </div>

      {/* Transition title */}
      <motion.div
        className="flex items-center justify-center h-[50vh]"
        style={{ opacity: titleOpacity }}
      >
        <h2
          className="mega-text text-center"
          style={{ fontSize: 'clamp(4rem, 18vw, 20rem)' }}
        >
          COMMERCE
        </h2>
      </motion.div>

      {/* Shop cards */}
      <div className="container">
        <p className="scene-number mb-12">
          <span style={{ color: 'var(--color-accent)' }}>04</span> — The Commerce
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {shops.map((shop, i) => (
            <a
              key={shop.name}
              href={shop.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group scene-element block"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div
                className="film-image relative overflow-hidden"
                style={{
                  perspective: '1000px',
                }}
              >
                <div
                  className="transition-transform duration-500 group-hover:[transform:perspective(1000px)_rotateY(-3deg)_rotateX(2deg)]"
                >
                  <img
                    src={shop.img}
                    alt={shop.name}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  {/* Film frame overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ border: '1px solid rgba(240, 236, 228, 0.1)' }}
                  />
                  {/* Frame number */}
                  <span
                    className="absolute top-3 right-3 text-xs"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'rgba(240, 236, 228, 0.3)',
                    }}
                  >
                    04.{i + 1}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {shop.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {shop.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: 'var(--color-text-secondary)' }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
