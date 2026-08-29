import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const CARD_CLASS =
  'relative isolate h-[min(24rem,64vw)] w-[calc(100%-3.5rem)] max-w-[40rem] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-ink [clip-path:inset(0_round_1.75rem)] md:h-[26rem] md:w-[calc(100%-7rem)] md:max-w-[54rem] md:rounded-[2rem] md:[clip-path:inset(0_round_2rem)]'

const META_CLASS =
  'mt-5 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5'

const CTA_CLASS =
  'inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white pl-1.5 pr-4 text-[13px] font-semibold leading-none text-ink shadow-[0_8px_24px_rgba(13,11,46,0.18)] md:h-14 md:gap-2.5 md:pl-2 md:pr-5 md:text-[15px]'

function CardCta({ href, tabIndex, label, external }) {
  const inner = (
    <>
      <span className="grid size-9 place-items-center rounded-full bg-ink text-white md:size-10">
        <ChevronRight className="size-4 md:size-[18px]" strokeWidth={2.5} />
      </span>
      {label}
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={tabIndex}
        className={CTA_CLASS}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link to={href} tabIndex={tabIndex} className={CTA_CLASS}>
      {inner}
    </Link>
  )
}

export function InitiativesCarousel({
  items,
  autoplay = 0,
  loop = false,
  external = false,
  ctaLabel = 'Learn more',
  label = 'Our Initiatives',
}) {
  const scrollerRef = useRef(null)
  const indexRef = useRef(0)
  const pausedRef = useRef(false)
  const [index, setIndex] = useState(0)
  const active = items[index] ?? items[0]

  const goTo = useCallback(
    (next) => {
      const root = scrollerRef.current
      const cards = root?.querySelectorAll('[data-init-card]')
      if (!root || !cards?.length) return
      const count = items.length
      const clamped = loop
        ? ((next % count) + count) % count
        : Math.max(0, Math.min(count - 1, next))
      const card = cards[clamped]
      if (!card) return
      const left =
        card.getBoundingClientRect().left - root.getBoundingClientRect().left + root.scrollLeft
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const from = indexRef.current
      const wrapping = loop && count > 1 && Math.abs(clamped - from) === count - 1
      setIndex(clamped)
      indexRef.current = clamped
      root.scrollTo({ left, behavior: reduce || wrapping ? 'auto' : 'smooth' })
    },
    [items.length, loop],
  )

  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return

    let frame = 0
    const syncIndex = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const cards = [...root.querySelectorAll('[data-init-card]')]
        if (!cards.length) return
        const origin = root.getBoundingClientRect().left
        let best = 0
        let bestDist = Infinity
        cards.forEach((card, i) => {
          const dist = Math.abs(card.getBoundingClientRect().left - origin)
          if (dist < bestDist) {
            bestDist = dist
            best = i
          }
        })
        setIndex((prev) => (prev === best ? prev : best))
      })
    }

    root.addEventListener('scroll', syncIndex, { passive: true })
    window.addEventListener('resize', syncIndex)
    return () => {
      cancelAnimationFrame(frame)
      root.removeEventListener('scroll', syncIndex)
      window.removeEventListener('resize', syncIndex)
    }
  }, [])

  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return

    let dragging = false
    let startX = 0
    let startLeft = 0

    const onPointerDown = (event) => {
      if (event.pointerType === 'touch') return
      if (event.target.closest('a, button')) return
      dragging = true
      pausedRef.current = true
      startX = event.clientX
      startLeft = root.scrollLeft
      root.setPointerCapture(event.pointerId)
      root.style.scrollSnapType = 'none'
      root.style.cursor = 'grabbing'
    }

    const onPointerMove = (event) => {
      if (!dragging) return
      root.scrollLeft = startLeft - (event.clientX - startX)
    }

    const onPointerUp = (event) => {
      if (!dragging) return
      dragging = false
      root.style.scrollSnapType = 'x mandatory'
      root.style.cursor = 'grab'
      const moved = Math.abs(event.clientX - startX)
      if (moved < 8) return
      const cards = [...root.querySelectorAll('[data-init-card]')]
      const origin = root.getBoundingClientRect().left
      let best = 0
      let bestDist = Infinity
      cards.forEach((card, i) => {
        const dist = Math.abs(card.getBoundingClientRect().left - origin)
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      })
      goTo(best)
    }

    root.addEventListener('pointerdown', onPointerDown)
    root.addEventListener('pointermove', onPointerMove)
    root.addEventListener('pointerup', onPointerUp)
    root.addEventListener('pointercancel', onPointerUp)
    return () => {
      root.removeEventListener('pointerdown', onPointerDown)
      root.removeEventListener('pointermove', onPointerMove)
      root.removeEventListener('pointerup', onPointerUp)
      root.removeEventListener('pointercancel', onPointerUp)
    }
  }, [goTo])

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    if (!autoplay || items.length < 2) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return
      goTo(indexRef.current + 1)
    }, autoplay)

    return () => window.clearInterval(id)
  }, [autoplay, goTo, items.length])

  if (!active) return null

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
    >
      <div
        ref={scrollerRef}
        className="hide-scrollbar relative flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain select-none rounded-[1.75rem] pr-1 md:rounded-[2rem]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {items.map((item, i) => {
          const isActive = i === index
          return (
            <article
              key={item.title}
              data-init-card
              aria-hidden={!isActive}
              className={CARD_CLASS}
            >
              <img
                src={item.image}
                alt=""
                draggable={false}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="pointer-events-none absolute inset-0 h-full w-full rounded-[inherit] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:p-7">
                <h3 className="min-w-0 font-heading text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:truncate sm:text-[2.15rem] md:h-14 md:text-[3.5rem] md:leading-none">
                  {item.title}
                </h3>
                <CardCta
                  href={item.href}
                  tabIndex={isActive ? 0 : -1}
                  label={ctaLabel}
                  external={external}
                />
              </div>
            </article>
          )
        })}
      </div>

      <div className={META_CLASS}>
        <div className="min-w-0 flex-1 py-1" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="text-[20px] font-bold leading-[1.5] tracking-[-0.025em] text-ink md:text-[22px]">
                {active.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex shrink-0 items-center rounded-full bg-white p-1 shadow-[0_1px_2px_rgba(13,11,46,0.06),0_8px_20px_rgba(45,27,105,0.08)]">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={!loop && index === 0}
            aria-label="Previous"
            className="grid size-9 place-items-center rounded-full text-muted transition-opacity disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={!loop && index === items.length - 1}
            aria-label="Next"
            className="grid size-9 place-items-center rounded-full text-muted transition-opacity disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default InitiativesCarousel
