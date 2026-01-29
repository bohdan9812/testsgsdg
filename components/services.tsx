import Link from "next/link"
import { Button } from "@/components/ui/button"

const serviceHighlights = [
  {
    title: "Laminat",
    description: "Langlebig und pflegeleicht",
  },
  {
    title: "Parkett",
    description: "Edles Echtholz",
  },
  {
    title: "Fliesen",
    description: "Robust und vielfältig",
  },
  {
    title: "Designbeläge",
    description: "Modern und wasserfest",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
          Unsere Leistungen
        </h2>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
          Wir bieten professionelle Bodenverlegung für alle Arten von Belägen und Räumen.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceHighlights.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-colors"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
              Alle Leistungen ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
