"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  Sparkles,
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  BookOpen,
  Award,
  Mail,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/links";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Home", href: "/#home", sectionId: "home", icon: Home, iconColor: "text-blue-500" },
  { label: "About", href: "/#about", sectionId: "about", icon: User, iconColor: "text-cyan-500" },
  { label: "Experience", href: "/#experience", sectionId: "experience", icon: Briefcase, iconColor: "text-emerald-500" },
  { label: "Projects", href: "/#projects", sectionId: "projects", icon: FolderGit2, iconColor: "text-violet-500" },
  { label: "Skills", href: "/#skills", sectionId: "skills", icon: Cpu, iconColor: "text-amber-500" },
  { label: "Learning", href: "/#learning", sectionId: "learning", icon: BookOpen, iconColor: "text-pink-500" },
  { label: "Certifications", href: "/#certifications", sectionId: "certifications", icon: Award, iconColor: "text-orange-500" },
  { label: "Contact", href: "/#contact", sectionId: "contact", icon: Mail, iconColor: "text-indigo-500" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active section tracking on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // Header scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-56 z-40 flex-col justify-between p-4 border-r border-slate-200/80 dark:border-white/8 bg-[#f8fafc]/90 dark:bg-[#070a12]/90 backdrop-blur-md">
        <div className="space-y-6">
          {/* Identity */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none px-2 pt-1"
            aria-label="Mihir Shekhar Gupta — Home"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-[#4f7cff]/50 shadow-[0_0_14px_rgba(79,124,255,0.45)] group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/mihir-profile.jpg"
                alt={SITE_CONFIG.name}
                width={36}
                height={36}
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold tracking-tight text-slate-900 dark:text-[#f8fafc] truncate">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] font-mono-tech text-slate-500 dark:text-[#a8b3c7]">
                Engineering
              </span>
            </div>
          </Link>

          {/* Vertical Navigation Links */}
          <nav className="flex flex-col gap-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage && activeSection === item.sectionId;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl transition-colors duration-200 ${
                    isActive
                      ? "text-[#4f7cff] dark:text-[#4f7cff] font-semibold"
                      : "text-slate-600 dark:text-[#a8b0c0] hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4f7cff]/15 via-[#8b5cf6]/15 to-[#22d3ee]/10 border border-[#4f7cff]/30 shadow-[0_0_12px_rgba(79,124,255,0.18)] will-change-transform"
                      transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.5 }}
                    />
                  )}
                  <Icon
                    className={`w-3.5 h-3.5 relative z-10 shrink-0 ${item.iconColor}`}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions: Resume & Theme Toggle */}
        <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-200/80 dark:border-white/8">
          <Link
            href="/resume"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-slate-300/90 dark:border-white/12 hover:border-[#4f7cff] dark:hover:border-[#4f7cff] text-slate-800 dark:text-[#f8fafc] hover:text-[#4f7cff] dark:hover:text-[#4f7cff] bg-transparent hover:bg-[#4f7cff]/5 dark:hover:bg-[#4f7cff]/10 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#4f7cff]" aria-hidden="true" />
            <span>Resume</span>
          </Link>
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile / Tablet Top Header */}
      <header className="lg:hidden sticky top-2 sm:top-4 z-40 w-full px-3 sm:px-6 transition-all duration-300">
        <div className="max-w-5xl mx-auto">
          <div
            className={`h-13 sm:h-14 px-3 sm:px-4 rounded-full flex items-center justify-between border transition-all duration-300 ${
              scrolled
                ? "bg-[#f8fafc]/90 dark:bg-[#070a12]/90 backdrop-blur-md border-[#4f7cff]/25 dark:border-white/12 shadow-[0_8px_30px_rgba(79,124,255,0.12)]"
                : "bg-[#f8fafc]/80 dark:bg-[#070a12]/80 backdrop-blur-md border-slate-200/90 dark:border-white/8 shadow-2xs"
            }`}
          >
            {/* Mobile Identity */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none shrink-0"
              aria-label="Mihir Shekhar Gupta — Home"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-[#4f7cff]/50 shadow-[0_0_14px_rgba(79,124,255,0.45)] group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/images/mihir-profile.jpg"
                  alt={SITE_CONFIG.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover object-[50%_20%]"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-semibold tracking-tight text-slate-900 dark:text-[#f8fafc]">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-mono-tech text-slate-500 dark:text-[#a8b3c7]">
                  Engineering
                </span>
              </div>
            </Link>

            {/* Actions: Resume, Theme Toggle, Mobile Trigger */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border border-slate-300/90 dark:border-white/12 hover:border-[#4f7cff] dark:hover:border-[#4f7cff] text-slate-800 dark:text-[#f8fafc] hover:text-[#4f7cff] dark:hover:text-[#4f7cff] bg-transparent hover:bg-[#4f7cff]/5 dark:hover:bg-[#4f7cff]/10 hover:shadow-[0_0_12px_rgba(79,124,255,0.22)] transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#4f7cff]" aria-hidden="true" />
                <span>Resume</span>
              </Link>

              <ThemeToggle />

              {/* Mobile hamburger menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-slate-600 dark:text-[#a8b0c0] hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4f7cff] cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Menu className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-50 bg-black/60 backdrop-blur-xs lg:hidden flex justify-center px-4 pt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ y: -10, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-md bg-white dark:bg-[#0c1120] border border-slate-200 dark:border-white/12 rounded-2xl p-5 shadow-2xl space-y-4 self-start"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile Navigation"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/8">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b3c7] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#4f7cff]" />
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-mono-tech text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                >
                  Close ✕
                </button>
              </div>

              <div className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-[#a8b3c7] hover:text-[#4f7cff] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/8 flex flex-col gap-2">
                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-xs font-medium rounded-lg bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white hover:border-[#4f7cff] border border-transparent transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#4f7cff]" />
                    <span>Resume Preview & Download</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-slate-600 dark:text-[#a8b3c7] hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  <span>All Projects & Case Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
