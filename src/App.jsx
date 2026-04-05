import { SVGs, JPG, PNG, IMAGES } from './utility/images'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'

// Eagerly loaded shell components (tiny, needed on every page)
import Navbar from './components/navbar'
import Footer from './components/footer'
import Preloader from './components/preloader'

// Lazy-loaded pages — each becomes its own JS chunk, loaded only when visited
const Home       = lazy(() => import('./pages/Home'))
const About      = lazy(() => import('./pages/About'))
const Initiative = lazy(() => import('./pages/Initiative'))
const Resource   = lazy(() => import('./pages/Resource'))
const Gallery    = lazy(() => import('./pages/Gallery'))
const JoinUs     = lazy(() => import('./pages/JoinUs'))

// Minimal fallback shown while a lazy page chunk is being fetched
const PageFallback = () => (
  <div className="min-h-screen bg-primary-deep flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <div className="fixed top-0 z-30 w-full">
        <Navbar SVGs={SVGs} />
      </div>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/"          element={<Home       JPG={JPG} SVGs={SVGs} PNG={PNG} />} />
            <Route path="/about"     element={<About      JPG={JPG} SVGs={SVGs} PNG={PNG} />} />
            <Route path="/initial"   element={<Initiative />} />
            <Route path="/resources" element={<Resource   SVGs={SVGs} />} />
            <Route path="/gallery"   element={<Gallery    SVGs={SVGs} IMAGES={IMAGES} />} />
            <Route path="/joinus"    element={<JoinUs />} />
          </Routes>
          <Footer />
        </Suspense>
      )}
    </div>
  )
}

export default App
