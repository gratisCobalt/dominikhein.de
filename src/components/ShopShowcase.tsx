import { motion } from 'framer-motion'
import { useState } from 'react'
import manubetonImg from '../assets/manubeton.webp'
import bepureImg from '../assets/bepure.webp'
import zahnheldImg from '../assets/zahnheld.webp'

interface Shop {
  id: string
  name: string
  description: string
  image: string
  url?: string
  tech: string[]
}

const shops: Shop[] = [
  {
    id: 'manubeton',
    name: 'Manubeton',
    description: 'Deutsche Designmarke für handgefertigte Beton-Dekoration. Tischfeuer, Kerzenhalter und Schlüsselhalter – modernes Design für stilvolles Wohnen.',
    image: manubetonImg,
    url: 'https://manubeton.de',
    tech: ['Shopify', 'Liquid', 'JavaScript'],
  },
  {
    id: 'bepure',
    name: 'bepure',
    description: 'Schweizer Naturkosmetik mit Bio-Arganöl. Vegane Hautpflege für jeden Hauttyp – produziert in Winterthur mit fair gehandelten Zutaten aus Marokko.',
    image: bepureImg,
    url: 'https://bepure.ch',
    tech: ['Shopify', 'Liquid', 'JavaScript'],
  },
  {
    id: 'zahnheld',
    name: 'Zahnheld',
    description: 'Elektrische Schallzahnbürsten und Mundduschen. Über 250.000 zufriedene Kunden und innovative Zahnpflege-Produkte für die ganze Familie.',
    image: zahnheldImg,
    url: 'https://zahnheld.de',
    tech: ['Shopify', 'Liquid', 'JavaScript'],
  },
]

function ShopCard({ shop, index }: { shop: Shop; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`glass relative overflow-hidden rounded-2xl transition-shadow duration-300 ${isHovered ? 'shadow-glow-md' : 'shadow-card'}`}
      >
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-bg-tertiary px-5 pb-5">
          {shop.image ? (
            <motion.img
              src={shop.image}
              alt={shop.name}
              width={400}
              height={300}
              className="h-full w-full object-contain"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-text-muted">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-glass-border"
                animate={{ rotate: isHovered ? 10 : 0 }}
              >
                <span className="text-2xl">🛒</span>
              </motion.div>
              <span className="text-sm">Bild folgt</span>
            </div>
          )}

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(10, 10, 15, 0.8) 100%)',
            }}
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
          />

          {/* Floating tech badges on hover */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {shop.tech.map((tech, i) => (
              <motion.span
                key={tech}
                className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3
            className="mb-2 text-xl font-bold text-text-primary"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {shop.name}
          </motion.h3>
          <p className="mb-4 text-sm text-text-secondary">{shop.description}</p>

          <motion.a
            href={shop.url || '#'}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent"
            whileHover={{ x: 5 }}
          >
            Projekt ansehen
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-accent/10 blur-2xl"
          animate={{ scale: isHovered ? 1.5 : 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function ShopShowcase() {
  return (
    <section id="shops" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container relative">
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
            E-Commerce
          </motion.span>
          <h2 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Online{' '}
            <span className="text-gradient">Shops</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Professionelle E-Commerce Lösungen, die verkaufen – 
            von Konzept bis Launch.
          </p>
        </motion.div>

        {/* Shop cards grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {shops.map((shop, index) => (
            <ShopCard key={shop.id} shop={shop} index={index} />
          ))}
        </div>

        {/* Decorative animated line */}
        <motion.div
          className="mt-16 h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(127, 255, 212, 0.3), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </section>
  )
}
