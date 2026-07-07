"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PERSONAL, SOCIAL_LINKS } from "@/constants";

const ICONS: Record<string, typeof FiGithub> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Email: FiMail,
};

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border"
    >
      <div className="contain-layout flex flex-col items-center gap-6 py-16 text-center">
        <p className="max-w-md text-lg text-ink">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>
        <a
          href={`mailto:${PERSONAL.email}`}
          className="font-mono text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
        >
          {PERSONAL.email}
        </a>

        <div className="flex items-center gap-5 pt-2">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="rounded-md border border-border p-2.5 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="pt-6 font-mono text-xs text-ink-faint">
          Built by {PERSONAL.name}
        </p>
      </div>
    </motion.footer>
  );
}
