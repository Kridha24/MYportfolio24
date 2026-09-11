import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SystemTelemetryDashboard } from "@/components/hero/SystemTelemetryDashboard";
import { PROFILE_DATA } from "@/data/profile";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/links";
import {
  ArrowRight,
  Download,
  Linkedin,
  Code2,
  Mail,
  Github,
  MapPin,
  GraduationCap,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden"
      aria-label="Introduction and Overview"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Supporting Text, CTAs, Links */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability & Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
                {PROFILE_DATA.availability}
              </span>
              <span className="text-xs font-mono-tech text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                {PROFILE_DATA.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.15]">
              {PROFILE_DATA.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PROFILE_DATA.supportingText}
            </p>

            {/* Quick Context Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 font-mono-tech pt-1">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                B.Tech CSE, IKGPTU (2023–Present)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-500" />
                {PROFILE_DATA.location}
              </span>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#projects" variant="primary" size="lg">
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                href={SITE_CONFIG.resumePath}
                download={SITE_CONFIG.resumeFileName}
                variant="outline"
                size="lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>

            {/* Social & Coding Profiles */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <span className="block text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Verified Profiles & Channels
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-2xs"
                  aria-label="LinkedIn profile of Mihir Shekhar Gupta"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                </a>

                {/* LeetCode */}
                <a
                  href={SOCIAL_LINKS.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400 dark:hover:border-amber-500 transition-colors shadow-2xs"
                  aria-label="LeetCode profile of Mihir Shekhar Gupta"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode (kridha_ms_24)</span>
                </a>

                {/* Email Direct */}
                <a
                  href={SOCIAL_LINKS.email.mailto}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors shadow-2xs"
                  aria-label="Send direct email to Mihir Shekhar Gupta"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Email</span>
                </a>

                {/* GitHub (Placeholder with explicit disabled state & tooltip) */}
                {SOCIAL_LINKS.github.isAvailable && SOCIAL_LINKS.github.url ? (
                  <a
                    href={SOCIAL_LINKS.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-900/40 text-xs font-mono-tech text-slate-400 dark:text-slate-500 cursor-not-allowed select-none"
                    title="GitHub handle will be linked once finalized"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-400" />
                    <span>GitHub (URL Pending)</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Telemetry Interface */}
          <div className="lg:col-span-5 flex justify-center">
            <SystemTelemetryDashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}
