"use client";

import React, { useState, useEffect } from "react";
import { Activity, Camera, Cpu, Database, Wifi, ShieldCheck } from "lucide-react";

export function SystemTelemetryDashboard() {
  const [vehicleCount, setVehicleCount] = useState(18);
  const [signalSeconds, setSignalSeconds] = useState(24);
  const [activeLane, setActiveLane] = useState<"North-South" | "East-West">("North-South");
  const [fps, setFps] = useState(30);

  // Subtle real-time simulation of engine telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalSeconds((prev) => {
        if (prev <= 1) {
          setActiveLane((lane) => (lane === "North-South" ? "East-West" : "North-South"));
          setVehicleCount(Math.floor(Math.random() * 12) + 12);
          return 30;
        }
        return prev - 1;
      });
      // Small jitter in FPS
      setFps(29 + Math.round(Math.random() * 2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0d1424]/90 p-5 shadow-2xl backdrop-blur-sm transition-all duration-300">
      {/* Top Telemetry Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono-tech tracking-wider uppercase font-semibold text-slate-700 dark:text-slate-200">
            ENGINE_TELEMETRY :: NODE_01
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono-tech text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Wifi className="w-3.5 h-3.5 text-blue-500" />
            <span>RTSP Live</span>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            {fps} FPS
          </span>
        </div>
      </div>

      {/* Main Visual: Simulated Computer Vision Feed & ROI Detection */}
      <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-[16/10] mb-4 flex flex-col justify-between p-3">
        {/* Abstract CCTV Road Grid (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 250"
        >
          {/* Road guidelines */}
          <line x1="200" y1="0" x2="200" y2="250" stroke="#334155" strokeDasharray="6 4" strokeWidth="2" />
          <line x1="0" y1="125" x2="400" y2="125" stroke="#334155" strokeDasharray="6 4" strokeWidth="2" />
          {/* Intersection boundary */}
          <rect x="130" y="65" width="140" height="120" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />
          {/* Calibrated ROI Polygon */}
          <polygon
            points="140,80 260,80 280,180 120,180"
            fill="rgba(6, 182, 212, 0.08)"
            stroke="#06b6d4"
            strokeWidth="1.5"
          />
        </svg>

        {/* Video stream overlay tags */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tech text-slate-300 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Camera className="w-3 h-3" />
            <span>CAM_04 // INTERSECTION_NORTH</span>
          </span>
          <span className="text-slate-400">MODEL: YOLOv8-NANO</span>
        </div>

        {/* Simulated Object Detection Bounding Boxes */}
        <div className="relative z-10 my-auto grid grid-cols-2 gap-4 px-4">
          <div className="border border-cyan-400/80 bg-cyan-500/10 rounded p-1.5 text-[10px] font-mono-tech w-28">
            <div className="flex justify-between text-cyan-300 font-semibold mb-1">
              <span>TRUCK</span>
              <span>96%</span>
            </div>
            <div className="w-full h-8 border border-dashed border-cyan-400/40 rounded flex items-center justify-center text-[9px] text-slate-400">
              ROI: POSITIVE
            </div>
          </div>

          <div className="border border-blue-400/80 bg-blue-500/10 rounded p-1.5 text-[10px] font-mono-tech w-28 ml-auto">
            <div className="flex justify-between text-blue-300 font-semibold mb-1">
              <span>SEDAN</span>
              <span>94%</span>
            </div>
            <div className="w-full h-8 border border-dashed border-blue-400/40 rounded flex items-center justify-center text-[9px] text-slate-400">
              ROI: POSITIVE
            </div>
          </div>
        </div>

        {/* Real-time stats footer inside stream */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tech bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
          <span className="text-slate-300">
            ACTIVE COUNT:{" "}
            <strong className="text-blue-400 font-bold">{vehicleCount}</strong> VEHICLES
          </span>
          <span className="text-emerald-400 font-semibold">
            DENSITY: {vehicleCount > 20 ? "HIGH" : "NORMAL"}
          </span>
        </div>
      </div>

      {/* Grid of Micro-Metrics: Signal Timing, Backend Latency, Database Store */}
      <div className="grid grid-cols-3 gap-2 text-xs font-mono-tech">
        {/* Module 1: Adaptive Signal */}
        <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mb-1 text-[10px] uppercase">
            <Activity className="w-3 h-3 text-emerald-500" />
            <span>SIGNAL PHASE</span>
          </div>
          <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span className="truncate">{activeLane}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono">
              {signalSeconds}s
            </span>
          </div>
        </div>

        {/* Module 2: Inference Engine */}
        <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mb-1 text-[10px] uppercase">
            <Cpu className="w-3 h-3 text-blue-500" />
            <span>INFERENCE</span>
          </div>
          <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>FastAPI</span>
            <span className="text-blue-600 dark:text-blue-400 font-mono">18ms</span>
          </div>
        </div>

        {/* Module 3: Persistence Layer */}
        <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mb-1 text-[10px] uppercase">
            <Database className="w-3 h-3 text-cyan-500" />
            <span>DATA STORE</span>
          </div>
          <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>Postgres</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono">SYNC</span>
          </div>
        </div>
      </div>

      {/* Security & System Integrity Badge */}
      <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono-tech text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>RBAC & Stream Encryption Active</span>
        </span>
        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">
          DEMO SIMULATION
        </span>
      </div>
    </div>
  );
}
