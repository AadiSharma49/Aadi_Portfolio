// Centralized data used across the portfolio

export const PERSONAL = {
  name: "Aaditya Sharma",
  title: "Full-Stack & AI Developer",
  tagline:
    "I build and ship production AI systems independently — from RAG pipelines and MCP servers to CI-integrated developer tools.",
  email: "aadi198555@gmail.com",
};

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/AadiSharma49" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aaditya-sharma-978163250/" },
  { label: "Email", href: "mailto:aadi198555@gmail.com" },
];

export const NAVIGATION_LINKS = [
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const ABOUT = {
  summary:
    "Full-stack and AI engineer who ships and maintains production systems independently. Built RelayOS, an AI decision memory platform with a hand-written MCP server and RAG-based conflict detection, and Preflight, a dependency-upgrade risk scanner using AST parsing with a CI/CD integration. Works across Next.js, TypeScript, FastAPI, PostgreSQL, and LLM integrations. Maintains 50+ GitHub repositories with merged PRs on production codebases.",
};

export const EDUCATION = [
  {
    school: "Manipal University Jaipur",
    detail: "Master of Computer Applications (MCA)",
    period: "Jul 2026 — Present",
  },
  {
    school: "University of Rajasthan",
    detail: "Bachelor of Computer Applications (BCA)",
    period: "Aug 2022 — Jul 2025",
  },
  {
    school: "Indian Institute of Technology, Mandi",
    detail: "Professional Certification",
    period: "Apr 2025 — Jun 2026",
  },
];

export type ProjectData = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const PROJECTS: ProjectData[] = [
  {
    title: "RelayOS",
    description:
      "AI decision memory platform. A RAG-based conflict detection system flags contradicting decisions (pgvector search to shortlist, LLM judge to confirm), and a hand-written MCP server lets AI clients query stored decisions directly.",
    stack: ["Next.js", "PostgreSQL (pgvector)", "Prisma", "Clerk", "Gemini API", "MCP"],
    github: "https://github.com/AadiSharma49/RelayOs",
    demo: "https://relay-os-three.vercel.app/",
  },
  {
    title: "Preflight",
    description:
      "Dependency upgrade risk scanner. A CLI that uses Babel AST parsing to flag exactly which files will break before an upgrade, plus a GitHub Actions integration that comments risk on PRs and fails CI on breaking changes. 87 tests, published to npm.",
    stack: ["Node.js", "TypeScript", "Babel AST", "GitHub Actions", "npm"],
    github: "https://github.com/AadiSharma49/preflight",
    demo: "https://preflight-umber.vercel.app/",
  },
  {
    title: "VibeMeet",
    description:
      "AI-powered real-time communication platform with transcription and channel insights using the OpenAI API; sub-250ms latency, 5–10 concurrent users.",
    stack: ["React", "Node.js", "Express", "Stream Chat", "WebSockets", "OpenAI API"],
    github: "https://github.com/AadiSharma49/VibeMeet",
    demo: "https://vibe-meet-frontend.vercel.app/",
  },
  {
    title: "DeepSearch AI Agent",
    description:
      "RAG pipeline with OpenRouter integration routing queries across 2–3 LLM models per request for improved relevance.",
    stack: ["RAG", "OpenRouter", "Python"],
    github: "https://github.com/AadiSharma49/DeepSearch-AI-Agent",
    demo: "https://deep-search-ai-agent.vercel.app/",
  },
];

export type ExperienceData = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const EXPERIENCE: ExperienceData[] = [
  {
    role: "Software Engineer Intern",
    org: "Nandigo Technologies Pvt. Ltd.",
    period: "Aug 2026 — Oct 2026",
    description:
      "Built and debugged core flows (trip planning, itineraries, saved trips, sharing, auth) for an AI-powered travel platform. Integrated the Calendly API and built backend services and REST APIs, resolving production bugs across the stack.",
  },
  {
    role: "Software Engineer Intern",
    org: "Axonari",
    period: "Apr 2026 — Jun 2026",
    description:
      "Built end-to-end full-stack features across frontend, backend, and AI-integrated systems in a fast-paced startup, integrating AI APIs into production-ready apps with modern JavaScript and TypeScript frameworks.",
  },
  {
    role: "Open Source Developer",
    org: "Aden Hive",
    period: "Jan 2026 — Mar 2026",
    description:
      "Merged 8+ pull requests across production codebases, resolving backend issues, integrating webhook-based features, and standardizing error handling across 5+ API endpoints. Architected centralized middleware handling 100% of API responses.",
  },
];

export const SKILLS: Record<string, string[]> = {
  "Frontend & UI": ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  Backend: ["Node.js", "Express.js", "FastAPI", "Prisma ORM", "REST APIs", "Firebase", "Supabase"],
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "C++", "C"],
  "AI / ML": ["LLM Integration", "RAG Pipelines", "Vector Search (pgvector)", "Model Context Protocol (MCP)", "LLM Evaluation", "Prompt Engineering"],
  "APIs & Platforms": ["Gemini API", "OpenRouter", "Clerk Auth"],
  Tools: ["Vercel", "Git", "GitHub Actions", "Jira"],
};
