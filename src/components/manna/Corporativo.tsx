import corp from "@/assets/mundo-corporativo.jpg";
import { FadeUp, FadeIn, StaggerChildren, StaggerItem, ParallaxImage } from "./ScrollAnimations";

const items = [
  "Boxes corporativos",
  "Souvenirs peruanos para eventos",
  "Regalos para clientes",
  "Detalles para colaboradores",
  "Packs personalizados",
  "Bienvenida para turistas e invitados",
];

export function Corporativo() {
  return (
    <section id="corporativo" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        <FadeIn className="md:col-span-2">
          <ParallaxImage
            src={corp}
            alt="Regalos corporativos curados por Manna"
            loading="lazy"
            className="w-full aspect-[4/5] rounded-3xl"
            speed={0.12}
          />
        </FadeIn>
        <div className="md:col-span-3">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl mb-6">
              Regalos corporativos con identidad.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-muted-foreground max-w-lg mb-10">
              Sorprende a clientes, colaboradores e invitados con regalos curados, elegantes y
              llenos de significado. Preparamos propuestas especiales para empresas, fechas
              importantes y experiencias de bienvenida.
            </p>
          </FadeUp>
          <StaggerChildren className="grid sm:grid-cols-2 gap-2.5 mb-10">
            {items.map((i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-hueso border border-foreground/5">
                  <span className="size-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm">{i}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeUp delay={0.2}>
            <a
              href="https://wa.me/51955993404?text=Hola%20Manna%2C%20quiero%20cotizar%20regalos%20corporativos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3.5 rounded-full bg-cacao text-background text-sm font-medium hover:bg-primary transition-colors"
            >
              Cotizar por WhatsApp
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
