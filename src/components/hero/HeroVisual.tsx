"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
      className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] flex flex-col items-center justify-center select-none mx-auto opacity-95 hover:opacity-100 transition-opacity"
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

      {/* Central Profile Photo Frame with Glowing Gradient Border */}
      <div className="relative z-10 p-[2px] rounded-3xl bg-gradient-to-tr from-[#4f7cff] via-[#8b5cf6] to-[#22d3ee] shadow-[0_0_40px_rgba(79,124,255,0.28)] transition-transform duration-150 ease-out hover:scale-[1.02] will-change-transform">
        <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[440px] rounded-[22px] bg-white/95 dark:bg-[#0c1120]/95 backdrop-blur-md relative overflow-hidden">
          <Image
            src="/images/mihir-profile.jpg"
            alt="Mihir Shekhar Gupta"
            fill
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 380px"
            quality={100}
            unoptimized
            className="object-cover object-[50%_22%]"
            priority
          />

          {/* Subtle bottom gradient for depth */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0c1120]/25 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Technical Corner Accents */}
          <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#4f7cff]/60 z-10" />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#8b5cf6]/60 z-10" />
          <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#22d3ee]/60 z-10" />
          <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#10b981]/60 z-10" />
        </div>
      </div>

      {/* Handle below profile photo */}
      <div className="relative z-10 mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 dark:bg-[#0c1120]/85 backdrop-blur-md border border-slate-200/90 dark:border-white/12 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
        <span className="text-sm font-mono-tech font-semibold tracking-wide text-slate-800 dark:text-[#f8fafc]">
          Kridha_ms_24
        </span>
      </div>
    </div>
  );
}
