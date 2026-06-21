import souvenirs from "@/assets/mundo-souvenirs.jpg";
import giftboxes from "@/assets/mundo-giftboxes.jpg";
import moda from "@/assets/mundo-moda.jpg";
import decoracion from "@/assets/mundo-decoracion.jpg";
import bienestar from "@/assets/mundo-bienestar.jpg";
import ramos from "@/assets/mundo-ramos.jpg";
import corporativo from "@/assets/mundo-corporativo.jpg";
import celebrar from "@/assets/mundo-celebrar.jpg";

const mundos = [
  { n: "01", title: "Regalos para celebrar", desc: "Cumpleaños, amor, graduaciones y agradecimientos.", img: celebrar, tone: "bg-rosado/30", wa: "Hola Manna, me interesan los regalos para celebrar (cumpleaños, amor, graduaciones). ¿Me puedes ayudar?" },
  { n: "02", title: "Souvenirs peruanos", desc: "Recuerdos con identidad, cultura y diseño.", img: souvenirs, tone: "bg-oro/15", wa: "Hola Manna, busco souvenirs peruanos. ¿Qué tienen disponible?" },
  { n: "03", title: "Gift Boxes", desc: "Cajas curadas, listas para sorprender.", img: giftboxes, tone: "bg-hueso", wa: "Hola Manna, me interesan sus Gift Boxes. ¿Cuáles tienen disponibles?" },
  { n: "04", title: "Moda & Joyería", desc: "Accesorios y piezas con personalidad.", img: moda, tone: "bg-salvia/15", wa: "Hola Manna, quiero ver su selección de moda y joyería. ¿Me pueden mostrar opciones?" },
  { n: "05", title: "Decoración", desc: "Objetos únicos para llenar tus espacios.", img: decoracion, tone: "bg-cacao/10", wa: "Hola Manna, busco artículos de decoración únicos. ¿Qué tienen disponible?" },
  { n: "06", title: "Bienestar", desc: "Aromas, jabones, aceites y pequeños rituales.", img: bienestar, tone: "bg-salvia/15", wa: "Hola Manna, me interesan sus productos de bienestar (aromas, jabones, aceites). ¿Qué tienen?" },
  { n: "07", title: "Ramos y flores secas", desc: "Detalles delicados, duraderos y con encanto.", img: ramos, tone: "bg-rosado/30", wa: "Hola Manna, busco ramos o flores secas. ¿Qué opciones tienen disponibles?" },
  { n: "08", title: "Regalos corporativos", desc: "Packs especiales para empresas y eventos.", img: corporativo, tone: "bg-oro/15", wa: "Hola Manna, quiero cotizar regalos corporativos para mi empresa. ¿Me pueden ayudar?" },
];

export function Mundos() {
  return (
    <section id="mundos" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
              Explora por mundos
            </p>
            <h2 className="text-4xl md:text-5xl text-balance">
              Cada rincón de Manna <br />
              tiene <span className="text-primary">algo que contar</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Curamos cada producto con cuidado, cultura y emoción. Encuentra el detalle que no sabías que estabas buscando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mundos.map((m) => (
            <a
              key={m.n}
              href={`https://wa.me/51955993404?text=${encodeURIComponent(m.wa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <div className={`relative aspect-square rounded-2xl overflow-hidden ${m.tone} mb-4`}>
                <img
                  src={m.img}
                  alt={m.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[10px] font-mono bg-background/90 px-2 py-1 rounded-md tracking-wider">
                  Mundo {m.n}
                </span>
              </div>
              <h3 className="text-xl group-hover:text-primary transition-colors">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
