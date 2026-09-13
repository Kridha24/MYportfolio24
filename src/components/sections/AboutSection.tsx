import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PROFILE_DATA } from "@/data/profile";
import {
  Code2,
  Layers,
  Eye,
  Server,
  Trophy,
  Sparkles,
  GraduationCap,
  Briefcase,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  Compass,
  Terminal,
  ShieldCheck,
  Activity,
  Workflow,
  Search,
  FileCheck2,
  Quote,
} from "lucide-react";

export function AboutSection() {
  const {
    aboutEyebrow,
    aboutHeading,
    aboutStatement,
    aboutNarrative,
    profileHighlights,
    engineeringPhilosophy,
    competencies,
    currentFocus,
    projectJourney,
    leadershipBeyondCode,
    personalTraits,
    aboutCta,
    location,
    availability,
  } = PROFILE_DATA;

  // Icon mapping for highlights
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#4f7cff]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-violet-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#4f7cff]" />;
    }
  };

  const getHighlightStyle = (index: number) => {
    switch (index) {
      case 0:
        return {
          iconBox: "bg-blue-500/10 border-blue-500/25 text-[#4f7cff]",
          cardBorder: "hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(79,124,255,0.12)]",
        };
      case 1:
        return {
          iconBox: "bg-violet-500/10 border-violet-500/25 text-violet-400",
          cardBorder: "hover:border-violet-500/40 hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]",
        };
      case 2:
        return {
          iconBox: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
          cardBorder: "hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]",
        };
      case 3:
      default:
        return {
          iconBox: "bg-amber-500/10 border-amber-500/25 text-amber-400",
          cardBorder: "hover:border-amber-500/40 hover:shadow-[0_0_24px_rgba(245,158,11,0.12)]",
        };
    }
  };

  // Icon mapping for 4 philosophy steps
  const getPhilosophyIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#4f7cff]" />;
      case 1:
        return <Workflow className="w-5 h-5 text-violet-400" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 3:
      default:
        return <FileCheck2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  // Competency domain theme
  const getCompetencyTheme = (accent: string) => {
    switch (accent) {
      case "blue":
        return {
          icon: <Code2 className="w-5 h-5 text-[#4f7cff]" />,
          iconBg: "bg-blue-500/10 border-blue-500/25 text-[#4f7cff]",
          cardBorder: "hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(79,124,255,0.15)]",
          badgeVariant: "default" as const,
        };
      case "violet":
        return {
          icon: <Layers className="w-5 h-5 text-violet-400" />,
          iconBg: "bg-violet-500/10 border-violet-500/25 text-violet-400",
          cardBorder: "hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]",
          badgeVariant: "default" as const,
        };
      case "cyan":
        return {
          icon: <Eye className="w-5 h-5 text-cyan-400" />,
          iconBg: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
          cardBorder: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
          badgeVariant: "cyan" as const,
        };
      case "emerald":
      default:
        return {
          icon: <Server className="w-5 h-5 text-emerald-400" />,
          iconBg: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
          cardBorder: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
          badgeVariant: "default" as const,
        };
    }
  };

  // Focus icons mapping
  const getFocusIcon = (index: number) => {
    const icons = [
      <Terminal key="0" className="w-4 h-4 text-[#4f7cff]" />,
      <Server key="1" className="w-4 h-4 text-violet-400" />,
      <ShieldCheck key="2" className="w-4 h-4 text-emerald-400" />,
      <Cpu key="3" className="w-4 h-4 text-cyan-400" />,
      <CheckCircle2 key="4" className="w-4 h-4 text-amber-400" />,
      <Activity key="5" className="w-4 h-4 text-pink-400" />,
    ];
    return icons[index % icons.length];
  };

  // Split heading to apply the blue-to-violet gradient on "intelligent, practical software."
  const headingParts = aboutHeading.split("intelligent, practical software.");
  const headingPrefix = headingParts[0] || "I turn ideas into ";
  const headingHighlight = "intelligent, practical software.";

  return (
    <section
      id="about"
      className="py-24 border-t border-slate-200/80 dark:border-white/8 relative overflow-hidden"
      aria-label="About Mihir Shekhar Gupta"
    >
      {/* Subtle background ambient mesh */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-violet-600/5 dark:bg-violet-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* =================================================================== */}
        {/* 1. ASYMMETRIC EDITORIAL HEADER & NARRATIVE GRID                     */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          {/* Left Column (Desktop 5 cols): Eyebrow, Main Heading, Opening, Location & Status */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2">
              <span
                className="h-px w-6 bg-gradient-to-r from-[#4f7cff] to-[#8b5cf6]"
                aria-hidden="true"
              />
              <span className="text-xs font-mono-tech tracking-wider uppercase text-[#4f7cff] dark:text-[#67e8f9] font-semibold">
                {`${aboutEyebrow} // 01`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#f5f7fa] leading-[1.18]">
              {headingPrefix}
              <span className="bg-gradient-to-r from-[#4f7cff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                {headingHighlight}
              </span>
            </h2>

            {/* Short opening paragraph */}
            <p className="text-base text-slate-700 dark:text-[#cbd5e1] leading-relaxed font-normal">
              {aboutNarrative[0]}
            </p>

            {/* Location, Education, and Availability metadata badges */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs font-mono-tech text-slate-600 dark:text-[#a8b0c0]">
                <MapPin className="w-3.5 h-3.5 text-[#4f7cff] shrink-0" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono-tech text-slate-600 dark:text-[#a8b0c0]">
                <GraduationCap className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>B.Tech in Computer Science & Engineering</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-mono-tech font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop 7 cols): Supporting Statement & Narrative Breakdown */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-[#a8b0c0] leading-relaxed text-base">
            {/* Supporting statement in an editorial glass callout */}
            <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] dark:bg-[#111728]/80 backdrop-blur-sm relative overflow-hidden shadow-sm">
              <div className="absolute -top-3 -right-3 text-blue-500/10 dark:text-blue-400/5 pointer-events-none">
                <Quote className="w-24 h-24 rotate-180" />
              </div>
              <p className="text-base sm:text-lg italic text-slate-800 dark:text-[#e2e8f0] leading-relaxed font-medium relative z-10">
                “{aboutStatement}”
              </p>
            </div>

            {/* Paragraph 2: Beyond individual frameworks */}
            <p className="max-w-prose">{aboutNarrative[1]}</p>

            {/* Paragraph 3: Internships & technology stack */}
            <p className="max-w-prose">{aboutNarrative[2]}</p>

            {/* Paragraph 4: Domain projects */}
            <p className="max-w-prose">{aboutNarrative[3]}</p>

            {/* Paragraph 5: Complete engineering problems */}
            <p className="max-w-prose">{aboutNarrative[4]}</p>

            {/* Paragraph 6: Packaging, deployment, cloud & observability */}
            {aboutNarrative[5] && <p className="max-w-prose">{aboutNarrative[5]}</p>}

            {/* Paragraph 7: Deepening System Design, Backend, DSA & RAG/LangChain */}
            {aboutNarrative[6] && <p className="max-w-prose">{aboutNarrative[6]}</p>}

            {/* Final Paragraph: Forward-looking ambition */}
            <p className="max-w-prose text-slate-800 dark:text-[#f0f4f8] font-medium border-l-2 border-[#4f7cff] pl-4">
              {aboutNarrative[aboutNarrative.length - 1]}
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. PROFILE HIGHLIGHTS ROW / GRID                                    */}
        {/* =================================================================== */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {profileHighlights.map((highlight, index) => {
              const style = getHighlightStyle(index);
              return (
                <div
                  key={highlight.label}
                  className={`p-5 rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826]/90 backdrop-blur-sm transition-all duration-200 shadow-sm flex items-start gap-4 ${style.cardBorder}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${style.iconBox}`}
                  >
                    {getHighlightIcon(highlight.iconName)}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 dark:text-[#6b778d] block mb-1">
                      {highlight.label}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-[#f5f7fa] tracking-tight leading-snug">
                      {highlight.detail}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. ENGINEERING PHILOSOPHY ("HOW I APPROACH ENGINEERING")            */}
        {/* =================================================================== */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-white/8 bg-slate-50/50 dark:bg-[#0c111d]/90 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80 dark:border-white/8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <Workflow className="w-4 h-4 text-[#4f7cff]" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#4f7cff] dark:text-[#67e8f9] font-semibold">
                  {"METHODOLOGY // 4-STEP FLOW"}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                How I Approach Engineering
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a8b0c0] max-w-md">
              A structured, verification-first mindset for building dependable systems from first principles.
            </p>
          </div>

          {/* 4 Interactive Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {engineeringPhilosophy.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200/80 dark:border-white/8 bg-white/80 dark:bg-[#121826]/90 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(79,124,255,0.12)] group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono-tech px-2 py-0.5 rounded border border-blue-500/25 bg-blue-500/10 text-[#4f7cff] font-bold">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-[#a8b0c0] group-hover:text-[#4f7cff] transition-colors">
                      {getPhilosophyIcon(index)}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa] mb-2.5 tracking-tight group-hover:text-[#4f7cff] transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 4. WHAT I BUILD (4 COLOR-CODED COMPETENCY CARDS)                    */}
        {/* =================================================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#4f7cff]" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                  CORE CAPABILITIES
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                What I Build
              </h3>
            </div>
            <span className="text-xs font-mono-tech text-slate-400 dark:text-[#6b778d]">
              04 Specialized Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {competencies.map((comp) => {
              const theme = getCompetencyTheme(comp.accent);
              return (
                <div
                  key={comp.title}
                  className={`h-full rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826]/90 p-6 flex flex-col justify-between transition-all duration-300 shadow-sm group hover:-translate-y-1 ${theme.cardBorder}`}
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${theme.iconBg}`}
                    >
                      {theme.icon}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa] mb-2 tracking-tight">
                      {comp.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed mb-4">
                      {comp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/6">
                    {comp.skills.map((skill) => (
                      <Badge key={skill} variant={theme.badgeVariant} size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 5. CURRENT TECHNICAL FOCUS                                          */}
        {/* =================================================================== */}
        <div className="mb-20 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826]/90 backdrop-blur-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <Compass className="w-4 h-4 text-[#4f7cff]" />
            <h3 className="text-sm font-mono-tech uppercase tracking-wider text-slate-900 dark:text-[#f5f7fa] font-bold">
              Currently Focused On
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {currentFocus.map((focusItem, index) => (
              <div
                key={focusItem}
                className="p-3.5 rounded-xl border border-slate-200/70 dark:border-white/6 bg-slate-50/50 dark:bg-white/[0.02] flex items-center gap-3 transition-colors hover:border-blue-500/30 group"
              >
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 shrink-0 group-hover:bg-blue-500/10 transition-colors">
                  {getFocusIcon(index)}
                </div>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1] font-medium leading-snug">
                  {focusItem}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 6. PROJECT JOURNEY & REINFORCING SKILLS                             */}
        {/* =================================================================== */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                  ENGINEERING APPLICATION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                Project Journey
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a8b0c0]">
              Connecting architectural theory to tangible problem domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectJourney.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826]/90 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_22px_rgba(139,92,246,0.12)] group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-[#a8b0c0] font-medium">
                      {item.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa] mb-2 tracking-tight group-hover:text-violet-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-white/6 flex items-center gap-1.5 text-xs font-mono-tech text-violet-500 dark:text-violet-400 font-semibold">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 7. LEADERSHIP BEYOND CODE (CRICKET WITH VECTOR PATTERN)             */}
        {/* =================================================================== */}
        <div className="mb-20 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.04] via-slate-50/50 to-transparent dark:from-amber-500/[0.03] dark:via-[#131722] dark:to-[#0f131d] p-8 sm:p-10 relative overflow-hidden shadow-sm">
          {/* Decorative Vector Cricket Pitch Crease Lines Pattern (Pure SVG, no photos) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.05] overflow-hidden"
            aria-hidden="true"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pitch outline */}
              <rect x="250" y="40" width="300" height="320" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              {/* Bowling & Popping Creases */}
              <line x1="220" y1="90" x2="580" y2="90" stroke="currentColor" strokeWidth="2" />
              <line x1="220" y1="310" x2="580" y2="310" stroke="currentColor" strokeWidth="2" />
              {/* Stumps (top & bottom) */}
              <circle cx="390" cy="80" r="3" fill="currentColor" />
              <circle cx="400" cy="80" r="3" fill="currentColor" />
              <circle cx="410" cy="80" r="3" fill="currentColor" />
              <circle cx="390" cy="320" r="3" fill="currentColor" />
              <circle cx="400" cy="320" r="3" fill="currentColor" />
              <circle cx="410" cy="320" r="3" fill="currentColor" />
              {/* Boundary / 30-yard oval arc */}
              <ellipse cx="400" cy="200" rx="360" ry="180" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold block">
                  ATHLETIC DISCIPLINE & CULTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                  {leadershipBeyondCode.title}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-slate-600 dark:text-[#a8b0c0] leading-relaxed text-sm sm:text-base">
                <p>{leadershipBeyondCode.narrative[0]}</p>
                <p>{leadershipBeyondCode.narrative[1]}</p>
              </div>

              <div className="lg:col-span-4 p-5 rounded-2xl border border-amber-500/20 bg-white/60 dark:bg-black/30 backdrop-blur-sm space-y-3">
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block">
                  Competitive Cricket Honors
                </span>
                <div className="space-y-2 text-xs font-mono-tech text-slate-700 dark:text-[#cbd5e1]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="font-semibold">University Vice-Captain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Kaimur District Under-19</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Kaimur District Under-16</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Kaimur District Under-14</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 8. PERSONAL TRAITS ROW                                              */}
        {/* =================================================================== */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <span className="text-xs font-mono-tech text-slate-400 dark:text-[#6b778d] uppercase tracking-wider mr-2">
            Personal Attributes:
          </span>
          {personalTraits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] text-xs font-mono-tech text-slate-700 dark:text-[#cbd5e1] shadow-xs"
            >
              {trait}
            </span>
          ))}
        </div>

        {/* =================================================================== */}
        {/* 9. ABOUT SECTION CALL TO ACTION                                     */}
        {/* =================================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl border border-blue-500/25 bg-gradient-to-r from-blue-500/[0.06] via-violet-500/[0.06] to-pink-500/[0.04] dark:from-[#111728] dark:via-[#141829] dark:to-[#161224] text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-[#f5f7fa] tracking-tight mb-6 max-w-2xl mx-auto leading-snug">
            {aboutCta.text}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="md" href={aboutCta.exploreHref}>
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="md" href={aboutCta.resumeHref}>
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
