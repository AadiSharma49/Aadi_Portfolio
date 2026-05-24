"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const isTouchDevice = () => {
  if (typeof navigator === "undefined") return false;
  return (
    navigator.maxTouchPoints > 0 ||
    ((navigator as unknown as { msMaxTouchPoints?: number }).msMaxTouchPoints ?? 0) > 0
  );
};

type Trail = {
  x: number;
  y: number;
  id: number;
  angle: number;
};

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 32, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 32, mass: 0.4 });

  const trailId = useRef(0);
  const cleanupTimers = useRef<Record<number, number>>({});

  useEffect(() => {
    if (isTouchDevice() || window.innerWidth < 768) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      const id = ++trailId.current;
      const angle = Math.random() * 360;
      setTrails((prev) => [...prev.slice(-10), { x: event.clientX, y: event.clientY, id, angle }]);

      const timer = window.setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== id));
        delete cleanupTimers.current[id];
      }, 500);
      cleanupTimers.current[id] = timer;

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, [role='button'], .interactive");
      setIsHovering(Boolean(interactive));
    };

    const handleResize = () => {
      setEnabled(!(isTouchDevice() || window.innerWidth < 768));
    };

    const handleMouseLeave = () => {
      cursorX.set(-100);
      cursorY.set(-100);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseleave", handleMouseLeave);

      const timers = { ...cleanupTimers.current };
      Object.values(timers).forEach((timer) => window.clearTimeout(timer));
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <AnimatePresence>
        {trails.map(({ x, y, id, angle }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0.35, scale: 0.75 }}
            animate={{ opacity: 0, scale: 1.1, rotate: angle }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none fixed h-px w-12 rounded bg-white/40 blur-[1px]"
            style={{ left: x - 24, top: y }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.25 : 1,
            opacity: isHovering ? 1 : 0.92,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="relative flex h-8 w-8 items-center justify-center"
        >
          <span className="absolute h-8 w-8 rounded-full border border-white/80 shadow-[0_0_18px_rgba(255,255,255,0.28)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.65)]" />
        </motion.div>
      </motion.div>
    </>
  );
}
