"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  LEARNING_SECTION_HEADER,
  SYSTEM_ALIGNMENTS,
  PROJECT_APPLICATIONS,
} from "@/data/learning";
import { LearningTracksGrid } from "@/components/learning/LearningTracksGrid";
import { ArchitectureGraph } from "@/components/learning/ArchitectureGraph";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Workflow,
  Boxes,
} from "lucide-react";

export function LearningSection() {
  return (
    <section
      id="learning"
      className="py-24 border-t border-slate-200/80 dark:border-white/8 relative overflow-hidden"
      aria-label="What I’m Learning Now"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-violet-600/5 dark:bg-violet-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* =================================================================== */}
        {/* 1. SECTION HEADING & INTRO STATEMENT                                */}
        {/* =================================================================== */}
        <SectionHeading
          eyebrow={LEARNING_SECTION_HEADER.eyebrow}
          title={LEARNING_SECTION_HEADER.title}
          description={LEARNING_SECTION_HEADER.intro}
        />

        {/* =================================================================== */}
        {/* 2. 4 STRUCTURED LEARNING TRACKS                                      */}
        {/* =================================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <h3 className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-bold">
              Disciplined Growth Horizons
            </h3>
          </div>
          <LearningTracksGrid />
        </div>

        {/* =================================================================== */}
        {/* 3. CENTERPIECE: HOW THE COMPLETE SYSTEM WORKS TOGETHER             */}
        {/* =================================================================== */}
        <div className="mb-14">
          <ArchitectureGraph />
        </div>

        {/* =================================================================== */}
        {/* 5. FIVE SYSTEM ALIGNMENT EXPLANATIONS                               */}
        {/* =================================================================== */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/8 bg-white/60 dark:bg-[#121625]/80 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200/60 dark:border-white/6">
            <Workflow className="w-4 h-4 text-[#4f7cff]" />
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-900 dark:text-white font-bold">
              Engineering Layer Alignments & Data Contracts
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SYSTEM_ALIGNMENTS.map((align, index) => (
              <div
                key={align.id}
                className={`p-4 sm:p-5 rounded-2xl border border-slate-200/70 dark:border-white/6 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col justify-between ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono-tech font-bold text-[#4f7cff] dark:text-[#67e8f9]">
                      {align.fromTo}
                    </span>
                    <span className="text-[10px] font-mono-tech text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                    {align.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {align.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 6. WHERE I APPLY THESE CONCEPTS (PROJECT CONNECTIONS)               */}
        {/* =================================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Boxes className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                  TANGIBLE IMPLEMENTATIONS
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                Where I Apply These Concepts
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a8b0c0]">
              Connecting full-stack and AI architecture theory to verified project codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECT_APPLICATIONS.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826]/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#4f7cff]/40 hover:shadow-[0_0_20px_rgba(79,124,255,0.12)] group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#a8b0c0] font-medium">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#4f7cff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa] mb-3 tracking-tight group-hover:text-[#4f7cff] transition-colors">
                    {project.title}
                  </h4>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-[#a8b0c0] mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#4f7cff] shrink-0 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/6 flex items-center gap-1.5 text-xs font-mono-tech text-[#4f7cff] font-semibold">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
