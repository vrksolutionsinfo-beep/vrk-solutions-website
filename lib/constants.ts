export const COMPANY = {
  name: "VRK Solutions",
  legalName: "VRK Solutions",
  websiteUrl: "https://vrksolutions.in",
  email: "info@vrksolutions.in",
  phone: "+91 9398845947",
  phoneInternational: "+919398845947",
  phoneRaw: "919398845947",
  tagline: "WE BUILD. WE SCALE. WE DOMINATE.",
  originalStatement: "we built we scale we dominate",
  headline: "We Build Digital Experiences That Move Businesses Forward.",
  subheadline: "From ambitious websites to intelligent software platforms, VRK Solutions designs and engineers digital products built for real business growth.",
  establishedLocation: "Hyderabad, India",
  operatingScope: "Serving startups, SMEs, enterprise teams, domestic and international clients globally.",
};

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  heroSummary: string;
  valueProposition: string;
  businessProblems: string[];
  capabilities: { title: string; description: string }[];
  methodology: { step: string; title: string; description: string }[];
  applications: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "website-design-development",
    slug: "website-design-development",
    number: "01",
    name: "Website Design & Development",
    shortDescription: "High-performance corporate websites, editorial brand platforms, and conversion-focused web experiences built for long-term scalability.",
    heroHeadline: "Bespoke Corporate Websites Built for Authority and Conversion.",
    heroSummary: "We architect, design, and code custom corporate web platforms that blend distinctive brand identity with rock-solid engineering, accessibility, and search dominance.",
    valueProposition: "Most corporate websites suffer from generic templates, bloated code, and poor conversion. We build purpose-engineered digital platforms with clean architecture, sub-second load times, and intuitive editorial management.",
    businessProblems: [
      "Outdated corporate websites failing to represent modern engineering capabilities",
      "Slow page speeds, poor Core Web Vitals, and declining organic search performance",
      "Rigid legacy CMS platforms requiring developers for basic content updates",
      "Inaccessible UI failing international accessibility and compliance standards",
      "Low lead conversion from unqualified traffic and weak UX design"
    ],
    capabilities: [
      {
        title: "Corporate & Brand Websites",
        description: "Art-directed digital experiences tailored to enterprise positioning, international stakeholders, and institutional credibility."
      },
      {
        title: "Responsive & Fluid Layout Systems",
        description: "Precision-engineered viewport adaptations across mobile, tablet, laptop, and ultra-wide displays without layout shifts."
      },
      {
        title: "Content-Managed Architecture",
        description: "Modern headless CMS implementations (Sanity, custom schemas) providing non-technical teams with effortless content sovereignty."
      },
      {
        title: "Core Web Vitals & Performance Engineering",
        description: "Zero-bloat bundle sizes, optimized server-side rendering, sub-second TTFB, and strict asset optimization."
      },
      {
        title: "Website Modernization & Migration",
        description: "Safe refactoring and replatforming of legacy codebases without SEO traffic disruption or data loss."
      }
    ],
    methodology: [
      { step: "01", title: "Information Architecture", description: "Mapping sitemaps, user personas, conversion funnels, and technical constraints." },
      { step: "02", title: "Visual & System Design", description: "Crafting bespoke typography, layout tokens, high-contrast light surfaces, and micro-interactions." },
      { step: "03", title: "Modern Web Engineering", description: "Next.js App Router, TypeScript strict mode, responsive CSS, and accessible semantic HTML." },
      { step: "04", title: "Verification & Handover", description: "Lighthouse audits, cross-browser validation, WCAG AA compliance checks, and editor onboarding." }
    ],
    applications: [
      "Enterprise Corporate Web Platforms",
      "Technology & Consultancy Portals",
      "SaaS Product Marketing Websites",
      "Institutional & B2B Service Hubs"
    ],
    faqs: [
      {
        question: "Can our team easily update content after launch?",
        answer: "Yes. Every website we build includes a customized headless CMS configured specifically for your team's publishing workflows. Non-technical staff can update copy, case studies, media, and metadata without touching code."
      },
      {
        question: "How do you ensure the website is fast and search-ready?",
        answer: "We engineer server-side rendered pages with Next.js, implement automated asset compression, enforce zero-layout-shift rules, and embed structured JSON-LD schemas alongside canonical URL configurations."
      },
      {
        question: "Do you handle domain setup and hosting configuration?",
        answer: "Yes, we handle complete production deployment, DNS configuration, SSL certification, and edge CDN routing."
      }
    ]
  },
  {
    id: "web-applications-saas",
    slug: "web-applications-saas",
    number: "02",
    name: "Web Applications & SaaS Development",
    shortDescription: "Secure, scalable cloud applications, custom business portals, and resilient SaaS architectures engineered for high-traffic operations.",
    heroHeadline: "Scalable SaaS Platforms and Mission-Critical Web Applications.",
    heroSummary: "From zero to multi-tenant production architectures, we build robust web applications featuring real-time data flows, role-based security, and extensible API foundations.",
    valueProposition: "Building a software product demands more than visual mockups. We bring rigorous systems engineering, modular component design, and dependable cloud architectures to turn complex business logic into performant software.",
    businessProblems: [
      "Monolithic spaghetti code slowing down release cycles and hindering feature velocity",
      "Difficult scaling bottlenecks when user concurrency increases",
      "Complex business workflows managed through fragmented spreadsheets and manual tools",
      "Security vulnerabilities, unvalidated inputs, and non-compliant auth implementations",
      "Lack of clean API boundaries preventing integration with external customer tools"
    ],
    capabilities: [
      {
        title: "Custom SaaS Product Architecture",
        description: "Multi-tenant database structures, workspace isolation, subscription billing logic, and granular role permissions."
      },
      {
        title: "High-Density Customer Dashboards",
        description: "Performant analytical data grids, reactive state management, exportable reporting, and contextual data visualization."
      },
      {
        title: "Robust REST & GraphQL APIs",
        description: "Strongly typed endpoints, rate limiting, OpenAPI specifications, and webhook notification pipelines."
      },
      {
        title: "Authentication & Security Governance",
        description: "Multi-factor authentication, enterprise SSO/SAML, session hygiene, and strict server-side schema verification."
      },
      {
        title: "Continuous Delivery & Observability",
        description: "Automated test suites, containerized CI/CD pipelines, error tracing, and operational health telemetry."
      }
    ],
    methodology: [
      { step: "01", title: "Domain & Domain Modeling", description: "Analyzing data entities, state transitions, security boundaries, and user privileges." },
      { step: "02", title: "Technical Prototyping", description: "Validating architectural bottlenecks, latency expectations, and database access patterns." },
      { step: "03", title: "Full-Stack Implementation", description: "TypeScript end-to-end, resilient server logic, normalized relational schemas, and responsive client state." },
      { step: "04", title: "Stress Testing & Release", description: "Automated regression tests, concurrent load validation, penetration audits, and phased rollout." }
    ],
    applications: [
      "B2B Subscription Software (SaaS)",
      "Internal Operational & ERP Portals",
      "Customer Self-Service Platforms",
      "Real-Time Collaborative Web Tools"
    ],
    faqs: [
      {
        question: "Can you modernize an existing legacy application?",
        answer: "Yes. We regularly help organizations decouple outdated monoliths or incrementally migrate legacy codebases into modern TypeScript and cloud-native services with zero operational downtime."
      },
      {
        question: "Who owns the intellectual property and code?",
        answer: "You own 100% of the custom source code, architecture schemas, and digital assets upon completion."
      }
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    number: "03",
    name: "Mobile App Development",
    shortDescription: "Native-grade iOS and Android applications delivering fluid interactions, offline resilience, and secure device integration.",
    heroHeadline: "Fluid, Resilient Mobile Applications Built for iOS and Android.",
    heroSummary: "We design and develop high-caliber cross-platform and native mobile apps that provide rapid launch times, smooth 60fps animations, and enterprise-grade reliability.",
    valueProposition: "Modern mobile users demand instant responsiveness and tactile polish. We engineer mobile experiences that optimize device memory, respect battery consumption, and maintain data sync across network transitions.",
    businessProblems: [
      "Sluggish hybrid apps frustrating users with clumsy gestures and poor performance",
      "High development and maintenance costs of maintaining separate unsynchronized codebases",
      "Fragile offline experiences that fail during unstable network connectivity",
      "App store rejections caused by guideline non-compliance or poor permission handling",
      "Inconsistent UI design between iOS and Android platforms"
    ],
    capabilities: [
      {
        title: "Cross-Platform Engineering",
        description: "Single-codebase React Native architectures delivering near-native performance while dramatically reducing maintenance overhead."
      },
      {
        title: "Mobile Product UX & Ergonomics",
        description: "Haptic feedback, platform-native navigation paradigms, thumb-zone ergonomics, and fluid gesture handling."
      },
      {
        title: "Offline-First Synchronization",
        description: "Local data caching, background queue processing, and conflict-free data resolution on network reconnection."
      },
      {
        title: "Device Hardware Integration",
        description: "Secure biometric authentication, push notifications, camera/scanner pipelines, and location services."
      },
      {
        title: "App Store Publishing & Compliance",
        description: "End-to-end Apple App Store and Google Play Store provisioning, security review clearance, and release pipeline setup."
      }
    ],
    methodology: [
      { step: "01", title: "Platform Strategy", description: "Determining native vs. cross-platform technical requirements and hardware access needs." },
      { step: "02", title: "Interaction Prototyping", description: "Designing touch-first UI, micro-animations, loading skeletons, and ergonomic flows." },
      { step: "03", title: "App Engineering & Integration", description: "Native bridge wiring, encrypted local storage, push notification infrastructure, and API sync." },
      { step: "04", title: "Testing & Submission", description: "Testing on real hardware matrices, battery/memory profiling, and app store compliance submission." }
    ],
    applications: [
      "On-Demand Logistics & Field Service Apps",
      "Customer Loyalty & Mobile Commerce",
      "Executive Monitoring & Approvals Dashboards",
      "Digital Health & Fintech Utilities"
    ],
    faqs: [
      {
        question: "Do you publish to both Apple App Store and Google Play Store?",
        answer: "Yes, we handle the complete deployment, asset bundle preparation, privacy compliance disclosures, and submission review process."
      },
      {
        question: "Can the mobile app share backends with our web portal?",
        answer: "Absolutely. We engineer unified API gateways ensuring that web apps, mobile apps, and administrative backends share consistent data and business logic."
      }
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    number: "04",
    name: "UI/UX Design",
    shortDescription: "Strategic user research, cohesive design systems, and art-directed interface architectures designed to reduce friction and elevate brand prestige.",
    heroHeadline: "Interface Architecture Designed for Clarity, Focus, and High Usability.",
    heroSummary: "We eliminate interface confusion through deep structural research, systematic design tokens, and meticulously crafted interaction patterns that make complex workflows feel effortless.",
    valueProposition: "Design is not decorative styling; it is how a digital tool functions under real business pressure. We eliminate cognitive friction, streamline user journeys, and establish consistent design systems that scale across product suites.",
    businessProblems: [
      "Confusing user journeys causing high customer drop-off during onboarding and checkout",
      "Feature clutter resulting in visual fatigue and steep user learning curves",
      "Inconsistent UI patterns across web, mobile, and internal tool touchpoints",
      "Lack of design documentation causing engineering slowdowns and redundant rework",
      "Accessibility failures alienating users with visual or physical impairments"
    ],
    capabilities: [
      {
        title: "User Research & Journey Mapping",
        description: "Stakeholder interviews, cognitive walkthroughs, workflow modeling, and friction point discovery."
      },
      {
        title: "Design Systems & Token Architecture",
        description: "Scalable Figma libraries with typography, color semantics, component states, and auto-layout guidelines."
      },
      {
        title: "Wireframing & Information Architecture",
        description: "Low-fidelity structural schematics defining information priority before visual decoration."
      },
      {
        title: "High-Fidelity Interactive Prototyping",
        description: "Realistic clickable prototypes with realistic motion choreography, micro-interactions, and edge cases."
      },
      {
        title: "Usability Audits & Heuristic Evaluation",
        description: "Systematic auditing of existing products to uncover accessibility violations and usability bottlenecks."
      }
    ],
    methodology: [
      { step: "01", title: "Discovery & User Empathy", description: "Analyzing current pain points, mental models, and primary user objectives." },
      { step: "02", title: "Structural Wireframing", description: "Mapping screen architecture, layout hierarchies, and key task flows without visual bias." },
      { step: "03", title: "Visual & System Synthesis", description: "Applying refined brand styling, typography, spacing scales, and WCAG AA contrast rules." },
      { step: "04", title: "Specification & Developer Handoff", description: "Tokenized handoff specs, interactive state matrices, and design QA during development." }
    ],
    applications: [
      "Enterprise SaaS Redesigns",
      "B2B Customer Portals",
      "Complex Financial & Analytical Dashboards",
      "Consumer Web & Mobile Products"
    ],
    faqs: [
      {
        question: "Do you deliver production-ready Figma design files?",
        answer: "Yes. Our Figma systems are structured with standardized variables, reusable component variants, auto-layout, and comprehensive developer documentation."
      },
      {
        question: "How do you test designs before coding starts?",
        answer: "We build realistic interactive prototypes and run task-based usability walkthroughs with representative users and stakeholders to validate UX before engineering."
      }
    ]
  },
  {
    id: "ai-automation-solutions",
    slug: "ai-automation-solutions",
    number: "05",
    name: "AI & Automation Solutions",
    shortDescription: "Custom workflow automation, intelligent document extraction, knowledge retrieval (RAG), and pragmatic AI tool integration with human oversight.",
    heroHeadline: "Pragmatic AI Systems and Automated Workflows Engineered for ROI.",
    heroSummary: "We architect reliable AI-assisted workflows and business automation pipelines that eliminate manual repetitive tasks, extract actionable data, and enhance team decision-making.",
    valueProposition: "We avoid speculative hype. We build grounded, production-grade automation systems with deterministic boundaries, human-in-the-loop controls, and strict data privacy protections.",
    businessProblems: [
      "Costly manual hours lost to routine data entry, reconciliation, and routing",
      "Siloed internal knowledge buried in unsearchable PDF archives and fragmented repositories",
      "Slow customer support turnaround times during peak business hours",
      "Unreliable data extraction prone to human error and compliance risks",
      "Uncontrolled experimentation with generative AI risking company confidential information"
    ],
    capabilities: [
      {
        title: "Intelligent Document Processing",
        description: "Automated extraction and structuring of invoices, contracts, receipts, and forms directly into business databases."
      },
      {
        title: "Private Retrieval-Augmented Generation (RAG)",
        description: "Contextual semantic search over internal documentation, proprietary catalogs, and technical manuals without leaking data to public models."
      },
      {
        title: "Cross-Platform Workflow Automation",
        description: "Event-driven pipelines connecting CRMs, payment gateways, ERPs, and messaging channels with zero manual intervention."
      },
      {
        title: "AI-Assisted Customer Support Systems",
        description: "Tier-1 inquiry triage, automated answer synthesis, and seamless human agent handoff logic."
      },
      {
        title: "Security & Human-in-the-Loop Safeguards",
        description: "Confidence scoring, validation thresholds, auditable execution logs, and compliance guardrails."
      }
    ],
    methodology: [
      { step: "01", title: "Process Identification", description: "Quantifying manual bottlenecks, data flow mechanics, and measurable automation ROI." },
      { step: "02", title: "Pipeline Architecture", description: "Designing secure ingestion, embedding models, validation rules, and rollback triggers." },
      { step: "03", title: "Integration & Guardrails", description: "Connecting APIs, implementing validation thresholds, and building administrative review dashboards." },
      { step: "04", title: "Monitoring & Tuning", description: "Continuous latency tracking, cost optimization, accuracy evaluation, and output supervision." }
    ],
    applications: [
      "Automated Claims & Invoice Verification",
      "Internal Knowledge Base Assistants",
      "Lead Enrichment & CRM Synchronization Pipelines",
      "Automated Regulatory Compliance Summaries"
    ],
    faqs: [
      {
        question: "Is our proprietary company data used to train public AI models?",
        answer: "Never. We exclusively use private, zero-data-retention enterprise API endpoints or self-hosted open-source models deployed within your isolated cloud perimeter."
      },
      {
        question: "What happens if an AI model encounters an ambiguous task?",
        answer: "We engineer strict confidence scoring and fallback mechanisms. Whenever model confidence drops below a defined threshold, the task is routed to a human reviewer with full context."
      }
    ]
  },
  {
    id: "digital-marketing-seo",
    slug: "digital-marketing-seo",
    number: "06",
    name: "Digital Marketing & SEO",
    shortDescription: "Technical search engine optimization, semantic structured data, programmatic content architecture, and transparent analytics engineering.",
    heroHeadline: "Technical SEO and Growth Architecture That Compounds Over Time.",
    heroSummary: "We establish strong organic search foundations through high-speed crawlability, semantic metadata, logical site taxonomy, and transparent performance telemetry.",
    valueProposition: "Sustainable organic growth requires technical excellence. We build search visibility directly into your software architecture, ensuring your digital presence earns authoritative search positioning without vanity metrics.",
    businessProblems: [
      "Websites invisible to search engines due to JavaScript rendering errors and crawl blockers",
      "Declining organic traffic following careless site migrations or CMS updates",
      "Competitors outranking key commercial service terms with superior technical structure",
      "Inaccurate analytics tracking producing misleading conversion reports",
      "Low lead-to-opportunity ratios caused by targeting irrelevant search queries"
    ],
    capabilities: [
      {
        title: "Technical SEO Auditing & Remediation",
        description: "Resolving crawl budget waste, indexation errors, redirect chains, canonical anomalies, and Core Web Vitals issues."
      },
      {
        title: "Semantic Schema & Structured Data",
        description: "Full implementation of Organization, WebSite, Service, Breadcrumb, and Article schemas for rich snippet eligibility."
      },
      {
        title: "Information Architecture & Taxonomy",
        description: "Constructing logical URL hierarchies, topical clusters, and intentional internal linking graphs."
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Heatmap analysis, form friction reduction, strategic CTA positioning, and copy refinement to maximize lead yield."
      },
      {
        title: "Server-Side Analytics & Attribution",
        description: "Privacy-compliant telemetry setup, goal tracking, and executive dashboards with verified business metrics."
      }
    ],
    methodology: [
      { step: "01", title: "Technical Baseline Audit", description: "Deep-scanning index status, server response headers, sitemaps, and core vitals." },
      { step: "02", title: "Keyword & Entity Mapping", description: "Aligning high-intent commercial queries with targeted page architecture and schema markup." },
      { step: "03", title: "Code & Content Optimization", description: "Remediating DOM weight, optimizing semantic headings, internal linking, and meta assets." },
      { step: "04", title: "Measurement & Iteration", description: "Monitoring search console impressions, organic click trends, and qualified inquiry velocity." }
    ],
    applications: [
      "B2B Enterprise Authority Growth",
      "SaaS Feature & Solution Landing Architecture",
      "Multi-Location Service Search Optimization",
      "E-Commerce Catalog Search Engineering"
    ],
    faqs: [
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer: "No reputable technology firm can guarantee specific third-party rankings, as search algorithms evolve continually. We guarantee rigorous technical SEO compliance, fast load times, semantic structured data, and best-practice indexing."
      },
      {
        question: "How long does it take to observe SEO improvements?",
        answer: "Technical fixes (such as resolving indexing blocks or site speed) often reflect in crawl health within weeks. Meaningful ranking compounding typically builds over 3 to 6 months."
      }
    ]
  },
  {
    id: "e-commerce-development",
    slug: "e-commerce-development",
    number: "07",
    name: "E-commerce Development",
    shortDescription: "Custom digital storefronts, resilient checkout pipelines, inventory integrations, and high-conversion mobile commerce architectures.",
    heroHeadline: "Scalable E-Commerce Storefronts Engineered for Conversion and Speed.",
    heroSummary: "We design and engineer bespoke commerce systems featuring lightning-fast catalog navigation, frictionless one-step checkouts, and resilient ERP/inventory synchronization.",
    valueProposition: "Every 100 milliseconds of latency directly degrades cart completion. We build headless and custom storefronts that load instantly, secure customer transaction data, and handle sudden flash-sale traffic spikes smoothly.",
    businessProblems: [
      "Slow, bloated template stores suffering from high checkout cart abandonment",
      "Store crashes and database timeouts during marketing campaigns and sales surges",
      "Disjointed inventory sync causing overselling and customer disputes",
      "Poor mobile commerce UX making checkout cumbersome on smartphone screens",
      "Inability to integrate custom pricing, multi-currency, or complex B2B wholesale rules"
    ],
    capabilities: [
      {
        title: "Headless Commerce Architecture",
        description: "Decoupled Next.js frontends powered by Shopify Plus, Medusa, or custom headless engines for unbeatable page speed."
      },
      {
        title: "Frictionless Checkout Optimization",
        description: "Streamlined single-page checkout, Apple Pay, Google Pay, UPI, and local international payment routing."
      },
      {
        title: "Catalog Architecture & Instant Search",
        description: "Faceted filtering, semantic search auto-complete, and instant client-side query results."
      },
      {
        title: "Inventory & Logistics Integrations",
        description: "Real-time webhook synchronization with warehouse management, shipping aggregators, and ERP backends."
      },
      {
        title: "B2B Wholesale & Custom Pricing Rules",
        description: "Tiered volume discounts, credit terms, quote-to-order workflows, and gated dealer portals."
      }
    ],
    methodology: [
      { step: "01", title: "Commerce Flow Modeling", description: "Mapping catalog structures, payment gateways, tax calculation, and fulfillment logic." },
      { step: "02", title: "Storefront UX & Design", description: "Designing touch-friendly product detail pages, sticky mobile checkouts, and trust badges." },
      { step: "03", title: "Platform Engineering", description: "Implementing secure cart state, payment tokens, fraud screening, and API synchronizers." },
      { step: "04", title: "Load Testing & Go-Live", description: "Stress-testing checkout pipelines under high concurrent cart volume and payment gateway testing." }
    ],
    applications: [
      "Direct-to-Consumer (D2C) Lifestyle Brands",
      "High-Volume Wholesale & B2B Portals",
      "Digital Product & Subscription Storefronts",
      "Global Multi-Currency Commerce Platforms"
    ],
    faqs: [
      {
        question: "Which payment gateways do you support?",
        answer: "We integrate Razorpay, Stripe, Cashfree, PayPal, Apple Pay, Google Pay, and custom bank payment APIs with complete PCI-DSS compliance."
      },
      {
        question: "Can our store handle large product catalogs?",
        answer: "Yes. Our architecture utilizes elastic search indexing and incremental static regeneration, allowing catalogs with tens of thousands of SKUs to load within milliseconds."
      }
    ]
  },
  {
    id: "software-development",
    slug: "software-development",
    number: "08",
    name: "Software Development",
    shortDescription: "Bespoke internal systems, backend engineering, secure API integrations, and legacy modernization engineered to exact business requirements.",
    heroHeadline: "Bespoke Software Systems Built for Precision and Longevity.",
    heroSummary: "We architect and develop robust custom software, internal operational backbones, and secure integration layers tailored precisely to your operational workflow.",
    valueProposition: "Off-the-shelf software forces businesses into unnatural compromises. We engineer tailored software solutions that align perfectly with your internal business logic, automate operational bottlenecks, and maintain strict data privacy.",
    businessProblems: [
      "Off-the-shelf tools imposing rigid limitations and expensive recurring per-seat licensing",
      "Isolated software systems unable to exchange data without error-prone manual exports",
      "Aging legacy software built on unmaintained frameworks posing severe security risks",
      "Inability to audit operational actions or satisfy regulatory data compliance",
      "High human operational costs required to bridge disconnected software systems"
    ],
    capabilities: [
      {
        title: "Custom Enterprise Software",
        description: "Tailored business management platforms, resource allocation engines, and operational dispatch consoles."
      },
      {
        title: "Microservices & Distributed Systems",
        description: "Decoupled service architectures with message brokers, background workers, and resilient failover logic."
      },
      {
        title: "API Gateways & Legacy Modernization",
        description: "Wrapping legacy database engines with modern, secure REST/GraphQL interfaces without business interruption."
      },
      {
        title: "Database Modeling & Data Warehousing",
        description: "Optimized relational indexing, time-series logging, automated backups, and encrypted storage at rest."
      },
      {
        title: "Auditing & Regulatory Compliance",
        description: "Immutable event logging, role-based access control, cryptographic verification, and security posture monitoring."
      }
    ],
    methodology: [
      { step: "01", title: "Operational Discovery", description: "In-depth analysis of existing workflows, edge cases, data volumes, and security mandates." },
      { step: "02", title: "Architecture & Specification", description: "Formalizing technical architecture blueprints, database entity diagrams, and interface contracts." },
      { step: "03", title: "Disciplined Engineering", description: "Strict typing, modular service boundaries, automated test coverage, and clear code documentation." },
      { step: "04", title: "Deployment & Operations", description: "Containerized deployments, monitoring alerts, disaster recovery runbooks, and SLA support." }
    ],
    applications: [
      "Custom Enterprise Resource Platforms",
      "Automated Billing & Ledger Systems",
      "Supply Chain & Asset Tracking Tools",
      "Legacy Database Transformation Engines"
    ],
    faqs: [
      {
        question: "How do you ensure data security in custom software?",
        answer: "We apply industry-standard defensive security: end-to-end TLS encryption, AES-256 encrypted databases, parameterized queries preventing SQL injection, strict schema validation, and regular vulnerability scanning."
      },
      {
        question: "Do you provide ongoing maintenance and technical support?",
        answer: "Yes, we offer structured technical maintenance agreements covering security updates, infrastructure monitoring, dependency maintenance, and continuous optimization."
      }
    ]
  }
];

