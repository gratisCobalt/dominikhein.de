import { writeFileSync } from 'fs'
import { blogPosts } from '../src/data/blogPosts'

const BASE_URL = 'https://dominikhein.de'
const TODAY = new Date().toISOString().split('T')[0]

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/projekt/sculpt', priority: '0.9', changefreq: 'monthly' },
  { path: '/projekt/revolutionair', priority: '0.9', changefreq: 'monthly' },
  { path: '/impressum', priority: '0.3', changefreq: 'yearly' },
  { path: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
]

// Generate blog post URLs dynamically
const blogPages = blogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}))

const allPages = [...staticPages, ...blogPages]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', sitemap)
console.log(`✓ Sitemap generated with ${allPages.length} URLs`)
