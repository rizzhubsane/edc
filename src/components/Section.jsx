import React, { useEffect, useRef } from 'react'

const Section = ({ 
  variant = 'dark', 
  className = '', 
  id,
  /** Wider inner container (e.g. full-width interactive bands) */
  wideContent = false,
  children 
}) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getVariantStyles = () => {
    switch (variant) {
      case 'light':
        return 'bg-neutral-white text-text-dark'
      case 'gradient':
        return 'bg-gradient-to-br from-primary-deep via-primary-dark to-primary-mid text-text-body'
      case 'dark':
      default:
        return 'bg-primary-deep text-text-body'
    }
  }

  return (
    <section
      id={id}
      className={`w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1rem,4vw,6rem)] ${getVariantStyles()} ${className}`}
    >
      <div 
        ref={sectionRef}
        className={`mx-auto w-full opacity-0 translate-y-8 transition-all duration-700 ease-out ${
          wideContent ? 'max-w-[min(96vw,1480px)]' : 'max-w-[1200px]'
        }`}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
