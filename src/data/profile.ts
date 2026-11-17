import { Profile } from "@/types/portfolio";

export const PROFILE_DATA: Profile = {
  name: "Mihir Shekhar Gupta",
  monogram: "MSG",
  role: "Aspiring Software Engineer & AI/ML Enthusiast",
  location: "Mohali, Punjab, India",
  email: "mihirshekhar887@gmail.com",
  educationSummary: "B.Tech in Computer Science & Engineering, I.K. Gujral Punjab Technical University (2023–2027)",
  availability: "Available for SDE, Full-Stack & AI/ML Opportunities",
  eyebrow: "Engineering Portfolio",
  heroGreeting: "Hi, I’m",
  headline: "Aspiring Software Engineer & AI/ML Enthusiast",
  supportingText:
    "Driven final-year B.Tech Computer Science student with 2 internships and hands-on experience in full-stack software engineering and AI/ML applications. Available from January 2027.",
  heroDescription:
    "I build reliable full-stack applications, backend systems, and AI-powered solutions that address practical problems through thoughtful architecture, secure implementation, and maintainable code.",
  credibilityStrip: [
    {
      label: "B.Tech CSE",
      detail: "IKGPTU (2023–2027)",
      iconName: "GraduationCap",
    },
    {
      label: "2 Internships",
      detail: "Agastyaan & 3Skills",
      iconName: "Briefcase",
    },
    {
      label: "AI + Full-Stack Projects",
      detail: "Vision & Web Systems",
      iconName: "Cpu",
    },
    {
      label: "University Cricket Vice-Captain",
      detail: "Leadership & Discipline",
      iconName: "Trophy",
    },
  ],
  summary:
    "A Computer Science undergraduate with hands-on experience designing full-stack web architectures, optimizing computer vision inference pipelines, and engineering robust backend systems. Committed to writing type-safe, resilient code and solving real-world challenges.",

  aboutEyebrow: "About Me",
  aboutHeading: "I turn ideas into intelligent, practical software.",
  aboutStatement:
    "I enjoy working where software engineering, backend systems, and artificial intelligence come together. My focus is not only on making applications work, but on making them structured, secure, understandable, and useful.",

  aboutNarrative: [
    "I’m Mihir Shekhar Gupta, a Computer Science and Engineering undergraduate and an aspiring Software Engineer with a growing focus on Artificial Intelligence and Machine Learning.",
    "My interest in technology goes beyond learning individual programming languages or frameworks. I enjoy understanding how complete systems work—from the user interface and API layer to databases, authentication, real-time communication, AI services, testing, and deployment.",
    "Through my internships in full-stack development and AI/ML, I have gained practical experience working with Python, JavaScript, TypeScript, React, Node.js, FastAPI, databases, data preprocessing, and machine-learning workflows. These experiences helped me understand how engineering decisions affect usability, maintainability, security, and overall product quality.",
    "I have applied these skills to projects across different problem domains. HomeMind AI explores multi-tenant household management and AI-assisted workflows. AI Finance Controller focuses on verification-first financial reconciliation, exception handling, secure webhooks, and human oversight. TRAFFIQ applies computer vision to traffic-density analysis, while BuildEase explores role-based collaboration and real-time communication in construction workflows.",
    "I approach projects as complete engineering problems rather than isolated coding exercises. I start by understanding the problem, identifying the intended users, breaking the system into clear components, choosing suitable technologies, and considering edge cases, security, testing, and future scalability.",
    "Alongside full-stack and AI/ML development, I’m developing a stronger understanding of how applications are packaged, deployed, monitored, and maintained. I have worked with Docker and Docker Compose for multi-service environments and am currently learning Kubernetes, AWS, CI/CD, cloud networking, and production observability.",
    "I’m currently deepening my knowledge of System Design, Backend Engineering, and Data Structures & Algorithms while exploring RAG and LangChain for context-aware AI applications. I’m interested in understanding how frontend experiences, backend services, data systems, AI pipelines, and cloud infrastructure work together to form reliable software products.",
    "Outside technology, cricket has played an important role in shaping how I work. Serving as Vice-Captain of my university cricket team and representing Kaimur District across U14, U16, and U19 levels taught me discipline, teamwork, consistency, decision-making under pressure, and the importance of continuous improvement.",
    "I’m currently strengthening my software engineering and AI/ML foundations while looking for opportunities where I can contribute to meaningful products, learn from experienced engineers, and grow through real-world challenges.",
  ],

  profileHighlights: [
    {
      label: "B.Tech CSE",
      detail: "I.K. Gujral Punjab Technical University",
      iconName: "GraduationCap",
    },
    {
      label: "Practical Experience",
      detail: "Full-Stack and AI/ML internships",
      iconName: "Briefcase",
    },
    {
      label: "Engineering Focus",
      detail: "Backend, full-stack, AI and computer vision",
      iconName: "Cpu",
    },
    {
      label: "Leadership",
      detail: "University Cricket Vice-Captain",
      iconName: "Trophy",
    },
  ],

  engineeringPhilosophy: [
    {
      number: "01",
      title: "Understand the Problem",
      description:
        "I begin by identifying the real user problem, constraints, expected outcome, and important edge cases.",
    },
    {
      number: "02",
      title: "Design the System",
      description:
        "I divide the solution into clear components and define how the frontend, backend, database, and external services should communicate.",
    },
    {
      number: "03",
      title: "Build Responsibly",
      description:
        "I consider validation, authentication, authorization, data isolation, failure handling, and maintainability during implementation.",
    },
    {
      number: "04",
      title: "Verify the Result",
      description:
        "I value testing, reproducible evaluation, honest reporting, and clearly documenting limitations instead of relying only on a successful demo.",
    },
  ],

  competencies: [
    {
      title: "Software Engineering",
      description:
        "Designing maintainable systems through clear architecture, reusable components, structured APIs, and reliable development practices.",
      accent: "blue",
      skills: ["Clean Architecture", "REST APIs", "TypeScript", "System Design"],
    },
    {
      title: "Full-Stack Products",
      description:
        "Building connected user experiences across frontend interfaces, backend services, databases, authentication, and deployment.",
      accent: "violet",
      skills: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "AI & Computer Vision",
      description:
        "Exploring practical AI/ML workflows involving structured data, intelligent assistance, forecasting, OCR, and visual detection.",
      accent: "cyan",
      skills: ["YOLOv8", "OpenCV", "Python", "FastAPI"],
    },
    {
      title: "Backend & Security",
      description:
        "Developing APIs with validation, authorization, tenant-aware data access, secure webhooks, rate limiting, and audit-oriented design.",
      accent: "emerald",
      skills: ["FastAPI", "Express.js", "PostgreSQL", "Prisma ORM"],
    },
  ],

  currentFocus: [
    "Strengthening Data Structures and Algorithms",
    "Designing scalable backend services",
    "Building secure full-stack applications",
    "Learning practical AI/ML system integration",
    "Improving testing and evaluation practices",
    "Understanding production deployment and observability",
  ],

  projectJourney: [
    {
      id: "homemind-ai",
      title: "HomeMind AI",
      description:
        "Multi-tenant architecture, household workflows, authentication, AI service integration",
      href: "/projects/homemind-ai",
      category: "Flagship Full-Stack Platform",
    },
    {
      id: "ai-finance-controller",
      title: "AI Finance Controller",
      description:
        "Financial reconciliation, evaluation, risk scoring, secure webhooks, human review",
      href: "/projects/ai-finance-controller",
      category: "FinTech & Automated Reconciliation",
    },
    {
      id: "traffiq",
      title: "TRAFFIQ",
      description:
        "Computer vision, video processing, vehicle detection, adaptive decision logic",
      href: "/projects/traffiq",
      category: "Computer Vision & Edge Pipeline",
    },
    {
      id: "buildease",
      title: "BuildEase",
      description:
        "Full-stack architecture, role-based access, procurement workflows, real-time messaging",
      href: "/projects/buildease",
      category: "Collaborative Web Platform",
    },
  ],

  leadershipBeyondCode: {
    title: "Leadership Beyond Code",
    narrative: [
      "Cricket has taught me lessons that directly influence how I approach engineering: prepare consistently, communicate clearly, stay composed under pressure, learn from failure, and take responsibility for the team’s outcome.",
      "As Vice-Captain of my university cricket team and a Kaimur District representative at U14, U16, and U19 levels, I learned that strong individual performance matters—but dependable teamwork creates lasting results.",
    ],
  },

  personalTraits: [
    "Curious",
    "Disciplined",
    "Collaborative",
    "Detail-oriented",
    "Consistent learner",
    "Calm under pressure",
  ],

  aboutCta: {
    text: "I’m looking for opportunities to learn, contribute, and build meaningful software with a strong engineering team.",
    exploreHref: "#projects",
    resumeHref: "/resume",
  },

  focusAreas: [
    {
      title: "Software Engineering",
      description:
        "Applying core algorithms, design patterns, and clean architecture principles to build reliable, maintainable systems.",
      iconName: "Code2",
      skills: ["Data Structures", "Algorithms", "OOP", "System Design"],
    },
    {
      title: "Full-Stack Development",
      description:
        "Building responsive, accessible web interfaces backed by type-safe APIs, structured state management, and modern workflows.",
      iconName: "Layers",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "AI & Computer Vision",
      description:
        "Engineering high-efficiency vision pipelines using YOLOv8 object detection, ROI masking, and video stream processing.",
      iconName: "Eye",
      skills: ["OpenCV", "YOLOv8", "Python", "NumPy", "Scikit-learn"],
    },
    {
      title: "Backend Systems",
      description:
        "Developing RESTful services and asynchronous microservices with normalized schemas, strict validation, and authentication.",
      iconName: "Server",
      skills: ["FastAPI", "Node.js", "Express.js", "PostgreSQL", "Socket.IO"],
    },
  ],
  cricketLeadership: {
    title: "Leadership & Athletic Discipline",
    universityRole: "Vice-Captain, University Cricket Team",
    districtDivisions: ["Under-14", "Under-16", "Under-19"],
    narrative:
      "Competitive cricket has been an essential crucible for developing mental discipline, cross-functional squad communication, and decisive leadership under high-pressure conditions. Representing Kaimur District across U14, U16, and U19 divisions and serving as University Cricket Vice-Captain taught me the value of structured preparation, accountability, and adaptive teamwork.",
    qualities: [
      "Composed decision-making during high-stakes scenarios",
      "Accountability, discipline, and consistent preparation",
      "Empathetic team leadership and squad mentorship",
      "Adaptive tactical execution based on in-match feedback",
    ],
  },
};
