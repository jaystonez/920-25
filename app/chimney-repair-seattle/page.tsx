import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Shield, Clock, Award, Droplet, Snowflake, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chimney Repair Seattle | Expert Masonry & Flashing Restoration',
  description: 'Professional chimney repair in Seattle. Expert flashing, mortar, crown, liner repairs. 45+ years serving Seattle homes. Master certified. Call for inspection.',
}

export default function ChimneyRepairSeattle() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Repair Seattle: Expert Restoration & Masonry Work
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
              Professional repairs for Seattle's wet climate challenges. Master certified technicians. 45+ years of local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12065551234"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call for Repair Estimate
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors text-lg border-2 border-white/20"
              >
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seattle Climate Challenge */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Seattle Chimneys Need Special Attention</h2>
            <p className="text-lg text-muted-foreground">
              Seattle's unique climate accelerates chimney deterioration through constant moisture exposure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg border p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-600 mb-4">
                <Droplet className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">37" Annual Rainfall</h3>
              <p className="text-muted-foreground">
                Every gap and crack in your chimney will leak. Water damage is the #1 chimney problem in Seattle.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-600 mb-4">
                <Snowflake className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Freeze-Thaw Cycles</h3>
              <p className="text-muted-foreground">
                Winter freezes expand water in cracks, widening them. Spring thaws repeat the cycle—accelerating deterioration.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-600 mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Aging Homes</h3>
              <p className="text-muted-foreground">
                Many Seattle homes are 50-100+ years old. Original chimneys show their age and need professional restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Chimney Problems in Seattle</h2>
            <p className="text-lg text-muted-foreground">
              Issues we repair most frequently in Seattle homes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-destructive">●</span> Water Leaks Around Flashing
              </h3>
              <p className="text-muted-foreground">
                Most common leak source. Seattle's heavy rain finds every gap. Water runs down inside chimney and walls.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-destructive">●</span> Cracked/Deteriorating Mortar
              </h3>
              <p className="text-muted-foreground">
                Freeze-thaw cycles crack mortar. Water enters, freezes, expands, and widens cracks—leading to complete joint failure.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-destructive">●</span> Damaged Chimney Crown
              </h3>
              <p className="text-muted-foreground">
                Concrete cap cracks from weather. Water runs down inside chimney instead of off the sides—causing internal deterioration.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-destructive">●</span> Spalling Bricks
              </h3>
              <p className="text-muted-foreground">
                Water penetrates bricks, freezes, forces pieces to break off. Creates more openings for water—accelerates once started.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-destructive">●</span> Damaged Chimney Liner
              </h3>
              <p className="text-muted-foreground">
                Liners crack from heat stress and age. Damaged liner allows hot gases into surrounding walls—fire hazard.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-destructive">●</span> Missing/Damaged Cap
              </h3>
              <p className="text-muted-foreground">
                Without a cap, water enters freely. Birds and squirrels nest. Debris blocks the flue. All easily preventable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Chimney Repair Services</h2>
            <p className="text-lg text-muted-foreground">
              Complete restoration solutions from Master certified technicians
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Flashing Repair */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-2xl font-bold mb-3">Flashing Repair & Replacement</h3>
              <p className="text-muted-foreground mb-4">
                Flashing is where your chimney meets the roof—where most leaks start. We repair or replace using proper techniques:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Remove old, deteriorated flashing completely</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Inspect roof and chimney surfaces for hidden damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Install new flashing with proper overlap and professional sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Use roofing cement and metal flashing that matches your roof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Test the repair to ensure no leaks remain</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm font-semibold">
                  Typical Cost: $400-800 • Prevents $3,000+ in water damage
                </p>
              </div>
            </div>

            {/* Mortar Repointing */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-2xl font-bold mb-3">Mortar Repointing</h3>
              <p className="text-muted-foreground mb-4">
                Repointing removes deteriorated mortar and replaces it with fresh mortar matched to the original:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Remove failed mortar from joints to proper depth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Clean joints of debris and old mortar fragments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Apply new mortar matched in color, composition, and strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Tool mortar for proper drainage and finished appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Allow proper curing time and weather protection</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm font-semibold">
                  Typical Cost: $1,500-3,000 • Restores structural integrity for decades
                </p>
              </div>
            </div>

            {/* Crown Repair */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-2xl font-bold mb-3">Chimney Crown Repair & Replacement</h3>
              <p className="text-muted-foreground mb-4">
                The crown is your chimney's primary defense against water entry from above:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Minor Repair:</h4>
                  <p className="text-sm text-muted-foreground">
                    Small cracks sealed with flexible, weather-resistant sealant that accommodates thermal expansion without re-cracking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Major Replacement:</h4>
                  <p className="text-sm text-muted-foreground">
                    Extensive damage requires removal and rebuild with proper slope, overhang, and modern materials that withstand Seattle weather.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm font-semibold">
                  Typical Cost: $800-1,500 • Prevents internal chimney deterioration
                </p>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-2xl font-bold mb-4">Additional Repair Services</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Brick & Stone Replacement
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Remove damaged masonry, install matching replacements with proper mortar technique.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Chimney Liner Installation
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Install stainless steel liners properly sized and insulated for safe venting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Chimney Cap Installation
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Prevent water, animals, and debris entry while maintaining proper draft.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Firebox Repair
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    High-temperature refractory materials stop smoke leaks and ensure safe operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Repair vs Replace */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">When Repair is Better Than Replacement</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Professional repair often restores function and safety at a fraction of replacement cost
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-lg border-2 border-primary p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Repair When:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Damage is localized to specific areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Structure is fundamentally sound</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Flashing, crown, or mortar issues only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Liner replacement solves safety concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Costs $400-3,000 vs $5,000+ replacement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-destructive/5 rounded-lg border-2 border-destructive p-6">
                <h3 className="text-xl font-bold mb-4 text-destructive">Consider Replacement When:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5 flex-shrink-0">●</span>
                    <span>Extensive spalling throughout the chimney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5 flex-shrink-0">●</span>
                    <span>Major structural issues or severe leaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5 flex-shrink-0">●</span>
                    <span>Foundation settling affecting chimney stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5 flex-shrink-0">●</span>
                    <span>Repair costs approaching replacement costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5 flex-shrink-0">●</span>
                    <span>Chimney unsafe and beyond economical repair</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <p className="text-center font-semibold">
                We'll be honest about this after inspection. Most Seattle chimneys benefit from targeted repair rather than full replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mad Hatter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Seattle Trusts Mad Hatter for Chimney Repairs</h2>
            <p className="text-xl text-white/90">
              45+ years of certified expertise serving Seattle homes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Award className="h-12 w-12 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-2">Master Certified</h3>
              <p className="text-white/80">
                Highest industry credential. Current training in repair techniques, materials, and safety standards.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Clock className="h-12 w-12 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-2">45+ Years in Seattle</h3>
              <p className="text-white/80">
                Repaired thousands of chimneys. We understand this climate and these homes intimately.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-12 w-12 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-2">Quality Materials</h3>
              <p className="text-white/80">
                Proper materials for every repair—matched mortar, appropriate flashing, quality liners, proven sealants.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-12 w-12 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-2">Transparent Communication</h3>
              <p className="text-white/80">
                We explain what we find, what it means, and what it costs. You make informed decisions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Home className="h-12 w-12 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-2">Complete Solutions</h3>
              <p className="text-white/80">
                Inspection to cleaning to major repairs. One certified company handles everything.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-12 w-12 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-2">Warranty Backed</h3>
              <p className="text-white/80">
                We stand behind our work. If something isn't right, we fix it. Your satisfaction guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Preventing Major Chimney Repairs</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Professional maintenance prevents expensive repairs—a $400 investment now prevents $4,000 later
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Annual Inspection
                </h3>
                <p className="text-muted-foreground">
                  Catch problems early. A small leak costs $400 to fix. Water damage to walls costs $3,000+.
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Regular Cleaning
                </h3>
                <p className="text-muted-foreground">
                  Clean chimney functions better. Allows us to spot problems during cleaning before they worsen.
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Chimney Cap
                </h3>
                <p className="text-muted-foreground">
                  Prevents water entry—the biggest damage source. $200-400 cap prevents thousands in repairs.
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Prompt Small Repairs
                </h3>
                <p className="text-muted-foreground">
                  Fix minor issues before they become major. Small flashing repair now prevents wall damage later.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
              <p className="font-semibold text-lg">
                Spending $300-500 annually on maintenance prevents repairs costing $3,000-5,000
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Seattle Chimney Repaired Right</h2>
            <p className="text-xl text-white/90 mb-8">
              Don't postpone repairs. Water damage spreads. Deterioration accelerates. Costs grow. Professional repair stops problems now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12065551234"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call for Inspection
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg border-2 border-white/20"
              >
                Schedule Online
              </Link>
            </div>
            <p className="mt-8 text-white/80">
              Same-day and next-day service available throughout Seattle and surrounding areas
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
