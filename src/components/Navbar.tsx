"use client";

import { navSections, personalInfo } from "@/data/siteData";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

export default function Navbar() {
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      id="bottom-nav"
      className="fixed bottom-0 left-0 w-full z-[999] border-t border-[rgba(124,58,237,0.12)] bg-bg-primary/90 backdrop-blur-lg px-6 md:px-12 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-display font-bold text-xl border-2 border-accent-purple px-1 leading-none">
          {personalInfo.initials}
        </span>
        <span className="font-display text-[10px] tracking-widest uppercase font-bold hidden sm:inline">
          {personalInfo.name}
        </span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 font-display text-xs uppercase tracking-wider">
        {navSections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group flex items-center gap-1 transition-colors ${
                isActive ? "text-accent-purple" : "hover:text-accent-purple"
              }`}
            >
              <span className="text-[8px] opacity-50 group-hover:text-accent-teal">
                {s.number}
              </span>{" "}
              {s.label}
            </a>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4 text-text-muted">
        <a
          className="hover:text-accent-purple transition-colors"
          href={personalInfo.socials.github}
          target="_blank"
          rel="noreferrer"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          className="hover:text-accent-purple transition-colors"
          href={`mailto:${personalInfo.email}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu Button — handled by MobileNav */}
    </nav>
  );
}
