import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import edcteam from '../assets/edc_team.jpg'
import venturestudio from '../assets/venturestudio.jpg'
import moonshot from '../assets/Moonshot.JPG'
import regionals from '../assets/regionals.jpg'
import blueprint from '../assets/blueprint.jpg'
import startupclinic from '../assets/StartupClinic.JPG'
import thesistoventure from '../assets/thesistoventure.jpg'
import BillGates from '../assets/speakers/BillGates.jpg'
import MarkZuckerberg from '../assets/speakers/MarkZuckerberg.jpg'
import JackDorsey from '../assets/speakers/JackDorsey.jpg'
import RaghuramRajan from '../assets/speakers/RaghuramRajan.jpg'
import DeepinderGoyal from '../assets/speakers/DeepinderGoyal.jpg'
import SachinBansal from '../assets/speakers/SachinBansal.jpg'
import KunalBahl from '../assets/speakers/KunalBahl.jpg'
import SanjeevBikhchandani from '../assets/speakers/SanjeevBikhchandani.jpg'
import nikhilsir from '../assets/nikhilsir.jpeg'
import aloksir from '../assets/aloksir.jpeg'
import lakshmisir from '../assets/lakshmisir.jpg'

const INITIATIVES = [
  {
    title: 'Moonshot',
    body: 'eDC IIT Delhi’s flagship startup funding showcase — early-stage startups pitch to top investors, VCs, and incubators for funding, mentorship, and visibility.',
    image: moonshot,
    href: '/initial#moonshot',
  },
  {
    title: 'Venture Studio',
    body: 'Semester-long program that turns bold ideas into real ventures with structured modules, mentorship, and guidance from leading IIT Delhi alumni and investors.',
    image: venturestudio,
    href: '/initial#venture-studio',
  },
  {
    title: 'BECon Regionals',
    body: 'Takes IIT Delhi’s flagship entrepreneurship conclave nationwide — Moonshot, Blueprint, and Startup Clinic — building momentum for the Grand Finale on campus.',
    image: regionals,
    href: '/initial#regionals',
  },
  {
    title: 'Blueprint',
    body: 'Flagship business plan competition under BECon Regionals: mentorship, investor networking, and workshops — with prizes and perks worth ₹1 Cr+.',
    image: blueprint,
    href: '/initial#blueprint',
  },
  {
    title: 'Startup Clinic',
    body: 'High-impact mentorship for early-stage founders: one-on-one guidance from entrepreneurs, investors, and experts to refine, validate, and accelerate your venture.',
    image: startupclinic,
    href: '/initial#startup-clinic',
  },
  {
    title: 'Thesis to Venture',
    body: 'Helps scholars turn research into startups or impactful technologies with guidance, funding access, and industry connections.',
    image: thesistoventure,
    href: '/initial#thesis-to-venture',
  },
]

const SPEAKERS = [
  { name: 'Bill Gates', role: '', image: BillGates },
  { name: 'Mark Zuckerberg', role: 'Founder of Meta (formerly Facebook)', image: MarkZuckerberg },
  { name: 'Jack Dorsey', role: 'Co-founder of Twitter and Block', image: JackDorsey },
  { name: 'Raghuram Rajan', role: 'Former Governor of the RBI', image: RaghuramRajan },
  { name: 'Deepinder Goyal', role: 'Co-founder of Zomato', image: DeepinderGoyal },
  { name: 'Sachin Bansal', role: 'Co-founder of Flipkart', image: SachinBansal },
  { name: 'Kunal Bahl', role: 'Co-founder of Snapdeal', image: KunalBahl },
  { name: 'Sanjeev Bikhchandani', role: 'Founder of Info Edge', image: SanjeevBikhchandani },
]

const QUOTES = [
  {
    quote:
      'In recent years, the Entrepreneurship Development Cell at IIT Delhi has emerged as a vital catalyst in nurturing the spirit of innovation. Beyond enabling early-stage founders, eDC has successfully built an ecosystem that connects academia, industry, and investors to transform ideas into impactful ventures.',
    name: 'Dr. Nikhil Agarwal',
    role: 'MD FITT, IIT Delhi',
    image: nikhilsir,
  },
  {
    quote:
      "What eDC has created at IIT Delhi is rare — a genuine culture of entrepreneurship where students don't just learn about building companies, they actually build them. The cell's ability to bridge the gap between bold ideas and real execution is what sets it apart.",
    name: 'Alok Mittal',
    role: 'Co-founder & CEO, Indifi Technologies',
    image: aloksir,
  },
  {
    quote:
      'eDC embodies the entrepreneurial spirit that IIT Delhi aspires to cultivate in every student. Their programs bridge the gap between academic excellence and real-world impact, producing founders who are not just technically sound but visionary in their thinking.',
    name: 'Prof. Lakshmi Srinivasan',
    role: 'Director, IIT Delhi',
    image: lakshmisir,
  },
]

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />

      <Stats />

      <section className="band-white">
        <div className="site-wrap py-16 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-h1 text-ink text-balance">What is eDC</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted max-w-[34rem]">
              Entrepreneurship Development Cell (eDC), IIT Delhi is India's largest student-driven organization committed to fostering a culture of innovation and entrepreneurship since 2002. Through a blend of experiential learning, mentorship, and industry engagement, eDC provides an enabling ecosystem where innovation thrives and ambition meets execution. At eDC, we don't just encourage entrepreneurship — we enable it, empowering innovators to build what they believe in.
            </p>
          </div>
          <div className="rounded-[24px] overflow-hidden bg-canvas-soft aspect-[4/3]">
            <img
              src={edcteam}
              alt="eDC Team"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="initiatives" className="band-lilac">
        <div className="site-wrap py-16 md:py-24">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-h2 text-ink">Our Initiatives</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-muted">
              Explore programs that take you from idea to impact — competitions, studios, clinics, and more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {INITIATIVES.map((item) => (
              <Link key={item.title} to={item.href} className="card-surface group block">
                <div className="aspect-[16/10] overflow-hidden bg-canvas-soft">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-[22px] font-semibold text-ink tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
                  <p className="mt-4 text-[14px] font-medium text-brand">
                    Learn more <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="past-speakers" className="band-white">
        <div className="site-wrap py-16 md:py-20">
          <h2 className="text-h2 text-ink text-center mb-12">Past Speakers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-x-4 gap-y-8">
            {SPEAKERS.map((s) => (
              <div key={s.name} className="text-center">
                <div className="mx-auto w-[88px] h-[88px] rounded-full overflow-hidden bg-canvas-soft">
                  <img src={s.image} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <p className="mt-3 text-[13px] font-semibold text-ink">{s.name}</p>
                {s.role ? <p className="text-[12px] text-muted">{s.role}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-lilac">
        <div className="site-wrap py-16 md:py-24">
          <h2 className="text-h2 text-ink text-center mb-12">What They Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {QUOTES.map((item) => (
              <figure key={item.name} className="flex flex-col">
                <blockquote className="text-[16px] leading-relaxed text-ink tracking-[-0.01em]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-ink">{item.name}</p>
                    <p className="text-[12px] text-muted">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
