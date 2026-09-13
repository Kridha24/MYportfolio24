import React from "react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/links";
import { PROFILE_DATA } from "@/data/profile";
import { Mail, Linkedin, Code2, Github, MapPin, Lock, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 border-t border-slate-200/80 dark:border-white/8"
      aria-label="Contact and Communication"
    >
      <Container>
        {/* Section Heading with Exact Copy */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-[#2563eb] dark:bg-[#5b8cff]" aria-hidden="true" />
            <span className="text-xs font-mono-tech tracking-wider uppercase text-[#2563eb] dark:text-[#5b8cff] font-semibold">
              CONTACT // 06
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#f5f7fa]">
            Have an opportunity or an idea? Let’s talk.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
            I’m open to software engineering, full-stack, backend, and AI/ML opportunities where I can learn, contribute, and build meaningful products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels, Availability, Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] p-6 sm:p-8 space-y-6 shadow-2xs">
              {/* Availability Status */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
                  <span>{PROFILE_DATA.availability}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-[#f5f7fa]">
                  Direct Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  Feel free to reach out directly via email or professional profiles. I usually respond within 24 hours.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-white/8 bg-slate-50 dark:bg-[#0f1420] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] uppercase">
                  <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-[#67e8f9]" />
                  <span>Direct Email</span>
                </div>
                <div className="font-mono-tech text-sm font-semibold text-slate-900 dark:text-[#f5f7fa] break-all">
                  {SITE_CONFIG.email}
                </div>
                <div className="pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    href={SOCIAL_LINKS.email.mailto}
                    className="w-full justify-center"
                  >
                    <span>Launch Default Email Client</span>
                  </Button>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                  Verified Profiles:
                </div>

                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#2563eb]/50 dark:hover:border-[#5b8cff]/40 bg-slate-50/50 dark:bg-[#0f1420]/60 text-sm font-medium text-slate-800 dark:text-[#f5f7fa] hover:text-[#2563eb] dark:hover:text-[#5b8cff] transition-colors group"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#2563eb] dark:text-[#5b8cff]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563eb] dark:group-hover:text-[#5b8cff] transition-colors" />
                </a>

                {/* LeetCode */}
                <a
                  href={SOCIAL_LINKS.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-white/8 hover:border-amber-500/50 bg-slate-50/50 dark:bg-[#0f1420]/60 text-sm font-medium text-slate-800 dark:text-[#f5f7fa] hover:text-amber-600 dark:hover:text-amber-400 transition-colors group"
                >
                  <span className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-amber-500" />
                    <span>LeetCode Profile</span>
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400 group-hover:text-amber-500 transition-colors">
                    kridha_ms_24
                  </span>
                </a>

                {/* GitHub (Placeholder) */}
                {SOCIAL_LINKS.github.isAvailable && SOCIAL_LINKS.github.url ? (
                  <a
                    href={SOCIAL_LINKS.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-white/8 hover:border-[#2563eb]/50 bg-slate-50/50 dark:bg-[#0f1420]/60 text-sm font-medium text-slate-800 dark:text-[#f5f7fa] hover:text-[#2563eb] dark:hover:text-[#5b8cff] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                ) : (
                  <div
                    className="flex items-center justify-between p-3 rounded-xl border border-dashed border-slate-300 dark:border-white/10 bg-slate-100/40 dark:bg-[#0f1420]/30 text-xs font-mono-tech text-slate-400 dark:text-[#6b778d] cursor-not-allowed select-none"
                    title="GitHub handle pending addition"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400" />
                      <span>GitHub</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Lock className="w-3 h-3" />
                      URL Pending
                    </span>
                  </div>
                )}
              </div>

              {/* Location Signal */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-[#67e8f9]" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
