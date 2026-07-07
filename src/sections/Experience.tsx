"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";

export default function Experience() {
  return (
    <section id="experience" className="contain-layout py-20 sm:py-24">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        <div className="relative border-l border-border pl-8">
          {EXPERIENCE.map((entry, index) => (
            <motion.article
              key={`${entry.org}-${entry.period}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="group relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full border border-ink-faint bg-bg transition-colors duration-200 group-hover:border-ink" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-ink">
                  {entry.role} <span className="text-ink-muted">· {entry.org}</span>
                </h3>
                <p className="font-mono text-xs text-ink-faint">{entry.period}</p>
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {entry.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
