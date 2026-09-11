import { Project } from "@/types/portfolio";
import { PROJECT_LINKS } from "./links";

export const PROJECTS_DATA: Project[] = [
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
      "An intelligent traffic-management system designed to process live CCTV camera feeds, detect and tally vehicles across designated intersection zones, and dynamically compute green-signal durations based on real-time traffic density.",
    keyPoints: [
      "Real-time vehicle detection and classification using YOLOv8 and OpenCV",
      "Live CCTV and RTSP stream ingest and frame extraction",
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
        "TRAFFIQ replaces static timers with an automated vision-to-signal feedback loop. By deploying YOLOv8 object detection on low-latency RTSP camera streams, the system identifies cars, buses, trucks, and two-wheelers within calibrated polygon zones. It maps vehicle volume per approach lane to dynamic time slots, exposing live status through an operator dashboard powered by FastAPI.",
      systemArchitectureDescription:
        "The system pipeline is partitioned into distinct ingest, inference, calculation, and presentation tiers. Video streams arrive over RTSP into OpenCV video capture workers. Frames are resized and filtered through lane-specific ROI masks before inference by a YOLOv8 model. The vehicle count across active phases is passed to the signal timing logic, which computes proportional green-window allocations. Structured logs are committed to PostgreSQL, while FastAPI streams telemetry to the frontend.",
      techChoices: [
        {
          tech: "YOLOv8 & OpenCV",
          reason:
            "Selected for real-time edge inference performance and bounding-box tracking accuracy across vehicle classifications under diverse illumination.",
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
        "Live Operator Telemetry Interface: Displays instantaneous vehicle tallies, signal phase states, and stream health status.",
        "Historical Volume Logging: Records density trends to support traffic engineering reviews.",
      ],
      engineeringChallenges: [
        {
          title: "Frame Dropping Under Network Jitter",
          problem:
            "Network latency variations over RTSP feeds caused buffer accumulation and pipeline lag when the inference worker fell behind real-time playback.",
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
      "Secure JSON Web Token (JWT) authentication workflow with token invalidation strategy",
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
        "Construction projects often suffer from fragmented communication, opaque bidding processes, and disorganized procurement logs spread across emails, phone calls, and paper invoices. BuildEase was developed as a unified full-stack web platform engineered to bring homeowners, licensed general contractors, and building material vendors into a collaborative environment with role-tailored views and live communications.",
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
        "Secure Session Lifecycle: JWT authentication with cookie/bearer patterns and sanitized user credentials.",
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
        "Escrow Payment Gateway: Secure milestone-based funds release upon contractor sign-off.",
        "Blueprint Document Annotation: Interactive architectural PDF markup and revision tracking inside the browser.",
        "Offline-First Mobile PWA: Enabling field supervisors to log progress entries while working in basements without mobile connectivity.",
      ],
    },
  },
];
