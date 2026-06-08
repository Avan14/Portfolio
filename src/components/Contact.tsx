import { personalInfo } from "@/data/siteData";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-white pt-24 pb-8 border-t-4 border-black px-4 md:px-8"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">

        {/* ── Giant Orange CTA Block ─────────────────────────── */}
        <div className="flex flex-col items-center justify-center w-full mb-16 relative bg-brand-orange border-4 border-black p-12 md:p-24 brutalist-shadow-xl">
          {/* Decorative rotated emoji */}
          <h2
            className="text-5xl md:text-[8rem] font-black uppercase leading-none tracking-tighter flex flex-col items-center text-black"
            style={{ textShadow: "4px 4px 0px #fff" }}
          >
            <span className="flex items-center gap-4 flex-wrap justify-center">
              INTERESTED IN{" "}
              <span className="text-7xl md:text-[9rem] transform rotate-12 inline-block drop-shadow-[8px_8px_0_rgba(0,0,0,1)]">
                ✌️
              </span>
            </span>
            <span>WORKING TOGETHER?</span>
          </h2>

          {/* White email card */}
          <div className="mt-16 flex flex-col items-center gap-6 bg-white border-4 border-black p-10 md:p-16 brutalist-shadow-xl hover:translate-x-1 hover:-translate-y-1 transition-none">
            <p className="text-xl font-black uppercase tracking-widest text-brand-purple">
              Contact me:
            </p>
            <a
              className="text-2xl md:text-5xl font-black hover:text-brand-orange transition-none relative group uppercase"
              href={`mailto:${personalInfo.email}`}
            >
              {personalInfo.email}
              <span className="absolute -right-12 top-0 text-4xl transform rotate-[-45deg] group-hover:translate-x-4 transition-none">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* ── Footer Bottom Bar ─────────────────────────────── */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t-4 border-black text-sm font-black text-black uppercase tracking-widest gap-6 mt-8 pt-12">
          <p className="text-left">
            Designed &amp; Built
            <br />
            by {personalInfo.name}
          </p>

          {/* Social links */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-4 border-black bg-white hover:bg-brand-orange transition-none brutalist-shadow hover:translate-x-1 hover:-translate-y-1"
            >
              GITHUB
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-4 border-black bg-white hover:bg-brand-purple hover:text-white transition-none brutalist-shadow hover:translate-x-1 hover:-translate-y-1"
            >
              LINKEDIN
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-4 border-black bg-white hover:bg-black hover:text-white transition-none brutalist-shadow hover:translate-x-1 hover:-translate-y-1"
            >
              LEETCODE
            </a>
            <a
              href={personalInfo.socials.codeforces}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-4 border-black bg-white hover:bg-brand-orange transition-none brutalist-shadow hover:translate-x-1 hover:-translate-y-1"
            >
              CODEFORCES
            </a>
          </div>

          <p className="text-right">
            © 2026 — All Rights Reserved
            <br />
            <a
              href="#home"
              className="hover:text-brand-orange hover:bg-black hover:px-2 transition-none border-b-4 border-black"
            >
              Back to top ↗
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
