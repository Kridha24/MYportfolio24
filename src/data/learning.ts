import {
  LearningTrack,
  RagStage,
  ArchitectureLayer,
  SystemAlignmentExplanation,
  ProjectApplicationConnection,
} from "@/types/portfolio";

export const LEARNING_SECTION_HEADER = {
  eyebrow: "CONTINUOUS LEARNING // 05",
  title: "What I’m Learning Now",
  intro:
    "I’m strengthening my foundations in System Design, Backend Engineering, Data Structures & Algorithms, and AI Engineering. I’m also exploring Retrieval-Augmented Generation and LangChain to understand how intelligent applications can retrieve trusted context, use tools, and generate more grounded responses.",
};

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: "system-design",
    title: "System Design",
    subtitle: "High-level architectural patterns & trade-offs",
    description:
      "Studying how distributed systems achieve scalability, availability, fault tolerance, and data consistency under real-world constraints.",
    status: "Currently Learning",
    accent: {
      badge: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
      border: "border-blue-500/25 group-hover:border-blue-500/50",
      glow: "hover:shadow-[0_0_25px_rgba(79,124,255,0.15)]",
      text: "text-blue-600 dark:text-blue-400",
    },
    currentFocus: [
      "Load balancing strategies",
      "Horizontal vs. vertical scaling",
      "Caching patterns & cache invalidation",
      "Database partitioning & replication",
      "CAP theorem & consistency models",
    ],
    topics: [
      {
        title: "Scalability & Load Balancing",
        description: "Distributing network traffic efficiently across multiple application instances.",
        concepts: ["Round Robin", "Least Connections", "Layer 4 vs Layer 7", "Consistent Hashing"],
      },
      {
        title: "Caching & Performance Optimization",
        description: "Reducing database read pressure and lowering response latency.",
        concepts: ["Cache-Aside", "Write-Through", "Write-Back", "Eviction Policies (LRU/LFU)"],
      },
      {
        title: "Data Partitioning & Replication",
        description: "Scaling databases horizontally while maintaining disaster recovery.",
        concepts: ["Sharding Keys", "Primary-Replica Replication", "Read Replicas", "Eventual Consistency"],
      },
      {
        title: "Reliability & Resilience",
        description: "Preventing cascading failures and handling degraded services gracefully.",
        concepts: ["Circuit Breaker Pattern", "Rate Limiting", "Exponential Backoff", "Health Checks"],
      },
    ],
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    subtitle: "Scalable APIs, persistence & security",
    description:
      "Deepening practical expertise in API design, asynchronous processing, relational data modeling, query optimization, and resilient middleware.",
    status: "Learning & Applying",
    accent: {
      badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-500/25 group-hover:border-emerald-500/50",
      glow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
      text: "text-emerald-600 dark:text-emerald-400",
    },
    currentFocus: [
      "FastAPI asynchronous concurrency",
      "Node.js event loop & streaming I/O",
      "PostgreSQL indexing & execution plans",
      "Robust transactional boundaries",
      "Webhook idempotency & verification",
    ],
    topics: [
      {
        title: "API Architecture & Protocols",
        description: "Designing deterministic RESTful interfaces and real-time event streams.",
        concepts: ["RESTful Best Practices", "WebSockets", "Server-Sent Events (SSE)", "Idempotency Keys"],
      },
      {
        title: "Data Persistence & Modeling",
        description: "Structuring schemas for data integrity, low latency, and ACID guarantees.",
        concepts: ["Foreign Key Constraints", "B-Tree & GIN Indexes", "Prisma & SQLAlchemy ORMs", "Database Migrations"],
      },
      {
        title: "Authentication & Guardrails",
        description: "Securing endpoints against unauthorized access, replay attacks, and abuse.",
        concepts: ["JWT with Refresh Tokens", "Role-Based Access Control (RBAC)", "Rate Limiting", "CORS & CSRF"],
      },
      {
        title: "Background Processing",
        description: "Decoupling long-running tasks from user-facing HTTP request-response cycles.",
        concepts: ["Task Queues", "Worker Pools", "Retry Logic", "Dead Letter Queues"],
      },
    ],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    subtitle: "Problem solving, time-space complexity & efficiency",
    description:
      "Practicing coding problems consistently to strengthen computational thinking, algorithmic intuition, and clean, optimal implementation.",
    status: "Practising Consistently",
    accent: {
      badge: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
      border: "border-amber-500/25 group-hover:border-amber-500/50",
      glow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
      text: "text-amber-600 dark:text-amber-400",
    },
    currentFocus: [
      "Dynamic programming & memoization",
      "Graph traversal (BFS/DFS) & topological sort",
      "Tree balancing & binary search algorithms",
      "Sliding window & two-pointer techniques",
      "LeetCode problem tracking (kridha_ms_24)",
    ],
    topics: [
      {
        title: "Non-Linear Data Structures",
        description: "Traversing and modifying interconnected hierarchical networks efficiently.",
        concepts: ["Binary Search Trees", "Tries", "Graphs (Adjacency Lists)", "Heaps / Priority Queues"],
      },
      {
        title: "Algorithmic Paradigms",
        description: "Selecting optimal strategies to minimize computational time and memory.",
        concepts: ["Divide and Conquer", "Dynamic Programming", "Greedy Approaches", "Backtracking"],
      },
      {
        title: "Complexity Analysis",
        description: "Rigorously evaluating worst-case and average-case runtime and memory usage.",
        concepts: ["Big-O Notation", "Auxiliary Space Complexity", "Amortized Analysis", "Cache Locality"],
      },
      {
        title: "String & Array Techniques",
        description: "High-frequency optimization patterns for sequential data manipulation.",
        concepts: ["Two Pointers", "Sliding Window", "Monotonic Stack", "Prefix Sums"],
      },
    ],
  },
  {
    id: "rag-langchain",
    title: "RAG & LangChain",
    subtitle: "Building context-aware AI applications",
    description:
      "Learning how Retrieval-Augmented Generation connects large language models with trusted external knowledge so responses can be based on relevant application data instead of relying only on the model’s internal knowledge.",
    status: "Currently Learning & Building",
    accent: {
      badge: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
      border: "border-violet-500/25 group-hover:border-violet-500/50",
      glow: "hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]",
      text: "text-violet-600 dark:text-violet-400",
    },
    currentFocus: [
      "Document ingestion & metadata preservation",
      "Recursive chunking with token boundaries",
      "Vector similarity search with FAISS & Chroma",
      "LangChain prompt templates & output parsers",
      "Grounded prompt construction with fallback refusals",
    ],
    topics: [
      {
        title: "Document Ingestion",
        description:
          "Collecting content from sources such as PDFs, text files, web pages, databases, and application records.",
        concepts: [
          "File loading",
          "Data extraction",
          "Metadata preservation",
          "Data cleaning",
          "Format normalization",
        ],
      },
      {
        title: "Chunking",
        description:
          "Dividing large documents into smaller, meaningful sections that can be searched and supplied to a language model.",
        concepts: [
          "Fixed-size chunking",
          "Recursive chunking",
          "Semantic chunking",
          "Chunk overlap",
          "Context preservation",
        ],
      },
      {
        title: "Embeddings",
        description:
          "Converting text into numerical vectors that represent semantic meaning and make similarity search possible.",
        concepts: [
          "Embedding models",
          "Vector dimensions",
          "Batch embedding",
          "Query embeddings",
          "Semantic similarity",
        ],
      },
      {
        title: "Vector Storage",
        description:
          "Storing document embeddings so relevant information can be retrieved efficiently. Learning targets include local and distributed vector indexes.",
        concepts: [
          "FAISS (Learning target)",
          "Chroma (Learning target)",
          "Pinecone (Learning target)",
          "pgvector (Learning target)",
        ],
      },
      {
        title: "Retrieval",
        description: "Finding document chunks that are most relevant to a user’s question.",
        concepts: [
          "Similarity search",
          "Top-k retrieval",
          "Metadata filters",
          "Hybrid search",
          "Reranking",
          "Relevance thresholds",
        ],
      },
      {
        title: "Prompt Construction",
        description:
          "Combining retrieved context, user questions, and system instructions into a controlled prompt.",
        concepts: [
          "Context templates",
          "Citation instructions",
          "Token budgeting",
          "Prompt boundaries",
          "Missing-context handling",
        ],
      },
      {
        title: "Grounded Generation",
        description:
          "Generating an answer using retrieved evidence while clearly handling questions that cannot be answered from available context.",
        concepts: [
          "Evidence-based answers",
          "Source citations",
          "Refusal when context is insufficient",
          "Hallucination reduction",
          "Structured output",
        ],
      },
      {
        title: "Evaluation",
        description:
          "Measuring whether retrieved context and generated responses are relevant, faithful, and useful.",
        concepts: [
          "Retrieval relevance",
          "Context precision",
          "Context recall",
          "Answer faithfulness",
          "Answer relevance",
          "Latency & Cost",
        ],
      },
    ],
  },
];

