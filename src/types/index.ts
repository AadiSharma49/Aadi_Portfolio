export type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type CursorLine = {
  id: string;
  x: number;
  y: number;
  rotation: number;
};

export type SectionProps = Record<string, never>;
