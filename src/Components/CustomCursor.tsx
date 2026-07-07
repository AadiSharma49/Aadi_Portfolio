"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { hasWebGL } from "@/lib/webgl";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useTheme } from "@/hooks/useTheme";

const CursorScene = lazy(() => import("./CursorScene"));

function isTouchDevice() {
  if (typeof navigator === "undefined") return false;
  return navigator.maxTouchPoints > 0;
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { theme } = useTheme();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotSpringX = useSpring(x, { stiffness: 500, damping: 34, mass: 0.4 });
  const dotSpringY = useSpring(y, { stiffness: 500, damping: 34, mass: 0.4 });
  const ringSpringX = useSpring(x, { stiffness: 140, damping: 20, mass: 0.6 });
  const ringSpringY = useSpring(y, { stiffness: 140, damping: 20, mass: 0.6 });

  useEffect(() => {
    const canEnable = !isTouchDevice() && window.innerWidth >= 768 && hasWebGL() && !prefersReducedMotion;
    setEnabled(canEnable);
    document.body.classList.toggle("custom-cursor-active", canEnable);
    return () => document.body.classList.remove("custom-cursor-active");
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest("a, button, input, textarea, [role='button'], .interactive")));
    };
    const handleVisibility = () => setIsTabActive(!document.hidden);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const color = theme === "light" ? "#0a0a0a" : "#fafafa";

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-ink/25"
        style={{ x: ringSpringX, y: ringSpringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isHovering ? 1.6 : 1, opacity: isHovering ? 0.4 : 0.7 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-11 w-11"
        style={{ x: dotSpringX, y: dotSpringY, translateX: "-50%", translateY: "-50%" }}
      >
        {isTabActive ? (
          <Suspense fallback={null}>
            <CursorScene hovering={isHovering} color={color} />
          </Suspense>
        ) : null}
      </motion.div>
    </>
  );
}
