import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FinanceControllerVisual } from "@/components/projects/FinanceControllerVisual";
import { ReconciliationPipelineVisual } from "@/components/projects/ReconciliationPipelineVisual";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Cpu,
  Sparkles,
  Zap,
  Lock,
  Scale,
  Sliders,
  Database,
  BarChart3,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Finance Controller Case Study | Mihir Shekhar Gupta",
  description:
    "Explore AI Finance Controller, a verification-first finance operations system built for Track 04 Razorpay Hackathon reconciling invoices against bank transactions and webhooks with deterministic precision.",
  openGraph: {
    title: "AI Finance Controller Case Study | Mihir Shekhar Gupta",
    description:
      "Multi-source financial reconciliation, two-pass matching engine, HMAC-SHA256 Razorpay webhooks, and human review workbench.",
  },
};

export default function FinanceControllerCaseStudyPage() {
  const project = PROJECTS_DATA.find((p) => p.id === "ai-finance-controller")!;
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
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] text-[11px] font-mono-tech font-bold uppercase tracking-wider border border-[#00d2ff]/25">
              <Zap className="w-3 h-3" />
              Razorpay Hackathon · Track 04 Submission
            </span>
            <Badge variant="cyan" size="md">
              {project.category}
            </Badge>
            <span className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
              Empirical Evaluation &amp; Deterministic Invariants
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-[#00d2ff] dark:text-[#38bdf8]">
              Verification-first financial reconciliation with human-in-the-loop oversight.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
              An AI-assisted finance operations system that reconciles invoices against bank transactions, identifies unresolved exceptions, scores transaction risk, processes Razorpay webhooks, and supports human review.
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Python 3.9+",
              "FastAPI",
              "Pandas",
              "Pydantic",
              "SQLite (WAL Mode)",
              "Streamlit",
              "Docker",
              "HMAC-SHA256",
              "OpenAI (Optional)",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono-tech bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Repository & Demo Action Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.isRepoAvailable && project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-mono-tech text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              27 / 27 Automated Tests Passing
            </span>
          </div>

          {/* Interactive Visual Console Mockup */}
          <div className="pt-6">
            <FinanceControllerVisual />
          </div>
        </header>

        {/* ============================================================ */}
        {/* 2. SECTION 01 // PROBLEM STATEMENT */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>01 // Problem Space</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Why Financial Operations Struggle with Automated Matching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 dark:text-[#a8b0c0] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                In standard accounting and treasury operations, finance teams manually compare high-volume invoice records against bank feeds and payment gateway ledgers. Even in modest businesses, this process generates hundreds of discrepancies every month.
              </p>
              <p>
                Real-world bank statements rarely match invoice records perfectly. Payment gateways deduct processing fees (e.g. 1.8% to 2.5% + GST) before crediting payouts, vendors operate under disparate legal aliases (such as <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 font-mono-tech text-xs">AWS EMEA SARL</code> vs <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 font-mono-tech text-xs">AMZN WEB SERVICES</code>), and bank settlement dates can lag invoices by several business days.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Crucially, unguided automation introduces grave risks: <strong>double-matching</strong> (assigning the same bank credit to multiple invoices) corrupts general ledgers, while pure LLM solutions are vulnerable to hallucinations when calculating mathematical balances.
              </p>
              <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-50/40 dark:bg-rose-950/10 text-xs sm:text-sm text-rose-800 dark:text-rose-300 space-y-1.5">
                <div className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                  The Financial Hallucination Hazard
                </div>
                <p>
                  Accounting requires exact mathematical verification. Relying on probabilistic AI models to compute monetary reconciliation without strict deterministic guardrails and integer-cents arithmetic leads to untraceable accounting drift.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. SECTION 02 // RECONCILIATION ARCHITECTURE */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>02 // Pipeline Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Two-Pass Verification Architecture
          </h2>
          <p className="text-slate-600 dark:text-[#a8b0c0] leading-relaxed text-sm sm:text-base max-w-4xl">
            The AI Finance Controller separates verification into two sequential phases with bijective set locking, ensuring zero double-counting while achieving over 5,000 records per second throughput.
          </p>

          {/* Visual Pipeline Diagram */}
          <div className="my-6">
            <ReconciliationPipelineVisual />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-3">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Pass 1: Deterministic Matcher
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#cbd5e1] leading-relaxed">
                Ingests invoice and transaction records converted to integer cents. Immediately pairs records with identical amounts and normalized counterparty hashes. Matched IDs are stored in bijective sets and <strong>locked out of Pass 2</strong> to prevent double matching.
              </p>
              <ul className="text-xs font-mono-tech space-y-1 text-emerald-700 dark:text-emerald-300">
                <li>• Exact integer cents match: <code className="bg-emerald-500/10 px-1 py-0.5 rounded">inv.amount_cents == txn.amount_cents</code></li>
                <li>• Normalized entity hash match</li>
                <li>• Confidence score: 1.00 (Automatic lock)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-sky-500/20 bg-sky-50/20 dark:bg-sky-950/10 space-y-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Pass 2: Multi-Signal Fuzzy &amp; Heuristic Engine
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#cbd5e1] leading-relaxed">
                Evaluates remaining unmatched candidates using three independent mathematical gates. If any gate fails, the candidate is rejected. If all pass, candidates are scored and classified into Review or Verified queues.
              </p>
              <ul className="text-xs font-mono-tech space-y-1 text-sky-700 dark:text-sky-300">
                <li>• Amount Gate: Variance ≤ 5.0% (covers fee margins)</li>
                <li>• Counterparty Gate: String similarity ≥ 50.0%</li>
                <li>• Timing Gate: Calendar distance ≤ 5 days</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. SECTION 03 // SAFE FINANCIAL PRINCIPLES */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>03 // Core Safety Invariants</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Safe Financial Decision Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono-tech font-bold uppercase">
                <Scale className="w-4 h-4" />
                Integer Cents Only
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">No Floating-Point Math</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                All monetary amounts are converted to integer cents via <code className="font-mono-tech text-[11px] bg-slate-100 dark:bg-white/5 px-1">to_cents()</code> to eliminate IEEE 754 precision drift.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-2">
              <div className="flex items-center gap-2 text-[#00d2ff] text-xs font-mono-tech font-bold uppercase">
                <Lock className="w-4 h-4" />
                Bijective 1:1 Locking
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Zero Double-Matching</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every matched record is locked in memory. Invoices and transactions cannot be reused or multi-allocated.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-2">
              <div className="flex items-center gap-2 text-amber-500 text-xs font-mono-tech font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                Fail-Closed Webhooks
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">HMAC &amp; Idempotency</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Razorpay webhooks require valid cryptographic HMAC-SHA256 signatures and are checked against <code className="font-mono-tech text-[11px] bg-slate-100 dark:bg-white/5 px-1">processed_events</code> to prevent replay.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-2">
              <div className="flex items-center gap-2 text-indigo-500 text-xs font-mono-tech font-bold uppercase">
                <Database className="w-4 h-4" />
                Persistent SQLite Audit Trail
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">SQLite WAL Triggers</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Database triggers raise native SQL abort errors on any attempt to update or delete rows from <code className="font-mono-tech text-[11px] bg-slate-100 dark:bg-white/5 px-1">audit_logs</code>.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. SECTION 04 // EMPIRICAL BENCHMARKS & EVALUATION */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>04 // Empirical Benchmarks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Reproduced Evaluation &amp; Scaling Performance
          </h2>
          <p className="text-slate-600 dark:text-[#a8b0c0] leading-relaxed text-sm sm:text-base max-w-4xl">
            All metrics shown below were directly executed and reproduced locally from the repository evaluation scripts (<code className="font-mono-tech text-xs bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded">evaluate.py</code> and <code className="font-mono-tech text-xs bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded">benchmark.py</code>) in zero-API <code className="font-mono-tech text-xs text-[#00d2ff]">HEURISTIC_FALLBACK</code> mode.
          </p>

          {/* Benchmark Table 1: Canonical & 20-Run Aggregate */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono-tech uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#00d2ff]" />
              Evaluation Benchmark Results (Python 3.9.6 · Darwin)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121826]">
              <table className="w-full text-left text-xs font-mono-tech">
                <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="p-3">Evaluation Run</th>
                    <th className="p-3">Precision</th>
                    <th className="p-3">Recall</th>
                    <th className="p-3">F1 Score</th>
                    <th className="p-3">Exception Recall</th>
                    <th className="p-3">False Positives</th>
                    <th className="p-3">Throughput</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/6 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Canonical Dataset</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">100.0%</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">100.0%</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">1.0000</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">100.0%</td>
                    <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">0</td>
                    <td className="p-3 text-[#00d2ff] font-bold">4,884.5 r/s</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">20-Run Aggregate (Mean)</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">100.00%</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">100.00%</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">1.0000</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">100.00%</td>
                    <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">0</td>
                    <td className="p-3 text-[#00d2ff] font-bold">5,241.7 r/s</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono-tech text-slate-500 dark:text-slate-400 px-1">
              <span>Match Distribution across 20 runs: 81.82% auto-matched · 18.18% routed to human exception triage</span>
              <span>Dataset: Ground-truth synthetic validation fixtures</span>
            </div>
          </div>

          {/* Benchmark Table 2: Scaling Benchmark */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm font-mono-tech uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-500" />
              Throughput Scaling Under Varying Batch Sizes
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121826]">
              <table className="w-full text-left text-xs font-mono-tech">
                <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="p-3">Batch Size</th>
                    <th className="p-3">Invoices</th>
                    <th className="p-3">Transactions</th>
                    <th className="p-3">Execution Latency</th>
                    <th className="p-3">Throughput</th>
                    <th className="p-3">Precision</th>
                    <th className="p-3">Exceptions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/6 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">50 Records</td>
                    <td className="p-3">25</td>
                    <td className="p-3">25</td>
                    <td className="p-3">9.63 ms</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">5,192.1 r/s</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">100.0%</td>
                    <td className="p-3">12</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">100 Records</td>
                    <td className="p-3">50</td>
                    <td className="p-3">50</td>
                    <td className="p-3">18.50 ms</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">5,405.4 r/s</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">100.0%</td>
                    <td className="p-3">20</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">500 Records</td>
                    <td className="p-3">250</td>
                    <td className="p-3">250</td>
                    <td className="p-3">181.88 ms</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">2,749.1 r/s</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">100.0%</td>
                    <td className="p-3">92</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">1,000 Records</td>
                    <td className="p-3">500</td>
                    <td className="p-3">500</td>
                    <td className="p-3">578.15 ms</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">1,729.7 r/s</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">100.0%</td>
                    <td className="p-3">180</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. SECTION 05 // TESTED ENGINEERING INVARIANTS */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>05 // Verified Test Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            27 Passing Pytest Invariants
          </h2>
          <p className="text-slate-600 dark:text-[#a8b0c0] leading-relaxed text-sm sm:text-base max-w-4xl">
            The automated test suite in <code className="font-mono-tech text-xs bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded">test_reconciliation.py</code> verifies critical financial invariants across normalization, matching logic, exception handling, and persistence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              {
                title: "Float to Cents Conversion",
                detail: "Verifies floating-point inputs are strictly converted to exact integer cents without precision drift.",
                test: "test_to_cents_standard",
              },
              {
                title: "Negative Amount Rejection",
                detail: "Ensures negative or malformed transaction values raise explicit validation errors.",
                test: "test_to_cents_negative_raises",
              },
              {
                title: "Deterministic Exact Pairing",
                detail: "Validates deterministic matching on identical amount and counterparty records in Pass 1.",
                test: "test_deterministic_match_exact",
              },
              {
                title: "Bijective Set Locking",
                detail: "Verifies matched transactions are excluded from secondary passes to prevent double-matching.",
                test: "test_bijective_exclusion_lock",
              },
              {
                title: "Amount Variance Threshold",
                detail: "Ensures records with fee differences exceeding 5.0% are gated out of Pass 2 matching.",
                test: "test_variance_gating_threshold",
              },
              {
                title: "Name Similarity Threshold",
                detail: "Rejects counterparty matches when SequenceMatcher similarity falls below 50.0%.",
                test: "test_similarity_gating_threshold",
              },
              {
                title: "Date Proximity Gate",
                detail: "Rejects pairings where transaction and invoice dates differ by more than 5 calendar days.",
                test: "test_date_proximity_gate",
              },
              {
                title: "HMAC-SHA256 Webhook Check",
                detail: "Verifies invalid cryptographic webhook signatures are rejected with HTTP 400 Bad Request.",
                test: "test_webhook_hmac_verification",
              },
              {
                title: "Idempotent Event Storage",
                detail: "Prevents duplicate webhook replay by rejecting events already in processed_events.",
                test: "test_webhook_idempotency_replay",
              },
              {
                title: "Audit Log Immutability Trigger",
                detail: "Validates SQLite native trigger throws an abort error when executing UPDATE or DELETE on audit_logs.",
                test: "test_audit_log_trigger_immutability",
              },
              {
                title: "Behavioral Z-Score Profiling",
                detail: "Computes merchant volume/frequency distributions to detect anomalous deviations.",
                test: "test_merchant_baseline_zscore",
              },
              {
                title: "Operator Feedback Adaptation",
                detail: "Validates human resolution updates behavioral baselines for approved variance patterns.",
                test: "test_human_feedback_adaptation",
              },
            ].map((inv) => (
              <div
                key={inv.test}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">
                      {inv.title}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                    {inv.detail}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-white/6 text-[10px] font-mono-tech text-[#00d2ff]">
                  {inv.test}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. SECTION 06 // HUMAN-IN-THE-LOOP WORKBENCH */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>06 // Human-in-the-Loop</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Exception Remediation &amp; Adaptive Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 dark:text-[#a8b0c0] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Reconciliation cannot be an opaque black box. When variances occur—such as gateway fees or delayed merchant billing—the system routes items to an interactive triage workbench in Streamlit.
              </p>
              <p>
                Operators have four discrete remediation actions:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                <div className="p-2.5 rounded-lg border border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/10">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">Approve Variance</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Records fee discount into GL adjustment ledger.</div>
                </div>
                <div className="p-2.5 rounded-lg border border-sky-500/20 bg-sky-50/20 dark:bg-sky-950/10">
                  <div className="font-bold text-sky-600 dark:text-sky-400">Post GL Entry</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Posts manual journal debit/credit pairing.</div>
                </div>
                <div className="p-2.5 rounded-lg border border-amber-500/20 bg-amber-50/20 dark:bg-amber-950/10">
                  <div className="font-bold text-amber-600 dark:text-amber-400">File Dispute</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Escalates chargeback or vendor inquiry.</div>
                </div>
                <div className="p-2.5 rounded-lg border border-rose-500/20 bg-rose-50/20 dark:bg-rose-950/10">
                  <div className="font-bold text-rose-600 dark:text-rose-400">Write-Off</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Flags irrecoverable discrepancy to bad debt.</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p>
                Human operator resolutions are not discarded; they feed directly into the <strong>Adaptive Behavioral Baseline</strong>. When an operator repeatedly approves a specific gateway variance or vendor alias, the merchant profile adapts its expected fee margins and name patterns.
              </p>
              <div className="p-4 rounded-xl border border-[#00d2ff]/20 bg-sky-50/30 dark:bg-sky-950/10 text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1] space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#00d2ff]" />
                  Continuous Feedback Loop
                </div>
                <p>
                  Every operator decision updates the merchant baseline z-scores and records a persistent audit entry in the SQLite WAL audit table with operator timestamp, rationale, and prior state.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. SECTION 07 // TECHNOLOGY CHOICES */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>07 // Architecture Rationale</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Technology Decisions &amp; Trade-offs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cs.techChoices.map((choice) => (
              <div
                key={choice.tech}
                className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#00d2ff]" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    {choice.tech}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  {choice.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 9. SECTION 08 // SECURITY & MANDATORY DISCLAIMER */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-500 uppercase tracking-wider">
            <span>08 // Security &amp; Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Security Controls &amp; Production Disclaimer
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cs.securityConsiderations.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                  <span>{sec}</span>
                </div>
              ))}
            </div>

            {/* Prominent Mandatory Production Disclaimer */}
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/15 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed space-y-1.5">
              <div className="font-bold flex items-center gap-2 text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Engineering Security Scope Disclaimer
              </div>
              <p>
                These controls demonstrate security-conscious engineering and defensive architecture, but the project has not been represented as independently audited for production financial use. The benchmarks and reconciliation figures are derived from controlled synthetic validation datasets.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. SECTION 09 // ROADMAP & FUTURE IMPROVEMENTS */}
        {/* ============================================================ */}
        <section className="py-12 border-b border-slate-200 dark:border-white/8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00d2ff] uppercase tracking-wider">
            <span>09 // Engineering Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f5f7fa]">
            Limitations &amp; Future Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {cs.futureImprovements.map((imp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826] text-slate-700 dark:text-[#cbd5e1] flex items-start gap-2"
              >
                <span className="text-[#00d2ff] font-bold">→</span>
                <span>{imp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11. PROJECT NAVIGATION (Previous / Next) */}
        {/* ============================================================ */}
        <nav
          className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4"
          aria-label="Project Navigation"
        >
          <Link
            href="/projects/homemind-ai"
            className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#00d2ff] bg-white dark:bg-[#121826] transition-colors group flex items-center gap-3 text-left"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#00d2ff] transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                Previous Project
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa]">
                HomeMind AI
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
            href="/projects/traffiq"
            className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#00d2ff] bg-white dark:bg-[#121826] transition-colors group flex items-center justify-end gap-3 text-right"
          >
            <div>
              <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                Next Project
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa]">
                TRAFFIQ
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00d2ff] transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </Container>
    </article>
  );
}
