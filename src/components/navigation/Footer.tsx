import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/links";
import { ArrowUp, Linkedin, Code2, Mail, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/8 py-8 transition-colors">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Attribution */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-[#4f7cff]/40 shrink-0">
              <Image
                src="/images/mihir-profile.jpg"
                alt={SITE_CONFIG.name}
                width={28}
                height={28}
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
            <div className="text-xs text-slate-600 dark:text-[#a8b0c0]">
              <span className="font-semibold text-slate-900 dark:text-[#f5f7fa]">
                Designed and engineered by {SITE_CONFIG.name}.
              </span>
              <span className="block text-[11px] text-slate-500 dark:text-[#808a9d]">
                © {currentYear} • All rights reserved.
              </span>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-[#a8b0c0] hover:text-[#2563eb] dark:hover:text-[#5b8cff] hover:bg-slate-100 dark:hover:bg-[#0f1420] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_LINKS.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-[#a8b0c0] hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-[#0f1420] transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_LINKS.email.mailto}
                className="p-2 rounded-lg text-slate-500 dark:text-[#a8b0c0] hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-[#0f1420] transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {SOCIAL_LINKS.github.isAvailable && SOCIAL_LINKS.github.url ? (
                <a
                  href={SOCIAL_LINKS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 dark:text-[#a8b0c0] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0f1420] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="p-2 rounded-lg text-slate-400 dark:text-[#6b778d] cursor-not-allowed opacity-50"
                  title="GitHub profile URL pending"
                >
                  <Github className="w-4 h-4" />
                </span>
              )}
            </div>

            <span className="h-4 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true" />

            <a
              href="#home"
              className="inline-flex items-center gap-1 text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] hover:text-[#2563eb] dark:hover:text-[#5b8cff] transition-colors"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
