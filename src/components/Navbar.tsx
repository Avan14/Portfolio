"use client";

import { personalInfo } from "@/data/siteData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-xs font-black tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{personalInfo.name}</span>
        </div>
        <div className="flex gap-8">
          <a
            className="hover:bg-brand-orange hover:text-black px-2 py-1 border-2 border-transparent hover:border-black transition-none"
            href="#projects"
          >
            Work
          </a>
          <a
            className="hover:bg-brand-orange hover:text-black px-2 py-1 border-2 border-transparent hover:border-black transition-none"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:bg-brand-orange hover:text-black px-2 py-1 border-2 border-transparent hover:border-black transition-none"
            href="#coding"
          >
            Coding
          </a>
          <a
            className="hover:bg-brand-orange hover:text-black px-2 py-1 border-2 border-transparent hover:border-black transition-none"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            className="hover:bg-brand-orange hover:text-black px-2 py-1 border-2 border-transparent hover:border-black transition-none"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:bg-black hover:text-white px-2 py-1 transition-none"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </nav>
  );
}
