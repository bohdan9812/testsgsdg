import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
            Professionelle Bodenverlegung
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Hochwertige Bodenbeläge für Ihr Zuhause und Ihr Geschäft. Mit Erfahrung, Qualität und Zuverlässigkeit.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                Angebot anfordern
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-accent text-accent hover:bg-accent/5 bg-transparent"
              >
                Unsere Leistungen
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden bg-accent/10">
          <img
            src="/professional-flooring-installation-modern-interior.jpg"
            alt="Professionelle Bodenverlegung"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
