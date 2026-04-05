import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ SVGs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if we've scrolled past the top
      setScrolled(currentScrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const linkClass = ({ isActive }) =>
    `relative font-body font-medium text-sm lg:text-base transition-colors duration-300 group ${
      isActive ? 'text-accent-cyan' : 'text-white hover:text-accent-cyan'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-lg font-body font-medium transition-colors ${
      isActive ? 'text-accent-cyan bg-white/5' : 'text-white hover:text-accent-cyan hover:bg-white/5'
    }`

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-[calc(100%-2rem)] max-w-[1000px] rounded-full border top-4 lg:top-6 opacity-100 ${
          scrolled
            ? 'bg-[rgba(13,11,46,0.85)] backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-white/10 py-1.5'
            : 'bg-[rgba(13,11,46,0.4)] backdrop-blur-md shadow-lg border-white/5 py-2'
        }`}
      >
        <div className="px-6 sm:px-8 flex items-center justify-between h-[40px] lg:h-[50px]">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => navigate("/")}>
            <img src={SVGs.logo} alt="eDC IIT Delhi Logo" className="h-7 lg:h-8 w-auto" loading="eager" decoding="async" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink to="/" className={linkClass} end>
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to="/initial" className={linkClass}>
              Initiatives
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <a href="https://becon.edciitd.com" target="_blank" rel="noopener noreferrer" className={linkClass({ isActive: false })}>
              BECon
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
            <NavLink to="/resources" className={linkClass}>
              Resources
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/joinus')}
              className="font-body font-semibold text-sm text-primary-dark bg-gradient-to-br from-accent-gold to-[#D4A030] px-5 py-1.5 rounded-full hover:scale-105 hover:shadow-[0_4px_14px_rgba(226,184,74,0.4)] transition-all duration-300"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[rgba(13,11,46,0.95)] backdrop-blur-[20px] border-l border-white/10 transform transition-transform duration-300 ease-in-out z-[60] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col pt-24 px-4 space-y-2">
          <NavLink to="/" className={mobileLinkClass} end onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/initial" className={mobileLinkClass} onClick={toggleMenu}>
            Initiatives
          </NavLink>
          <a href="https://becon.edciitd.com" target="_blank" rel="noopener noreferrer" className={mobileLinkClass({ isActive: false })} onClick={toggleMenu}>
            BECon
          </a>
          <NavLink to="/resources" className={mobileLinkClass} onClick={toggleMenu}>
            Resources
          </NavLink>
          <NavLink to="/gallery" className={mobileLinkClass} onClick={toggleMenu}>
            Gallery
          </NavLink>
          <div className="pt-6 px-4">
            <button
              onClick={() => {
                navigate('/joinus')
                toggleMenu()
              }}
              className="w-full font-body font-semibold text-primary-dark bg-gradient-to-br from-accent-gold to-[#D4A030] px-6 py-3 rounded-[12px] hover:scale-105 transition-all duration-300"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  )
}

export default Navbar
