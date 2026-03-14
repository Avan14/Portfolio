"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Positions from "@/components/Positions";
import Contact from "@/components/Contact";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Positions />
      <Contact />
    </main>
  );
}
