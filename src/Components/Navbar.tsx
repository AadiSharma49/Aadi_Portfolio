"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { NAVIGATION_LINKS, PERSONAL, SOCIAL_LINKS } from "@/constants";
import ThemeToggle from "@/Components/ThemeToggle";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const update = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      if (Math.abs(delta) > 8) {
        setVisible(currentScrollY < 72 || delta < 0);
        lastScrollY.current = currentScrollY;
      }
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const github = SOCIAL_LINKS.find((link) => link.label === "GitHub");
  const linkedin = SOCIAL_LINKS.find((link) => link.label === "LinkedIn");

  return (
    <motion.header
      initial={false}
      animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md"
    >
      <div className="contain-layout flex h-16 items-center justify-between">
        <a href="#hero" className="font-mono text-sm font-medium text-ink">
          {PERSONAL.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {github ? (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              <FiGithub className="h-4 w-4" />
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
          ) : null}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-ink"
          >
            {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border md:hidden"
        >
          <div className="contain-layout flex flex-col gap-4 py-5">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-5 pt-2">
              {github ? (
                <a href={github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-ink">
                  <FiGithub className="h-4 w-4" />
                </a>
              ) : null}
              {linkedin ? (
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-ink">
                  <FiLinkedin className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </motion.nav>
      ) : null}
    </motion.header>
  );
}
