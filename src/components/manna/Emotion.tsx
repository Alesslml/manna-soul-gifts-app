function IconAgradecer() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6c0 0-1.5 3-6 5s-7 7-4 11 8 5 10 3" />
      <path d="M20 6c0 0 1.5 3 6 5s7 7 4 11-8 5-10 3" />
      <path d="M20 25v9" />
      <path d="M16 34h8" />
      <circle cx="20" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconSorprender() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4v4M20 32v4M4 20h4M32 20h4" />
      <path d="M8.69 8.69l2.83 2.83M28.48 28.48l2.83 2.83M28.48 11.52l2.83-2.83M8.69 31.31l2.83-2.83" />
      <circle cx="20" cy="20" r="7" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconCelebrar() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 30L6 34" />
      <path d="M10 30c0 0 4-14 14-18s14 2 14 2-2 10-10 14S10 30 10 30z" />
      <path d="M24 12c1-3 4-5 4-5" />
      <path d="M28 20c3-1 6 0 6 0" />
      <circle cx="17" cy="23" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="22" cy="18" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconEnamorar() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 33C20 33 6 24 6 14.5A7.5 7.5 0 0 1 20 11a7.5 7.5 0 0 1 14 3.5C34 24 20 33 20 33z" />
      <path d="M20 11v4" />
      <path d="M15 16h10" />
    </svg>
  );
}

function IconPeru() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Llama silueta estilizada */}
      <path d="M14 32v-8c0 0-3-1-3-5s3-5 5-5V9c0-1.5 1-2 2-2h2c1 0 2 .5 2 2v2h2c2 0 3 1.5 3 3 0 1.5-1 3-3 3v10" />
      <path d="M14 32h5M21 32h5" />
      <path d="M14 24h7" />
      <circle cx="26" cy="10" r="2" />
    </svg>
  );
}

function IconDecorar() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Jarrón con flor */}
      <path d="M14 34h12M13 20h14l-2 14H15L13 20z" />
      <path d="M13 20c0 0-2-3-1-6s4-4 8-4 7 1 8 4-1 6-1 6" />
      <path d="M20 10V6" />
      <path d="M17 8c0 0 1-3 3-3s3 3 3 3" />
      <path d="M15 7c0 0-3 0-3 2s2 2 2 2" />
      <path d="M25 7c0 0 3 0 3 2s-2 2-2 2" />
    </svg>
  );
}

function IconCuidar() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Mano sosteniendo hoja */}
      <path d="M20 28c0 0-8-5-8-13 0-4 3-6 6-5 1 .3 2 1 2 1s1-.7 2-1c3-1 6 1 6 5 0 8-8 13-8 13z" />
      <path d="M20 28v6" />
      <path d="M16 34h8" />
      <path d="M20 18v-5" />
    </svg>
  );
}

function IconUnico() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="size-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Caja regalo con lazo elegante */}
      <rect x="8" y="20" width="24" height="14" rx="1.5" />
      <rect x="6" y="15" width="28" height="6" rx="1.5" />
      <path d="M20 15v19" />
      <path d="M20 15c0 0-4-6 0-8s4 4 4 7" />
      <path d="M20 15c0 0 4-6 0-8s-4 4-4 7" />
    </svg>
  );
}

const emotions = [
  {
    label: "Quiero agradecer",
    Icon: IconAgradecer,
    sub: "Detalles que dicen gracias de verdad",
    wa: "Hola Manna, busco un regalo para agradecer a alguien especial. ¿Me pueden ayudar?",
  },
  {
    label: "Quiero sorprender",
    Icon: IconSorprender,
    sub: "Algo que no esperaba para nada",
    wa: "Hola Manna, quiero sorprender a alguien con un regalo especial. ¿Qué me recomiendan?",
  },
  {
    label: "Quiero celebrar",
    Icon: IconCelebrar,
    sub: "Cumpleaños, logros y momentos felices",
    wa: "Hola Manna, busco un regalo para celebrar una ocasión especial. ¿Qué opciones tienen?",
  },
  {
    label: "Quiero enamorar",
    Icon: IconEnamorar,
    sub: "Romántico, delicado y con alma",
    wa: "Hola Manna, quiero un regalo romántico para enamorar a alguien. ¿Me pueden ayudar?",
  },
  {
    label: "Llevar el Perú conmigo",
    Icon: IconPeru,
    sub: "Souvenirs con identidad y cultura",
    wa: "Hola Manna, busco souvenirs o recuerdos peruanos para llevarme. ¿Qué tienen disponible?",
  },
  {
    label: "Decorar mi espacio",
    Icon: IconDecorar,
    sub: "Objetos únicos que cuentan historias",
    wa: "Hola Manna, busco artículos únicos para decorar mi espacio. ¿Qué me recomiendan?",
  },
  {
    label: "Cuidar a alguien",
    Icon: IconCuidar,
    sub: "Bienestar, aromas y pequeños rituales",
    wa: "Hola Manna, quiero un regalo de bienestar para cuidar a alguien especial. ¿Qué tienen?",
  },
  {
    label: "Regalar algo único",
    Icon: IconUnico,
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
              <div className="mb-5 text-primary/70 group-hover:text-primary transition-colors duration-300">
                <e.Icon />
              </div>
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
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.07) 0%, transparent 60%)" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
