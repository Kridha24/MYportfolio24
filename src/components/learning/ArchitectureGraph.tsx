"use client";

import React, { useState, useEffect } from "react";
import { ARCHITECTURE_SYSTEM_DATA } from "@/data/learning";
import {
  ArrowDown,
  Layout,
  Server,
  Database,
  Cloud,
  Zap,
  ChevronDown,
  ChevronUp,
  Sliders,
} from "lucide-react";

export function ArchitectureGraph() {
  const [viewMode, setViewMode] = useState<"simple" | "detailed">("simple");
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [expandedMobileLayer, setExpandedMobileLayer] = useState<string | null>("frontend");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const getLayerIcon = (layerId: string) => {
    switch (layerId) {
      case "experience":
        return <Layout className="w-4 h-4 text-pink-400" />;
      case "frontend":
        return <Layout className="w-4 h-4 text-blue-400" />;
      case "backend":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "data-ai":
        return <Database className="w-4 h-4 text-violet-400" />;
      case "infrastructure":
      default:
        return <Cloud className="w-4 h-4 text-orange-400" />;
    }
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return null;
    let badgeStyle = "bg-slate-100 dark:bg-white/5 text-slate-500 border-slate-200 dark:border-white/10";
    if (status === "Core") {
      badgeStyle = "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/25";
    } else if (status === "Hands-On") {
      badgeStyle = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/25";
    } else if (status.includes("Learning")) {
      badgeStyle = "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/25";
    } else if (status === "Exploring") {
      badgeStyle = "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/25";
    }
    return (
      <span className={`text-[10px] font-mono-tech px-1.5 py-0.5 rounded border ${badgeStyle}`}>
        {status}
      </span>
    );
  };

  return (
    <div
      className="p-6 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-white/8 bg-slate-50/60 dark:bg-[#0c101d]/90 backdrop-blur-md relative overflow-hidden shadow-sm"
      aria-label="Full Engineering Alignment Architecture Graph"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-600/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Header section with view mode toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-8 border-b border-slate-200/80 dark:border-white/8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#4f7cff] animate-pulse" />
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#4f7cff] dark:text-[#67e8f9] font-bold">
              END-TO-END SYSTEM INTEGRATION
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {ARCHITECTURE_SYSTEM_DATA.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] mt-2 leading-relaxed">
            {ARCHITECTURE_SYSTEM_DATA.subtitle}
          </p>
        </div>

        {/* Accessible View Mode Toggle Buttons */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 shrink-0 self-start md:self-auto shadow-2xs">
          <button
            onClick={() => setViewMode("simple")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-tech transition-all duration-200 flex items-center gap-1.5 ${
              viewMode === "simple"
                ? "bg-[#4f7cff] text-white font-bold shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
            aria-label="Switch to Simple Architecture View"
            aria-pressed={viewMode === "simple"}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Simple Architecture</span>
          </button>

          <button
            onClick={() => setViewMode("detailed")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-tech transition-all duration-200 flex items-center gap-1.5 ${
              viewMode === "detailed"
                ? "bg-[#8b5cf6] text-white font-bold shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
            aria-label="Switch to Detailed Architecture View"
            aria-pressed={viewMode === "detailed"}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Detailed Architecture</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. SIMPLE VIEW (Default for Recruiters: 4 Clean Layers)                    */}
      {/* ========================================================================= */}
      {viewMode === "simple" && (
        <div className="space-y-4 max-w-4xl mx-auto relative z-10 animate-fadeIn">
          {ARCHITECTURE_SYSTEM_DATA.simpleLayers.map((layer, index) => (
            <React.Fragment key={layer.name}>
              <div
                className={`p-5 sm:p-6 rounded-2xl border ${layer.colorClasses.border} ${layer.colorClasses.bg} backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono-tech px-2 py-0.5 rounded-md border font-bold text-slate-700 dark:text-slate-200 bg-white/60 dark:bg-white/5">
                      0{index + 1}
                    </span>
                    <h4 className={`text-base font-bold tracking-tight ${layer.colorClasses.text}`}>
                      {layer.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {layer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono-tech px-2 py-0.5 rounded-full border ${layer.colorClasses.pill}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {layer.description}
                </p>
              </div>

              {index < ARCHITECTURE_SYSTEM_DATA.simpleLayers.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono-tech text-slate-400 dark:text-slate-500">
                    <ArrowDown
                      className={`w-3.5 h-3.5 text-slate-400 ${
                        !isReducedMotion ? "animate-bounce" : ""
                      }`}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. DETAILED VIEW (Deep-Dive Across 5 Distinct Layers)                     */}
      {/* ========================================================================= */}
      {viewMode === "detailed" && (
        <div className="relative z-10 animate-fadeIn">
          {/* Desktop/Tablet Layout (>=768px): Top-down layered architecture */}
          <div className="hidden md:block space-y-5">
            {ARCHITECTURE_SYSTEM_DATA.detailedLayers.map((layer, index) => {
              const isDataAiLayer = layer.id === "data-ai";
              return (
                <React.Fragment key={layer.id}>
                  <div
                    className={`p-6 rounded-2xl border ${layer.colorScheme.border} ${layer.colorScheme.bg} backdrop-blur-sm transition-all shadow-sm`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-200/60 dark:border-white/6">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl border ${layer.colorScheme.badge}`}>
                          {getLayerIcon(layer.id)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400 font-bold">
                              Layer 0{layer.layerNumber}
                            </span>
                            <span className="text-slate-300 dark:text-white/20">•</span>
                            <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                              {layer.subtitle}
                            </span>
                          </div>
                          <h4 className={`text-lg font-bold tracking-tight ${layer.colorScheme.text}`}>
                            {layer.name}
                          </h4>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md text-right hidden lg:block">
                        {layer.detailedSummary}
                      </p>
                    </div>

                    {/* Layer Groups (Side-by-side split for Data & AI Layer) */}
                    <div
                      className={`grid gap-4 ${
                        isDataAiLayer ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 lg:grid-cols-2"
                      }`}
                    >
                      {layer.detailedGroups.map((group) => (
                        <div
                          key={group.groupTitle}
                          className="p-4 rounded-xl border border-slate-200/70 dark:border-white/6 bg-white/70 dark:bg-slate-900/60"
                        >
                          <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block mb-2.5">
                            {group.groupTitle}
                          </span>
                          <div className="space-y-2">
                            {group.nodes.map((node) => (
                              <div
                                key={node.name}
                                className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/40 dark:border-white/4 text-xs"
                              >
                                <span className="font-medium text-slate-800 dark:text-slate-200">
                                  {node.name}
                                </span>
                                {getStatusBadge(node.status)}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {index < ARCHITECTURE_SYSTEM_DATA.detailedLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 dark:text-slate-500">
                        <ArrowDown
                          className={`w-3.5 h-3.5 text-slate-400 ${
                            !isReducedMotion ? "animate-bounce" : ""
                          }`}
                        />
                        <span>
                          {index === 0
                            ? "HTTPS / REST / WebSocket Transport"
                            : index === 1
                            ? "Controller Handlers & Auth Verification"
                            : index === 2
                            ? "ACID Transaction & Vector Embeddings"
                            : "Docker Packaging & Infrastructure Runtime"}
                        </span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Layout (<768px): Vertical sequence with expandable cards */}
          <div className="block md:hidden space-y-3">
            {ARCHITECTURE_SYSTEM_DATA.detailedLayers.map((layer) => {
              const isExpanded = expandedMobileLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  className={`rounded-2xl border ${layer.colorScheme.border} ${layer.colorScheme.bg} overflow-hidden`}
                >
                  <button
                    onClick={() => setExpandedMobileLayer(isExpanded ? null : layer.id)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none"
                    aria-expanded={isExpanded}
                    aria-label={`Toggle Layer ${layer.layerNumber}: ${layer.name}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-lg border ${layer.colorScheme.badge}`}>
                        {getLayerIcon(layer.id)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-tech uppercase text-slate-400 font-bold block">
                          Layer 0{layer.layerNumber}
                        </span>
                        <h4 className={`text-sm font-bold ${layer.colorScheme.text}`}>
                          {layer.name}
                        </h4>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 space-y-3 border-t border-slate-200/50 dark:border-white/6 text-xs animate-fadeIn">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {layer.detailedSummary}
                      </p>
                      <div className="space-y-3 pt-2">
                        {layer.detailedGroups.map((group) => (
                          <div
                            key={group.groupTitle}
                            className="p-3 rounded-xl border border-slate-200/70 dark:border-white/6 bg-white/80 dark:bg-slate-900/80"
                          >
                            <span className="text-[11px] font-mono-tech font-bold uppercase text-slate-700 dark:text-slate-200 block mb-2">
                              {group.groupTitle}
                            </span>
                            <div className="space-y-1.5">
                              {group.nodes.map((node) => (
                                <div
                                  key={node.name}
                                  className="flex items-center justify-between gap-1.5 p-1.5 rounded bg-slate-50 dark:bg-white/[0.02]"
                                >
                                  <span className="text-slate-800 dark:text-slate-200 truncate">
                                    {node.name}
                                  </span>
                                  {getStatusBadge(node.status)}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
