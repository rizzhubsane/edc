import { useEffect, useMemo, useState } from 'react'

const galleryUrls = Object.values(
  import.meta.glob('../assets/gallery_pictures/*.{png,jpg,jpeg,webp,gif,svg,JPG,JPEG}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const FILTERS = ['All', 'BECon', 'Moonshot', 'Workshops', 'Team']
const CATEGORIES = ['BECon', 'Moonshot', 'Workshops', 'Team']

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const items = useMemo(
    () =>
      galleryUrls.map((src, index) => ({
        id: index + 1,
        src,
        category: CATEGORIES[index % CATEGORIES.length],
      })),
    []
  )

  const visible = activeFilter === 'All' ? items : items.filter((item) => item.category === activeFilter)

  useEffect(() => {
    if (lightbox == null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') {
        setLightbox((cur) => (cur == null ? cur : Math.min(visible.length - 1, cur + 1)))
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((cur) => (cur == null ? cur : Math.max(0, cur - 1)))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, visible.length])

  return (
    <main className="band-lilac">
      <header className="page-hero">
        <div className="site-wrap">
          <h1 className="text-hero font-semibold text-ink tracking-[-0.038em] text-balance max-w-[16ch] mx-auto">
            Gallery
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted max-w-[34rem] mx-auto">
            eDC through the years.
          </p>
        </div>
      </header>

      <section>
        <div className="site-wrap pt-2 pb-16 md:pt-4 md:pb-20">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter)
                  setLightbox(null)
                }}
                className={`chip ${activeFilter === filter ? 'is-on' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
          {visible.length === 0 ? (
            <p className="text-muted text-[14px] py-16">No photographs yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
              {visible.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightbox(index)}
                  className={`relative overflow-hidden rounded-[20px] bg-canvas-soft img-zoom ${
                    index === 0
                      ? 'col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto md:min-h-[420px]'
                      : 'aspect-square'
                  }`}
                >
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox != null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-[80] bg-ink/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photograph"
        >
          <img
            src={visible[lightbox].src}
            alt=""
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-[8px]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute top-5 right-5 text-white/80 hover:text-white text-[14px]"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
        </div>
      )}
    </main>
  )
}

export default GalleryPage