export const PROCESS_PHASES = [
  {
    phase: "01",
    name: "Discover",
    headline: "Understand Business Goals, Users, and Constraints.",
    summary: "Every durable digital product begins with rigorous inquiry. We unpack your operational objectives, user friction, competitive landscape, and technical constraints before writing a single line of code.",
    activities: [
      "Stakeholder interviews and business objective alignment",
      "User persona mapping and journey analysis",
      "Technical feasibility and existing system audits",
      "Core requirements gathering and scope prioritization"
    ],
    deliverables: [
      "Project Discovery Document",
      "Technical Architecture Recommendation",
      "Scope of Work & Milestone Roadmap"
    ],
    collaboration: "Collaborative discovery workshops with your leadership and product owners to establish mutual alignment."
  },
  {
    phase: "02",
    name: "Strategize",
    headline: "Define Scope, Architecture, and Delivery Direction.",
    summary: "Clear planning prevents costly pivots. We define data structures, tech stack selection, deployment architecture, and delivery milestones with precision.",
    activities: [
      "Information architecture and database schema modeling",
      "API specification and third-party integration planning",
      "Security posture and data privacy compliance review",
      "Sprint planning and milestone schedule definition"
    ],
    deliverables: [
      "Technical Architecture Blueprint",
      "Entity-Relationship Diagrams & API Contracts",
      "Delivery Timeline & Sprint Backlog"
    ],
    collaboration: "Weekly architectural checkpoints to review tradeoffs and sign off on core technical decisions."
  },
  {
    phase: "03",
    name: "Design",
    headline: "Create Structure, UX Flows, and Visual Direction.",
    summary: "Design at VRK Solutions is about utility and authority. We craft bespoke visual identities, tokenized design systems, and responsive wireframes that make complex interactions effortless.",
    activities: [
      "Low-fidelity wireframing and ergonomic task modeling",
      "Bespoke visual identity and tokenized color/typography system",
      "Interactive component states and micro-interactions",
      "High-fidelity clickable Figma prototyping"
    ],
    deliverables: [
      "Complete Figma Design System & Component Library",
      "Interactive Clickable Product Prototype",
      "WCAG 2.2 AA Accessibility Audit Report"
    ],
    collaboration: "Interactive prototype walkthroughs where your team provides feedback on real user journeys."
  },
  {
    phase: "04",
    name: "Develop",
    headline: "Build, Integrate, and Refine the Solution.",
    summary: "We engineer production-grade applications using modern, strongly typed technologies. Clean architecture, server-side performance, and strict quality standards guide every commit.",
    activities: [
      "Frontend development with Next.js App Router and TypeScript",
      "Secure backend API and business logic implementation",
      "Headless CMS integration and editorial workflow wiring",
      "Automated unit, integration, and security checks"
    ],
    deliverables: [
      "Production-Ready Source Code Repository",
      "Headless CMS Content Studio Configuration",
      "Internal Staging Environment for Stakeholder Review"
    ],
    collaboration: "Live staging access with bi-weekly sprint demos and transparent milestone progress."
  },
  {
    phase: "05",
    name: "Test & Launch",
    headline: "Validate Functionality, Performance, and Deployment.",
    summary: "Zero-defect launches require thorough verification. We test across devices, run automated stress tests, verify security headers, and orchestrate zero-downtime deployment.",
    activities: [
      "Cross-browser and multi-viewport responsive testing",
      "Lighthouse performance optimization (90+ score targets)",
      "Automated browser smoke tests with Playwright",
      "DNS configuration, SSL provisioning, and CDN routing"
    ],
    deliverables: [
      "Quality Assurance & Test Verification Log",
      "Production Deployment Verification Report",
      "System Documentation & Administrative Handover"
    ],
    collaboration: "Final acceptance sign-off, DNS coordination, and guided administrative training."
  },
  {
    phase: "06",
    name: "Improve & Scale",
    headline: "Support Iteration and Future Growth.",
    summary: "Software is a living asset. Following launch, we monitor runtime telemetry, optimize conversion metrics, and engineer iterative features as your business scales.",
    activities: [
      "Runtime error monitoring and telemetry tracking",
      "Search engine crawl and indexation auditing",
      "Periodic security dependency patches and performance tuning",
      "Backlog roadmap execution for subsequent version releases"
    ],
    deliverables: [
      "Monthly Operational & Performance Health Reports",
      "Continuous Security & Maintenance Updates",
      "Feature Iteration Roadmap"
    ],
    collaboration: "Scheduled monthly or quarterly product strategy reviews to plan future enhancements."
  }
];

