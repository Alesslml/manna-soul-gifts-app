export function CtaFinal() {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl leading-[1.05] mb-8">
          Haz que tu próximo regalo tenga historia.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          En Manna creemos que regalar es una forma de decir "pensé en ti". Por eso elegimos
          cada producto con cuidado, cariño y alma peruana.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/51955993404"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-cacao transition-colors"
          >
            Pedir ayuda por WhatsApp
          </a>
          <a
            href="#visitanos"
            className="px-8 py-4 rounded-full border border-foreground/15 font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Visítanos en Miraflores
          </a>
        </div>
      </div>
    </section>
  );
}
