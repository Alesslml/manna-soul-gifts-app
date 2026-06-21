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
    img: imgAgradecer,
    wa: "Hola Manna, busco un regalo para agradecer a alguien especial. ¿Me pueden ayudar?",
  },
  {
    label: "Quiero sorprender",
    img: imgSorprender,
    wa: "Hola Manna, quiero sorprender a alguien con un regalo especial. ¿Qué me recomiendan?",
  },
  {
    label: "Quiero celebrar",
    img: imgCelebrar,
    wa: "Hola Manna, busco un regalo para celebrar una ocasión especial. ¿Qué opciones tienen?",
  },
  {
    label: "Quiero enamorar",
    img: imgEnamorar,
    wa: "Hola Manna, quiero un regalo romántico para enamorar a alguien. ¿Me pueden ayudar?",
  },
  {
    label: "Llevar el Perú conmigo",
    img: imgPeru,
    wa: "Hola Manna, busco souvenirs o recuerdos peruanos para llevarme. ¿Qué tienen disponible?",
  },
  {
    label: "Decorar mi espacio",
    img: imgDecorar,
    wa: "Hola Manna, busco artículos únicos para decorar mi espacio. ¿Qué me recomiendan?",
  },
  {
    label: "Cuidar a alguien",
    img: imgCuidar,
    wa: "Hola Manna, quiero un regalo de bienestar para cuidar a alguien especial. ¿Qué tienen?",
  },
  {
    label: "Regalar algo único",
    img: imgUnico,
    wa: "Hola Manna, busco algo verdaderamente único para regalar. ¿Qué me pueden mostrar?",
  },
];

export function Emotion() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl">
            A veces no sabes qué regalar, pero sí qué quieres hacer sentir.
          </h2>
        </div>
      </div>

      {/* Grid fluido sin gaps, sin padding */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {emotions.map((e) => (
          <a
            key={e.label}
            href={`https://wa.me/51955993404?text=${encodeURIComponent(e.wa)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[3/4] overflow-hidden"
          >
            {/* Foto de fondo */}
            <img
              src={e.img}
              alt={e.label}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay oscuro dramático desde la mitad */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Hover overlay suave */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Texto */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-3">
                {e.label}
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary transition-colors">
                Ver selección
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
