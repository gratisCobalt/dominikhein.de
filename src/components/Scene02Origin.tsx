import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import titleImg from '../assets/jufo/Jugend_forscht_revolutionAIR_Titelbild_jpg.webp'

// Import all jufo images for the filmstrip
import lindner from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Christian_Lindner_jpg.webp'
import lindner2 from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Christian_Lindner_2_jpg.webp'
import habeck from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Robert_Habeck_Wirtschaftsminister_JPG.webp'
import habeck2 from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Robert_Habeck_Wirtschaftsminister_2_JPG.webp'
import amthor from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Philipp_Amthor_jpeg.webp'
import bundestag from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Nadine_Sch_n_Bundestag_jpg.webp'
import hannover from '../assets/jufo/Jugend_forscht_revolutionAIR_Gruppenbild_Hannovermesse_Alle_Mitgleider_vom_Stand_des_Forschungsministeriums_jpg.webp'
import afterparty from '../assets/jufo/Jugend_forscht_revolutionAIR_Bundeswettbewerb_Afterparty_jpg.webp'
import ralf from '../assets/jufo/Dominik_Bild_mit_Ralf_von_Wissen_macht_Ahh_JPG.webp'
import ministerin from '../assets/jufo/Jugend_forscht_revolutionAIR_Hannover_Messe_Forschungsministerin_jpeg.webp'
import labor from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_auf_dem_Labor_von_Heraeus_von_der_Spekrumsanalyse_JPG.webp'
import nahaufnahme from '../assets/jufo/Jugend_forscht_revolutionAIR_Nahaufnahme_Luftdesinfektionsger_t_jpeg.webp'

const filmstripImages = [
  lindner, habeck, amthor, bundestag, hannover, afterparty,
  ralf, ministerin, lindner2, habeck2, labor, nahaufnahme,
]

const awards = [
  { label: 'Bundessieger', detail: 'Jugend forscht 2022' },
  { label: 'Sonderpreis', detail: 'Europa-Parlament' },
  { label: 'Patent', detail: 'Anonymisierte Personenerkennung' },
]

export function Scene02Origin() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0])
  const titleScale = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0.8, 1, 1, 1.1])

  return (
    <section ref={sectionRef} data-scene="02" className="relative py-32 md:py-48 overflow-hidden">
      {/* Big scene number background */}
      <div
        className="absolute top-1/4 right-0 scene-transition select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </div>

      {/* Fullscreen transition title */}
      <motion.div
        className="flex items-center justify-center h-[60vh]"
        style={{ opacity: titleOpacity, scale: titleScale }}
      >
        <h2
          className="mega-text text-center"
          style={{ fontSize: 'clamp(4rem, 18vw, 20rem)' }}
        >
          ORIGIN
        </h2>
      </motion.div>

      {/* Content */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="scene-element">
            <p className="scene-number mb-4">
              <span style={{ color: 'var(--color-accent)' }}>02</span> — The Origin
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              revolutionAIR
            </h3>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Ein KI-gestütztes Luftdesinfektionssystem, das UV-C-Strahlung intelligent steuert.
              Entwickelt als Jugend-forscht-Projekt, ausgezeichnet als Bundessieger 2022
              und patentiert für anonymisierte Personenerkennung.
            </p>

            {/* Award cards */}
            <div className="flex flex-col gap-3">
              {awards.map((award, i) => (
                <div
                  key={award.label}
                  className="scene-element flex items-center gap-4 py-3 px-4"
                  style={{
                    background: 'rgba(196, 77, 63, 0.06)',
                    border: '1px solid rgba(196, 77, 63, 0.15)',
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <span
                    className="text-xs tracking-[0.2em] uppercase font-semibold"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}
                  >
                    {award.label}
                  </span>
                  <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                    {award.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="scene-element-right film-image">
            <img
              src={titleImg}
              alt="revolutionAIR — UV-C Luftdesinfektionssystem"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Film strip */}
      <div className="mt-24 overflow-hidden py-8" aria-label="Impressionen von Jugend forscht">
        <div className="film-strip-track flex gap-1" style={{ width: 'max-content' }}>
          {/* Duplicate images for seamless loop */}
          {[...filmstripImages, ...filmstripImages].map((img, i) => (
            <div key={i} className="film-strip-frame flex-shrink-0 w-48 h-32 md:w-64 md:h-44">
              <img
                src={img}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ filter: 'saturate(0.15) contrast(1.3) brightness(0.85)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
