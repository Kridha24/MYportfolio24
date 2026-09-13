import {
  ProficiencyLegendItem,
  ContainersOrchestrationItem,
  AWSServiceGroup,
  DevOpsToolCategory,
  DeploymentPipelineStep,
  TestingQualityTool,
  SecurityPracticeItem,
  ObservabilityItem,
  RoadmapMilestone,
} from "@/types/portfolio";

export const CLOUD_DEVOPS_INTRO = {
  eyebrow: "INFRASTRUCTURE & RELIABILITY // 05",
  title: "Cloud, DevOps & Engineering Toolkit",
  introduction:
    "Alongside application development, I’m building practical knowledge of containerization, cloud deployment, CI/CD, API tooling, and production-oriented engineering workflows.",
  supportingText:
    "My projects have given me hands-on exposure to Docker-based environments, multi-service orchestration, backend deployment, environment configuration, API documentation, database tooling, and secure service integration. I’m currently extending this foundation through Kubernetes and AWS.",
};

export const PROFICIENCY_LEGEND: ProficiencyLegendItem[] = [
  {
    level: "Core",
    definition: "Used regularly across projects with deep architectural familiarity",
    accent: "border-blue-500/30 bg-blue-500/10 text-[#4f7cff]",
  },
  {
    level: "Hands-On",
    definition: "Implemented in at least one project, local container setup, or deployment workflow",
    accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    level: "Foundational",
    definition: "Understands core concepts with focused practical implementation",
    accent: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    level: "Currently Learning",
    definition: "Actively building practical knowledge, reading specs, and running local labs",
    accent: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
];

export const CONTAINERS_ORCHESTRATION_DATA: ContainersOrchestrationItem[] = [
  {
    name: "Docker",
    status: "Hands-On",
    description: "Containerizing application services and creating reproducible development environments.",
    supportingExperience: [
      "Writing and optimizing multi-stage Dockerfiles",
      "Containerizing frontend (React/Vite) and backend (Node/FastAPI) services",
      "Managing environment variables and secret injection",
      "Exposing and mapping application ports safely",
      "Creating isolated service environments",
      "Persisting database state through Docker named volumes",
    ],
  },
  {
    name: "Docker Compose",
    status: "Hands-On",
    description: "Orchestrating multi-service applications containing frontend, backend, AI services, and databases.",
    connectedProjects: ["HomeMind AI", "AI Finance Controller"],
    supportingExperience: [
      "Coordinating React frontend, Node.js backend, and FastAPI AI service",
      "Integrating PostgreSQL and SQLite persistence containers",
      "Defining internal container bridge networks with shared service discovery",
      "Environment-based configuration and persistent storage mounting",
    ],
  },
  {
    name: "Kubernetes",
    status: "Currently Learning",
    description:
      "Learning container orchestration concepts such as Pods, Deployments, Services, ConfigMaps, Secrets, health checks, scaling, and rolling updates.",
    concepts: [
      "Pods & Multi-Container Pod Patterns",
      "Deployments & ReplicaSets",
      "ClusterIP, NodePort & LoadBalancer Services",
      "ConfigMaps & Secrets for Decoupled Config",
      "Liveness & Readiness Probes for Self-Healing",
      "Horizontal Pod Autoscaling (HPA) Metrics",
      "Zero-Downtime Rolling Deployments",
    ],
    supportingExperience: [
      "Studying cluster architecture (Control Plane & Worker Nodes)",
      "Practicing declarative YAML manifest authoring for local labs",
      "Exploring Minikube and kind local test environments",
    ],
  },
];

export const AWS_SERVICES_DATA: AWSServiceGroup[] = [
  {
    category: "Compute",
    services: [
      {
        name: "EC2",
        statusLabel: "Foundational Knowledge",
        description: "Virtual server compute instances for hosting application runtimes and workers",
      },
      {
        name: "AWS Lambda",
        statusLabel: "Exploring",
        description: "Serverless event-driven execution for asynchronous processing and webhooks",
      },
      {
        name: "ECS",
        statusLabel: "Planned Hands-On Deployment",
        description: "Elastic Container Service for running Dockerized microservice workloads",
      },
      {
        name: "EKS",
        statusLabel: "Advanced Learning Target",
        description: "Managed Kubernetes service on AWS infrastructure for scalable orchestration",
      },
    ],
  },
  {
    category: "Storage",
    services: [
      {
        name: "S3",
        statusLabel: "Foundational Knowledge",
        description: "Scalable object storage for static assets, backups, and user uploads",
      },
      {
        name: "EBS",
        statusLabel: "Foundational Knowledge",
        description: "Elastic Block Store providing persistent block storage for EC2 instances",
      },
    ],
  },
  {
    category: "Databases",
    services: [
      {
        name: "RDS",
        statusLabel: "Foundational Knowledge",
        description: "Managed relational database engine supporting PostgreSQL schemas and automated backups",
      },
      {
        name: "DynamoDB",
        statusLabel: "Exploration Topic",
        description: "Serverless NoSQL key-value store optimized for low-latency document queries",
      },
    ],
  },
  {
    category: "Networking",
    services: [
      {
        name: "VPC",
        statusLabel: "Foundational Knowledge",
        description: "Isolated virtual network topologies, public/private subnets, and routing tables",
      },
      {
        name: "Security Groups",
        statusLabel: "Foundational Knowledge",
        description: "Stateful virtual firewalls controlling inbound and outbound port traffic",
      },
      {
        name: "Route 53",
        statusLabel: "Learning",
        description: "Highly available cloud DNS routing with health checking and domain management",
      },
      {
        name: "Application Load Balancer",
        statusLabel: "Learning",
        description: "Layer-7 request routing, path-based routing, and SSL termination",
      },
    ],
  },
  {
    category: "Security",
    services: [
      {
        name: "IAM",
        statusLabel: "Foundational Knowledge",
        description: "Fine-grained identity, roles, and resource permission policies",
      },
      {
        name: "Secrets Manager",
        statusLabel: "Foundational Knowledge",
        description: "Secure storage, encryption, and lifecycle rotation for API credentials",
      },
      {
        name: "CloudWatch",
        statusLabel: "Learning",
        description: "Centralized log ingestion, operational metrics, and alarm thresholds",
      },
      {
        name: "Least Privilege Principle",
        statusLabel: "Core Concept",
        description: "Restricting service execution permissions strictly to required resources",
      },
    ],
  },
  {
    category: "Deployment",
    services: [
      {
        name: "Elastic Beanstalk",
        statusLabel: "Exploring",
        description: "PaaS environment for simplified application provisioning and scaling",
      },
      {
        name: "ECS with Docker",
        statusLabel: "Planned Hands-On Deployment",
        description: "Deploying multi-container tasks onto AWS managed container instances",
      },
      {
        name: "ECR",
        statusLabel: "Learning",
        description: "Elastic Container Registry for storing, versioning, and scanning Docker images",
      },
      {
        name: "CloudFront",
        statusLabel: "Exploring",
        description: "Global content delivery network (CDN) for low-latency asset distribution",
      },
    ],
  },
];

export const DEVOPS_TOOLS_MATRIX: DevOpsToolCategory[] = [
  {
    category: "Version Control",
    iconName: "GitBranch",
    tools: [
      { name: "Git", level: "Core", note: "CLI, branching, rebase, cherry-pick" },
      { name: "GitHub", level: "Core", note: "Pull requests, reviews, code browsing" },
      { name: "Branching Strategy", level: "Core", note: "Feature branches, main protection" },
      { name: "Pull Requests", level: "Core", note: "Atomic commits, review etiquette" },
      { name: "Commit History", level: "Core", note: "Semantic commits, clean history" },
      { name: "Repo Management", level: "Core", note: "README, issue tracking, licenses" },
    ],
  },
  {
    category: "API Development",
    iconName: "Network",
    tools: [
      { name: "Postman", level: "Hands-On", note: "Collection runs, auth headers, testing" },
      { name: "OpenAPI", level: "Hands-On", note: "API contract specifications" },
      { name: "Swagger UI", level: "Hands-On", note: "Interactive FastAPI docs" },
      { name: "REST APIs", level: "Core", note: "Standard HTTP methods, status codes" },
      { name: "Webhooks", level: "Hands-On", note: "HMAC signed inbound handlers" },
      { name: "Socket.IO", level: "Hands-On", note: "Bi-directional event channels" },
      { name: "JSON", level: "Core", note: "Serialization, schema validation" },
      { name: "Zod", level: "Hands-On", note: "TypeScript-first runtime schema validation" },
      { name: "Pydantic", level: "Hands-On", note: "Python data parsing and validation" },
    ],
  },
  {
    category: "Database Tools",
    iconName: "Database",
    tools: [
      { name: "Prisma ORM", level: "Hands-On", note: "Schema modeling, migrations, client" },
      { name: "PostgreSQL", level: "Core", note: "Relational modeling, indexing, ACID" },
      { name: "MongoDB", level: "Core", note: "Document models, aggregation pipeline" },
      { name: "SQLite", level: "Core", note: "Lightweight embedded storage, WAL mode" },
      { name: "Database Migrations", level: "Hands-On", note: "Declarative schema migrations" },
      { name: "Schema Design", level: "Core", note: "Normalization, foreign keys, indexes" },
      { name: "Query Validation", level: "Hands-On", note: "Parameterized queries, ORM safety" },
    ],
  },
  {
    category: "Development Environment",
    iconName: "Terminal",
    tools: [
      { name: "VS Code", level: "Core", note: "Extensions, debugger, workspace config" },
      { name: "Unix Terminal", level: "Core", note: "Bash/Zsh navigation, pipes, scripts" },
      { name: "npm", level: "Core", note: "Package management, scripts, dependency trees" },
      { name: "pip", level: "Core", note: "Python requirements and package resolution" },
      { name: "Python venv", level: "Core", note: "Isolated virtual environments" },
      { name: "Vite", level: "Core", note: "Fast HMR frontend tooling and bundling" },
      { name: "Linux", level: "Hands-On", note: "File permissions, processes, basic administration" },
      { name: "macOS", level: "Core", note: "Primary local development environment" },
    ],
  },
  {
    category: "Deployment",
    iconName: "Cloud",
    tools: [
      { name: "Docker", level: "Hands-On", note: "Multi-stage builds, isolated runtimes" },
      { name: "Docker Compose", level: "Hands-On", note: "Multi-container local orchestration" },
      { name: "Vercel", level: "Hands-On", note: "Edge network static & serverless deploy" },
      { name: "Environment Variables", level: "Core", note: ".env management, secrets hygiene" },
      { name: "Build Pipelines", level: "Hands-On", note: "Static optimization, bundling" },
      { name: "Health Checks", level: "Hands-On", note: "/health status monitoring endpoints" },
    ],
  },
];

export const CENTRAL_PIPELINE_STEPS: DeploymentPipelineStep[] = [
  {
    step: "01",
    name: "Source Code",
    description: "TypeScript & Python Services",
    details: "Modular architecture, type-safety, and clean separation of concerns",
    accent: "#4f7cff",
  },
  {
    step: "02",
    name: "Git & GitHub",
    description: "Version Control & Branching",
    details: "Feature branches, peer reviews, and semantic commit history",
    accent: "#8b5cf6",
  },
  {
    step: "03",
    name: "CI Validation",
    description: "Automated Quality Gates",
    details: "Static typecheck, ESLint analysis, and Vitest/Pytest test executions",
    accent: "#ec4899",
  },
  {
    step: "04",
    name: "Docker Image",
    description: "Container Packaging",
    details: "Multi-stage Dockerfile build producing lean, reproducible runtime images",
    accent: "#22d3ee",
  },
  {
    step: "05",
    name: "Container Deployment",
    description: "Service Orchestration",
    details: "Docker Compose / ECS task execution with environment variable injection",
    accent: "#10b981",
  },
  {
    step: "06",
    name: "Cloud Infrastructure",
    description: "Hosting & Networking",
    details: "VPC subnets, security groups, edge routing, and cloud persistence",
    accent: "#f59e0b",
  },
  {
    step: "07",
    name: "Monitoring & Feedback",
    description: "Observability & Audit",
    details: "Structured logging, application health checks, and error boundaries",
    accent: "#14b8a6",
  },
];

export const TESTING_QUALITY_DATA: TestingQualityTool[] = [
  {
    tool: "Pytest & Evaluation Harness",
    purpose: "Backend unit tests & deterministic reconciliation accuracy evaluation",
    verifiedContext: "AI Finance Controller (27 automated tests passing)",
  },
  {
    tool: "Vitest",
    purpose: "Blazing-fast unit and integration test runner for React components and models",
    verifiedContext: "Portfolio (26 unit tests across 7 test suites)",
  },
  {
    tool: "Playwright",
    purpose: "End-to-end browser automation and responsive viewport regression suites",
    verifiedContext: "Portfolio (98 assertions across 6 viewports with 0 horizontal scroll)",
  },
  {
    tool: "React Testing Library",
    purpose: "Testing component DOM outputs from an accessibility-first user perspective",
    verifiedContext: "Used across portfolio unit tests",
  },
  {
    tool: "ESLint & TypeScript Strict",
    purpose: "Static type verification and lint enforcement preventing runtime defects",
    verifiedContext: "Zero type errors and zero lint warnings across all builds",
  },
  {
    tool: "Zod & Pydantic",
    purpose: "Runtime schema validation for incoming REST payloads, forms, and webhooks",
    verifiedContext: "FastAPI endpoints & Contact form validation",
  },
];

export const SECURITY_PRACTICES_DATA: SecurityPracticeItem[] = [
  {
    practice: "JWT Authentication",
    category: "Auth",
    implementationContext: "Stateless user session verification with token expiration",
  },
  {
    practice: "Role-Based Access Control (RBAC)",
    category: "Auth",
    implementationContext: "Client/Contractor/Vendor permission gating (BuildEase)",
  },
  {
    practice: "Runtime Schema Validation",
    category: "Input",
    implementationContext: "Zod & Pydantic validation sanitizing payloads before execution",
  },
  {
    practice: "Rate Limiting",
    category: "Network",
    implementationContext: "Protecting public API endpoints from resource exhaustion",
  },
  {
    practice: "Secure HTTP Headers",
    category: "Network",
    implementationContext: "HSTS, CSP, X-Content-Type-Options, and referrer policies",
  },
  {
    practice: "Environment Secrets Management",
    category: "Config",
    implementationContext: "Strict isolation of API credentials and keys outside version control",
  },
  {
    practice: "Webhook HMAC Verification",
    category: "Integrations",
    implementationContext: "Cryptographic signature validation on external webhooks (Finance Controller)",
  },
  {
    practice: "Idempotency Controls",
    category: "Integrity",
    implementationContext: "Preventing duplicate financial reconciliation transactions via keys",
  },
  {
    practice: "Tenant-Scoped Data Access",
    category: "Isolation",
    implementationContext: "Prisma query scoping preventing cross-household data leakage (HomeMind AI)",
  },
  {
    practice: "Persistent Audit Trails",
    category: "Audit",
    implementationContext: "Append-only trigger enforcement preventing UPDATE/DELETE on audit logs",
  },
  {
    practice: "Soft Deletion Patterns",
    category: "Data",
    implementationContext: "Preserving relational integrity while marking records inactive",
  },
  {
    practice: "OAuth 2.0 / Firebase Auth",
    category: "Auth",
    implementationContext: "Delegated identity flows with secure token exchange",
  },
  {
    practice: "Phone OTP Verification",
    category: "Auth",
    implementationContext: "Two-step identity confirmation flow for high-assurance actions",
  },
];

export const OBSERVABILITY_DATA: ObservabilityItem[] = [
  {
    topic: "Structured JSON Logging",
    description: "Writing machine-parsable log entries containing timestamp, request ID, and severity level",
    status: "Implemented",
  },
  {
    topic: "Application Health Checks",
    description: "Dedicated /health endpoints reporting container liveness and database connectivity",
    status: "Implemented",
  },
  {
    topic: "Graceful Error Boundaries",
    description: "Catching runtime exceptions gracefully without tearing down the client application",
    status: "Implemented",
  },
  {
    topic: "Append-Only Audit Logs",
    description: "Persisting historical records of state mutations with timestamped user context",
    status: "Implemented",
  },
  {
    topic: "Metrics & Telemetry",
    description: "Tracking request latency, throughput, and error rate indicators",
    status: "Learning & Applying",
  },
  {
    topic: "AWS CloudWatch Ingestion",
    description: "Centralized log streaming and automated alarm thresholds on error spikes",
    status: "Learning & Applying",
  },
  {
    topic: "OpenTelemetry Standards",
    description: "Studying vendor-neutral distributed tracing and context propagation across services",
    status: "Learning & Applying",
  },
  {
    topic: "Retry Strategies & Backoff",
    description: "Implementing exponential backoff with jitter for resilient external API integration",
    status: "Learning & Applying",
  },
];

export const CLOUD_ROADMAP_DATA: RoadmapMilestone[] = [
  {
    step: 1,
    title: "Containerize a full-stack application with Docker",
    status: "Completed",
    evidenceNote: "Implemented multi-service Dockerfiles and Compose configurations in HomeMind AI and AI Finance Controller.",
  },
  {
    step: 2,
    title: "Deploy a Docker application on AWS",
    status: "Next Milestone",
    evidenceNote: "Planning EC2 / ECS container deployment for practical production hosting.",
  },
  {
    step: 3,
    title: "Configure AWS networking and IAM securely",
    status: "Learning",
    evidenceNote: "Studying VPC subnets, security group ingress rules, and least-privilege IAM roles.",
  },
  {
    step: 4,
    title: "Build a GitHub Actions CI pipeline",
    status: "Learning",
    evidenceNote: "Automating test execution, typecheck, linting, and build verification on push.",
  },
  {
    step: 5,
    title: "Deploy services through ECS",
    status: "Learning",
    evidenceNote: "Exploring task definitions, service scaling, and Application Load Balancer routing.",
  },
  {
    step: 6,
    title: "Learn Kubernetes locally with Minikube or kind",
    status: "Learning",
    evidenceNote: "Running local multi-node clusters and executing kubectl command workflows.",
  },
  {
    step: 7,
    title: "Create Deployments, Services, ConfigMaps, and Secrets",
    status: "Learning",
    evidenceNote: "Authoring declarative Kubernetes YAML manifests for decoupled configuration.",
  },
  {
    step: 8,
    title: "Explore managed Kubernetes through Amazon EKS",
    status: "Target",
    evidenceNote: "Targeting managed EKS control plane provisioning and worker node groups.",
  },
  {
    step: 9,
    title: "Add monitoring, logs, health checks, and alerts",
    status: "Learning & Applying",
    evidenceNote: "Implementing centralized structured logging, Prometheus metrics, and CloudWatch alarms.",
  },
];
