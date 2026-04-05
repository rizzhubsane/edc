import React, { useEffect } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const FORMS = [
  {
    id: "corporate",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    heading: "Corporate Partnerships",
    body: "Partner with eDC to co-develop initiatives that inspire innovation and entrepreneurship, from hackathons and startup bootcamps to industry challenges and workshops. Together, let's bridge academia and industry to shape India's next generation of founders.",
    cta: "Collaborate Now",
    accent: "from-[#4F3BB8] to-[#6C4FE0]",
    border: "border-[#6C4FE0]/40",
    glow: "shadow-[0_0_30px_rgba(108,79,224,0.2)]",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdXoJPV-Pk2TYEirJs5UeJIY2HUotcRhlCXcgJaJdQzRiLA8Q/viewform?usp=publish-editor",
  },
  {
    id: "incubation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    heading: "Incubation & Mentorship",
    body: "Are you building a startup and need the right guidance, resources, or network to grow? Join eDC's incubation and mentorship programs at IIT Delhi to access expert mentors, industry connections, workspace opportunities, and investor exposure.",
    cta: "Apply Now",
    accent: "from-[#1E6FB5] to-[#38BDF8]",
    border: "border-[#38BDF8]/40",
    glow: "shadow-[0_0_30px_rgba(56,189,248,0.2)]",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScyKj67FDVdXbba9mMoazX4qUWEmn7fHmVqOlyI9NsbClEJRQ/viewform?usp=dialog",
  },
  {
    id: "mentor",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    heading: "Become a Mentor",
    body: "Share your experience, expertise, and entrepreneurial journey with aspiring founders. As a mentor, you'll help shape ideas, refine business strategies, and empower student teams to grow into real-world ventures that create lasting impact.",
    cta: "Get Started",
    accent: "from-[#0E7A6E] to-[#2DD4BF]",
    border: "border-[#2DD4BF]/40",
    glow: "shadow-[0_0_30px_rgba(45,212,191,0.2)]",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfvD5MlGJpoQBQ9215IoGRCKTS8LxEsj7YTIJ3GUOYngNBBg/viewform?usp=publish-editor",
  },
  {
    id: "sponsor",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    heading: "Become a Sponsor",
    body: "Support India's premier student entrepreneurship ecosystem. As an eDC sponsor, your brand will be featured across IIT Delhi's flagship events, startup programs, and nationwide outreach while contributing directly to the growth of India's future founders.",
    cta: "Become a Sponsor",
    accent: "from-[#92630A] to-[#E2B84A]",
    border: "border-[#E2B84A]/40",
    glow: "shadow-[0_0_30px_rgba(226,184,74,0.2)]",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScIdbQoS1t3Jr2vobyhiqpnMeTByvDy2zdVG_fg2HH29oeKqA/viewform?usp=publish-editor",
  },
];

const JoinUs = () => {
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
      <div className="relative z-10 w-full">

        {/* Hero */}
        <div className="w-full px-[clamp(1rem,4vw,6rem)] pt-32 lg:pt-44 pb-16 text-center">
          <p className="font-body text-accent-cyan text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Get Involved
          </p>
          <h1 className="font-heading font-bold text-[clamp(3.5rem,7vw,5.5rem)] text-text-primary leading-[1.05] mb-6">
            Join Us
          </h1>
          <p className="font-body text-text-body text-lg md:text-xl max-w-[560px] mx-auto leading-relaxed">
            Whether you're a founder, industry leader, or brand — there's a place for you in India's most vibrant student entrepreneurship ecosystem.
          </p>
          <div className="w-[60px] h-1 bg-accent-cyan rounded-full mx-auto mt-8"></div>
        </div>

        {/* Cards Grid */}
        <div className="w-full px-[clamp(1rem,4vw,6rem)] pb-28">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {FORMS.map((form) => (
              <div
                key={form.id}
                className={`group relative bg-[rgba(255,255,255,0.04)] border ${form.border} backdrop-blur-[12px] rounded-[24px] p-8 lg:p-10 flex flex-col hover:-translate-y-1 transition-all duration-300 ${form.glow} hover:border-opacity-70`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${form.accent} flex items-center justify-center text-white mb-6 flex-shrink-0`}>
                  {form.icon}
                </div>

                {/* Content */}
                <h2 className="font-heading font-bold text-text-primary text-2xl lg:text-3xl mb-4 leading-tight">
                  {form.heading}
                </h2>
                <p className="font-body text-text-body text-base leading-relaxed flex-grow mb-8">
                  {form.body}
                </p>

                {/* CTA */}
                <button
                  onClick={() => window.open(form.link, "_blank", "noopener,noreferrer")}
                  className={`inline-flex items-center gap-2 font-body font-semibold text-sm px-6 py-3 rounded-[12px] bg-gradient-to-r ${form.accent} text-white hover:opacity-90 hover:shadow-lg transition-all duration-200 w-fit`}
                >
                  {form.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </BackgroundGradientAnimation>
  );
};

export default JoinUs;
