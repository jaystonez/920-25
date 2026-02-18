import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Shield, Award, CheckCircle2, Home, Droplets, Trees, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chimney Sweep Mercer Island | Premium Chimney Cleaning & Service',
  description: 'Professional chimney sweep services for Mercer Island premium homes. Master certified technicians serving lakefront estates and island properties. 45+ years expertise. Call now.',
}

export default function MercerIslandChimneySweepPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600?text=Mercer+Island+lakefront+luxury+homes+with+professional+chimney+systems')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Serving Premium Mercer Island Homes Since 1979</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Mercer Island: Premium Chimney Service for Island Homes
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Professional chimney cleaning, inspection, and restoration for Mercer Island's finest homes. Master Chimney Sweep certification, 45+ years of expertise, and meticulous service your property deserves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                Schedule Service
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Request Estimate
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span>Master Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>45+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>$289.95 Standard Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mercer Island Needs Expert Care */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Mercer Island Chimneys Need Expert Care</h2>
            <p className="text-lg text-muted-foreground">
              Island living creates unique challenges. Mercer Island's location in Lake Washington means elevated humidity, persistent moisture exposure, and weather patterns that demand professional chimney maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lake-Influenced Moisture</h3>
              <p className="text-muted-foreground">
                Surrounded by Lake Washington, Mercer Island experiences elevated humidity year-round. This constant moisture accelerates chimney deterioration—mortar weakens faster, flashing corrodes more readily, masonry stays damp longer.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Home Systems</h3>
              <p className="text-muted-foreground">
                Mercer Island's substantial homes feature oversized fireplaces, multiple flues, premium masonry, and elaborate hearth installations. These systems require technicians who understand complex configurations.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Trees className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mature Estate Landscaping</h3>
              <p className="text-muted-foreground">
                Lush landscaping and mature tree canopy deposit debris on caps, trap moisture against structures, and attract wildlife seeking shelter. Professional maintenance addresses these ongoing challenges.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Property Values</h3>
              <p className="text-muted-foreground">
                Among Washington's highest property values. Documented professional maintenance supports these values—buyers and inspectors scrutinize chimney systems carefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
            <p className="text-lg text-muted-foreground">
              Complete chimney care for Mercer Island's premium properties. Meticulous work, advanced techniques, and respect for your home's quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Thorough Chimney Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Complete creosote removal from full flue, smoke chamber, firebox, and damper. Professional-grade equipment with meticulous containment protecting your quality interiors.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Full system cleaning—all surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium installation protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>21-point inspection included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multi-fireplace coordination</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Starting at</p>
                <p className="text-3xl font-bold text-primary">$289.95</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Detailed 21-point evaluation of your complete chimney system with focus on moisture-related deterioration and premium component assessment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Video camera flue inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Moisture damage evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multi-flue system assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Detailed photo documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Written report for records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real estate transaction suitable</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Premium Repair & Restoration</h3>
              <p className="text-muted-foreground mb-6">
                Expert repair work matching the quality of your home. Proper materials, advanced techniques, meticulous execution.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Crown repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium flashing (copper available)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Expert masonry restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Matched material sourcing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Stainless or copper caps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Liner replacement systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mercer Island Areas We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Professional chimney service throughout Mercer Island—from lakefront estates to interior neighborhoods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'East Mercer Way', description: 'Lakefront estates and waterfront properties' },
              { name: 'West Mercer Way', description: 'Premium homes with lake access and views' },
              { name: 'Island Crest / Town Center', description: 'Established interior neighborhoods' },
              { name: 'First Hill', description: 'Elevated properties with panoramic exposure' },
              { name: 'South End', description: 'Residential areas with mature landscaping' },
              { name: 'North Mercer', description: 'Homes near I-90 corridor' },
            ].map((area) => (
              <div key={area.name} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">{area.name}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Mercer Island Trusts Mad Hatter</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  45+ Years of Premium Service
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Maintaining Mercer Island's finest chimneys since 1979. Extensive experience with high-end residential systems, complex configurations, and premium materials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Master Chimney Sweep Certification
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  The highest credential available. Advanced knowledge, current techniques, and adherence to national safety standards for premium chimney systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Home className="h-5 w-5 text-accent" />
                  Respect for Premium Homes
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  We understand Mercer Island homeowners expect meticulous care. Protect your interiors, respect your property, and deliver quality matching your home.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Complete Documentation
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Detailed inspection reports suitable for home records, insurance documentation, and real estate transactions. Professional standards throughout.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">45+</div>
                  <div className="text-sm text-primary-foreground/80">Years Serving Mercer Island</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">Master</div>
                  <div className="text-sm text-primary-foreground/80">Chimney Sweep Certified</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">Premium</div>
                  <div className="text-sm text-primary-foreground/80">Home Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Your Mercer Island Chimney Service</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Premium homes deserve premium chimney care. Professional annual service protects your investment, ensures your family's safety, and maintains documentation supporting your property's value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now for Service
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-card hover:bg-accent/10 text-foreground border-2 border-border px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Request Estimate
              </Link>
            </div>

            <p className="mt-8 text-muted-foreground">
              <strong>45 years of certified expertise serving Mercer Island's finest homes.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
