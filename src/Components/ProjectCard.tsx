"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { ProjectData } from "@/constants";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: ProjectData;
  index: number;
  featured?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlightOpacity = useSpring(0, { stiffness: 200, damping: 24 });
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });
  const spotlightBackground = useMotionTemplate`radial-gradient(360px circle at ${mouseX}% ${mouseY}%, rgb(var(--color-ink) / 0.07), transparent 60%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    mouseX.set(px * 100);
    mouseY.set(py * 100);
    spotlightOpacity.set(1);
    if (!prefersReducedMotion) {
      rotateY.set((px - 0.5) * 6);
      rotateX.set(-(py - 0.5) * 6);
    }
  };

  const handleMouseLeave = () => {
    spotlightOpacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={item}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-hover"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ opacity: spotlightOpacity, background: spotlightBackground }}
      />

      <div className="relative space-y-3">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-ink-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          {featured ? (
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
              Featured
            </span>
          ) : null}
        </div>

        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-6 flex items-center gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:text-ink"
          >
            <FiGithub className="h-3.5 w-3.5" />
            GitHub
          </a>
        ) : null}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:text-ink"
          >
            Live Demo
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
