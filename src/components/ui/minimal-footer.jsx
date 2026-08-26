import { Link } from 'react-router-dom'
import { InstagramIcon, LinkedinIcon } from 'lucide-react'
import logo from '../../assets/edciitd.svg'

const linkClass = 'w-max py-1 text-sm duration-200 hover:underline text-ink'

function FooterLink({ href, title, external = false }) {
  if (external) {
    return (
      <a
        className={linkClass}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      >
        {title}
      </a>
    )
  }

  return (
    <Link className={linkClass} to={href}>
      {title}
    </Link>
  )
}

export function MinimalFooter() {
  const year = new Date().getFullYear()

  const explore = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Initiatives', href: '/initial' },
    { title: 'Alumni', href: '/alumni' },
    { title: 'Resources', href: '/resources' },
    { title: 'Gallery', href: '/gallery' },
  ]

  const contact = [
    { title: 'Join Us', href: '/joinus' },
    { title: 'BECon', href: 'https://becon.edciitd.com', external: true },
    { title: 'Contact', href: 'mailto:info@edciitd.ac.in', external: true },
    { title: 'Instagram', href: 'https://www.instagram.com/edc_iitd/?hl=en', external: true },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in', external: true },
  ]

  const socialLinks = [
    {
      icon: <InstagramIcon className="size-4" />,
      link: 'https://www.instagram.com/edc_iitd/?hl=en',
      label: 'eDC IIT Delhi on Instagram',
    },
    {
      icon: <LinkedinIcon className="size-4" />,
      link: 'https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in',
      label: 'eDC IIT Delhi on LinkedIn',
    },
  ]

  return (
    <footer className="relative">
      <div className="site-wrap">
      <div className="relative bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)] md:border-x border-border">
        <div className="bg-border h-px w-full" />
        <div className="grid grid-cols-6 gap-6 p-4 md:px-8 md:py-8">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="w-max flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <img src={logo} alt="" className="size-8 object-contain" width={32} height={32} />
              <span className="font-heading text-[15px] font-semibold text-ink tracking-[-0.02em]">
                eDC IIT Delhi
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
              Entrepreneurship Development Cell (eDC), IIT Delhi is India&apos;s largest student-driven organization committed to fostering a culture of innovation and entrepreneurship.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="hover:bg-accent rounded-md border p-1.5 text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">Explore</span>
            <div className="flex flex-col gap-1">
              {explore.map(({ href, title }) => (
                <FooterLink key={title} href={href} title={title} />
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">Contact</span>
            <div className="flex flex-col gap-1">
              {contact.map(({ href, title, external }) => (
                <FooterLink key={title} href={href} title={title} external={external} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-border h-px w-full" />
        <div className="flex flex-col justify-between gap-2 pt-2 pb-5">
          <p className="text-muted-foreground text-center font-thin">
            © eDC IIT Delhi. All rights reserved {year}
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default MinimalFooter
