"use client";

import React, { useState } from "react";
import {
  Layers,
  Cpu,
  Shield,
  Server,
  Terminal,
  Users,
  CreditCard,
  ShoppingBag,
  Wrench,
  Pill,
  CheckSquare,
  Bot,
} from "lucide-react";

export function HomemindArchitectureVisual() {
  const [activeTab, setActiveTab] = useState<"ecosystem" | "system" | "tenant">("ecosystem");
  const [focusedModule, setFocusedModule] = useState<string>("assistant");

  const ECOSYSTEM_MODULES = [
    {
      id: "finance",
      title: "Expenses & Budgets",
      icon: CreditCard,
      color: "#8b5cf6",
      bg: "bg-violet-500/10 text-[#8b5cf6] border-violet-500/30",
      accent: "text-[#8b5cf6]",
      summary: "Unified expense and income tracking, monthly budget caps, and upcoming bill reminders.",
      schema: "Model: Expense, Income, Budget, Bill",
    },
    {
      id: "grocery",
      title: "Grocery & Pantry",
      icon: ShoppingBag,
      color: "#22d3ee",
      bg: "bg-cyan-500/10 text-[#22d3ee] border-cyan-500/30",
      accent: "text-[#22d3ee]",
      summary: "Dynamic quantity management, low-stock threshold triggers, and expiry date warnings.",
      schema: "Model: GroceryItem, StockAlert",
    },
    {
      id: "appliances",
      title: "Home Appliances",
      icon: Wrench,
      color: "#f59e0b",
      bg: "bg-amber-500/10 text-[#f59e0b] border-amber-500/30",
      accent: "text-[#f59e0b]",
      summary: "Warranty expiration countdowns, serial number registry, and maintenance servicing history.",
      schema: "Model: Appliance, ServiceLog",
    },
    {
      id: "medicines",
      title: "Family Medicine",
      icon: Pill,
      color: "#ec4899",
      bg: "bg-pink-500/10 text-[#ec4899] border-pink-500/30",
      accent: "text-[#ec4899]",
      summary: "Prescription schedules, pill counts, dosage directions, and member intake verification.",
      schema: "Model: Medicine, IntakeRecord",
    },
    {
      id: "tasks",
      title: "Household Chores",
      icon: CheckSquare,
      color: "#10b981",
      bg: "bg-emerald-500/10 text-[#10b981] border-emerald-500/30",
      accent: "text-[#10b981]",
      summary: "Shared domestic responsibilities with priority tags (LOW to URGENT) and member assignment.",
      schema: "Model: HouseholdTask, TaskMember",
    },
    {
      id: "assistant",
      title: "Schema-Grounded AI",
      icon: Bot,
      color: "#4f7cff",
      bg: "bg-blue-500/10 text-[#4f7cff] border-blue-500/30",
      accent: "text-[#4f7cff]",
      summary: "Natural language assistant grounded in Prisma database records and structured schema context.",
      schema: "Service: FastAPI + DB Context Builder",
    },
  ];

  const selectedMod = ECOSYSTEM_MODULES.find((m) => m.id === focusedModule) || ECOSYSTEM_MODULES[5];

  return (
    <div className="w-full rounded-2xl border border-violet-500/25 dark:border-white/10 bg-slate-50/50 dark:bg-[#0c1120]/80 backdrop-blur-md overflow-hidden shadow-xl">
      {/* Tab Switcher Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-violet-500/15 dark:border-white/8 bg-white/75 dark:bg-[#0f1424]/90">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#8b5cf6]" />
          <span className="text-xs font-mono-tech font-semibold text-slate-900 dark:text-[#f8fafc] uppercase tracking-wider">
            Architecture Blueprint &amp; Ecosystem
          </span>
        </div>

        <div className="inline-flex p-1 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/40 dark:border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab("ecosystem")}
            className={`px-3 py-1 text-xs font-mono-tech rounded-md transition-all ${
              activeTab === "ecosystem"
                ? "bg-white dark:bg-[#1a233a] text-[#8b5cf6] shadow-xs font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Ecosystem Diagram
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("system")}
            className={`px-3 py-1 text-xs font-mono-tech rounded-md transition-all ${
              activeTab === "system"
                ? "bg-white dark:bg-[#1a233a] text-[#8b5cf6] shadow-xs font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Multi-Service Flow
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tenant")}
            className={`px-3 py-1 text-xs font-mono-tech rounded-md transition-all ${
              activeTab === "tenant"
                ? "bg-white dark:bg-[#1a233a] text-[#8b5cf6] shadow-xs font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Tenant Isolation
          </button>
        </div>
      </div>

      {/* Tab 1: Animated Household Ecosystem Diagram */}
      {activeTab === "ecosystem" && (
        <div className="p-5 sm:p-7 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono-tech text-[#8b5cf6] uppercase tracking-wider font-bold">
                Interactive Household Ecosystem
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Six Domain Modules Orbiting Shared Household Context
              </h4>
            </div>
            <span className="text-[11px] font-mono-tech px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
              Interactive Hover &amp; Keyboard Focus
            </span>
          </div>

          {/* Ecosystem Visual Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 7 cols: Hexagonal / Star Grid with Central Workspace */}
            <div className="lg:col-span-7 relative p-4 rounded-2xl border border-violet-500/20 bg-white/80 dark:bg-[#0f1424]/90 overflow-hidden">
              {/* Animated pulse background lines */}
              <svg
                className="absolute inset-0 w-full h-full text-violet-500/20 dark:text-violet-500/25 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50%" cy="50%" r="35%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Module Buttons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                {ECOSYSTEM_MODULES.map((mod) => {
                  const Icon = mod.icon;
                  const isSelected = mod.id === focusedModule;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onMouseEnter={() => setFocusedModule(mod.id)}
                      onFocus={() => setFocusedModule(mod.id)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? `${mod.bg} ring-2 ring-offset-1 ring-violet-500 scale-[1.03] shadow-md`
                          : "border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#121828]/80 hover:border-violet-400/50"
                      }`}
                      aria-label={`${mod.title} module: ${mod.summary}`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${mod.color}20`, color: mod.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        )}
                      </div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">
                        {mod.title}
                      </div>
                      <div className="text-[10px] font-mono-tech text-slate-400 mt-0.5 truncate">
                        {mod.schema.split(":")[0]}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Central Core Hub Pill */}
              <div className="mt-4 p-2.5 rounded-xl border border-violet-500/30 bg-gradient-to-r from-violet-500/10 via-cyan-500/5 to-pink-500/10 flex items-center justify-between text-xs font-mono-tech">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#8b5cf6]" />
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Central Household Context
                  </span>
                </div>
                <span className="text-[10px] text-violet-600 dark:text-violet-300">
                  householdId Scope Active
                </span>
              </div>
            </div>

            {/* Right 5 cols: Interactive Detail Drawer & Static Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl border border-violet-500/30 bg-white dark:bg-[#0f1424] shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: selectedMod.color }}
                  >
                    <selectedMod.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {selectedMod.title}
                    </h5>
                    <div className="text-[11px] font-mono-tech text-slate-400">
                      {selectedMod.schema}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#cbd5e1] leading-relaxed">
                  {selectedMod.summary}
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-white/6 text-[10px] font-mono-tech text-slate-500 flex items-center justify-between">
                  <span>Data Isolation: Mandatory Tenant Scoping</span>
                  <span className="text-emerald-500 font-semibold">Schema-Grounded</span>
                </div>
              </div>

              {/* Static Accessible Description */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-100/50 dark:bg-white/5 text-xs text-slate-600 dark:text-[#a8b3c7] leading-relaxed">
                <strong>Accessible Specification:</strong> HomeMind AI binds every transaction, pantry item, appliance warranty, prescription dosage, and chore to a single shared household context. All six modules share tenant credentials, allowing the AI assistant to synthesize multi-domain household insights.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Multi-Service Architecture Flow */}
      {activeTab === "system" && (
        <div className="p-5 sm:p-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* 1. Client Tier */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826]/80 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-tech text-[#8b5cf6] uppercase font-bold tracking-wider">
                  Client Tier
                </span>
                <span className="text-[10px] font-mono-tech text-slate-400">Port 3000</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-[#f8fafc] flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#8b5cf6]" />
                  <span>React 18 + Vite SPA</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-[#a8b3c7] mt-1 leading-relaxed">
                  TypeScript client with Zustand auth store, TanStack Query caching, and Recharts telemetry graphs.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono-tech text-slate-600 dark:text-slate-300">
                Protocols: HTTPS REST &amp; Socket.IO
              </div>
            </div>

            {/* 2. Core API Tier */}
            <div className="p-4 rounded-xl border border-violet-500/30 bg-violet-50/20 dark:bg-[#121826]/80 flex flex-col justify-between space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-tech text-[#22d3ee] uppercase font-bold tracking-wider">
                  Core Backend Tier
                </span>
                <span className="text-[10px] font-mono-tech text-slate-400">Port 5001</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-[#f8fafc] flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-[#22d3ee]" />
                  <span>Node.js + Express + Prisma</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-[#a8b3c7] mt-1 leading-relaxed">
                  JWT verification, household scoping middleware, RBAC enforcement, DB-grounded context compilation, and streaming PDFKit exporter.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono-tech text-emerald-600 dark:text-emerald-400 font-semibold">
                State: Household-Scoped Controller Tier
              </div>
            </div>

            {/* 3. AI Service Tier */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-[#121826]/80 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-tech text-[#ec4899] uppercase font-bold tracking-wider">
                  AI Intelligence Tier
                </span>
                <span className="text-[10px] font-mono-tech text-slate-400">Port 8000</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-[#f8fafc] flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#ec4899]" />
                  <span>FastAPI + Python AI Microservice</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-[#a8b3c7] mt-1 leading-relaxed">
                  Dedicated service for database-grounded conversational agent, OCR ingestion endpoints, and polynomial consumption forecasting.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono-tech text-slate-600 dark:text-slate-300">
                Network: Isolated Docker Network
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Tenant Isolation */}
      {activeTab === "tenant" && (
        <div className="p-5 sm:p-7 space-y-4">
          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-600 dark:text-emerald-400 font-bold uppercase">
              <Shield className="w-4 h-4" />
              Tenant Scoping Invariant
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1] leading-relaxed">
              Every Prisma database model carries a mandatory <code className="font-mono-tech text-[11px] bg-white dark:bg-black/40 px-1 py-0.5 rounded">householdId</code> column. Controller handlers query exclusively via scoped filters (<code className="font-mono-tech text-[11px] bg-white dark:bg-black/40 px-1 py-0.5 rounded">where: &#123; householdId &#125;</code>), guaranteeing zero cross-tenant leakage.
            </p>
          </div>
        </div>
      )}

      {/* Accessible Illustrative Note */}
      <div className="px-5 py-2 border-t border-violet-500/10 dark:border-white/6 bg-white/40 dark:bg-black/20 text-center text-[10px] font-mono-tech text-slate-400 dark:text-slate-500">
        Interface values are illustrative and do not represent production metrics.
      </div>
    </div>
  );
}
