"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRightLeft,
  FileCheck2,
  Scale,
  Zap,
  Lock,
  Check,
  CheckCircle2,
} from "lucide-react";

export function FinanceControllerVisual() {
  const [selectedAction, setSelectedAction] = useState<string | null>("Approve Variance");
  const [statusMessage, setStatusMessage] = useState<string>("Variance approved: recorded -₹284 to Gateway Fee Adjustment");

  const handleActionClick = (actionName: string) => {
    setSelectedAction(actionName);
    if (actionName === "Approve Variance") {
      setStatusMessage("Variance approved: recorded -₹284 to Gateway Fee Adjustment");
    } else if (actionName === "Post GL Entry") {
      setStatusMessage("Manual journal entry queued for GL posting: DR Expense / CR Bank");
    } else if (actionName === "File Dispute") {
      setStatusMessage("Vendor inquiry ticket opened with AMZN WEB SERVICES INDIA");
    } else if (actionName === "Write-Off") {
      setStatusMessage("Discrepancy of ₹284 flagged as acceptable bad debt variance");
    }
  };

  return (
    <div className="relative w-full rounded-2xl border border-emerald-500/25 dark:border-emerald-500/30 bg-white/90 dark:bg-[#0c1120]/90 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group">
      {/* Top Window Bar & Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-emerald-500/15 dark:border-white/8 bg-slate-50/80 dark:bg-[#0f1424]/80 text-xs font-mono-tech">
        {/* Left: Window Dots & System Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-[#f8fafc] font-medium font-sans">
            <Scale className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-semibold">AI Finance Controller</span>
            <span className="text-slate-400 dark:text-[#64748b] font-mono-tech text-[11px] hidden sm:inline">
              {"// Ops Console"}
            </span>
          </div>
        </div>

        {/* Right: Engine Status & Demo Label */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Engine Online
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] font-mono-tech text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
            Synthetic Reconciliation Illustration
          </span>
        </div>
      </div>

      {/* Main Operations Grid */}
      <div className="p-4 sm:p-5 space-y-3.5 sm:space-y-4">
        {/* Row 1: Reconciliation Performance & Cash Balance Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {/* Card A: Reconciliation Match Summary (Emerald Accent) */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-emerald-500/25 bg-emerald-50/20 dark:bg-emerald-950/15 flex flex-col justify-between transition-all hover:border-emerald-500/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b3c7] uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#10b981]" />
                Batch Reconciliation Run
              </span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono-tech border border-emerald-500/20">
                100.0% Precision
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold font-mono-tech text-slate-900 dark:text-[#f8fafc]">
                82 / 100
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                matched (18 exceptions queued)
              </span>
            </div>
            {/* Split Progress Bar */}
            <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden flex">
              <div
                className="bg-emerald-500 h-1.5 transition-all shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                style={{ width: "64%" }}
                title="Pass 1 Deterministic: 64%"
              />
              <div
                className="bg-[#4f7cff] h-1.5"
                style={{ width: "18%" }}
                title="Pass 2 Multi-Signal: 18%"
              />
              <div
                className="bg-[#f59e0b] h-1.5"
                style={{ width: "18%" }}
                title="Exceptions: 18%"
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-[10px] text-slate-500 dark:text-[#a8b3c7] font-mono-tech">
              <span>0 False Positives</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">5,241.7 records/sec</span>
            </div>
          </div>

          {/* Card B: Cash Integrity & Position (Electric Blue Accent) */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-[#4f7cff]/25 bg-blue-50/20 dark:bg-blue-950/15 flex flex-col justify-between transition-all hover:border-[#4f7cff]/40">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4f7cff]" />
                <span className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc]">
                  Cash Integrity Position
                </span>
              </div>
              <span className="text-[10px] font-mono-tech font-semibold px-2 py-0.5 rounded-full bg-[#4f7cff]/10 text-[#4f7cff] border border-[#4f7cff]/20">
                Integer-Cents Locked
              </span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <div>
                <div className="text-lg font-bold font-mono-tech text-slate-900 dark:text-[#f8fafc]">
                  ₹4,82,500
                </div>
                <div className="text-[11px] text-slate-500 dark:text-[#a8b3c7]">
                  Verified Reconciled Cash
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold font-mono-tech text-amber-600 dark:text-amber-400">
                  ₹68,400
                </div>
                <div className="text-[11px] text-slate-500 dark:text-[#a8b3c7]">
                  Pending Human Review
                </div>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-white/6 flex items-center justify-between text-[10px] text-slate-500 dark:text-[#a8b3c7] font-mono-tech">
              <span>IEEE 754 Drift: 0.00</span>
              <span className="text-emerald-600 dark:text-emerald-400">Bijective 1:1 Safe</span>
            </div>
          </div>
        </div>

        {/* Row 2: Two-Pass Strategy Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
          <div className="p-2.5 sm:p-3 rounded-lg border border-emerald-500/25 bg-emerald-50/30 dark:bg-emerald-950/15 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono-tech text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                Pass 1: Deterministic
              </div>
              <div className="font-semibold text-slate-900 dark:text-white mt-0.5 font-mono-tech">
                64 Auto-Locked
              </div>
              <div className="text-[10px] text-slate-500 dark:text-[#a8b3c7]">Exact Cents + Entity Hash</div>
            </div>
            <Lock className="w-4 h-4 text-emerald-500 shrink-0" />
          </div>

          <div className="p-2.5 sm:p-3 rounded-lg border border-[#4f7cff]/25 bg-blue-50/30 dark:bg-blue-950/15 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono-tech text-[#4f7cff] uppercase tracking-wider">
                Pass 2: Multi-Signal
              </div>
              <div className="font-semibold text-slate-900 dark:text-white mt-0.5 font-mono-tech">
                18 Confirmed
              </div>
              <div className="text-[10px] text-slate-500 dark:text-[#a8b3c7]">Variance ≤5%, Date ≤5d</div>
            </div>
            <ArrowRightLeft className="w-4 h-4 text-[#4f7cff] shrink-0" />
          </div>

          <div className="p-2.5 sm:p-3 rounded-lg border border-amber-500/25 bg-amber-50/30 dark:bg-amber-950/15 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono-tech text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                Exception Queue
              </div>
              <div className="font-semibold text-slate-900 dark:text-white mt-0.5 font-mono-tech">
                18 Escalations
              </div>
              <div className="text-[10px] text-slate-500 dark:text-[#a8b3c7]">Human Triage Required</div>
            </div>
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
          </div>
        </div>

        {/* Row 3: Exception Resolution Workbench Preview */}
        <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-white/8 bg-slate-50/50 dark:bg-[#101626]/80 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-mono-tech font-bold border border-amber-500/25">
                EXC-091
              </span>
              <span className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc]">
                Counterparty Variance &amp; Fee Discrepancy
              </span>
            </div>
            <span className="text-[10px] font-mono-tech text-slate-500 dark:text-[#a8b3c7]">
              Confidence Score: 0.74 (Review Required)
            </span>
          </div>

          {/* Comparison Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech">
            <div className="p-2.5 rounded bg-white dark:bg-black/25 border border-slate-200 dark:border-white/8">
              <div className="text-[10px] text-slate-400 uppercase">Vendor Invoice (INV-2024-884)</div>
              <div className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">AMZN WEB SERVICES INDIA</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">₹14,200.00</div>
              <div className="text-[10px] text-slate-500">Date: 2024-03-12</div>
            </div>

            <div className="p-2.5 rounded bg-white dark:bg-black/25 border border-slate-200 dark:border-white/8">
              <div className="text-[10px] text-slate-400 uppercase">Bank Feed (TXN-90218)</div>
              <div className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">AWS EMEA SARL *COMM</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">₹13,916.00</div>
              <div className="text-[10px] text-amber-600 dark:text-amber-400">
                -₹284.00 (-2.0% Gateway Fee Variance)
              </div>
            </div>
          </div>

          {/* Operator Action Bar & Status Transition */}
          <div className="pt-2 border-t border-slate-200 dark:border-white/8">
            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#a8b3c7] mb-2 font-mono-tech">
              <span>Operator Resolution Action:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                {selectedAction ? `Selected: ${selectedAction}` : "Choose Action"}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { name: "Approve Variance", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20" },
                { name: "Post GL Entry", color: "bg-blue-500/10 text-[#4f7cff] border-blue-500/30 hover:bg-blue-500/20" },
                { name: "File Dispute", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 hover:bg-amber-500/20" },
                { name: "Write-Off", color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30 hover:bg-rose-500/20" },
              ].map((btn) => (
                <button
                  key={btn.name}
                  onClick={() => handleActionClick(btn.name)}
                  type="button"
                  className={`px-2 py-1.5 rounded text-[11px] font-mono-tech font-medium border transition-all flex items-center justify-center gap-1 cursor-pointer ${btn.color} ${
                    selectedAction === btn.name ? "ring-2 ring-offset-1 ring-[#10b981] shadow-sm" : ""
                  }`}
                >
                  {selectedAction === btn.name && <Check className="w-3 h-3 shrink-0" />}
                  <span>{btn.name}</span>
                </button>
              ))}
            </div>
            {/* Status transition notification banner */}
            <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono-tech text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">{statusMessage}</span>
            </div>
          </div>
        </div>

        {/* Row 4: Razorpay Webhook Telemetry & Risk Engine */}
        <div className="p-3 sm:p-3.5 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-transparent dark:from-emerald-500/10 dark:via-blue-500/10 dark:to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-tech">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#10b981] text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.4)]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                <span>Webhook: payment.captured</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/25">
                  HMAC-SHA256
                </span>
              </div>
              <div className="text-[10px] text-slate-500 dark:text-[#a8b3c7]">
                Event pay_09xfa812 · Idempotent lock verified in processed_events
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto text-[11px]">
            {/* Risk score animated ring */}
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200 dark:text-white/10"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-emerald-500"
                    strokeDasharray="18, 100"
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[9px] font-bold text-emerald-600 dark:text-emerald-400">18</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-emerald-600 dark:text-emerald-400">Risk: LOW (18/100)</div>
                <div className="text-[10px] text-slate-400">Baseline: 1.02x normal</div>
              </div>
            </div>
            <div className="px-2 py-1 rounded bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-[10px] border border-slate-300/60 dark:border-white/10">
              Audit WAL Logged
            </div>
          </div>
        </div>

        {/* Accessible Illustrative Note */}
        <div className="text-center text-[10px] font-mono-tech text-slate-400 dark:text-slate-500 pt-1">
          Interface values are illustrative and do not represent production metrics.
        </div>
      </div>
    </div>
  );
}
