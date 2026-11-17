export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  badge: string;
  category: "Hackathon" | "ML Competition" | "Leadership";
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "amazon-ml-challenge-2026",
    title: "Entity Resolution",
    event: "Amazon ML Challenge 2026",
    badge: "Rank 700 / 5,000+ teams",
    category: "ML Competition",
    summary:
      "Built an entity-resolution pipeline to match messy business records across typos, abbreviations, and partial fields.",
    highlights: [
      "Built a Python, FAISS, RapidFuzz, and LightGBM entity-resolution approach for noisy record matching.",
      "Combined candidate retrieval with similarity-based features, hard-negative mining, group-aware validation, and threshold tuning for precision-focused matching.",
    ],
    technologies: ["Python", "FAISS", "RapidFuzz", "LightGBM"],
  },
  {
    id: "iiit-delhi-graph-ai",
    title: "ResearchGraph AI",
    event: "IIIT Delhi — Graph + AI Mini Hackathon",
    badge: "9th / 20 teams",
    category: "Hackathon",
    summary:
      "Knowledge-graph retrieval and grounded QA system over research paper evidence with paper/page citations.",
    highlights: [
      "Extracted paper evidence into a Neo4j/Cypher knowledge graph and built 6 retrieval workflows spanning paper search, method comparison, and multi-hop relationships.",
      "Integrated Ollama local LLM + Gemini API to synthesize grounded answers from retrieved graph evidence with paper/page citations; subsequent evaluation reported 52/52 passing tests.",
    ],
    technologies: ["Neo4j", "Cypher", "Graph RAG", "Ollama", "Gemini API", "pytest"],
  },
  {
    id: "cricket-leadership",
    title: "University Cricket Team Vice-Captain",
    event: "Sports & District Representation",
    badge: "District U14 / U16 / U19",
    category: "Leadership",
    summary:
      "Competitive leadership experience balancing team strategy, composure under pressure, and consistent execution.",
    highlights: [
      "Served as University Cricket Team Vice-Captain, coordinating match strategy and team discipline.",
      "Represented the district across U14, U16, and U19 cricket levels.",
    ],
    technologies: ["Team Leadership", "Decision-Making", "Discipline"],
  },
];

export interface ResumeProjectHighlight {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const RESUME_ADDITIONAL_PROJECTS: ResumeProjectHighlight[] = [
  {
    id: "airbnb-price-prediction",
    title: "Airbnb Price Prediction",
    subtitle: "Personal ML Project",
    category: "AI / ML",
    summary:
      "End-to-end regression workflow study for predicting rental prices from listing attributes with strict inference consistency.",
    highlights: [
      "Examined data distributions, missing values, categorical encoding, and feature preprocessing.",
      "Reviewed training and comparison of regression models using scikit-learn, XGBoost, and CatBoost, focusing on validating predictions and avoiding inconsistent preprocessing at inference.",
      "Examined Flask prediction endpoints, Docker containerization, and DVC pipeline concepts in a reference implementation (study activities, not independently verified deployment results).",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "CatBoost",
      "Flask",
      "Docker",
      "DVC",
    ],
  },
  {
    id: "researchgraph-ai-project",
    title: "ResearchGraph AI",
    subtitle: "Graph RAG Knowledge Engine (IIIT Delhi Hackathon)",
    category: "Graph + AI",
    summary:
      "Extracts academic paper evidence into a Neo4j/Cypher knowledge graph with 6 multi-hop retrieval workflows and grounded LLM citations.",
    highlights: [
      "Structured paper evidence in Neo4j/Cypher for paper search, method comparison, and multi-hop relationship queries.",
      "Combined Ollama local LLM and Gemini API to generate citation-backed answers verified by 52/52 passing evaluation tests.",
    ],
    technologies: ["Neo4j", "Cypher", "Graph RAG", "Ollama", "Gemini API", "pytest"],
  },
  {
    id: "amazon-entity-resolution-project",
    title: "Entity Resolution Pipeline",
    subtitle: "Amazon ML Challenge 2026 (Rank 700 / 5,000+)",
    category: "ML Systems",
    summary:
      "Precision-focused candidate retrieval and ranking pipeline for matching noisy business records.",
    highlights: [
      "Used FAISS vector candidate retrieval and RapidFuzz string similarity features with LightGBM classification.",
      "Applied hard-negative mining, group-aware validation, and threshold tuning to handle typos and partial fields.",
    ],
    technologies: ["Python", "FAISS", "RapidFuzz", "LightGBM"],
  },
];

