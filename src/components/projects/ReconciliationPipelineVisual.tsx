"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Database,
  FileSpreadsheet,
  Lock,
  Scale,
  ShieldCheck,
  Sliders,
  UserCheck,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface PipelineStep {
  id: number;
  stageName: string;
  stageNum: string;
  title: string;
  icon: React.ElementType;
  accentColor: string; // Tailwind color classes
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  summary: string;
  activeDetails: {
    transactionId: string;
    vendor: string;
    amount: string;
    status: string;
    metricLabel: string;
    metricValue: string;
    invariantNote: string;
  };
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 1,
    stageNum: "Stage 01",
    stageName: "Ingestion & Normalization",
    title: "Multi-Source Feeds & Schema Cleaning",
    icon: FileSpreadsheet,
    accentColor: "border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.18)]",
    badgeBg: "bg-cyan-500/10",
    badgeBorder: "border-cyan-500/25",
    badgeText: "text-cyan-400",
    summary: "Normalizes column aliases, formats dates to ISO YYYY-MM-DD, and transforms currency floats into 64-bit integer cents.",
    activeDetails: {
      transactionId: "INV-2024-9104",
      vendor: "Razorpay Cloud Infrastructure Ltd",
      amount: "₹42,500.00 (4,250,000 cents)",
      status: "Ingested & Schema Normalized",
      metricLabel: "Alias Harmonization",
      metricValue: "12 variant headers unified",
      invariantNote: "Zero floating-point rounding drift via to_cents() integer representation.",
    },
  },
  {
    id: 2,
    stageNum: "Stage 02",
    stageName: "Pass 1 Deterministic",
    title: "Exact Cents & Hash Matching",
    icon: Lock,
    accentColor: "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.20)]",
    badgeBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/25",
    badgeText: "text-emerald-400",
    summary: "High-speed hash index lookup matches exact amount in cents and normalized counterparty strings. Matched pairs are locked into 1:1 bijective sets.",
    activeDetails: {
      transactionId: "INV-2024-9104 ⇄ TXN-RZP-88219",
      vendor: "Razorpay Cloud Infrastructure Ltd",
      amount: "₹42,500.00 = ₹42,500.00",
      status: "Verified 1:1 Bijective Match",
      metricLabel: "Deterministic Throughput",
      metricValue: "> 5,000 records/sec (Confidence: 1.00)",
      invariantNote: "Bijective invariant guarantees neither record can ever be matched again in subsequent passes.",
    },
  },
  {
    id: 3,
    stageNum: "Stage 03",
    stageName: "Pass 2 Fuzzy Analysis",
    title: "Multi-Signal Gating & Heuristics",
    icon: Sliders,
    accentColor: "border-blue-500/50 shadow-[0_0_20px_rgba(79,124,255,0.20)]",
    badgeBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/25",
    badgeText: "text-blue-400",
    summary: "Evaluates remaining unmatched candidates across amount variance (≤ 5%), Levenshtein token similarity (≥ 50%), and date proximity (≤ 5 days).",
    activeDetails: {
      transactionId: "INV-2024-9105 ⇄ TXN-BNK-44102",
      vendor: "Google Workspace India ⇄ G-SUITE SERVICES",
      amount: "₹12,490.00 vs ₹12,500.00 (Variance: 0.08%)",
      status: "Fuzzy Scored: 0.74 (Human Attention Required)",
      metricLabel: "Composite Score",
      metricValue: "Vendor: 92% | Date: 1 Day | Amount: 99.9%",
      invariantNote: "Three independent gating thresholds prevent high-variance records from auto-matching.",
    },
  },
  {
    id: 4,
    stageNum: "Stage 04",
    stageName: "Operator Triage",
    title: "Human-in-the-Loop Review Queue",
    icon: UserCheck,
    accentColor: "border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.20)]",
    badgeBg: "bg-amber-500/10",
    badgeBorder: "border-amber-500/25",
    badgeText: "text-amber-400",
    summary: "Scores between 0.60 and 0.79 route to operator dashboard for manual approval, dispute filing, or tolerance adjustments with behavioral baseline updates.",
    activeDetails: {
      transactionId: "CASE-REV-408",
      vendor: "Google Workspace India",
      amount: "Difference: -₹10.00 (Foreign Exchange Buffer)",
      status: "Pending Operator Action",
      metricLabel: "Action Queue",
      metricValue: "Approve Variance / File Dispute / Reject",
      invariantNote: "Operator approval updates the counterparty behavioral baseline profile for future cycles.",
    },
  },
  {
    id: 5,
    stageNum: "Stage 05",
    stageName: "Persistent SQLite Audit Trail",
    title: "SQLite WAL Triggers & GL Journaling",
    icon: Database,
    accentColor: "border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.20)]",
    badgeBg: "bg-violet-500/10",
    badgeBorder: "border-violet-500/25",
    badgeText: "text-violet-400",
    summary: "Operator action writes a persistent audit event into SQLite WAL. Database triggers immediately abort any UPDATE or DELETE operations on audit_logs.",
    activeDetails: {
      transactionId: "AUDIT-WAL-9942",
      vendor: "Ledger Entry #7719",
      amount: "GL Posted: DR 5200 / CR 1100",
      status: "Committed to SQLite (WAL Enabled)",
      metricLabel: "Audit Trail Integrity",
      metricValue: "Append-Only Trigger: ABORT ON UPDATE/DELETE",
      invariantNote: "All reconciliation mutations produce an auditable trail verifiable by internal compliance.",
    },
  },
];

