const t = [
  { q: "Encontré el regalo perfecto y diferente que estaba buscando. La curaduría es impecable.", a: "Andrea M.", initials: "AM" },
  { q: "Una tienda preciosa, llena de detalles únicos y cultura peruana. Mi favorita en Miraflores.", a: "Rodrigo P.", initials: "RP" },
  { q: "Me ayudaron a armar un regalo especial y quedó hermoso. Servicio increíble.", a: "Camila R.", initials: "CR" },
  { q: "Perfecta para comprar souvenirs lindos. Me llevé un pedacito del Perú a casa.", a: "Sofía L.", initials: "SL" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="size-4 fill-[#FBBC05]" aria-hidden>
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.14L8 10.4l-3.71 2.16L5 8.42 2 5.5l4.15-.75L8 1z" />
        </svg>
      ))}
    </div>
  );
}

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
            <div className="mt-8 flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">5.0</span>
                  <Stars />
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5">Reseñas en Google Maps</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-5">
            {t.map((x, i) => (
              <figure
                key={i}
                className="p-8 rounded-2xl bg-hueso border border-foreground/5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-mono font-medium text-primary">
                      {x.initials}
                    </div>
                    <figcaption className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                      {x.a}
                    </figcaption>
                  </div>
                  <svg viewBox="0 0 24 24" className="size-4 shrink-0 opacity-40" aria-hidden>
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <Stars />
                <blockquote className="mt-4 text-foreground/85 leading-relaxed flex-1">
                  {x.q}
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
