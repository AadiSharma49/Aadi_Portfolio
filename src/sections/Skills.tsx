"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants";

export default function Skills() {
  return (
    <section id="skills" className="contain-layout py-20 sm:py-24">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tools and technologies I work with.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: catIdx * 0.06 }}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="mb-4 text-sm font-semibold text-ink">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border px-2.5 py-1 font-mono text-[11px] text-ink-muted transition-colors duration-200 hover:border-border-hover hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
