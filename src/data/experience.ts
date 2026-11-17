import { ExperienceItem } from "@/types/portfolio";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "3skills-aiml",
    role: "AI/ML Virtual Intern",
    company: "3Skills",
    type: "Virtual Internship",
    period: "Jan – Mar 2026",
    location: "Remote",
    responsibilities: [
      "Built Python/scikit-learn machine-learning workflows from raw data to evaluation; performed exploratory analysis, cleaned missing/inconsistent values and engineered numerical/categorical features with Pandas and NumPy.",
      "Trained and validated models, inspected prediction errors, and iterated on preprocessing and evaluation to understand failure cases and document reproducible findings.",
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: "agastyaan-fullstack",
    role: "Full-Stack Developer Intern",
    company: "Agastyaan Technology",
    type: "Internship",
    period: "Jun – Jul 2025",
    location: "On-site / Hybrid",
    responsibilities: [
      "Developed and integrated application features using Python, JavaScript, PostgreSQL and REST APIs; designed relational data operations and implemented end-to-end CRUD workflows.",
      "Traced and fixed issues across UI, backend endpoints and database queries; tested data flow, debugged integration problems and used Git for iterative development.",
    ],
    technologies: ["Python", "JavaScript", "PostgreSQL", "REST APIs", "Git"],
  },
];
