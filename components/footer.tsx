import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Bodenverlegung</h3>
            <p className="text-background/70 text-sm">
              Professionelle Bodenverlegung mit Qualität und Zuverlässigkeit seit über 15 Jahren.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/70 hover:text-background transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/70 hover:text-background transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Laminat
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Parkett
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Fliesen
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Designbeläge
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+49123456789" className="text-background/70 hover:text-background transition-colors">
                  +49 (0) 123 456789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bodenverlegung.de"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  info@bodenverlegung.de
                </a>
              </li>
              <li className="text-background/70">
                Musterstraße 123
                <br />
                12345 Musterstadt
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 Bodenverlegung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
