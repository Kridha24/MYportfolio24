import { Profile } from "@/types/portfolio";

export const PROFILE_DATA: Profile = {
  name: "Mihir Shekhar Gupta",
  monogram: "MSG",
  role: "AI & Full-Stack Developer",
  location: "Bhabua, Bihar, India",
  email: "mihirshekhar887@gmail.com",
  educationSummary: "B.Tech in Computer Science & Engineering, I.K. Gujral Punjab Technical University (2023–Present)",
  availability: "Open to SDE / Full-Stack / AI internships",
  eyebrow: "AI & Full-Stack Developer",
  headline: "I build intelligent systems that solve real-world problems.",
  supportingText:
    "I’m Mihir Shekhar Gupta, a Computer Science undergraduate building AI-powered, computer-vision, and full-stack applications with a focus on performance, security, and practical impact.",
  summary:
    "I am a Computer Science undergraduate with hands-on experience engineering scalable web applications, real-time computer vision pipelines, and structured backend systems. My work centers on practical software engineering: designing clean database schemas, optimizing frame-level inference latency, and writing maintainable, typed full-stack code.",
  focusAreas: [
    {
      title: "Full-Stack Engineering",
      description:
        "Developing end-to-end web applications with modular frontend architectures, type-safe API communication, and reliable persistence layers.",
      iconName: "Layers",
      skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Vite", "Tailwind CSS"],
    },
    {
      title: "AI & Computer Vision",
      description:
        "Building real-time computer vision pipelines using object detection models, region-of-interest filtering, and frame stream processing.",
      iconName: "Eye",
      skills: ["OpenCV", "YOLOv8", "Python", "RTSP Streams", "NumPy", "Scikit-learn"],
    },
    {
      title: "Backend Architecture",
      description:
        "Architecting RESTful and real-time web services with strict authentication, role-based authorization, structured persistence, and input sanitization.",
      iconName: "Server",
      skills: ["FastAPI", "Express.js", "PostgreSQL", "MongoDB", "Socket.IO", "JWT"],
    },
    {
      title: "Problem Solving",
      description:
        "Applying core computer science fundamentals—data structures, algorithms, operating system concepts, and database normalization—to build reliable software.",
      iconName: "Cpu",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Networking"],
    },
  ],
  cricketLeadership: {
    title: "Athletic Leadership & Team Dynamics",
    universityRole: "Vice-Captain, University Cricket Team",
    districtDivisions: ["Under-14", "Under-16", "Under-19"],
    narrative:
      "Beyond technical engineering, competitive cricket has been my proving ground for high-pressure decision-making, resilience, and squad alignment. Serving as Vice-Captain of the University Cricket Team and representing Kaimur District Cricket Association across U14, U16, and U19 divisions instilled rigorous discipline, strategic preparation, and clear communication under rapidly changing conditions.",
    qualities: [
      "Tactical decision-making under high-pressure scenarios",
      "Mentorship and cross-functional team coordination",
      "Consistent training discipline and accountability",
      "Adaptive strategy based on real-time field evaluation",
    ],
  },
};
