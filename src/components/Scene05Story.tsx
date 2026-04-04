import { useState } from 'react'

interface TimelineEntry {
  year: string
  title: string
  description: string
  easterEgg?: string
}

const timeline: TimelineEntry[] = [
  {
    year: '2019–2022',
    title: 'Abitur & Jugend forscht',
    description: 'Entwicklung des revolutionAIR-Projekts. Bundessieger Jugend forscht 2022, Patent erteilt.',
    easterEgg: 'Nebenbei: Pro-Level in GTA V erreicht',
  },
  {
    year: '2022–2024',
    title: 'Hengeler Mueller',
    description: 'IT-Werkstudent bei einer der führenden Wirtschaftskanzleien Deutschlands. Interne Tools und Automatisierung.',
  },
  {
    year: '2024–2025',
    title: 'EcomTree GmbH',
    description: 'Gründer und Geschäftsführer. E-Commerce Agentur mit Fokus auf Shopify und Performance Marketing.',
    easterEgg: 'Top 500 in Clash Royale Deutschland',
  },
  {
    year: '2026–heute',
    title: 'Zahnheld',
    description: 'E-Commerce Developer. Shopify, Performance-Optimierung, KI-Integration.',
  },
]

function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry
  index: number
}) {
  const [showEgg, setShowEgg] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <div
      className={`scene-element relative flex items-start gap-8 mb-16 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
        <span
          className="text-xs tracking-[0.2em] uppercase block mb-1"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
        >
          {entry.year}
        </span>
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {entry.title}
          {entry.easterEgg && (
            <button
              onClick={() => setShowEgg(!showEgg)}
              className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] cursor-pointer"
              style={{
                border: '1px solid var(--color-text-secondary)',
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
              aria-label="Easter Egg anzeigen"
            >
              ?
            </button>
          )}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {entry.description}
        </p>
        {showEgg && entry.easterEgg && (
          <p
            className="mt-2 text-xs italic"
            style={{ color: 'var(--color-accent)' }}
          >
            {entry.easterEgg}
          </p>
        )}
      </div>

      {/* Dot on timeline */}
      <div className="timeline-dot hidden md:block" style={{ top: '0.5rem' }} />

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}

export function Scene05Story() {
  return (
    <section data-scene="05" className="relative py-32 md:py-48 overflow-hidden">
      {/* Big scene number background */}
      <div
        className="absolute top-1/4 left-0 scene-transition select-none pointer-events-none"
        aria-hidden="true"
      >
        05
      </div>

      <div className="container">
        <p className="scene-number mb-4">
          <span style={{ color: 'var(--color-accent)' }}>05</span> — The Story
        </p>
        <h2
          className="text-4xl md:text-6xl font-bold mb-20"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Mein Weg
        </h2>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />

          {timeline.map((entry, i) => (
            <TimelineItem key={entry.year} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
