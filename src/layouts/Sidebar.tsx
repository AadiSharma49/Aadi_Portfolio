"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { NAVIGATION_LINKS } from "@/constants";

type Props = {
  visible: boolean;
};

const desktopVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  hidden: { x: -20, opacity: 0, transition: { duration: 0.24, ease: "easeInOut" } },
};

export default function Sidebar({ visible }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (e.matches) setIsOpen(false);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const sidebarContent = (
    <nav className="space-y-1">
      {NAVIGATION_LINKS.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          whileHover={{ x: 4 }}
          className="group flex items-center gap-3 px-4 py-2.5 text-sm text-slate-400 hover:text-slate-100 rounded-2xl hover:bg-slate-800/50 transition-all duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors" />
          <span className={`${collapsed && !isMobile ? "opacity-0 w-0" : "opacity-100"}`}>
            {link.label}
          </span>
        </motion.a>
      ))}
    </nav>
  );

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm md:hidden"
          />
        )}

        <motion.aside
          initial={isOpen ? "visible" : "hidden"}
          animate={isOpen ? "visible" : "hidden"}
          variants={desktopVariants}
          className="fixed left-0 top-0 h-screen w-64 z-50 border-r border-slate-800/50 bg-[#111111]/95 backdrop-blur-xl p-6 md:hidden flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-semibold text-slate-200">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-800 rounded transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1">{sidebarContent}</div>
        </motion.aside>

        <div className="md:hidden fixed bottom-4 right-4 z-40">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-2xl bg-slate-200 text-slate-950 shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
          >
            {isOpen ? <FiX /> : <FiChevronRight />}
          </motion.button>
        </div>
      </>
    );
  }

  return (
    <motion.aside
      initial="visible"
      animate={visible ? "visible" : "hidden"}
      variants={desktopVariants}
      className="hidden md:flex flex-col border-r border-slate-800/50 bg-[#0f0f0f]/95 backdrop-blur-sm py-6 px-4"
    >
      <div className="flex items-center justify-between mb-8">
        {!collapsed && <span className="text-sm font-semibold text-slate-300">Navigation</span>}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-slate-800 rounded transition-colors"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </motion.button>
      </div>

      <div className="flex-1">{sidebarContent}</div>
    </motion.aside>
  );
}
