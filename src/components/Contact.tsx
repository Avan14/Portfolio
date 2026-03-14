import { personalInfo } from "@/data/siteData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-24 bg-bg-accent-wash/30 border-t border-accent-purple/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Big Heading */}
        <div className="reveal-on-scroll">
          <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter uppercase text-text-primary">
            LET&apos;S BUILD SOMETHING GREAT
            <span className="text-accent-teal">·</span>
          </h2>
        </div>

        {/* Form + Links */}
        <div className="space-y-12 reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a className="group block" href={`mailto:${personalInfo.email}`}>
              <p className="font-mono text-[10px] text-accent-purple uppercase tracking-widest mb-2">
                Email
              </p>
              <p className="text-xl font-display group-hover:text-accent-teal transition-colors text-text-primary">
                {personalInfo.email}
              </p>
            </a>
            <a className="group block" href={`tel:${personalInfo.phone}`}>
              <p className="font-mono text-[10px] text-accent-purple uppercase tracking-widest mb-2">
                Phone
              </p>
              <p className="text-xl font-display group-hover:text-accent-teal transition-colors text-text-primary">
                {personalInfo.phone}
              </p>
            </a>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="bg-transparent border border-accent-purple/15 p-4 font-mono text-xs focus:border-accent-purple focus:ring-0 transition-all text-text-primary placeholder:text-text-muted rounded"
                placeholder="NAME"
                type="text"
              />
              <input
                className="bg-transparent border border-accent-purple/15 p-4 font-mono text-xs focus:border-accent-purple focus:ring-0 transition-all text-text-primary placeholder:text-text-muted rounded"
                placeholder="EMAIL"
                type="email"
              />
            </div>
            <textarea
              className="w-full bg-transparent border border-accent-purple/15 p-4 font-mono text-xs focus:border-accent-purple focus:ring-0 transition-all text-text-primary placeholder:text-text-muted rounded"
              placeholder="MESSAGE"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-accent-purple text-white py-4 font-display font-bold uppercase tracking-[0.2em] text-xs hatch-hover transition-all rounded"
            >
              Send Message
            </button>
          </form>

          <div className="flex gap-8 pt-6">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] hover:text-accent-teal transition-all text-text-muted"
            >
              LINKEDIN
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] hover:text-accent-teal transition-all text-text-muted"
            >
              GITHUB
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] hover:text-accent-teal transition-all text-text-muted"
            >
              LEETCODE
            </a>
            <a
              href={personalInfo.socials.codeforces}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] hover:text-accent-teal transition-all text-text-muted"
            >
              CODEFORCES
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-accent-purple/10 text-center">
        <p className="font-mono text-[10px] text-text-muted opacity-50 uppercase tracking-widest">
          © 2026 {personalInfo.name} · Built with passion &amp; caffeine
        </p>
      </footer>
    </section>
  );
}
