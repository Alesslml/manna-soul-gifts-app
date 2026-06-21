import imgAgradecer from "@/assets/mundo-ramos.jpg";
import imgSorprender from "@/assets/hero-giftbox.jpg";
import imgCelebrar from "@/assets/mundo-celebrar.jpg";
import imgEnamorar from "@/assets/hero-joyeria.jpg";
import imgPeru from "@/assets/souvenirs-hero.jpg";
import imgDecorar from "@/assets/mundo-decoracion.jpg";
import imgCuidar from "@/assets/mundo-bienestar.jpg";
import imgUnico from "@/assets/hero-ceramica.jpg";

const emotions = [
  {
    label: "Quiero agradecer",
    sub: "Detalles que dicen gracias de verdad",
    img: imgAgradecer,
    wa: "Hola Manna, busco un regalo para agradecer a alguien especial. ¿Me pueden ayudar?",
  },
  {
    label: "Quiero sorprender",
    sub: "Algo que no esperaba para nada",
    img: imgSorprender,
    wa: "Hola Manna, quiero sorprender a alguien con un regalo especial. ¿Qué me recomiendan?",
  },
  {
    label: "Quiero celebrar",
    sub: "Cumpleaños, logros y momentos felices",
    img: imgCelebrar,
    wa: "Hola Manna, busco un regalo para celebrar una ocasión especial. ¿Qué opciones tienen?",
  },
  {
    label: "Quiero enamorar",
    sub: "Romántico, delicado y con alma",
    img: imgEnamorar,
    wa: "Hola Manna, quiero un regalo romántico para enamorar a alguien. ¿Me pueden ayudar?",
  },
  {
    label: "Llevar el Perú conmigo",
    sub: "Souvenirs con identidad y cultura",
    img: imgPeru,
    wa: "Hola Manna, busco souvenirs o recuerdos peruanos para llevarme. ¿Qué tienen disponible?",
  },
  {
    label: "Decorar mi espacio",
    sub: "Objetos únicos que cuentan historias",
    img: imgDecorar,
    wa: "Hola Manna, busco artículos únicos para decorar mi espacio. ¿Qué me recomiendan?",
  },
  {
    label: "Cuidar a alguien",
    sub: "Bienestar, aromas y pequeños rituales",
    img: imgCuidar,
    wa: "Hola Manna, quiero un regalo de bienestar para cuidar a alguien especial. ¿Qué tienen?",
  },
  {
    label: "Regalar algo único",
    sub: "Lo que no encuentras en ningún otro lugar",
    img: imgUnico,
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {emotions.map((e) => (
            <a
              key={e.label}
              href={`https://wa.me/51955993404?text=${encodeURIComponent(e.wa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <img
                src={e.img}
                alt={e.label}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay base siempre visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Overlay extra al hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Contenido */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="font-display italic text-xl md:text-2xl leading-tight text-white mb-1.5">
                  {e.label}
                </p>
                <p className="text-[11px] text-white/60 leading-relaxed mb-4 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {e.sub}
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-primary">
                  Ver selección
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
