import { Button } from "@/components/ui/button"
import { Phone, Calendar, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Since 2014</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Professional Chimney Services You Can{" "}
              <span className="text-primary">Trust</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Expert chimney sweeping, inspections, and repairs. Keeping your home safe and your fireplace running efficiently for over 10 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call (206) 274-6409
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Licensed & Insured</p>
                  <p className="text-xs text-muted-foreground">Full Coverage</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Years Experience</p>
                  <p className="text-xs text-muted-foreground">Trusted Locally</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/600x700?text=Professional+chimney+sweep+cleaning+a+brick+fireplace+with+modern+tools+in+a+cozy+home+interior"
                alt="Professional chimney sweep cleaning a brick fireplace with modern tools in a cozy home interior"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-bold text-lg">2,500+ Happy Customers</p>
                  <p className="text-sm text-muted-foreground">5-star rated service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
