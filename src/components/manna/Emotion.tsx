const emotions = [
  {
    label: "Quiero agradecer",
    emoji: "🌸",
    sub: "Detalles que dicen gracias de verdad",
    wa: "Hola Manna, busco un regalo para agradecer a alguien especial. ¿Me pueden ayudar?",
  },
  {
    label: "Quiero sorprender",
    emoji: "✨",
    sub: "Algo que no esperaba para nada",
    wa: "Hola Manna, quiero sorprender a alguien con un regalo especial. ¿Qué me recomiendan?",
  },
  {
    label: "Quiero celebrar",
    emoji: "🎉",
    sub: "Cumpleaños, logros y momentos felices",
    wa: "Hola Manna, busco un regalo para celebrar una ocasión especial. ¿Qué opciones tienen?",
  },
  {
    label: "Quiero enamorar",
    emoji: "💛",
    sub: "Romántico, delicado y con alma",
    wa: "Hola Manna, quiero un regalo romántico para enamorar a alguien. ¿Me pueden ayudar?",
  },
  {
    label: "Llevar el Perú conmigo",
    emoji: "🇵🇪",
    sub: "Souvenirs con identidad y cultura",
    wa: "Hola Manna, busco souvenirs o recuerdos peruanos para llevarme. ¿Qué tienen disponible?",
  },
  {
    label: "Decorar mi espacio",
    emoji: "🏡",
    sub: "Objetos únicos que cuentan historias",
    wa: "Hola Manna, busco artículos únicos para decorar mi espacio. ¿Qué me recomiendan?",
  },
  {
    label: "Cuidar a alguien",
    emoji: "🌿",
    sub: "Bienestar, aromas y pequeños rituales",
    wa: "Hola Manna, quiero un regalo de bienestar para cuidar a alguien especial. ¿Qué tienen?",
  },
  {
    label: "Regalar algo único",
    emoji: "🎁",
    sub: "Lo que no encuentras en ningún otro lugar",
    wa: "Hola Manna, busco algo verdaderamente único para regalar. ¿Qué me pueden mostrar?",
  },
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
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-6 text-left transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="mb-4 text-3xl">{e.emoji}</div>
              <p className="font-display italic text-xl leading-tight text-foreground mb-2">
                {e.label}
              </p>
              <p className="text-[11px] text-muted-foreground leading-relaxed mb-5">
                {e.sub}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                Ver selección
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
