import { projects } from "@/data/siteData";

export default function Projects() {
  const p1 = projects[0];
  const pRemaining = projects.slice(1);

  return (
    <section
      className="py-16 md:py-32 bg-brand-purple border-y-4 border-black px-4 md:px-8"
      id="projects"
    >
      <div className="max-w-[1400px] mx-auto">
        <h2
          className="text-7xl md:text-[12rem] font-black leading-[0.85] mb-24 md:mb-32 text-black tracking-tighter uppercase"
          style={{ textShadow: "6px 6px 0px #fff" }}
        >
          FEATURED
          <br />
          WORK
        </h2>

        <div className="space-y-24 md:space-y-40">
          {/* ── Project 1 — Full Width ─────────────────────────── */}
          {p1 && (
            <article className="group relative">
              {/* Card Visual */}
              <div className={`relative border-4 border-black bg-white mb-8 brutalist-shadow-xl hover:translate-x-2 hover:-translate-y-2 transition-none flex flex-col ${p1.imageUrl ? 'pt-12' : 'aspect-[16/9] p-8 items-center justify-center'}`}>
                {/* Ticker bar - moved to top so it doesn't overlap object-contain */}
                <div className="absolute top-0 left-0 w-full border-b-4 border-black bg-brand-orange text-black font-black text-[12px] uppercase tracking-widest py-2 px-4 flex gap-4 overflow-hidden whitespace-nowrap z-10">
                  <span>{p1.label}</span>
                  <span>•</span>
                  <span>{p1.stack.join(" • ")}</span>
                </div>
                
                {p1.imageUrl ? (
                  <img
                    src={p1.imageUrl}
                    alt={`${p1.name} UI`}
                    className="w-full h-auto object-contain z-0 block border-t-0"
                  />
                ) : (
                  <div className="bg-brand-light border-4 border-black w-full max-w-2xl brutalist-shadow p-4 h-full flex flex-col items-center justify-center relative overflow-hidden z-0">
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black" />
                      <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
                    </div>
                    <h3 className="font-black text-2xl md:text-5xl text-black uppercase opacity-20 text-center whitespace-pre-line">
                      {p1.imageFallbackText || p1.name}
                    </h3>
                  </div>
                )}
                {p1.liveUrl && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <a
                      href={p1.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-black text-white font-bold border-4 border-black text-xs px-4 py-2 hover:bg-brand-orange hover:text-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                    >
                      Live Website
                    </a>
                  </div>
                )}
              </div>

              {/* Info Bar */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 bg-white p-8 border-4 border-black brutalist-shadow mt-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-black uppercase tracking-widest text-brand-purple mb-2">
                    Project {p1.index}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6 uppercase text-black">
                    {p1.name} :{" "}
                    <span className="bg-brand-orange px-2 border-2 border-black font-bold">
                      {p1.tagline}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm font-black uppercase tracking-wider text-black">
                    {p1.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="border-2 border-black px-3 py-1 mono text-xs bg-brand-light"
                      >
                        [{s}]
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  className="bg-black text-white border-4 border-black px-8 py-4 text-lg font-black whitespace-nowrap hover:bg-brand-orange hover:text-black hover:translate-x-1 hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-none flex items-center gap-2 group/btn"
                  href={p1.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code{" "}
                  <span className="group-hover/btn:translate-x-2 transition-none">↗</span>
                </a>
              </div>
            </article>
          )}

          {/* ── Remaining Projects — 2-col grid ───────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {pRemaining.map((p, idx) => (
              <article
                key={p.name}
                className={`group ${idx > 0 ? "mt-12 md:mt-32" : ""}`}
              >
                {/* Card Visual */}
                <div
                  className={`relative border-4 border-black ${
                    idx % 2 === 0 ? "bg-[#facc15]" : "bg-[#166534]"
                  } mb-8 brutalist-shadow-lg hover:translate-x-2 hover:-translate-y-2 transition-none flex flex-col ${p.imageUrl ? 'pt-10' : 'aspect-[4/5] md:aspect-square items-center justify-center p-8'}`}
                >
                  {/* Ticker bar - moved to top */}
                  <div
                    className={`absolute top-0 left-0 w-full border-b-4 border-black ${
                      idx % 2 === 0 ? "bg-brand-orange" : "bg-white"
                    } text-black font-black text-[12px] uppercase tracking-widest py-2 px-4 flex gap-4 overflow-hidden whitespace-nowrap z-10`}
                  >
                    <span>{p.label}</span>
                    <span>•</span>
                    <span>{p.stack[0]}</span>
                  </div>

                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt={`${p.name} UI`}
                      className="w-full h-auto object-contain transition-all duration-300 block"
                    />
                  ) : (
                    <div className="bg-white border-4 border-black w-full max-w-sm brutalist-shadow p-4">
                      <div className="w-full h-40 border-4 border-black bg-gray-200 mb-4 flex items-center justify-center font-black uppercase text-xl text-black text-center whitespace-pre-line p-2">
                        {p.imageFallbackText || p.name}
                      </div>
                    </div>
                  )}

                  {p.liveUrl && (
                    <div className="absolute bottom-4 right-4">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-black text-white font-bold border-4 border-black text-xs px-4 py-2 flex items-center gap-2 hover:bg-brand-orange hover:text-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                      >
                        Live <span>▶</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Info Box */}
                <div className="bg-white p-6 border-4 border-black brutalist-shadow">
                  <p className="text-sm font-black uppercase tracking-widest text-brand-purple mb-2">
                    Project {p.index}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-black leading-tight mb-6 uppercase text-black">
                    {p.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-wider text-black mb-6">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="border-2 border-black px-3 py-1 mono text-xs bg-brand-light"
                      >
                        [{s}]
                      </span>
                    ))}
                  </div>
                  <a
                    className="bg-black text-white border-4 border-black px-6 py-3 text-sm font-black hover:bg-brand-orange hover:text-black hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] inline-flex items-center gap-2 group/btn transition-none"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code{" "}
                    <span className="group-hover/btn:translate-x-2 transition-none">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
