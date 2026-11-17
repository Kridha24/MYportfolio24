import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/links";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070a12" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Mihir Shekhar Gupta | Aspiring Software Engineer & AI/ML Enthusiast",
    template: "%s | Mihir Shekhar Gupta",
  },
  description:
    "Portfolio of Mihir Shekhar Gupta — Aspiring Software Engineer & AI/ML Enthusiast. Building reliable, type-safe, and maintainable full-stack applications, backend systems, and computer vision pipelines.",
  keywords: [
    "Mihir Shekhar Gupta",
    "Software Engineer",
    "AI/ML",
    "Full-Stack Developer",
    "Computer Vision",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "YOLOv8",
    "OpenCV",
    "PostgreSQL",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    title: "Mihir Shekhar Gupta | Aspiring Software Engineer & AI/ML Enthusiast",
    description:
      "Computer Science undergraduate focused on building reliable, type-safe, and maintainable software across full-stack development, backend systems, and computer vision.",
    siteName: "Mihir Shekhar Gupta Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mihir Shekhar Gupta — Aspiring Software Engineer & AI/ML Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Shekhar Gupta | Aspiring Software Engineer & AI/ML Enthusiast",
    description:
      "Computer Science undergraduate focused on building reliable, type-safe, and maintainable software across full-stack development, backend systems, and computer vision.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.role,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.siteUrl,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "I.K. Gujral Punjab Technical University",
    },
    sameAs: [
      SOCIAL_LINKS.github.url,
      SOCIAL_LINKS.linkedin.url,
      SOCIAL_LINKS.leetcode.url,
    ].filter(Boolean),
    knowsAbout: [
      "Computer Vision",
      "Artificial Intelligence",
      "Full-Stack Development",
      "Python",
      "FastAPI",
      "React.js",
      "Next.js",
      "YOLOv8",
      "PostgreSQL",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mihir Shekhar Gupta Portfolio",
    url: SITE_CONFIG.siteUrl,
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col tech-grid-bg transition-colors duration-200 relative`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        {/* Subtle global atmospheric glow orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4f7cff]/6 dark:bg-[#4f7cff]/10 blur-[120px] animate-mesh-drift" />
          <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-[#8b5cf6]/5 dark:bg-[#8b5cf6]/8 blur-[130px] animate-mesh-drift" style={{ animationDelay: "-7s" }} />
          <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-[#22d3ee]/4 dark:bg-[#22d3ee]/6 blur-[110px] animate-mesh-drift" style={{ animationDelay: "-14s" }} />
        </div>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative z-10 flex flex-col min-h-screen lg:pl-56">
            <Navbar />
            <main id="main-content" className="flex-1 focus:outline-none">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
