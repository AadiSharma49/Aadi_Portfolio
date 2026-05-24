"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="contain-layout mt-20 border-t border-slate-800/50 py-12"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-4">
          {[
            { icon: FaGithub, href: "https://github.com/AadiSharma49", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/aaditya-sharma-978163250/", label: "LinkedIn" },
            { icon: FaTwitter, href: "https://x.com/AADI__SHARMA_49", label: "X" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-slate-800/50 bg-slate-900/50 p-2.5 text-slate-400 transition-colors hover:border-slate-700/50 hover:text-slate-200"
              title={label}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 text-center"
        >
          <p className="text-sm text-slate-500">Designed & built by Aaditya Sharma</p>
          <p className="text-xs text-slate-600">&copy; {currentYear} All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
