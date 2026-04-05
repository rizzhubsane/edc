import React, { useEffect, useRef } from "react";
import { Boxes } from "./ui/background-boxes";

const AboutHome = ({ JPG }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about-home" 
      className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1rem,4vw,6rem)] bg-neutral-white text-text-dark overflow-hidden"
    >
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-neutral-white z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="opacity-60" />

      <div 
        ref={sectionRef}
        className="relative z-20 max-w-[1200px] mx-auto w-full opacity-0 translate-y-8 transition-all duration-700 ease-out pointer-events-none"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pointer-events-auto">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-heading font-extrabold text-primary-dark mb-6 tracking-[-0.02em] leading-tight">
              What is eDC
              <div className="w-20 h-1.5 bg-accent-cyan mt-4 rounded-full"></div>
            </h2>
            <p className="text-lg md:text-xl font-body text-neutral-muted leading-relaxed mb-6">
              Entrepreneurship Development Cell (eDC), IIT Delhi is India's largest student-driven organization committed to fostering a culture of innovation and entrepreneurship since 2002. Through a blend of experiential learning, mentorship, and industry engagement, eDC provides an enabling ecosystem where innovation thrives and ambition meets execution. At eDC, we don't just encourage entrepreneurship — we enable it, empowering innovators to build what they believe in.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-cyan/20 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img 
                src={JPG.edcteam} 
                alt="eDC Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;
