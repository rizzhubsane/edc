import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import alumni from '../utility/alumni'
import { AlumniNews } from '../components/ui/alumni-news'
import DeepinderGoyal from '../assets/speakers/DeepinderGoyal.jpg'
import SachinBansal from '../assets/speakers/SachinBansal.jpg'
import KunalBahl from '../assets/speakers/KunalBahl.jpg'
import SanjeevBikhchandani from '../assets/speakers/SanjeevBikhchandani.jpg'
import AlokMittal from '../assets/aloksir.jpeg'

const PHOTOS = {
  DeepinderGoyal,
  SachinBansal,
  KunalBahl,
  SanjeevBikhchandani,
  AlokMittal,
}

const FILTERS = ['All', 'Founder', 'Mentor']

const initials = (name) => {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

const Alumni = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered =
    activeFilter === 'All' ? alumni : alumni.filter((person) => person.tag === activeFilter)

  return (
    <main className="band-lilac">
      <header className="page-hero">
        <div className="site-wrap">
          <h1 className="text-hero font-semibold text-ink tracking-[-0.038em] text-balance max-w-[16ch] mx-auto">
            Alumni
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted max-w-[36rem] mx-auto">
            People who were part of eDC, and what they&apos;re doing now. Many have gone on to start companies.
          </p>
        </div>
      </header>

      <AlumniNews />

      <section>
        <div className="site-wrap pt-4 pb-16 md:pt-6 md:pb-24">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`chip ${activeFilter === filter ? 'is-on' : ''}`}
              >
                {filter === 'All' ? 'All' : `${filter}s`}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted text-[14px] text-center py-16">No alumni in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((person) => {
                const photo = PHOTOS[person.photo]
                return (
                  <article key={person.name} className="card-surface flex flex-col">
                    <div className="aspect-[4/5] bg-canvas-soft overflow-hidden">
                      {photo ? (
                        <img
                          src={photo}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[linear-gradient(160deg,#1a1145_0%,#2d1b69_52%,#3a1f8e_100%)] flex items-center justify-center">
                          <span className="font-heading text-[32px] font-semibold text-white tracking-[-0.06em]">
                            {initials(person.name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand mb-2">
                        {person.tag}
                      </p>
                      <h2 className="text-[20px] font-semibold text-ink tracking-[-0.03em]">{person.name}</h2>
                      <p className="mt-1 text-[13px] font-medium text-ink">{person.now}</p>
                      <p className="mt-1 text-[12px] text-muted">{person.from}</p>
                      <p className="mt-3 text-[14px] leading-relaxed text-muted flex-1">{person.blurb}</p>
                      {person.href ? (
                        <a
                          href={person.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand hover:text-brand-bright"
                        >
                          Visit
                          <ExternalLink className="size-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          <p className="mt-12 text-center text-[13px] text-muted max-w-[36rem] mx-auto">
            A growing list of eDC alumni, not exhaustive. Were you part of eDC?{' '}
            <Link to="/contact" className="text-brand font-medium hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

export default Alumni
