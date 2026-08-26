import { useEffect } from 'react'

const FORMS = [
  {
    id: 'corporate',
    heading: 'Corporate Partnerships',
    body: "Partner with eDC to co-develop initiatives that inspire innovation and entrepreneurship, from hackathons and startup bootcamps to industry challenges and workshops. Together, let's bridge academia and industry to shape India's next generation of founders.",
    cta: 'Collaborate Now',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdXoJPV-Pk2TYEirJs5UeJIY2HUotcRhlCXcgJaJdQzRiLA8Q/viewform?usp=publish-editor',
  },
  {
    id: 'incubation',
    heading: 'Incubation & Mentorship',
    body: "Are you building a startup and need the right guidance, resources, or network to grow? Join eDC's incubation and mentorship programs at IIT Delhi to access expert mentors, industry connections, workspace opportunities, and investor exposure.",
    cta: 'Apply Now',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScyKj67FDVdXbba9mMoazX4qUWEmn7fHmVqOlyI9NsbClEJRQ/viewform?usp=dialog',
  },
  {
    id: 'mentor',
    heading: 'Become a Mentor',
    body: "Share your experience, expertise, and entrepreneurial journey with aspiring founders. As a mentor, you'll help shape ideas, refine business strategies, and empower student teams to grow into real-world ventures that create lasting impact.",
    cta: 'Get Started',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfvD5MlGJpoQBQ9215IoGRCKTS8LxEsj7YTIJ3GUOYngNBBg/viewform?usp=publish-editor',
  },
  {
    id: 'sponsor',
    heading: 'Become a Sponsor',
    body: "Support India's premier student entrepreneurship ecosystem. As an eDC sponsor, your brand will be featured across IIT Delhi's flagship events, startup programs, and nationwide outreach while contributing directly to the growth of India's future founders.",
    cta: 'Become a Sponsor',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScIdbQoS1t3Jr2vobyhiqpnMeTByvDy2zdVG_fg2HH29oeKqA/viewform?usp=publish-editor',
  },
]

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="band-lilac">
      <header className="page-hero">
        <div className="site-wrap">
          <h1 className="text-hero font-semibold text-ink tracking-[-0.038em] text-balance max-w-[16ch] mx-auto">
            Join Us
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted max-w-[34rem] mx-auto">
            Whether you're a founder, industry leader, or brand — there's a place for you in India's most vibrant student entrepreneurship ecosystem.
          </p>
        </div>
      </header>

      <section className="band-lilac">
        <div className="site-wrap pt-4 pb-16 md:pt-6 md:pb-24 grid md:grid-cols-2 gap-5">
          {FORMS.map((form) => (
            <article key={form.id} className="card-surface p-8 md:p-10 flex flex-col">
              <h2 className="text-[24px] font-semibold text-ink tracking-[-0.03em]">{form.heading}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted flex-1">{form.body}</p>
              <a
                href={form.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-fill mt-8 w-fit"
              >
                {form.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default JoinUs
