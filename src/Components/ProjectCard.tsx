"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description?: string | null;
  homepage?: string | null;
  stargazers_count?: number;
};

export default function ProjectCard({ repo, stack }: { repo: Repo; stack: string[] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="bg-[#0f0f0f] border border-[#1b1b1b] rounded-lg p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform transform-gpu hover:scale-[1.01]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white truncate">{repo.name}</h3>
          {repo.description ? (
            <p className="text-sm text-slate-300 mt-2 line-clamp-3">{repo.description}</p>
          ) : (
            <p className="text-sm text-slate-400 mt-2">Production-quality repository</p>
          )}
        </div>
        <div className="text-xs text-slate-400">{repo.stargazers_count || 0}★</div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((t) => (
          <span
            key={t}
            className="text-xs text-slate-300 bg-slate-800/40 px-2 py-1 rounded-full border border-slate-700/30"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-5">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-transparent border border-slate-800 text-slate-300 hover:bg-slate-800/40 transition"
        >
          <FaGithub className="w-4 h-4" />
          GitHub
        </a>

        {repo.homepage ? (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-transparent border border-slate-800 text-slate-300 hover:bg-slate-800/40 transition"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Live Demo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
