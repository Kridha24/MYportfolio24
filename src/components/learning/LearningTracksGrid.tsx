"use client";

import React, { useState } from "react";
import { LEARNING_TRACKS, LANGCHAIN_LEARNING_DATA } from "@/data/learning";
import {
  ChevronDown,
  ChevronUp,
  Layers,
  Server,
  Code2,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export function LearningTracksGrid() {
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>("rag-langchain");
  const [activeRagTab, setActiveRagTab] = useState<"rag" | "langchain">("rag");

  const getTrackIcon = (id: string) => {
    switch (id) {
      case "system-design":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "backend-engineering":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "dsa":
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case "rag-langchain":
      default:
        return <Cpu className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <div className="space-y-6" aria-label="Structured Learning Tracks">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {LEARNING_TRACKS.map((track) => {
          const isExpanded = expandedTrackId === track.id;
          const isRagTrack = track.id === "rag-langchain";

          return (
            <div
              key={track.id}
              className={`rounded-3xl border ${track.accent.border} bg-white/70 dark:bg-[#121625]/90 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm ${track.accent.glow} ${
                isExpanded ? "md:col-span-2 ring-1 ring-violet-500/30" : ""
              }`}
            >
              <div>
                {/* Track Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-200/70 dark:border-white/6">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/8 shrink-0">
                      {getTrackIcon(track.id)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-mono-tech px-2.5 py-0.5 rounded-full border font-semibold ${track.accent.badge}`}>
                          {track.status}
                        </span>
                        {track.subtitle && (
                          <span className="text-xs font-mono-tech text-slate-400 dark:text-slate-500 hidden sm:inline">
                            {track.subtitle}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {track.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedTrackId(isExpanded ? null : track.id)}
                    className="p-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 shrink-0"
                    aria-label={`Toggle details for ${track.title}`}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed mb-5">
                  {track.description}
                </p>

                {/* Active Focus Badges */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-2">
                    Current Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {track.currentFocus.map((focus) => (
                      <span
                        key={focus}
                        className="text-xs font-mono-tech px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/6"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ============================================================= */}
                {/* EXPANDED VIEW FOR TRACK DETAILS                               */}
                {/* ============================================================= */}
                {isExpanded && (
                  <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/8 space-y-6 animate-fadeIn">
                    {/* Special Tabs if this is RAG & LangChain */}
                    {isRagTrack ? (
                      <div>
                        <div className="flex items-center gap-2 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-black/20 w-fit mb-6">
                          <button
                            onClick={() => setActiveRagTab("rag")}
                            className={`px-4 py-1.5 rounded-xl text-xs font-mono-tech font-bold transition-all ${
                              activeRagTab === "rag"
                                ? "bg-violet-600 text-white shadow-sm"
                                : "text-slate-600 dark:text-slate-400 hover:text-white"
                            }`}
                          >
                            Retrieval-Augmented Generation (RAG)
                          </button>
                          <button
                            onClick={() => setActiveRagTab("langchain")}
                            className={`px-4 py-1.5 rounded-xl text-xs font-mono-tech font-bold transition-all ${
                              activeRagTab === "langchain"
                                ? "bg-violet-600 text-white shadow-sm"
                                : "text-slate-600 dark:text-slate-400 hover:text-white"
                            }`}
                          >
                            LangChain Integration
                          </button>
                        </div>

                        {activeRagTab === "rag" ? (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              {track.topics.map((topic) => (
                                <div
                                  key={topic.title}
                                  className="p-4 rounded-2xl border border-slate-200/70 dark:border-white/6 bg-white/70 dark:bg-white/[0.02] space-y-2.5"
                                >
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                    {topic.title}
                                  </h4>
                                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {topic.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1 pt-1">
                                    {topic.concepts.map((concept) => (
                                      <span
                                        key={concept}
                                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20"
                                      >
                                        {concept}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Caution callout about RAG accuracy & hallucinations */}
                            <div className="p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                              <div className="leading-relaxed">
                                <span className="font-bold text-amber-500">Hallucination Mitigation: </span>
                                RAG reduces hallucinations by grounding responses in retrieved passages, but does not completely eliminate model errors. Engineering solutions require relevance thresholds, citation verification, and explicit refusals when context is insufficient.
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* LangChain topics view */
                          <div className="space-y-6">
                            <div className="p-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {LANGCHAIN_LEARNING_DATA.description}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {LANGCHAIN_LEARNING_DATA.learningAreas.map((area) => (
                                <div
                                  key={area.title}
                                  className="p-4 rounded-2xl border border-slate-200/70 dark:border-white/6 bg-white/70 dark:bg-white/[0.02] space-y-2.5"
                                >
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                    {area.title}
                                  </h4>
                                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {area.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1 pt-1">
                                    {area.concepts.map((concept) => (
                                      <span
                                        key={concept}
                                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20"
                                      >
                                        {concept}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Future target note and guardrail warning */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                <span className="font-bold text-cyan-400">Future Horizon: </span>
                                {LANGCHAIN_LEARNING_DATA.futureTargetNote}
                              </div>
                              <div className="p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                <span className="font-bold text-amber-500">Production Guardrail: </span>
                                {LANGCHAIN_LEARNING_DATA.guardrailWarning}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Standard topic breakdown for System Design, Backend, or DSA */
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {track.topics.map((topic) => (
                          <div
                            key={topic.title}
                            className="p-4 rounded-2xl border border-slate-200/70 dark:border-white/6 bg-white/70 dark:bg-white/[0.02] space-y-2.5"
                          >
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                              {topic.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {topic.description}
                            </p>
                            <div className="flex flex-wrap gap-1 pt-1">
                              {topic.concepts.map((concept) => (
                                <span
                                  key={concept}
                                  className={`text-[10px] font-mono-tech px-2 py-0.5 rounded border ${track.accent.badge}`}
                                >
                                  {concept}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
