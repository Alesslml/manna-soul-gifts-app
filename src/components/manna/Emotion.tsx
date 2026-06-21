const emotions = [
  { label: "Quiero agradecer", tone: "bg-rosado/25 hover:bg-rosado/45", accent: "text-primary", wa: "Hola Manna, busco un regalo para agradecer a alguien especial. ¿Me pueden ayudar?" },
  { label: "Quiero sorprender", tone: "bg-oro/15 hover:bg-oro/30", accent: "text-oro", wa: "Hola Manna, quiero sorprender a alguien con un regalo especial. ¿Qué me recomiendan?" },
  { label: "Quiero celebrar", tone: "bg-salvia/15 hover:bg-salvia/30", accent: "text-salvia", wa: "Hola Manna, busco un regalo para celebrar una ocasión especial. ¿Qué opciones tienen?" },
  { label: "Quiero enamorar", tone: "bg-primary/10 hover:bg-primary/20", accent: "text-primary", wa: "Hola Manna, quiero un regalo romántico para enamorar a alguien. ¿Me pueden ayudar?" },
  { label: "Llevarme un recuerdo del Perú", tone: "bg-cacao/10 hover:bg-cacao/20", accent: "text-cacao", wa: "Hola Manna, busco souvenirs o recuerdos peruanos para llevarme. ¿Qué tienen disponible?" },
  { label: "Decorar mi espacio", tone: "bg-hueso hover:bg-rosado/25", accent: "text-cacao", wa: "Hola Manna, busco artículos únicos para decorar mi espacio. ¿Qué me recomiendan?" },
  { label: "Cuidar a alguien", tone: "bg-salvia/15 hover:bg-salvia/30", accent: "text-salvia", wa: "Hola Manna, quiero un regalo de bienestar para cuidar a alguien especial. ¿Qué tienen?" },
  { label: "Regalar algo único", tone: "bg-primary/10 hover:bg-primary/20", accent: "text-primary", wa: "Hola Manna, busco algo verdaderamente único para regalar. ¿Qué me pueden mostrar?" },
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
            <a
              key={e.label}
              href={`https://wa.me/51955993404?text=${encodeURIComponent(e.wa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group px-6 py-10 rounded-3xl text-left transition-colors ${e.tone}`}
            >
              <span className={`block font-display italic text-2xl leading-tight mb-4 ${e.accent}`}>
                {e.label}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-50 group-hover:opacity-100 transition-opacity">
                Ver selección →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
