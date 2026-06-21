const pasos = [
  { n: "01", t: "Explora", d: "Recorre nuestras categorías y mundos Manna." },
  { n: "02", t: "Elige", d: "Encuentra tu regalo, souvenir o detalle favorito." },
  { n: "03", t: "Conversemos", d: "Escríbenos por WhatsApp si necesitas ayuda." },
  { n: "04", t: "Compra", d: "Compra online o visítanos en Miraflores." },
  { n: "05", t: "Sorprende", d: "Entrega un regalo con alma peruana." },
];

export function Pasos() {
  return (
    <section className="py-24 px-6 bg-hueso">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl md:text-5xl">
            Cinco pasos para regalar con alma.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {pasos.map((p) => (
            <div
              key={p.n}
              className="p-6 rounded-2xl bg-background border border-foreground/5"
            >
              <p className="text-3xl font-semibold text-foreground/20 mb-3">{p.n}</p>
              <p className="font-medium mb-1">{p.t}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