export const LANGCHAIN_LEARNING_DATA = {
  title: "LangChain Component Architecture",
  description:
    "LangChain provides components for connecting language models with prompts, retrievers, tools, structured outputs, conversation state, and external services.",
  learningAreas: [
    {
      title: "Model Integration",
      description: "Connecting chat and embedding providers with standardized interfaces.",
      concepts: ["Chat models", "Embedding models", "Provider configuration", "Streaming responses", "Fallback handling"],
    },
    {
      title: "Prompt Management",
      description: "Templating prompts with clear instructions and dynamic context slots.",
      concepts: ["Prompt templates", "System instructions", "Few-shot examples", "Structured prompts", "Context formatting"],
    },
    {
      title: "Retrieval Chains",
      description: "Assembling document processors, embedding models, and vector stores into pipelines.",
      concepts: ["Document loaders", "Text splitters", "Embeddings", "Vector stores", "Retrievers", "Retrieval pipelines"],
    },
    {
      title: "Tools & Controlled Agents",
      description: "Empowering models to call deterministic functions with execution boundaries.",
      concepts: [
        "Tool definitions",
        "Tool calling",
        "Controlled agent loops",
        "Input validation",
        "Execution limits",
        "Human approval for sensitive actions",
      ],
    },
    {
      title: "Structured Output",
      description: "Enforcing type-safe responses validated against strict schemas.",
      concepts: ["JSON schemas", "Pydantic models", "Output validation", "Retry and error handling"],
    },
    {
      title: "Memory & State",
      description: "Managing multi-turn conversational history while respecting data privacy boundaries.",
      concepts: [
        "Conversation history",
        "Short-term state",
        "Persistent memory concepts",
        "User-scoped memory",
        "Privacy boundaries",
      ],
    },
  ],
  futureTargetNote: "Exploring LangGraph for stateful, controllable, multi-step AI workflows.",
  guardrailWarning: "Autonomous agent execution requires human approval and strict validation guardrails before running in production.",
};

