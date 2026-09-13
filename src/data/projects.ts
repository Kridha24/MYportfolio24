import { Project } from "@/types/portfolio";
import { PROJECT_LINKS } from "./links";

export const PROJECTS_DATA: Project[] = [
  {
    id: "homemind-ai",
    slug: "homemind-ai",
    title: "HomeMind AI",
    subtitle: "Intelligent Household Management Platform",
    category: "Full-Stack SaaS · AI-Assisted Household Management",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Prisma",
      "Socket.IO",
      "Docker",
    ],
    description:
      "A multi-tenant household management platform that unifies expenses, bills, groceries, appliances, medicines, tasks, sustainability insights, and AI-assisted household workflows.",
    keyPoints: [
      "Multi-tenant data isolation: every record carries a mandatory householdId with role-based access controls (OWNER, ADMIN, MEMBER)",
      "Integrated household finance: unified expense logging, income tracking, monthly budget caps, and upcoming bill reminders",
      "Pantry & grocery inventory: quantity tracking, low-stock threshold triggers, and expiry date warnings",
      "Home appliance maintenance: warranty expiration countdowns and scheduled servicing logs",
      "Family medicine tracker: prescription details, pill inventories, and member dosage schedule completion",
      "Collaborative task engine: shared family chores with priority flags (LOW, MEDIUM, HIGH, URGENT) and assignment states",
      "Database-grounded AI assistant: natural language assistant scoped to tenant household records and structured schema context",
      "Streaming PDF exporter: automated executive monthly household summaries generated on the server using PDFKit",
    ],
    conceptualArchitecture: [
      "React + Vite Frontend",
      "REST & Socket.IO Gateway",
      "Node.js & Express Controller Tier",
      "Prisma ORM & Tenant Scoping",
      "FastAPI AI & Intelligence Engine",
      "PostgreSQL / SQLite Storage Engine",
    ],
    repositoryUrl: PROJECT_LINKS.homemind.repositoryUrl,
    liveDemoUrl: PROJECT_LINKS.homemind.liveDemoUrl,
    isRepoAvailable: PROJECT_LINKS.homemind.isRepoAvailable,
    isDemoAvailable: PROJECT_LINKS.homemind.isDemoAvailable,
    caseStudy: {
      overview:
        "Families often use separate applications, spreadsheets, notes, calendars, and messaging platforms to manage household activities. HomeMind AI explores how these fragmented workflows can be brought into one connected system with shared household context.",
      problem:
        "Household information is distributed across disconnected tools. Expense and bill tracking often depends on manual updates. Grocery expiry and low-stock items can be overlooked. Appliance warranties and maintenance records are difficult to organize. Medicine schedules and family tasks lack a shared workspace. Existing tools often focus on only one household-management category, and family data requires careful tenant isolation and authorization.",
      intendedUsers: [
        "Busy households coordinating shared expenses, bills, and domestic responsibilities",
        "Family members managing shared pantry supplies, appliance warranties, and maintenance records",
        "Caregivers scheduling prescription dosages and routine family medication intakes",
      ],
      solution:
        "HomeMind AI provides a shared household workspace containing expense and income management, budget tracking, bill reminders, grocery and pantry inventory, expiry and low-stock monitoring, appliance warranty and maintenance records, medicine and intake scheduling, household task management, notifications, sustainability records, AI-assisted household queries, and report generation.",
      systemArchitectureDescription:
        "The system is structured as a multi-service architecture coordinated locally via Docker Compose. A React 18 frontend communicates over REST and Socket.IO with a Node.js and Express backend. The backend enforces JWT authentication, attaches household context, and accesses data through Prisma ORM. For specialized AI and analytical tasks, the backend proxies requests over an internal Docker network with a shared secret header to a dedicated Python FastAPI service handling OCR prototypes, polynomial forecasting, and database-grounded conversational assistance. Note: Prisma-backed persistence uses SQLite in the current schema and a PostgreSQL-oriented container configuration.",
      techChoices: [
        {
          tech: "React + TypeScript",
          reason:
            "Used to build a modular, typed frontend with reusable components and predictable data contracts.",
        },
        {
          tech: "Node.js + Express",
          reason:
            "Used for authentication, household-scoped APIs, business logic, resource management, and event integration.",
        },
        {
          tech: "FastAPI (Python)",
          reason:
            "Used as a separate Python service for AI/ML-oriented workflows such as OCR, forecasting, recommendations, and conversational assistance.",
        },
        {
          tech: "Prisma ORM",
          reason:
            "Used to model household relationships and provide structured access to application data.",
        },
        {
          tech: "Socket.IO",
          reason:
            "Included for event-driven communication and household synchronization where implemented.",
        },
        {
          tech: "Firebase & Google OAuth",
          reason:
            "Used to support phone-based authentication and Google sign-in flows.",
        },
        {
          tech: "Docker Compose",
          reason:
            "Used to coordinate the frontend, API server, AI service, and database during containerized setup.",
        },
      ],
      majorFeatures: [
        "Household-Scoped Data Isolation: Enforces householdId isolation at the database model and API controller layers.",
        "Unified Household Finance: Comprehensive tracking of expenses, multiple income streams, category budgets, and bill cycles.",
        "Pantry & Inventory Management: Tracks groceries, stock quantities, expiry dates, and automated low-stock warnings.",
        "Appliance Life-Cycle Tracking: Logs appliance purchases, warranty expiration countdowns, and maintenance records.",
        "Family Medicine & Prescription Tracker: Organizes dosages, pill inventories, and daily intake schedules per family member.",
        "Household Task & Chore Workspace: Distributes responsibilities across family members with priority tags and collaborative status tracking.",
        "Database-Grounded AI Assistant: Queries tenant household records to answer spending, bill, and chore queries based on retrieved context.",
        "Executive PDF Report Generation: Compiles monthly financial and operational household reports via PDFKit streaming.",
      ],
      engineeringChallenges: [
        {
          title: "Maintaining Household Context Across Resources",
          problem:
            "Ensuring that every query and mutation automatically resolves and respects the authenticated user's householdId without requiring manual parameters on every endpoint.",
          resolution:
            "Designed dedicated Express middleware (attachHousehold, validateSession) that verifies the user's active household from the verified JWT payload and injects it into controller queries.",
        },
        {
          title: "Separating General Backend Logic from Python AI Workloads",
          problem:
            "Running ML and data processing alongside high-throughput REST APIs without blocking the Node.js event loop.",
          resolution:
            "Architected an internal Python FastAPI microservice communicating over private Docker network channels with a shared secret header (X-AI-Service-Secret).",
        },
        {
          title: "Coordinating Authentication Across Google & Phone Flows",
          problem:
            "Supporting both Google OAuth and Mobile OTP without fragmenting user accounts or household memberships.",
          resolution:
            "Designed a unified user model with unique index constraints on email and phone, linking whichever identifier is provided to the primary household record.",
        },
        {
          title: "Aligning Database Schemas with Containerized Orchestration",
          problem:
            "Navigating a local development SQLite configuration while maintaining a PostgreSQL-ready container specification in Docker Compose.",
          resolution:
            "Transparently documented and managed environment variable mappings, preparing for seamless transition between development and production database providers.",
        },
      ],
      securityConsiderations: [
        "JWT-based authentication with 15-minute access tokens and database-tracked refresh tokens",
        "Controller-level household scoping and role-based access control (OWNER, ADMIN, MEMBER, GUEST)",
        "Zod input validation on authentication and sensitive mutation endpoints",
        "Helmet HTTP header hardening and Express rate limiting on authentication routes",
        "Isolated internal network for AI microservice with shared secret authentication",
        "Audit-oriented schema fields (createdBy, updatedBy, softDelete, createdAt, updatedAt)",
        "Security controls describe the implemented architecture and are not a substitute for an independent production security audit.",
      ],
      futureImprovements: [
        "Resolve SQLite/PostgreSQL configuration alignment across all environments",
        "Add automated integration and end-to-end test suites",
        "Perform an independent tenant-isolation security audit",
        "Implement production-grade distributed rate limiting (e.g. Redis-backed)",
        "Improve OCR evaluation using a labelled receipt dataset",
        "Evaluate forecasting models with reproducible evaluation metrics",
        "Add notification delivery infrastructure (SMS/Email/Push integration)",
        "Add observability and structured production monitoring",
      ],
    },
  },
  {
    id: "ai-finance-controller",
    slug: "ai-finance-controller",
    title: "AI Finance Controller",
    subtitle: "Multi-Source Financial Reconciliation & Cash Operations",
    category: "FinTech · AI-Assisted Automation",
    featured: true,
    technologies: [
      "Python",
      "FastAPI",
      "Pandas",
      "Pydantic",
      "SQLite",
      "Streamlit",
      "Docker",
      "OpenAI (Optional)",
    ],
    description:
      "A verification-first finance operations system built for Track 04 Razorpay Hackathon that reconciles invoices against bank transactions, identifies unresolved exceptions, scores transaction risk, processes Razorpay webhooks, and supports human review.",
    keyPoints: [
      "Two-pass reconciliation engine: Pass 1 deterministic matching (exact integer cents and counterparty) followed by Pass 2 multi-signal fuzzy matching",
      "Independent threshold gating: requires amount variance ≤5%, counterparty similarity ≥50%, and date proximity ≤5 days before accepting fuzzy matches",
      "Bijective 1:1 set locking: matched invoices and transactions are immediately locked into matched sets to prevent double-counting or re-matching",
      "Integer-cents arithmetic: eliminates IEEE 754 floating-point rounding errors during currency conversions and threshold comparisons",
      "Append-only SQLite WAL audit trail: database triggers reject UPDATE and DELETE operations on audit_logs to guarantee tamper resistance",
      "HMAC-SHA256 Razorpay webhook handler: validates cryptographic signatures and uses an idempotent processed_events table to prevent replay attacks",
      "Dynamic behavioral baseline: calculates merchant z-scores on invoice frequency and volume, adapting baselines from human approval decisions",
      "Reproduced test invariants: verified with 27/27 passing pytest tests and benchmark-verified deterministic matching on synthetic test datasets",
    ],
    conceptualArchitecture: [
      "Ingestion & Normalization (Pandas, Pydantic)",
      "Pass 1: Deterministic Matcher (Exact Cents + Counterparty)",
      "Pass 2: Multi-Signal Fuzzy / Heuristic Matcher",
      "Risk Engine & Behavioral Baselines",
      "Human Review & Exception Routing Workbench",
      "FastAPI Service Tier & Razorpay Webhook Receiver",
      "Streamlit Interactive Operations Console",
      "SQLite WAL Store with Persistent Append-Only Audit Triggers",
    ],
    repositoryUrl: PROJECT_LINKS.financeController.repositoryUrl,
    liveDemoUrl: PROJECT_LINKS.financeController.liveDemoUrl,
    isRepoAvailable: PROJECT_LINKS.financeController.isRepoAvailable,
    isDemoAvailable: PROJECT_LINKS.financeController.isDemoAvailable,
    caseStudy: {
      overview:
        "Built as a submission for Track 04 of the Razorpay Hackathon, the AI Finance Controller explores how modern finance operations can automate repetitive reconciliation tasks without surrendering verification rigor. It pairs high-speed deterministic matching with multi-signal fuzzy heuristics and human oversight.",
      problem:
        "Finance and accounting teams spend countless manual hours cross-referencing invoice registers against bank statements and payment processor feeds. Traditional processes suffer from minor fee variances (e.g. gateway commissions), subtle counterparty name variations, timing delays, and the catastrophic risk of double-counting transactions. Relying entirely on ungrounded AI models introduces hallucinations into accounting ledgers, while purely manual review does not scale.",
      intendedUsers: [
        "Finance operations leads automating daily transaction matching across bank feeds and accounting ledgers",
        "Accounts receivable / accounts payable specialists reviewing ambiguous variances, fee discrepancies, and vendor aliases",
        "Internal auditors requiring a persistent, append-only audit trail of reconciliation decisions and manual overrides",
      ],
      solution:
        "AI Finance Controller implements a verification-first pipeline: Pass 1 deterministically matches identical transactions at over 5,000 records per second. Unmatched records flow to Pass 2, which evaluates amount variance, vendor string similarity, and calendar proximity under strict gating rules. Ambiguous matches and fee discrepancies are routed to an exception workbench where finance operators can approve variances, post GL entries, file disputes, or execute write-offs. All decisions update behavioral baselines and record persistent audit log entries.",
      systemArchitectureDescription:
        "The system is architected in Python with clean separation across ingestion, reconciliation, risk assessment, human feedback, and persistence layers. Ingestion handles CSV data feeds through Pandas with robust column alias resolution, currency cleansing, and integer-cents normalization. The reconciliation engine runs deterministic hashing first, followed by multi-signal fuzzy scoring using difflib with optional OpenAI natural language reasoning. Persistence is managed via SQLite in WAL mode with native SQL triggers enforcing append-only persistence on audit logs. Operational interfaces are exposed through a FastAPI backend (including an HMAC-SHA256 Razorpay webhook receiver) and a multi-page Streamlit operations console.",
      techChoices: [
        {
          tech: "Python & Pandas",
          reason:
            "Vectorized processing and flexible column alias mapping for ingesting diverse bank and invoice CSV schemas.",
        },
        {
          tech: "FastAPI",
          reason:
            "High-performance async REST API framework for webhook ingestion, manual review actions, and programmatic reconciliation endpoints.",
        },
        {
          tech: "Pydantic",
          reason:
            "Strict schema validation and runtime type coercion for inbound transactions, invoices, and webhook payloads.",
        },
        {
          tech: "SQLite (WAL Mode)",
          reason:
            "Lightweight, zero-config relational persistence with Write-Ahead Logging and database triggers that prevent modification of audit records.",
        },
        {
          tech: "Streamlit",
          reason:
            "Rapid, interactive operations console providing finance operators with interactive operational dashboards, match queues, exception triage, and audit inspection.",
        },
        {
          tech: "OpenAI API (Optional)",
          reason:
            "Optional enrichment tier for contextual explanation of complex vendor mismatches; graceful heuristic fallback operates completely offline with zero degradation in precision.",
        },
        {
          tech: "Docker",
          reason:
            "Containerized deployment bundling FastAPI and Streamlit services into reproducible environments.",
        },
      ],
      majorFeatures: [
        "Two-Pass Reconciliation Engine: Deterministic matching followed by multi-signal fuzzy matching with independent gating.",
        "Bijective 1:1 Set Locking: Guaranteed prevention of double-matching or multi-assignment across invoices and bank transactions.",
        "Integer-Cents Financial Math: All monetary calculations are performed in integer cents to eliminate floating-point drift.",
        "Three-Way Status Routing: Transactions are categorized into Verified Matches (≥0.80), Review Required (0.60–0.79), and Unmatched Exceptions (<0.60).",
        "Risk Engine & Behavioral Baselines: Computes merchant volume/frequency z-scores and flags anomalies against historical spending profiles.",
        "Exception Workbench with Human Review: Operators can execute Approve Variance, Post GL Entry, File Dispute, or Write-Off.",
        "HMAC-SHA256 Razorpay Webhooks: Cryptographic signature verification with idempotent deduplication via processed_events table.",
        "Append-Only SQLite WAL Audit Trail: Database triggers explicitly raise errors on UPDATE or DELETE operations on audit_logs.",
      ],
      engineeringChallenges: [
        {
          title: "Guaranteed Elimination of Double-Matching",
          problem:
            "In multi-pass reconciliation, an invoice matched on Pass 1 could inadvertently be evaluated and re-matched against a similar transaction in Pass 2, distorting financial balances.",
          resolution:
            "Implemented bijective 1:1 set locking where matched invoice and transaction IDs are stored in in-memory sets and skipped in subsequent passes.",
        },
        {
          title: "Zero-Dependency Heuristic Fallback",
          problem:
            "LLM APIs can experience rate limits, latency spikes, or network outages, which cannot be allowed to stall core financial reconciliation workflows.",
          resolution:
            "Architected a dual-engine design where difflib-based string similarity and mathematical gating run locally by default, utilizing LLMs only as an optional reasoning layer.",
        },
        {
          title: "Tamper-Resistant Local Audit Logging",
          problem:
            "Application-level audit logs can be bypassed or overwritten if application logic has bugs or is misconfigured.",
          resolution:
            "Enforced immutability at the SQLite storage layer using database triggers that throw an abort exception on any UPDATE or DELETE statement targeting audit_logs.",
        },
      ],
      securityConsiderations: [
        "HMAC-SHA256 cryptographic signature validation on inbound Razorpay webhook payloads to verify origin authenticity.",
        "Idempotency protection via processed_events tracking to eliminate webhook replay and duplicate charge reconciliation.",
        "Append-only database triggers on audit_logs preventing any programmatic update or deletion of reconciliation history.",
        "Integer-cents conversion and non-negative amount validation preventing numeric overflow, underflow, and sign tampering.",
        "These controls demonstrate security-conscious engineering, but the project has not been represented as independently audited for production financial use.",
      ],
      futureImprovements: [
        "Support many-to-one and one-to-many reconciliation (e.g. batch payments covering multiple invoices).",
        "Integrate with production ERP systems (e.g. Tally, Zoho Books, NetSuite) via formal connector APIs.",
        "Implement distributed persistence (PostgreSQL with row-level locking) for multi-tenant concurrent operations.",
        "Evaluate reconciliation accuracy against live non-synthetic enterprise financial datasets.",
        "Add automated end-to-end webhook replay testing under high-concurrency loads.",
      ],
    },
  },
  {
    id: "traffiq",
    slug: "traffiq",
    title: "TRAFFIQ",
    subtitle: "AI-Powered Smart Traffic Management System",
    category: "AI & Computer Vision",
    featured: true,
    technologies: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "FastAPI",
      "JavaScript",
      "PostgreSQL",
      "RTSP",
    ],
    description:
      "An intelligent traffic-management system designed to process video and RTSP camera feeds, detect and tally vehicles across designated intersection zones, and dynamically compute green-signal durations based on traffic density.",
    keyPoints: [
      "Low-latency vehicle detection and classification using YOLOv8 and OpenCV",
      "CCTV and RTSP stream ingest and frame extraction",
      "Region of Interest (ROI) polygon masks to prevent false counting from outside lanes",
      "Lane-specific vehicle-density analytics engine",
      "Adaptive signal duration algorithm designed to balance green-light intervals",
      "FastAPI asynchronous web services providing telemetry to operator consoles",
      "PostgreSQL persistence layer for logging hourly intersection flow trends",
    ],
    conceptualArchitecture: [
      "RTSP Camera Feed",
      "Frame Ingestion & Preprocessing",
      "YOLOv8 Object Detection",
      "ROI Polygon Filtering & Counting",
      "Adaptive Signal-Timing Engine",
      "Operator Monitoring Dashboard",
    ],
    repositoryUrl: PROJECT_LINKS.traffiq.repositoryUrl,
    liveDemoUrl: PROJECT_LINKS.traffiq.liveDemoUrl,
    isRepoAvailable: PROJECT_LINKS.traffiq.isRepoAvailable,
    isDemoAvailable: PROJECT_LINKS.traffiq.isDemoAvailable,
    caseStudy: {
      overview:
        "Conventional urban traffic signals operate on static, hard-coded timer cycles that do not reflect instantaneous road occupancy. TRAFFIQ was engineered as a computer-vision-driven traffic intelligence prototype that ingests video feeds from intersection cameras, isolates directional corridors using polygonal Regions of Interest (ROIs), identifies vehicles through YOLOv8, and feeds calculated density numbers into an adaptive timing engine to regulate signal cycles.",
      problem:
        "Fixed-timer traffic controllers induce unnecessary waiting periods on vacant road approaches while congested approaches accumulate lengthy queues. This leads to idling, inefficient urban throughput, and difficulty for municipal teams to observe intersection choke points in real time without expensive embedded inductive road loops.",
      intendedUsers: [
        "Municipal traffic management authorities and urban mobility planners",
        "Traffic operations center engineers monitoring junction health",
        "Research teams evaluating adaptive signal algorithm modeling",
      ],
      solution:
        "TRAFFIQ replaces static timers with an automated vision-to-signal feedback loop. By deploying YOLOv8 object detection on low-latency RTSP camera streams, the system identifies cars, buses, trucks, and two-wheelers within calibrated polygon zones. It maps vehicle volume per approach lane to dynamic time slots, exposing traffic telemetry through an operator dashboard powered by FastAPI.",
      systemArchitectureDescription:
        "The system pipeline is partitioned into distinct ingest, inference, calculation, and presentation tiers. Video streams arrive over RTSP into OpenCV video capture workers. Frames are resized and filtered through lane-specific ROI masks before inference by a YOLOv8 model. The vehicle count across active phases is passed to the signal timing logic, which computes proportional green-window allocations. Structured logs are committed to PostgreSQL, while FastAPI streams telemetry to the frontend.",
      techChoices: [
        {
          tech: "YOLOv8 & OpenCV",
          reason:
            "Selected for low-latency edge inference performance and bounding-box tracking accuracy across vehicle classifications under diverse illumination.",
        },
        {
          tech: "FastAPI & Asynchronous Python",
          reason:
            "Provides an event-driven, non-blocking REST and WebSocket API capable of serving real-time telemetry from video analysis workers without stalling UI updates.",
        },
        {
          tech: "PostgreSQL",
          reason:
            "Offers structured schema persistence for intersection configurations, hourly volume aggregates, and signal timing historical audits.",
        },
        {
          tech: "RTSP Protocol",
          reason:
            "Standardizes video ingest from commercial IP and traffic surveillance cameras with low network encapsulation overhead.",
        },
      ],
      majorFeatures: [
        "Multi-Lane Polygonal ROI Calibration: Configurable detection zones mapped to individual intersection approaches.",
        "Vehicle Categorization: Segregates cars, commercial trucks, buses, and two-wheelers for weighted density calculations.",
        "Adaptive Green-Allocation Logic: Modulates minimum and maximum green time limits dynamically based on current queue density.",
        "Operator Telemetry Interface: Displays instantaneous vehicle tallies, signal phase states, and stream health status.",
        "Historical Volume Logging: Records density trends to support traffic engineering reviews.",
      ],
      engineeringChallenges: [
        {
          title: "Frame Dropping Under Network Jitter",
          problem:
            "Network latency variations over RTSP feeds caused buffer accumulation and pipeline lag when the inference worker fell behind incoming stream frame rates.",
          resolution:
            "Implemented a dedicated background worker thread with a circular buffer that drops outdated intermediate frames and feeds only the freshest available frame to YOLOv8.",
        },
        {
          title: "Adjacent Lane Occlusion and False Positives",
          problem:
            "Vehicles in oncoming lanes or pedestrians on sidewalks were initially triggering counts in adjacent lanes.",
          resolution:
            "Created fine-grained convex polygon masks for each approach lane, computing the vehicle centroid before registering an increment.",
        },
        {
          title: "Signal Starvation Prevention",
          problem:
            "Heavily congested arterial roads risked indefinitely starving lower-density cross-streets of green signals.",
          resolution:
            "Engineered strict boundary clamping with guaranteed maximum waiting timeouts to enforce fair phase cycling.",
        },
      ],
      securityConsiderations: [
        "Stream Credential Vaulting: RTSP URLs and camera authentication tokens are kept server-side and never exposed to client browsers.",
        "Operator Role Isolation: Operational control endpoints require authentication to prevent unauthorized signal override commands.",
        "Input Sanitization on Configuration Endpoints: Polygon coordinates and camera parameters are validated against strict coordinate bounds.",
      ],
      futureImprovements: [
        "Emergency Vehicle Preemption: Priority acoustic or optical detection for ambulances and fire rescue vehicles.",
        "Multi-Intersection Corridor Synchronization: Coordinated green waves across sequential junctions on major arterial roads.",
        "Edge Device Packaging: Porting the inference pipeline to NVIDIA Jetson edge compute modules for localized junction execution.",
      ],
    },
  },
  {
    id: "buildease",
    slug: "buildease",
    title: "BuildEase",
    subtitle: "Full-Stack Construction Management Platform",
    category: "Full-Stack Development",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Git",
    ],
    description:
      "A modular construction procurement and project collaboration web platform built to connect property owners, general contractors, and material vendors with role-based access control and real-time messaging.",
    keyPoints: [
      "Modular, responsive user interfaces developed with React, TypeScript, and Vite",
      "RESTful backend microservices designed in Node.js and Express.js",
      "Role-based JSON Web Token (JWT) authentication workflow with token invalidation strategy",
      "Granular role-based access control (RBAC) separating Owners, Contractors, and Vendors",
      "Injection protection, query validation, and helmet security middleware",
      "Bi-directional real-time chat and milestone notifications powered by Socket.IO",
      "Structured procurement and bid evaluation workflows with MongoDB document schemas",
    ],
    conceptualArchitecture: [
      "React Client",
      "Express REST API",
      "Authentication & RBAC Middleware",
      "MongoDB Document Store",
    ],
    dualFlowArchitecture: {
      restFlow: [
        "React Client",
        "Express REST API",
        "Authentication & RBAC Middleware",
        "MongoDB Document Store",
      ],
      socketFlow: [
        "React Client",
        "Socket.IO Server",
        "Room-Based Dispatcher",
        "Real-Time Messaging Sync",
      ],
    },
    repositoryUrl: PROJECT_LINKS.buildease.repositoryUrl,
    liveDemoUrl: PROJECT_LINKS.buildease.liveDemoUrl,
    isRepoAvailable: PROJECT_LINKS.buildease.isRepoAvailable,
    isDemoAvailable: PROJECT_LINKS.buildease.isDemoAvailable,
    caseStudy: {
      overview:
        "Construction projects often suffer from fragmented communication, opaque bidding processes, and disorganized procurement logs spread across emails, phone calls, and paper invoices. BuildEase was developed as a unified full-stack web platform engineered to bring homeowners, licensed general contractors, and building material vendors into a collaborative environment with role-tailored views and collaborative communications.",
      problem:
        "Small-to-medium construction operations lack accessible enterprise software for transparent vendor bidding and synchronized project updates. Homeowners lack visibility into material procurement costs, while contractors struggle to coordinate bids across multiple sub-vendors without administrative overhead.",
      intendedUsers: [
        "Property owners and residential developers tracking project phases and expenses",
        "General contractors managing trade teams, project milestones, and subcontractor bids",
        "Building material suppliers and vendors submitting quotations and tracking deliveries",
      ],
      solution:
        "BuildEase delivers role-specific dashboards where owners can post project requirements, contractors can submit itemized bids, and vendors can furnish material quotes. A Socket.IO communication backbone enables instant coordination within project-specific chat channels, while an Express.js API guards all transactions with strict role-based access control.",
      systemArchitectureDescription:
        "The application architecture uses a decoupled React/TypeScript single-page frontend interacting with an Express.js backend. State persistence is managed through MongoDB using Mongoose schemas for users, projects, bids, and chat logs. Bi-directional WebSocket channels managed by Socket.IO handle instantaneous message exchange between project participants.",
      techChoices: [
        {
          tech: "React & TypeScript",
          reason:
            "Provides component modularity, compile-time type safety across complex project states, and predictable UI rendering.",
        },
        {
          tech: "Node.js & Express.js",
          reason:
            "Delivers an event-driven, lightweight REST API capable of serving concurrent client requests and managing WebSocket upgrade handshakes.",
        },
        {
          tech: "MongoDB & Mongoose",
          reason:
            "Flexible document schema accommodates evolving project blueprints, multi-item bid breakdowns, and chat message history.",
        },
        {
          tech: "Socket.IO",
          reason:
            "Ensures dependable real-time messaging with automatic fallback to HTTP long-polling when WebSocket firewalls are encountered.",
        },
      ],
      majorFeatures: [
        "Multi-Tier Role-Based Authorization: Dedicated dashboard experiences and permissions for Owners, Contractors, and Vendors.",
        "Bid Creation & Evaluation Pipeline: Contractors submit itemized estimates that owners can review, accept, or negotiate.",
        "Project-Scoped Real-Time Messaging: Socket.IO rooms partitioned by project ID for immediate coordination between stakeholders.",
        "Procurement Tracking: Structured tracking of material requests, vendor approvals, and status transitions.",
        "Session Lifecycle: JWT authentication with cookie/bearer patterns and sanitized user credentials.",
      ],
      engineeringChallenges: [
        {
          title: "Real-Time Room Management & Disconnection Recovery",
          problem:
            "Users experiencing intermittent connectivity on active job sites dropped out of chat rooms and missed updates.",
          resolution:
            "Implemented socket re-authentication and automated room re-subscription logic with timestamp-based offline message synchronization.",
        },
        {
          title: "Role Escalation & Unauthorized Access Prevention",
          problem:
            "Need to ensure that vendors could not view competing vendor bids or access sensitive owner budget information.",
          resolution:
            "Designed a declarative middleware layer verifying both general role tokens and resource-level ownership before returning database queries.",
        },
        {
          title: "NoSQL Query Sanitization",
          problem:
            "Vulnerability of NoSQL document stores to operator injection in complex filter queries.",
          resolution:
            "Integrated schema-level data sanitization and strict validation schemas ensuring all query parameters conform to predefined types.",
        },
      ],
      securityConsiderations: [
        "JWT Verification Middleware: Enforces cryptographically signed tokens on all protected API routes.",
        "NoSQL Injection Mitigation: Strict input schemas and parameter validation eliminate unescaped MongoDB operators ($gt, $where).",
        "CORS and Helmet Headers: Configured with restricted origin allowances and standard security headers against clickjacking and MIME sniffing.",
      ],
      futureImprovements: [
        "Escrow Payment Gateway: Milestone-based funds release upon contractor sign-off.",
        "Blueprint Document Annotation: Interactive architectural PDF markup and revision tracking inside the browser.",
        "Offline-First Mobile PWA: Enabling field supervisors to log progress entries while working in basements without mobile connectivity.",
      ],
    },
  },
];
