"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

type Props = { children: ReactNode };

export default function WorkspaceLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex bg-[#070707] text-stone-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="p-8 max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
