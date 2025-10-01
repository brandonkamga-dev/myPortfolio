
"use client";

import SEO from "../components/SEO";
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
    <>
      <SEO 
        title="Brandon Kamga - Développeur Full Stack & DevOps Engineer"
        description="Portfolio de Brandon Kamga, développeur full stack passionné par React, TypeScript, Python et DevOps. Découvrez mes projets innovants et articles techniques sur le développement web moderne."
        keywords="Brandon Kamga, Kamga Brandon, développeur full stack, React developer, TypeScript, Python, DevOps engineer, portfolio développeur, développeur web, ingénieur logiciel, machine learning, CI/CD, GitHub Actions, FastAPI"
        url="/"
      />
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
    </>
  );
};

export default Index;
