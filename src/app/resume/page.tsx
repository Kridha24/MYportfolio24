import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/links";
import { PROFILE_DATA } from "@/data/profile";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PROJECTS_DATA } from "@/data/projects";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/education";
import {
  ArrowLeft,
  Download,
  FileText,
  ExternalLink,
  MapPin,
  Linkedin,
  Code2,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Mihir Shekhar Gupta",
  description:
    "Preview and download the official resume of Mihir Shekhar Gupta — Aspiring Software Engineer & AI/ML Enthusiast.",
};

export default function ResumePage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0] hover:text-[#2563eb] dark:hover:text-[#5b8cff] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Header & Primary Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-[#2563eb] dark:text-[#5b8cff] font-semibold">
                Curriculum Vitae
              </span>
              <span className="text-xs font-mono-tech text-slate-400 dark:text-slate-500">•</span>
              <span className="text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                Official Document
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#f5f7fa]">
              {SITE_CONFIG.name} — Resume
            </h1>
            <p className="text-sm text-slate-600 dark:text-[#a8b0c0] mt-1">
              B.Tech in Computer Science & Engineering • Aspiring Software Engineer & AI/ML Enthusiast
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={SITE_CONFIG.resumePath}
              download={SITE_CONFIG.resumeFileName}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-sm active:scale-[0.99] w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={SITE_CONFIG.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Raw PDF</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Interactive PDF Viewer & Accessible Structured Document */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Embedded PDF Viewer */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h2 className="text-sm font-mono-tech uppercase font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>Document Viewer</span>
              </h2>
              <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 truncate max-w-full sm:max-w-xs">
                {SITE_CONFIG.resumeFileName}
              </span>
            </div>

            <div className="relative w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 overflow-hidden aspect-[1/1.3] shadow-md">
              <object
                data={`${SITE_CONFIG.resumePath}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
                aria-label="Mihir Shekhar Gupta Resume PDF Viewer"
              >
                {/* Fallback if browser does not support inline PDF object */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                  <FileText className="w-12 h-12 text-slate-400" />
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
                      Inline PDF preview is not supported by your browser.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      You can download or view the resume directly:
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      href={SITE_CONFIG.resumePath}
                      download={SITE_CONFIG.resumeFileName}
                      variant="primary"
                      size="sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </Button>
                    <Button
                      href={SITE_CONFIG.resumePath}
                      external
                      variant="outline"
                      size="sm"
                    >
                      <span>Open in New Tab</span>
                    </Button>
                  </div>
                </div>
              </object>
            </div>

            <p className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 break-words">
              * Document filename verified on download:{" "}
              <code className="text-blue-600 dark:text-blue-400 font-semibold break-all">
                {SITE_CONFIG.resumeFileName}
              </code>
            </p>
          </div>

          {/* Right Column: Accessible Document Layout (HTML Version matching the PDF) */}
          <div className="lg:col-span-5 space-y-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8 shadow-2xs">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                Accessible Document Outline
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Text Representation
              </h2>
            </div>

            {/* Contact Details Bar */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 space-y-2 text-xs font-mono-tech">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <a href={SOCIAL_LINKS.email.mailto} className="hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Linkedin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a
                  href={SOCIAL_LINKS.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LeetCode (kridha_ms_24)
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono-tech uppercase font-bold text-slate-900 dark:text-slate-100 tracking-wider">
                Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Aspiring Software Developer and B.Tech CSE student with hands-on experience in
                Python Full-Stack Development and foundational AI/ML. Proven ability to engineer
                scalable web ecosystems and computer vision pipelines. Possesses strong
                problem-solving capabilities, technical grounding, and leadership skills.
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono-tech uppercase font-bold text-slate-900 dark:text-slate-100 tracking-wider">
                Work Experiences & Internships
              </h3>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1 text-xs sm:text-sm">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {exp.role} | {exp.company}
                  </div>
                  <div className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono-tech uppercase font-bold text-slate-900 dark:text-slate-100 tracking-wider">
                Technical Projects
              </h3>
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="space-y-1 text-xs sm:text-sm">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {p.title} – {p.subtitle}
                  </div>
                  <div className="text-xs font-mono-tech text-blue-600 dark:text-blue-400">
                    Tech Stack: {p.technologies.join(", ")}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono-tech uppercase font-bold text-slate-900 dark:text-slate-100 tracking-wider">
                Education & Certifications
              </h3>
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="space-y-0.5 text-xs sm:text-sm">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300">{edu.degree}</div>
                  <div className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                    {edu.period} • {edu.location}
                  </div>
                </div>
              ))}

              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="space-y-0.5 text-xs sm:text-sm pt-2">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {cert.title}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    {cert.program} • {cert.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-mono-tech uppercase font-bold text-slate-900 dark:text-slate-100 tracking-wider">
                Extracurricular Activities & Leadership
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Cricket Leadership:</strong> Served as Vice-Captain for the University
                Cricket Team, leading strategy and training regimens. Played for Kaimur District
                Cricket Association across U14, U16, and U19 divisions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
