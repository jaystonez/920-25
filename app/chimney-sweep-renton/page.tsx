import Link from 'next/link'
import { CheckCircle2, MapPin, Phone, Calendar } from 'lucide-react'

export default function RentonChimneySweepPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Serving Renton Since 1979</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Renton: Professional Chimney Cleaning & Inspection Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From Kennydale's lakeside homes to the Highlands and Benson Hill—professional chimney service for Renton's diverse housing stock. 45 years of certified expertise protecting Renton families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule Service
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Renton Chimneys Need Service */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Renton Chimneys Need Professional Service</h2>
            <p className="text-lg text-muted-foreground">
              Renton's position at the south end of Lake Washington creates persistent moisture challenges while diverse housing ages require specialized expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-primary mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Climate Challenges</h3>
              <p className="text-muted-foreground">
                Over 37 inches of rain annually plus lake and river moisture. Persistent dampness accelerates mortar deterioration, flashing corrosion, and masonry damage.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-primary mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Diverse Housing Ages</h3>
              <p className="text-muted-foreground">
                From 1940s post-war homes to modern construction. Each era requires different expertise—60-80 year old masonry needs different care than modern factory-built systems.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-primary mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Active Fireplace Communities</h3>
              <p className="text-muted-foreground">
                Kennydale, Highlands, and Benson Hill areas see heavy winter fireplace use. Regular burning generates creosote requiring professional removal for fire safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
            <p className="text-lg text-muted-foreground">
              Complete chimney care from certified Master Chimney Sweep professionals serving all Renton neighborhoods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Complete Chimney Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Thorough removal of all creosote from full flue length, smoke chamber, firebox, and damper. Professional containment protects your home.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">All three stages of creosote removed</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Top-down professional technique</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Professional-grade equipment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Complete home protection</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Standard Service</p>
                <p className="text-2xl font-bold text-primary">$289.95</p>
                <p className="text-sm text-muted-foreground">Includes 21-point inspection</p>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive evaluation of every chimney component. Written report with photographs documenting conditions and recommendations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Crown and cap assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Flashing and mortar evaluation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Video camera flue inspection</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Complete documentation</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm font-medium">Included with Every Cleaning</p>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Chimney Repair</h3>
              <p className="text-muted-foreground mb-6">
                Professional repair services for all chimney types and ages. From historic masonry to modern factory-built systems.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Crown repair & replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Flashing restoration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Mortar repointing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Liner replacement</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Clear estimates before work begins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Renton Neighborhoods We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Professional chimney service throughout all of Renton and surrounding communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Kennydale</h3>
              <p className="text-sm text-muted-foreground">Lakeside homes with moisture exposure challenges</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Renton Highlands</h3>
              <p className="text-sm text-muted-foreground">Established mid-century neighborhood</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Benson Hill</h3>
              <p className="text-sm text-muted-foreground">Growing community with mixed housing ages</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Talbot Hill</h3>
              <p className="text-sm text-muted-foreground">Residential area with varied chimney types</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Cascade / Earlington</h3>
              <p className="text-sm text-muted-foreground">Older residential neighborhoods</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Fairwood</h3>
              <p className="text-sm text-muted-foreground">Suburban developments with regular use</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Downtown Renton</h3>
              <p className="text-sm text-muted-foreground">Renovated and historic properties</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">Nearby Areas</h3>
              <p className="text-sm text-muted-foreground">Newcastle, Tukwila, SeaTac, Kent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Renton Trusts Mad Hatter</h2>
            <p className="text-lg text-primary-foreground/90">
              45 years of certified expertise serving Renton's diverse housing stock with honest, professional chimney care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">45+ Years Serving King County</h3>
              <p className="text-primary-foreground/90">
                Maintaining Renton chimneys since 1979. Deep experience with local climate and housing challenges from 1940s homes to modern construction.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Master Chimney Sweep Certification</h3>
              <p className="text-primary-foreground/90">
                The highest industry credential. Advanced expertise for all chimney types—historic masonry to modern factory-built systems.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Complete Service Range</h3>
              <p className="text-primary-foreground/90">
                Cleaning, inspection, repair, and restoration from one certified company. No coordinating multiple contractors.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-primary-foreground/90">
                $289.95 standard service. Clear repair estimates before work begins. No hidden fees or surprise charges.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Honest Assessment</h3>
              <p className="text-primary-foreground/90">
                We explain findings clearly and recommend only what your chimney actually needs. No scare tactics or overselling.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Diverse System Expertise</h3>
              <p className="text-primary-foreground/90">
                Experience with all chimney types and ages found across Renton's housing stock. The right expertise for your specific system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Renton Chimney Service</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Annual professional service prevents fires, ensures safe venting, and catches damage early. Don't wait for problems to announce themselves—schedule now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule Service
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Same-day and next-day service available throughout Renton
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
