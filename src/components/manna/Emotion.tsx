const emotions = [
  { label: "Quiero agradecer", tone: "bg-rosado/25 hover:bg-rosado/45", accent: "text-primary" },
  { label: "Quiero sorprender", tone: "bg-oro/15 hover:bg-oro/30", accent: "text-oro" },
  { label: "Quiero celebrar", tone: "bg-salvia/15 hover:bg-salvia/30", accent: "text-salvia" },
  { label: "Quiero enamorar", tone: "bg-primary/10 hover:bg-primary/20", accent: "text-primary" },
  { label: "Llevarme un recuerdo del Perú", tone: "bg-cacao/10 hover:bg-cacao/20", accent: "text-cacao" },
  { label: "Decorar mi espacio", tone: "bg-hueso hover:bg-rosado/25", accent: "text-cacao" },
  { label: "Cuidar a alguien", tone: "bg-salvia/15 hover:bg-salvia/30", accent: "text-salvia" },
  { label: "Regalar algo único", tone: "bg-primary/10 hover:bg-primary/20", accent: "text-primary" },
];

export function Emotion() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Elige tu regalo por emoción
          </p>
          <h2 className="text-4xl md:text-5xl text-balance">
            A veces no sabes qué regalar, <br />
            pero sí <span className="text-primary">qué quieres hacer sentir</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {emotions.map((e) => (
            <button
              key={e.label}
              className={`group px-6 py-10 rounded-3xl text-left transition-colors ${e.tone}`}
            >
              <span className={`block font-display italic text-2xl leading-tight mb-4 ${e.accent}`}>
                {e.label}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-50 group-hover:opacity-100 transition-opacity">
                Ver selección →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
