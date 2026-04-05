import React, { useEffect, useState, useRef } from 'react'
import { Rocket, Users, Calendar } from 'lucide-react'
import { Boxes } from './ui/background-boxes'

const CountUp = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (easeOutExpo)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      
      setCount(Math.floor(easeProgress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const Stats = () => {
  const stats = [
    { value: 10000, suffix: '+', label: 'Startups Supported', icon: <Rocket className="w-8 h-8 text-accent-cyan" /> },
    { value: 25000, suffix: '+', label: 'Students Engaged', icon: <Users className="w-8 h-8 text-accent-cyan" /> },
    { value: 100, suffix: '+', label: 'Events Hosted', icon: <Calendar className="w-8 h-8 text-accent-cyan" /> }
  ]

  return (
    <section className="relative w-full bg-neutral-white py-20 px-4 overflow-hidden min-h-[300px] flex items-center">
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-neutral-white z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="opacity-60" />

      <div className="relative z-20 max-w-[1000px] mx-auto w-full pointer-events-none">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 pointer-events-auto">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary-deep/5 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-primary-dark mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="font-body text-[0.9rem] uppercase tracking-[1px] text-[#6B5B8A] font-medium">
                  {stat.label}
                </p>
              </div>
              
              {/* Divider for mobile */}
              {index < stats.length - 1 && (
                <div className="md:hidden w-16 h-[1px] bg-neutral-muted/30"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
