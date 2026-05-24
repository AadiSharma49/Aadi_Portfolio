"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DragLine {
  id: string;
  x: number;
  y: number;
  angle: number;
  length: number;
  opacity: number;
}

const isTouchDevice = () => {
  if (typeof navigator === "undefined") return false;
  return navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
};

export default function CursorInteraction() {
  const [lines, setLines] = useState<DragLine[]>([]);
  const linesRef = useRef<DragLine[]>([]);
  const dragging = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = isTouchDevice();
  }, []);

  useEffect(() => {
    if (isTouch.current) return;

    const addLine = (line: DragLine) => {
      linesRef.current = [...linesRef.current, line].slice(-18);
      setLines(linesRef.current);

      window.setTimeout(() => {
        linesRef.current = linesRef.current.filter((item) => item.id !== line.id);
        setLines(linesRef.current);
      }, 2000);
    };

    const createLine = (fromX: number, fromY: number, toX: number, toY: number): DragLine => {
      const dx = toX - fromX;
      const dy = toY - fromY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + (Math.random() - 0.5) * 8;
      const distance = Math.hypot(dx, dy);
      return {
        id: `${performance.now()}-${Math.random()}`,
        x: fromX + dx / 2,
        y: fromY + dy / 2,
        angle,
        length: Math.max(18, Math.min(distance * 1.1, 72)),
        opacity: 0.3 + Math.random() * 0.18,
      };
    };

    const handleMouseDown = (event: MouseEvent) => {
      dragging.current = true;
      lastPoint.current = { x: event.clientX, y: event.clientY };
      lastTime.current = performance.now();
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!dragging.current) return;
      const now = performance.now();
      if (now - lastTime.current < 24) return;

      const nextPoint = { x: event.clientX, y: event.clientY };
      const deltaX = nextPoint.x - lastPoint.current.x;
      const deltaY = nextPoint.y - lastPoint.current.y;
      const distance = Math.hypot(deltaX, deltaY);
      if (distance < 4) return;

      addLine(createLine(lastPoint.current.x, lastPoint.current.y, nextPoint.x, nextPoint.y));
      lastPoint.current = nextPoint;
      lastTime.current = now;
    };

    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isTouch.current) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[1000]" aria-hidden="true">
      <AnimatePresence>
        {lines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: line.opacity, scaleX: 0.45 }}
            animate={{ opacity: 0.18, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0.6 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{
              left: line.x,
              top: line.y,
              width: line.length,
              height: 1.2,
              transform: `translate(-50%, -50%) rotate(${line.angle}deg)`,
              transformOrigin: "center",
              background: "rgba(226, 226, 226, 0.18)",
              filter: "blur(0.6px)",
              boxShadow: "0 0 10px rgba(226, 226, 226, 0.08)",
              borderRadius: 999,
            }}
            className="absolute"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
