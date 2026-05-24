"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-12 pb-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-semibold">Aaditya Sharma</h1>
        <p className="mt-2 text-stone-400">Full Stack Developer | DevOps Engineer | AI Builder</p>

        <p className="mt-6 text-lg text-stone-300">I build scalable applications, DevOps systems, and AI-powered products focused on real-world engineering.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://github.com/AadiSharma49" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded border border-stone-800 text-sm hover:bg-stone-900">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aaditya-sharma-978163250/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded border border-stone-800 text-sm hover:bg-stone-900">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="/Aaditya-Sharma-Social-Resume.pdf" className="inline-flex items-center gap-2 px-3 py-2 rounded border border-stone-800 text-sm hover:bg-stone-900">Resume</a>
          {/* Premium "Get In Touch" button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2, backgroundColor: "#2d2d2d" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded border border-slate-600 bg-slate-800 text-slate-200 text-sm transition-colors duration-200"
            aria-label="Get in touch"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}

