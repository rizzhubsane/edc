import { useEffect } from 'react'
import { coreTeam, teamMembers } from '../utility/teams'
import { MissionVisionWork } from '../components/ui/mission-vision-work'

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

const isRemotePlaceholder = (src) =>
  typeof src !== 'string' || src.includes('placeholder')

const Person = ({ member }) => {
  const photo = isRemotePlaceholder(member.image) ? null : member.image

  return (
    <a
      href={member.linkedin || undefined}
      target={member.linkedin ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="block text-center group"
    >
      <div className="aspect-square rounded-[18px] overflow-hidden bg-white shadow-[var(--sh-card)]">
        {photo ? (
          <img
            src={photo}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-heading text-[22px] font-semibold text-ink tracking-[-0.04em]">
            {initials(member.name)}
          </div>
        )}
      </div>
      <p className="mt-3 text-[14px] font-semibold text-ink tracking-[-0.02em]">{member.name}</p>
      <p className="text-[12px] text-muted">{member.position}</p>
    </a>
  )
}

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <header className="page-hero">
        <div className="site-wrap">
          <span className="hero-rule" aria-hidden="true" />
          <h1 className="text-hero font-semibold text-ink tracking-[-0.038em] text-balance max-w-[18ch] mx-auto">
            About Us
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted max-w-[34rem] mx-auto">
            Building India's most vibrant student entrepreneurship community since 2002.
          </p>
        </div>
      </header>

      <section className="band-white">
        <div className="site-wrap py-16 md:py-24">
          <MissionVisionWork />
        </div>
      </section>

      <section className="band-lilac">
        <div className="site-wrap py-16 md:py-24">
          <h2 className="text-h2 text-ink text-center mb-10">Core Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {coreTeam.map((member) => (
              <Person key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="band-white">
        <div className="site-wrap py-16 md:py-24">
          <h2 className="text-h2 text-ink text-center mb-10">Team Members</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <Person key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
