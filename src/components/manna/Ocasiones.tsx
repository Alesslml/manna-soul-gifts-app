const ocasiones = [
  { label: "Cumpleaños", wa: "Hola Manna, busco un regalo para un cumpleaños. ¿Qué me recomiendan?" },
  { label: "Amor", wa: "Hola Manna, quiero un regalo romántico especial. ¿Qué opciones tienen?" },
  { label: "Graduación", wa: "Hola Manna, busco un regalo para una graduación. ¿Qué me recomiendan?" },
  { label: "Navidad", wa: "Hola Manna, quiero ideas de regalos navideños. ¿Qué tienen disponible?" },
  { label: "Open House", wa: "Hola Manna, busco un regalo para un open house o inauguración. ¿Qué me sugieren?" },
  { label: "Agradecimiento", wa: "Hola Manna, quiero un regalo para agradecer a alguien. ¿Qué tienen?" },
  { label: "Viaje", wa: "Hola Manna, busco un regalo o souvenir relacionado con un viaje. ¿Qué me recomiendan?" },
  { label: "Bienvenida", wa: "Hola Manna, necesito un regalo de bienvenida especial. ¿Qué tienen disponible?" },
  { label: "Corporativos", wa: "Hola Manna, quiero cotizar regalos corporativos. ¿Me pueden ayudar?" },
  { label: "Solo porque sí", wa: "Hola Manna, quiero regalar algo especial sin motivo especial. ¿Qué me sugieren?" },
];

export function Ocasiones() {
  return (
    <section className="py-24 px-6 bg-hueso">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl max-w-xl">
              Cada momento merece un detalle distinto.
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {ocasiones.map((o) => (
            <a
              key={o.label}
              href={`https://wa.me/51955993404?text=${encodeURIComponent(o.wa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-background border border-foreground/10 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {o.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
