const ocasiones = [
  "Cumpleaños", "Amor", "Graduación", "Navidad", "Open House",
  "Agradecimiento", "Viaje", "Bienvenida", "Corporativos", "Solo porque sí",
];

export function Ocasiones() {
  return (
    <section className="py-24 px-6 bg-hueso">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
              Regala por ocasión
            </p>
            <h2 className="text-4xl md:text-5xl text-balance max-w-xl">
              Cada momento merece <br /> un <span className="text-primary">detalle distinto</span>.
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {ocasiones.map((o) => (
            <a
              key={o}
              href="#quiz"
              className="px-6 py-3 rounded-full bg-background border border-foreground/10 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {o}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
