"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/constants";

export default function Education() {
  return (
    <section id="education" className="contain-layout py-20 sm:py-24">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Education</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where I&apos;ve studied.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-lg border border-border p-5"
            >
              <p className="text-sm font-semibold text-ink">{edu.school}</p>
              <p className="mt-1 text-sm text-ink-muted">{edu.detail}</p>
              <p className="mt-3 font-mono text-xs text-ink-faint">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
