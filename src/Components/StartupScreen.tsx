"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onFinish?: () => void;
  delay?: number;
};

export default function StartupScreen({ onFinish, delay = 2500 }: Props) {
  useEffect(() => {
    const t = setTimeout(() => {
      onFinish?.();
    }, delay);
    return () => clearTimeout(t);
  }, [delay, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="startup"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Animated loading indicator */}
          <div className="flex items-center justify-center gap-2.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  repeat: Infinity,
                }}
                className="w-2.5 h-2.5 rounded-full bg-slate-100 shadow-lg shadow-slate-500/20"
              />
            ))}
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-1"
          >
            <p className="text-sm font-medium text-slate-300">Initializing Workspace</p>
            <p className="text-xs text-slate-600">Loading your developer environment...</p>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: delay / 1000, ease: "linear" }}
            className="h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full"
            style={{ width: "120px", originX: 0 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
