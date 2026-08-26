import { useEffect } from 'react'
import initiatives from '../utility/initiative'

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
        {initiatives.map((item, index) => {
          const id = slug(item.title)
          const cat = categoryOf(item.title)
          const flagship = FLAGSHIP.has(item.title)
          const reverse = index % 2 === 1

          return (
            <article
              key={item.title}
              id={id}
              className="init-card scroll-mt-[72px]"
              style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${
                  reverse ? 'lg:[&>.init-copy]:order-2' : ''
                }`}
              >
                <div className="init-copy px-1 md:px-2">
                  <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-brand mb-3">
                    {cat}
                    {flagship ? ' · Flagship' : ''}
                  </p>
                  <h2 className="text-h2 text-ink">{item.title}</h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.description}</p>
                </div>
                <figure className="init-photo">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}

export default Initiative
