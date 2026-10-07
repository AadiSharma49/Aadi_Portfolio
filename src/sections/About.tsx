"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="contain-layout py-20 sm:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-10"
      >
        <motion.div variants={item} className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">About</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Independent by default, product-minded by habit.
          </h2>
        </motion.div>

        <motion.p variants={item} className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          {ABOUT.summary}
        </motion.p>

      </motion.div>
    </section>
  );
}
