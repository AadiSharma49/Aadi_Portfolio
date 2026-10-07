"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const LAYERS = [
  { size: 260, depth: 38, opacity: 0.35, dashed: false },
  { size: 190, depth: 26, opacity: 0.28, dashed: true },
  { size: 120, depth: 14, opacity: 0.4, dashed: false },
  { size: 56, depth: 6, opacity: 0.55, dashed: false },
];

// Mobile hero: layered rings that tilt with the phone (gyroscope),
// or follow the finger where no gyroscope is available.
export default function MobileTilt() {
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const sx = useSpring(tx, { stiffness: 90, damping: 16 });
  const sy = useSpring(ty, { stiffness: 90, damping: 16 });
  const rotateX = useTransform(sy, (v) => -v * 24);
  const rotateY = useTransform(sx, (v) => v * 24);

  useEffect(() => {
    let gyro = false;
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));

    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      gyro = true;
      tx.set(clamp(e.gamma / 35));
      ty.set(clamp((e.beta - 50) / 35));
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t || gyro) return;
      tx.set((t.clientX / window.innerWidth) * 2 - 1);
      ty.set((t.clientY / window.innerHeight) * 2 - 1);
    };
    const askPermission = () => {
      const D = window.DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<string>;
      };
      if (typeof D?.requestPermission === "function") {
        D.requestPermission()
          .then((r) => r === "granted" && window.addEventListener("deviceorientation", onOrient))
          .catch(() => {});
      }
    };

    const needsPermission =
      typeof (window.DeviceOrientationEvent as unknown as { requestPermission?: unknown })
        ?.requestPermission === "function";
    if (!needsPermission) window.addEventListener("deviceorientation", onOrient);
    else window.addEventListener("touchend", askPermission, { once: true });

    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("deviceorientation", onOrient);
      window.removeEventListener("touchend", askPermission);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [tx, ty]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center"
      style={{
        perspective: 700,
        backgroundImage: "radial-gradient(circle at 50% 45%, rgb(var(--color-ink) / 0.07), transparent 60%)",
      }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        {LAYERS.map((layer, i) => (
          <motion.span
            key={layer.size}
            className="absolute left-1/2 top-1/2 block rounded-full border border-ink"
            style={{
              width: layer.size,
              height: layer.size,
              marginLeft: -layer.size / 2,
              marginTop: -layer.size / 2,
              opacity: layer.opacity,
              borderStyle: layer.dashed ? "dashed" : "solid",
              translateZ: layer.depth * (i + 1),
            }}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{ duration: 40 + i * 14, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 -ml-1 -mt-1 block h-2 w-2 rounded-full bg-ink opacity-70" />
      </motion.div>
    </div>
  );
}
