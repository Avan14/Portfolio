import { experience } from "@/data/siteData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 lg:px-24 relative overflow-hidden"
    >
      {/* Vertical Label */}
      <div className="absolute right-4 lg:right-12 top-32 vertical-margin-text font-mono text-[10px] text-accent-purple tracking-[0.5em] opacity-50">
        EXPERIENCE — 04
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl text-text-primary mb-16 reveal-on-scroll italic font-extrabold">
          Professional Path<span className="text-accent-teal">·</span>
        </h2>

        <div className="relative border-l border-accent-purple/20 pl-8 ml-4 space-y-12">
          {experience.map((entry, idx) => (
            <div key={idx} className="relative reveal-on-scroll">
              {/* Timeline dot */}
              <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-accent-purple border-4 border-bg-primary" />

              <div className="glass-card p-8 group hover:border-accent-purple/30 transition-all duration-500 rounded">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-text-primary">
                      {entry.title}
                    </h3>
                    <p className="text-accent-teal font-mono text-sm tracking-widest">
                      {entry.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted uppercase py-1 px-3 border border-accent-purple/10 rounded-full">
                    {entry.dates}
                  </span>
                </div>
                <ul className="space-y-4 text-text-muted text-sm leading-relaxed">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent-purple mt-1">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
