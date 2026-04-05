import React, { useEffect, useRef } from "react";
import { StaggerSpeakers } from "./ui/stagger-speakers";
import { Boxes } from "./ui/background-boxes";

const PastSpeakers = () => {
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
      id="past-speakers" 
      className="relative w-full py-[clamp(4rem,8vw,8rem)] bg-neutral-white text-text-dark overflow-hidden"
    >
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-neutral-white z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="opacity-60" />

      <div 
        ref={sectionRef}
        className="relative z-20 w-full opacity-0 translate-y-8 transition-all duration-700 ease-out pointer-events-none"
      >
        <div className="mb-12 text-center px-4 pointer-events-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary-dark inline-flex flex-col items-center gap-4">
            Past Speakers
            <div className="w-[40px] h-1 bg-accent-cyan rounded-full"></div>
          </h2>
        </div>

        {/* Full width container, no max-width constraints */}
        <div className="w-full pointer-events-auto">
          <StaggerSpeakers />
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
