"use client";

import React from "react";
import {
  Sparkles,
  Users,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Wrench,
  Bot,
  Zap,
} from "lucide-react";

export function HomemindVisual() {
  return (
    <div className="relative w-full rounded-2xl border border-violet-500/20 dark:border-violet-500/30 bg-white/90 dark:bg-[#0c1120]/90 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] group">
      {/* Top Window Bar & Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-violet-500/15 dark:border-white/8 bg-slate-50/80 dark:bg-[#0f1424]/80 text-xs font-mono-tech">
        {/* Left: Window Dots & Workspace */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-[#f8fafc] font-medium font-sans">
            <Users className="w-3.5 h-3.5 text-[#8b5cf6]" />
            <span className="font-semibold">The Gupta Household</span>
            <span className="text-slate-400 dark:text-[#64748b] font-normal">· 4 Members</span>
          </div>
        </div>

        {/* Right: Active Status & Preview Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active Sync
          </span>
          <span className="px-2 py-0.5 rounded bg-violet-500/10 text-[10px] font-mono-tech text-violet-700 dark:text-violet-300 border border-violet-500/20">
            Interactive Product Architecture
          </span>
        </div>
      </div>

      {/* Main Command Center Grid */}
      <div className="p-4 sm:p-5 space-y-3.5 sm:space-y-4 relative">
        {/* Subtle connecting animated background circuit lines */}
        <svg
          className="absolute inset-0 w-full h-full text-violet-500/10 dark:text-violet-500/15 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line x1="25%" y1="20%" x2="75%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Row 1: Monthly Spend & Upcoming Bill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 relative z-10">
          {/* Card A: Financial Telemetry (Violet Accent) */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-violet-500/20 bg-violet-50/30 dark:bg-[#12172a]/70 flex flex-col justify-between transition-all hover:border-violet-500/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b3c7] uppercase tracking-wider">
                Monthly Spending
              </span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Under Budget
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold font-mono-tech text-slate-900 dark:text-[#f8fafc]">
                ₹24,580
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                of ₹35,000 cap
              </span>
            </div>
            {/* Progress Bar (Violet to Cyan gradient) */}
            <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] h-1.5 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                style={{ width: "70.2%" }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-[10px] text-slate-500 dark:text-[#a8b3c7]">
              <span>Cycle: Sep 01 – Sep 30</span>
              <span className="font-mono-tech text-violet-600 dark:text-violet-400 font-medium">70.2% utilized</span>
            </div>
          </div>

          {/* Card B: Upcoming Bill Alert (Cyan Accent) */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-cyan-500/25 bg-cyan-50/30 dark:bg-cyan-950/15 flex flex-col justify-between transition-all hover:border-cyan-500/45">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc]">
                  Electricity Bill
                </span>
              </div>
              <span className="text-[10px] font-mono-tech font-semibold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                Due in 3 days
              </span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <div>
                <div className="text-lg font-bold font-mono-tech text-slate-900 dark:text-[#f8fafc]">
                  ₹2,850
                </div>
                <div className="text-[11px] text-slate-500 dark:text-[#a8b3c7]">
                  Consumer No: 0842-1982
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  <Calendar className="w-3 h-3 text-cyan-500" />
                  Due: Sep 14
                </span>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-cyan-500/15 flex items-center justify-between text-[10px] text-cyan-700 dark:text-cyan-300/90 font-mono-tech">
              <span>Auto-split across 4 members</span>
              <span>₹712.50 / member</span>
            </div>
          </div>
        </div>

        {/* Row 2: Expiring Groceries (Soft Pink) & Chores Progress (Violet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 relative z-10">
          {/* Card C: Expiring Grocery Warning (Soft Pink #EC4899) */}
          <div className="p-3.5 rounded-xl border border-[#ec4899]/25 bg-pink-50/30 dark:bg-pink-950/15 transition-all hover:border-[#ec4899]/45">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b3c7] uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#ec4899]" />
                Pantry Expiry Alert
              </span>
              <span className="text-[10px] font-mono-tech text-[#ec4899] font-semibold bg-[#ec4899]/10 px-1.5 py-0.5 rounded border border-[#ec4899]/20">
                Expires Tomorrow
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-[#f8fafc]">
                  Amul Whole Milk
                </div>
                <div className="text-[11px] text-slate-500 dark:text-[#a8b3c7]">
                  2 Liters remaining in Main Refrigerator
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono-tech text-[#ec4899] bg-[#ec4899]/10 px-2 py-1 rounded font-bold border border-[#ec4899]/20">
                  2.0 L
                </span>
              </div>
            </div>
          </div>

          {/* Card D: Household Tasks Progress (Violet-Cyan) */}
          <div className="p-3.5 rounded-xl border border-violet-500/20 bg-violet-50/30 dark:bg-[#12172a]/70 transition-all hover:border-violet-500/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b3c7] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8b5cf6]" />
                Household Chores
              </span>
              <span className="text-[10px] font-mono-tech text-[#8b5cf6] font-semibold bg-[#8b5cf6]/10 px-1.5 py-0.5 rounded border border-[#8b5cf6]/20">
                6 / 9 Completed
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mb-2">
              <div
                className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] h-1.5 rounded-full"
                style={{ width: "66.7%" }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
              <span className="truncate">Next: Clean RO Filter (Mihir)</span>
              <span className="text-[10px] font-mono-tech text-slate-400 dark:text-[#64748b] shrink-0 ml-2">
                Due Today
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: Appliance Telemetry */}
        <div className="p-3 rounded-xl border border-cyan-500/20 bg-cyan-50/20 dark:bg-[#0f1424]/70 flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc]">
                Daikin Inverter AC (Living Room)
              </div>
              <div className="text-[11px] text-slate-500 dark:text-[#a8b3c7]">
                Filter servicing cycle recommended · 14 months active warranty
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono-tech px-2 py-1 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 shrink-0">
            Warranty Active
          </span>
        </div>

        {/* Row 4: Glowing AI Assistant Insight Drawer */}
        <div className="p-3.5 rounded-xl border border-violet-500/30 bg-gradient-to-r from-violet-500/10 via-pink-500/5 to-cyan-500/10 shadow-[0_0_20px_rgba(139,92,246,0.12)] relative z-10">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#8b5cf6] to-[#ec4899] text-white flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(139,92,246,0.5)] mt-0.5">
              <Bot className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8b5cf6] dark:text-[#22d3ee] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />
                <span>DB-Grounded Assistant Insight</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-auto" />
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                “You have completed 6 of 9 chores today. Notice: Electricity bill of ₹2,850 is due in 3 days. Amul Whole Milk expires tomorrow—consider using it for cooking tonight.”
              </p>
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
