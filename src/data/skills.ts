import { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    domain: "Languages",
    description: "Core programming and scripting languages for systems, web, and data.",
    skills: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    domain: "Frontend",
    description: "Component architectures, reactive interfaces, and responsive styling.",
    skills: ["React.js", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    domain: "Backend",
    description: "Asynchronous APIs, microservices, and server-side runtime environments.",
    skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"],
  },
  {
    domain: "AI/ML & Computer Vision",
    description: "Model inference pipelines, dynamic image masking, and data processing.",
    skills: ["OpenCV", "YOLOv8", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    domain: "Databases & Real-Time",
    description: "Relational persistence, document storage, and bi-directional streaming.",
    skills: ["PostgreSQL", "MongoDB", "Socket.IO", "RTSP Streams"],
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
