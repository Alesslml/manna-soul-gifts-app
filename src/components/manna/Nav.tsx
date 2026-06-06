import { useEffect, useState } from "react";

const links = [
  { href: "#mundos", label: "Mundos" },
  { href: "#quiz", label: "Regalo ideal" },
  { href: "#souvenirs", label: "Souvenirs" },
  { href: "#corporativo", label: "Corporativo" },
  { href: "#historia", label: "Historia" },
  { href: "#visitanos", label: "Visítanos" },
];

const WA = "https://wa.me/51955993404?text=Hola%20me%20puedes%20ayudar%3F";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display italic text-2xl text-primary tracking-tight">
            Manna
          </span>
          <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
            Store · Perú
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.18em] font-medium text-foreground/75">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-cacao transition-colors"
          >
            WhatsApp
          </a>
          <button
            aria-label="Abrir menú"
            className="lg:hidden grid place-items-center size-10 rounded-full border border-foreground/15"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-foreground/5 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-[0.18em]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center px-5 py-3 bg-primary text-primary-foreground rounded-full text-xs font-semibold"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
