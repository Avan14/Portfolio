"use client";

import { useState } from "react";

const mobileLinks = [
  { id: "home", label: "Home", desc: "Starting point of our journey." },
  { id: "about", label: "About", desc: "My background and core skills." },
  { id: "projects", label: "Projects", desc: "Visual showcase of my work." },
  { id: "experience", label: "Experience", desc: "Professional timeline." },
  { id: "contact", label: "Contact", desc: "Let's get in touch." },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger — visible only on mobile */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed bottom-4 right-6 z-[999] flex items-center gap-2 font-display text-xs font-bold tracking-widest"
      >
        <span className="text-accent-teal">☰</span> MENU
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[1001] flex-col justify-center p-12 transition-transform duration-500 ${
          open ? "flex translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 text-2xl font-display"
        >
          ×
        </button>
        <div className="flex flex-col gap-8">
          {mobileLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block"
            >
              <h2 className="font-serif text-5xl text-text-primary">
                {link.label}
              </h2>
              <p className="font-sans italic text-text-muted mt-1">
                {link.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
