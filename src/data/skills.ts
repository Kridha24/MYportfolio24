import { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    domain: "Languages",
    description: "Core programming and scripting languages used across frontend, backend, and data scripting.",
    skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    domain: "Frontend",
    description: "Modern UI component libraries, build tooling, and design systems.",
    skills: ["React.js", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    domain: "Backend",
    description: "Asynchronous servers, microservices, routing, and REST architectural standards.",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    domain: "AI, ML & Computer Vision",
    description: "Machine learning workflows, model evaluation, and computer vision stream processing.",
    skills: ["OpenCV", "YOLOv8", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    domain: "Databases & Real-Time",
    description: "Relational persistence, document storage, WebSocket streaming, and video protocol ingest.",
    skills: ["PostgreSQL", "MongoDB", "Socket.IO", "RTSP"],
  },
  {
    domain: "Tools & Platforms",
    description: "Version control, development environments, and Unix operating environments.",
    skills: ["Git", "Linux", "Kali Linux"],
  },
  {
    domain: "Computer Science",
    description: "Academic and theoretical grounding governing high-performance and resilient engineering.",
    skills: [
      "Data Structures and Algorithms",
      "OOP (Object-Oriented Programming)",
      "Operating Systems",
      "DBMS (Database Management Systems)",
      "Computer Networks",
    ],
  },
];
