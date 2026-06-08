export type OngoingProject = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  category: string;
  description: string;
  features: string[];
  focusAreas?: string[];
  tech: string[];
  github?: string;
  overview: {
    problem: string;
    why: string;
    targetUsers: string;
    realWorld: string;
  };
  architecture: {
    flow: string[];
    components: { name: string; desc: string }[];
    dataFlow: string;
    securityFlow: string;
  };
  screenshots: { url: string; caption: string }[];
  featureDetails: { title: string; desc: string }[];
  progress: { phase: string; done: boolean; current?: boolean }[];
  challenges: { problems: string[]; limitations: string[]; improvements: string[] };
  roadmap: { phase: string; title: string; desc: string }[];
  metrics: { lastUpdated: string };
};

export const ongoingProjects: OngoingProject[] = [
  {
    slug: "sentry",
    name: "S.E.N.T.R.Y",
    tagline: "Secure Encryption & Networked Threat Response sYstem",
    status: "Research & Development",
    category: "Cybersecurity Platform",
    description:
      "An intelligent security platform focused on protected file access, encrypted storage, and threat-aware system monitoring.",
    features: [
      "Encrypted file handling",
      "Secure transfer authorization",
      "Real-time session validation",
      "Threat monitoring architecture",
      "Modular security design",
      "Security event visualization dashboard",
    ],
    focusAreas: [
      "Cybersecurity",
      "Secure Systems",
      "Authentication",
      "Threat Detection",
      "File Protection",
    ],
    tech: ["React", "TypeScript", "Firebase", "Python", "Security APIs"],
    overview: {
      problem:
        "Modern organizations struggle to keep sensitive files private while still allowing safe collaboration and remote access.",
      why:
        "S.E.N.T.R.Y was created to combine encryption, real-time monitoring, and access intelligence into a single coherent platform instead of stitched-together tools.",
      targetUsers:
        "Security analysts, small teams handling confidential data, and developers building systems that require zero-trust file workflows.",
      realWorld:
        "Confidential document exchange, incident response operations, threat hunting workflows, and internal SOC tooling.",
    },
    architecture: {
      flow: [
        "User",
        "Authentication Layer",
        "Security Validation Engine",
        "Encrypted Storage Layer",
        "Threat Monitoring Engine",
        "Dashboard Interface",
      ],
      components: [
        { name: "Authentication Layer", desc: "Verifies identity using multi-factor and session policies before any data is touched." },
        { name: "Security Validation Engine", desc: "Applies policy checks, rate limits, and anomaly heuristics for every request." },
        { name: "Encrypted Storage Layer", desc: "Stores files with per-object encryption keys and tamper-evident metadata." },
        { name: "Threat Monitoring Engine", desc: "Streams events to a correlator that flags suspicious access patterns in real time." },
        { name: "Dashboard Interface", desc: "Operator console for visualizing alerts, sessions, and file activity." },
      ],
      dataFlow:
        "Requests are authenticated, validated, then routed to the encrypted storage layer. Every action emits structured telemetry consumed by the monitoring engine and surfaced in the dashboard.",
      securityFlow:
        "Zero-trust by default — each step re-checks identity, policy, and session integrity. Sensitive operations require fresh authorization tokens.",
    },
    screenshots: [],
    featureDetails: [
      { title: "Encrypted File Storage", desc: "Per-object keys, envelope encryption, and tamper-evident metadata so files stay private at rest." },
      { title: "Threat Detection", desc: "Behavioral analysis over session and access events to surface anomalies before they escalate." },
      { title: "Authentication Workflow", desc: "Multi-step verification with short-lived tokens and continuous session validation." },
    ],
    progress: [
      { phase: "Research", done: true },
      { phase: "Design", done: true, current: true },
      { phase: "Development", done: false },
      { phase: "Testing", done: false },
      { phase: "Deployment", done: false },
    ],
    challenges: {
      problems: [
        "Balancing strong encryption with low-latency access",
        "Designing a threat model that scales beyond a single user",
      ],
      limitations: [
        "Currently optimized for small-team workloads",
        "Dashboard is desktop-first",
      ],
      improvements: [
        "Add hardware-key based authentication",
        "Stream telemetry to external SIEMs",
      ],
    },
    roadmap: [
      { phase: "Phase 1", title: "Core encryption engine", desc: "Finalize storage primitives and key management." },
      { phase: "Phase 2", title: "Monitoring pipeline", desc: "Real-time event correlation and alerting." },
      { phase: "Phase 3", title: "Operator dashboard", desc: "Visualize sessions, files, and threat signals." },
      { phase: "Phase 4", title: "Hardening & launch", desc: "Pen-testing, audits, and production rollout." },
    ],
    metrics: { lastUpdated: "2026-06" },
  },
  {
    slug: "guardian-companion",
    name: "Guardian Companion",
    tagline: "Personal Safety & Emergency Response Platform",
    status: "Development",
    category: "Safety & Emergency Response",
    description:
      "A full-stack safety application designed to help users stay connected with trusted contacts during emergencies.",
    features: [
      "Emergency contact management",
      "Location-based safety features",
      "Safety check-in workflows",
      "Emergency alert system",
      "Secure cloud authentication",
      "Real-time geolocation integration",
    ],
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Geolocation API"],
    overview: {
      problem:
        "When something goes wrong, getting help to the right person fast is harder than it should be.",
      why:
        "Guardian Companion bridges the gap between everyday safety tools and emergency response by giving users a single trusted channel to reach the people who matter.",
      targetUsers:
        "Individuals, families, students, and field workers who want a dependable safety net on their phone.",
      realWorld:
        "Travel safety, late-night commutes, lone-worker check-ins, and family location sharing during emergencies.",
    },
    architecture: {
      flow: [
        "User",
        "Authentication Layer",
        "Safety Profile Service",
        "Geolocation Service",
        "Alert Dispatcher",
        "Trusted Contacts",
      ],
      components: [
        { name: "Authentication Layer", desc: "Secure cloud-backed sign-in with session refresh." },
        { name: "Safety Profile Service", desc: "Stores contacts, check-in policies, and preferences." },
        { name: "Geolocation Service", desc: "Streams device location with privacy-aware controls." },
        { name: "Alert Dispatcher", desc: "Sends emergency alerts to the right contacts through the fastest channel." },
      ],
      dataFlow:
        "User events trigger safety profile lookups, which route alerts and location data to trusted contacts via the dispatcher.",
      securityFlow:
        "All location data is short-lived, scoped per alert, and accessible only to explicitly trusted contacts.",
    },
    screenshots: [],
    featureDetails: [
      { title: "Emergency Contact Management", desc: "Maintain a vetted list of trusted contacts with role-based escalation." },
      { title: "Safety Check-Ins", desc: "Schedule check-ins that auto-escalate if you don't respond in time." },
      { title: "Real-time Geolocation", desc: "Share precise, time-boxed location with the right people during an alert." },
    ],
    progress: [
      { phase: "Research", done: true },
      { phase: "Design", done: true },
      { phase: "Development", done: true, current: true },
      { phase: "Testing", done: false },
      { phase: "Deployment", done: false },
    ],
    challenges: {
      problems: [
        "Reliable background geolocation across mobile platforms",
        "Designing alert flows that minimize false positives",
      ],
      limitations: [
        "Browser geolocation accuracy varies",
        "Notifications depend on user OS permissions",
      ],
      improvements: [
        "Native mobile companion app",
        "Offline-first alert queueing",
      ],
    },
    roadmap: [
      { phase: "Phase 1", title: "Core safety profile", desc: "Contacts, preferences, and authentication." },
      { phase: "Phase 2", title: "Alert dispatcher", desc: "Reliable multi-channel alert delivery." },
      { phase: "Phase 3", title: "Check-in automation", desc: "Scheduled check-ins with escalation rules." },
      { phase: "Phase 4", title: "Mobile companion", desc: "Native mobile app for always-on safety." },
    ],
    metrics: { lastUpdated: "2026-06" },
  },
];

export const getProjectBySlug = (slug: string) =>
  ongoingProjects.find((p) => p.slug === slug);
