import { CheckCircle2, Flame, Shield, DollarSign, Home, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Chimney Sweep Seattle: Professional Cleaning & Inspection Services | Mad Hatter',
  description: '45+ years serving Seattle. Certified chimney sweep services starting at $289.95. Complete cleaning, 21-point inspection, and expert repairs. Same-day service available.',
}

export default function ChimneySweepSeattlePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Serving Seattle Since 1979
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Chimney Sweep Services in Seattle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Certified chimney cleaning, comprehensive inspection, and expert repairs for Seattle's wet climate. Over 45 years of protecting Seattle families.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                Schedule Service
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Seattle Needs Professional Service */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Seattle Homeowners Need Professional Chimney Sweeps</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seattle's wet winters and damp climate create unique challenges that demand expert attention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fire Safety</h3>
              <p className="text-muted-foreground">
                Creosote buildup ignites at 1,000°F, creating chimney fires reaching 2,000°F+. Professional cleaning eliminates this deadly risk completely.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">CO Prevention</h3>
              <p className="text-muted-foreground">
                Blocked chimneys force carbon monoxide into your home. Professional service ensures deadly gases vent safely outside.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
              <p className="text-muted-foreground">
                Clean chimneys draft properly—better combustion, more heat, less wood consumed. Efficiency gains add up over Seattle's long heating season.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Structural Protection</h3>
              <p className="text-muted-foreground">
                Seattle moisture deteriorates masonry. Annual inspection catches problems early, preventing expensive repairs from spreading damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Seattle Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete chimney care from certified Master Chimney Sweeps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cleaning */}
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">Complete Chimney Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Thorough removal of all creosote, soot, and debris from your entire chimney system. Professional containment protects your Seattle home.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Complete creosote removal - all stages</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Smoke chamber & firebox cleaning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Debris & obstruction removal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Professional home protection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Thorough cleanup after service</span>
                </div>
              </div>
              <div className="pt-6 border-t">
                <div className="text-sm text-muted-foreground mb-2">Starting at</div>
                <div className="text-3xl font-bold text-primary">$289.95</div>
                <div className="text-sm text-muted-foreground mt-1">Includes 21-point inspection</div>
              </div>
            </div>

            {/* Inspection */}
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive evaluation of every chimney component included with every cleaning. Seattle-specific focus on moisture damage.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flue integrity & liner condition</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Crown & flashing assessment</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mortar & masonry evaluation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Video camera flue inspection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Written report with photos</span>
                </div>
              </div>
              <div className="pt-6 border-t">
                <div className="text-sm font-semibold text-primary mb-2">Included Free</div>
                <div className="text-sm text-muted-foreground">
                  With every standard cleaning service
                </div>
              </div>
            </div>

            {/* Repair */}
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">Chimney Repair</h3>
              <p className="text-muted-foreground mb-6">
                Expert restoration for Seattle's wet climate challenges. From minor repairs to complete rebuilds.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Crown repair & replacement</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flashing repair & sealing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mortar repointing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Liner installation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Brick & stone restoration</span>
                </div>
              </div>
              <div className="pt-6 border-t">
                <div className="text-sm font-semibold mb-2">Custom Pricing</div>
                <div className="text-sm text-muted-foreground">
                  Detailed estimates provided after inspection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seattle Neighborhoods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All Seattle Neighborhoods</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional chimney service throughout Seattle and greater King County
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">North Seattle</h3>
              <p className="text-sm text-muted-foreground">Ballard, Fremont, Greenwood, Northgate, University District</p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">Central Seattle</h3>
              <p className="text-sm text-muted-foreground">Capitol Hill, Queen Anne, Wallingford, Green Lake, Montlake</p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">West Seattle</h3>
              <p className="text-sm text-muted-foreground">Alki, Admiral, Fauntleroy, Delridge, Junction</p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">South Seattle</h3>
              <p className="text-sm text-muted-foreground">Beacon Hill, Columbia City, Rainier Valley, Georgetown</p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">Downtown</h3>
              <p className="text-sm text-muted-foreground">Pioneer Square, Belltown, South Lake Union, First Hill</p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">East Seattle</h3>
              <p className="text-sm text-muted-foreground">Madison Park, Madrona, Leschi, Mount Baker, Seward Park</p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">Apartments & Condos</h3>
              <p className="text-sm text-muted-foreground">Specialized service for multi-unit buildings throughout Seattle</p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <h3 className="font-semibold mb-2">Greater Area</h3>
              <p className="text-sm text-muted-foreground">All King County neighborhoods and surrounding communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mad Hatter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Seattle Trusts Mad Hatter</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Over four decades serving Seattle families with certified expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">45+</div>
              <div className="text-xl font-semibold mb-2">Years in Seattle</div>
              <p className="text-primary-foreground/80">
                Serving Seattle since 1979. Deep local experience with Pacific Northwest homes and climate challenges.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">Master</div>
              <div className="text-xl font-semibold mb-2">Certified Sweep</div>
              <p className="text-primary-foreground/80">
                Highest industry credential. Advanced training, current techniques, national safety standards.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">21-Point</div>
              <div className="text-xl font-semibold mb-2">Inspection Standard</div>
              <p className="text-primary-foreground/80">
                Every chimney gets comprehensive assessment. We examine everything, document findings, explain clearly.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">$289.95</div>
              <div className="text-xl font-semibold mb-2">Transparent Pricing</div>
              <p className="text-primary-foreground/80">
                Clear pricing with no hidden fees. Standard service includes cleaning and full inspection.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">Apartment</div>
              <div className="text-xl font-semibold mb-2">Specialist Service</div>
              <p className="text-primary-foreground/80">
                Expertise with Seattle's multi-unit buildings. One of few companies serving apartments and condos professionally.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">Complete</div>
              <div className="text-xl font-semibold mb-2">Solutions Provider</div>
              <p className="text-primary-foreground/80">
                Cleaning, inspection, repair, restoration—everything from one certified, trusted company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Maintenance Importance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Importance of Annual Chimney Maintenance</h2>
                  <p className="text-muted-foreground mb-4">
                    The National Fire Protection Association (NFPA) recommends chimney inspection and cleaning at least once per year. If you use your fireplace regularly, more frequent cleaning may be necessary.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Think of chimney maintenance like vehicle maintenance: regular service prevents expensive problems. A yearly chimney sweep costs $289.95. A chimney fire or carbon monoxide incident costs far more in damage, danger, and heartbreak.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-3">What to Expect During Service:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Initial assessment of fireplace and exterior</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Professional protection setup with tarps and barriers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Top-down cleaning with professional equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Detailed inspection of entire flue and chimney</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Thorough cleanup - you won't know we were there</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Written report with findings and recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Seattle Chimney Sweep Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't wait for problems to develop. Professional chimney maintenance keeps your home safe and your fireplace working efficiently. Same-day and next-day service available throughout Seattle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call for Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground border rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Request Estimate
            </Link>
          </div>
          <p className="text-muted-foreground mt-6">
            45 years of certified expertise protecting Seattle families. Your chimney deserves professional care.
          </p>
        </div>
      </section>
    </div>
  )
}
