/**
 * Centralized links configuration for Mihir Shekhar Gupta's portfolio.
 * 
 * Rules:
 * - Unsupplied URLs are explicitly assigned null or empty strings.
 * - Every unresolved value is tagged with a searchable TODO(MIHIR) comment.
 * - Components must check `isAvailable` flags before rendering active anchors.
 */

export const SOCIAL_LINKS = {
  // TODO(MIHIR): Provide official GitHub profile URL once available.
  github: {
    url: null as string | null,
    label: "GitHub",
    handle: "Pending handle",
    isAvailable: false,
    placeholderText: "GitHub profile URL pending",
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
  role: "AI & Full-Stack Developer",
  email: "mihirshekhar887@gmail.com",
  location: "Bhabua, Bihar, India",
  // TODO(MIHIR): Replace with final custom production domain (e.g., https://mihirgupta.dev)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-mihir-shekhar-gupta.vercel.app",
  resumePath: "/resume/Mihir_Shekhar_Gupta_Resume.pdf",
  resumeFileName: "Mihir_Shekhar_Gupta_Resume.pdf",
};
