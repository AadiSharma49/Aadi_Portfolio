"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/Components/ProjectCard";
import { PROJECTS } from "@/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Projects() {
  return (
    <section id="projects" className="contain-layout py-20 sm:py-24">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Projects</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Things I&apos;ve built and shipped.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ perspective: 1200 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} featured={index === 0} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
