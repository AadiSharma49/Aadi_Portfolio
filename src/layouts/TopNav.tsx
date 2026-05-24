"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type Props = {
  visible: boolean;
};

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/AadiSharma49", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/aaditya-sharma-978163250/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/AADI__SHARMA_49", label: "X" },
];

export default function TopNav({ visible }: Props) {
  return (
    <motion.header
      initial={false}
      animate={visible ? { y: 0, opacity: 1 } : { y: -110, opacity: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-slate-800/60 bg-[#101010]/90 backdrop-blur-xl"
    >
      <div className="contain-layout flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-[0_10px_30px_rgba(0,0,0,0.16)]" />
          <div className="hidden sm:flex flex-col">
            <p className="text-sm font-semibold text-slate-200">Aaditya Sharma</p>
            <p className="text-xs text-slate-500">Developer Workspace</p>
          </div>
        </motion.div>

        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "Work", href: "#projects" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socialLinks.slice(0, 2).map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center p-2 rounded-2xl border border-slate-800/70 bg-slate-900/80 text-slate-400 hover:text-slate-100 hover:border-slate-700/80 hover:bg-slate-800/80 transition-all duration-200"
                title={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
