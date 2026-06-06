import brand from "@/assets/brand-story.jpg";

export function BrandStory() {
  return (
    <section id="historia" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-rosado/30 blur-3xl opacity-60" />
          <img
            src={brand}
            alt="Manos envolviendo un regalo en tela cruda con flores secas"
            loading="lazy"
            className="relative w-full aspect-[4/5] object-cover rounded-3xl"
          />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-5">
            Desde 2009 · Miraflores
          </p>
          <h2 className="text-4xl md:text-5xl mb-8 text-balance">
            Manna no es una tienda, <br />
            es una <span className="text-primary">experiencia</span>.
          </h2>
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <p>
              Manna es ese lugar donde entras buscando un regalo y sales con una historia.
            </p>
            <p>
              Desde 2009 reunimos productos especiales, marcas peruanas y detalles hechos con
              amor. En nuestra concept store conviven la moda, el arte, la decoración,
              el bienestar y la emoción de regalar algo diferente.
            </p>
          </div>
          <a
            href="#visitanos"
            className="mt-10 inline-flex items-center gap-3 group"
          >
            <span className="grid place-items-center size-12 rounded-full bg-cacao text-background group-hover:bg-primary transition-colors">
              →
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.25em]">
              Visítanos en Miraflores
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
