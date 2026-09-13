"use client";

import React, { useState } from "react";
import {
  Truck,
  MessageSquare,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Building2,
  Store,
  Sparkles,
} from "lucide-react";

export function BuildeaseVisual() {
  const [activeRole, setActiveRole] = useState<"contractor" | "owner" | "vendor">("contractor");

  return (
    <div className="w-full rounded-2xl border border-slate-200/90 dark:border-white/10 bg-[#0c101a] overflow-hidden shadow-xl select-none group/visual transition-all duration-300">
      {/* Workspace Header & Role Switcher */}
      <div className="px-4 py-3 bg-[#111728] border-b border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#4f7cff] shadow-[0_0_8px_rgba(79,124,255,0.8)]" />
          <span className="text-xs font-mono-tech font-bold text-white tracking-wide">
            BUILDEASE // WORKSPACE 08
          </span>
          <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono-tech">
            Collaboration Workflow Illustration
          </span>
        </div>

        {/* Role-Based Switcher */}
        <div className="flex items-center gap-1 bg-[#070a12] p-1 rounded-lg border border-white/8 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveRole("owner")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-all cursor-pointer ${
              activeRole === "owner"
                ? "bg-amber-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Owner
          </button>
          <button
            type="button"
            onClick={() => setActiveRole("contractor")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-all cursor-pointer ${
              activeRole === "contractor"
                ? "bg-[#4f7cff] text-white font-bold shadow-[0_0_12px_rgba(79,124,255,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Contractor (Active)
          </button>
          <button
            type="button"
            onClick={() => setActiveRole("vendor")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-all cursor-pointer ${
              activeRole === "vendor"
                ? "bg-violet-500 text-white font-bold shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Vendor
          </button>
        </div>
      </div>

      {/* Tri-Party Connected Workflow Visualizer (Owner -> Contractor -> Vendor) */}
      <div className="px-4 py-3 bg-[#0a0e19] border-b border-white/6">
        <div className="flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-wider text-slate-400 mb-2">
          <span>Tri-Party RBAC State Machine</span>
          <span className="text-[#4f7cff]">Multi-Tier Collaboration Channel</span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
          {/* Node 1: Owner */}
          <div
            onClick={() => setActiveRole("owner")}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col items-center text-center ${
              activeRole === "owner"
                ? "border-amber-500/60 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                : "border-white/8 bg-[#121826]/70 hover:border-white/20"
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-1">
              <Users className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white">Client / Owner</span>
            <span className="text-[10px] font-mono-tech text-amber-400/80">Funds & Approvals</span>
          </div>

          {/* Node 2: Contractor */}
          <div
            onClick={() => setActiveRole("contractor")}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col items-center text-center ${
              activeRole === "contractor"
                ? "border-blue-500/60 bg-blue-500/10 shadow-[0_0_15px_rgba(79,124,255,0.25)]"
                : "border-white/8 bg-[#121826]/70 hover:border-white/20"
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[#4f7cff] mb-1">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white">General Contractor</span>
            <span className="text-[10px] font-mono-tech text-blue-400/80">Execution & Orders</span>
          </div>

          {/* Node 3: Vendor */}
          <div
            onClick={() => setActiveRole("vendor")}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col items-center text-center ${
              activeRole === "vendor"
                ? "border-violet-500/60 bg-violet-500/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                : "border-white/8 bg-[#121826]/70 hover:border-white/20"
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-1">
              <Store className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white">Material Vendor</span>
            <span className="text-[10px] font-mono-tech text-violet-400/80">Delivery & Dispatch</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/* Left: Procurement Workflow Pipeline (7 cols) */}
        <div className="sm:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 uppercase">
            <span>Procurement Pipeline</span>
            <span className="text-[#4f7cff] font-semibold">RBAC Verified</span>
          </div>

          <div className="space-y-2">
            {/* Item 1 */}
            <div className="p-2.5 rounded-xl bg-[#121826] border border-white/8 flex items-center justify-between text-xs transition-transform duration-200 group-hover/visual:translate-x-0.5">
              <div>
                <div className="font-semibold text-slate-200">PO-4891: Structural TMT Steel</div>
                <div className="text-[10px] font-mono-tech text-slate-400">Vendor: Apex Metals Ltd</div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono-tech">
                <CheckCircle className="w-3 h-3" />
                Approved
              </span>
            </div>

            {/* Item 2 */}
            <div className="p-2.5 rounded-xl bg-[#121826] border border-blue-500/30 bg-blue-500/5 flex items-center justify-between text-xs transition-transform duration-200 group-hover/visual:translate-x-0.5 shadow-xs">
              <div>
                <div className="font-semibold text-white">PO-4892: UltraTech Cement (400 Bags)</div>
                <div className="text-[10px] font-mono-tech text-cyan-300">Vendor: BuildHub Supplies</div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-950/90 text-[#22d3ee] border border-blue-500/40 text-[10px] font-mono-tech">
                <Truck className="w-3 h-3" />
                In Transit
              </span>
            </div>

            {/* Item 3 */}
            <div className="p-2.5 rounded-xl bg-[#121826] border border-white/8 flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-slate-200">PO-4893: Electrical Conduits & Wiring</div>
                <div className="text-[10px] font-mono-tech text-slate-400">Vendor: Prime Power Corp</div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/80 text-amber-400 border border-amber-500/30 text-[10px] font-mono-tech">
                <Clock className="w-3 h-3" />
                Pending Review
              </span>
            </div>
          </div>
        </div>

        {/* Right: Milestone Progress & Real-Time Socket.IO Channel (5 cols) */}
        <div className="sm:col-span-5 flex flex-col justify-between space-y-3">
          {/* Milestone Status Card */}
          <div className="p-3.5 rounded-xl bg-[#121826] border border-white/8 space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono-tech">
              <span className="text-slate-400">Foundation Phase</span>
              <span className="text-emerald-400 font-bold">85% Complete</span>
            </div>

            {/* Progress bar with glowing active marker */}
            <div className="relative w-full h-2 rounded-full bg-[#070a12] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-[#4f7cff] to-cyan-400 transition-all duration-500"
                style={{ width: "85%" }}
              />
              <div
                className="absolute top-0 bottom-0 w-2 bg-white rounded-full blur-[2px] shadow-[0_0_8px_#fff]"
                style={{ left: "84%" }}
              />
            </div>

            <div className="text-[10px] font-mono-tech text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Next Milestone: Column reinforcement inspection</span>
            </div>
          </div>

          {/* Project Socket.IO Stream snippet */}
          <div className="p-3 rounded-xl bg-[#070a12] border border-white/8 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-slate-400">
              <MessageSquare className="w-3 h-3 text-cyan-400" />
              <span className="text-slate-300">Project Activity Feed</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-auto animate-pulse" />
            </div>
            <div className="p-2 rounded-lg bg-[#121826] border border-white/6 text-[11px] text-slate-300 leading-tight">
              <span className="font-semibold text-white block mb-0.5">Vendor (BuildHub):</span>
              Consignment #4892 dispatched from warehouse. Vehicle tracking active.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Multi-Tier Architecture Badge */}
      <div className="px-4 py-2.5 bg-[#070a12] border-t border-white/8 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech text-slate-400">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          JWT + Parameterized PostgreSQL Queries
        </span>
        <span className="text-[#4f7cff] font-semibold">Socket.IO Event Stream</span>
      </div>

      {/* Accessible Illustrative Note */}
      <div className="px-4 py-1.5 bg-[#070a12] border-t border-white/5 text-center text-[10px] font-mono-tech text-slate-400 dark:text-slate-500">
        Interface values are illustrative and do not represent production metrics.
      </div>
    </div>
  );
}
