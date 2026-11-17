import { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    domain: "Languages",
    description: "Core programming and scripting languages for systems, web, and data.",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    domain: "Frontend",
    description: "Component architectures, reactive interfaces, and responsive styling.",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    domain: "Backend",
    description: "Asynchronous APIs, microservices, and server-side runtime environments.",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    domain: "AI/ML & Computer Vision",
    description: "Model inference pipelines, entity resolution, graph RAG, and data processing.",
    skills: [
      "scikit-learn",
      "Pandas",
      "NumPy",
      "FAISS",
      "LightGBM",
      "Neo4j",
      "Cypher",
      "Graph RAG",
      "Ollama",
      "Gemini API",
      "pytest",
      "OpenCV",
      "YOLOv8",
    ],
  },
  {
    domain: "Databases & Real-Time",
    description: "Relational persistence, ORM, caching, job queues, and bi-directional streaming.",
    skills: ["PostgreSQL", "Prisma", "Redis", "BullMQ", "Socket.IO", "MongoDB"],
  },
  {
    domain: "Tools",
    description: "Version control, containerization, cloud infrastructure, and Unix terminal environments.",
    skills: ["Git", "GitHub", "Docker", "Kubernetes", "AWS", "Linux", "Kali Linux", "VS Code"],
  },
  {
    domain: "Computer Science Fundamentals",
    description: "Theoretical foundations governing performant and reliable engineering.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks",
    ],
  },
];
