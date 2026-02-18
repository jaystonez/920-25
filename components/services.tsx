import { Card, CardContent } from "@/components/ui/card"
import { Flame, Search, Wrench, Shield, Wind, Sparkles } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Chimney Sweeping",
    description: "Thorough cleaning to remove creosote, soot, and blockages for safe, efficient operation.",
  },
  {
    icon: Search,
    title: "Chimney Inspections",
    description: "Comprehensive Level 1, 2, and 3 inspections to identify potential hazards and structural issues.",
  },
  {
    icon: Wrench,
    title: "Chimney Repairs",
    description: "Expert masonry repairs, crown rebuilding, and flue liner replacement for long-lasting results.",
  },
  {
    icon: Shield,
    title: "Chimney Caps & Covers",
    description: "Installation of quality caps to prevent water damage, animal intrusion, and debris buildup.",
  },
  {
    icon: Wind,
    title: "Dryer Vent Cleaning",
    description: "Remove lint buildup to improve efficiency and reduce fire hazards in your home.",
  },
  {
    icon: Sparkles,
    title: "Fireplace Restoration",
    description: "Complete restoration services to bring your fireplace back to its original beauty.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Complete Chimney & Fireplace Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From routine maintenance to emergency repairs, we provide comprehensive solutions for all your chimney needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure what you need? We're happy to provide a free consultation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-semibold text-lg hover:underline"
          >
            Contact Us Today →
          </a>
        </div>
      </div>
    </section>
  )
}
