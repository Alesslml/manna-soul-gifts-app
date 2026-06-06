export function CtaFinal() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-rosado/30 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-salvia/20 blur-3xl opacity-60" />
      </div>
      <div className="relative max-w-3xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">
          Haz que regalar sea inolvidable
        </p>
        <h2 className="text-5xl md:text-7xl leading-[1.05] text-balance mb-8">
          Haz que tu próximo regalo <br /> <span className="text-primary">tenga historia</span>.
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
