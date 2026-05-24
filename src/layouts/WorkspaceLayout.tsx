"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import CustomCursor from "@/Components/CustomCursor";
import CursorInteraction from "@/Components/CursorInteraction";

type Props = {
  children: ReactNode;
};

export default function WorkspaceLayout({ children }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  // timer for auto‑hide after hover leave
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) > 10) {
        // Show when near top or scrolling up, hide on scroll down
        setIsVisible(currentScrollY < 80 || delta < 0);
        lastScrollY.current = currentScrollY;
      }
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateVisibility);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-slate-100">
      <CustomCursor />
      <CursorInteraction />
      {/* Hover zone for revealing hidden sidebar */}
      {/* Hover zone to temporarily reveal the hidden sidebar */}
      <div
        className="fixed left-0 top-0 h-full w-4 z-20 cursor-pointer"
        style={{ opacity: 0 }}
        onMouseEnter={() => {
          // Show sidebar and schedule auto‑hide after 2 seconds
          if (hideTimer.current) clearTimeout(hideTimer.current);
          setIsVisible(true);
          hideTimer.current = setTimeout(() => setIsVisible(false), 2000);
        }}
        onMouseLeave={() => {
          // If the user moves away before the timeout, keep the timer (auto‑hide will still fire)
          // Optionally, we could clear the timer here to require another hover, but keeping it provides
          // the requested 2‑second reveal regardless of mouse movement.
        }}
      />
      <Sidebar visible={isVisible} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav visible={isVisible} />
        <main className="flex-1 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-16"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
