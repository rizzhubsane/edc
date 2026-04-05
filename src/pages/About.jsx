import React, { useEffect } from 'react'
import Section from '../components/Section'
import ChromaGrid from '../components/ui/ChromaGrid'
import { FooterBackgroundGradient } from '../components/ui/hover-footer'
import { coreTeam, teamMembers } from '../utility/teams'
import { MissionVisionWork } from '../components/ui/mission-vision-work'
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'

const About = ({ JPG }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(13, 11, 46)"
      gradientBackgroundEnd="rgb(26, 17, 69)"
      firstColor="45, 27, 105"
      secondColor="56, 189, 248"
      thirdColor="37, 99, 235"
      fourthColor="13, 11, 46"
      fifthColor="58, 31, 142"
      pointerColor="56, 189, 248"
      blendingValue="hard-light"
      size="70%"
      containerClassName="min-h-screen"
      className="w-full"
    >
      {/* Page Header */}
      <div className="w-full px-[clamp(1rem,4vw,6rem)] pt-32 lg:pt-40 pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[800px]">
            <h1 className="font-heading font-bold text-text-primary text-[clamp(3.5rem,7vw,5.5rem)] mb-4">
              About Us
            </h1>
            <p className="font-body text-text-body text-lg md:text-xl mb-6">
              Building India's most vibrant student entrepreneurship community since 2002.
            </p>
            <div className="w-[60px] h-1 bg-accent-cyan rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Mission / Vision / Work */}
      <div className="w-full px-[clamp(1rem,4vw,6rem)] pb-12">
        <div className="mx-auto max-w-[1200px]">
          <MissionVisionWork />
        </div>
      </div>

      {/* Team Photo */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={JPG.edcteam}
          alt="eDC Team Family"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-deep to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/50 to-transparent"></div>
        <div className="absolute bottom-10 left-0 w-full text-center">
          <h2 className="font-heading font-bold text-text-primary text-4xl md:text-5xl tracking-wide">
            Our Family
          </h2>
        </div>
      </section>

      {/* Core + extended team */}
      <div className="relative overflow-hidden border-t border-white/5">
        <FooterBackgroundGradient />
        <div className="relative z-10">
          <Section variant="dark" className="!bg-transparent !pb-4">
            <div className="mb-8 text-center">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-text-primary inline-flex flex-col items-center gap-4">
                Core Team
                <div className="w-[40px] h-1 bg-accent-cyan rounded-full"></div>
              </h2>
            </div>
            <div className="w-full relative opacity-60">
              <ChromaGrid
                items={coreTeam.map(member => ({
                  image: member.image,
                  title: member.name,
                  subtitle: member.position,
                  url: member.linkedin,
                  borderColor: '#38BDF8',
                  gradient: 'linear-gradient(145deg, rgba(56,189,248,0.2), #000)'
                }))}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </Section>

          <Section variant="dark" className="!bg-transparent !pt-4">
            <div className="mb-8 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
                Team Members
              </h2>
            </div>
            <div className="w-full relative opacity-60">
              <ChromaGrid
                items={teamMembers.map(member => ({
                  image: member.image,
                  title: member.name,
                  subtitle: member.position,
                  url: member.linkedin,
                  borderColor: '#E2B84A',
                  gradient: 'linear-gradient(145deg, rgba(226,184,74,0.15), #000)'
                }))}
                radius={250}
                columns={4}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </Section>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default About
