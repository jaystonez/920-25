import { Phone, Shield, Clock, Award, CheckCircle2, Home, Droplets, Calendar, Hammer } from 'lucide-react'
import Link from 'next/link'

export default function ChimneySweepShorelinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              Serving Shoreline Since 1979
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Shoreline: Professional Cleaning, Inspection & Repair
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Expert care for Shoreline's mid-century homes with 45+ years of certified chimney service. Specialized expertise for aging chimney systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (123) 456-7890
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Needs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Shoreline Chimneys Need Expert Care
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg border-2 border-border">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Aging Systems</h3>
                <p className="text-muted-foreground">
                  Many Shoreline homes were built 1950s-1970s. Original chimneys now 50-70 years old need professional assessment and restoration.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border-2 border-border">
                <Droplets className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Water Damage</h3>
                <p className="text-muted-foreground">
                  Decades of Puget Sound rainfall accumulate damage. Small leaks over many years cause significant internal deterioration.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border-2 border-border">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Mid-Century Homes</h3>
                <p className="text-muted-foreground">
                  Established neighborhoods with quality construction require technicians experienced with mid-century chimney systems.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border-2 border-border">
                <Hammer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Restoration Needs</h3>
                <p className="text-muted-foreground">
                  Original mortar, liners, and components reaching end of lifespan need professional evaluation and expert repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Chimney Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cleaning */}
              <div className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Professional Cleaning</h3>
                <p className="text-muted-foreground mb-6">
                  Complete creosote removal from all chimney surfaces. Professional containment protects your home throughout the process.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Full flue, smoke chamber & firebox cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>All creosote stages removed completely</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>21-point inspection included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Professional cleanup guaranteed</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-primary">Starting at $289.95</div>
              </div>

              {/* Inspection */}
              <div className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive evaluation of aging chimney systems. Specialized assessment for mid-century construction.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Age-related deterioration assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Video camera flue inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Water damage extent evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Written report with photos</span>
                  </li>
                </ul>
                <div className="text-lg font-semibold text-muted-foreground">Included with cleaning</div>
              </div>

              {/* Repair */}
              <div className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Expert Restoration</h3>
                <p className="text-muted-foreground mb-6">
                  Professional repair and restoration for Shoreline's aging chimney systems using period-appropriate techniques.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mortar repointing with matched material</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Crown repair & replacement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Liner installation for cracked originals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Flashing repair & replacement</span>
                  </li>
                </ul>
                <div className="text-lg font-semibold text-muted-foreground">Custom estimates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Repair or Replace? Honest Assessment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-8 rounded-lg border-2 border-primary">
                <h3 className="text-2xl font-bold mb-4 text-primary">Repair When:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Damage is localized to specific areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Overall structure remains sound</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Proper repair restores decades of life</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cost is fraction of replacement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background p-8 rounded-lg border-2 border-destructive">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Replace When:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                    <span>Damage is extensive throughout structure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                    <span>Structural integrity is compromised</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                    <span>Repair costs approach replacement cost</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multiple major systems need replacement</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8">
              We're honest about this assessment. We don't recommend unnecessary replacement, and we don't recommend inadequate repair.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Shoreline Areas We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Richmond Beach', description: 'Waterfront-adjacent homes with moisture exposure' },
                { name: 'Hillwood', description: 'Established mid-century neighborhood' },
                { name: 'Echo Lake', description: 'Varied chimney ages and conditions' },
                { name: 'Ridgecrest', description: 'Family neighborhood with quality homes' },
                { name: 'Briarcrest', description: 'Established community with aging systems' },
                { name: 'Meridian Park', description: 'Mixed-era homes needing varied services' },
                { name: 'North City', description: 'Residential properties requiring maintenance' },
                { name: 'Innis Arden', description: 'Distinctive homes with unique configurations' }
              ].map((area) => (
                <div key={area.name} className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">{area.name}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Shoreline Homeowners Choose Mad Hatter
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">45+ Years Local Service</h3>
                <p className="opacity-90">
                  Maintaining Shoreline chimneys since 1979. Deep experience with mid-century construction.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Master Certification</h3>
                <p className="opacity-90">
                  Highest industry credential. Current training and national safety standards.
                </p>
              </div>
              <div className="text-center">
                <Home className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Older Chimney Experts</h3>
                <p className="opacity-90">
                  Specialized expertise for 50-70 year old chimney systems requiring proper restoration.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">21-Point Inspection</h3>
                <p className="opacity-90">
                  Comprehensive assessment included with every cleaning. Nothing overlooked.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="opacity-90">
                  $289.95 standard service. Detailed repair estimates before work begins.
                </p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Honest Assessment</h3>
                <p className="opacity-90">
                  We tell you what your chimney actually needs—no pressure, no minimizing problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Shoreline Chimney Service
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Your chimney has protected your home for decades. Professional maintenance ensures it continues to do so safely. Same-day and next-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (123) 456-7890
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
              >
                Schedule Online
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              45 years of certified expertise. The trusted choice for Shoreline chimney care.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
