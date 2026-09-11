# Mihir Shekhar Gupta — Developer Portfolio & Technical Architecture

> **AI & Full-Stack Developer** • B.Tech Computer Science & Engineering, I.K. Gujral Punjab Technical University (2023–Present)  
> Bhabua, Bihar, India • [mihirshekhar887@gmail.com](mailto:mihirshekhar887@gmail.com) • [LinkedIn](https://www.linkedin.com/in/mihir-shekhar-gupta-83309a2b1/) • [LeetCode](https://leetcode.com/u/kridha_ms_24/)

---

## Overview

This repository houses the production-ready developer portfolio and engineering case studies for **Mihir Shekhar Gupta**. The portfolio is built using an **Intelligent Engineering Interface** design language—dark-first with deep navy/charcoal hues, electric blue and cyan technical accents, high-precision typography (Geist Sans & Geist Mono), and responsive interactive system dashboards.

### Core Objectives
- Positions Mihir as a high-caliber early-career engineer proficient in **computer vision (OpenCV, YOLOv8)**, **asynchronous backend APIs (FastAPI, Express.js)**, **relational & document data persistence (PostgreSQL, MongoDB)**, and **modular full-stack architectures (React, Next.js, TypeScript)**.
- Delivers in-depth, honest technical case studies for **TRAFFIQ** (AI traffic management) and **BuildEase** (construction procurement & real-time messaging) without fabricated benchmarks or vanity metrics.
- Adheres to **WCAG 2.2 AA accessibility standards** (keyboard navigation, high-contrast ratios, skip-to-content links, semantic heading hierarchy, and zero unassisted layout shifts).

---

## Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15+ / 16 App Router (React 19, TypeScript strict mode) |
| **Styling** | Tailwind CSS v4, PostCSS, Custom CSS Variables |
| **Design System** | Accessible custom primitives (Buttons, Badges, Cards, Responsive Drawers) |
| **Animation & Icons** | Motion for React, Lucide React |
| **Forms & Validation**| React Hook Form, Zod schema validation (client + server), Honeypot spam defense |
| **Typography** | `next/font/google` with Geist Sans & Geist Mono |
| **Observability** | `@vercel/analytics`, `@vercel/speed-insights` |
| **Testing** | Vitest, React Testing Library, jsdom, Playwright E2E |

---

## Project Structure

```
├── public/
│   └── resume/
│       └── Mihir_Shekhar_Gupta_Resume.pdf    # Verified official resume PDF
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/route.ts              # Server-validated contact API with rate limiting
│   │   ├── projects/
│   │   │   ├── page.tsx                      # Projects index & case study directory
│   │   │   ├── traffiq/page.tsx              # Deep case study: TRAFFIQ
│   │   │   └── buildease/page.tsx            # Deep case study: BuildEase
│   │   ├── resume/
│   │   │   └── page.tsx                      # Resume preview & forced download page
│   │   ├── globals.css                       # Tailwind v4 theme tokens & tech grid
│   │   ├── icon.tsx                          # Dynamic favicon generator
│   │   ├── layout.tsx                        # Root layout with JSON-LD & font optimization
│   │   ├── not-found.tsx                     # Technical 404 handler
│   │   ├── opengraph-image.tsx               # Dynamic high-resolution OpenGraph preview
│   │   ├── page.tsx                          # Responsive homepage assembling all sections
│   │   ├── robots.ts                         # Dynamic robots.txt
│   │   └── sitemap.ts                        # Dynamic sitemap index
│   ├── components/
│   │   ├── contact/
│   │   │   └── ContactForm.tsx               # Zod-validated contact form
│   │   ├── hero/
│   │   │   └── SystemTelemetryDashboard.tsx  # Live CCTV/YOLOv8/signal simulation
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx                    # Header with active section observer
│   │   │   └── Footer.tsx                    # Footer with verified links & tech credits
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx               # Cards with conceptual pipeline previews
│   │   ├── sections/                         # Hero, About, Experience, Projects, Skills, Education, Contact
│   │   └── ui/                               # Badge, Button, Container, ThemeToggle, SectionHeading
│   ├── data/
│   │   ├── education.ts                      # Degree, Cybersecurity bootcamp & leadership
│   │   ├── experience.ts                     # Internships: Agastyaan Technology, 3Skills
│   │   ├── links.ts                          # Centralized links with TODO(MIHIR) placeholders
│   │   ├── profile.ts                        # Bio, 4 focus areas & athletic leadership
│   │   ├── projects.ts                       # Complete specifications for TRAFFIQ & BuildEase
│   │   └── skills.ts                         # 7 categorized engineering domains
│   ├── lib/
│   │   └── contact-schema.ts                 # Shared Zod validation schema
│   └── types/
│       └── portfolio.ts                      # Strict TypeScript interfaces
├── tests/
│   ├── e2e/
│   │   └── smoke.spec.ts                     # Playwright multi-viewport smoke tests
│   ├── unit/
│   │   ├── contact-form.test.tsx             # Form validation & honeypot tests
│   │   ├── navigation.test.tsx               # Navbar & mobile menu tests
│   │   ├── projects.test.tsx                 # Architecture preview & link safety tests
│   │   ├── resume.test.tsx                   # Download attributes & accessible outline tests
│   │   └── theme-toggle.test.tsx             # Dark/light theme toggle tests
│   └── setup.ts                              # JSDom and matchMedia mocks
├── .env.example                              # Environment configuration template
├── package.json
└── tsconfig.json
```

---

## Local Setup & Development

### 1. Prerequisites
- **Node.js**: v20.18.0 or later
- **npm**: v10.0.0 or later

### 2. Installation
```bash
git clone <repository-url> portfolio
cd portfolio
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for OG tags & sitemap | `https://portfolio-mihir-shekhar-gupta.vercel.app` |
| `CONTACT_WEBHOOK_URL` | Optional external webhook (Slack/Discord/Zapier) | `""` (mock local response) |

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Quality & Verification Commands

All quality gates must pass before deploying to production:

```bash
# 1. Type Checking
npm run typecheck

# 2. Linting
npm run lint

# 3. Unit & Integration Tests (Vitest)
npm run test

# 4. Playwright End-to-End Tests
npm run test:e2e

# 5. Production Build
npm run build
```

---

## Content Editing Guide

All portfolio content is decoupled into strongly-typed data files in `src/data/`:

1. **Social & Repository URLs**: Edit `src/data/links.ts`
   - Search for `TODO(MIHIR)` to find all placeholders.
   - Set `isAvailable: true` and add URLs for GitHub, TRAFFIQ repository, or live deployments.
2. **Profile & Focus Areas**: Edit `src/data/profile.ts`
3. **Projects & Case Studies**: Edit `src/data/projects.ts`
4. **Internships & Experience**: Edit `src/data/experience.ts`
5. **Technical Skills (7 Domains)**: Edit `src/data/skills.ts`
6. **Education & Certifications**: Edit `src/data/education.ts`

---

## Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<username>/portfolio.git
   git push -u origin main
   ```
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset: **Next.js**
4. Root Directory: `./`
5. Set Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g. `https://mihirgupta.dev`)
   - `CONTACT_WEBHOOK_URL`: (Optional) Webhook for contact form forwarding
6. Deploy!

### Pre-Deployment Checklist
- [x] All unit tests passing (`npm run test`)
- [x] Zero TypeScript errors (`npm run typecheck`)
- [x] Zero ESLint warnings (`npm run lint`)
- [x] Production build passes cleanly (`npm run build`)
- [x] Resume PDF verified at `public/resume/Mihir_Shekhar_Gupta_Resume.pdf`
- [x] Dynamic OG image and favicon validated
- [x] Contact form honeypot and rate limiting enabled
