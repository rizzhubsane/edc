import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="hero-mesh relative flex flex-col items-center justify-center px-[var(--page-gutter)] text-center">
      <div className="max-w-[820px] mx-auto">
        <p className="page-kicker">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-bright" aria-hidden="true" />
          IDEATE-INNOVATE-INCUBATE
        </p>
        <span className="hero-rule" aria-hidden="true" />
        <h1 className="text-hero font-heading font-semibold text-ink leading-[1.08] tracking-[-0.038em] text-balance">
          Entrepreneurship Development Cell
        </h1>
        <p className="mt-5 text-[18px] md:text-[20px] leading-relaxed text-muted max-w-[600px] mx-auto">
          India's largest student-driven entrepreneurship cell, fostering innovation at IIT Delhi since 2007.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button type="button" className="pill pill-fill h-11 px-5" onClick={() => navigate('/initial')}>
            Explore Initiatives
          </button>
          <button type="button" className="pill pill-ghost h-11 px-5" onClick={() => navigate('/joinus')}>
            Join eDC
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
