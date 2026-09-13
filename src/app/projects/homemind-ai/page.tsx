import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { HomemindVisual } from "@/components/projects/HomemindVisual";
import { HomemindArchitectureVisual } from "@/components/projects/HomemindArchitectureVisual";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Server,
  Zap,
  HelpCircle,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HomeMind AI Case Study | Mihir Shekhar Gupta",
  description:
    "Explore HomeMind AI, a multi-tenant household management platform combining full-stack engineering, household-scoped data models, event-driven architectures, and AI-assisted workflows.",
  openGraph: {
    title: "HomeMind AI Case Study | Mihir Shekhar Gupta",
    description:
      "A multi-tenant household management platform that unifies expenses, bills, groceries, appliances, medicines, tasks, sustainability insights, and AI-assisted household workflows.",
  },
};

export default function HomeMindCaseStudyPage() {
  const project = PROJECTS_DATA.find((p) => p.id === "homemind-ai")!;
  const cs = project.caseStudy;

  return (
    <article className="py-12 sm:py-16 md:py-20">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-slate-500 hover:text-slate-900 dark:text-[#a8b0c0] dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
        </div>

        {/* ============================================================ */}
        {/* 1. HERO SECTION */}
        {/* ============================================================ */}
        <header className="space-y-6 pb-12 border-b border-slate-200 dark:border-white/8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#2563eb]/10 dark:bg-[#5b8cff]/15 text-[#2563eb] dark:text-[#5b8cff] text-[11px] font-mono-tech font-bold uppercase tracking-wider border border-[#2563eb]/25 dark:border-[#5b8cff]/30">
              <Sparkles className="w-3 h-3" />
              Flagship Project
            </span>
            <Badge variant="cyan" size="md">
              {project.category}
            </Badge>
            <span className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
              Full-Stack &amp; AI Microservice Architecture
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-[#2563eb] dark:text-[#5b8cff]">
              A unified digital workspace for modern household management.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
              HomeMind AI brings finances, inventory, bills, appliances, medicines, tasks, family collaboration, and intelligent assistance into a single household-scoped platform.
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Node.js",
              "Express.js",
              "FastAPI",
              "Prisma ORM",
              "Socket.IO",
              "PostgreSQL (Configured)",
              "SQLite (Schema)",
              "Docker Compose",
              "Google OAuth",
              "Firebase",
              "Zustand",
              "TanStack Query",
              "Zod",
              "PDFKit",
              "Scikit-learn",
            ].map((tech) => (
              <Badge key={tech} variant="mono" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-white/12 bg-white dark:bg-[#121826] text-xs font-medium text-slate-900 dark:text-[#f5f7fa] hover:border-[#2563eb] dark:hover:border-[#5b8cff] transition-all shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            <span className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
              Status: Open-Source Repository (MIT)
            </span>
          </div>

          {/* Product Interface Preview Mockup */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono-tech text-violet-600 dark:text-violet-400 uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Product Interface Preview</span>
            </div>
            <HomemindVisual />
          </div>
        </header>

        {/* ============================================================ */}
        {/* 2. OVERVIEW, PROBLEM & SOLUTION */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-12">
          {/* Project Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <Layers className="w-4 h-4" />
              <span>01 // Project Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Connecting Fragmented Domestic Workflows
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-4xl">
              {cs.overview}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Card */}
            <div className="p-6 rounded-2xl border border-rose-500/20 bg-rose-50/30 dark:bg-rose-950/10 space-y-4">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-mono-tech font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-[#f5f7fa]">
                Data Fragmentation &amp; Coordination Friction
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                {cs.problem}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1] pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Multiple disconnected spreadsheets, notes, and messaging channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Overlooked grocery expiration and low-stock item run-outs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Misplaced appliance warranties and irregular maintenance schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Lack of multi-tenant authorization to protect family privacy.</span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/10 space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono-tech font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-[#f5f7fa]">
                A Unified Household Operating System
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                {cs.solution}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Household-scoped tenancy isolating every family&apos;s workspace.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>End-to-end finance, inventory, appliance, and chore orchestration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>DB-grounded conversational assistant querying household records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Automated PDFKit report streaming for monthly performance audits.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. SYSTEM ARCHITECTURE & PERSISTENCE NOTE */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <Server className="w-4 h-4" />
              <span>02 // System Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Multi-Service Full-Stack Blueprint
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-4xl">
              {cs.systemArchitectureDescription}
            </p>
          </div>

          {/* Interactive Architecture Diagram Component */}
          <HomemindArchitectureVisual />
        </section>

        {/* ============================================================ */}
        {/* 4. WHY THESE TECHNOLOGIES? */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <Zap className="w-4 h-4" />
              <span>03 // Technology Decisions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Why These Technologies?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-3xl">
              Technology choices reflect deliberate decoupling between transactional web traffic and analytical Python workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cs.techChoices.map((tc) => (
              <div
                key={tc.tech}
                className="p-5 rounded-xl border border-slate-200 dark:border-white/8 bg-white/70 dark:bg-[#121826]/70 space-y-2"
              >
                <div className="text-sm font-semibold font-mono-tech text-[#2563eb] dark:text-[#5b8cff]">
                  {tc.tech}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  {tc.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. HOUSEHOLD-SCOPED DATA ISOLATION */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>04 // Multi-Tenant Security</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Household-Scoped Data Isolation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-4xl">
              Each family operates inside its own household workspace. Core records carry a mandatory <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200">householdId</code>, and authenticated requests are verified and attached via Express middleware before database operations execute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-3">
              <div className="text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] font-bold uppercase">
                1. Token-Derived Context
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                Rather than trusting client-provided household query parameters, controllers extract <code className="font-mono text-[11px]">req.user.householdId</code> and <code className="font-mono text-[11px]">req.user.userId</code> from the verified 15-minute JWT access token.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-3">
              <div className="text-xs font-mono-tech text-cyan-600 dark:text-cyan-400 font-bold uppercase">
                2. Role-Based Privacy
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                The schema implements roles (<code className="font-mono text-[11px]">OWNER</code>, <code className="font-mono text-[11px]">ADMIN</code>, <code className="font-mono text-[11px]">MEMBER</code>, <code className="font-mono text-[11px]">GUEST</code>). For sensitive tables like financial entries, <code className="font-mono text-[11px]">MEMBER</code> queries are automatically filtered to personal entries.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-3">
              <div className="text-xs font-mono-tech text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                3. Audit &amp; Soft Deletion
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                Core tables include <code className="font-mono text-[11px]">createdBy</code>, <code className="font-mono text-[11px]">updatedBy</code>, <code className="font-mono text-[11px]">softDelete: boolean</code>, and auto-managed timestamps for traceability and recovery.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. CORE APPLICATION MODULES */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>05 // Module Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Functional Domain Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-3xl">
              Comprehensive breakdown of functional domains, distinguishing between fully implemented core services and prototype AI endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Module 1: Finance */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white/70 dark:bg-[#121826]/70 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa]">
                    Household Finance
                  </h3>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                    Implemented
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  Full CRUD for expenses, multiple income streams, monthly category budget limits, upcoming utility bills, and payment status toggling.
                </p>
              </div>
              <div className="text-[11px] font-mono-tech text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
                Tables: Expense, Income, Budget, Bill
              </div>
            </div>

            {/* Module 2: Inventory */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white/70 dark:bg-[#121826]/70 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa]">
                    Pantry &amp; Groceries
                  </h3>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                    Implemented
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  Tracks pantry stocks, unit metrics (kg, L, pcs), automated low-stock threshold alerts, and dynamic expiration countdown warnings.
                </p>
              </div>
              <div className="text-[11px] font-mono-tech text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
                Tables: GroceryItem, InventoryHistory
              </div>
            </div>

            {/* Module 3: Appliances */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white/70 dark:bg-[#121826]/70 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa]">
                    Home Maintenance
                  </h3>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                    Implemented
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  Appliance hardware registry logging brand, model, purchase date, warranty expiration countdown, and technician service maintenance notes.
                </p>
              </div>
              <div className="text-[11px] font-mono-tech text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
                Tables: Appliance, ApplianceMaintenance
              </div>
            </div>

            {/* Module 4: Health */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white/70 dark:bg-[#121826]/70 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa]">
                    Family Medicine
                  </h3>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                    Implemented
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  Prescription cabinet tracking medicine dosages, remaining pill inventory, assigned family members, and daily intake checklist toggles.
                </p>
              </div>
              <div className="text-[11px] font-mono-tech text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
                Tables: Medicine, MedicineSchedule
              </div>
            </div>

            {/* Module 5: Chores */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/8 bg-white/70 dark:bg-[#121826]/70 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa]">
                    Collaboration &amp; Tasks
                  </h3>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                    Implemented
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  Household chore allocation with priority levels (LOW, MEDIUM, HIGH, URGENT), member assignments, status tracking, and invite-code joining.
                </p>
              </div>
              <div className="text-[11px] font-mono-tech text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
                Tables: Task, Notification, Household
              </div>
            </div>

            {/* Module 6: AI Features */}
            <div className="p-5 rounded-2xl border border-purple-500/20 bg-purple-50/20 dark:bg-purple-950/10 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#f5f7fa]">
                    AI Services &amp; Tools
                  </h3>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-purple-500/15 text-purple-600 dark:text-purple-400 font-semibold">
                    Hybrid Status
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  DB-grounded assistant (<code className="font-mono text-[10px]">Implemented</code>), tool execution (<code className="font-mono text-[10px]">Implemented</code>), OCR &amp; recipes (<code className="font-mono text-[10px]">Prototype Demo</code>), utility forecasting (<code className="font-mono text-[10px]">Experimental np.polyfit</code>).
                </p>
              </div>
              <div className="text-[11px] font-mono-tech text-purple-600 dark:text-purple-300 pt-2 border-t border-purple-500/15">
                Service: Python FastAPI Microservice
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. ENGINEERING CHALLENGES */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>06 // Engineering Challenges</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Practical Architecture Tradeoffs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-3xl">
              Key engineering challenges encountered during schema modeling, microservice decoupling, and multi-tenant authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cs.engineeringChallenges.map((ec, idx) => (
              <div
                key={ec.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] font-bold">
                  <span>CHALLENGE 0{idx + 1}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#f5f7fa]">
                  {ec.title}
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  <p>
                    <strong className="text-slate-800 dark:text-slate-200 font-semibold">Constraint: </strong>
                    {ec.problem}
                  </p>
                  <p className="pt-2 border-t border-slate-100 dark:border-white/5 text-slate-700 dark:text-[#cbd5e1]">
                    <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Resolution: </strong>
                    {ec.resolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. RESTRAINED SECURITY CONTROLS */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>07 // Security Measures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Implemented Security Controls
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-3xl">
              Concrete controls derived directly from backend middleware, router definitions, and schema constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {cs.securityConsiderations.map((sec) => (
              <div
                key={sec}
                className="p-4 rounded-xl border border-slate-200/80 dark:border-white/8 bg-slate-50/50 dark:bg-[#121826]/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-[#a8b0c0]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2563eb] dark:text-[#5b8cff] shrink-0 mt-0.5" />
                <span>{sec}</span>
              </div>
            ))}
          </div>

          {/* Explicit Security Audit Disclaimer */}
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-50/40 dark:bg-amber-950/10 text-xs text-amber-800 dark:text-amber-300 font-mono-tech">
            <strong>Security Notice: </strong>
            Security controls shown here describe the implemented architecture and are not a substitute for an independent production security audit.
          </div>
        </section>

        {/* ============================================================ */}
        {/* 9. QUALITATIVE IMPACT & FUTURE ROADMAP */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-12">
          {/* Qualitative Impact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] uppercase font-bold tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>08 // Project Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Architectural &amp; Engineering Value
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {[
                "Consolidates multiple fragmented household workflows into one unified system",
                "Demonstrates multi-service architecture coordinating Node.js and Python FastAPI",
                "Explores grounded AI integration querying structured household database context",
                "Applies multi-tenant data modeling and role authorization to family workspaces",
                "Combines modern web engineering, relational ORM modeling, and streaming PDF exports",
                "Demonstrates security-conscious design with rate limiting and internal secret validation",
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1] flex items-start gap-2"
                >
                  <span className="text-[#2563eb] dark:text-[#5b8cff] font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Realistic Future Improvements */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] uppercase font-bold tracking-wider">
              <FileText className="w-4 h-4" />
              <span>09 // Future Roadmap</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
              Planned Technical Improvements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {cs.futureImprovements.map((imp) => (
                <div
                  key={imp}
                  className="p-3.5 rounded-xl border border-dashed border-slate-300 dark:border-white/12 bg-slate-50/40 dark:bg-[#0f1420]/40 flex items-start gap-2.5 text-xs text-slate-600 dark:text-[#a8b0c0] font-mono-tech"
                >
                  <span className="text-[#2563eb] dark:text-[#5b8cff] font-bold">→</span>
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. PROJECT NAVIGATION (Previous / Next) */}
        {/* ============================================================ */}
        <nav
          className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4"
          aria-label="Project Navigation"
        >
          <Link
            href="/projects/buildease"
            className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#2563eb] dark:hover:border-[#5b8cff] bg-white dark:bg-[#121826] transition-colors group flex items-center gap-3 text-left"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#2563eb] dark:group-hover:text-[#5b8cff] transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                Previous Project
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa]">
                BuildEase
              </div>
            </div>
          </Link>

          <Link
            href="/projects"
            className="text-xs font-mono-tech text-slate-500 hover:text-slate-900 dark:text-[#a8b0c0] dark:hover:text-white"
          >
            ALL PROJECTS DIRECTORY
          </Link>

          <Link
            href="/projects/ai-finance-controller"
            className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#2563eb] dark:hover:border-[#5b8cff] bg-white dark:bg-[#121826] transition-colors group flex items-center justify-end gap-3 text-right"
          >
            <div>
              <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                Next Project
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa]">
                AI Finance Controller
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563eb] dark:group-hover:text-[#5b8cff] transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </Container>
    </article>
  );
}
