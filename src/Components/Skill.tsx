import { SKILLS } from "../constants";

export default function Skill() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="border border-stone-800 rounded p-4">
            <h3 className="text-sm font-medium mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s: any, i: number) => (
                <span key={i} className="text-sm px-2 py-1 rounded bg-stone-800 text-stone-200">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

