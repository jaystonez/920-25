import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Search, Wrench, Shield, Hammer, Droplet } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Chimney Inspection & Sweeping",
      slug: "chimney-inspection-sweeping",
      icon: Search,
      description: "Professional chimney inspections and thorough cleaning services to keep your chimney safe and efficient.",
      subServices: [
        "Level 1, 2, and 3 Inspections",
        "Video Camera Inspections",
        "Creosote Removal",
        "Annual Maintenance"
      ]
    },
    {
      title: "Chimney Repairs",
      slug: "chimney-repairs",
      icon: Wrench,
      description: "Expert masonry and structural repairs to restore your chimney's integrity and safety.",
      subServices: [
        "Crown Repairs",
        "Tuckpointing & Repointing",
        "Firebox Repair",
        "Smoke Chamber Restoration"
      ]
    },
    {
      title: "Chimney Relining",
      slug: "chimney-relining",
      icon: Shield,
      description: "Professional liner installation and repair to ensure proper venting and safety.",
      subServices: [
        "Stainless Steel Liners",
        "Cast-in-Place Liners",
        "Flexible Liner Systems",
        "Oil Furnace Liners"
      ]
    },
    {
      title: "Waterproofing & Leak Repair",
      slug: "waterproofing-leak-repair",
      icon: Droplet,
      description: "Comprehensive leak detection and waterproofing services to protect your chimney from water damage.",
      subServices: [
        "Flashing Repair & Installation",
        "Chimney Cap Installation",
        "Chase Cover Replacement",
        "Waterproofing Treatments"
      ]
    },
    {
      title: "Stove & Fireplace Installation",
      slug: "stove-fireplace-installation",
      icon: Flame,
      description: "Professional installation of wood stoves, gas fireplaces, and inserts.",
      subServices: [
        "Wood Stove Installation",
        "Gas Fireplace Installation",
        "Fireplace Insert Installation",
        "Glass Door Installation"
      ]
    },
    {
      title: "Rebuilds & Restorations",
      slug: "rebuilds-restorations",
      icon: Hammer,
      description: "Complete chimney rebuilds and restoration services for damaged or aging chimneys.",
      subServices: [
        "Partial & Full Rebuilds",
        "Brick Replacement",
        "Fireplace Restoration",
        "Stone Veneer Installation"
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Comprehensive Chimney Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From routine maintenance to major repairs, we provide complete chimney and fireplace services throughout the Seattle area.
              </p>
              <Button size="lg" asChild>
                <Link href="/#contact">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.subServices.map((sub) => (
                        <li key={sub} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {sub}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href={`/services/${service.slug}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Schedule Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free inspection and estimate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#contact">Get Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:2062746409">Call (206) 274-6409</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
