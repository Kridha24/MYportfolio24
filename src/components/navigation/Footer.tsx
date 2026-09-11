import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/links";
import { ArrowUp, Linkedin, Code2, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-[#070b12]/60 py-12 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono-tech font-bold text-xs">
                {SITE_CONFIG.monogram}
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-100 text-base">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              AI & Full-Stack Developer specializing in real-time computer vision systems,
              modular web architectures, and high-performance backend pipelines.
            </p>
            <p className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
              Based in {SITE_CONFIG.location}
            </p>
          </div>

          {/* Direct Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Mihir
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  All Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Profiles & Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Code2 className="w-4 h-4 text-amber-500" />
                  <span>LeetCode</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.email.mailto}
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-500" />
                  <span>Email Direct</span>
                </a>
              </li>
              <li>
                {SOCIAL_LINKS.github.isAvailable && SOCIAL_LINKS.github.url ? (
                  <a
                    href={SOCIAL_LINKS.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 text-slate-400 dark:text-slate-500 cursor-not-allowed text-xs font-mono-tech"
                    title="GitHub profile URL pending addition"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub (URL Pending)</span>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with Next.js 16, TypeScript &
            Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              Open to Opportunities
            </span>
            <a
              href="#home"
              className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
