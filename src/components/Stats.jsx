import { useEffect, useRef, useState } from 'react'
import { Stagger, StaggerItem } from './ui/reveal'

const CountUp = ({ end, suffix = '', duration = 2600, active }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(end)
      return
    }

    let rafId = 0
    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      setCount(progress >= 1 ? end : Math.floor(easeProgress * end))
      if (progress < 1) rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [active, end, duration])

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const STATS = [
  { value: 10000, suffix: '+', label: 'Startups Supported' },
  { value: 25000, suffix: '+', label: 'Students Engaged' },
  { value: 100, suffix: '+', label: 'Events Hosted' },
]

const Stats = () => {
  const bandRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) return
    const node = bandRef.current
    if (!node) return

    let cancelled = false
    const reveal = () => {
      if (!cancelled) setActive(true)
    }

    const isInView = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < vh
    }

    if (isInView()) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold: 0, root: null, rootMargin: '0px' }
    )
    observer.observe(node)

    const onScrollOrResize = () => {
      if (isInView()) {
        reveal()
        observer.disconnect()
      }
    }
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      cancelled = true
      observer.disconnect()
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [active])

  return (
    <section ref={bandRef} className="band-deep">
      <Stagger className="site-wrap py-12 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label}>
            <p className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-semibold text-white tracking-[-0.04em] leading-none tabular-nums">
              <CountUp end={stat.value} suffix={stat.suffix} active={active} />
            </p>
            <p className="mt-3 text-[13px] text-white/70">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}

export default Stats
