"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/siteData";

export default function Hero() {
  const shapeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const shape = shapeRef.current;
    if (!section || !shape) return;

    const handleMouseMove = (e: MouseEvent) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
      shape.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 pt-20 relative overflow-hidden"
    >
      {/* Left Content */}
      <div className="flex-1 z-10">
        <span
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted reveal"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, my name is
        </span>
        <h1
          className="font-display font-bold text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tighter text-text-primary mt-4 reveal"
          style={{ animationDelay: "0.2s" }}
        >
          AVAN <br /> SAHU<span className="text-accent-teal">.</span>
        </h1>
        <p
          className="mt-8 text-lg md:text-xl text-text-muted max-w-xl font-sans leading-relaxed reveal"
          style={{ animationDelay: "0.3s" }}
        >
          {personalInfo.tagline}
        </p>
        <div
          className="flex flex-wrap gap-4 mt-12 reveal"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            className="bg-accent-purple text-white px-8 py-4 font-display text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all hatch-hover"
            href="#projects"
          >
            View Projects →
          </a>
          <a
            className="border border-accent-purple text-accent-purple px-8 py-4 font-display text-sm uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-all"
            href={personalInfo.resumeUrl}
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* Right Visual */}
      <div className="flex-1 w-full h-[50vh] md:h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-teal/5 rounded-full blur-3xl transform scale-75" />
        <div
          ref={shapeRef}
          className="relative w-64 h-64 md:w-96 md:h-96 transition-transform duration-200 ease-out reveal"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-full h-full border-4 border-accent-purple/30 rounded-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 border-2 border-accent-teal/40 rounded-full flex items-center justify-center">
              <span className="font-display text-accent-purple text-3xl md:text-5xl font-bold opacity-80">
                AS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
