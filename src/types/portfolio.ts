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

export interface ProfileHighlight {
  label: string;
  detail: string;
  iconName: string;
}

export interface EngineeringPhilosophyStep {
  number: string;
  title: string;
  description: string;
}

export interface CompetencyDomain {
  title: string;
  description: string;
  accent: "blue" | "violet" | "cyan" | "emerald";
  skills: string[];
}

export interface ProjectJourneyItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
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
  heroGreeting?: string;
  headline: string;
  supportingText: string;
  heroDescription?: string;
  credibilityStrip?: {
    label: string;
    detail?: string;
    iconName: string;
  }[];
  summary: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutStatement: string;
  aboutNarrative: string[];
  profileHighlights: ProfileHighlight[];
  engineeringPhilosophy: EngineeringPhilosophyStep[];
  competencies: CompetencyDomain[];
  currentFocus: string[];
  projectJourney: ProjectJourneyItem[];
  leadershipBeyondCode: {
    title: string;
    narrative: string[];
  };
  personalTraits: string[];
  aboutCta: {
    text: string;
    exploreHref: string;
    resumeHref: string;
  };
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
  category:
    | "Full-Stack SaaS · AI-Assisted Household Management"
    | "FinTech · AI-Assisted Automation"
    | "AI & Computer Vision"
    | "Full-Stack Development"
    | string;
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

export type ProficiencyLevel = "Core" | "Hands-On" | "Foundational" | "Currently Learning";

export interface ProficiencyLegendItem {
  level: ProficiencyLevel;
  definition: string;
  accent: string;
}

export interface ContainersOrchestrationItem {
  name: string;
  status: ProficiencyLevel;
  description: string;
  supportingExperience: string[];
  connectedProjects?: string[];
  concepts?: string[];
}

export interface AWSServiceItem {
  name: string;
  statusLabel: string;
  description: string;
}

export interface AWSServiceGroup {
  category: "Compute" | "Storage" | "Databases" | "Networking" | "Security" | "Deployment";
  services: AWSServiceItem[];
}

export interface DevOpsToolCategory {
  category: string;
  iconName: string;
  tools: {
    name: string;
    level: ProficiencyLevel;
    note?: string;
  }[];
}

export interface DeploymentPipelineStep {
  step: string;
  name: string;
  description: string;
  details: string;
  accent: string;
}

export interface TestingQualityTool {
  tool: string;
  purpose: string;
  verifiedContext: string;
}

export interface SecurityPracticeItem {
  practice: string;
  category: string;
  implementationContext: string;
}

export interface ObservabilityItem {
  topic: string;
  description: string;
  status: "Learning & Applying" | "Implemented";
}

export interface RoadmapMilestone {
  step: number;
  title: string;
  status: "Completed" | "In Progress" | "Next Milestone" | "Learning" | "Learning & Applying" | "Target";
  evidenceNote: string;
}

export type LearningStatus =
  | "Core"
  | "Hands-On"
  | "Learning & Applying"
  | "Currently Learning"
  | "Practising Consistently"
  | "Exploring"
  | "Currently Learning & Building";

export interface LearningTopic {
  title: string;
  description: string;
  concepts: string[];
}

export interface LearningTrack {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  status: LearningStatus;
  accent: {
    badge: string;
    border: string;
    glow: string;
    text: string;
  };
  topics: LearningTopic[];
  currentFocus: string[];
  projectLinks?: {
    name: string;
    href: string;
  }[];
}

export interface RagStage {
  id: string;
  stepNumber: number;
  title: string;
  phase: "Knowledge Base" | "Ingestion Pipeline" | "Vector Retrieval" | "Grounded Generation";
  description: string;
  tooltip: string;
  details: string[];
}

export interface ArchitectureLayerNode {
  name: string;
  category?: string;
  description?: string;
  status?: LearningStatus;
  isDetailedOnly?: boolean;
}

export interface ArchitectureLayer {
  id: string;
  layerNumber: number;
  name: string;
  subtitle: string;
  accent: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    glow: string;
  };
  simpleSummary: string;
  detailedSummary: string;
  simpleNodes: string[];
  detailedGroups: {
    groupTitle: string;
    nodes: ArchitectureLayerNode[];
  }[];
}

export interface SystemAlignmentExplanation {
  id: string;
  fromTo: string;
  title: string;
  description: string;
}

export interface ProjectApplicationConnection {
  id: string;
  title: string;
  category: string;
  href: string;
  highlights: string[];
}

