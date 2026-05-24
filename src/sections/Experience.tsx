"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    org: "Tectome.ai",
    period: "April 2026 - Present",
    location: "London Area, United Kingdom",
    bullets: [
      "Working as an AI and Full Stack Engineer Intern",
      "Building end-to-end frontend and backend systems",
      "Contributing to AI-powered workflows and scalable applications",
      "Improving system architecture and developer experience",
    ],
  },
  {
    role: "Open Source Developer",
    org: "Aden",
    period: "January 2026 - April 2026",
    location: "San Francisco, California, United States",
    bullets: [
      "Contributed to open source engineering workflows",
      "Collaborated on scalable application improvements",
      "Worked with modern development tooling and Git workflows",
    ],
  },
  {
    role: "Contributor",
    org: "Code Social",
    period: "November 2025 - January 2026",
    bullets: [
      "Participated in collaborative development and open source contributions",
      "Worked on community-driven engineering tasks",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "GirlScript Summer of Code",
    period: "August 2025 - October 2025",
    bullets: [
      "Contributed to open source repositories during GSSoC 2025",
      "Improved frontend and development workflows",
      "Collaborated with maintainers and contributors",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="contain-layout py-16 sm:py-20">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Experience</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Building scalable systems and AI products.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative border-l border-slate-800/50"
        >
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.org}-${item.period}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 4 }}
              className="group relative mb-8 pl-8"
            >
              <div className="absolute -left-4 top-1 h-6 w-6 rounded-full border-2 border-slate-700 bg-slate-950 transition-colors group-hover:border-slate-500" />

              <div className="card rounded-lg border border-slate-800/50 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-900/60">
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {item.role}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-100">{item.org}</h3>
                  </div>
                  <div className="whitespace-nowrap text-sm text-slate-500">
                    <p>{item.period}</p>
                    {item.location ? <p className="text-xs">{item.location}</p> : null}
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
