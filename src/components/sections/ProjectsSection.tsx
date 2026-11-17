import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HomemindVisual } from "@/components/projects/HomemindVisual";
import { FinanceControllerVisual } from "@/components/projects/FinanceControllerVisual";
import { TraffiqVisual } from "@/components/projects/TraffiqVisual";
import { BuildeaseVisual } from "@/components/projects/BuildeaseVisual";
import { ResumeProjectVisual } from "@/components/projects/ResumeProjectVisual";
import { PROJECTS_DATA } from "@/data/projects";
import { RESUME_ADDITIONAL_PROJECTS } from "@/data/achievements";
import { ArrowRight, CheckCircle2, Lock, Github, Sparkles, Zap } from "lucide-react";

export function ProjectsSection() {
  const homemind = PROJECTS_DATA.find((p) => p.id === "homemind-ai")!;
  const financeController = PROJECTS_DATA.find((p) => p.id === "ai-finance-controller")!;
  const traffiq = PROJECTS_DATA.find((p) => p.id === "traffiq")!;
  const buildease = PROJECTS_DATA.find((p) => p.id === "buildease")!;

  return (
    <section
      id="projects"
      className="py-20 border-t border-slate-200/80 dark:border-white/8 relative"
      aria-label="Featured Technical Projects"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <SectionHeading
            eyebrow="PROJECTS // 03"
            title="Featured Engineering Systems"
            description="Projects from my resume spanning multi-tenant full-stack architecture, Graph RAG knowledge systems, ML entity resolution, and regression workflows."
            className="mb-0"
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-semibold text-[#4f7cff] dark:text-[#67e8f9] hover:underline self-start md:self-end pb-2 group"
          >
            <span>VIEW ALL PROJECTS DIRECTORY</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {/* ============================================================ */}
          {/* SHOWCASE 1: HOMEMIND AI (Flagship Project Showcase: Visual Right) */}
          {/* ============================================================ */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-violet-500/50 dark:hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] shadow-md relative overflow-hidden group">
            {/* Subtle violet/pink ambient glow backdrop */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-500/15 dark:bg-violet-600/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-pink-500/10 dark:bg-pink-500/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Technical Details & Actions (Left 5 cols on Desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-[11px] font-mono-tech font-bold uppercase tracking-wider border border-violet-500/25">
                      <Sparkles className="w-3 h-3" />
                      Flagship Project
                    </span>
                    <Badge variant="cyan" size="sm">
                      {homemind.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                    {homemind.title}
                  </h3>
                  <div className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] mt-1">
                    {homemind.subtitle}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  A centralized platform for managing household finances, groceries, bills, appliances, medicines, tasks, and family workflows with household-scoped data isolation and AI-assisted features.
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {homemind.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="mono"
                      size="sm"
                      className="hover:border-violet-400 dark:hover:border-violet-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* 3 Core Engineering Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/80 dark:border-white/6">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                    Core Engineering Highlights:
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#a8b0c0]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Multi-tenant data isolation with mandatory householdId and role-based access control</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Unified domain models covering expenses, pantry inventory, appliances, and chores</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>Database-grounded assistant scoped to household schema records</span>
                    </div>
                  </div>
                </div>

                {/* Actions: Case Study & View Repository */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    href="/projects/homemind-ai"
                    variant="primary"
                    size="md"
                    className="group shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  {homemind.repositoryUrl && (
                    <a
                      href={homemind.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/12 bg-white/80 dark:bg-[#0c1017]/80 text-xs font-medium text-slate-800 dark:text-[#f5f7fa] hover:border-violet-500/50 dark:hover:border-violet-400 transition-all shadow-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Mockup Area (Right 7 cols on Desktop) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <HomemindVisual />
              </div>
            </div>
          </div>


                  {/* ============================================================ */}
          {/* SHOWCASE 2: AI FINANCE CONTROLLER (Alternating Layout: Visual Left) */}
          {/* ============================================================ */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] shadow-md relative overflow-hidden group">
            {/* Emerald/Blue ambient glow backdrop */}
            <div
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#4f7cff]/10 dark:bg-[#4f7cff]/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Visual Mockup Area (Left 7 cols on Desktop) */}
              <div className="lg:col-span-7">
                <FinanceControllerVisual />
              </div>

              {/* Technical Details & Actions (Right 5 cols on Desktop) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono-tech font-bold uppercase tracking-wider border border-emerald-500/25">
                      <Zap className="w-3 h-3" />
                      Razorpay Hackathon Track 04
                    </span>
                    <Badge variant="cyan" size="sm">
                      {financeController.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                    {financeController.title}
                  </h3>
                  <div className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] mt-1">
                    {financeController.subtitle}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  A verification-first finance operations system that reconciles invoices against bank transactions, identifies unresolved exceptions, scores transaction risk, and supports human review.
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {financeController.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="mono"
                      size="sm"
                      className="hover:border-emerald-500 dark:hover:border-emerald-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* 3 Core Engineering Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/80 dark:border-white/6">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                    Core Engineering Highlights:
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#a8b0c0]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Two-pass reconciliation engine with benchmark-verified deterministic matching across synthetic test runs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Bijective 1:1 set locking and integer-cents math eliminating double-matching and drift</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>HMAC-SHA256 Razorpay webhook receiver and append-only SQLite WAL audit triggers</span>
                    </div>
                  </div>
                </div>

                {/* Actions: Case Study & View Repository */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    href="/projects/ai-finance-controller"
                    variant="primary"
                    size="md"
                    className="group shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  {financeController.repositoryUrl && (
                    <a
                      href={financeController.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/12 bg-white/80 dark:bg-[#0c1017]/80 text-xs font-medium text-slate-800 dark:text-[#f5f7fa] hover:border-emerald-500/50 dark:hover:border-emerald-400 transition-all shadow-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SHOWCASE 3: TRAFFIQ (Alternating Layout: Visual Right) */}
          {/* ============================================================ */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)] shadow-md relative overflow-hidden group">
            {/* Cyan/Blue ambient glow backdrop */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Technical Details & Actions (Left 5 cols on Desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="cyan" size="sm">
                      {traffiq.category}
                    </Badge>
                    <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                      Computer Vision Case Study
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                    {traffiq.title}
                  </h3>
                  <div className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] mt-1">
                    {traffiq.subtitle}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  An AI-powered traffic management system that analyzes video and RTSP camera feeds and dynamically adjusts signal timings using vehicle-density data.
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {traffiq.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="mono"
                      size="sm"
                      className="hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* 3 Key Engineering Contributions */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/80 dark:border-white/6">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                    Core Engineering Highlights:
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#a8b0c0]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Multi-stream RTSP video ingest with OpenCV buffer optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Polygon Region-of-Interest (ROI) masking eliminating false vehicle counts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4f7cff] shrink-0 mt-0.5" />
                      <span>Dynamic signal timing engine adjusting phase green windows proportionally</span>
                    </div>
                  </div>
                </div>

                {/* Case Study Button & Pending States */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    href="/projects/traffiq"
                    variant="primary"
                    size="md"
                    className="group shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-dashed border-slate-300 dark:border-white/12 bg-slate-100/60 dark:bg-[#0c1017]/60 text-xs font-mono-tech text-slate-400 dark:text-[#6b778d] select-none"
                    title="TRAFFIQ repository will be published once open-sourced"
                  >
                    <Lock className="w-3 h-3" />
                    <span>Repo Pending</span>
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-dashed border-slate-300 dark:border-white/12 bg-slate-100/60 dark:bg-[#0c1017]/60 text-xs font-mono-tech text-slate-400 dark:text-[#6b778d] select-none"
                    title="Live demo junction endpoint is in staging"
                  >
                    <span>Demo Pending</span>
                  </span>
                </div>
              </div>

              {/* Visual Mockup Area (Right 7 cols on Desktop) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <TraffiqVisual />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SHOWCASE 4: BuildEase (Alternating Layout: Visual Left) */}
          {/* ============================================================ */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] shadow-md relative overflow-hidden group">
            {/* Amber/Blue ambient glow backdrop */}
            <div
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-500/15 dark:bg-amber-500/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Visual Mockup Area (Left 7 cols on Desktop) */}
              <div className="lg:col-span-7">
                <BuildeaseVisual />
              </div>

              {/* Technical Details & Actions (Right 5 cols on Desktop) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="accent" size="sm">
                      {buildease.category}
                    </Badge>
                    <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                      Full-Stack Architecture
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                    {buildease.title}
                  </h3>
                  <div className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] mt-1">
                    {buildease.subtitle}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  A full-stack construction platform connecting homeowners, contractors, and vendors through procurement workflows and collaborative messaging.
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {buildease.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="mono"
                      size="sm"
                      className="hover:border-amber-400 dark:hover:border-amber-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* 3 Key Engineering Contributions */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/80 dark:border-white/6">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                    Core Engineering Highlights:
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#a8b0c0]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Dual-tier architecture separating high-frequency WebSockets from REST CRUD</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4f7cff] shrink-0 mt-0.5" />
                      <span>Role-Based Access Control (RBAC) across Client, Contractor, and Vendor tiers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Milestone tracking and role coordination with parameterized PostgreSQL injection defense</span>
                    </div>
                  </div>
                </div>

                {/* Case Study Button & Pending States */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    href="/projects/buildease"
                    variant="primary"
                    size="md"
                    className="group shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-dashed border-slate-300 dark:border-white/12 bg-slate-100/60 dark:bg-[#0c1017]/60 text-xs font-mono-tech text-slate-400 dark:text-[#6b778d] select-none"
                    title="BuildEase repository will be published once open-sourced"
                  >
                    <Lock className="w-3 h-3" />
                    <span>Repo Pending</span>
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-dashed border-slate-300 dark:border-white/12 bg-slate-100/60 dark:bg-[#0c1017]/60 text-xs font-mono-tech text-slate-400 dark:text-[#6b778d] select-none"
                    title="Live demo sandbox is in staging"
                  >
                    <span>Demo Pending</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* Additional Resume & Hackathon Projects (Same 12-Col Alternating Showcase Format) */}
        {RESUME_ADDITIONAL_PROJECTS.map((proj, idx) => {
          const isVisualLeft = idx % 2 === 0;
          return (
            <div
              key={proj.id}
              className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-8 lg:p-10 transition-all duration-150 ease-out hover:border-[#4f7cff]/50 dark:hover:border-[#4f7cff]/40 hover:shadow-[0_0_30px_rgba(79,124,255,0.14)] shadow-md relative overflow-hidden group will-change-transform"
            >
              <div
                className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-[#4f7cff]/10 dark:bg-[#4f7cff]/15 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Technical Details & Highlights (5 cols) */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isVisualLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#4f7cff]/10 text-[#2563eb] dark:text-[#7ba3ff] text-[11px] font-mono-tech font-bold uppercase tracking-wider border border-[#4f7cff]/25">
                        <Zap className="w-3 h-3" aria-hidden="true" />
                        Resume Project
                      </span>
                      <Badge variant="cyan" size="sm">
                        {proj.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                      {proj.title}
                    </h3>
                    <div className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] mt-1">
                      {proj.subtitle}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="mono"
                        size="sm"
                        className="hover:border-[#4f7cff] dark:hover:border-[#4f7cff] transition-colors duration-150"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 pt-1">
                    {proj.highlights.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#cbd5e1] leading-relaxed"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#2563eb] dark:text-[#5b8cff] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture / Pipeline Visual (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isVisualLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <ResumeProjectVisual projectId={proj.id} />
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </Container>
    </section>
  );
}
