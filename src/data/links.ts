/**
 * Centralized links configuration for Mihir Shekhar Gupta's portfolio.
 * 
 * Rules:
 * - Unsupplied URLs are explicitly assigned null or empty strings.
 * - Every unresolved value is tagged with a searchable TODO(MIHIR) comment.
 * - Components must check `isAvailable` flags before rendering active anchors.
 */

export const SOCIAL_LINKS = {
  github: {
    url: "https://github.com/Kridha24",
    label: "GitHub",
    handle: "Kridha24",
    isAvailable: true,
  },
  linkedin: {
    url: "https://www.linkedin.com/in/mihir-shekhar-gupta-83309a2b1/",
    label: "LinkedIn",
    handle: "mihir-shekhar-gupta",
    isAvailable: true,
  },
  leetcode: {
    url: "https://leetcode.com/u/kridha_ms_24/",
    label: "LeetCode",
    handle: "kridha_ms_24",
    isAvailable: true,
  },
  email: {
    address: "mihirshekhar887@gmail.com",
    mailto: "mailto:mihirshekhar887@gmail.com",
    label: "Email",
    isAvailable: true,
  },
};

export const PROJECT_LINKS = {
  homemind: {
    repositoryUrl: "https://github.com/Kridha24/HomeMind-AI",
    isRepoAvailable: true,
    liveDemoUrl: null as string | null,
    isDemoAvailable: false,
    caseStudyUrl: "/projects/homemind-ai",
  },
  financeController: {
    repositoryUrl: "https://github.com/Kridha24/razorpay-ai-finance-controller",
    isRepoAvailable: true,
    liveDemoUrl: null as string | null,
    isDemoAvailable: false,
    caseStudyUrl: "/projects/ai-finance-controller",
  },
  traffiq: {
    // TODO(MIHIR): Provide public repository URL for TRAFFIQ if open-sourced.
    repositoryUrl: null as string | null,
    isRepoAvailable: false,
    // TODO(MIHIR): Provide live demo URL for TRAFFIQ if deployed on a public IP/domain.
    liveDemoUrl: null as string | null,
    isDemoAvailable: false,
    caseStudyUrl: "/projects/traffiq",
  },
  buildease: {
    // TODO(MIHIR): Provide public repository URL for BuildEase if open-sourced.
    repositoryUrl: null as string | null,
    isRepoAvailable: false,
    // TODO(MIHIR): Provide live demo URL for BuildEase if deployed on a public host.
    liveDemoUrl: null as string | null,
    isDemoAvailable: false,
    caseStudyUrl: "/projects/buildease",
  },
};

export const SITE_CONFIG = {
  name: "Mihir Shekhar Gupta",
  shortName: "Mihir Gupta",
  monogram: "MSG",
  role: "Aspiring Software Engineer & AI/ML Enthusiast",
  email: "mihirshekhar887@gmail.com",
  location: "Mohali, Punjab, India",
  // TODO(MIHIR): Replace with final custom production domain (e.g., https://mihirgupta.dev)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-mihir-shekhar-gupta.vercel.app",
  resumePath: "/resume/Mihir_Shekhar_Gupta_Resume.pdf",
  resumeFileName: "Mihir_Shekhar_Gupta_Resume.pdf",
};
