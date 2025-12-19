import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import { ImpressumPage } from './pages/ImpressumPage'
import { DatenschutzPage } from './pages/DatenschutzPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
