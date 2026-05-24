export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-3">About</h2>
        <p className="text-stone-300">I focus on full stack development, DevOps engineering, and AI integrations. I build production-ready systems, contribute to open source, and enjoy solving practical engineering problems at scale.</p>

        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-300">
          <li>Full stack systems</li>
          <li>DevOps & CI/CD</li>
          <li>AI model integration</li>
          <li>Open source collaboration</li>
        </ul>
      </div>
    </section>
  );
}

