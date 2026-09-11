import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  Camera,
  Network,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TRAFFIQ Case Study — AI-Powered Smart Traffic Management",
  description:
    "Technical case study on TRAFFIQ: Real-time vehicle detection using YOLOv8, RTSP stream ingestion, ROI density analysis, and adaptive traffic signal timing algorithms.",
};

export default function TraffiqCaseStudy() {
  const project = PROJECTS_DATA.find((p) => p.id === "traffiq")!;
  const { caseStudy } = project;

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="max-w-4xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cyan" size="md">
              {project.category}
            </Badge>
            <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
              Technical Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {project.title} — {project.subtitle}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <Badge key={t} variant="mono" size="sm">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Conceptual Architecture Visual Pipeline */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8 mb-16 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-cyan-500" />
              <h2 className="text-sm font-mono-tech uppercase font-bold text-slate-800 dark:text-slate-200">
                Conceptual Pipeline Architecture
              </h2>
            </div>
            <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
              Dataflow Topology
            </span>
          </div>

          {/* Graphical Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {project.conceptualArchitecture.map((step, idx) => (
              <div
                key={step}
                className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 p-4 flex flex-col justify-between"
              >
                <div className="text-[10px] font-mono-tech text-blue-500 font-bold mb-2">
                  PHASE 0{idx + 1}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {step}
                </div>
                {idx < project.conceptualArchitecture.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-blue-500 font-bold text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-mono-tech">
            * Labeled as conceptual project architecture representing the implemented pipeline logic.
          </p>
        </div>

        {/* Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Project Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>01. Project Overview</span>
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.overview}
              </p>
            </section>

            {/* 2. Problem Being Solved */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                02. The Problem
              </h2>
              <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 p-5">
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
            </section>

            {/* 3. Intended Users */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                03. Target User Cohorts
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.intendedUsers.map((user, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Solution & System Architecture */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                04. Solution & Architecture
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.systemArchitectureDescription}
              </p>
            </section>

            {/* 5. Technology Choices & Reasons */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                05. Technology Choices & Rationale
              </h2>
              <div className="space-y-3">
                {caseStudy.techChoices.map((choice) => (
                  <div
                    key={choice.tech}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 space-y-1"
                  >
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400 font-mono-tech">
                      {choice.tech}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {choice.reason}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Major Features */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                06. Major System Features
              </h2>
              <ul className="space-y-2.5">
                {caseStudy.majorFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. Engineering Challenges */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                07. Engineering Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {caseStudy.engineeringChallenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-base">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{ch.title}</span>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Problem:</strong> {ch.problem}
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80">
                      <strong className="text-emerald-600 dark:text-emerald-400">Resolution:</strong>{" "}
                      {ch.resolution}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Security & Operational Reliability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                08. Security & Reliability Considerations
              </h2>
              <ul className="space-y-2">
                {caseStudy.securityConsiderations.map((sec, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 9. Future Roadmap */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                09. Planned Improvements & Roadmap
              </h2>
              <ul className="space-y-2">
                {caseStudy.futureImprovements.map((fut, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{fut}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky Sidebar: Metadata, Tech, Repository & Demo Status */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 space-y-6 shadow-2xs">
              <div>
                <h3 className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">
                  Project Metadata
                </h3>
                <dl className="space-y-2.5 text-xs font-mono-tech">
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <dt className="text-slate-500 dark:text-slate-400">Category:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-slate-200">
                      {project.category}
                    </dd>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <dt className="text-slate-500 dark:text-slate-400">Inference Core:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-slate-200">
                      YOLOv8 + OpenCV
                    </dd>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <dt className="text-slate-500 dark:text-slate-400">Backend API:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-slate-200">FastAPI</dd>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <dt className="text-slate-500 dark:text-slate-400">Database:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-slate-200">PostgreSQL</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500 dark:text-slate-400">Ingest Protocol:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-slate-200">RTSP Video</dd>
                  </div>
                </dl>
              </div>

              {/* Source & Demo Status */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Deployment & Source Availability
                </h4>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/40 text-xs font-mono-tech text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      Repository Status
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                      Source Pending
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/40 text-xs font-mono-tech text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-slate-400" />
                      CCTV Stream Feed
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                      Local RTSP Node
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-mono-tech">
                  * Public demo URLs and source code will be updated once external hosting and
                  open-source repository access are finalized.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