export const RAG_WORKFLOW_STAGES: RagStage[] = [
  {
    id: "sources",
    stepNumber: 1,
    title: "Knowledge Sources",
    phase: "Knowledge Base",
    description: "PDFs · Docs · Database · Application Records",
    tooltip: "Raw application data, PDFs, markdown docs, and transactional database records to be indexed.",
    details: ["Multi-format parsing", "File ingestion", "Data deduplication", "Permission scoping"],
  },
  {
    id: "ingestion",
    stepNumber: 2,
    title: "Ingestion & Cleaning",
    phase: "Ingestion Pipeline",
    description: "Sanitizing text & normalizing formats",
    tooltip: "Removes markup noise, strips invalid unicode, and prepares pristine plaintext.",
    details: ["HTML/Markdown stripping", "Unicode normalization", "Metadata tagging", "Sensitive data masking"],
  },
  {
    id: "chunking",
    stepNumber: 3,
    title: "Chunking + Metadata",
    phase: "Ingestion Pipeline",
    description: "Recursive splitting with token overlap",
    tooltip: "Divides large texts into semantically coherent passages with 10–20% token overlap.",
    details: ["RecursiveCharacterTextSplitter", "Semantic boundaries", "Chunk ID generation", "Document metadata attachment"],
  },
  {
    id: "embedding-doc",
    stepNumber: 4,
    title: "Embedding Model",
    phase: "Ingestion Pipeline",
    description: "Converting text chunks to dense vectors",
    tooltip: "Transforms each text chunk into a high-dimensional vector capturing semantic meaning.",
    details: ["Dense vector embeddings", "Dimension alignment (e.g., 768/1536)", "Batch processing", "Normalized cosine vectors"],
  },
  {
    id: "vector-store",
    stepNumber: 5,
    title: "Vector Store",
    phase: "Vector Retrieval",
    description: "Indexing vector embeddings for fast lookup",
    tooltip: "Stores vector representations and metadata for approximate nearest neighbor (ANN) retrieval.",
    details: ["HNSW indexing", "FAISS / Chroma exploration", "Metadata filtering", "Fast similarity search"],
  },
  {
    id: "user-query",
    stepNumber: 6,
    title: "User Question",
    phase: "Vector Retrieval",
    description: "Capturing user prompt & intent",
    tooltip: "The incoming question or instruction submitted by the client application.",
    details: ["Input sanitization", "Query intent classification", "User authorization verification", "Length checks"],
  },
  {
    id: "query-embedding",
    stepNumber: 7,
    title: "Query Embedding",
    phase: "Vector Retrieval",
    description: "Embedding the question into the vector space",
    tooltip: "Transforms the user's question with the exact same embedding model used for documents.",
    details: ["Identical embedding space", "Zero-shot query transformation", "Query expansion (optional)", "Latency optimization"],
  },
  {
    id: "retriever",
    stepNumber: 8,
    title: "Retriever + Reranker",
    phase: "Vector Retrieval",
    description: "Similarity search & optional reranking",
    tooltip: "Extracts top-k candidate chunks based on cosine similarity and re-scores them for precision.",
    details: ["Top-k similarity search", "Cosine distance scoring", "Cross-encoder reranking (optional)", "Relevance threshold filter"],
  },
  {
    id: "relevant-context",
    stepNumber: 9,
    title: "Relevant Context",
    phase: "Grounded Generation",
    description: "Filtered high-confidence passages",
    tooltip: "The highest-scoring passages concatenated with source identifiers and token budgeting.",
    details: ["Token budget allocation", "Context ordering", "Source metadata preservation", "Insufficient context detection"],
  },
  {
    id: "prompt-llm",
    stepNumber: 10,
    title: "Prompt + LLM",
    phase: "Grounded Generation",
    description: "Structured prompt injection & model inference",
    tooltip: "Injects retrieved context into system instructions directing the LLM to ground its answer.",
    details: ["System grounding instructions", "Few-shot guidance", "Explicit refusal guidelines", "Streaming LLM invocation"],
  },
  {
    id: "grounded-answer",
    stepNumber: 11,
    title: "Grounded Answer + Sources",
    phase: "Grounded Generation",
    description: "Evidence-based response with citations",
    tooltip: "Final verified response citing supporting chunks or refusing if context is absent.",
    details: ["Direct source citations", "Structured JSON/Markdown", "Refusal when ungrounded", "Reduced hallucination risk"],
  },
];