export const INDUSTRIES = [
  {
    id: "startups-saas",
    name: "Startups & SaaS",
    challenges: "Fast time-to-market pressure, budget constraints, technical debt, and multi-tenant scaling hurdles.",
    solutions: "Rapid MVP engineering, scalable Next.js architectures, automated Stripe/Razorpay billing, and secure API foundations."
  },
  {
    id: "finance-fintech",
    name: "Finance & Fintech",
    challenges: "Strict regulatory requirements, data encryption demands, audit logging, and zero-tolerance for transaction failure.",
    solutions: "PCI-compliant checkout pipelines, bank API integrations, immutable audit ledgers, and multi-factor authentication systems."
  },
  {
    id: "healthcare-healthtech",
    name: "Healthcare & Life Sciences",
    challenges: "Patient confidentiality, legacy system silos, complex scheduling, and accessible patient portals.",
    solutions: "HIPAA-aligned data workflows, role-segregated patient portals, encrypted communications, and tele-consultation interfaces."
  },
  {
    id: "ecommerce-retail",
    name: "E-Commerce & Retail",
    challenges: "High checkout abandonment, flash-sale traffic spikes, real-time inventory synchronization, and mobile friction.",
    solutions: "Headless storefronts, one-step mobile checkouts, automated ERP inventory sync, and multi-currency support."
  },
  {
    id: "education-edtech",
    name: "Education & EdTech",
    challenges: "Engaging student experiences, high concurrent video/content streaming, and intuitive educator dashboards.",
    solutions: "Custom LMS platforms, student progress telemetry, course catalog search, and automated certification issuance."
  },
  {
    id: "manufacturing-logistics",
    name: "Manufacturing & Logistics",
    challenges: "Fragmented paper workflows, disconnected warehouse systems, and lack of real-time shipment visibility.",
    solutions: "Cloud inventory portals, barcode/QR scanner integration, driver dispatch systems, and automated status webhooks."
  },
  {
    id: "real-estate-property",
    name: "Real Estate & Architecture",
    challenges: "Low-quality listing portals, poor lead capture mechanisms, and weak presentation of architectural portfolios.",
    solutions: "High-resolution property portals, interactive floor-plan viewers, CRM lead routing, and WhatsApp inquiry integrations."
  },
  {
    id: "hospitality-travel",
    name: "Hospitality & Travel",
    challenges: "Heavy third-party OTA commission fees, outdated direct booking engines, and fragmented customer communications.",
    solutions: "Commission-free direct booking engines, WhatsApp itinerary delivery, room availability synchronizers, and multilingual UX."
  },
  {
    id: "professional-services",
    name: "Professional & Legal Services",
    challenges: "Difficulty communicating technical authority, outdated corporate branding, and manual document collection.",
    solutions: "Authoritative editorial web platforms, encrypted client upload portals, automated consultation scheduling, and SEO dominance."
  },
  {
    id: "enterprise-industry",
    name: "Enterprise & Industrial",
    challenges: "Decades-old legacy monoliths, rigid access hierarchies, and disconnected operational silos.",
    solutions: "Modern web application wrappers, centralized role-based consoles, automated data pipelines, and security modernization."
  }
];

