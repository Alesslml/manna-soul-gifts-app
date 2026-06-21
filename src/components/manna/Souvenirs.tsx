import souvenirs from "@/assets/souvenirs-hero.jpg";
import { FadeUp, FadeIn, ParallaxImage } from "./ScrollAnimations";

export function Souvenirs() {
  return (
    <section id="souvenirs" className="py-24 md:py-32 px-6 bg-cacao text-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <FadeUp>
            <h2 className="text-4xl md:text-6xl mb-8 leading-[1.05]">
              Llévate un pedacito del Perú.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-background/75 leading-relaxed max-w-md mb-10">
              Souvenirs peruanos modernos, coloridos y llenos de significado. Detalles que no solo
              recuerdan un viaje: cuentan una historia de cultura, diseño y emoción.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <a href="#mundos" className="px-7 py-3.5 rounded-full bg-background text-foreground text-sm font-medium hover:bg-oro transition-colors">
                Ver souvenirs
              </a>
              <a href="https://wa.me/51955993404" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full border border-background/25 text-sm font-medium hover:bg-background/10 transition-colors">
                Preguntar por WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
        <FadeIn delay={0.1}>
          <ParallaxImage
            src={souvenirs}
            alt="Souvenirs peruanos modernos"
            loading="lazy"
            className="w-full aspect-[5/4] rounded-3xl border border-background/10"
            speed={0.12}
          />
        </FadeIn>
      </div>
    </section>
  );
}
