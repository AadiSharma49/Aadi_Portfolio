import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

type Contribution = {
  name: string;
  repoUrl: string;
  description: string;
  contributions: string[];
  stack: string[];
};

const CONTRIBUTIONS: Contribution[] = [
  {
    name: "pocketpaw",
    repoUrl: "https://github.com/AadiSharma49/pocketpaw",
    description:
      "A modern pet marketplace built for seamless browsing, checkout, and responsive product discovery.",
    contributions: [
      "Implemented refined search, filter, and product discovery UX",
      "Enhanced checkout flow for smoother mobile conversions",
      "Delivered polished responsive layouts and component consistency",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Prisma"],
  },
  {
    name: "hive",
    repoUrl: "https://github.com/AadiSharma49/hive",
    description:
      "A community collaboration platform focused on shared workflows, project sync, and developer experience.",
    contributions: [
      "Contributed authentication and onboarding UI enhancements",
      "Improved dashboard interactions and project routing",
      "Helped stabilize core React/Next flows and issue triage",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Vercel"],
  },
  {
    name: "expiry-shine-dash",
    repoUrl: "https://github.com/AadiSharma49/expiry-shine-dash",
    description:
      "A data-rich inventory dashboard built to make expiry tracking, reporting, and analytics intuitive.",
    contributions: [
      "Built charts, filters, and inventory insights for better decision-making",
      "Added API-driven data sync and dashboard performance optimizations",
      "Improved data presentation with clear status and priority indicators",
    ],
    stack: ["React", "Chart.js", "TypeScript", "Tailwind", "REST API"],
  },
];

const EXPERIENCE_HIGHLIGHTS = [
  {
    title: "Aden Hive - Open Source Developer (Jan 2026 - Present)",
    bullets: [
      "Improved backend systems by resolving issues and integrating webhook-based features across multiple modules.",
      "Optimized development workflows using Git practices and code reviews across 3+ pull requests.",
      "Collaborated on production-level codebases, enhancing system reliability and maintainability.",
    ],
  },
  {
    title: "GirlScript Summer of Code 2025 - Contributor (Aug 2025 - Oct 2025)",
    bullets: [
      "Contributed to open-source projects across 2+ repositories involving web and cloud solutions.",
      "Resolved issues and delivered feature updates through 2+ merged pull requests.",
      "Worked with 5+ contributors and mentors using Git-based workflows to build scalable solutions.",
    ],
  },
  {
    title: "Winter of Code Social - Contributor (Nov 2025 - Jan 2026)",
    bullets: [
      "Architected centralized middleware handling 100% of API responses across backend services.",
      "Standardized error management across 5+ APIs, improving debugging consistency.",
      "Delivered backend enhancements via 3+ merged pull requests using collaborative Git workflows.",
    ],
  },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="contain-layout py-16 sm:py-20">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Open Source</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contributions that move communities forward
          </h2>
          <p className="max-w-2xl text-slate-400">
            Real-world open source work with impact: issue fixes, UI polish, performance
            improvements, and developer experience updates across high-value repositories.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {EXPERIENCE_HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6"
            >
              <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {CONTRIBUTIONS.map((project) => (
            <article
              key={project.name}
              className="group rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.65)] transition hover:border-slate-700/90 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                  Open Source
                </span>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  <FaGithub className="h-4 w-4" />
                  Repo
                </a>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.description}</p>

              <div className="mt-6 space-y-3">
                {project.contributions.map((detail) => (
                  <div key={detail} className="flex items-start gap-3 text-sm text-slate-300">
                    <FiCheckCircle className="mt-1 h-4 w-4 text-emerald-400" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((stackItem) => (
                  <span
                    key={stackItem}
                    className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400"
                  >
                    {stackItem}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-600 hover:bg-slate-700"
                >
                  View on GitHub
                  <FaExternalLinkAlt className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
