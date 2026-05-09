import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { useScroll } from "../context/ScrollContext";

export function Home() {
  const { registerSection } = useScroll();

  return (
    <>
      <Hero ref={(el) => registerSection("home", el)} />
      <About ref={(el) => registerSection("about", el)} />
      <Skills ref={(el) => registerSection("skills", el)} />
      <Projects ref={(el) => registerSection("projects", el)} />
      <Experience ref={(el) => registerSection("experience", el)} />
      <Testimonials />
      <Contact ref={(el) => registerSection("contact", el)} />
    </>
  );
}
