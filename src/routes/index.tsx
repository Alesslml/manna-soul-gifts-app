import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/manna/Nav";
import { Hero } from "@/components/manna/Hero";
import { GiftQuiz } from "@/components/manna/GiftQuiz";
import { Mundos } from "@/components/manna/Mundos";
import { Emotion } from "@/components/manna/Emotion";
import { Ocasiones } from "@/components/manna/Ocasiones";
import { BrandStory } from "@/components/manna/BrandStory";
import { Souvenirs } from "@/components/manna/Souvenirs";
import { Corporativo } from "@/components/manna/Corporativo";
import { Visitanos } from "@/components/manna/Visitanos";
import { Testimonios } from "@/components/manna/Testimonios";
import { Pasos } from "@/components/manna/Pasos";
import { CtaFinal } from "@/components/manna/CtaFinal";
import { Footer } from "@/components/manna/Footer";
import { FloatingWhatsApp } from "@/components/manna/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manna Store Perú | Regalos, souvenirs peruanos y concept store en Miraflores" },
      {
        name: "description",
        content:
          "Concept store en Miraflores con regalos, souvenirs peruanos, moda, decoración, bienestar, gift boxes y detalles únicos con alma peruana.",
      },
      { property: "og:title", content: "Manna Store Perú | Regalos con mucho amor" },
      {
        property: "og:description",
        content:
          "Souvenirs, moda, decoración, bienestar y detalles únicos para sorprender, celebrar y llevar contigo un pedacito del Perú.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Manna Store Perú",
          description:
            "Concept store peruana con regalos, souvenirs, moda, decoración, bienestar y detalles únicos con alma peruana.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Recavarren 324",
            addressLocality: "Miraflores",
            addressRegion: "Lima",
            addressCountry: "PE",
          },
          telephone: "+51 955 993 404",
          openingHours: ["Mo-Sa 10:00-20:00", "Su 11:00-18:00"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <GiftQuiz />
        <Mundos />
        <Emotion />
        <Ocasiones />
        <BrandStory />
        <Souvenirs />
        <Corporativo />
        <Visitanos />
        <Testimonios />
        <Pasos />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
