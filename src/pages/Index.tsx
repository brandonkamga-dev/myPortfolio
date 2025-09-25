
"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import LesCracks from "../components/LesCracks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <div className="pt-6">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="lescracks">
          <LesCracks />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
