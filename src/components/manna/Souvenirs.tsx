import souvenirs from "@/assets/souvenirs-hero.jpg";

export function Souvenirs() {
  return (
    <section id="souvenirs" className="py-24 md:py-32 px-6 bg-cacao text-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-oro mb-5">
            Souvenirs con alma peruana
          </p>
          <h2 className="text-4xl md:text-6xl text-balance mb-8 leading-[1.05]">
            Llévate un <br /> <span className="text-oro">pedacito del Perú</span>.
          </h2>
          <p className="text-background/75 leading-relaxed max-w-md mb-10">
            Souvenirs peruanos modernos, coloridos y llenos de significado. Detalles que no solo
            recuerdan un viaje: cuentan una historia de cultura, diseño y emoción.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#mundos"
              className="px-7 py-3.5 rounded-full bg-background text-foreground text-sm font-medium hover:bg-oro transition-colors"
            >
              Ver souvenirs
            </a>
            <a
              href="https://wa.me/51955993404"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-background/25 text-sm font-medium hover:bg-background/10 transition-colors"
            >
              Preguntar por WhatsApp
            </a>
          </div>
          <p className="mt-8 text-xs font-mono uppercase tracking-[0.25em] text-background/50">
            Recavarren 324 · Miraflores · Lima
          </p>
        </div>
        <div className="relative">
          <img
            src={souvenirs}
            alt="Souvenirs peruanos modernos"
            loading="lazy"
            className="w-full aspect-[5/4] object-cover rounded-3xl border border-background/10"
          />
        </div>
      </div>
    </section>
  );
}