export const ARCHITECTURE_SYSTEM_DATA: {
  title: string;
  subtitle: string;
  simpleLayers: {
    name: string;
    description: string;
    technologies: string[];
    accent: string;
    colorClasses: {
      border: string;
      bg: string;
      text: string;
      pill: string;
    };
  }[];
  detailedLayers: ArchitectureLayer[];
} = {
  title: "How the Complete System Works Together",
  subtitle:
    "This architecture view connects the user interface, backend services, data layer, AI/RAG pipeline, and deployment infrastructure to show how each engineering area contributes to a complete product.",
  simpleLayers: [
    {
      name: "Frontend Layer",
      description: "Responsive user interface capturing interactions, managing client state, and rendering data.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      accent: "blue",
      colorClasses: {
        border: "border-blue-500/30",
        bg: "bg-blue-500/5",
        text: "text-blue-600 dark:text-blue-400",
        pill: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
      },
    },
    {
      name: "Backend Layer",
      description: "Business logic execution, API routing, authentication guardrails, and request validation.",
      technologies: ["Node.js", "Express.js", "FastAPI", "REST & WebSockets"],
      accent: "emerald",
      colorClasses: {
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/5",
        text: "text-emerald-600 dark:text-emerald-400",
        pill: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
      },
    },
    {
      name: "Data & AI Layer",
      description: "Relational/document databases paired with RAG retrieval pipelines and LLM inference.",
      technologies: ["PostgreSQL", "MongoDB", "LangChain", "RAG & Vector Storage"],
      accent: "violet",
      colorClasses: {
        border: "border-violet-500/30",
        bg: "bg-violet-500/5",
        text: "text-violet-600 dark:text-violet-400",
        pill: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
      },
    },
    {
      name: "Cloud & DevOps Layer",
      description: "Containerization, automated deployment pipelines, cloud hosting, and continuous health monitoring.",
      technologies: ["Docker", "Docker Compose", "CI/CD", "AWS & Kubernetes (Learning)"],
      accent: "amber",
      colorClasses: {
        border: "border-amber-500/30",
        bg: "bg-amber-500/5",
        text: "text-amber-600 dark:text-amber-400",
        pill: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
      },
    },
  ],
  detailedLayers: [
    {
      id: "experience",
      layerNumber: 1,
      name: "Experience Layer",
      subtitle: "Client Devices & User Interactions",
      accent: "pink",
      colorScheme: {
        bg: "bg-pink-500/5 dark:bg-pink-950/10",
        border: "border-pink-500/25",
        text: "text-pink-600 dark:text-pink-400",
        badge: "border-pink-500/30 bg-pink-500/10 text-pink-700 dark:text-pink-300",
        glow: "shadow-[0_0_20px_rgba(236,72,153,0.1)]",
      },
      simpleSummary: "User interaction touchpoints across modern web browsers and mobile clients.",
      detailedSummary:
        "Captures user actions, manages local viewport state, and initiates secure HTTPS and real-time streaming connections.",
      simpleNodes: ["Web Browser", "Mobile Client", "User Interaction"],
      detailedGroups: [
        {
          groupTitle: "Client Formats",
          nodes: [
            { name: "Web Browser (Chrome/Firefox/Safari)", status: "Core" },
            { name: "Mobile Client Viewports", status: "Core" },
          ],
        },
        {
          groupTitle: "Interaction Modalities",
          nodes: [
            { name: "Form Submissions & Query Inputs", status: "Core" },
            { name: "Real-Time Event Displays", status: "Hands-On" },
          ],
        },
      ],
    },
    {
      id: "frontend",
      layerNumber: 2,
      name: "Frontend Layer",
      subtitle: "UI Components, Client State & Reactive Rendering",
      accent: "blue",
      colorScheme: {
        bg: "bg-blue-500/5 dark:bg-blue-950/10",
        border: "border-blue-500/25",
        text: "text-blue-600 dark:text-blue-400",
        badge: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300",
        glow: "shadow-[0_0_20px_rgba(79,124,255,0.1)]",
      },
      simpleSummary: "Type-safe React and Next.js interfaces styled with Tailwind CSS.",
      detailedSummary:
        "Implements server-side rendering, client-side routing, accessibility patterns, and robust form validation.",
      simpleNodes: ["React", "Next.js", "TypeScript", "Tailwind CSS", "State Management", "Form Validation"],
      detailedGroups: [
        {
          groupTitle: "Framework & Language",
          nodes: [
            { name: "React 18/19", status: "Core" },
            { name: "Next.js App Router", status: "Core" },
            { name: "TypeScript Strict Mode", status: "Core" },
          ],
        },
        {
          groupTitle: "Styling & UI Logic",
          nodes: [
            { name: "Tailwind CSS", status: "Core" },
            { name: "Client-side State Hooks", status: "Core" },
            { name: "Schema-based Form Validation", status: "Hands-On" },
          ],
        },
      ],
    },
    {
      id: "backend",
      layerNumber: 3,
      name: "Backend Layer",
      subtitle: "API Routing, Business Logic & Security Guardrails",
      accent: "emerald",
      colorScheme: {
        bg: "bg-emerald-500/5 dark:bg-emerald-950/10",
        border: "border-emerald-500/25",
        text: "text-emerald-600 dark:text-emerald-400",
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        glow: "shadow-[0_0_20px_rgba(16,185,129,0.1)]",
      },
      simpleSummary: "FastAPI and Node.js backend services providing REST, WebSockets, and secure business logic.",
      detailedSummary:
        "Handles request authentication, authorization rules, input sanitization, background job execution, and transactional orchestration.",
      simpleNodes: [
        "Node.js",
        "Express",
        "FastAPI",
        "REST APIs",
        "WebSockets",
        "Server-Sent Events",
        "JWT & RBAC",
        "Business Logic",
      ],
      detailedGroups: [
        {
          groupTitle: "Runtime & Protocols",
          nodes: [
            { name: "Node.js & Express REST APIs", status: "Hands-On" },
            { name: "FastAPI Asynchronous Endpoints", status: "Hands-On" },
            { name: "WebSockets & Server-Sent Events", status: "Hands-On" },
          ],
        },
        {
          groupTitle: "Security & Middleware",
          nodes: [
            { name: "JWT Authentication & RBAC", status: "Hands-On" },
            { name: "Input Validation (Pydantic / Zod)", status: "Hands-On" },
            { name: "Rate Limiting & CORS Guardrails", status: "Hands-On" },
          ],
        },
      ],
    },
    {
      id: "data-ai",
      layerNumber: 4,
      name: "Data & Intelligence Layer",
      subtitle: "Relational/Document Persistence & Grounded AI Pipelines",
      accent: "violet",
      colorScheme: {
        bg: "bg-violet-500/5 dark:bg-violet-950/10",
        border: "border-violet-500/25",
        text: "text-violet-600 dark:text-violet-400",
        badge: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
        glow: "shadow-[0_0_20px_rgba(139,92,246,0.1)]",
      },
      simpleSummary: "Transactional databases (PostgreSQL/SQLite/MongoDB) paired with LangChain RAG retrieval.",
      detailedSummary:
        "Maintains ACID relational storage and document stores alongside vector embeddings, semantic search retrievers, and LLM structured generation.",
      simpleNodes: [
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Prisma",
        "LangChain",
        "RAG Pipeline",
        "Vector Storage",
        "Structured Output",
      ],
      detailedGroups: [
        {
          groupTitle: "Transactional Data Layer (Amber)",
          nodes: [
            { name: "PostgreSQL & SQLite", status: "Hands-On" },
            { name: "MongoDB & Prisma ORM", status: "Hands-On" },
            { name: "Redis Caching Concepts", status: "Currently Learning" },
            { name: "Message Queues & Background Workers", status: "Currently Learning" },
          ],
        },
        {
          groupTitle: "AI & RAG Intelligence Layer (Violet/Pink)",
          nodes: [
            { name: "Python & LangChain Framework", status: "Currently Learning & Building" },
            { name: "Retrieval-Augmented Generation (RAG)", status: "Currently Learning & Building" },
            { name: "Dense Embeddings & Similarity Search", status: "Currently Learning & Building" },
            { name: "Vector Storage (FAISS / Chroma / pgvector)", status: "Exploring" },
            { name: "LLM Prompt Grounding & Structured JSON", status: "Currently Learning & Building" },
          ],
        },
      ],
    },
    {
      id: "infrastructure",
      layerNumber: 5,
      name: "Infrastructure Layer",
      subtitle: "Containerization, Cloud Deployment & Observability",
      accent: "orange",
      colorScheme: {
        bg: "bg-orange-500/5 dark:bg-orange-950/10",
        border: "border-orange-500/25",
        text: "text-orange-600 dark:text-orange-400",
        badge: "border-orange-500/30 bg-orange-500/10 text-orange-700 dark:text-orange-300",
        glow: "shadow-[0_0_20px_rgba(249,115,22,0.1)]",
      },
      simpleSummary: "Docker containerization and automated verification for reproducible deployments.",
      detailedSummary:
        "Orchestrates multi-container applications via Docker Compose, validates builds with automated CI, and monitors system health.",
      simpleNodes: [
        "Docker",
        "Docker Compose",
        "CI/CD Workflows",
        "AWS Fundamentals (Learning)",
        "Kubernetes Concepts (Learning)",
        "Logging & Monitoring",
      ],
      detailedGroups: [
        {
          groupTitle: "Containers & Version Control",
          nodes: [
            { name: "Docker Containerization", status: "Hands-On" },
            { name: "Docker Compose Multi-Container", status: "Hands-On" },
            { name: "Git & GitHub CI Automation", status: "Hands-On" },
          ],
        },
        {
          groupTitle: "Cloud & Observability Horizons",
          nodes: [
            { name: "AWS Fundamentals (EC2, S3, RDS)", status: "Currently Learning" },
            { name: "Kubernetes Orchestration Concepts", status: "Currently Learning" },
            { name: "Application Logging & Health Checks", status: "Hands-On" },
          ],
        },
      ],
    },
  ],
};

