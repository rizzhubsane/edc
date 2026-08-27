import { useEffect } from 'react'
import { FaqAccordion } from '../components/ui/faq-accordion'
import { faqItems } from '../utility/faq.jsx'

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="band-lilac">
      <header className="page-hero">
        <div className="site-wrap">
          <h1 className="mx-auto max-w-[16ch] text-balance text-hero font-semibold tracking-[-0.038em] text-ink">
            FAQ
          </h1>
          <p className="mx-auto mt-5 max-w-[34rem] text-[18px] leading-relaxed text-muted">
            Answers to the questions students ask most about eDC, startups, and getting started.
          </p>
        </div>
      </header>

      <section>
        <div className="site-wrap max-w-[52rem] pb-24 md:pb-28">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </main>
  )
}

export default FAQ
