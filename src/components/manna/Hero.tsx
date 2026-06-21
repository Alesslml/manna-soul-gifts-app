import ceramica from "@/assets/hero-ceramica.jpg";
import giftbox from "@/assets/hero-giftbox.jpg";
import textil from "@/assets/hero-textil.jpg";
import joyeria from "@/assets/hero-joyeria.jpg";

export function Hero() {
  return (
    <header id="top" className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl md:text-[7.5rem] leading-[0.95] animate-fade-up [animation-delay:120ms]">
          Regalos hechos en casa
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
      </div>

      <div className="relative mt-16 md:mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 animate-fade-up [animation-delay:600ms]">
        {[
          { img: ceramica, label: "Cerámica", offset: "" },
          { img: giftbox, label: "Gift Boxes", offset: "md:translate-y-10" },
          { img: textil, label: "Textiles", offset: "" },
          { img: joyeria, label: "Joyería", offset: "md:translate-y-10" },
        ].map((c, i) => (
          <div
            key={c.label}
            className={`group relative aspect-[3/4] rounded-2xl overflow-hidden bg-foreground/5 ${c.offset}`}
          >
            <img
              src={c.img}
              alt={c.label}
              loading={i === 0 ? undefined : "lazy"}
              className="absolute inset-0 size-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </header>
  );
}
