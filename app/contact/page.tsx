"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">Kontakt</h1>
          <p className="text-lg text-foreground/70 mb-16">
            Kontaktieren Sie uns für ein unverbindliches Angebot oder Ihre Fragen.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Nachricht senden</h2>
              {submitted ? (
                <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                  <p className="text-foreground font-semibold">Vielen Dank für Ihre Nachricht!</p>
                  <p className="text-foreground/70 mt-2">Wir werden uns bald bei Ihnen melden.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+49 (0) 123 456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nachricht</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Ihre Nachricht..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Senden
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Kontaktinformationen</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                  <a href="tel:+49123456789" className="text-accent hover:underline">
                    +49 (0) 123 456789
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@bodenverlegung.de" className="text-accent hover:underline">
                    info@bodenverlegung.de
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                  <p className="text-foreground/70">
                    Musterstraße 123
                    <br />
                    12345 Musterstadt
                    <br />
                    Deutschland
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Öffnungszeiten</h3>
                  <p className="text-foreground/70">
                    Montag – Freitag: 08:00 – 17:00 Uhr
                    <br />
                    Samstag: 09:00 – 13:00 Uhr
                    <br />
                    Sonntag: Geschlossen
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-accent/10 rounded-lg h-64 flex items-center justify-center border border-border">
                <div className="text-center">
                  <p className="text-foreground/70">Google Maps Integration</p>
                  <p className="text-sm text-foreground/50 mt-2">Karte wird hier angezeigt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
