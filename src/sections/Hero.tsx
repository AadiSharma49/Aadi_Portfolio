"use client";

import { motion } from "framer-motion";
import HeroBackground from "@/Components/HeroBackground";
import { PERSONAL } from "@/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-28 sm:py-36">
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="contain-layout relative z-10 max-w-3xl space-y-7"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted"
        >
          {PERSONAL.title}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl"
        >
          {PERSONAL.name}
        </motion.h1>

        <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-ink-muted">
          {PERSONAL.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-md border border-ink bg-ink px-4 py-2.5 text-sm font-medium text-bg transition-all duration-200 hover:-translate-y-0.5 hover:bg-glow"
          >
            View Projects
          </a>
          <a
            href="https://github.com/AadiSharma49"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaditya-sharma-978163250/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.a
          variants={item}
          href={`mailto:${PERSONAL.email}`}
          className="inline-block font-mono text-sm text-ink-faint transition-colors duration-200 hover:text-ink-muted"
        >
          {PERSONAL.email}
        </motion.a>
      </motion.div>
    </section>
  );
}
