"use client";

import { codingProfiles } from "@/data/siteData";

export default function CompetitiveCoding() {
  const lc = codingProfiles.find((p) => p.platform === "LeetCode");
  const cf = codingProfiles.find((p) => p.platform === "Codeforces");

  if (!lc || !cf) return null;

  // Calculate difficulty percentages for LeetCode
  const totalLc = lc.problemsSolved.total;
  const easyPct = ((lc.problemsSolved.easy || 0) / totalLc) * 100;
  const medPct = ((lc.problemsSolved.medium || 0) / totalLc) * 100;
  const hardPct = ((lc.problemsSolved.hard || 0) / totalLc) * 100;

  return (
    <section
      id="coding"
      className="py-16 md:py-32 bg-[#1a1a1a] border-y-4 border-black px-4 md:px-8 overflow-x-hidden"
    >
      <div className="max-w-[1400px] mx-auto text-white">
        
        {/* ── Block 1: Hero Banner ────────────────────────────── */}
        <h2
          className="text-6xl md:text-[10rem] font-black leading-[0.85] mb-16 md:mb-24 uppercase"
          style={{ textShadow: "6px 6px 0px var(--color-brand-orange)" }}
        >
          COMPETITIVE
          <br />
          CODING
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* LeetCode Card */}
          <div className="bg-white text-black border-4 border-black p-8 brutalist-shadow-xl hover:translate-x-1 hover:-translate-y-1 transition-none relative">
            <div className="absolute top-0 left-0 w-full border-b-4 border-black bg-brand-orange py-2 px-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
              </div>
              <span className="font-black text-[12px] uppercase tracking-widest">{lc.platform}</span>
            </div>
            
            <div className="mt-12 flex justify-between items-end">
              <div>
                <p className="font-mono text-sm uppercase tracking-widest text-brand-orange font-bold mb-2">Rating</p>
                <p className="text-6xl md:text-8xl font-black leading-none">{lc.rating}</p>
              </div>
              <span className="border-4 border-black bg-brand-orange text-black px-4 py-2 font-black uppercase text-sm brutalist-shadow">
                {lc.title}
              </span>
            </div>

            <div className="mt-12 pt-8 border-t-4 border-black flex justify-between items-center">
              <div>
                <p className="text-3xl font-black">{lc.problemsSolved.total}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-black/60 font-black">Problems Solved</p>
              </div>
              <a
                href={lc.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white border-4 border-black px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-brand-orange hover:text-black transition-none brutalist-shadow"
              >
                Profile ↗
              </a>
            </div>
          </div>

          {/* Codeforces Card */}
          <div className="bg-white text-black border-4 border-black p-8 brutalist-shadow-xl hover:translate-x-1 hover:-translate-y-1 transition-none relative">
            <div className="absolute top-0 left-0 w-full border-b-4 border-black bg-brand-purple py-2 px-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
              </div>
              <span className="font-black text-[12px] uppercase tracking-widest text-white">{cf.platform}</span>
            </div>
            
            <div className="mt-12 flex justify-between items-end">
              <div>
                <p className="font-mono text-sm uppercase tracking-widest text-brand-purple font-bold mb-2">Rating</p>
                <p className="text-6xl md:text-8xl font-black leading-none">{cf.rating}</p>
              </div>
              <span className="border-4 border-black bg-brand-purple text-white px-4 py-2 font-black uppercase text-sm brutalist-shadow">
                {cf.title}
              </span>
            </div>

            <div className="mt-12 pt-8 border-t-4 border-black flex justify-between items-center">
              <div>
                <p className="text-3xl font-black">{cf.problemsSolved.total}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-black/60 font-black">Problems Solved</p>
              </div>
              <a
                href={cf.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white border-4 border-black px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-none brutalist-shadow"
              >
                Profile ↗
              </a>
            </div>
          </div>
          
        </div>

        {/* ── Block 2: Stats Dashboard (Grid) ───────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1 border-4 border-black bg-white text-black p-6 brutalist-shadow border-t-[12px] border-t-[#000]">
            <p className="text-4xl md:text-5xl font-black">{lc.problemsSolved.total + cf.problemsSolved.total}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-black/60 font-black mt-2">Total Solved</p>
          </div>
          
          {lc.stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="border-4 border-black bg-white text-black p-6 brutalist-shadow border-t-[12px] border-t-brand-orange">
              <p className="text-4xl md:text-5xl font-black text-brand-orange">{stat.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-black/60 font-black mt-2">{stat.label}</p>
            </div>
          ))}

          {cf.stats.slice(1, 3).map((stat, i) => (
            <div key={i} className="border-4 border-black bg-white text-black p-6 brutalist-shadow border-t-[12px] border-t-brand-purple">
              <p className="text-4xl md:text-5xl font-black text-brand-purple">{stat.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-black/60 font-black mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Block 3: Difficulty Breakdown Bar ─────────────────── */}
        <div className="border-4 border-black bg-white p-8 brutalist-shadow-lg text-black">
          <h3 className="text-2xl font-black uppercase mb-6">LeetCode Difficulty Breakdown</h3>
          
          {/* Stacked Bar */}
          <div className="w-full h-12 flex border-4 border-black mb-4">
            <div 
              className="h-full bg-[#16a34a] border-r-4 border-black flex items-center justify-center font-black text-xs text-white"
              style={{ width: `${easyPct}%` }}
            >
              {easyPct > 10 && 'EASY'}
            </div>
            <div 
              className="h-full bg-[#facc15] border-r-4 border-black flex items-center justify-center font-black text-xs text-black"
              style={{ width: `${medPct}%` }}
            >
              {medPct > 10 && 'MED'}
            </div>
            <div 
              className="h-full bg-[#dc2626] flex items-center justify-center font-black text-xs text-white"
              style={{ width: `${hardPct}%` }}
            >
              {hardPct > 10 && 'HARD'}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-between font-mono text-sm font-black uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black bg-[#16a34a] inline-block" />
              <span>{lc.problemsSolved.easy} Easy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black bg-[#facc15] inline-block" />
              <span>{lc.problemsSolved.medium} Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black bg-[#dc2626] inline-block" />
              <span>{lc.problemsSolved.hard} Hard</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
