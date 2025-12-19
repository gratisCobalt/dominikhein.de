import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { revolutionairStory, revolutionairTechSpecs } from '../data/revolutionairData'

export function RevolutionairPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="max-w-5xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent/20 text-accent rounded-full">
                🏆 Bundessieg für die beste interdisziplinäre Arbeit 2022
              </span>
            </div>

            <p className="text-accent font-medium mb-2">Jugend forscht Projekt</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
              revolutionAIR
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl">
              Ein intelligentes UVC-LED-Luftdesinfektionssystem, das mit maschinellem Lernen 
              die Raumluft in Echtzeit analysiert und bis zu 99,27% aller Krankheitserreger eliminiert.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Python', 'Flutter', 'C++', 'MQTT', 'Machine Learning', 'IoT', 'UVC-LEDs', 'ESP8266'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-glass-bg border border-glass-border rounded-full text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Team */}
            <div className="mt-8 flex items-center gap-4 text-text-secondary">
              <span className="text-sm">Team:</span>
              <span className="text-text-primary font-medium">Dominik Hein, Jaro Filip, Max Pfannkuch</span>
            </div>
          </motion.header>

          {/* Tech Specs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-accent mb-6">Technische Daten</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {revolutionairTechSpecs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-glass-bg border border-glass-border text-center"
                >
                  <div className="text-2xl font-bold text-accent mb-1">{spec.value}</div>
                  <div className="text-xs text-text-muted">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Story Sections */}
          {revolutionairStory.map((section) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-6">{section.title}</h2>
              <div className="text-text-secondary leading-relaxed whitespace-pre-line mb-8">
                {section.content}
              </div>

              {/* Images Grid */}
              {section.images.length === 1 ? (
                <motion.figure
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden bg-glass-bg border border-glass-border"
                >
                  <img
                    src={section.images[0].src}
                    alt={section.images[0].alt}
                    className="w-full h-auto object-cover"
                  />
                  {section.images[0].caption && (
                    <figcaption className="p-4 text-sm text-text-muted text-center">
                      {section.images[0].caption}
                    </figcaption>
                  )}
                </motion.figure>
              ) : (
                <div className={`grid gap-4 ${
                  section.images.length === 2 && section.images.some(img => img.isPortrait)
                    ? 'grid-cols-[1fr_auto]' 
                    : section.images.length === 2 
                      ? 'md:grid-cols-2' 
                      : section.images.length >= 3 
                        ? 'md:grid-cols-2 lg:grid-cols-3' 
                        : ''
                }`}>
                  {section.images.map((image, imageIndex) => (
                    <motion.figure
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: imageIndex * 0.1 }}
                      className={`rounded-xl overflow-hidden bg-glass-bg border border-glass-border flex flex-col ${image.isFeatured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                    >
                      {image.isPortrait ? (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-auto h-full max-h-[400px] object-contain mx-auto"
                        />
                      ) : image.isFeatured ? (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-cover"
                        />
                      ) : (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {image.caption && (
                        <figcaption className="p-3 text-xs text-text-muted text-center">
                          {image.caption}
                        </figcaption>
                      )}
                    </motion.figure>
                  ))}
                </div>
              )}
            </motion.section>
          ))}

          {/* Download Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 rounded-2xl bg-glass-bg border border-glass-border"
          >
            <h2 className="text-2xl font-bold text-accent mb-4">Schriftliche Arbeit</h2>
            <p className="text-text-secondary mb-6">
              Die vollständige wissenschaftliche Dokumentation unseres Projekts – von der theoretischen 
              Grundlage über die technische Umsetzung bis zu den mikrobiologischen Testergebnissen.
            </p>
            <a
              href="/revolutionair-schriftliche-arbeit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Schriftliche Arbeit ansehen
            </a>
          </motion.section>

          {/* What we learned */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-accent mb-6">Was wir gelernt haben</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Komplexe Hardware-Projekte von der Idee bis zum Prototyp entwickeln',
                'Wissenschaftliches Arbeiten und Dokumentieren',
                'Präsentieren vor kritischem Fachpublikum',
                'Networking und Kommunikation mit Entscheidungsträgern',
                'Zusammenarbeit mit Industriepartnern wie Heraeus',
                'Machine Learning für praktische IoT-Anwendungen',
              ].map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-glass-bg border border-glass-border"
                >
                  <span className="text-accent mt-0.5">✓</span>
                  <span className="text-text-secondary">{learning}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Back to projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Übersicht
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
