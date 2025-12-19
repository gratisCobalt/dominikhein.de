import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import sculptScreenshot from '../assets/sculpt/Sculpt-App-Screenshot.webp'

interface TechSection {
  title: string
  content: string
}

interface ProjectData {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image?: string
  tags: string[]
  award?: string
  features?: string[]
  techSections?: TechSection[]
  link?: string
  isPhone?: boolean
}

const projects: Record<string, ProjectData> = {
  sculpt: {
    slug: 'sculpt',
    title: 'Sculpt',
    subtitle: 'Fitness App',
    description:
      'Eine moderne Gym-App mit intelligentem Workout-Tracking, personalisierten Trainingsplänen und Fortschrittsanalyse.',
    longDescription: `
Sculpt ist mehr als nur eine Fitness-App – es ist dein persönlicher Trainingspartner. 
Die App wurde von Grund auf mit dem Ziel entwickelt, das Workout-Tracking so intuitiv 
und effizient wie möglich zu gestalten.

Mit Sculpt kannst du deine Workouts in Echtzeit tracken, Fortschritte visualisieren 
und personalisierte Trainingspläne erstellen lassen. Die App lernt aus deinen 
Trainingsgewohnheiten und passt sich kontinuierlich an deine Ziele an.

Das Backend läuft komplett serverless auf Vercel, was blitzschnelle Ladezeiten 
und nahtlose Skalierung ermöglicht. Jede Funktion wurde auf Performance optimiert – 
von der Workout-Erfassung bis zur Analyse.
    `,
    image: sculptScreenshot,
    tags: ['React', 'TypeScript', 'Vercel', 'Serverless'],
    isPhone: true,
    features: [
      'Intelligentes Workout-Tracking in Echtzeit',
      'Personalisierte Trainingspläne basierend auf deinen Zielen',
      'Detaillierte Fortschrittsanalyse mit Visualisierungen',
      'Übungsbibliothek mit korrekter Ausführung',
      'Cloud-Sync für alle deine Geräte',
      'Offline-Modus für Training ohne Internet',
    ],
    techSections: [
      {
        title: 'Frontend',
        content: 'React-Anwendung mit TypeScript, gehostet auf Vercel. Optimiert für schnelle Ladezeiten und nahtlose User Experience.',
      },
      {
        title: 'Backend',
        content: 'Vercel Serverless Functions für maximale Performance und Skalierbarkeit. Datenbank-Operationen werden asynchron verarbeitet.',
      },
      {
        title: 'Developer Experience',
        content: 'TypeScript durchgehend im Stack für frühe Fehlererkennung. Automatisches Deployment bei jedem Push.',
      },
    ],
  },
  revolutionair: {
    slug: 'revolutionair',
    title: 'revolutionAIR',
    subtitle: 'Jugend forscht Projekt',
    description:
      'Innovatives Projekt zur Luftqualitätsüberwachung mit KI-gestützter Analyse und Vorhersage.',
    longDescription: `
revolutionAIR entstand aus einer einfachen Beobachtung: Die Luftqualität in Innenräumen 
wird selten gemessen, obwohl sie direkten Einfluss auf Gesundheit und Wohlbefinden hat.

Das Projekt kombiniert IoT-Sensoren, Machine Learning und eine intuitive App, um 
Luftqualität nicht nur zu messen, sondern auch vorherzusagen. Das System warnt 
proaktiv, bevor kritische Werte erreicht werden – oft Stunden im Voraus.

Die größte Innovation liegt im ML-Modell: Es wurde mit historischen Daten und 
Wetterdaten trainiert, um Muster zu erkennen und Vorhersagen zu treffen. So können 
Nutzer vorsorgen, statt nur zu reagieren.

2022 wurde revolutionAIR mit dem Bundessieg bei Jugend forscht ausgezeichnet – 
eine Bestätigung für die wissenschaftliche Tiefe und praktische Anwendbarkeit des Projekts.
    `,
    tags: ['Python', 'Flutter', 'C++', 'MQTT', 'Machine Learning', 'IoT'],
    award: 'Bundessieg Jugend forscht 2022',
    features: [
      'Echtzeit-Messung von CO₂, Feinstaub, Temperatur und Luftfeuchtigkeit',
      'KI-gestützte Vorhersage von Luftqualitätstrends',
      'Proaktive Warnungen vor kritischen Werten',
      'Flutter-App für iOS und Android',
      'Historische Datenanalyse und Trends',
      'Integration von Wetterdaten für präzisere Vorhersagen',
    ],
    techSections: [
      {
        title: 'Hardware',
        content: 'Selbst entwickelte Sensormodule mit ESP32-Mikrocontrollern erfassen CO₂, Feinstaub (PM2.5/PM10), Temperatur und Luftfeuchtigkeit in Echtzeit.',
      },
      {
        title: 'Kommunikation',
        content: 'MQTT-Protokoll für zuverlässige Echtzeit-Datenübertragung von den Sensoren zum Backend. Die Architektur ist für hunderte gleichzeitige Sensoren ausgelegt.',
      },
      {
        title: 'Machine Learning',
        content: 'Ein in Python entwickeltes ML-Modell analysiert historische Daten und Wetterdaten, um Luftqualitätstrends vorherzusagen. Mit mehreren Monaten Echtzeitdaten trainiert.',
      },
      {
        title: 'App',
        content: 'Flutter-App für iOS und Android visualisiert aktuelle Werte und Vorhersagen, sendet Push-Benachrichtigungen bei kritischen Werten.',
      },
    ],
  },
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? projects[slug] : undefined

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Projekt nicht gefunden
          </h1>
          <Link
            to="/"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-6">
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

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            {project.award && (
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent/20 text-accent rounded-full">
                  🏆 {project.award}
                </span>
              </div>
            )}

            <p className="text-accent font-medium mb-2">{project.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-glass-bg border border-glass-border rounded-full text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 rounded-2xl overflow-hidden bg-glass-bg border border-glass-border p-8"
            >
              <img
                src={project.image}
                alt={project.title}
                width={project.isPhone ? 320 : 800}
                height={project.isPhone ? 620 : 450}
                className={`mx-auto ${project.isPhone ? 'h-96 object-contain' : 'w-full object-cover rounded-xl'}`}
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">Über das Projekt</h2>
              <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </div>
            </section>

            {/* Features */}
            {project.features && (
              <section>
                <h2 className="text-2xl font-bold text-accent mb-4">Features</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-glass-bg border border-glass-border"
                    >
                      <span className="text-accent mt-0.5">✓</span>
                      <span className="text-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech Sections */}
            {project.techSections && (
              <section>
                <h2 className="text-2xl font-bold text-accent mb-6">
                  Technische Details
                </h2>
                <div className="grid gap-4">
                  {project.techSections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-glass-bg border border-glass-border"
                    >
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {section.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Link */}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-glow transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projekt ansehen
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
