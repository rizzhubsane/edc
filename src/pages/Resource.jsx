import { useEffect, useState } from 'react'

const FILTERS = ['All', 'Startups', 'Technology', 'Finance', 'eDC Weekly']

const blogs = [
  { id: 1, category: 'Startups', title: 'How to Build an MVP in 30 Days', date: 'Oct 12, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'Startups', title: 'Finding Your First 100 Customers', date: 'Sep 15, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'Startups', title: "From Idea to Product-Market Fit: A Student Founder's Roadmap", date: 'Aug 20, 2025', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'Startups', title: 'Why Most Campus Startups Fail in Year One — and How to Beat the Odds', date: 'Jul 30, 2025', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'Startups', title: 'Co-founder Chemistry: How to Choose the Right Partner', date: 'Jul 10, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'Startups', title: 'Pitching to Investors: Lessons from Moonshot 2025', date: 'Jun 18, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80' },
  { id: 7, category: 'Technology', title: 'The Rise of AI Agents in DeepTech', date: 'Oct 05, 2025', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80' },
  { id: 8, category: 'Technology', title: 'How Generative AI is Reshaping the Indian Startup Ecosystem', date: 'Sep 05, 2025', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80' },
  { id: 9, category: 'Technology', title: 'Building for Bharat: Tech Solutions for the Next Billion Users', date: 'Aug 10, 2025', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80' },
  { id: 10, category: 'Technology', title: 'Open Source as a Go-to-Market Strategy for Deep Tech Startups', date: 'Jul 22, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' },
  { id: 11, category: 'Finance', title: "Understanding Term Sheets: A Founder's Guide", date: 'Sep 28, 2025', readTime: '12 min read', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80' },
  { id: 12, category: 'Finance', title: 'Pre-Seed to Series A: Understanding Indian VC Funding Stages', date: 'Aug 28, 2025', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80' },
  { id: 13, category: 'Finance', title: 'Cap Tables 101: What Every Student Founder Must Know', date: 'Aug 05, 2025', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
  { id: 14, category: 'Finance', title: 'Revenue Models that Scale: SaaS, Marketplace, and Beyond', date: 'Jul 05, 2025', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80' },
  { id: 15, category: 'eDC Weekly', title: 'Recap: Moonshot Pitch Day Highlights', date: 'Sep 20, 2025', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=800&q=80' },
  { id: 16, category: 'eDC Weekly', title: 'Founder Spotlight: Building in Stealth', date: 'Sep 08, 2025', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
  { id: 17, category: 'eDC Weekly', title: 'BECon Regionals Mumbai — What We Learned', date: 'Aug 15, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
  { id: 18, category: 'eDC Weekly', title: 'Venture Studio Cohort 3: Meet the Founders', date: 'Jul 28, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800&q=80' },
  { id: 19, category: 'eDC Weekly', title: 'Anastomosis 2025: School Innovators Take the Stage', date: 'Jul 15, 2025', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' },
  { id: 20, category: 'eDC Weekly', title: 'Industry Connect: Inside Our Startup Visits This Semester', date: 'Jun 30, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
]

const Resource = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = activeFilter === 'All' ? blogs : blogs.filter((b) => b.category === activeFilter)

  return (
    <main className="band-lilac">
      <header className="page-hero">
        <div className="site-wrap">
          <h1 className="text-hero font-semibold text-ink tracking-[-0.038em] text-balance max-w-[16ch] mx-auto">
            Resources
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted max-w-[34rem] mx-auto">
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
        <div className="site-wrap pt-4 pb-16 md:pt-6 md:pb-24">
          <h2 className="text-h2 font-semibold text-ink text-center mb-8">Blogs</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`chip ${activeFilter === filter ? 'is-on' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((blog, i) => (
              <article key={blog.id} className={`card-surface ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
                <div className={`bg-canvas-soft overflow-hidden img-zoom ${i === 0 ? 'aspect-[16/8]' : 'aspect-[16/9]'}`}>
                  <img
                    src={blog.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-7 flex flex-col flex-grow">
                  <p className="step-index mb-2 text-[1.05rem]">{String(i + 1).padStart(2, '0')}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand mb-2">
                    {blog.category}
                  </p>
                  <h3 className={`${i === 0 ? 'text-[22px] md:text-[28px]' : 'text-[17px]'} font-semibold text-ink tracking-[-0.02em] leading-snug`}>
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-[12px] text-muted">
                    {blog.date} · {blog.readTime}
                  </p>
                  <p className="mt-4 text-[13px] font-medium text-brand">Read More →</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resource
