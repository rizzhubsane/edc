import { Link } from 'react-router-dom'
import { NewsletterSubscribe } from './newsletter-subscribe'
import logo from '../../assets/edc-logo-purple.png'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[26px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[26px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[26px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.38 1.41-3.69 3.57-3.69 1.04 0 2.12.18 2.12.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93Z"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[23px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.24 2H21.5l-7.5 8.57L22.5 22h-6.56l-5.14-6.72L5.2 22H1.92l8.03-9.17L1.5 2h6.73l4.64 6.15L18.24 2Zm-1.15 18.04h1.81L7 3.86H5.06l12.03 16.18Z"
      />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[26px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.57V8.43L15.84 12l-6.09 3.57Z"
      />
    </svg>
  )
}

const SOCIALS = [
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/edc_iitd/?hl=en',
    label: 'eDC IIT Delhi on Instagram',
  },
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in',
    label: 'eDC IIT Delhi on LinkedIn',
  },
  {
    icon: <FacebookIcon />,
    href: 'https://www.facebook.com/edciitdelhi',
    label: 'eDC IIT Delhi on Facebook',
  },
  {
    icon: <XIcon />,
    href: 'https://x.com/edciitdelhi',
    label: 'eDC IIT Delhi on X',
  },
  {
    icon: <YoutubeIcon />,
    href: 'https://www.youtube.com/@edciitdelhi',
    label: 'eDC IIT Delhi on YouTube',
  },
]

export function MinimalFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-mesh">
      <div className="site-wrap pt-16 pb-10 md:pt-24 md:pb-12">
        <span className="hero-rule hero-rule--left" aria-hidden="true" />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <Link
            to="/"
            className="inline-flex min-w-0 items-center"
            aria-label="eDC IIT Delhi home"
          >
            <img
              src={logo}
              alt=""
              className="footer-logo h-[5.5rem] w-auto object-contain sm:h-[6.75rem] md:h-[8.5rem] lg:h-[10rem]"
              decoding="async"
            />
          </Link>

          <NewsletterSubscribe />
        </div>

        <div className="mt-10 flex items-center justify-center gap-[0.9rem] md:mt-12">
          {SOCIALS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="grid size-[3.25rem] place-items-center rounded-full text-ink transition-colors duration-500 hover:text-brand-bright"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between md:pt-7">
          <p className="text-[13px] text-muted">© {year} eDC IIT Delhi</p>
          <p className="text-[13px] text-muted sm:text-right">
            Made with love by the eDC Tech Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default MinimalFooter
