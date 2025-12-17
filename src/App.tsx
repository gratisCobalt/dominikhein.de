import './index.css'
import { Hero } from './components/Hero'
import { FeaturedProjects } from './components/FeaturedProjects'
import { ShopShowcase } from './components/ShopShowcase'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { FloatingElements } from './components/FloatingElements'
import { CustomCursor } from './components/CustomCursor'

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary">
      <CustomCursor />
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <FeaturedProjects />
        <ShopShowcase />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
