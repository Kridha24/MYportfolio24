import { EducationItem, CertificationItem } from "@/types/portfolio";

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "ikgptu-btech",
    institution: "I.K. Gujral Punjab Technical University",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2023 – 2027",
    location: "Mohali, Punjab, India",
    status: "Final-Year Undergraduate (Available from Jan 2027)",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Computer Networks",
      "Database Management Systems (DBMS)",
      "Operating Systems",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "hackerrank-ps",
    title: "HackerRank Problem Solving (Intermediate)",
    program: "HackerRank Certification",
    period: "Verified",
    description:
      "Problem solving certification covering algorithmic thinking, data structures, and time-complexity optimization.",
    topics: ["Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    id: "cisco-python",
    title: "Cisco Python Essentials 1",
    program: "Cisco Networking Academy",
    period: "Completed",
    description:
      "Foundational Python programming covering control flow, functions, data collections, and core scripting patterns.",
    topics: ["Python", "Functions & Data Structures", "Control Flow"],
  },
  {
    id: "neo4j-graphacademy",
    title: "Neo4j GraphAcademy",
    program: "Neo4j",
    period: "Completed",
    description:
      "Graph data modeling, Cypher query language, and knowledge-graph retrieval patterns for AI/Graph RAG applications.",
    topics: ["Neo4j", "Cypher", "Knowledge Graphs", "Graph RAG"],
  },
  {
    id: "mobile-malware-forensics",
    title: "Android Malware Analysis & Mobile Malware Forensics",
    program: "ISEA / MeitY Bootcamp",
    period: "October 2025",
    description:
      "Intensive technical program covering mobile malware attack surfaces, network traffic inspection, decompilation analysis, and digital forensic triage methodology.",
    topics: [
      "Mobile Threat Landscape Analysis",
      "Android Application Decompilation & Static Triage",
      "Network Packet Capture & Interception",
      "Forensic Evidence Preservation",
    ],
  },
];
