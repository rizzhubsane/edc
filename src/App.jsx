import { SVGs, JPG,PNG, IMAGES } from './utility/images'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from "./pages/Home"
import About from './pages/About'
import Initiative from './pages/Initiative'
import Resource from './pages/Resource'
import Gallery from './pages/Gallery'
import Navbar from './components/navbar'
import JoinUs from "./pages/JoinUs"

import Footer from './components/footer'
import Preloader from './components/preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    // Simulate loading time for the preloader  
    const timer = setTimeout(() => {
      setIsLoading(false)
    },4800) // 5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
        <div>
          <div className='fixed top-0 z-30 w-full'><Navbar SVGs={SVGs} /></div>
          <Preloader isLoading={isLoading} />
          {!isLoading && (
            <>
              <Routes>
                <Route path="/" element={<Home JPG={JPG} SVGs={SVGs} PNG={PNG}  />} />
                <Route path="/about" element={<About JPG={JPG}  SVGs={SVGs} PNG={PNG} />} />
                <Route path="/initial" element={<Initiative  />} />
                <Route path="/resources" element={<Resource SVGs={SVGs}/>} />
                <Route path="/gallery" element={<Gallery SVGs={SVGs} IMAGES={IMAGES} />} />
                <Route path="/joinus" element={<JoinUs />} />
              </Routes>
              <Footer />
            </>
          )}
        </div>
  )
}

export default App
