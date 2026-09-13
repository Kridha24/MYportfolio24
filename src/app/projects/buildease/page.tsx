import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BuildeaseVisual } from "@/components/projects/BuildeaseVisual";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  Network,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Lock,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BuildEase Case Study — Full-Stack Construction Management Platform",
  description:
    "Technical case study on BuildEase: Modular React/Vite architecture, Node.js/Express REST microservices, role-based access control, and Socket.IO real-time communication.",
};

export default function BuildEaseCaseStudy() {
  const project = PROJECTS_DATA.find((p) => p.id === "buildease")!;
  const { caseStudy } = project;

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] hover:text-[#2563eb] dark:hover:text-[#5b8cff] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="max-w-4xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent" size="md">
              {project.category}
            </Badge>
            <span className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
              Technical Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#f5f7fa]">
            {project.title} — {project.subtitle}
          </h1>

          <p className="text-lg text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
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

        {/* Product Visual Mockup */}
        <div className="mb-14 max-w-4xl">
          <BuildeaseVisual />
        </div>

        {/* Dual Architecture Visual Preview */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826] p-6 sm:p-8 mb-16 shadow-2xs space-y-6">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 dark:border-white/6">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#2563eb] dark:text-[#5b8cff]" />
              <h2 className="text-sm font-mono-tech uppercase font-bold text-slate-900 dark:text-[#f5f7fa]">
                Dual-Tier System Architecture
              </h2>
            </div>
            <span className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
              REST + Real-Time WebSocket
            </span>
          </div>

          {/* Flow 1: REST & RBAC Data Pipeline */}
          <div>
            <div className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] uppercase tracking-wider mb-2">
              Tier 1: REST API & Role-Based Access Control Flow
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.dualFlowArchitecture?.restFlow.map((step, idx) => (
                <div
                  key={step}
                  className="rounded-xl border border-slate-200 dark:border-white/6 bg-slate-50 dark:bg-[#0f1420] p-4"
                >
                  <div className="text-[10px] font-mono-tech text-[#2563eb] dark:text-[#5b8cff] font-bold mb-1">
                    LAYER 0{idx + 1}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-[#f5f7fa]">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow 2: Real-time Socket.IO Flow */}
          <div>
            <div className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] uppercase tracking-wider mb-2">
              Tier 2: Real-Time Event & Messaging Backbone (Socket.IO Server)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.dualFlowArchitecture?.socketFlow.map((step, idx) => (
                <div
                  key={step}
                  className="rounded-xl border border-cyan-200/80 dark:border-cyan-900/40 bg-cyan-50/50 dark:bg-cyan-950/20 p-4"
                >
                  <div className="text-[10px] font-mono-tech text-cyan-600 dark:text-[#67e8f9] font-bold mb-1">
                    SOCKET 0{idx + 1}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-[#f5f7fa]">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Project Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                01. Project Overview
              </h2>
              <p className="text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                {caseStudy.overview}
              </p>
            </section>

            {/* 2. Problem Being Solved */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                02. The Problem
              </h2>
              <div className="rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 p-5">
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
            </section>

            {/* 3. Intended Users */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                03. Stakeholder Groups
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.intendedUsers.map((user, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] text-sm text-slate-700 dark:text-[#a8b0c0] flex flex-col justify-between"
                  >
                    <div className="text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] font-bold mb-2">
                      USER COHORT {idx + 1}
                    </div>
                    <span className="text-xs leading-relaxed">{user}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Solution & System Architecture */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                04. Solution & Architecture
              </h2>
              <p className="text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                {caseStudy.solution}
              </p>
              <p className="text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                {caseStudy.systemArchitectureDescription}
              </p>
            </section>

            {/* 5. Technology Choices & Reasons */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                05. Technology Choices & Rationale
              </h2>
              <div className="space-y-3">
                {caseStudy.techChoices.map((choice) => (
                  <div
                    key={choice.tech}
                    className="p-4 rounded-xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] space-y-1"
                  >
                    <div className="text-sm font-bold text-[#2563eb] dark:text-[#5b8cff] font-mono-tech">
                      {choice.tech}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                      {choice.reason}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Major Features */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                06. Major System Capabilities
              </h2>
              <ul className="space-y-2.5">
                {caseStudy.majorFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] text-sm text-slate-700 dark:text-[#a8b0c0] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. Engineering Challenges */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                07. Engineering Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {caseStudy.engineeringChallenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826] p-5 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-slate-900 dark:text-[#f5f7fa] font-bold text-base">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{ch.title}</span>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-[#a8b0c0]">
                      <strong>Problem:</strong> {ch.problem}
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#0f1420] p-3 rounded-lg border border-slate-200/80 dark:border-white/6">
                      <strong className="text-emerald-600 dark:text-emerald-400">Resolution:</strong>{" "}
                      {ch.resolution}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Security & Authorization */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                08. Security & Authorization Model
              </h2>
              <ul className="space-y-2">
                {caseStudy.securityConsiderations.map((sec, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] text-sm text-slate-700 dark:text-[#a8b0c0] flex items-start gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#2563eb] dark:text-[#5b8cff] shrink-0 mt-0.5" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 9. Future Improvements */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                09. Planned Enhancements & Roadmap
              </h2>
              <ul className="space-y-2">
                {caseStudy.futureImprovements.map((fut, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] text-sm text-slate-700 dark:text-[#a8b0c0] flex items-start gap-2.5"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{fut}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Project Navigation */}
            <nav
              className="pt-8 border-t border-slate-200 dark:border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4"
              aria-label="Project Navigation"
            >
              <Link
                href="/projects/traffiq"
                className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#2563eb] dark:hover:border-[#5b8cff] bg-white dark:bg-[#121826] transition-colors group flex items-center gap-3 text-left"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#2563eb] dark:group-hover:text-[#5b8cff] transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                    Previous Project
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa]">
                    TRAFFIQ
                  </div>
                </div>
              </Link>

              <Link
                href="/projects/homemind-ai"
                className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#2563eb] dark:hover:border-[#5b8cff] bg-white dark:bg-[#121826] transition-colors group flex items-center justify-end gap-3 text-right"
              >
                <div>
                  <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                    Next Project (Flagship)
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa]">
                    HomeMind AI
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563eb] dark:group-hover:text-[#5b8cff] transition-transform group-hover:translate-x-1" />
              </Link>
            </nav>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="rounded-3xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826] p-6 space-y-6 shadow-2xs">
              <div>
                <h3 className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold mb-3">
                  System Metadata
                </h3>
                <dl className="space-y-2.5 text-xs font-mono-tech">
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-white/6">
                    <dt className="text-slate-500 dark:text-[#a8b0c0]">Architecture:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-[#f5f7fa]">
                      Decoupled REST + WS
                    </dd>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-white/6">
                    <dt className="text-slate-500 dark:text-[#a8b0c0]">Frontend Stack:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-[#f5f7fa]">
                      React + TypeScript
                    </dd>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-white/6">
                    <dt className="text-slate-500 dark:text-[#a8b0c0]">Backend Core:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-[#f5f7fa]">
                      Node.js / Express
                    </dd>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-white/6">
                    <dt className="text-slate-500 dark:text-[#a8b0c0]">Document Store:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-[#f5f7fa]">MongoDB</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500 dark:text-[#a8b0c0]">Real-Time Core:</dt>
                    <dd className="font-semibold text-slate-800 dark:text-[#f5f7fa]">Socket.IO</dd>
                  </div>
                </dl>
              </div>

              {/* Source & Demo Status */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/6">
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                  Deployment & Source Availability
                </h4>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl border border-dashed border-slate-300 dark:border-white/12 bg-slate-50 dark:bg-[#0f1420] text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      Repository Status
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-[#f5f7fa]">
                      Source Pending
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-dashed border-slate-300 dark:border-white/12 bg-slate-50 dark:bg-[#0f1420] text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      WebSocket Server
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-[#f5f7fa]">
                      Local Socket.IO
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-[#a8b0c0] leading-relaxed font-mono-tech">
                  * Public demo URLs and source code will be attached following domain registration
                  and production sandbox deployment.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