export const SYSTEM_ALIGNMENTS: SystemAlignmentExplanation[] = [
  {
    id: "fe-be",
    fromTo: "Frontend → Backend",
    title: "User Interaction to API Gateway",
    description:
      "The frontend captures user actions and communicates with backend services through REST APIs, WebSockets, or Server-Sent Events.",
  },
  {
    id: "be-data",
    fromTo: "Backend → Data",
    title: "Business Logic to Persistent Storage",
    description:
      "The backend validates requests, enforces authentication and authorization, executes business logic, and reads or writes application data.",
  },
  {
    id: "be-ai",
    fromTo: "Backend → AI/RAG",
    title: "Secure Control to Contextual Intelligence",
    description:
      "The backend controls access to AI features, prepares user-scoped context, invokes retrieval workflows, validates generated output, and returns safe responses.",
  },
  {
    id: "rag-sources",
    fromTo: "RAG → Knowledge Sources",
    title: "Grounding Context to External Records",
    description:
      "The RAG pipeline retrieves relevant information from approved knowledge sources and supplies it to the language model as supporting context.",
  },
  {
    id: "app-infra",
    fromTo: "Application → Infrastructure",
    title: "Service Logic to Production Runtime",
    description:
      "Docker, cloud services, CI/CD, logging, and monitoring help package, deploy, verify, and operate the complete system.",
  },
];

