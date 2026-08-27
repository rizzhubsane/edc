import { useEffect, useMemo, useState } from 'react'
import blogs from '../utility/edc_blogs.js'
import { Reveal } from '../components/ui/reveal'

const matchesQuery = (blog, query) => {
  if (!query) return true
  const hay = `${blog.title} ${blog.description} ${blog.author}`.toLowerCase()
  return hay.includes(query)
}

const AuthorMark = ({ className = 'size-10' }) => (
  <span
    className={`grid shrink-0 place-items-center rounded-full bg-ink text-[10px] font-semibold tracking-[-0.04em] text-white ${className}`}
    aria-hidden="true"
  >
    eDC
  </span>
)

const Resource = () => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featured = blogs[0]
  const q = query.trim().toLowerCase()
  const list = useMemo(() => blogs.filter((blog) => matchesQuery(blog, q)), [q])

  return (
    <main className="band-lilac">
      <header className="page-hero">
        <div className="site-wrap">
          <h1 className="mx-auto max-w-[16ch] text-balance text-hero font-semibold tracking-[-0.038em] text-ink">
            Resources
          </h1>
          <p className="mx-auto mt-5 max-w-[34rem] text-[18px] leading-relaxed text-muted">
            Explore a curated list of resources to help you on your entrepreneurial journey.
          </p>
          <a
            href="https://edciitd.notion.site/?v=d74695ec05bb4e98a9395ee263346b16"
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-fill mt-8 inline-flex"
          >
            KNOWLEDGE BASE
          </a>
        </div>
      </header>

      <section>
        <div className="site-wrap pb-20 pt-4 md:pb-28 md:pt-6">
          {featured ? (
            <Reveal>
              <a
                href={featured.postURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid items-center gap-8 md:grid-cols-2 md:gap-12 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] xl:gap-20"
              >
                <div className="img-zoom overflow-hidden rounded-[22px] bg-white shadow-[var(--sh-card)]">
                  <div className="aspect-[16/10] md:aspect-[16/11]">
                    <img
                      src={featured.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="max-w-[40rem]">
                  <h2 className="text-balance text-[1.75rem] font-bold leading-tight tracking-[-0.035em] text-ink md:text-[2.35rem] xl:text-[2.6rem]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-[17px] leading-relaxed text-muted md:text-[18px]">
                    {featured.description}
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <AuthorMark className="size-11" />
                    <p className="text-[15px] font-medium text-ink">
                      {featured.author}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ) : null}

          <Reveal delay={0.08} className="mt-16 flex flex-col gap-4 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:mt-24">
            <h3 className="text-[1.45rem] font-bold tracking-[-0.03em] text-ink md:text-[1.75rem]">
              More Posts
            </h3>
            <label className="relative w-full sm:max-w-[28rem] lg:max-w-[32rem]">
              <span className="sr-only">Search blogs</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search blogs"
                className="h-11 w-full rounded-xl border border-hairline bg-white px-4 text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-500 placeholder:text-muted/70 hover:border-ink/20 focus:border-brand-bright/40 focus:shadow-[0_0_0_4px_rgba(58,31,142,0.1)]"
              />
            </label>
          </Reveal>

          <div className="mt-2 grid md:grid-cols-2 md:gap-x-12 xl:gap-x-20">
            {list.length ? (
              list.map((blog) => (
                <Reveal key={blog.id}>
                  <a
                    href={blog.postURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 border-b border-hairline py-7 md:py-8"
                  >
                    <div className="min-w-0">
                      <h4 className="text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink transition-colors duration-500 group-hover:text-brand-bright md:text-[19px]">
                        {blog.title}
                      </h4>
                      <p className="mt-1.5 line-clamp-2 text-[14px] leading-relaxed text-muted md:text-[15px]">
                        {blog.description}
                      </p>
                    </div>
                    <AuthorMark className="size-11 md:size-12" />
                  </a>
                </Reveal>
              ))
            ) : (
              <p className="border-b border-hairline py-10 text-[15px] text-muted md:col-span-2">
                No posts match that search.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resource
