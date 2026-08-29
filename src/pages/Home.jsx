import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import { InitiativesCarousel } from '../components/ui/initiatives-carousel'
import { TestimonialsBento } from '../components/ui/testimonials-bento'
import { Reveal } from '../components/ui/reveal'
import { SpeakersMarquee } from '../components/ui/speakers-marquee'
import edcteam from '../assets/edc_team.jpg'
import venturestudio from '../assets/venturestudio.jpg'
import moonshot from '../assets/Moonshot.JPG'
import regionals from '../assets/regionals.jpg'
import blueprint from '../assets/blueprint.jpg'
import startupclinic from '../assets/StartupClinic.JPG'
import thesistoventure from '../assets/thesistoventure.jpg'
import { SPEAKERS } from '../utility/speaker'
import nikhilsir from '../assets/nikhilsir.jpeg'
import aloksir from '../assets/aloksir.jpeg'
import lakshmisir from '../assets/lakshmisir.jpg'
import edutechLife from '../assets/partners/edutech-life.png'

const INITIATIVES = [
  {
    title: 'Moonshot',
    body: 'Early-stage startups pitch to top investors, VCs, and incubators.',
    image: moonshot,
    href: '/initial#moonshot',
  },
  {
    title: 'Venture Studio',
    body: 'A semester to turn bold ideas into real ventures.',
    image: venturestudio,
    href: '/initial#venture-studio',
  },
  {
    title: 'BECon Regionals',
    body: 'BECon nationwide: Moonshot, Blueprint, and Startup Clinic.',
    image: regionals,
    href: '/initial#regionals',
  },
  {
    title: 'Blueprint',
    body: 'Business plan competition with prizes and perks worth ₹1 Cr+.',
    image: blueprint,
    href: '/initial#blueprint',
  },
  {
    title: 'Startup Clinic',
    body: 'One-on-one mentorship for early-stage founders.',
    image: startupclinic,
    href: '/initial#startup-clinic',
  },
  {
    title: 'Thesis to Venture',
    body: 'Turn research into startups and real-world technology.',
    image: thesistoventure,
    href: '/initial#thesis-to-venture',
  },
]

const QUOTES = [
  {
    quote:
      'In recent years, the Entrepreneurship Development Cell (eDC) at IIT Delhi has emerged as a vital catalyst in nurturing the spirit of innovation and entrepreneurship among students. Beyond enabling early-stage founders, eDC has successfully built an ecosystem that connects academia, industry, and investors transforming ideas into impactful ventures. Through its structured programs, mentorship initiatives, and unwavering student leadership, eDC has demonstrated how a student driven platform can inspire a new generation of problem solvers and change-makers. Their commitment to fostering innovation and responsible entrepreneurship reflects the larger vision of IIT Delhi and FITT to convert research and creativity into sustainable societal impact. We extend our appreciation to the eDC team for their dedication and foresight, and look forward to witnessing the greater milestones this vibrant community is poised to achieve in the years ahead.',
    name: 'Dr. Nikhil Agarwal',
    role: 'MD FITT, IIT Delhi',
    image: nikhilsir,
  },
  {
    quote:
      "What eDC has created at IIT Delhi is rare: a genuine culture of entrepreneurship where students don't just learn about building companies, they actually build them. The cell's ability to bridge the gap between bold ideas and real execution is what sets it apart.",
    name: 'Alok Mittal',
    role: 'Co-founder & CEO, Indifi Technologies',
    image: aloksir,
  },
  {
    quote:
      'eDC embodies the entrepreneurial spirit that IIT Delhi aspires to cultivate in every student. Their programs bridge the gap between academic excellence and real-world impact, producing founders who are not just technically sound but visionary in their thinking.',
    name: 'Prof. R. Lakshmi Narayan',
    role: 'Professor In-Charge, eDC, IIT Delhi',
    image: lakshmisir,
  },
]

const Home = () => {
  const reduce = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />

      <Stats />

      <section className="band-white">
        <div className="site-wrap py-16 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <h2 className="section-title text-section text-ink text-left text-balance">What is eDC</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted max-w-[34rem]">
              Entrepreneurship Development Cell (eDC), IIT Delhi is India's largest student-driven organization committed to fostering a culture of innovation and entrepreneurship. Through a blend of experiential learning, mentorship, and industry engagement, eDC provides an enabling ecosystem where innovation thrives and ambition meets execution. At eDC, we don't just encourage entrepreneurship, we enable it, empowering innovators to build what they believe in.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-[24px] overflow-hidden bg-canvas-soft aspect-[4/3]">
            <motion.img
              src={edcteam}
              alt="eDC Team"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              initial={reduce ? false : { scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </Reveal>
        </div>
      </section>

      <section className="band-lilac">
        <div id="partners" className="site-wrap pt-16 md:pt-24">
          <Reveal>
            <h2 className="section-title text-section text-ink text-left">Partners</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 md:mt-12 flex flex-col items-center text-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
              Knowledge Partner
            </p>
            <a
              href="https://www.edutechlife.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center transition-opacity duration-500 hover:opacity-80"
            >
              <img
                src={edutechLife}
                alt="EDUTECH LIFE"
                loading="lazy"
                decoding="async"
                className="h-[5.5rem] w-auto object-contain md:h-24"
              />
            </a>
          </Reveal>
        </div>

        <div id="initiatives" className="site-wrap pt-14 pb-16 md:pt-20 md:pb-24">
          <Reveal className="mb-7">
            <h2 className="section-title text-section text-ink text-left">Our Initiatives</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <InitiativesCarousel items={INITIATIVES} />
          </Reveal>
        </div>
      </section>

      <section id="past-speakers" className="band-white">
        <div className="site-wrap pt-16 md:pt-20">
          <Reveal>
            <h2 className="section-title text-section text-ink text-left mb-10 md:mb-12">Past Speakers</h2>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <SpeakersMarquee speakers={SPEAKERS} />
        </Reveal>
        <div className="h-16 md:h-20" aria-hidden="true" />
      </section>

      <TestimonialsBento items={QUOTES} />
    </main>
  )
}

export default Home
