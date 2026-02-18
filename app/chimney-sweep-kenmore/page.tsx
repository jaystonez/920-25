import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Calendar, CheckCircle2, Droplets, Home, TreePine, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chimney Sweep Kenmore | Professional Cleaning & Inspection Services',
  description: 'Expert chimney sweep services in Kenmore, WA. 45+ years of certified chimney cleaning and inspection. Lake Washington moisture specialists. Call (206) 737-8785.',
}

export default function KenmoreSweepPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600?text=Kenmore+lakeside+homes+with+chimneys+near+Lake+Washington+waterfront+properties')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Serving Kenmore Since 1979
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Kenmore: Professional Cleaning & Inspection
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed text-pretty">
              Lake Washington moisture specialists. Kenmore's lakeside location creates unique chimney challenges. 45+ years of certified expertise protecting Kenmore homes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="tel:2067378785"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (206) 737-8785
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kenmore Chimneys Need Care */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">Why Kenmore Chimneys Need Professional Care</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Kenmore's lakeside location creates unique challenges for chimney systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lake Washington Moisture</h3>
              <p className="text-muted-foreground text-sm">
                Elevated humidity from lake proximity accelerates mortar deterioration and masonry damage. Professional inspection catches moisture issues early.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Established Homes</h3>
              <p className="text-muted-foreground text-sm">
                Much of Kenmore's housing dates to 1950s-1980s with chimney systems now 40-70 years old requiring professional maintenance.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TreePine className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wooded Lots</h3>
              <p className="text-muted-foreground text-sm">
                Tree-covered neighborhoods mean debris on caps, moisture-trapping vegetation, and wildlife seeking shelter in flues.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Annual Service Essential</h3>
              <p className="text-muted-foreground text-sm">
                Lake moisture combined with Pacific Northwest rainfall creates conditions requiring annual professional cleaning and inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">Our Professional Services</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Complete chimney care for Kenmore homes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cleaning */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Complete Chimney Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Thorough removal of all creosote from your chimney system—full flue, smoke chamber, firebox, and damper. Professional containment protects your home.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <div className="text-sm font-medium text-primary mb-1">Standard Service</div>
                <div className="text-2xl font-bold">$289.95</div>
                <div className="text-sm text-muted-foreground">Includes 21-point inspection</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Complete creosote removal</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flue and smoke chamber cleaning</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Professional containment</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Written report</span>
                </li>
              </ul>
            </div>

            {/* Inspection */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Systematic evaluation of every chimney component included with every cleaning. Video camera technology reveals interior conditions.
              </p>
              <div className="mb-6">
                <div className="text-sm font-medium text-muted-foreground mb-3">We Examine:</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Crown & cap condition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Flashing integrity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Mortar & masonry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Liner condition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Moisture damage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Structural integrity</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Written report with photographs documenting all findings.
              </p>
            </div>

            {/* Repair */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Chimney Repair</h3>
              <p className="text-muted-foreground mb-6">
                Professional restoration when inspection identifies problems. Addressing moisture damage before it compromises structural integrity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Crown repair & replacement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flashing restoration</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Mortar repointing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Chimney cap installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Liner replacement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Waterproofing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Animal removal & screening</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">Kenmore Areas We Serve</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Professional chimney service throughout Kenmore and neighboring communities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Lakeshore / Waterfront</div>
                <div className="text-sm text-muted-foreground">Homes with maximum moisture exposure</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Kenmore Air Harbor Area</div>
                <div className="text-sm text-muted-foreground">Established residential neighborhood</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Arrowhead / Moorlands</div>
                <div className="text-sm text-muted-foreground">Quality homes with mature landscaping</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Inglemoor</div>
                <div className="text-sm text-muted-foreground">Residential community near Bothell</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Northshore</div>
                <div className="text-sm text-muted-foreground">Homes along northern corridor</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Neighboring Areas</div>
                <div className="text-sm text-muted-foreground">Bothell, Lake Forest Park, Kirkland</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mad Hatter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">Why Kenmore Trusts Mad Hatter</h2>
            <p className="text-lg text-white/80 text-pretty">
              Four decades of certified expertise serving Kenmore's lakeside community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">45+</div>
              <div className="text-sm text-white/80">Years serving Kenmore since 1979</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">Master</div>
              <div className="text-sm text-white/80">Chimney Sweep Certification - highest credential</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">Lake</div>
              <div className="text-sm text-white/80">Moisture damage specialists with deep experience</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">Complete</div>
              <div className="text-sm text-white/80">Service - one certified company for all needs</div>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Kenmore Commitment</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Specialized understanding of lake-proximity moisture challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Transparent pricing with no hidden charges or surprise add-ons</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Honest communication - we explain findings and recommend what's needed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Same-day and next-day service available throughout Kenmore</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-balance">Schedule Your Kenmore Chimney Service</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Annual service prevents fires, ensures safe venting, and catches moisture damage early. Professional cleaning and inspection is the most important maintenance your fireplace requires.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="tel:2067378785"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (206) 737-8785
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule Online
              </Link>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              45 years of certified expertise protecting Kenmore families
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
