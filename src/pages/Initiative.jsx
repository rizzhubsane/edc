import { useEffect, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import initiatives from '../utility/initiative'

const EASE = [0.22, 0.61, 0.36, 1]

const slug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const FLAGSHIP = new Set(['Venture Studio', 'Moonshot', 'Regionals'])
const BUILD = new Set(['Venture Studio', 'Blueprint', 'Startup Clinic'])
const COMPETE = new Set(['Moonshot', 'Regionals', 'Kinesis'])

const categoryOf = (title) => {
  if (BUILD.has(title)) return 'Build'
  if (COMPETE.has(title)) return 'Compete'
  return 'Learn'
}

function InitiativeCard({ item, index }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: false, amount: 0.15 })
  const show = reduce || inView
  const id = slug(item.title)
  const cat = categoryOf(item.title)
  const flagship = FLAGSHIP.has(item.title)
  const reverse = index % 2 === 1

  return (
    <motion.article
      ref={ref}
      id={id}
      className="init-card scroll-mt-[72px]"
      initial={{ opacity: 0, y: 36 }}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 28,
      }}
      whileHover={reduce || !show ? undefined : { y: -4 }}
      transition={{ duration: 1.05, ease: EASE }}
    >
      <div
        className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${
          reverse ? 'lg:[&>.init-copy]:order-2' : ''
        }`}
      >
        <motion.div
          className="init-copy px-1 md:px-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 14 }}
          transition={{ duration: 0.9, delay: show && !reduce ? 0.08 : 0, ease: EASE }}
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-brand mb-3">
            {cat}
            {flagship ? ' · Flagship' : ''}
          </p>
          <h2 className="text-h2 text-ink">{item.title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.description}</p>
        </motion.div>
        <motion.figure
          className="init-photo"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 18 }}
          transition={{ duration: 1, delay: show && !reduce ? 0.14 : 0, ease: EASE }}
        >
          <img
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </motion.figure>
      </div>
    </motion.article>
  )
}

const Initiative = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [])

  return (
    <main className="band-lilac">
      <header className="page-hero">
        <div className="site-wrap">
          <h1 className="text-hero font-semibold text-ink tracking-[-0.038em] text-balance max-w-[16ch] mx-auto">
            Initiatives
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted max-w-[34rem] mx-auto">
            Programs designed to support every stage of your entrepreneurial journey.
          </p>
        </div>
      </header>

      <div className="site-wrap flex flex-col gap-8 md:gap-10 pb-24">
        {initiatives.map((item, index) => (
          <InitiativeCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </main>
  )
}

export default Initiative
