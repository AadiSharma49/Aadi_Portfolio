"use client";

import { FaGithub } from "react-icons/fa";

export default function TopNav() {
  return (
    <header className="w-full border-b border-stone-800 py-3 px-6 flex items-center justify-between">
      <div className="text-sm text-stone-200 font-medium">Aaditya Sharma</div>
      <div className="flex items-center gap-3">
        <a href="/" className="text-sm text-stone-400 hover:text-white">Workspace</a>
        <a href="https://github.com/AadiSharma49" target="_blank" rel="noreferrer" className="text-stone-300 hover:text-white">
          <FaGithub />
        </a>
      </div>
    </header>
  );
}
