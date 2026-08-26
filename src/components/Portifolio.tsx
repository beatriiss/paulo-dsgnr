// src/components/Portfolio.tsx

const borderClasses = [
  "border-accent-orange/60",
  "border-accent-green/60",
  "border-accent-blue/60",
  "border-accent-purple/60",
];

const projects = [
  { name: "Nome da Empresa" },
  { name: "Nome da Empresa" },
  { name: "Nome da Empresa" },
];

export default function Portfolio() {
  return (
    <section className="px-8 py-16">
      <h2 className="font-display text-3xl mb-8">PORTFÓLIO</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 ${borderClasses[i % borderClasses.length]} p-3`}
          >
            <div className="aspect-video bg-card rounded-lg mb-4" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-white/50 mt-1">
              Clique no link abaixo para visualizar os detalhes e o funcionamento deste projeto.
            </p>
            <a href="#" className="text-xs text-accent-orange mt-3 inline-block">
              VER PROJETO ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}