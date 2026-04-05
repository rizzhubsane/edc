import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutHome from "../components/abouthome";
import InitiativesGrid from "../components/InitiativesGrid";
import PastSpeakers from "../components/pastSpeakers";
import Testimonial from "../components/testimonial";

const Home = ({ JPG, SVGs, PNG }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary-deep min-h-screen">
      <Hero />
      <Stats />
      <AboutHome JPG={JPG} />
      <InitiativesGrid />

      <PastSpeakers PNG={PNG} />
      <Testimonial />

    </div>
  );
};

export default Home;
