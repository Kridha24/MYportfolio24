"use client";

import React, { useState, useEffect, useRef } from "react";
import { Camera, Activity, Play, Pause, RotateCcw, ShieldCheck } from "lucide-react";

type SignalPhase = "GREEN" | "YELLOW" | "RED";

export function TraffiqVisual() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [vehicleCount, setVehicleCount] = useState(28);
  const [densityLevel, setDensityLevel] = useState<"HIGH" | "OPTIMAL" | "MODERATE">("HIGH");
  const [signalPhase, setSignalPhase] = useState<SignalPhase>("GREEN");
  const [timerSeconds, setTimerSeconds] = useState(42);
  const [carXPosition, setCarXPosition] = useState(34); // percentage
  const [isPrefersReducedMotion, setIsPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  // Check reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) setIsPlaying(false);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // IntersectionObserver to pause when offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Pause on tab visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) setIsPlaying(false);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Simulation lifecycle loop
  useEffect(() => {
    if (!isPlaying || !isIntersecting || isPrefersReducedMotion) return;

    const interval = setInterval(() => {
      // Countdown signal timer
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          // Switch phases
          setSignalPhase((currPhase) => {
            if (currPhase === "GREEN") {
              setDensityLevel("MODERATE");
              return "YELLOW";
            }
            if (currPhase === "YELLOW") {
              setDensityLevel("OPTIMAL");
              return "RED";
            }
            // If RED, cycle back to GREEN & increment vehicle counter
            setDensityLevel("HIGH");
            setVehicleCount((c) => c + 1);
            return "GREEN";
          });
          return 15; // Reset interval window
        }
        return prev - 1;
      });

      // Animate foreground vehicle position across lane
      setCarXPosition((prev) => (prev > 75 ? 20 : prev + 2.5));
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, isIntersecting, isPrefersReducedMotion]);

  const handleReset = () => {
    setSignalPhase("GREEN");
    setVehicleCount(28);
    setDensityLevel("HIGH");
    setTimerSeconds(48);
    setCarXPosition(34);
    setIsPlaying(true);
  };

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-950 overflow-hidden shadow-xl select-none group/visual transition-all duration-300"
    >
      {/* Top System Bar */}
      <div className="px-4 py-2.5 bg-slate-900/95 border-b border-white/8 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tech">
        <div className="flex items-center gap-2 text-slate-300">
          <Camera className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold text-white">CAM_04 // JUNCTION SECTOR 18</span>
          <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 text-[10px]">
            Computer Vision Workflow Illustration
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Simulated RTSP Feed
          </span>
          <span className="hidden md:inline text-slate-400">Illustrative Inference</span>

          {/* Interactive Play/Pause/Reset Controls */}
          <div className="flex items-center gap-1 ml-2 border-l border-white/10 pl-2">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="p-1 rounded hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause visual animation" : "Play visual animation"}
            >
              {isPlaying ? (
                <Pause className="w-3 h-3 text-amber-400" />
              ) : (
                <Play className="w-3 h-3 text-emerald-400 fill-current" />
              )}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-1 rounded hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
              aria-label="Reset visual"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Road Junction Viewport with Vector Overlay */}
      <div className="relative aspect-video w-full bg-[#070b16] overflow-hidden">
        {/* Road Perspective Grid */}
        <svg
          className="absolute inset-0 w-full h-full text-white/5 pointer-events-none"
          viewBox="0 0 600 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Road Outlines */}
          <line x1="180" y1="0" x2="40" y2="340" stroke="currentColor" strokeWidth="2" />
          <line x1="420" y1="0" x2="560" y2="340" stroke="currentColor" strokeWidth="2" />
          <line
            x1="300"
            y1="0"
            x2="300"
            y2="340"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="12 12"
          />
          {/* Cross Street */}
          <line
            x1="0"
            y1="170"
            x2="600"
            y2="170"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 6"
          />

          {/* Polygon Region of Interest (ROI) Mask */}
          <polygon
            points="140,80 460,80 520,290 80,290"
            fill="rgba(6, 182, 212, 0.07)"
            stroke="rgba(6, 182, 212, 0.7)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* ROI Overlay Marker */}
        <div className="absolute top-3 left-4 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono-tech text-cyan-300 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          ROI ZONE A-1 [ACTIVE DETECTION MASK]
        </div>

        {/* Bounding Box 1: Car */}
        <div className="absolute top-[35%] left-[22%] w-[24%] h-[28%] rounded border-2 border-emerald-400 bg-emerald-500/10 p-1 flex flex-col justify-between transition-transform duration-300 group-hover/visual:scale-[1.02] shadow-[0_0_12px_rgba(16,185,129,0.25)]">
          <span className="self-start px-1.5 py-0.5 rounded bg-emerald-950/90 text-[10px] font-mono-tech text-emerald-300 font-bold border border-emerald-400/40">
            car 0.94
          </span>
          <span className="self-end text-[9px] font-mono-tech text-emerald-300/80">
            Track #108
          </span>
        </div>

        {/* Bounding Box 2: Bus / Transit */}
        <div className="absolute top-[28%] right-[24%] w-[23%] h-[38%] rounded border-2 border-[#4f7cff] bg-[#4f7cff]/10 p-1 flex flex-col justify-between transition-transform duration-300 group-hover/visual:scale-[1.02] shadow-[0_0_12px_rgba(79,124,255,0.25)]">
          <span className="self-start px-1.5 py-0.5 rounded bg-blue-950/90 text-[10px] font-mono-tech text-[#4f7cff] font-bold border border-[#4f7cff]/40">
            bus 0.91
          </span>
          <span className="self-end text-[9px] font-mono-tech text-blue-300/80">
            Lane 02
          </span>
        </div>

        {/* Dynamic Foreground Moving Car Bounding Box */}
        <div
          style={{ left: `${carXPosition}%` }}
          className="absolute bottom-[10%] w-[22%] h-[24%] rounded border-2 border-emerald-400 bg-emerald-500/10 p-1 flex flex-col justify-between transition-all duration-700 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        >
          <span className="self-start px-1.5 py-0.5 rounded bg-emerald-950/90 text-[10px] font-mono-tech text-emerald-300 font-bold border border-emerald-400/40">
            car 0.96 [INBOUND]
          </span>
          <span className="self-end text-[9px] font-mono-tech text-emerald-300/80">
            Moving Flow
          </span>
        </div>

        {/* Physical Traffic Signal Post UI */}
        <div className="absolute top-3 right-4 p-2 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col items-center gap-1.5 shadow-lg">
          <span className="text-[9px] font-mono-tech text-slate-400 uppercase">Phase 01</span>
          <div className="flex flex-col gap-1 p-1 bg-black rounded-md border border-white/10">
            {/* Red light */}
            <span
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                signalPhase === "RED"
                  ? "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.9)] scale-110"
                  : "bg-rose-950/50"
              }`}
            />
            {/* Yellow light */}
            <span
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                signalPhase === "YELLOW"
                  ? "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)] scale-110"
                  : "bg-amber-950/50"
              }`}
            />
            {/* Green light */}
            <span
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                signalPhase === "GREEN"
                  ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] scale-110"
                  : "bg-emerald-950/50"
              }`}
            />
          </div>
          <span className="text-[10px] font-mono-tech text-emerald-400 font-bold">
            {timerSeconds}s
          </span>
        </div>

        {/* Density HUD Pill */}
        <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono-tech flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-300">Density:</span>
          <span
            className={`font-bold ${
              densityLevel === "HIGH"
                ? "text-amber-400"
                : densityLevel === "OPTIMAL"
                ? "text-emerald-400"
                : "text-cyan-400"
            }`}
          >
            {densityLevel} ({vehicleCount}/min)
          </span>
        </div>
      </div>

      {/* Bottom Timing Allocation Bar */}
      <div className="p-3 bg-slate-900/90 border-t border-white/8 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tech">
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              signalPhase === "GREEN"
                ? "bg-emerald-400 animate-pulse"
                : signalPhase === "YELLOW"
                ? "bg-amber-400"
                : "bg-rose-500"
            }`}
          />
          <span className="text-slate-300">Adaptive Signal Timing Engine:</span>
          <span
            className={`font-bold ${
              signalPhase === "GREEN"
                ? "text-emerald-400"
                : signalPhase === "YELLOW"
                ? "text-amber-400"
                : "text-rose-400"
            }`}
          >
            Phase 01 {signalPhase} ({timerSeconds}s Remaining)
          </span>
        </div>
        <div className="text-[11px] text-cyan-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          Adaptive Allocation: Dynamic window based on vehicle volume
        </div>
      </div>

      {/* Accessible Illustrative Note */}
      <div className="px-4 py-1.5 bg-slate-950 border-t border-white/5 text-center text-[10px] font-mono-tech text-slate-400 dark:text-slate-500">
        Interface values are illustrative and do not represent production metrics.
      </div>
    </div>
  );
}
