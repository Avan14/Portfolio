"use client";

import { useEffect } from "react";
import { projects } from "@/data/siteData";

export default function Projects() {
  useEffect(() => {
    const rows = document.querySelectorAll<HTMLElement>(".project-row");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      rows.forEach((row) => {
        const offset = row.offsetTop;
        const speed = 0.05;
        const rotation = (scrollY - offset) * speed;
        const clamped = Math.max(Math.min(rotation, 15), -15);
        row.style.transform = `rotateX(${clamped}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-32 overflow-hidden">
      <div className="px-6 lg:px-24 mb-16">
        <h2 className="font-serif text-4xl md:text-6xl text-text-primary italic font-extrabold">
          The Stage<span className="text-accent-teal">·</span>
        </h2>
      </div>

      <div className="perspective-container">
        {projects.map((project) => (
          <div
            key={project.name}
            className="project-row group border-y border-accent-purple/10 cursor-pointer relative py-12 px-6 lg:px-24 hover:bg-bg-accent-wash/50"
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-accent-teal uppercase tracking-widest block mb-2">
                  {project.index} / {project.label}
                </span>
                <h3 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold uppercase leading-none text-text-primary">
                  {project.name}
                </h3>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
                <p className="font-mono text-xs text-text-muted mb-4 max-w-xs ml-auto">
                  {project.tagline}
                </p>
                <div className="flex gap-2 justify-end">
                  {project.stack.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] border border-accent-purple/20 px-2 py-1 rounded text-text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Detail on hover */}
            <div className="max-h-0 overflow-hidden group-hover:max-h-[500px] transition-all duration-700 ease-in-out">
              <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-text-muted">
                <div>
                  <p className="mb-4">{project.highlights[0]}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {project.highlights.slice(1).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href={project.liveUrl}
                    className="bg-accent-purple text-white px-6 py-3 font-bold text-xs tracking-widest uppercase hatch-hover"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-primary underline font-bold text-xs tracking-widest uppercase"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
