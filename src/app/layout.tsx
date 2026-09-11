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
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Mihir Shekhar Gupta | AI & Full-Stack Developer",
    template: "%s | Mihir Shekhar Gupta",
  },
  description:
    "Portfolio of Mihir Shekhar Gupta, a Computer Science undergraduate building AI-powered, computer-vision, and full-stack applications.",
  keywords: [
    "Mihir Shekhar Gupta",
    "AI Developer",
    "Full-Stack Developer",
    "Computer Vision",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "YOLOv8",
    "OpenCV",
    "Software Engineer",
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
    title: "Mihir Shekhar Gupta | AI & Full-Stack Developer",
    description:
      "Computer Science undergraduate building AI-powered, computer-vision, and full-stack applications with a focus on performance, security, and practical impact.",
    siteName: "Mihir Shekhar Gupta Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mihir Shekhar Gupta — AI & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Shekhar Gupta | AI & Full-Stack Developer",
    description:
      "Computer Science undergraduate building AI-powered, computer-vision, and full-stack applications.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col tech-grid-bg transition-colors duration-200`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
