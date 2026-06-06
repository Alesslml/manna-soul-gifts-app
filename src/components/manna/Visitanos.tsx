import store from "@/assets/store-miraflores.jpg";

const MAPS = "https://www.google.com/maps?q=Recavarren+324,+Miraflores,+Lima";

export function Visitanos() {
  return (
    <section id="visitanos" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Concept store en Miraflores
          </p>
          <h2 className="text-4xl md:text-5xl text-balance">
            Un espacio para <span className="text-primary">mirar, tocar y sorprenderse</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <img
            src={store}
            alt="Interior de la concept store Manna en Miraflores"
            loading="lazy"
            className="w-full h-full max-h-[560px] object-cover rounded-3xl"
          />

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-6 rounded-2xl bg-hueso border border-foreground/5">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-2">
                  Dirección
                </p>
                <p className="text-sm leading-relaxed">Recavarren 324<br />Miraflores, Lima</p>
              </div>
              <div className="p-6 rounded-2xl bg-hueso border border-foreground/5">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-2">
                  Contacto
                </p>
                <p className="text-sm leading-relaxed">+51 955 993 404</p>
              </div>
              <div className="p-6 rounded-2xl bg-hueso border border-foreground/5 col-span-2">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-2">
                  Horario
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <p>Lun – Sáb<br /><span className="text-muted-foreground">10:00 am — 8:00 pm</span></p>
                  <p>Domingo<br /><span className="text-muted-foreground">11:00 am — 6:00 pm</span></p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-foreground/5 flex-1 min-h-[220px]">
              <iframe
                title="Ubicación de Manna Store"
                src="https://www.google.com/maps?q=Recavarren%20324%20Miraflores%20Lima&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[220px] border-0"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-cacao transition-colors"
              >
                Cómo llegar
              </a>
              <a
                href="https://wa.me/51955993404"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-foreground/15 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Escribir por WhatsApp
              </a>
              <a
                href="https://instagram.com/mannastoreperu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-foreground/15 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
