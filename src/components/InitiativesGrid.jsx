import React from "react";
import Section from "./Section";
import { InteractiveSelector } from "./ui/InteractiveSelector";
import { EtheralShadow } from "./ui/etheral-shadow";
import venturestudio from "../assets/venturestudio.jpg";
import regionals from "../assets/regionals.jpg";
import moonshot from "../assets/Moonshot.JPG";
import blueprint from "../assets/blueprint.jpg";
import startupclinic from "../assets/StartupClinic.JPG";
import thesistoventure from "../assets/thesistoventure.jpg";

/** Copy aligned with `utility/initiative.jsx`; photos are the same assets used across the site. */
const initiatives = [
  {
    id: 1,
    title: "Moonshot",
    description:
      "eDC IIT Delhi’s flagship startup funding showcase — early-stage startups pitch to top investors, VCs, and incubators for funding, mentorship, and visibility.",
    image: moonshot,
    link: "/initial#moonshot",
  },
  {
    id: 2,
    title: "Venture Studio",
    description:
      "Semester-long program that turns bold ideas into real ventures with structured modules, mentorship, and guidance from leading IIT Delhi alumni and investors.",
    image: venturestudio,
    link: "/initial#venture-studio",
  },
  {
    id: 3,
    title: "BECon Regionals",
    description:
      "Takes IIT Delhi’s flagship entrepreneurship conclave nationwide — Moonshot, Blueprint, and Startup Clinic — building momentum for the Grand Finale on campus.",
    image: regionals,
    link: "/initial#regionals",
  },
  {
    id: 4,
    title: "Blueprint",
    description:
      "Flagship business plan competition under BECon Regionals: mentorship, investor networking, and workshops — with prizes and perks worth ₹1 Cr+.",
    image: blueprint,
    link: "/initial#blueprint",
  },
  {
    id: 5,
    title: "Startup Clinic",
    description:
      "High-impact mentorship for early-stage founders: one-on-one guidance from entrepreneurs, investors, and experts to refine, validate, and accelerate your venture.",
    image: startupclinic,
    link: "/initial#startup-clinic",
  },
  {
    id: 6,
    title: "Thesis to Venture",
    description:
      "Helps scholars turn research into startups or impactful technologies with guidance, funding access, and industry connections.",
    image: thesistoventure,
    link: "/initial#thesis-to-venture",
  },
];

const InitiativesGrid = () => {
  return (
    <div className="relative bg-primary-deep">
      {/* Etheral shadow background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <EtheralShadow
          color="rgba(56, 189, 248, 0.18)"
          animation={{ scale: 55, speed: 35 }}
          noise={{ opacity: 0.4, scale: 1 }}
          sizing="fill"
        />
      </div>

      <Section
        variant="dark"
        id="initiatives"
        className="!bg-transparent !pt-[clamp(3rem,6vw,5rem)] relative z-10"
        wideContent
      >
        <InteractiveSelector
          heading="Our Initiatives"
          subheading="Explore programs that take you from idea to impact — competitions, studios, clinics, and more."
          options={initiatives}
        />
      </Section>
    </div>
  );
};

export default InitiativesGrid;
