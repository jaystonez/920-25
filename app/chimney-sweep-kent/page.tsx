import { Phone, CheckCircle, Shield, Droplet, Wind, Home, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Chimney Sweep Kent | Professional Chimney Cleaning & Inspection',
  description: 'Professional chimney sweep services in Kent, WA. Certified cleaning, inspection, and repair. Serving valley and East Hill properties for 45+ years. Call for same-day service.',
}

export default function ChimneySweepKentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Serving Kent Since 1979
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Kent: Professional Chimney Cleaning & Inspection Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Kent homeowners rely on their fireplaces to make Pacific Northwest winters comfortable. As one of the largest cities in King County, Kent spans everything from the Green River Valley floor to the East Hill plateau, with thousands of homes featuring fireplaces that need annual professional maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call for Service
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/20 transition-colors border-2 border-primary-foreground/20"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-pretty">
              Kent's varied terrain creates different chimney challenges depending on where you live. Valley-floor homes deal with higher humidity and moisture retention. East Hill properties face more wind exposure and temperature variation. Regardless of location, every Kent chimney benefits from annual professional cleaning and inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Why Kent Chimneys Need Service */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Kent Chimneys Need Annual Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Kent's unique geography and housing create specific chimney challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Green River Valley Moisture</h3>
              <p className="text-muted-foreground">
                Homes in Kent's valley areas experience elevated humidity year-round. The Green River corridor holds moisture, and the valley floor doesn't dry as quickly as hillside properties after rain. This persistent dampness accelerates mortar deterioration, flashing corrosion, and masonry damage.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">East Hill Wind Exposure</h3>
              <p className="text-muted-foreground">
                Kent's East Hill homes sit at elevation with more wind and weather exposure. Wind-driven rain is particularly hard on chimney systems—it forces water into mortar joints, under flashing, and through small cracks that gentle rain wouldn't penetrate.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Housing, Aging Systems</h3>
              <p className="text-muted-foreground">
                Kent offers more affordable housing than much of King County, which means many homeowners are maintaining older properties with chimney systems that have decades of wear. Homes built in the 1960s-1980s have chimneys now 40-60 years old that often need mortar restoration, liner evaluation, and updated components.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Regular Fireplace Use</h3>
              <p className="text-muted-foreground">
                Kent families use their fireplaces regularly through winter. That consistent use generates the creosote buildup that creates fire hazards if not professionally removed. Annual cleaning is essential fire prevention for active fireplace users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Complete chimney care for Kent valley and hill properties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Complete Chimney Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Thorough cleaning of your entire chimney system—full flue, smoke chamber, firebox, and damper. Professional containment protects your home.
              </p>
              <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-4 mb-6">
                <div className="text-sm font-semibold text-primary mb-1">Standard Service</div>
                <div className="text-3xl font-bold">$289.95</div>
                <div className="text-sm text-muted-foreground mt-1">Includes 21-point inspection</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full creosote removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Smoke chamber cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Professional containment</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive evaluation of every chimney component included with every cleaning. Written report with photographs and prioritized recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Crown and cap condition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flashing integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mortar and masonry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Video camera inspection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Written report with photos</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Chimney Repair</h3>
              <p className="text-muted-foreground mb-6">
                Full repair services with honest assessment and clear estimates. We prioritize repairs by urgency and help you plan work over time if needed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Crown repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flashing restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mortar repointing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Cap installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Liner replacement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-900 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-3">Budget-Conscious Approach</h3>
            <p className="text-muted-foreground">
              We understand Kent homeowners are practical about maintenance spending. We prioritize repairs by urgency—addressing safety concerns first and helping you plan less urgent work over time. No pressure to do everything at once.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Kent Neighborhoods We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Professional chimney service throughout Kent and surrounding communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">East Hill</h3>
              <p className="text-sm text-muted-foreground">Established residential plateau with weather-exposed chimneys</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">West Hill</h3>
              <p className="text-sm text-muted-foreground">Homes overlooking the valley with varied exposure</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Kent Valley / Midway</h3>
              <p className="text-sm text-muted-foreground">Valley-floor properties with moisture challenges</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Panther Lake</h3>
              <p className="text-sm text-muted-foreground">Residential community with varied housing ages</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Scenic Hill</h3>
              <p className="text-sm text-muted-foreground">Hillside neighborhood with mature homes</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Meridian</h3>
              <p className="text-sm text-muted-foreground">Growing area with mixed housing ages</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Downtown Kent</h3>
              <p className="text-sm text-muted-foreground">Renovated and historic properties</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:col-span-2 lg:col-span-2">
              <h3 className="font-bold mb-2">Neighboring Communities</h3>
              <p className="text-sm text-muted-foreground">We also serve Covington, Auburn, Federal Way, and SeaTac</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mad Hatter */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Kent Chooses Mad Hatter
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Honest, practical chimney service for Kent homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">45+ Years of King County Service</h3>
              <p className="text-primary-foreground/80">Serving Kent since 1979 with deep local experience and understanding of area homes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Master Chimney Sweep Certification</h3>
              <p className="text-primary-foreground/80">The highest industry credential. Expert service your chimney needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Honest, Practical Service</h3>
              <p className="text-primary-foreground/80">We tell you what's needed and help you prioritize. No scare tactics, no overselling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Complete Service Range</h3>
              <p className="text-primary-foreground/80">One certified company for all chimney needs—cleaning, inspection, and repair</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
              <p className="text-primary-foreground/80">$289.95 standard service. Clear estimates for any additional work. No surprises</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Valley & Hill Expertise</h3>
              <p className="text-primary-foreground/80">We understand the different challenges facing Kent valley and hillside properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Schedule Your Kent Chimney Service
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Professional chimney service prevents fires, ensures safe venting, and catches damage early. Call Mad Hatter Chimney Sweep to schedule. Same-day and next-day service available throughout Kent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now for Service
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted/80 transition-colors border-2 border-border"
              >
                Request Free Estimate
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              45 years of certified expertise protecting Kent families
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
