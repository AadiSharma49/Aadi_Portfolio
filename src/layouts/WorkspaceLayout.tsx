"use client";

import { ReactNode } from "react";
import Navbar from "@/Components/Navbar";
import CustomCursor from "@/Components/CustomCursor";
import TouchHorse from "@/Components/TouchHorse";
import { ThemeProvider } from "@/hooks/useTheme";

type Props = {
  children: ReactNode;
};

export default function WorkspaceLayout({ children }: Props) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-ink">
        <CustomCursor />
        <TouchHorse />
        <Navbar />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
