"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/links";

const NAV_ITEMS = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
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

  // Close mobile menu on route change or ESC key
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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none"
          aria-label="Mihir Shekhar Gupta — Home"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 dark:bg-blue-600 flex items-center justify-center text-white font-mono-tech font-bold text-sm tracking-wider shadow-sm group-hover:bg-blue-700 transition-colors">
            {SITE_CONFIG.monogram}
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {SITE_CONFIG.name}
            </span>
            <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
              AI & Full-Stack
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800/70"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage && activeSection === item.sectionId;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 shadow-2xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Resume, Theme Toggle, Mobile Trigger */}
        <div className="flex items-center gap-2">
          <Link
            href="/resume"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Resume</span>
          </Link>

          <ThemeToggle />

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay & drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-slate-950/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav
            className="bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-500" />
                    Resume Preview & Download
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                >
                  <span>All Projects & Case Studies</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
