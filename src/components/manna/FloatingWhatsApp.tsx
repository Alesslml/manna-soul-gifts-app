import { useEffect, useState } from "react";

const SECTION_MESSAGES: Record<string, string> = {
  mundos: "Hola Manna, me gustaría ver sus productos disponibles. ¿Me pueden ayudar?",
  quiz: "Hola Manna, necesito ayuda para encontrar el regalo ideal. ¿Me pueden orientar?",
  souvenirs: "Hola Manna, me interesan sus souvenirs peruanos. ¿Qué tienen disponible?",
  corporativo: "Hola Manna, quiero cotizar regalos corporativos para mi empresa.",
  historia: "Hola Manna, quiero conocer más sobre su tienda y productos.",
  visitanos: "Hola Manna, quiero visitar la tienda en Miraflores. ¿Cuál es el horario?",
};

const DEFAULT_MSG = "Hola Manna, me gustaría más información";

export function FloatingWhatsApp() {
  const [msg, setMsg] = useState(DEFAULT_MSG);

  useEffect(() => {
    const sections = Object.keys(SECTION_MESSAGES).map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          setMsg(SECTION_MESSAGES[id] ?? DEFAULT_MSG);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const href = `https://wa.me/51955993404?text=${encodeURIComponent(msg)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-2xl shadow-cacao/30 hover:scale-105 active:scale-95 transition-transform"
    >
      <span className="relative grid place-items-center size-10 rounded-full bg-white/15">
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        <svg viewBox="0 0 24 24" className="size-6 fill-current relative" aria-hidden>
          <path d="M19.05 4.91A10 10 0 0 0 4.1 18.27L3 22l3.83-1.07a10 10 0 0 0 14.94-8.66 9.94 9.94 0 0 0-2.72-7.36ZM12 20.13a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-2.27.64.61-2.22-.2-.31A8.14 8.14 0 1 1 12 20.13Zm4.47-6.1c-.24-.12-1.45-.71-1.68-.79s-.39-.12-.55.12-.63.79-.78.96-.29.18-.54.06a6.65 6.65 0 0 1-1.96-1.21 7.34 7.34 0 0 1-1.36-1.69c-.14-.24 0-.37.11-.49s.24-.29.36-.43a1.67 1.67 0 0 0 .24-.4.45.45 0 0 0 0-.42c-.06-.12-.55-1.33-.76-1.82s-.4-.41-.55-.42h-.47a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.07c0 1.22.89 2.4 1 2.57s1.75 2.67 4.24 3.74a14.36 14.36 0 0 0 1.42.52 3.4 3.4 0 0 0 1.57.1 2.57 2.57 0 0 0 1.68-1.18 2.07 2.07 0 0 0 .14-1.18c-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </span>
      <span className="text-sm font-semibold tracking-tight hidden sm:block">
        ¿Te ayudo a elegir?
      </span>
    </a>
  );
}
