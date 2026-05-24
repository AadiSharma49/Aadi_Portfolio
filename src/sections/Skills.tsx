"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiTypescript,
  SiNodedotjs,
  SiFirebase,
  SiSupabase,
  SiSwagger,
  SiMongodb,
  SiExpress,
  SiOpenai,
  SiClaude,
  SiGithub,
  SiGooglegemini,
  SiOllama,
  SiAnthropic,
  } from "react-icons/si";

// Map each skill name to its corresponding icon component
const ICON_MAP: Record<string, IconType> = {
  // Frontend & UI
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Tailwind CSS": SiTailwindcss,
  // Programming Languages
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "C++": SiCplusplus,
  "C": SiC,
  "TypeScript": SiTypescript,
  // Backend & Tools
  "Node.js": SiNodedotjs,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  "REST APIs": SiSwagger,
  "MongoDB": SiMongodb,
  "Express": SiExpress,
  "GitHub": SiGithub,
  // AI / ML
  "LLM Applications": SiClaude,
  "AI API Integration": SiOllama,
  "Prompt Engineering": SiAnthropic,
  "AI Agents": SiOpenai,
  "VibeCode": SiGooglegemini,
  };

// Define the skill categories and their items
const SKILL_CATEGORIES: Record<string, string[]> = {
  "Frontend & UI": ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  "Programming Languages": ["Python", "JavaScript", "C++", "C", "TypeScript"],
  "Backend & Tools": ["Node.js", "Firebase", "Supabase", "REST APIs", "MongoDB", "Express", "GitHub"],
  "AI / ML": ["LLM Applications", "AI API Integration", "Prompt Engineering", "AI Agents", "VibeCode",],
};

export default function Skills() {
  return (
    <section id="skills" className="contain-layout py-16 sm:py-20">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tools and technologies I work with.
          </h2>
        </motion.div>

        {/* Skill categories */}
        {Object.entries(SKILL_CATEGORIES).map(([category, items], catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 + catIdx * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((skill) => {
                const Icon = ICON_MAP[skill] as IconType;
                return (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -2 }}
                    className="card flex items-center gap-3 p-4 rounded-3xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-xl transition-premium"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800/60 text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

