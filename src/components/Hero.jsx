import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import edcLogo from '../assets/edciitd.svg'

const Hero = () => {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-[linear-gradient(to_bottom,#0D0B2E,#1A1145_50%,#2D1B69_88%)]  
      rounded-b-xl flex flex-col items-center justify-center"
    >
      {/* Subtle animated dot grid background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Accent */}
      <div
        className={`absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-t-[2px] border-accent-cyan/30 bg-primary-deep
        bg-[radial-gradient(closest-side,var(--color-primary-mid)_82%,var(--color-primary-deep))] 
        transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      />

      <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center justify-center">
        {/* Background SVG Logo */}
        <img 
          src={edcLogo} 
          alt="eDC Background Logo" 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[130%] max-w-[1200px] object-contain opacity-[0.06] z-[-1] pointer-events-none transition-all duration-1000 ease-out ${
            mounted ? 'scale-100' : 'scale-95'
          }`}
        />

        {/* Eyebrow */}
        <div 
          className={`transition-all duration-700 ease-out transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="group cursor-pointer mb-8">
            <span
              className="text-sm text-accent-cyan font-body mx-auto px-5 py-2 
              bg-gradient-to-tr from-accent-cyan/10 via-accent-cyan/5 to-transparent  
              border-[1px] border-accent-cyan/20
              rounded-3xl w-fit tracking-widest uppercase flex items-center justify-center font-semibold"
            >
              Ideate-Innovate-Incubate
              <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          className={`transition-all duration-700 delay-150 ease-out transform text-balance 
          bg-gradient-to-br from-white from-30% to-white/60 
          bg-clip-text py-6 text-[clamp(3.5rem,7vw,5.5rem)] font-heading font-extrabold leading-[1.1] tracking-[-0.02em] 
          text-transparent ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          Entrepreneurship Development Cell
        </h1>

        {/* Subtitle */}
        <p
          className={`transition-all duration-700 delay-300 ease-out transform mb-12 text-balance 
          text-lg md:text-xl tracking-tight text-text-body max-w-[600px] mx-auto ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          India's largest student-driven entrepreneurship cell, fostering innovation at IIT Delhi since 2007.
        </p>

        {/* CTA */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ease-out transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button 
            onClick={() => navigate('/initial')}
            className="w-full sm:w-auto font-body font-semibold text-primary-dark bg-gradient-to-br from-accent-gold to-[#D4A030] px-8 py-3.5 rounded-[12px] hover:scale-105 hover:shadow-[0_4px_20px_rgba(226,184,74,0.4)] transition-all duration-300"
          >
            Explore Initiatives
          </button>
          <button 
            onClick={() => navigate('/joinus')}
            className="w-full sm:w-auto font-body font-semibold text-accent-cyan bg-transparent border border-accent-cyan px-8 py-3.5 rounded-[12px] hover:scale-105 hover:bg-accent-cyan/10 transition-all duration-300"
          >
            Join eDC
          </button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className={`transition-all duration-1000 delay-700 ease-out relative mt-32 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,var(--color-primary-deep)_10%,transparent)] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </section>
  )
}

export default Hero
