"use client";

import { useState, useEffect } from "react";
import { personalInfo, skills } from "@/data/siteData";

export default function Hero() {
  const [isToggled, setIsToggled] = useState(false);
  const marqueeItems = skills.flatMap((s) => s.items);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsToggled((prev) => !prev);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-16 md:pt-[73px] overflow-x-hidden">
      {/* ── Main Hero Block ───────────────────────────────────── */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-8 py-20 relative bg-[#fcfcfc]">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(#000 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, #000 0 1px, transparent 1px 100%)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Status badge */}
        <div className="flex items-center gap-3 border-4 border-black bg-white px-5 py-2 mb-12 brutalist-shadow">
          <span className="w-3 h-3 rounded-full bg-green-500 border-2 border-black animate-pulse" />
          <span className="font-black text-xs uppercase tracking-widest text-black">
            Available for Freelance &amp; Internships
          </span>
        </div>

        {/* Giant stacked title */}
        <h1 className="font-black text-[18vw] md:text-[16vw] leading-[0.82] tracking-tighter uppercase relative z-10">
          <span
            className="block text-black"
            style={{
              textShadow:
                "4px 4px 0px var(--color-brand-orange), 8px 8px 0px rgba(0,0,0,0.15)",
            }}
          >
            CREATIVE
          </span>

          {/* Middle row: WEB [toggle] DEV */}
          <div
            className={`flex items-center justify-center gap-2 md:gap-6 mt-2 md:mt-4 relative transition-all duration-300 ${
              isToggled ? "text-[10vw] md:text-[8vw]" : ""
            }`}
          >
            <span
              className="text-brand-orange text-right"
              style={{ textShadow: "3px 3px 0px #000" }}
            >
              {isToggled ? "MACHINE" : "WEB"}
            </span>

            {/* Brutalist toggle widget */}
            <button
              onClick={() => setIsToggled(!isToggled)}
              className={`w-16 h-9 md:w-48 md:h-24 ${
                isToggled ? "bg-green-500" : "bg-[#c0392b]"
              } border-4 border-black brutalist-shadow flex items-center px-1 md:px-2 shrink-0 transition-colors cursor-pointer`}
            >
              <div
                className={`w-5 h-5 md:w-16 md:h-16 bg-white border-4 border-black transition-transform duration-300 ${
                  isToggled ? "translate-x-[1.25rem] md:translate-x-[7rem]" : "translate-x-0"
                }`}
              />
            </button>

            <span
              className="text-brand-orange"
              style={{ textShadow: "3px 3px 0px #000" }}
            >
              {isToggled ? "LEARNING" : "DEV"}
            </span>

            {/* Floating emoji accents */}
            <span className="absolute -top-8 right-8 text-3xl hidden md:block select-none">
              ⚡
            </span>
          </div>

          <span
            className={`block text-black mt-2 md:mt-4 relative transition-all duration-300 ${
              isToggled ? "text-[14vw] md:text-[12vw]" : ""
            }`}
            style={{
              textShadow:
                "4px 4px 0px var(--color-brand-purple), 8px 8px 0px rgba(0,0,0,0.1)",
            }}
          >
            {isToggled ? "ENGINEER" : "DEVELOPER"}
            <span className="absolute -bottom-4 -right-4 text-3xl hidden md:block select-none">
              🧩
            </span>
          </span>
        </h1>

        {/* Tagline + CTAs */}
        <p className="mt-14 max-w-xl text-base md:text-lg font-bold text-black/70 leading-relaxed">
          {personalInfo.aboutParagraph}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-black text-white border-4 border-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-brand-orange hover:text-black hover:translate-x-1 hover:-translate-y-1 brutalist-shadow transition-none"
          >
            View Projects ↓
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black border-4 border-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-brand-purple hover:text-white hover:translate-x-1 hover:-translate-y-1 brutalist-shadow transition-none"
          >
            Resume ↗
          </a>
        </div>

        {/* Stats row */}
        {/* <div className="mt-16 grid grid-cols-3 gap-0 border-4 border-black brutalist-shadow w-full max-w-xl">
          {[
            { label: "GPA", value: "8.43/10" },
            { label: "LeetCode", value: "Knight" },
            { label: "Problems", value: "1300+" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-4 px-3 text-center ${i < 2 ? "border-r-4 border-black" : ""} hover:bg-brand-orange transition-none`}
            >
              <p className="font-black text-xl md:text-2xl text-black">{stat.value}</p>
              <p className="mono text-[10px] uppercase tracking-widest text-black/50 font-black mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* ── Marquee Strip ─────────────────────────────────────── */}
      <div className="border-y-4 border-black bg-brand-orange py-5 overflow-hidden relative">
        {/* Two copies side-by-side for seamless loop */}
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="font-black text-xl md:text-3xl text-black uppercase shrink-0"
            >
              {item}
              <span className="mx-6 opacity-30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
