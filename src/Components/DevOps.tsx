export default function DevOps() {
  const topics = ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "AWS", "Monitoring"];

  return (
    <section id="devops" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">DevOps & AI Workspace</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-stone-800 rounded p-4">
          <h3 className="font-medium">Infrastructure</h3>
          <ul className="mt-2 text-sm text-stone-300 list-disc ml-5">
            <li>Containerization with Docker</li>
            <li>Orchestration with Kubernetes</li>
            <li>IaC and environment management</li>
          </ul>
        </div>

        <div className="border border-stone-800 rounded p-4">
          <h3 className="font-medium">CI/CD & Observability</h3>
          <ul className="mt-2 text-sm text-stone-300 list-disc ml-5">
            <li>Jenkins & GitHub Actions pipelines</li>
            <li>Automated testing & deployment</li>
            <li>Monitoring, logging, and alerts</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border border-stone-800 rounded p-4">
        <h3 className="font-medium">AI Integrations</h3>
        <p className="text-sm text-stone-300 mt-2">Designing model inference pipelines, feature stores, and scalable APIs for model-powered features.</p>
      </div>
    </section>
  );
}
