"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/AadiSharma49",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/aaditya-sharma-978163250/",
      icon: FaLinkedin,
    },
    {
      label: "X",
      url: "https://x.com/AADI__SHARMA_49",
      icon: FaTwitter,
    },
  ];

  return (
    <section id="hero" className="contain-layout py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-8"
      >
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Aaditya Sharma
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-medium text-slate-400"
          >
            Full Stack Developer | AI Builder | DevOps Engineer
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          Building scalable systems, AI-powered applications, and developer-focused tools. I
          focus on clean architecture, performance optimization, and shipping products that
          matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition-all duration-200 hover:border-slate-600 hover:bg-slate-900/50"
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-950 transition-all duration-200 hover:bg-slate-100"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
