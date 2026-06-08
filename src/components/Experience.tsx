import { experience, achievements, positions } from "@/data/siteData";

export default function Experience() {
  return (
    <section id="experience">

      {/* ── Timeline Block — bg-brand-orange like the wireframe ── */}
      <div className="py-16 md:py-32 bg-brand-orange border-b-4 border-black px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2
            className="text-7xl md:text-[10rem] font-black leading-none mb-16 md:mb-24 text-black uppercase"
            style={{ textShadow: "6px 6px 0px #fff" }}
          >
            TIMELINE
          </h2>

          {/* Experience Table */}
          <div className="w-full bg-white border-4 border-black p-8 brutalist-shadow-xl">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 border-b-4 border-black pb-4 text-lg font-black uppercase tracking-widest text-black">
              <div className="col-span-2">Year</div>
              <div className="col-span-7">Role / Project</div>
              <div className="col-span-3 text-right">Company</div>
            </div>

            {/* Experience rows */}
            {experience.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 border-b-2 border-black py-6 items-start hover:bg-brand-purple hover:text-white transition-none group cursor-default"
              >
                <div className="col-span-2 text-xl font-black text-black group-hover:text-white">
                  {exp.dates.split("—")[0].trim().slice(-4)}
                </div>
                <div className="col-span-7">
                  <p className="text-2xl md:text-4xl font-black uppercase text-black group-hover:text-white">
                    {exp.title}
                  </p>
                  <ul className="mt-3 space-y-1 hidden group-hover:block">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="text-xs font-bold text-white flex gap-2">
                        <span className="shrink-0">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3 text-right">
                  <span className="inline-block bg-brand-orange border-4 border-black text-black text-sm font-black px-4 py-2 uppercase brutalist-shadow group-hover:bg-white transition-none">
                    {exp.company}
                  </span>
                </div>
              </div>
            ))}

            {/* Achievements as timeline rows */}
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 border-b-2 border-black last:border-b-4 py-6 items-center hover:bg-brand-purple hover:text-white transition-none group cursor-default"
              >
                <div className="col-span-2 text-xl font-black text-black group-hover:text-white">
                  —
                </div>
                <div className="col-span-7 text-2xl md:text-4xl font-black uppercase text-black group-hover:text-white">
                  {ach.platform}
                  {ach.bigNumber && (
                    <span className="ml-4 text-base font-black text-brand-purple group-hover:text-brand-orange">
                      {ach.bigNumber}
                    </span>
                  )}
                  {ach.rating && (
                    <span className="ml-4 text-base font-black text-black/40 group-hover:text-white/60">
                      {ach.rating}
                    </span>
                  )}
                </div>
                <div className="col-span-3 text-right">
                  <span className="inline-block bg-white border-4 border-black text-black text-sm font-black px-4 py-2 uppercase brutalist-shadow group-hover:bg-brand-orange transition-none">
                    {ach.badge ?? ach.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Leadership — white bg with purple accents ─────────── */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-white border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <h3
            className="text-5xl md:text-8xl font-black uppercase text-black mb-12 tracking-tighter"
            style={{ textShadow: "4px 4px 0px var(--color-brand-purple)" }}
          >
            LEADERSHIP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((pos) => (
              <div
                key={pos.label}
                className="border-4 border-black brutalist-shadow bg-white p-8 hover:bg-brand-purple hover:text-white transition-none group cursor-default"
              >
                <span className="mono text-xs font-black text-brand-purple group-hover:text-brand-orange uppercase tracking-widest block mb-3">
                  {pos.label}
                </span>
                <h4 className="font-black text-xl md:text-2xl uppercase text-black group-hover:text-white mb-4">
                  {pos.title}
                </h4>
                <p className="text-sm text-black/70 group-hover:text-white/80 font-bold leading-relaxed">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
