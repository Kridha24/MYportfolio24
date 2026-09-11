import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/links";
import { Mail, Linkedin, Code2, Github, MapPin, Sparkles, Lock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800/80" aria-label="Contact and Communication">
      <Container>
        <SectionHeading
          eyebrow="06 // Communication"
          title="Let’s build something meaningful."
          description="Open to Software Development Engineer, Full-Stack, Backend, and AI/ML internship opportunities. Get in touch directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct channels left column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6 space-y-6 shadow-2xs">
              <div className="space-y-1">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Direct Channels
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Ready to collaborate
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  I typically respond within 24 hours. Email is the fastest channel for technical
                  inquiries and internship discussions.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase">
                  <Mail className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Direct Email</span>
                </div>
                <div className="font-mono-tech text-sm font-semibold text-slate-900 dark:text-slate-100 break-all">
                  {SITE_CONFIG.email}
                </div>
                <div className="pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    href={SOCIAL_LINKS.email.mailto}
                    className="w-full justify-center"
                  >
                    <span>Send via Email Client</span>
                  </Button>
                </div>
              </div>

              {/* Profiles list */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Professional Profiles:
                </div>

                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 bg-slate-50/50 dark:bg-slate-950/40 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400 group-hover:text-blue-500 transition-colors">
                    /in/mihir-shekhar-gupta
                  </span>
                </a>

                {/* LeetCode */}
                <a
                  href={SOCIAL_LINKS.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/60 bg-slate-50/50 dark:bg-slate-950/40 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group"
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
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 bg-slate-50/50 dark:bg-slate-950/40 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </span>
                  </a>
                ) : (
                  <div
                    className="flex items-center justify-between p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-950/20 text-xs font-mono-tech text-slate-400 dark:text-slate-500 cursor-not-allowed select-none"
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

              <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Form right column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
