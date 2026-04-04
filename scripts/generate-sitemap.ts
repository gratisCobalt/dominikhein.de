import { writeFileSync } from 'fs'

const BASE_URL = 'https://dominikhein.de'
const TODAY = new Date().toISOString().split('T')[0]

const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/impressum', priority: '0.3', changefreq: 'yearly' },
  { path: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', sitemap)
console.log(`✓ Sitemap generated with ${pages.length} URLs`)
