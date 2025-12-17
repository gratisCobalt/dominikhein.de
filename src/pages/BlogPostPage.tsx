import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { getBlogPost, blogPosts } from '../data/blogPosts'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Artikel nicht gefunden
          </h1>
          <Link
            to="/blog"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            ← Zurück zum Blog
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Artikel
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-sm font-medium bg-accent/20 text-accent rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              {post.title}
            </h1>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-text-primary prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-accent
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-text-secondary prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-text-primary prose-strong:font-semibold
              prose-ul:text-text-secondary prose-ol:text-text-secondary
              prose-li:marker:text-accent
              prose-code:text-accent prose-code:bg-glass-bg prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-bg-secondary prose-pre:border prose-pre:border-glass-border prose-pre:rounded-xl
              prose-blockquote:border-l-accent prose-blockquote:bg-glass-bg prose-blockquote:rounded-r-lg prose-blockquote:py-1
              prose-hr:border-glass-border"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-glass-border"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-muted flex items-center justify-center text-bg-primary font-bold text-xl">
                DH
              </div>
              <div>
                <p className="font-semibold text-text-primary">Dominik Hein</p>
                <p className="text-sm text-text-secondary">
                  Developer & Jugend forscht Bundessieger 2022
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-glass-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group p-6 rounded-xl bg-glass-bg border border-glass-border hover:border-accent/50 transition-all"
                >
                  <span className="text-sm text-text-secondary">
                    ← Vorheriger Artikel
                  </span>
                  <p className="mt-2 font-medium text-text-primary group-hover:text-accent transition-colors">
                    {prevPost.title}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className={`group p-6 rounded-xl bg-glass-bg border border-glass-border hover:border-accent/50 transition-all ${!prevPost ? 'md:col-start-2' : ''}`}
                >
                  <span className="text-sm text-text-secondary text-right block">
                    Nächster Artikel →
                  </span>
                  <p className="mt-2 font-medium text-text-primary group-hover:text-accent transition-colors text-right">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </motion.nav>
        </article>
      </main>

      <Footer />
    </div>
  )
}