export const GENERAL_FAQS = [
  {
    question: "What services does VRK Solutions provide?",
    answer: "VRK Solutions provides eight core technology services: Website Design & Development, Web Applications & SaaS Development, Mobile App Development, UI/UX Design, AI & Automation Solutions, Digital Marketing & SEO, E-commerce Development, and Custom Software Development."
  },
  {
    question: "Can you build a website and mobile application together?",
    answer: "Yes. Many of our engagements involve cross-platform ecosystems where a unified backend and database power both a web application and mobile apps on iOS and Android. This unified architecture prevents duplicated logic and lowers long-term maintenance costs."
  },
  {
    question: "Do you work with international clients outside India?",
    answer: "Yes. We work with clients across India, North America, Europe, the Middle East, and the Asia-Pacific region. We structure our communication, milestone reviews, and project management to align smoothly with your local time zone."
  },
  {
    question: "Can you modernize an existing application or website?",
    answer: "Yes. We regularly handle code audits, refactoring, performance overhauls, and full migrations from outdated platforms to modern, high-performance stacks like Next.js, TypeScript, and scalable cloud databases without interrupting your live operations."
  },
  {
    question: "How do you approach project timelines?",
    answer: "Project timelines depend on the defined scope and technical complexity. Standard corporate websites typically take 3 to 6 weeks, while bespoke SaaS platforms, custom software, and cross-platform mobile apps generally range from 8 to 16 weeks across iterative milestones."
  },
  {
    question: "Can I request a custom quotation before committing?",
    answer: "Yes. You can use our interactive Project Brief Builder or our comprehensive Get a Quote form to share your technical requirements, goals, and timeline. Our team will review your specifications and provide a structured technical proposal."
  },
  {
    question: "How do we begin a project with VRK Solutions?",
    answer: "Getting started is straightforward: reach out via our contact form, book an introductory consultation, or send us a message on WhatsApp at +91 9398845947. We will schedule a discovery call to discuss your objectives and map out the right digital approach."
  }
];