export const PROJECT_APPLICATIONS: ProjectApplicationConnection[] = [
  {
    id: "homemind-ai",
    title: "HomeMind AI",
    category: "Intelligent Household Management",
    href: "/projects/homemind-ai",
    highlights: [
      "React frontend with responsive dashboard",
      "Node/Express backend with JWT authentication",
      "FastAPI AI service for natural language insights",
      "Household-scoped PostgreSQL database & Prisma ORM",
      "AI-assisted expense categorization workflows",
      "Docker Compose multi-container local orchestration",
    ],
  },
  {
    id: "ai-finance-controller",
    title: "AI Finance Controller",
    category: "FinTech & Automated Reconciliation",
    href: "/projects/ai-finance-controller",
    highlights: [
      "Python 3.11 financial reconciliation engine",
      "FastAPI webhook endpoint for live payment events",
      "Persistent SQLite audit trail with tamper resistance",
      "Deterministic-first matcher with fuzzy AI fallback",
      "Human review exception controller",
      "Reproducible Docker containerization & synthetic benchmarks",
    ],
  },
  {
    id: "traffiq",
    title: "TRAFFIQ",
    category: "Computer Vision & Smart Infrastructure",
    href: "/projects/traffiq",
    highlights: [
      "Simulated RTSP camera stream and video feed input",
      "OpenCV and YOLOv8 vehicle detection pipeline",
      "FastAPI microservice for metric telemetry",
      "PostgreSQL persistence for historical intersection analytics",
      "Operator dashboard interface with live zone visualizations",
      "Adaptive traffic-signal green duration algorithms",
    ],
  },
  {
    id: "buildease",
    title: "BuildEase",
    category: "Full-Stack Collaboration Platform",
    href: "/projects/buildease",
    highlights: [
      "React and TypeScript modular interface",
      "Node.js and Express.js REST backend",
      "MongoDB document store with Mongoose schemas",
      "JWT authentication and Role-Based Access Control (RBAC)",
      "Socket.IO real-time client collaboration",
      "Real-time operational notifications and update feeds",
    ],
  },
];
