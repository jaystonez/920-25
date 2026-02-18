import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Award, Shield, CheckCircle2, Clock, Star, Flame, Droplet, AlertTriangle, Wrench, Search, Camera, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chimney Sweep Bellevue | Professional Cleaning & Inspection Services | Mad Hatter',
  description: 'Professional chimney sweep services in Bellevue. 45+ years of certified expertise. Comprehensive cleaning, inspection, and repair. Same-day service available. Call Mad Hatter today.',
}

export default function ChimneySweepBellevuePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Serving Bellevue Since 1979</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Chimney Sweep Services in Bellevue
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              45+ years of certified expertise serving Bellevue's quality homes. Comprehensive cleaning, inspection, and repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:206-890-7141"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg w-full sm:w-auto justify-center"
              >
                <Phone className="h-5 w-5" />
                Call (206) 890-7141
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 w-full sm:w-auto justify-center"
              >
                Schedule Online
              </Link>
            </div>
            <p className="mt-6 text-white/80">
              Same-day and next-day service available throughout Bellevue
            </p>
          </div>
        </div>
      </section>

      {/* Why Bellevue Homeowners Choose Mad Hatter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Bellevue Homeowners Choose Mad Hatter</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quality service for quality homes. Meticulous work, professional expertise, and transparent communication.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
                    <p className="text-muted-foreground">
                      45+ years serving Bellevue. We know the neighborhoods, understand the homes, and know common chimney problems in this area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality Workmanship</h3>
                    <p className="text-muted-foreground">
                      Bellevue residents expect quality. We deliver meticulous work, attention to detail, and respect for your home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Certification</h3>
                    <p className="text-muted-foreground">
                      Master Chimney Sweep certification means industry-leading expertise, not just someone with a ladder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparent Service</h3>
                    <p className="text-muted-foreground">
                      Clear explanations, no hidden fees, no pressure to fix things you don't need. No surprises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Complete Solutions</h3>
                    <p className="text-muted-foreground">
                      Cleaning, inspection, repair—we handle everything. One certified professional, one trusted company.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Prompt Service</h3>
                    <p className="text-muted-foreground">
                      Same-day and next-day service available throughout Bellevue. We respect your time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Chimney Cleaning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Chimney Cleaning in Bellevue</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Professional chimney cleaning removes creosote, debris, and obstructions that compromise safety and efficiency. It's not optional—it's essential for fireplace safety.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Creosote Fire Risk Prevention</p>
                      <p className="text-sm text-muted-foreground">Removes flammable deposits that cause chimney fires reaching 2,000+ degrees.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Improved Heating Efficiency</p>
                      <p className="text-sm text-muted-foreground">Clean chimneys draw properly, wood burns completely, heating improves dramatically.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Carbon Monoxide Safety</p>
                      <p className="text-sm text-muted-foreground">Ensures proper venting of deadly gases away from your living space.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Early Problem Detection</p>
                      <p className="text-sm text-muted-foreground">We inspect while cleaning, catching issues before they become expensive repairs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-semibold mb-2">Standard Cleaning Service: $289.95</p>
                  <p className="text-sm text-muted-foreground">
                    Includes complete creosote removal, flue and smoke chamber cleaning, firebox cleaning, 21-point inspection, written report, and professional cleanup.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Our Cleaning Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <p className="font-semibold mb-1">Preparation</p>
                      <p className="text-sm text-muted-foreground">Seal fireplace with protective tarps to contain dust and debris.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <p className="font-semibold mb-1">Professional Cleaning</p>
                      <p className="text-sm text-muted-foreground">Use professional-grade brushes, rods, and vacuum equipment for thorough cleaning.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <p className="font-semibold mb-1">Thorough Inspection</p>
                      <p className="text-sm text-muted-foreground">Inspect entire flue, smoke chamber, and firebox for damage or problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <p className="font-semibold mb-1">Complete Documentation</p>
                      <p className="text-sm text-muted-foreground">Provide written report of findings and recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <p className="font-semibold mb-1">Professional Cleanup</p>
                      <p className="text-sm text-muted-foreground">Remove tarps and clean thoroughly. Your home stays pristine.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Inspection */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Chimney Inspection in Bellevue</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                You can't see inside your chimney to assess conditions, damage, or safety. Professional inspection reveals what's happening.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-lg p-8 border shadow-sm">
                <Camera className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our 21-Point Inspection</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Chimney crown condition and water shedding</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Flashing integrity and sealing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Mortar joint condition</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Brick and stone condition</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Chimney cap presence and function</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Flue integrity and cracks</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Creosote accumulation levels</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Chimney liner condition</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">And 13 additional critical checkpoints...</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 border shadow-sm">
                <Search className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Why Annual Inspection?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Safety</p>
                    <p className="text-sm text-muted-foreground">Catches problems before they become dangerous.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Early Detection Saves Money</p>
                    <p className="text-sm text-muted-foreground">Small flashing leak: $400 to fix now. Ignored for a year: $3,000+ in wall damage.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Home Selling</p>
                    <p className="text-sm text-muted-foreground">Recent inspection documentation streamlines the sale process.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Insurance Requirements</p>
                    <p className="text-sm text-muted-foreground">Some policies require inspection documentation.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Peace of Mind</p>
                    <p className="text-sm text-muted-foreground">You know your chimney is safe and well-maintained.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="font-semibold mb-2">Detailed Written Report Included</p>
              <p className="text-sm text-muted-foreground">
                You receive photographs, video stills from interior inspection, condition ratings, safety concerns with urgency levels, prioritized recommendations, and cost estimates for needed work (no obligation).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chimney Repair Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Chimney Repair Services in Bellevue</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Many Bellevue homes have chimneys that need attention. We handle all repair needs with quality workmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <Droplet className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Flashing Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Where most leaks start. We repair or replace deteriorated flashing, stopping water damage before it spreads.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <Wrench className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Mortar Repointing</h3>
                <p className="text-sm text-muted-foreground">
                  Remove deteriorated mortar and repoint with fresh mortar matched to your original. Restores structural integrity.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Crown Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Repair minor cracks or rebuild damaged crowns to restore proper water shedding function.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <AlertTriangle className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Brick Replacement</h3>
                <p className="text-sm text-muted-foreground">
                  Replace damaged or spalling bricks with matching units, restoring strength and aesthetics.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <Flame className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Liner Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Modern liner installation for cracked or missing liners. Improves safety and efficiency.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Cap Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Prevent water, animals, and debris from entering. Quality caps that match your chimney's appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Bellevue Chimney Problems */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Bellevue Chimney Problems</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Seattle-area moisture and Bellevue's weather create specific chimney challenges we see regularly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border-l-4 border-destructive">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-destructive" />
                  Water Leaks
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seattle-area moisture creates flashing and crown problems. Most common repair need in Bellevue.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-destructive">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Mortar Deterioration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Freeze-thaw cycles stress masonry. Mortar joints fail, allowing water inside the chimney structure.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-destructive">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Spalling Bricks
                </h3>
                <p className="text-sm text-muted-foreground">
                  Water enters bricks, freezes, and breaks them apart. This accelerates once it starts.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-amber-500">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Flame className="h-5 w-5 text-amber-500" />
                  Creosote Buildup
                </h3>
                <p className="text-sm text-muted-foreground">
                  Regular fireplace use accumulates creosote. Professional cleaning prevents fire hazard.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-amber-500">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Missing Chimney Caps
                </h3>
                <p className="text-sm text-muted-foreground">
                  Many older Bellevue homes lack caps. Water and animals enter freely without them.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-destructive">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Flame className="h-5 w-5 text-destructive" />
                  Damaged Liners
                </h3>
                <p className="text-sm text-muted-foreground">
                  Heat stress and age crack liners. A cracked liner is a serious safety issue requiring prompt repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Trust */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Mad Hatter for Bellevue Service</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Generations of satisfied Bellevue customers trust us for all their chimney needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <p className="text-3xl font-bold mb-2">45+</p>
                <p className="text-white/80">Years Serving Bellevue</p>
              </div>

              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <p className="text-3xl font-bold mb-2">Master</p>
                <p className="text-white/80">Chimney Sweep Certified</p>
              </div>

              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <p className="text-3xl font-bold mb-2">21-Point</p>
                <p className="text-white/80">Comprehensive Inspection</p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <p className="text-3xl font-bold mb-2">1,000s</p>
                <p className="text-white/80">of Satisfied Bellevue Customers</p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Quality Workmanship</h3>
                <p className="text-sm text-white/80">
                  Meticulous work, attention to detail, respect for your home. We take pride in every job.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                <p className="text-sm text-white/80">
                  Cleaning starts at $289.95. Detailed estimates before repair work begins. No hidden fees.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Complete Solutions</h3>
                <p className="text-sm text-white/80">
                  Cleaning, inspection, repair—we handle everything. One trusted company for all needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Chimney Maintenance Schedule</h2>
              <p className="text-xl text-muted-foreground">
                Proper maintenance prevents expensive problems and ensures safety.
              </p>
            </div>

            <div className="bg-card rounded-lg border p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Annual Inspection</p>
                    <p className="text-sm text-muted-foreground">Catch problems early when they're affordable to fix.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Annual Cleaning</p>
                    <p className="text-sm text-muted-foreground">If you use your fireplace regularly. Essential for safety.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Wrench className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Prompt Small Repairs</p>
                    <p className="text-sm text-muted-foreground">Before they become big problems. Small repairs prevent expensive restoration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Chimney Cap</p>
                    <p className="text-sm text-muted-foreground">Prevents the biggest damage source—water entry from above.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-semibold mb-2">Cost Comparison</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Annual maintenance: $300-500
                </p>
                <p className="text-sm text-muted-foreground">
                  Neglected chimney repairs: $3,000-5,000+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protecting Your Bellevue Home
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your chimney is a critical safety system. Professional maintenance keeps it safe and functional. We've been protecting Bellevue families for decades with certified, quality service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:206-890-7141"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg w-full sm:w-auto justify-center"
              >
                <Phone className="h-5 w-5" />
                Call (206) 890-7141
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 w-full sm:w-auto justify-center"
              >
                Schedule Service Online
              </Link>
            </div>
            <p className="mt-6 text-white/80">
              Same-day and next-day service available throughout Bellevue and King County
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
