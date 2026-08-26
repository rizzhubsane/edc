import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/edciitd.svg'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/initial', label: 'Initiatives' },
  { to: '/alumni', label: 'Alumni' },
  { href: 'https://becon.edciitd.com', label: 'BECon' },
  { to: '/resources', label: 'Resources' },
  { to: '/gallery', label: 'Gallery' },
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
    `text-[13px] font-medium tracking-[-0.01em] transition-colors ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`

  return (
    <>
    <header
      className={`glass-nav z-50 h-[52px] ${scrolled ? 'is-scrolled' : ''}`}
    >
      <nav className="site-wrap h-full grid grid-cols-[1fr_auto_1fr] items-center max-md:flex max-md:justify-between">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="justify-self-start flex items-center gap-2 min-w-0"
          aria-label="eDC IIT Delhi home"
        >
          <img
            src={logo}
            alt=""
            className="h-7 w-7 object-contain"
            width={28}
            height={28}
            decoding="async"
          />
          <span className="font-heading text-[14px] font-semibold text-ink tracking-[-0.02em] whitespace-nowrap">
            eDC IIT Delhi
          </span>
        </button>

        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6">
          {LINKS.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-muted hover:text-ink transition-colors"
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

        <div className="hidden md:flex justify-self-end">
          <button type="button" className="pill pill-fill" onClick={() => navigate('/joinus')}>
            Join Us
          </button>
        </div>

        <button
          type="button"
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-ink transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </button>
      </nav>
    </header>

      {open && (
        <div className="md:hidden fixed inset-0 top-[52px] z-40 bg-[#f3eefc]">
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
                navigate('/joinus')
              }}
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
