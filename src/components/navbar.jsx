import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/edc-logo-purple.png'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/initial', label: 'Initiatives' },
  // { to: '/alumni', label: 'Alumni' },
  { href: 'https://becon.edciitd.com', label: 'BECon' },
  { to: '/resources', label: 'Resources' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-[14px] font-medium tracking-[-0.01em] transition-colors duration-500 ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`

  return (
    <>
    <header
      className={`glass-nav z-50 ${scrolled ? 'is-scrolled' : ''}`}
    >
      <nav className="site-wrap h-full grid grid-cols-[1fr_auto_1fr] items-center max-lg:flex max-lg:justify-between">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="justify-self-start flex items-center shrink-0"
          aria-label="eDC IIT Delhi home"
        >
          <img
            src={logo}
            alt="eDC IIT Delhi"
            className="h-12 w-auto object-contain object-left lg:h-[58px]"
            decoding="async"
          />
        </button>

            <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-5">
          {LINKS.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-muted hover:text-ink transition-colors duration-500"
              >
                {link.label}
              </a>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:flex justify-self-end">
          <button type="button" className="pill pill-fill" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-ink transition-transform duration-500 ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-opacity duration-500 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-transform duration-500 ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </button>
      </nav>
    </header>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[var(--nav-h)] z-40 bg-[#f3eefc]">
          <div className="site-wrap py-6 flex flex-col gap-1">
            {LINKS.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-[17px] font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className="py-3 text-[17px] font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <button
              type="button"
              className="pill pill-fill mt-4 w-fit"
              onClick={() => {
                setOpen(false)
                navigate('/contact')
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