export function ReconciliationPipelineVisual() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [isPrefersReducedMotion, setIsPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

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

  // VisibilityChange to pause when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Next step handler
  const handleNext = useCallback(() => {
    setCurrentStepIndex((prev) => (prev + 1) % PIPELINE_STEPS.length);
  }, []);

  // Prev step handler
  const handlePrev = useCallback(() => {
    setCurrentStepIndex((prev) => (prev - 1 + PIPELINE_STEPS.length) % PIPELINE_STEPS.length);
  }, []);

  // Reset handler
  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || !isIntersecting || isPrefersReducedMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPlaying, isIntersecting, isPrefersReducedMotion, handleNext]);

  const activeStep = PIPELINE_STEPS[currentStepIndex];
  const StepIcon = activeStep.icon;

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#0c1017]/90 backdrop-blur-md p-5 sm:p-7 shadow-xl relative overflow-hidden"
    >
      {/* Top Banner with Title & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>Synthetic Reconciliation Illustration</span>
            <span className="px-2 py-0.5 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] text-[10px] font-bold border border-[#00d2ff]/20">
              Synthetic Demo Data
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
            Two-Pass Financial Reconciliation Pipeline
          </h3>
        </div>

        {/* System Invariants */}
        <div className="flex items-center gap-2 font-mono-tech text-[11px]">
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Bijective 1:1 Invariant
          </span>
          <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20 font-medium">
            Integer-Cents Math
          </span>
        </div>
      </div>

      {/* Simulation Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-white/80 dark:bg-[#121826]/80 border border-slate-200/80 dark:border-white/8 mb-6 shadow-sm">
        {/* Play / Pause / Reset & Step buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4f7cff] hover:bg-[#3b66ff] text-white text-xs font-mono-tech font-semibold transition-all shadow-[0_0_12px_rgba(79,124,255,0.3)] cursor-pointer"
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Previous pipeline step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Next pipeline step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="Replay from Step 1"
            aria-label="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Step indicator pills */}
        <div className="flex items-center gap-1.5">
          {PIPELINE_STEPS.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                setCurrentStepIndex(idx);
                setIsPlaying(false);
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono-tech transition-all cursor-pointer ${
                idx === currentStepIndex
                  ? `${step.badgeBg} ${step.badgeText} border ${step.badgeBorder} font-bold shadow-xs`
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              0{step.id}
            </button>
          ))}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 text-[11px] font-mono-tech text-slate-500 dark:text-slate-400">
          <span
            className={`w-2 h-2 rounded-full ${
              isPlaying ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
            }`}
          />
          <span>{isPlaying ? "Simulating Pipeline Cycle" : "Simulation Paused"}</span>
        </div>
      </div>

      {/* Dynamic Simulated Live Payload Card (Active Stage Focus) */}
      <div
        className={`mb-6 p-4 sm:p-5 rounded-xl border transition-all duration-300 bg-white dark:bg-[#121826] ${activeStep.accentColor}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100 dark:border-white/6">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold uppercase tracking-wider ${activeStep.badgeBg} ${activeStep.badgeText} border ${activeStep.badgeBorder}`}
            >
              <StepIcon className="w-3 h-3" />
              <span>Active: {activeStep.stageNum} &bull; {activeStep.stageName}</span>
            </span>
            <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400">
              — {activeStep.title}
            </span>
          </div>
          <span className="font-mono-tech text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {activeStep.activeDetails.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono-tech text-xs">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0c1017] border border-slate-200/60 dark:border-white/6">
            <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider">
              Transaction Payload
            </span>
            <div className="font-semibold text-slate-900 dark:text-white truncate">
              {activeStep.activeDetails.transactionId}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {activeStep.activeDetails.vendor}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0c1017] border border-slate-200/60 dark:border-white/6">
            <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider">
              {activeStep.activeDetails.metricLabel}
            </span>
            <div className="font-semibold text-[#4f7cff] dark:text-[#67e8f9] truncate">
              {activeStep.activeDetails.metricValue}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {activeStep.activeDetails.amount}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0c1017] border border-slate-200/60 dark:border-white/6">
            <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider">
              Engineering Guarantee
            </span>
            <div className="text-[11px] text-slate-700 dark:text-slate-300 leading-tight">
              {activeStep.activeDetails.invariantNote}
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline 4-Stage Grid Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PIPELINE_STEPS.slice(0, 4).map((step, idx) => {
          const IconComponent = step.icon;
          const isActive = idx === currentStepIndex;

          return (
            <div
              key={step.id}
              onClick={() => {
                setCurrentStepIndex(idx);
                setIsPlaying(false);
              }}
              className={`flex flex-col rounded-xl p-4 transition-all duration-200 cursor-pointer border ${
                isActive
                  ? `bg-white dark:bg-[#151c2d] ${step.accentColor} scale-[1.01]`
                  : "bg-white/60 dark:bg-[#121826]/70 border-slate-200/90 dark:border-white/8 hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span
                  className={`text-[11px] font-mono-tech font-bold uppercase tracking-wider ${
                    isActive ? step.badgeText : "text-slate-400"
                  }`}
                >
                  {step.stageNum}
                </span>
                <IconComponent
                  className={`w-4 h-4 ${isActive ? step.badgeText : "text-slate-400"}`}
                />
              </div>

              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                {step.stageName}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {step.summary}
              </p>

              <div className="mt-auto pt-2.5 border-t border-slate-100 dark:border-white/6 flex items-center justify-between text-[10px] font-mono-tech text-slate-500 dark:text-slate-400">
                <span>Pass 0{step.id}</span>
                {isActive && (
                  <span className="flex items-center gap-1 text-emerald-500 font-bold">
                    <Sparkles className="w-3 h-3" />
                    Simulating
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Safety & Compliance Invariant Banner */}
      <div className="mt-5 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/8 bg-white/70 dark:bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
          <Database className="w-4 h-4 text-[#00d2ff] shrink-0" />
          <span>
            <strong className="text-slate-900 dark:text-white">Audit Invariant:</strong> SQLite triggers explicitly ABORT all UPDATE or DELETE queries targeting <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono-tech text-[11px]">audit_logs</code>.
          </span>
        </div>
        <span className="font-mono-tech text-[10px] text-slate-500 dark:text-slate-400 shrink-0">
          27 / 27 Pytest Invariants Passing
        </span>
      </div>

      {/* Accessible Illustrative Note */}
      <div className="mt-3 text-center text-[10px] font-mono-tech text-slate-500 dark:text-slate-400">
        Interface values are illustrative and do not represent production metrics.
      </div>
    </div>
  );
}
