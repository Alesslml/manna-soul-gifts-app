import ceramica from "@/assets/hero-ceramica.jpg";
import giftbox from "@/assets/hero-giftbox.jpg";
import textil from "@/assets/hero-textil.jpg";
import joyeria from "@/assets/hero-joyeria.jpg";

export function Hero() {
  return (
    <header id="top" className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-6 overflow-hidden">
      {/* Soft blooms */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-20 w-[28rem] h-[28rem] rounded-full bg-rosado/40 blur-3xl opacity-70" />
        <div className="absolute bottom-0 -right-10 w-[34rem] h-[34rem] rounded-full bg-salvia/20 blur-3xl opacity-70" />
        <div className="absolute top-40 right-1/3 w-72 h-72 rounded-full bg-oro/20 blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-muted-foreground mb-6 animate-fade-up">
          Concept Store · Miraflores · Desde 2009
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-[7.5rem] leading-[0.95] text-balance animate-fade-up [animation-delay:120ms]">
          Regalos <br />
          <span className="text-primary">hechos en casa</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-pretty max-w-2xl mx-auto text-foreground/75 animate-fade-up [animation-delay:240ms]">
          Souvenirs, moda, decoración, bienestar y detalles únicos para sorprender,
          celebrar y llevar contigo un pedacito del Perú.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up [animation-delay:360ms]">
          <a
            href="#mundos"
            className="px-7 py-4 rounded-full bg-cacao text-background font-medium hover:bg-primary transition-colors"
          >
            Comprar ahora
          </a>
          <a
            href="#quiz"
            className="px-7 py-4 rounded-full border border-foreground/15 font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Encontrar mi regalo ideal
          </a>
          <a
            href="#visitanos"
            className="px-7 py-4 rounded-full bg-rosado/40 font-medium hover:bg-rosado/60 transition-colors"
          >
            Visítanos en Miraflores
          </a>
        </div>

        <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground animate-fade-up [animation-delay:460ms]">
          +1000 productos curados para regalar, decorar, vestir y emocionar.
        </p>
      </div>

      {/* Collage */}
      <div className="relative mt-16 md:mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 animate-fade-up [animation-delay:600ms]">
        {[
          { img: ceramica, label: "Cerámica", tone: "bg-hueso", offset: "" },
          { img: giftbox, label: "Gift Boxes", tone: "bg-rosado/30", offset: "md:translate-y-10" },
          { img: textil, label: "Textiles", tone: "bg-oro/15", offset: "" },
          { img: joyeria, label: "Joyería", tone: "bg-salvia/15", offset: "md:translate-y-10" },
        ].map((c, i) => (
          <div
            key={c.label}
            className={`group relative aspect-[3/4] rounded-2xl overflow-hidden ${c.tone} ${c.offset}`}
          >
            <img
              src={c.img}
              alt={c.label}
              loading={i === 0 ? undefined : "lazy"}
              className="absolute inset-0 size-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-[0.2em] bg-background/90 px-2.5 py-1 rounded-md">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}
