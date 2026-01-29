import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">Über uns</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Mit über 15 Jahren Erfahrung in der Bodenverlegung haben wir uns als vertrauenswürdiger Partner für
                Privat- und Geschäftskunden etabliert.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Unser Team besteht aus hochqualifizierten Fachleuten, die mit modernster Technik und handwerklichem
                Geschick arbeiten. Wir verwenden nur hochwertige Materialien und garantieren präzise Ausführung bei
                jedem Projekt.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Unsere Philosophie: Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen an erster Stelle. Jedes
                Projekt wird mit Sorgfalt und Professionalität umgesetzt.
              </p>
            </div>
            <div className="bg-accent/10 rounded-lg overflow-hidden h-96">
              <img
                src="/professional-flooring-team-working-on-installation.jpg"
                alt="Unser Team bei der Arbeit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-foreground/70">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-foreground/70">Zufriedene Kunden</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-foreground/70">Qualitätsgarantie</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
