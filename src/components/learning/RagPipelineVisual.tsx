"use client";

import React, { useState, useEffect, useRef } from "react";
import { RAG_WORKFLOW_STAGES } from "@/data/learning";
import { RagStage } from "@/types/portfolio";
import {
  FileText,
  Filter,
  Layers,
  Cpu,
  Database,
  HelpCircle,
  Binary,
  Search,
  Sparkles,
  CheckCircle2,
  Play,
  Pause,
  Info,
  ArrowDown,
} from "lucide-react";

export function RagPipelineVisual() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [inspectingStage, setInspectingStage] = useState<RagStage>(RAG_WORKFLOW_STAGES[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // IntersectionObserver to pause animation when scrolled outside viewport
  useEffect(() => {
    if (isReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsPlaying(false);
          } else if (!isReducedMotion) {
            setIsPlaying(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isReducedMotion]);

  // Animate one data pulse through the 11 pipeline stages
  useEffect(() => {
    if (!isPlaying || isReducedMotion) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % RAG_WORKFLOW_STAGES.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [isPlaying, isReducedMotion]);

  // Keep inspectingStage updated to the active pulse unless user explicitly hovered another
  const currentActiveStage = RAG_WORKFLOW_STAGES[activeStepIndex];

  const getStageIcon = (id: string, active: boolean) => {
    const className = `w-4 h-4 ${active ? "text-violet-400" : "text-slate-400 dark:text-slate-500"}`;
    switch (id) {
      case "sources":
        return <FileText className={className} />;
      case "ingestion":
        return <Filter className={className} />;
      case "chunking":
        return <Layers className={className} />;
      case "embedding-doc":
        return <Cpu className={className} />;
      case "vector-store":
        return <Database className={className} />;
      case "user-query":
        return <HelpCircle className={className} />;
      case "query-embedding":
        return <Binary className={className} />;
      case "retriever":
        return <Search className={className} />;
      case "relevant-context":
        return <Layers className={className} />;
      case "prompt-llm":
        return <Sparkles className={className} />;
      case "grounded-answer":
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  const activeStage = inspectingStage || currentActiveStage;

  return (
    <div
      ref={containerRef}
      className="p-6 sm:p-8 rounded-3xl border border-violet-500/25 bg-gradient-to-b from-slate-50/95 via-white/95 to-violet-50/50 dark:from-[#15102a]/60 dark:via-[#0e1220]/70 dark:to-[#0b0f19]/80 backdrop-blur-md relative overflow-hidden shadow-sm"
      aria-label="Interactive RAG Workflow Illustration"
    >
      {/* Background ambient gradient glow */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-600/10 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-pink-600/10 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar with controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200/80 dark:border-white/8 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300 text-[11px] font-mono-tech uppercase tracking-wider font-semibold">
              RAG Workflow Illustration
            </span>
            <span className="text-[11px] font-mono-tech text-slate-500 dark:text-slate-400">
              Conceptual Architecture
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Context-Aware Information Retrieval & Grounding
          </h3>
        </div>

        {/* Pulse controls */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          {!isReducedMotion ? (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-xs font-mono-tech text-slate-700 dark:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label={isPlaying ? "Pause RAG animation" : "Play RAG animation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-violet-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? "Pause Pulse" : "Resume Pulse"}</span>
            </button>
          ) : (
            <span className="text-xs font-mono-tech px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400">
              Static Mode (Reduced Motion)
            </span>
          )}

          <div className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 hidden md:inline-flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hover or focus stages to inspect details</span>
          </div>
        </div>
      </div>

      {/* Main interactive pipeline flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        {/* Left/Main Column: Pipeline Stages Sequence (8 cols on desktop) */}
        <div className="lg:col-span-8 space-y-2">
          {/* Phase 1: Ingestion Pipeline */}
          <div className="p-3.5 rounded-2xl border border-slate-200/70 dark:border-white/6 bg-white/40 dark:bg-white/[0.02]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-pink-500 dark:text-pink-400 font-bold">
                Phase A · Ingestion & Chunking
              </span>
              <span className="text-[10px] font-mono-tech text-slate-500">Offline Preparation</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {RAG_WORKFLOW_STAGES.slice(0, 4).map((stage, idx) => {
                const isActive = !isReducedMotion && activeStepIndex === idx;
                const isSelected = activeStage.id === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setInspectingStage(stage)}
                    onMouseEnter={() => setInspectingStage(stage)}
                    onFocus={() => setInspectingStage(stage)}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                      isSelected
                        ? "border-violet-500/60 bg-violet-500/15 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                        : isActive
                        ? "border-cyan-400/50 bg-cyan-500/10 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                        : "border-slate-200/80 dark:border-white/6 bg-white/60 dark:bg-slate-900/50 hover:border-violet-500/30"
                    }`}
                    aria-label={`Stage ${stage.stepNumber}: ${stage.title}`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-mono-tech text-slate-400 font-semibold">
                        0{stage.stepNumber}
                      </span>
                      {getStageIcon(stage.id, isSelected || isActive)}
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-violet-400 transition-colors line-clamp-1">
                      {stage.title}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {stage.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central connector arrow */}
          <div className="flex justify-center py-1">
            <div className="flex items-center gap-1 text-[11px] font-mono-tech text-slate-400 dark:text-slate-500">
              <ArrowDown className="w-3.5 h-3.5 text-violet-400 animate-bounce" />
              <span>Embeddings Persisted & Query Triggered</span>
            </div>
          </div>

          {/* Phase 2: Vector Storage & User Query Retrieval */}
          <div className="p-3.5 rounded-2xl border border-slate-200/70 dark:border-white/6 bg-white/40 dark:bg-white/[0.02]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-cyan-500 dark:text-cyan-400 font-bold">
                Phase B · Vector Storage & Similarity Retrieval
              </span>
              <span className="text-[10px] font-mono-tech text-slate-500">Query Runtime</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {RAG_WORKFLOW_STAGES.slice(4, 8).map((stage, idx) => {
                const actualIndex = idx + 4;
                const isActive = !isReducedMotion && activeStepIndex === actualIndex;
                const isSelected = activeStage.id === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setInspectingStage(stage)}
                    onMouseEnter={() => setInspectingStage(stage)}
                    onFocus={() => setInspectingStage(stage)}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                      isSelected
                        ? "border-cyan-500/60 bg-cyan-500/15 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        : isActive
                        ? "border-violet-400/50 bg-violet-500/10 shadow-[0_0_12px_rgba(139,92,246,0.2)]"
                        : "border-slate-200/80 dark:border-white/6 bg-white/60 dark:bg-slate-900/50 hover:border-cyan-500/30"
                    }`}
                    aria-label={`Stage ${stage.stepNumber}: ${stage.title}`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-mono-tech text-slate-400 font-semibold">
                        {stage.stepNumber < 10 ? `0${stage.stepNumber}` : stage.stepNumber}
                      </span>
                      {getStageIcon(stage.id, isSelected || isActive)}
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-1">
                      {stage.title}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {stage.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central connector arrow */}
          <div className="flex justify-center py-1">
            <div className="flex items-center gap-1 text-[11px] font-mono-tech text-slate-400 dark:text-slate-500">
              <ArrowDown className="w-3.5 h-3.5 text-pink-400 animate-bounce" />
              <span>Prompt Augmented with Retrieved Evidence</span>
            </div>
          </div>

          {/* Phase 3: Grounded Context & LLM Response */}
          <div className="p-3.5 rounded-2xl border border-slate-200/70 dark:border-white/6 bg-white/40 dark:bg-white/[0.02]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-violet-500 dark:text-violet-400 font-bold">
                Phase C · Grounded Prompting & Inference
              </span>
              <span className="text-[10px] font-mono-tech text-slate-500">Verified Output</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {RAG_WORKFLOW_STAGES.slice(8, 11).map((stage, idx) => {
                const actualIndex = idx + 8;
                const isActive = !isReducedMotion && activeStepIndex === actualIndex;
                const isSelected = activeStage.id === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setInspectingStage(stage)}
                    onMouseEnter={() => setInspectingStage(stage)}
                    onFocus={() => setInspectingStage(stage)}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                      isSelected
                        ? "border-pink-500/60 bg-pink-500/15 shadow-[0_0_15px_rgba(236,72,153,0.2)]"
                        : isActive
                        ? "border-pink-400/50 bg-pink-500/10 shadow-[0_0_12px_rgba(236,72,153,0.2)]"
                        : "border-slate-200/80 dark:border-white/6 bg-white/60 dark:bg-slate-900/50 hover:border-pink-500/30"
                    }`}
                    aria-label={`Stage ${stage.stepNumber}: ${stage.title}`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-mono-tech text-slate-400 font-semibold">
                        {stage.stepNumber}
                      </span>
                      {getStageIcon(stage.id, isSelected || isActive)}
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-pink-400 transition-colors line-clamp-1">
                      {stage.title}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {stage.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Stage Inspection Inspector Card (4 cols on desktop) */}
        <div className="lg:col-span-4 p-5 rounded-2xl border border-violet-500/30 bg-white/80 dark:bg-[#121625]/90 backdrop-blur-md space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-mono-tech uppercase tracking-wider text-violet-600 dark:text-violet-400 font-bold">
                Stage Inspector
              </span>
            </div>
            <span className="text-xs font-mono-tech text-slate-400">
              Stage {activeStage.stepNumber} of 11
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
              {activeStage.phase}
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              {activeStage.title}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              {activeStage.tooltip}
            </p>
          </div>

          {/* Technical execution details */}
          <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-white/6">
            <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
              Architectural Mechanics:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {activeStage.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-violet-400 shrink-0 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification / Guardrail Callout */}
          <div className="p-3 rounded-xl border border-amber-500/20 bg-amber-500/5 text-[11px] font-mono-tech text-slate-700 dark:text-slate-300 leading-relaxed">
            <span className="text-amber-500 font-bold">Engineering Boundary: </span>
            {activeStage.id === "grounded-answer"
              ? "RAG reduces hallucinations by grounding responses in retrieved passages, but does not completely eliminate model errors. Refusal instructions handle out-of-scope queries."
              : "Embeddings and vector distances indicate similarity, not verified truth. Upstream cleaning and metadata filtering preserve factual boundary isolation."}
          </div>
        </div>
      </div>
    </div>
  );
}
