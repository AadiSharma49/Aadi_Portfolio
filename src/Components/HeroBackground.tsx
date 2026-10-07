"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { usePrefersReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";
import { useTheme } from "@/hooks/useTheme";
import { hasWebGL } from "@/lib/webgl";

import MobileTilt from "./MobileTilt";

const HeroScene = lazy(() => import("./HeroScene"));

function StaticFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 45%, rgb(var(--color-ink) / 0.06), transparent 55%)",
      }}
    >
      <div
        className="h-64 w-64 rounded-full border border-border opacity-40 sm:h-80 sm:w-80"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgb(var(--color-ink) / 0.05) 0px, rgb(var(--color-ink) / 0.05) 1px, transparent 1px, transparent 14px)",
        }}
      />
    </div>
  );
}

export default function HeroBackground() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  useEffect(() => {
    setCanRender3D(hasWebGL());

    const handleVisibility = () => setIsTabActive(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const shouldRenderScene = canRender3D && !prefersReducedMotion && !isMobile;
  const sceneColor = theme === "light" ? "#0a0a0a" : "#fafafa";

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {shouldRenderScene ? (
        <Suspense fallback={<StaticFallback />}>
          <div className="absolute inset-0">
            <HeroScene isActive={isTabActive} color={sceneColor} />
          </div>
        </Suspense>
      ) : isMobile && !prefersReducedMotion ? (
        <MobileTilt />
      ) : (
        <StaticFallback />
      )}
    </div>
  );
}
