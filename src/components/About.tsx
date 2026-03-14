import { personalInfo, skills } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-24">
      {/* Vertical Label */}
      <div className="absolute left-4 lg:left-12 top-32 vertical-margin-text font-mono text-[10px] text-accent-purple tracking-[0.5em] opacity-50">
        ABOUT — 02
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Main Content */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl text-text-primary reveal-on-scroll italic font-extrabold">
            A little about me<span className="text-accent-teal">·</span>
          </h2>
          <p className="text-text-muted leading-relaxed text-lg reveal-on-scroll">
            {personalInfo.aboutParagraph}
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 reveal-on-scroll">
            {skills.map((group) => (
              <div key={group.category} className="space-y-4">
                <h4 className="font-mono text-xs text-accent-purple uppercase tracking-widest font-bold">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="glass-card hatch-hover px-3 py-1.5 text-[11px] font-mono text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Sidebar */}
        <div className="lg:col-span-5 bg-bg-accent-wash p-8 border border-accent-purple/10 relative group overflow-hidden reveal-on-scroll rounded">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-teal/5 blur-3xl group-hover:bg-accent-teal/10 transition-all" />
          <h3 className="font-display font-bold text-2xl mb-6 flex items-center text-text-primary">
            <span className="w-8 h-px bg-accent-purple mr-4" />
            Background
          </h3>
          <ul className="space-y-6 font-mono text-xs">
            <li>
              <p className="text-accent-teal mb-1">EDUCATION</p>
              <p className="text-text-primary">{personalInfo.education.institution}</p>
              <p className="text-text-muted">{personalInfo.education.degree}</p>
            </li>
            <li>
              <p className="text-accent-teal mb-1">LOCATION</p>
              <p className="text-text-primary">{personalInfo.location}</p>
            </li>
            <li>
              <p className="text-accent-teal mb-1">SPECIALIZATION</p>
              <p className="text-text-primary">Full-Stack Engineering</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
