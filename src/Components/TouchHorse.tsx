"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaHorse } from "react-icons/fa";

// Touch-only companion: a ring marks the finger, a horse gallops to it.
export default function TouchHorse() {
  const [enabled, setEnabled] = useState(false);
  const [running, setRunning] = useState(false);
  const [facing, setFacing] = useState<1 | -1>(1);
  const [touching, setTouching] = useState(false);
  const stopTimer = useRef<ReturnType<typeof setTimeout>>();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const horseX = useSpring(x, { stiffness: 60, damping: 14, mass: 0.8 });
  const horseY = useSpring(y, { stiffness: 60, damping: 14, mass: 0.8 });

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight - 80;
    x.set(startX);
    y.set(startY);
    horseX.jump(startX);
    horseY.jump(startY);

    const handle = (event: TouchEvent) => {
      const t = event.touches[0];
      if (!t) return;
      if (Math.abs(t.clientX - horseX.get()) > 6) {
        setFacing(t.clientX > horseX.get() ? 1 : -1);
      }
      x.set(t.clientX);
      y.set(t.clientY);
      setTouching(true);
      setRunning(true);
      clearTimeout(stopTimer.current);
    };
    const end = () => {
      setTouching(false);
      clearTimeout(stopTimer.current);
      stopTimer.current = setTimeout(() => setRunning(false), 900);
    };

    window.addEventListener("touchstart", handle, { passive: true });
    window.addEventListener("touchmove", handle, { passive: true });
    window.addEventListener("touchend", end, { passive: true });
    window.addEventListener("touchcancel", end, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handle);
      window.removeEventListener("touchmove", handle);
      window.removeEventListener("touchend", end);
      window.removeEventListener("touchcancel", end);
      clearTimeout(stopTimer.current);
    };
  }, [enabled, x, y, horseX, horseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-12 w-12 rounded-full border border-ink/40"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: touching ? 1 : 0.6, opacity: touching ? 0.8 : 0.3 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: horseX, y: horseY, translateX: "-50%", translateY: "-150%" }}
      >
        <motion.div
          animate={running ? { y: [0, -7, 0], rotate: [0, -6 * facing, 0] } : { y: 0, rotate: 0 }}
          transition={
            running
              ? { duration: 0.32, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
        >
          <FaHorse className="h-8 w-8 text-ink" style={{ transform: `scaleX(${-facing})` }} />
        </motion.div>
      </motion.div>
    </>
  );
}
