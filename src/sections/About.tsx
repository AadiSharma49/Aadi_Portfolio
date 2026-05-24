"use client";

import { motion } from "framer-motion";

const highlights = [
  "Full stack systems (React, Next.js, Node.js)",
  "DevOps & Cloud Infrastructure",
  "AI model integration & ML workflows",
  "Open source collaboration",
  "System design & architecture",
  "Performance optimization",
];

export default function About() {
  return (
    <section id="about" className="contain-layout py-16 sm:py-20">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Crafting scalable solutions and meaningful engineering.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-300 leading-relaxed max-w-2xl"
        >
            I&apos;m passionate about building production-ready systems, optimizing infrastructure, and integrating AI capabilities into real-world applications. I love collaborating with teams, contributing to open source, and solving complex engineering challenges at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.05 }}
              className="card flex items-start gap-3 p-4 rounded-lg border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm"
            >
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
              <p className="text-slate-300 text-sm">{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
