export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-foreground/10 bg-card">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="text-xl font-semibold mb-3">Manna Store Perú</p>
          <p className="text-sm text-muted-foreground max-w-sm">
            Concept store peruana en Miraflores. Regalos, souvenirs, moda, decoración,
            bienestar y detalles únicos con alma peruana. Desde 2009.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Tienda
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="#mundos" className="hover:text-primary">Mundos Manna</a></li>
            <li><a href="#souvenirs" className="hover:text-primary">Souvenirs</a></li>
            <li><a href="#corporativo" className="hover:text-primary">Corporativo</a></li>
            <li><a href="#quiz" className="hover:text-primary">Regalo ideal</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Contacto
          </p>
          <ul className="space-y-2 text-sm">
            <li>Recavarren 324, Miraflores</li>
            <li>Lima, Perú</li>
            <li>
              <a href="https://wa.me/51955993404" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                +51 955 993 404
              </a>
            </li>
            <li>
              <a href="https://instagram.com/mannastoreperu" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                @mannastoreperu
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-foreground/10 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Manna Store Perú</span>
        <span>Regalos con mucho amor</span>
      </div>
    </footer>
  );
}
