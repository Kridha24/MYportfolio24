import { ExperienceItem } from "@/types/portfolio";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "3skills-aiml",
    role: "AI / ML Intern",
    company: "3Skills",
    type: "Virtual Internship",
    period: "January 2026 – March 2026",
    location: "Remote",
    responsibilities: [
      "Built, trained, and evaluated machine-learning models using Python and Scikit-learn workflows.",
      "Performed exploratory data analysis (EDA), data preprocessing, and systematic feature engineering.",
      "Utilized NumPy, Pandas, and Matplotlib for tabular manipulation, cleaning, and statistical visualizations.",
    ],
    technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
  },
  {
    id: "agastyaan-fullstack",
    role: "Full-Stack Developer Intern",
    company: "Agastyaan Technology",
    type: "Internship",
    period: "June 2025 – July 2025",
    location: "On-site / Hybrid",
    responsibilities: [
      "Developed and optimized web applications using Python, JavaScript, and PostgreSQL full-stack ecosystems.",
      "Worked on relational database design, structured data persistence, and core CRUD operations.",
      "Contributed to responsive, user-centric frontend interfaces and backend service integrations.",
    ],
    technologies: ["Python", "JavaScript", "PostgreSQL", "HTML/CSS", "REST APIs", "Git"],
  },
];
