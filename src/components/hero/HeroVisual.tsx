"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, Code, Cpu, Layers } from "lucide-react";

export function HeroVisual() {
  const [isPrefersReducedMotion, setIsPrefersReducedMotion] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const shouldAnimate = !isPrefersReducedMotion && isTabVisible;

  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] aspect-square flex items-center justify-center select-none mx-auto opacity-95 hover:opacity-100 transition-opacity"
      aria-hidden="true"
    >
      {/* Soft atmospheric glow behind the composition */}
      <div
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#4f7cff]/15 via-[#8b5cf6]/12 to-[#22d3ee]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Rotating concentric orbital engineering rings (paused on reduced motion / hidden tab) */}
      <svg
        className={`absolute inset-0 w-full h-full text-slate-300/60 dark:text-white/10 pointer-events-none ${
          shouldAnimate ? "animate-spin-slow" : ""
        }`}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer orbital circle */}
        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        {/* Middle orbital circle */}
        <circle
          cx="200"
          cy="200"
          r="140"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Inner boundary circle */}
        <circle
          cx="200"
          cy="200"
          r="100"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        {/* Crosshair coordinate lines */}
        <line x1="15" y1="200" x2="55" y2="200" stroke="currentColor" strokeWidth="1" />
        <line x1="345" y1="200" x2="385" y2="200" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="15" x2="200" y2="55" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="345" x2="200" y2="385" stroke="currentColor" strokeWidth="1" />

        {/* Orbiting colored nodes */}
        <circle cx="200" cy="60" r="3" fill="#4f7cff" />
        <circle cx="340" cy="200" r="3" fill="#22d3ee" />
        <circle cx="200" cy="340" r="3" fill="#8b5cf6" />
        <circle cx="60" cy="200" r="3" fill="#10b981" />
      </svg>

      {/* Central Monogram Composition Frame with Glowing Gradient Border */}
      <div className="relative z-10 p-[1.5px] rounded-2xl bg-gradient-to-tr from-[#4f7cff] via-[#8b5cf6] to-[#22d3ee] shadow-[0_0_30px_rgba(79,124,255,0.22)] transition-transform duration-300 hover:scale-[1.02]">
        <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-[15px] bg-white/95 dark:bg-[#0c1120]/95 backdrop-blur-md p-4 sm:p-5 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Subtle inner grid aura */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#4f7cff]/5 via-transparent to-[#8b5cf6]/5 pointer-events-none"
            aria-hidden="true"
          />

          {/* Location label */}
          <div className="text-[10px] font-mono-tech text-slate-500 dark:text-[#a8b0c0] tracking-wider uppercase mb-1 text-center font-medium">
            Mohali, Punjab, India
          </div>

          {/* Big Monogram with Shimmer Accent */}
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#3b66ff] to-slate-900 dark:from-white dark:via-[#7ba3ff] dark:to-white font-mono-tech leading-none my-1">
            MSG
          </div>

          {/* Minimal Engineering Tagline */}
          <div className="mt-2 text-[10px] sm:text-[11px] font-mono-tech text-slate-600 dark:text-[#cbd5e1] font-medium tracking-wide text-center">
            Software Engineering · AI/ML
          </div>

          {/* Technical Corner Accents */}
          <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#4f7cff]/40" />
          <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#8b5cf6]/40" />
          <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#22d3ee]/40" />
          <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#10b981]/40" />
        </div>
      </div>

      {/* Decorative Technology Chips (Restrained: static glass placement with hover elevation, no continuous bouncing) */}
      {/* 1. Python (Top Left) */}
      <div className="absolute top-3 left-1 sm:-left-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1120]/90 backdrop-blur-md border border-[#38bdf8]/30 text-xs font-mono-tech text-slate-800 dark:text-slate-200 shadow-sm hover:scale-105 transition-transform duration-200">
        <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
        <span>Python</span>
      </div>

      {/* 2. React (Top Right) */}
      <div className="absolute top-4 right-1 sm:-right-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1120]/90 backdrop-blur-md border border-[#22d3ee]/30 text-xs font-mono-tech text-slate-800 dark:text-slate-200 shadow-sm hover:scale-105 transition-transform duration-200">
        <Code className="w-3.5 h-3.5 text-[#22d3ee]" />
        <span>React</span>
      </div>

      {/* 3. FastAPI (Right Mid) */}
      <div className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1120]/90 backdrop-blur-md border border-[#10b981]/30 text-xs font-mono-tech text-slate-800 dark:text-slate-200 shadow-sm hover:scale-105 transition-transform duration-200">
        <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
        <span>FastAPI</span>
      </div>

      {/* 4. AI/ML (Bottom Left) */}
      <div className="absolute bottom-5 left-1 sm:-left-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1120]/90 backdrop-blur-md border border-[#8b5cf6]/30 text-xs font-mono-tech text-slate-800 dark:text-slate-200 shadow-sm hover:scale-105 transition-transform duration-200">
        <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
        <span>AI/ML</span>
      </div>

      {/* 5. TypeScript (Bottom Right) */}
      <div className="absolute -bottom-2 right-4 sm:right-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1120]/90 backdrop-blur-md border border-[#4f7cff]/30 text-xs font-mono-tech text-slate-800 dark:text-slate-200 shadow-sm hover:scale-105 transition-transform duration-200">
        <Layers className="w-3.5 h-3.5 text-[#4f7cff]" />
        <span>TypeScript</span>
      </div>
    </div>
  );
}
