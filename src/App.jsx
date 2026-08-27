import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Initiative = lazy(() => import('./pages/Initiative'))
const Alumni = lazy(() => import('./pages/Alumni'))
const Resource = lazy(() => import('./pages/Resource'))
const Gallery = lazy(() => import('./pages/Gallery'))
const FAQ = lazy(() => import('./pages/FAQ'))
const JoinUs = lazy(() => import('./pages/JoinUs'))

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[var(--page-canvas)]">
    <div
      className="w-5 h-5 border-[1.5px] border-ink/20 border-t-ink rounded-full animate-spin"
      aria-label="Loading"
    />
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[var(--page-canvas)] text-muted overflow-x-clip">
      <Navbar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initial" element={<Initiative />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/startups" element={<Navigate to="/alumni" replace />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<JoinUs />} />
          <Route path="/joinus" element={<Navigate to="/contact" replace />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
