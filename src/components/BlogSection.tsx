import { motion } from 'framer-motion'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Wie KI die Luftqualität revolutionieren kann',
    excerpt:
      'Ein Einblick in mein Jugend forscht Projekt und die Technologie dahinter.',
    date: '2024-03-15',
    readTime: '5 min',
    category: 'Forschung',
  },
  {
    id: '2',
    title: 'React Native vs. Flutter: Meine Erfahrungen',
    excerpt:
      'Nach der Entwicklung von Sculpt teile ich meine Gedanken zu Cross-Platform-Entwicklung.',
    date: '2024-02-28',
    readTime: '8 min',
    category: 'Development',
  },
  {
    id: '3',
    title: 'E-Commerce Trends 2024',
    excerpt:
      'Was macht einen erfolgreichen Onlineshop aus? Die wichtigsten Trends und Technologien.',
    date: '2024-01-20',
    readTime: '6 min',
    category: 'E-Commerce',
  },
]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.a
        href={`/blog/${post.id}`}
        className="glass glass-hover block rounded-2xl p-6"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {/* Category & Meta */}
        <div className="mb-4 flex items-center justify-between">
          <motion.span
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            whileHover={{ scale: 1.05 }}
          >
            {post.category}
          </motion.span>
          <span className="text-xs text-text-muted">{post.readTime} Lesezeit</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-text-primary transition-colors group-hover:text-accent">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <time className="text-xs text-text-muted">
            {new Date(post.date).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <motion.span
            className="flex items-center gap-1 text-sm text-accent"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            Lesen
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.span>
        </div>

        {/* Animated border gradient on hover */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(127, 255, 212, 0.1), transparent)',
          }}
        />
      </motion.a>
    </motion.article>
  )
}

export function BlogSection() {
  return (
    <section id="blog" className="section relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="mb-16 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.span
              className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Blog
            </motion.span>
            <h2 className="text-4xl font-bold text-text-primary md:text-5xl">
              Gedanken &{' '}
              <span className="text-gradient">Insights</span>
            </h2>
          </div>

          <motion.a
            href="/blog"
            className="btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alle Artikel →
          </motion.a>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Newsletter signup teaser */}
        <motion.div
          className="glass mt-16 rounded-2xl p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-3xl">✉️</span>
          </motion.div>
          <h3 className="mb-2 text-2xl font-bold text-text-primary">
            Keine Updates verpassen
          </h3>
          <p className="mb-6 text-text-secondary">
            Erhalte die neuesten Artikel und Projekt-Updates direkt in dein Postfach.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="deine@email.de"
              className="flex-1 rounded-full border border-glass-border bg-glass-bg px-6 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
            />
            <motion.button
              className="btn-primary whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Abonnieren
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
