"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    org: "Tectome.ai",
    period: "April 2026 – Present",
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
    period: "January 2026 – April 2026",
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
    period: "November 2025 – January 2026",
    location: undefined,
    bullets: [
      "Participated in collaborative development and open source contributions",
      "Worked on community-driven engineering tasks",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "GirlScript Summer of Code",
    period: "August 2025 – October 2025",
    location: undefined,
    bullets: [
      "Contributed to open source repositories during GSSoC 2025",
      "Improved frontend and development workflows",
      "Collaborated with maintainers and contributors",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Building scalable systems, AI products, and developer-focused applications.
          </h2>
        </div>

        <div className="relative border-l border-slate-800/80 pl-8">
          {experiences.map((item, index) => (
            <motion.article
              key={item.org + item.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -2 }}
              className="group relative mb-10 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.85)] backdrop-blur-sm transition duration-300 hover:border-slate-700"
            >
              <span className="absolute -left-5 top-6 inline-flex h-4 w-4 rounded-full border-2 border-slate-400 bg-slate-950 shadow-[0_0_0_8px_rgba(148,163,184,0.04)]" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                    {item.role}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-100 sm:text-2xl">
                    {item.org}
                  </h3>
                </div>
                <div className="space-y-1 text-right text-sm text-slate-500">
                  <p>{item.period}</p>
                  {item.location ? <p>{item.location}</p> : null}
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300 sm:text-base">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
