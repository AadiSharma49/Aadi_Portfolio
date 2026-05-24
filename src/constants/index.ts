// Centralized data used across the workspace UI
export const SOCIAL_MEDIA_LINKS = [
  { href: "https://github.com/AadiSharma49", icon: "GitHub" },
  { href: "https://www.linkedin.com/in/aaditya-sharma-978163250/", icon: "LinkedIn" },
];

export const NAVIGATION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "Open Source" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
// Projects are sourced live from GitHub; placeholders removed.
// The `Projects` section now fetches real repositories directly from the
// GitHub API and displays curated entries. Do not add placeholder/demo
// project entries here.

export const SKILLS: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  Backend: ["Node.js", "Express", "Python", "FastAPI"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  Cloud: ["AWS", "GCP"],
  Databases: ["Postgres", "MongoDB", "Redis"],
  AI: ["PyTorch", "TensorFlow", "LangChain"],
};

// Mapping of skill names to React icon components (using react-icons)
// The value is a string that can be used with dynamic import via the `react-icons` package.
// Example: "react-icons/si" for Simple Icons, "react-icons/fa" for FontAwesome.
export const SKILL_ICONS: Record<string, { lib: string; name: string }> = {
  React: { lib: "react-icons/si", name: "SiReact" },
  "Next.js": { lib: "react-icons/si", name: "SiNextdotjs" },
  TypeScript: { lib: "react-icons/si", name: "SiTypescript" },
  Tailwind: { lib: "react-icons/si", name: "SiTailwindcss" },
  "Node.js": { lib: "react-icons/si", name: "SiNodedotjs" },
  Express: { lib: "react-icons/si", name: "SiExpress" },
  Python: { lib: "react-icons/si", name: "SiPython" },
  FastAPI: { lib: "react-icons/si", name: "SiFastapi" },
  Docker: { lib: "react-icons/si", name: "SiDocker" },
  Kubernetes: { lib: "react-icons/si", name: "SiKubernetes" },
  "GitHub Actions": { lib: "react-icons/si", name: "SiGithubactions" },
  "CI/CD": { lib: "react-icons/si", name: "SiCicd" },
  AWS: { lib: "react-icons/si", name: "SiAmazonaws" },
  GCP: { lib: "react-icons/si", name: "SiGooglecloud" },
  Postgres: { lib: "react-icons/si", name: "SiPostgresql" },
  MongoDB: { lib: "react-icons/si", name: "SiMongodb" },
  Redis: { lib: "react-icons/si", name: "SiRedis" },
  PyTorch: { lib: "react-icons/si", name: "SiPytorch" },
  TensorFlow: { lib: "react-icons/si", name: "SiTensorflow" },
  LangChain: { lib: "react-icons/si", name: "SiLangchain" },
};

