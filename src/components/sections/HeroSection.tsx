"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { PROFILE_DATA } from "@/data/profile";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/links";
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Code2,
  Mail,
  GraduationCap,
  Briefcase,
  Cpu,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop || isReducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroRef.current.style.setProperty("--mouse-x", `${x.toFixed(2)}%`);
    heroRef.current.style.setProperty("--mouse-y", `${y.toFixed(2)}%`);
  };

  const shouldAnimate = !isReducedMotion;

  // Credibility signals icons map
  const getCredibilityIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-3.5 h-3.5 text-[#3b66ff] dark:text-[#4f7cff] shrink-0" />;
      case "Briefcase":
        return <Briefcase className="w-3.5 h-3.5 text-cyan-600 dark:text-[#22d3ee] shrink-0" />;
      case "Cpu":
        return <Cpu className="w-3.5 h-3.5 text-violet-600 dark:text-[#8b5cf6] shrink-0" />;
      case "Trophy":
      default:
        return <Trophy className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />;
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Desktop subtle cursor spotlight (disabled on mobile or reduced motion) */}
      {isDesktop && !isReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-50 dark:opacity-70 z-0"
          style={{
            background: `radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(79, 124, 255, 0.07), rgba(139, 92, 246, 0.03) 40%, transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Atmospheric ambient glow orb */}
      <div
        className="absolute top-1/4 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#4f7cff]/8 dark:bg-[#4f7cff]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ================================================================= */}
          {/* LEFT COLUMN: Strict Visual Hierarchy Sequence                     */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left max-w-full lg:max-w-2xl">
            {/* 1. Introductory Eyebrow: "Hi, I’m" */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 8 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span
                className="h-px w-5 bg-gradient-to-r from-[#4f7cff] to-[#8b5cf6]"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-mono-tech tracking-wider uppercase text-slate-500 dark:text-[#a8b0c0] font-semibold">
                {PROFILE_DATA.heroGreeting || "Hi, I’m"}
              </span>
            </motion.div>

            {/* 2. Primary Heading: "Mihir Shekhar Gupta" (Main <h1> and largest text) */}
            <motion.h1
              initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-[#f8fafc] leading-[1.08] mb-3.5"
            >
              Mihir Shekhar{" "}
              <span className="bg-gradient-to-r from-[#4f7cff] via-[#8b5cf6] to-[#22d3ee] bg-clip-text text-transparent">
                Gupta
              </span>
            </motion.h1>

            {/* 3. Professional Title: "Aspiring Software Engineer & AI/ML Enthusiast" */}
            <motion.h2
              initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 dark:text-[#e2e8f0] leading-snug mb-4"
            >
              Aspiring{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f7cff] via-[#22d3ee] to-[#8b5cf6] animate-shimmer-pan">
                Software Engineer
              </span>{" "}
              &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6]">
                AI/ML
              </span>{" "}
              Enthusiast
            </motion.h2>

            {/* 4. Short Value Proposition / Description (2-3 lines desktop) */}
            <motion.p
              initial={shouldAnimate ? { opacity: 0, y: 8 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-[#a8b0c0] leading-relaxed max-w-2xl mb-5"
            >
              {PROFILE_DATA.heroDescription ||
                "I build reliable full-stack applications, backend systems, and AI-powered solutions that address practical problems through thoughtful architecture, secure implementation, and maintainable code."}
            </motion.p>

            {/* 5. Availability Status Badge */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, scale: 0.96 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 shadow-2xs mb-6"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 ${
                    shouldAnimate ? "animate-ping" : ""
                  }`}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-tight">
                {PROFILE_DATA.availability}
              </span>
            </motion.div>

            {/* 6. Primary Actions (CTA Buttons) */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 8 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                className="h-11 sm:h-12 justify-center shadow-[0_0_20px_rgba(79,124,255,0.25)] hover:shadow-[0_0_28px_rgba(79,124,255,0.4)]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                href={SITE_CONFIG.resumePath}
                download={SITE_CONFIG.resumeFileName}
                variant="outline"
                size="lg"
                className="h-11 sm:h-12 justify-center border-slate-300 dark:border-white/12 hover:border-[#4f7cff] hover:bg-[#4f7cff]/5 dark:hover:bg-[#4f7cff]/10"
                aria-label={`Download ${SITE_CONFIG.name}'s resume PDF`}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </motion.div>

            {/* 7. Clean Social Profiles Row */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7"
              aria-label="Social and coding profiles"
            >
              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0c1120]/80 text-xs font-medium text-slate-700 dark:text-[#f8fafc] hover:text-[#4f7cff] dark:hover:text-[#4f7cff] hover:border-[#4f7cff]/40 dark:hover:border-[#4f7cff]/40 hover:shadow-[0_0_12px_rgba(79,124,255,0.2)] focus-visible:ring-2 focus-visible:ring-[#4f7cff] transition-all"
                aria-label="LinkedIn profile of Mihir Shekhar Gupta"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#4f7cff]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              {SOCIAL_LINKS.github.isAvailable && SOCIAL_LINKS.github.url && (
                <a
                  href={SOCIAL_LINKS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0c1120]/80 text-xs font-medium text-slate-700 dark:text-[#f8fafc] hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] focus-visible:ring-2 focus-visible:ring-slate-400 transition-all"
                  aria-label="GitHub profile of Mihir Shekhar Gupta"
                >
                  <Github className="w-3.5 h-3.5 text-slate-800 dark:text-white" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}

              {/* LeetCode */}
              <a
                href={SOCIAL_LINKS.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0c1120]/80 text-xs font-medium text-slate-700 dark:text-[#f8fafc] hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/40 dark:hover:border-amber-500/40 hover:shadow-[0_0_12px_rgba(245,158,11,0.2)] focus-visible:ring-2 focus-visible:ring-amber-400 transition-all"
                aria-label="LeetCode profile of Mihir Shekhar Gupta"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                <span>
                  LeetCode{" "}
                  <span className="hidden sm:inline text-slate-400 dark:text-[#a8b0c0] font-mono-tech text-[10px]">
                    (kridha_ms_24)
                  </span>
                </span>
              </a>

              {/* Email Direct */}
              <a
                href={SOCIAL_LINKS.email.mailto}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0c1120]/80 text-xs font-medium text-slate-700 dark:text-[#f8fafc] hover:text-[#22d3ee] dark:hover:text-[#22d3ee] hover:border-[#22d3ee]/40 dark:hover:border-[#22d3ee]/40 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] focus-visible:ring-2 focus-visible:ring-[#22d3ee] transition-all"
                aria-label="Send direct email to Mihir Shekhar Gupta"
              >
                <Mail className="w-3.5 h-3.5 text-[#22d3ee]" aria-hidden="true" />
                <span>Email</span>
              </a>
            </motion.div>

            {/* Mobile Visual Placement: ordered between social links and credibility strip on screens < lg */}
            <div className="w-full lg:hidden my-6 flex justify-center">
              <HeroVisual />
            </div>

            {/* 8. Supporting Credibility Strip */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 6 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7, ease: "easeOut" }}
              className="w-full pt-5 border-t border-slate-200/80 dark:border-white/8"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {(PROFILE_DATA.credibilityStrip || []).map((item) => (
                  <div
                    key={item.label}
                    className="p-2.5 sm:p-3 rounded-xl border border-slate-200/80 dark:border-white/8 bg-white/70 dark:bg-[#0e1422]/70 backdrop-blur-xs flex items-center gap-2.5 transition-colors hover:border-[#4f7cff]/30"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/8 shrink-0">
                      {getCredibilityIcon(item.iconName)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 dark:text-[#f5f7fa] truncate leading-tight">
                        {item.label}
                      </div>
                      {item.detail && (
                        <div className="text-[10px] font-mono-tech text-slate-500 dark:text-[#a8b0c0] truncate leading-tight mt-0.5">
                          {item.detail}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN (Desktop): Refined MSG Engineering Visual            */}
          {/* ================================================================= */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, scale: 0.96 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-5 justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="hidden sm:flex justify-center mt-10 lg:mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-[11px] font-mono-tech text-slate-400 dark:text-[#64748b] hover:text-[#4f7cff] dark:hover:text-[#4f7cff] transition-colors focus-visible:ring-2 focus-visible:ring-[#4f7cff] rounded-md px-2 py-1"
            aria-label="Scroll down to About section"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
}
