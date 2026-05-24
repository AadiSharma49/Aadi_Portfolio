"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "devops", label: "DevOps" },
  { id: "opensource", label: "Open Source" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`transition-all duration-200 ease-in-out ${collapsed ? "w-16" : "w-64"} bg-transparent py-6 px-4 border-r border-stone-800`}> 
      <div className="flex items-center justify-between mb-6">
        <div className={`text-sm font-semibold tracking-wide ${collapsed ? "opacity-0 max-w-0" : "opacity-100"}`}>Workspace</div>
        <button aria-label="toggle sidebar" onClick={() => setCollapsed((s) => !s)} className="p-1 rounded hover:bg-stone-800">
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="group flex items-center gap-3 py-2 px-2 rounded hover:bg-stone-900 text-stone-200">
            <span className={`inline-block w-2 h-2 rounded-full bg-stone-400`} />
            <span className={`text-sm ${collapsed ? "hidden" : ""}`}>{l.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
