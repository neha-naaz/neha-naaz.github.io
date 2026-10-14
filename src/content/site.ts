/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to change what the site says about you.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Neha Naazneen",
  role: "Software Engineer",
  tagline:
    "I design Spring Boot services and distributed, event-driven systems, and keep them reliable in production.",
  about: [
    "I'm a backend engineer with 3+ years at AutoRABIT, working on CodeScan, a multi-tenant static analysis product for Salesforce. I own Java 17 / Spring Boot services and REST APIs, and I care a lot about what happens when things fail: idempotency, retries, and recovery.",
    "Most recently I led AI CodeFix, an asynchronous workflow between Java services and Python workers on AWS (SQS, ECS Fargate, S3) for hours-long jobs. I'm on the on-call rotation, review code, and mentor six junior engineers.",
    "Outside work I build side projects and clones of products I admire, because the fastest way to understand how something works is to rebuild it.",
  ],
  location: "Hyderabad, India",
  email: "nehanaazneen17@gmail.com",
  availability: "Open to interesting conversations",
  socials: [
    { label: "GitHub", href: "https://github.com/neha-naaz" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/neha-naazneen2026/" },
  ],
  // Plain <a> tags don't add the GitHub Pages base path automatically, so we add it here.
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`,
};

/** "By the numbers" strip under the hero. Every figure comes from the resume. */
export const highlights = [
  { value: "~35%", label: "fewer workflow failures", detail: "idempotent, retryable pipelines under peak load" },
  { value: "700+", label: "quality & security rules", detail: "across 4 Salesforce code and metadata types" },
  { value: "~80%", label: "automated test coverage", detail: "JUnit + Mockito, shipped via Jenkins CI/CD" },
  { value: "6", label: "engineers mentored", detail: "code reviews, design talks, production debugging" },
];

/** The "Now" card: what you're up to these days. */
export const now = {
  building: "Tripflow (GoTrip AI) and this portfolio",
  learning: "Distributed systems & system design",
  reading: "Designing Data-Intensive Applications",
};

export type ChangeType = "shipped" | "improved" | "fixed";

export type Release = {
  version: string; // e.g. "v3.0.0"; newest first
  company: string;
  title: string;
  period: string;
  summary?: string;
  changes: { type: ChangeType; text: string }[];
};

export const releases: Release[] = [
  {
    version: "v2.0.0",
    company: "AutoRABIT (CodeScan)",
    title: "Software Engineer",
    period: "Jul 2024 – Present",
    summary: "Multi-tenant enterprise code-quality product: 700+ rules across 4 Salesforce code and metadata types.",
    changes: [
      {
        type: "shipped",
        text: "AI CodeFix: an event-driven workflow between Java/Spring services and Python workers on AWS SQS, ECS Fargate and S3, with job-state sync, credit and billing gates, secure callbacks and failure recovery for hours-long workloads.",
      },
      {
        type: "shipped",
        text: "AuthHub integration with internal and external services: organization discovery, credential registration, token brokerage, caching and refresh over OAuth-secured REST APIs and JWT-based service-to-service communication.",
      },
      {
        type: "shipped",
        text: "Java 17 / Spring Boot services and REST APIs with transactional data access via Hibernate, JDBC and PostgreSQL.",
      },
      {
        type: "improved",
        text: "Own deployment and monitoring of AWS-hosted services through Docker and Jenkins CI/CD, with Grafana and the ELK Stack for observability.",
      },
      {
        type: "improved",
        text: "Engineering quality through design and code reviews, and by mentoring 6 junior engineers on service boundaries, data models and transactional consistency.",
      },
      {
        type: "improved",
        text: "Defined REST contracts, async UI states and error handling with React/TypeScript, product and QA teammates.",
      },
      {
        type: "fixed",
        text: "Own production support on a formal on-call rotation: diagnosing cross-service failures from telemetry and logs, root-cause analysis, and shipping fixes.",
      },
    ],
  },
  {
    version: "v1.0.0",
    company: "AutoRABIT (CodeScan)",
    title: "Junior Software Engineer",
    period: "Apr 2023 – Jul 2024",
    changes: [
      {
        type: "improved",
        text: "Redesigned concurrency-sensitive analysis and reporting pipelines with retryable, idempotent processing, cutting workflow failures by ~35% at peak load.",
      },
      {
        type: "shipped",
        text: "Scheduled async workloads for usage reporting and license monitoring, with 4 reliability controls: locking, idempotency, retries and partial-failure recovery.",
      },
      {
        type: "improved",
        text: "Raised automated test coverage to ~80% with JUnit and Mockito; shipped via Git, Maven, Jenkins CI/CD and Docker.",
      },
    ],
  },
];

export const skills: Record<string, string[]> = {
  languages: ["Java 17", "Python", "Kotlin", "SQL", "C++", "JavaScript/TypeScript"],
  backend: ["Spring Boot", "Spring MVC", "Spring Security", "REST APIs", "SOAP", "Microservices", "API Design"],
  coreJava: ["Collections", "Streams", "Lambdas", "Concurrency", "Multithreading", "Design Patterns"],
  async: ["AWS SQS", "Redis/Jesque", "Idempotency", "Retry & Recovery"],
  database: ["PostgreSQL", "Spring Data JPA", "Hibernate", "JDBC", "Data Modeling"],
  cloud: ["AWS", "ECS Fargate", "S3", "Docker", "Jenkins CI/CD", "Git/GitLab", "Maven", "Linux"],
  observability: ["Grafana", "ELK Stack", "JUnit", "Mockito", "Integration Testing", "On-Call", "RCA"],
};

export const education = [
  {
    school: "Jawaharlal Nehru Technological University, Hyderabad",
    degree: "B.Tech, CSE (AI & ML)",
    period: "2020 – 2024 · CGPA 8.5",
  },
];
