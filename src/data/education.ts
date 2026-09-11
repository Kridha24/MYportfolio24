import { EducationItem, CertificationItem } from "@/types/portfolio";

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "ikgptu-btech",
    institution: "I.K. Gujral Punjab Technical University",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "2023 – Present",
    location: "Mohali, Punjab, India",
    status: "Undergraduate (In Progress)",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "mobile-malware-forensics",
    title: "Mobile Malware Detection & Forensics Bootcamp",
    program: "Cybersecurity 5-Day Program",
    period: "October 2025",
    description:
      "Intensive technical bootcamp covering mobile malware attack surfaces, network traffic inspection, decompilation analysis, and digital forensic triage methodology.",
    topics: [
      "Mobile Threat Landscape Analysis",
      "Android Application Decompilation & Static Triage",
      "Network Packet Capture & Interception",
      "Forensic Evidence Preservation",
    ],
  },
];
