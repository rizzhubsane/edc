import React from 'react';
import { CircularTestimonials } from './ui/circular-testimonials';
import { EtheralShadow } from './ui/etheral-shadow';
import nikhilsir from '../assets/nikhilsir.jpeg';
import aloksir from '../assets/aloksir.jpeg';
import lakshmisir from '../assets/lakshmisir.jpg';

const testimonials = [
  {
    name: "Dr. Nikhil Agarwal",
    designation: "MD FITT, IIT Delhi",
    quote:
      "In recent years, the Entrepreneurship Development Cell at IIT Delhi has emerged as a vital catalyst in nurturing the spirit of innovation. Beyond enabling early-stage founders, eDC has successfully built an ecosystem that connects academia, industry, and investors to transform ideas into impactful ventures.",
    src: nikhilsir,
  },
  {
    name: "Alok Mittal",
    designation: "Co-founder & CEO, Indifi Technologies",
    quote:
      "What eDC has created at IIT Delhi is rare — a genuine culture of entrepreneurship where students don't just learn about building companies, they actually build them. The cell's ability to bridge the gap between bold ideas and real execution is what sets it apart.",
    src: aloksir,
  },
  {
    name: "Prof. Lakshmi Srinivasan",
    designation: "Director, IIT Delhi",
    quote:
      "eDC embodies the entrepreneurial spirit that IIT Delhi aspires to cultivate in every student. Their programs bridge the gap between academic excellence and real-world impact, producing founders who are not just technically sound but visionary in their thinking.",
    src: lakshmisir,
  },
];

const Testimonial = () => {
  return (
    <section className="relative w-full py-[clamp(4rem,8vw,8rem)] px-4 bg-primary-deep overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <EtheralShadow
          color="rgba(56, 189, 248, 0.18)"
          animation={{ scale: 55, speed: 35 }}
          noise={{ opacity: 0.4, scale: 1 }}
          sizing="fill"
        />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-text-primary tracking-tight mb-4">
            What They Say
          </h2>
          <div className="h-1 w-10 rounded-full bg-accent-cyan mx-auto" />
        </div>

        {/* Circular testimonials */}
        <div className="flex items-center justify-center w-full" style={{ maxWidth: "1024px" }}>
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#f7f7ff",
              designation: "#38BDF8",
              testimony: "#D1C4E9",
              arrowBackground: "#0F2557",
              arrowForeground: "#38BDF8",
              arrowHoverBackground: "#38BDF8",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "0.95rem",
              quote: "1.1rem",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
