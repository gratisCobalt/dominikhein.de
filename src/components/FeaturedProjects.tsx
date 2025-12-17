import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import sculptScreenshot from '../assets/Sculpt-App-Screenshot.png'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  link?: string
  award?: string
  isPhone?: boolean
}

const projects: Project[] = [
  {
    id: 'sculpt',
    title: 'Sculpt',
    subtitle: 'Fitness App',
    description:
      'Eine moderne Gym-App mit intelligentem Workout-Tracking, personalisierten Trainingsplänen und Fortschrittsanalyse.',
    image: sculptScreenshot,
    tags: ['React', 'TypeScript', 'Vercel', 'Serverless'],
    isPhone: true,
  },
  {
    id: 'revolutionair',
    title: 'revolutionAIR',
    subtitle: 'Jugend forscht',
    description:
      'Innovatives Projekt zur Luftqualitätsüberwachung mit KI-gestützter Analyse. Bundessieger bei Jugend forscht.',
    image: '', // Placeholder for later
    tags: ['Python', 'Flutter', 'C++', 'MQTT', 'Machine Learning', 'IoT'],
    award: 'Bundessieg 2022',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="glass glass-hover relative overflow-hidden rounded-2xl p-6 md:p-8"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Award badge */}
        {project.award && (
          <motion.div
            className="absolute top-4 right-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold text-bg-primary"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            🏆 {project.award}
          </motion.div>
        )}

        {/* Image container */}
        <div className={`relative mb-6 overflow-hidden rounded-xl bg-bg-tertiary ${project.isPhone ? 'flex justify-center py-8' : 'aspect-video'}`}>
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className={project.isPhone 
                ? "h-64 w-auto object-contain drop-shadow-2xl" 
                : "h-full w-full object-cover"}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="flex h-full min-h-48 items-center justify-center text-text-muted">
              <span className="text-4xl">🖼️</span>
              <span className="ml-2">Bild folgt</span>
            </div>
          )}
          
          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-bg-primary/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Details ansehen
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ transform: 'translateZ(50px)' }}>
          <p className="mb-1 text-sm text-accent">{project.subtitle}</p>
          <h3 className="mb-3 text-2xl font-bold text-text-primary">
            {project.title}
          </h3>
          <p className="mb-4 text-text-secondary">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="rounded-full border border-glass-border bg-glass-bg px-3 py-1 text-xs text-text-secondary"
                whileHover={{ scale: 1.05, borderColor: 'rgba(127, 255, 212, 0.5)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(135deg, rgba(127, 255, 212, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="section relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.span>
          <h2 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Ausgewählte{' '}
            <span className="text-gradient">Projekte</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Von preisgekrönten Forschungsprojekten bis hin zu produktionsreifen Apps – 
            hier sind meine Highlights.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