export const INITIAL_CASE_STUDIES = [
  {
    _id: "project-1",
    name: "Enterprise SaaS Cloud Portal",
    slug: { current: "enterprise-saas-cloud-portal" },
    clientName: "Private B2B Enterprise Client",
    isApproved: true,
    isInternalConcept: true,
    category: "Web Applications & SaaS",
    industry: "Startups & SaaS",
    servicesProvided: ["Web Applications & SaaS Development", "UI/UX Design"],
    overview: "A multi-tenant cloud operations platform engineered to streamline high-density telemetry data, role-based authorization, and automated billing workflows.",
    businessProblem: "The client was managing thousands of distributed operational endpoints using fragmented spreadsheets and slow legacy interfaces that suffered from frequent UI freezing and sync delays.",
    proposedSolution: "We engineered a Next.js App Router and TypeScript frontend coupled with real-time data streaming, optimistic UI updates, and an intuitive design system with dark and high-contrast light surfaces.",
    technicalApproach: "Implemented virtualized data tables capable of rendering 50,000+ data rows with 60fps scrolling, combined with strict server-side schema verification with Zod.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis"],
    results: "Sub-second query response times across all dashboard modules and a 65% reduction in operator onboarding time.",
    featured: true
  },
  {
    _id: "project-2",
    name: "High-Performance Direct Commerce Engine",
    slug: { current: "high-performance-direct-commerce-engine" },
    clientName: "Consumer Brand Client",
    isApproved: true,
    isInternalConcept: true,
    category: "E-commerce Development",
    industry: "E-Commerce & Retail",
    servicesProvided: ["E-commerce Development", "Website Design & Development", "Digital Marketing & SEO"],
    overview: "A headless e-commerce storefront delivering instant page loads, faceted search discovery, and single-step mobile checkout.",
    businessProblem: "The brand's previous monolithic e-commerce store suffered from high mobile bounce rates, sluggish 4.8s mobile page loads, and cart drop-offs during high-traffic product drops.",
    proposedSolution: "Built a decoupled headless storefront leveraging incremental static regeneration, sub-second edge routing, and automated webhook inventory synchronization.",
    technicalApproach: "Zero third-party script bloat, client-side predictive asset preloading, and server-side payment tokenization compliant with PCI-DSS standards.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Storefront API", "Razorpay", "Stripe"],
    results: "Mobile Largest Contentful Paint dropped from 4.8s to 1.1s, with checkout abandonment reduced by 32% during initial testing.",
    featured: true
  },
  {
    _id: "project-3",
    name: "Intelligent Document Automation Engine",
    slug: { current: "intelligent-document-automation-engine" },
    clientName: "Financial Services Group",
    isApproved: true,
    isInternalConcept: true,
    category: "AI & Automation Solutions",
    industry: "Finance & Fintech",
    servicesProvided: ["AI & Automation Solutions", "Software Development"],
    overview: "An automated document parsing and validation system extracting structured metadata from complex non-standardized financial statements with human verification loops.",
    businessProblem: "Operations teams spent over 180 hours weekly manually reviewing, transcribing, and reconciling scanned loan documents and bank statements.",
    proposedSolution: "Engineered a secure document extraction pipeline utilizing private vision-language models, confidence thresholds, and an administrative discrepancy review queue.",
    technicalApproach: "Configured isolated zero-data-retention APIs, cryptographically verified audit trails, and strict schema validation for all extracted financial figures.",
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "PostgreSQL", "Docker"],
    results: "Processed 85% of standard financial documents with zero human intervention required, cutting total document turnaround time from 48 hours to under 4 minutes.",
    featured: true
  }
];
