export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
}

export interface FocusArea {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface CricketLeadership {
  title: string;
  universityRole: string;
  districtDivisions: string[];
  narrative: string;
  qualities: string[];
}

export interface Profile {
  name: string;
  monogram: string;
  role: string;
  location: string;
  email: string;
  educationSummary: string;
  availability: string;
  eyebrow: string;
  headline: string;
  supportingText: string;
  summary: string;
  focusAreas: FocusArea[];
  cricketLeadership: CricketLeadership;
}

export interface TechChoice {
  tech: string;
  reason: string;
}

export interface EngineeringChallenge {
  title: string;
  problem: string;
  resolution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "AI & Computer Vision" | "Full-Stack Development";
  featured: boolean;
  technologies: string[];
  description: string;
  keyPoints: string[];
  conceptualArchitecture: string[];
  dualFlowArchitecture?: {
    restFlow: string[];
    socketFlow: string[];
  };
  repositoryUrl: string | null;
  liveDemoUrl: string | null;
  isRepoAvailable: boolean;
  isDemoAvailable: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    intendedUsers: string[];
    solution: string;
    systemArchitectureDescription: string;
    techChoices: TechChoice[];
    majorFeatures: string[];
    engineeringChallenges: EngineeringChallenge[];
    securityConsiderations: string[];
    futureImprovements: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  domain: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  program: string;
  period: string;
  description: string;
  topics: string[];
}
