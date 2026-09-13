"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  CLOUD_DEVOPS_INTRO,
  PROFICIENCY_LEGEND,
  CONTAINERS_ORCHESTRATION_DATA,
  AWS_SERVICES_DATA,
  DEVOPS_TOOLS_MATRIX,
  CENTRAL_PIPELINE_STEPS,
  TESTING_QUALITY_DATA,
  SECURITY_PRACTICES_DATA,
  OBSERVABILITY_DATA,
  CLOUD_ROADMAP_DATA,
} from "@/data/cloudDevops";
import {
  Cloud,
  Boxes,
  Play,
  Pause,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Activity,
  GitBranch,
  Search,
  Workflow,
  Network,
  Info,
  Clock,
} from "lucide-react";

export function CloudDevOpsSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAwsCategory, setActiveAwsCategory] = useState<string>("Compute");
  const [toolSearchQuery, setToolSearchQuery] = useState("");
  const [selectedToolCategory, setSelectedToolCategory] = useState<string>("All");
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-advance pipeline step when playing
  useEffect(() => {
    if (!isPlaying) return;

    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPlaying(false);
      return;
    }

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % CENTRAL_PIPELINE_STEPS.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Pause simulation when scrolled out of viewport or tab hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
    };
  }, []);

  const activePipelineStep = CENTRAL_PIPELINE_STEPS[activeStepIndex];

  // Filter tools matrix
  const filteredTools = DEVOPS_TOOLS_MATRIX.flatMap((cat) => {
    if (selectedToolCategory !== "All" && cat.category !== selectedToolCategory) {
      return [];
    }
    return cat.tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(toolSearchQuery.toLowerCase()) ||
          (t.note && t.note.toLowerCase().includes(toolSearchQuery.toLowerCase()))
      )
      .map((t) => ({ ...t, categoryName: cat.category }));
  });

  const getStatusBadgeVariant = (level: string) => {
    switch (level) {
      case "Core":
        return "accent" as const;
      case "Hands-On":
        return "success" as const;
      case "Foundational":
        return "warning" as const;
      case "Currently Learning":
      default:
        return "default" as const;
    }
  };

  return (
    <section
      id="cloud-devops"
      ref={sectionRef}
      className="py-24 border-t border-slate-200/80 dark:border-white/8 relative overflow-hidden"
      aria-label="Cloud, DevOps and Engineering Toolkit"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 -right-36 w-96 h-96 rounded-full bg-cyan-600/5 dark:bg-cyan-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -left-36 w-96 h-96 rounded-full bg-blue-600/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* =================================================================== */}
        {/* 1. SECTION HEADER & PROFICIENCY LEGEND                             */}
        {/* =================================================================== */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="h-px w-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
              aria-hidden="true"
            />
            <span className="text-xs font-mono-tech tracking-wider uppercase text-cyan-500 dark:text-cyan-400 font-semibold">
              {CLOUD_DEVOPS_INTRO.eyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#f5f7fa] leading-[1.15]">
                Cloud, DevOps &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-[#4f7cff] to-[#8b5cf6] bg-clip-text text-transparent">
                  Engineering Toolkit
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 dark:text-[#cbd5e1] leading-relaxed max-w-3xl">
                {CLOUD_DEVOPS_INTRO.introduction}
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                {CLOUD_DEVOPS_INTRO.supportingText}
              </p>
            </div>
          </div>

          {/* Interactive Transparent Proficiency Legend */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-white/8 bg-slate-50/70 dark:bg-[#0d121e]/80 backdrop-blur-sm shadow-xs">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interview-Defensible Proficiency Framework (No Arbitrary % Bars)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PROFICIENCY_LEGEND.map((item) => (
                <div
                  key={item.level}
                  className="p-3 rounded-xl border border-slate-200/70 dark:border-white/6 bg-white/80 dark:bg-[#121826]/90 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`text-xs font-mono-tech px-2 py-0.5 rounded font-bold border ${item.accent}`}>
                      {item.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-snug">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. CENTRAL ANIMATED DEPLOYMENT PIPELINE                            */}
        {/* =================================================================== */}
        <div className="mb-20 rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-cyan-500/[0.04] via-slate-50/50 to-transparent dark:from-cyan-500/[0.03] dark:via-[#0c121e] dark:to-[#090e18] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80 dark:border-white/8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                  Engineering Workflow Illustration
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                Continuous Delivery &amp; Deployment Topology
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                Stage {activeStepIndex + 1} of {CENTRAL_PIPELINE_STEPS.length}
              </span>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 text-xs font-mono-tech font-semibold transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause pipeline animation" : "Play pipeline animation"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>
            </div>
          </div>

          {/* 7 Interactive Nodes Progress Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
            {CENTRAL_PIPELINE_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-cyan-500 bg-cyan-500/15 shadow-[0_0_18px_rgba(34,211,238,0.22)] scale-[1.02]"
                      : "border-slate-200/80 dark:border-white/8 bg-white/70 dark:bg-[#121826]/70 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded font-bold bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-[#a8b0c0]">
                      {step.step}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-[#f5f7fa] tracking-tight truncate">
                    {step.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-[#a8b0c0] truncate">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-cyan-500/30 bg-white/80 dark:bg-[#0e1422]/90 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tech text-cyan-500 dark:text-cyan-400 font-bold uppercase">
                  ACTIVE PHASE // STEP {activePipelineStep.step}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span className="text-xs font-bold text-slate-900 dark:text-[#f5f7fa]">
                  {activePipelineStep.name}
                </span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-[#e2e8f0]">
                {activePipelineStep.description}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0]">
                {activePipelineStep.details}
              </p>
            </div>

            <div className="text-[11px] font-mono-tech px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-[#a8b0c0] shrink-0">
              * Illustrative delivery flow
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. CONTAINERS & ORCHESTRATION                                      */}
        {/* =================================================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Boxes className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                  CONTAINERIZATION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                Containers &amp; Orchestration
              </h3>
            </div>
            <span className="text-xs font-mono-tech text-slate-400 dark:text-[#6b778d]">
              Docker • Compose • Kubernetes
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CONTAINERS_ORCHESTRATION_DATA.map((item) => {
              const isK8s = item.name === "Kubernetes";
              return (
                <div
                  key={item.name}
                  className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm ${
                    isK8s
                      ? "border-violet-500/30 bg-violet-500/[0.03] dark:bg-[#121626]/90 hover:border-violet-500/50 hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]"
                      : "border-cyan-500/30 bg-cyan-500/[0.03] dark:bg-[#0e1624]/90 hover:border-cyan-500/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`p-2.5 rounded-xl border ${
                          isK8s
                            ? "bg-violet-500/10 border-violet-500/25 text-violet-400"
                            : "bg-cyan-500/10 border-cyan-500/25 text-cyan-400"
                        }`}
                      >
                        {isK8s ? <Network className="w-5 h-5" /> : <Boxes className="w-5 h-5" />}
                      </div>
                      <Badge variant={getStatusBadgeVariant(item.status)} size="sm">
                        {item.status}
                      </Badge>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-[#f5f7fa] mb-2 tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {item.connectedProjects && (
                      <div className="mb-4 p-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono-tech text-cyan-700 dark:text-cyan-300">
                        <strong className="block mb-1 font-bold">Verified in Projects:</strong>
                        <span>{item.connectedProjects.join(" • ")}</span>
                      </div>
                    )}

                    <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-white/8">
                      <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 dark:text-[#6b778d] block mb-1">
                        {isK8s ? "Concepts Being Learned:" : "Hands-On Experience:"}
                      </span>
                      {(item.concepts || item.supportingExperience).slice(0, 6).map((exp) => (
                        <div key={exp} className="flex items-start gap-2 text-xs text-slate-600 dark:text-[#a8b0c0]">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isK8s ? "text-violet-400" : "text-cyan-400"
                            }`}
                          />
                          <span>{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 4. AMAZON WEB SERVICES (AWS) LEARNING CENTER                       */}
        {/* =================================================================== */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.04] via-slate-50/50 to-transparent dark:from-amber-500/[0.03] dark:via-[#131620] dark:to-[#0f1118] relative overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80 dark:border-white/8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <Cloud className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  CLOUD INFRASTRUCTURE // FOUNDATIONAL KNOWLEDGE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                  Amazon Web Services (AWS)
                </h3>
                <Badge variant="warning" size="sm">
                  Currently Learning
                </Badge>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a8b0c0] max-w-md">
              Building foundational knowledge of deploying, networking, and operating modern applications on AWS.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {AWS_SERVICES_DATA.map((group) => (
              <button
                key={group.category}
                type="button"
                onClick={() => setActiveAwsCategory(group.category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                  activeAwsCategory === group.category
                    ? "bg-amber-500 text-slate-950 shadow-[0_0_16px_rgba(245,158,11,0.35)]"
                    : "border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-[#a8b0c0] hover:border-amber-500/40"
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Active Services Sub-Grid */}
          {AWS_SERVICES_DATA.filter((g) => g.category === activeAwsCategory).map((group) => (
            <div key={group.category} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.services.map((svc) => (
                <div
                  key={svc.name}
                  className="p-5 rounded-2xl border border-amber-500/20 bg-white/80 dark:bg-[#121624]/90 backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa]">
                        {svc.name}
                      </h4>
                      <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded border border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold truncate">
                        {svc.statusLabel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* =================================================================== */}
        {/* 5. SEARCHABLE / FILTERABLE ENGINEERING TOOLS MATRIX                */}
        {/* =================================================================== */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Terminal className="w-4 h-4 text-[#4f7cff]" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#4f7cff] font-semibold">
                  DEVELOPER ECOSYSTEM
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                Development &amp; API Tools Matrix
              </h3>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={toolSearchQuery}
                onChange={(e) => setToolSearchQuery(e.target.value)}
                placeholder="Search tools (e.g. Git, Prisma)..."
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs font-mono-tech border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#121826]/90 text-slate-900 dark:text-[#f5f7fa] placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                aria-label="Search developer tools"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["All", "Version Control", "API Development", "Database Tools", "Development Environment", "Deployment"].map(
              (catName) => (
                <button
                  key={catName}
                  type="button"
                  onClick={() => setSelectedToolCategory(catName)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono-tech font-semibold transition-all cursor-pointer ${
                    selectedToolCategory === catName
                      ? "bg-[#4f7cff] text-white shadow-xs"
                      : "border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-[#a8b0c0] hover:border-blue-500/40"
                  }`}
                >
                  {catName}
                </button>
              )
            )}
          </div>

          {/* Filtered Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {filteredTools.map((tool) => (
              <div
                key={`${tool.categoryName}-${tool.name}`}
                className="p-3.5 rounded-xl border border-slate-200/80 dark:border-white/8 bg-white/70 dark:bg-[#121826]/80 flex flex-col justify-between hover:border-blue-500/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa] truncate">
                      {tool.name}
                    </h4>
                    <span
                      className={`text-[9px] font-mono-tech px-1.5 py-0.5 rounded font-bold uppercase shrink-0 ${
                        tool.level === "Core"
                          ? "bg-blue-500/10 text-blue-600 dark:text-[#4f7cff] border border-blue-500/20"
                          : tool.level === "Hands-On"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {tool.level}
                    </span>
                  </div>
                  {tool.note && (
                    <p className="text-[11px] text-slate-500 dark:text-[#a8b0c0] leading-snug">
                      {tool.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 6. TESTING, SECURITY & OBSERVABILITY (4-CARD GRID)                  */}
        {/* =================================================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                  RELIABILITY &amp; INTEGRITY
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                Testing, Security &amp; Observability
              </h3>
            </div>
            <span className="text-xs font-mono-tech text-slate-400 dark:text-[#6b778d]">
              Automated Gates • Defensive Design • Metrics
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card A: Testing & Code Quality */}
            <div className="p-6 sm:p-7 rounded-3xl border border-pink-500/25 bg-pink-500/[0.02] dark:bg-[#14121e]/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/25 text-pink-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <Badge variant="success" size="sm">
                    Hands-On
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-[#f5f7fa] mb-2 tracking-tight">
                  Testing &amp; Code Quality
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed mb-5">
                  Using automated validation to catch regressions, verify expected behavior, and keep application contracts reliable.
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-200/80 dark:border-white/8">
                  {TESTING_QUALITY_DATA.map((t) => (
                    <div key={t.tool} className="text-xs space-y-0.5">
                      <div className="font-bold text-slate-800 dark:text-[#e2e8f0] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                        <span>{t.tool}</span>
                      </div>
                      <div className="text-slate-500 dark:text-[#a8b0c0] pl-3">
                        {t.verifiedContext}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card B: Continuous Integration & Delivery (CI/CD) */}
            <div className="p-6 sm:p-7 rounded-3xl border border-violet-500/25 bg-violet-500/[0.02] dark:bg-[#131224]/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-400">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <Badge variant="default" size="sm">
                    Currently Learning
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-[#f5f7fa] mb-2 tracking-tight">
                  Continuous Integration &amp; Delivery (CI/CD)
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed mb-5">
                  Automating code-quality checks, tests, builds, and deployment validation before changes are released.
                </p>

                {/* Conceptual Pipeline Flow */}
                <div className="space-y-2 pt-3 border-t border-slate-200/80 dark:border-white/8">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 dark:text-[#6b778d] block mb-2">
                    Conceptual Delivery Pipeline:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Push / PR",
                      "Dependencies",
                      "Lint + Types",
                      "Unit Tests",
                      "Prod Build",
                      "Deploy Target",
                    ].map((phase, idx) => (
                      <div
                        key={phase}
                        className="p-2 rounded-lg border border-violet-500/20 bg-violet-500/5 text-center text-xs font-mono-tech"
                      >
                        <span className="text-[10px] text-violet-400 block font-bold">0{idx + 1}</span>
                        <span className="text-slate-800 dark:text-[#cbd5e1]">{phase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card C: Security-Conscious Engineering */}
            <div className="p-6 sm:p-7 rounded-3xl border border-emerald-500/25 bg-emerald-500/[0.02] dark:bg-[#0f171b]/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <Badge variant="success" size="sm">
                    Applied In Projects
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-[#f5f7fa] mb-2 tracking-tight">
                  Security-Conscious Engineering
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed mb-4">
                  Architectural practices focused on authorization, sanitization, least privilege, and defensive API design.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-200/80 dark:border-white/8">
                  {SECURITY_PRACTICES_DATA.slice(0, 8).map((sec) => (
                    <div
                      key={sec.practice}
                      className="p-2 rounded-lg border border-emerald-500/15 bg-emerald-500/[0.03] text-xs space-y-0.5"
                    >
                      <div className="font-bold text-slate-900 dark:text-[#f5f7fa] flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{sec.practice}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-[#a8b0c0] truncate">
                        {sec.implementationContext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card D: Observability & Reliability */}
            <div className="p-6 sm:p-7 rounded-3xl border border-cyan-500/25 bg-cyan-500/[0.02] dark:bg-[#0e1620]/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <Badge variant="warning" size="sm">
                    Learning &amp; Applying
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-[#f5f7fa] mb-2 tracking-tight">
                  Observability &amp; Reliability
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed mb-4">
                  Exploring how applications can expose useful health, error, audit, and performance telemetry after deployment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-200/80 dark:border-white/8">
                  {OBSERVABILITY_DATA.map((obs) => (
                    <div
                      key={obs.topic}
                      className="p-2 rounded-lg border border-cyan-500/15 bg-cyan-500/[0.03] text-xs space-y-0.5"
                    >
                      <div className="font-bold text-slate-900 dark:text-[#f5f7fa] flex items-center justify-between gap-1">
                        <span className="truncate">{obs.topic}</span>
                        <span className="text-[9px] font-mono-tech text-cyan-500 shrink-0">
                          {obs.status === "Implemented" ? "Active" : "Lab"}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-[#a8b0c0] line-clamp-2">
                        {obs.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 7. CLOUD ENGINEERING ROADMAP                                       */}
        {/* =================================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#0c111e]/90 backdrop-blur-sm shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80 dark:border-white/8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                  LEARNING PROGRESSION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                Cloud Engineering Roadmap
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a8b0c0]">
              Ordered progression from local containerization to managed cloud orchestration.
            </p>
          </div>

          <div className="space-y-3">
            {CLOUD_ROADMAP_DATA.map((milestone) => (
              <div
                key={milestone.step}
                className="p-4 rounded-2xl border border-slate-200/80 dark:border-white/8 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:border-blue-500/30"
              >
                <div className="flex items-start sm:items-center gap-3 min-w-0">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono-tech font-bold shrink-0 ${
                      milestone.status === "Completed"
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                        : milestone.status === "Next Milestone"
                        ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30"
                        : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-[#a8b0c0]"
                    }`}
                  >
                    0{milestone.step}
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa] truncate">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-[#a8b0c0] line-clamp-1">
                      {milestone.evidenceNote}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pl-10 sm:pl-0">
                  <span
                    className={`text-[11px] font-mono-tech px-2.5 py-1 rounded-full font-bold uppercase ${
                      milestone.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25"
                        : milestone.status === "Next Milestone"
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25"
                        : milestone.status === "Learning"
                        ? "bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25"
                        : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-[#a8b0c0] border border-slate-200 dark:border-white/10"
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
