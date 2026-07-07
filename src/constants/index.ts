// Centralized data used across the portfolio

export const PERSONAL = {
  name: "Aaditya Sharma",
  title: "Full-Stack & AI Developer",
  tagline:
    "I build and ship production AI systems independently — from RAG pipelines to desktop apps.",
  email: "aadi198555@gmail.com",
};

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/AadiSharma49" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aaditya-sharma-978163250/" },
  { label: "Email", href: "mailto:aadi198555@gmail.com" },
];

export const NAVIGATION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const ABOUT = {
  summary:
    "Full-stack and AI developer who builds and ships production systems independently. I created RelayOS, an AI decision memory platform for engineering teams, and Senti, a multimodal desktop auth system with voice, clap pattern, and PIN unlock. Comfortable across the full stack — Next.js, FastAPI, PostgreSQL, Electron, and LLM integrations.",
  education: [
    {
      school: "Indian Institute of Technology, Mandi",
      detail: "Professional Certification — Computer Software Engineering",
      period: "Apr 2025 — Jun 2026",
    },
    {
      school: "University of Rajasthan",
      detail: "Bachelor of Computer Applications (BCA)",
      period: "Aug 2022 — Jul 2025",
    },
  ],
};

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
      "AI decision memory platform — captures decisions, action items & open questions from AI conversations (Claude, ChatGPT, Cursor) into a permanently searchable memory for engineering teams.",
    stack: ["Next.js App Router", "Neon PostgreSQL", "Prisma", "Clerk", "Gemini API", "RAG (cosine similarity)", "Vercel"],
    github: "https://github.com/AadiSharma49/RelayOs",
    demo: "https://relay-os-three.vercel.app/",
  },
  {
    title: "Senti",
    description:
      "Multimodal desktop auth system — Electron app with voice unlock, clap pattern recognition, and PIN fallback. FastAPI + PostgreSQL backend, React dashboard, Telegram bot for remote lock/unlock.",
    stack: ["Electron", "FastAPI", "PostgreSQL", "React", "Telegram Bot API"],
    github: "https://github.com/AadiSharma49/Senti",
  },
  {
    title: "VibeMeet",
    description:
      "AI-powered real-time communication platform with AI transcription and meeting insights; sub-250ms latency, 5–10 concurrent users.",
    stack: ["WebRTC", "React", "Node.js", "AI transcription"],
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
    role: "Associate Software Engineer",
    org: "Tectome.ai",
    period: "Apr 2026 — Jun 2026",
    description:
      "Built end-to-end features across frontend, backend, and AI-driven systems in a fast-moving startup.",
  },
  {
    role: "Open Source Developer",
    org: "Aden Hive",
    period: "Jan 2026 — Mar 2026",
    description:
      "Resolved backend issues, integrated webhook features, 3+ merged PRs on production codebases.",
  },
  {
    role: "Contributor",
    org: "Winter of Code Social",
    period: "Nov 2025 — Jan 2026",
    description:
      "Architected centralized middleware handling 100% of API responses across 5+ endpoints.",
  },
  {
    role: "Contributor",
    org: "GirlScript Summer of Code 2025",
    period: "Aug 2025 — Oct 2025",
    description: "Merged 2+ PRs collaborating with 5+ contributors.",
  },
];

export const SKILLS: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  Backend: ["Node.js", "Express.js", "FastAPI", "Prisma ORM", "REST APIs", "Firebase", "Supabase"],
  "AI / ML": ["LLM Integration", "RAG Pipelines", "OpenRouter", "Prompt Engineering", "AI Agents"],
  Languages: ["JavaScript", "TypeScript", "Python", "C++", "C"],
  Tools: ["Electron", "Vercel", "Clerk Auth", "Git", "GitHub Actions"],
};
