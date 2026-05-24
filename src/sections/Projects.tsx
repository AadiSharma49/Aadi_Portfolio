import ProjectCard from "../Components/ProjectCard";

type Repo = {
  id: number;
  name: string;
  full_name?: string;
  html_url: string;
  description?: string | null;
  homepage?: string | null;
  topics?: string[];
  language?: string | null;
  stargazers_count?: number;
  forks_count?: number;
  archived?: boolean;
  fork?: boolean;
  updated_at?: string | null;
};

const OVERRIDES: Record<string, { description?: string; stack?: string[] }> = {
  vibemeet: {
    description: "Real-time audio meetups with low-latency media streams and room orchestration.",
    stack: ["React", "WebRTC", "Node.js", "Docker"],
  },
  deepsearch: {
    description: "AI-driven semantic search platform using embeddings, vector indexing, and scalable search workflows.",
    stack: ["Next.js", "TypeScript", "Vector DB", "AI SDK", "Tailwind"],
  },
};

function isCandidate(r: Repo) {
  if (r.fork || r.archived) return false;
  const name = (r.name || "").toLowerCase();
  const desc = (r.description || "").toLowerCase();
  // Exclude demo, test, example projects and specifically the Aadi_Portfolio and Web-Terminal repositories
  // Exclude demo, test, example projects and specifically the unwanted repositories
  const blacklist = /(demo|test|example|tutorial|practice|my_demo|my_demoportfolio|side[-_ ]?project|project-alpha|aadi[_-]portfolio|web[-_]terminal|group[-_]chat[-_]app|notes[-_]mern[-_]proj)/i;
  return !(blacklist.test(name) || blacklist.test(desc));
}

async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch("https://api.github.com/users/AadiSharma49/repos?per_page=100", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [];
  }
}

export default async function Projects() {
  const all = await fetchRepos();
  const candidates = all.filter(isCandidate);

  const picks: Repo[] = [];

  // Prioritize VibeMeet and DeepSearch when present
  const findBy = (needle: string) => candidates.find((r) => (r.name || "").toLowerCase().includes(needle));
  const vibe = findBy("vibemeet");
  const deep = findBy("deepsearch");
  if (vibe) picks.push(vibe);
  if (deep && !picks.find((p) => p.id === deep.id)) picks.push(deep);

  // Fill remaining slots by popularity and recent activity
  const rest = candidates
    .filter((r) => !picks.find((p) => p.id === r.id))
    .sort((a, b) => {
      const s = (b.stargazers_count || 0) - (a.stargazers_count || 0);
      if (s !== 0) return s;
      const f = (b.forks_count || 0) - (a.forks_count || 0);
      if (f !== 0) return f;
      return new Date(b.updated_at || 0).getTime() - new Date(a.updated_at || 0).getTime();
    });

  for (const r of rest) {
    if (picks.length >= 4) break;
    picks.push(r);
  }

  const mapped = picks.slice(0, 4).map((r) => {
    const key = (r.name || "").toLowerCase();
    const override = Object.keys(OVERRIDES).find((k) => key.includes(k));
    const description = override ? OVERRIDES[override].description : r.description || "";
    const stack = override
      ? OVERRIDES[override].stack || []
      : [r.language || "Various", ...(r.topics || []).slice(0, 3)];
    return {
      id: r.id,
      name: r.name,
      html_url: r.html_url,
      description,
      homepage: r.homepage,
      stack,
      stargazers_count: r.stargazers_count || 0,
    };
  });

  return (
    <section id="projects" className="contain-layout py-16 sm:py-20">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            A curated engineering showcase
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Production-focused case studies and product showcases selected from GitHub.
          </p>
        </div>

        {mapped.length === 0 ? (
          <div className="text-slate-400">No qualifying repositories found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {mapped.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} stack={repo.stack} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
