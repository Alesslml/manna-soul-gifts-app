const t = [
  { q: "Encontré el regalo perfecto y diferente que estaba buscando. La curaduría es impecable.", a: "Andrea M." },
  { q: "Una tienda preciosa, llena de detalles únicos y cultura peruana. Mi favorita en Miraflores.", a: "Rodrigo P." },
  { q: "Me ayudaron a armar un regalo especial y quedó hermoso. Servicio increíble.", a: "Camila R." },
  { q: "Perfecta para comprar souvenirs lindos. Me llevé un pedacito del Perú a casa.", a: "Sofía L." },
];

export function Testimonios() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
              Testimonios
            </p>
            <h2 className="text-4xl md:text-5xl text-balance leading-tight">
              Lo que dicen <br /> quienes <span className="text-primary">encuentran su regalo</span> en Manna.
            </h2>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-5">
            {t.map((x, i) => (
              <figure
                key={i}
                className="p-8 rounded-2xl bg-hueso border border-foreground/5 flex flex-col"
              >
                <span className="font-display italic text-3xl text-primary leading-none">"</span>
                <blockquote className="mt-3 text-foreground/85 leading-relaxed flex-1">
                  {x.q}
                </blockquote>
                <figcaption className="mt-6 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  — {x.a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
