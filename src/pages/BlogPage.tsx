import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { FloatingElements } from '../components/FloatingElements'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mein Weg zum Bundessieg bei Jugend forscht',
    excerpt:
      'Wie ich mit revolutionAIR und KI-gestützter Luftqualitätsanalyse den Bundeswettbewerb gewonnen habe.',
    date: '2025-11-20',
    readTime: '7 min',
    category: 'Forschung',
    content: 'Vollständiger Artikel folgt...',
  },
  {
    id: '2',
    title: 'Serverless mit Vercel: So baue ich moderne Web-Apps',
    excerpt:
      'Meine Erfahrungen mit Serverless Functions und warum ich Vercel für Sculpt gewählt habe.',
    date: '2025-10-15',
    readTime: '8 min',
    category: 'Development',
    content: 'Vollständiger Artikel folgt...',
  },
  {
    id: '3',
    title: 'E-Commerce Trends 2026',
    excerpt:
      'Von AI-Personalisierung bis Headless Commerce – die Technologien, die erfolgreiche Shops ausmachen.',
    date: '2025-12-01',
    readTime: '6 min',
    category: 'E-Commerce',
    content: 'Vollständiger Artikel folgt...',
  },
]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.a
        href={`/blog/${post.id}`}
        className="glass glass-hover block rounded-2xl p-6 md:p-8"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {post.category}
          </span>
          <span className="text-xs text-text-muted">{post.readTime} Lesezeit</span>
        </div>

        <h2 className="mb-3 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent">
          {post.title}
        </h2>

        <p className="mb-4 text-text-secondary">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <time className="text-sm text-text-muted">
            {new Date(post.date).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-2 text-accent">
            Lesen →
          </span>
        </div>
      </motion.a>
    </motion.article>
  )
}

export function BlogPage() {
  return (
    <div className="relative min-h-screen bg-bg-primary">
      <FloatingElements />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Blog
            </motion.span>
            <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-6xl">
              Gedanken &{' '}
              <span className="text-gradient">Insights</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Artikel über Entwicklung, Forschung und E-Commerce aus meiner Perspektive.
            </p>
          </motion.div>

          {/* Blog posts */}
          <div className="mx-auto max-w-3xl space-y-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Coming soon note */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-text-muted">
              Weitere Artikel folgen bald...
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
