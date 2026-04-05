import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FooterBackgroundGradient } from "./ui/hover-footer";
import logoMark from "../assets/edciitd.svg";

function Footer() {
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: "Quick Access",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Initiatives", href: "/initial" },
        { label: "Resources", href: "/resources" },
        { label: "Gallery", href: "/gallery" },
        { label: "Join Us", href: "/joinus" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "info@edciitd.ac.in",
      href: "mailto:info@edciitd.ac.in",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "Indian Institute of Technology Delhi, Hauz Khas, New Delhi, 110016",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/edc_iitd/?hl=en" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
  ];

  return (
    <footer className="relative mt-8 overflow-hidden rounded-t-3xl border-t border-white/5 bg-primary-deep">
      <FooterBackgroundGradient />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-[clamp(1rem,4vw,6rem)] py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-4 lg:gap-x-16">
          <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <img
                src={logoMark}
                alt="eDC IIT Delhi"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto max-w-[min(100%,260px)] object-contain object-left md:h-11"
              />
            </div>
            <p className="max-w-md font-body text-sm leading-relaxed text-neutral-muted">
              Entrepreneurship Development Cell (eDC), IIT Delhi is India&apos;s largest student-driven organization committed to fostering a culture of innovation and entrepreneurship.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 font-heading text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-3 font-body text-neutral-muted">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <button
                      type="button"
                      onClick={() => navigate(link.href)}
                      className="transition-colors hover:text-[#3ca2fa]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="relative">
                  <a
                    href="https://becon.edciitd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#3ca2fa]"
                  >
                    BECon ↗
                  </a>
                </li>
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold text-white">
              Contact Us
            </h4>
            <ul className="space-y-4 font-body text-sm text-neutral-muted">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1 shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-[#3ca2fa]"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="transition-colors hover:text-[#3ca2fa]">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10" />

        <div className="mt-8 flex flex-col items-center justify-between gap-6 font-body text-sm md:flex-row md:items-center">
          <div className="flex space-x-6 text-neutral-muted">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition-colors hover:text-[#3ca2fa]"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center text-neutral-muted md:text-right">
            &copy; {new Date().getFullYear()} eDC IIT Delhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
