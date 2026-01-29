import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    title: "Laminat",
    description:
      "Hochwertige Laminatböden mit verschiedenen Dekoren und Oberflächenstrukturen. Langlebig, pflegeleicht und kostengünstig.",
    image: "/laminate-flooring-installation.png",
  },
  {
    title: "Parkett",
    description:
      "Edles Echtholzparkett in verschiedenen Holzarten. Zeitlos schön und wertsteigernd für Ihre Immobilie.",
    image: "/parquet-wood-flooring.jpg",
  },
  {
    title: "Fliesen",
    description:
      "Keramik- und Natursteinfliesen für Küche, Bad und Wohnbereiche. Robust und vielfältig in Design und Material.",
    image: "/ceramic-tile-flooring.jpg",
  },
  {
    title: "Vinyl & Designbeläge",
    description:
      "Moderne Vinyl- und Designbeläge mit realistischen Holz- und Steinoptiken. Wasserfest und einfach zu verlegen.",
    image: "/vinyl-flooring-design.jpg",
  },
  {
    title: "Kommerzialboden",
    description:
      "Robuste Bodenlösungen für Büros, Läden und Gewerberäume. Hohe Belastbarkeit und professionelle Verarbeitung.",
    image: "/commercial-flooring-installation.jpg",
  },
  {
    title: "Renovierung & Sanierung",
    description:
      "Fachgerechte Entfernung alter Beläge und Vorbereitung des Untergrunds. Komplette Renovierungslösungen aus einer Hand.",
    image: "/flooring-renovation.jpg",
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">Leistungen</h1>
          <p className="text-lg text-foreground/70 mb-16 max-w-2xl">
            Wir bieten umfassende Lösungen für alle Arten von Bodenbelägen – von klassischem Parkett bis zu modernen
            Designbelägen.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-accent/10 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
