import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Shield, Clock, Flame, Wind, CheckCircle2, AlertTriangle, Home, Eye, Droplets, ThermometerSun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chimney Cleaning Seattle | Professional Creosote Removal & Maintenance',
  description: 'Professional chimney cleaning in Seattle. 45+ years removing dangerous creosote, improving efficiency, and protecting Seattle homes. Master certified. $289.95 includes 21-point inspection.',
}

export default function ChimneyCleaningSeattle() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <MapPin className="h-4 w-4" />
              Serving All of Seattle
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Chimney Cleaning Seattle: Professional Creosote Removal & Maintenance
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Professional chimney cleaning in Seattle isn't optional—it's essential. Whether you use your fireplace daily or just a few times a year, creosote buildup creates real fire hazards that only professional cleaning can safely address.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Schedule Cleaning
              </a>
              <Link
                href="/chimney-inspection"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground hover:bg-accent transition-colors"
              >
                Learn About Inspection
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              45+ years serving Seattle. Master certified. Same-day service available.
            </p>
          </div>
        </div>
      </section>

      {/* Why Professional Cleaning Matters */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Professional Chimney Cleaning Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              Seattle's wet winters combined with regular fireplace use create perfect conditions for creosote accumulation, moisture problems, and chimney deterioration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-destructive/10 w-12 h-12 flex items-center justify-center mb-4">
                <Flame className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fire Prevention</h3>
              <p className="text-sm text-muted-foreground">
                Creosote can ignite at 1,000°F, causing chimney fires that reach 2,000+ degrees—hot enough to crack liners and spread into walls.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Improved Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                A clean chimney draws better. Wood burns more completely, more heat enters your home, and you use less wood to stay warm.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Carbon Monoxide Safety</h3>
              <p className="text-sm text-muted-foreground">
                Blocked chimneys force carbon monoxide back into your home. This colorless, odorless gas is deadly—even in small amounts.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Early Problem Detection</h3>
              <p className="text-sm text-muted-foreground">
                Professional cleaning includes inspection. We catch cracked liners, damaged mortar, and obstructions before they become expensive repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Professional Cleaning Process */}
      <section className="py-16 sm:py-24 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Professional Chimney Cleaning Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Systematic, thorough cleaning that protects your home and ensures complete creosote removal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Preparation</h3>
                  <p className="text-muted-foreground">
                    We seal your fireplace opening with professional tarps and protective barriers. This contains dust and debris so your home stays clean.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Top-Down Cleaning</h3>
                  <p className="text-muted-foreground">
                    Starting at the roof, we use professional brushes and rods sized to your chimney. Gravity-assisted approach ensures all creosote gets dislodged.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Complete Creosote Removal</h3>
                  <p className="text-muted-foreground">
                    We remove all three stages of creosote: Stage 1 (fluffy), Stage 2 (tar-like), and Stage 3 (hard, glazed)—the most dangerous.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Smoke Chamber Cleaning</h3>
                  <p className="text-muted-foreground">
                    The smoke chamber accumulates creosote and is often missed by lesser services. We clean this critical area thoroughly.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Damper & Firebox Inspection</h3>
                  <p className="text-muted-foreground">
                    We inspect and clean your damper to ensure it seals properly. We clean the firebox and ash pit completely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Full System Inspection</h3>
                  <p className="text-muted-foreground">
                    We inspect the entire flue system for damage, cracks, or obstructions. Video inspection equipment used when needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    7
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Professional Cleanup</h3>
                  <p className="text-muted-foreground">
                    We remove all tarps and barriers and clean up thoroughly. You won't find a speck of soot or debris in your home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-2 border-primary bg-primary/5 p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">What Gets Cleaned</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Main flue (full length)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Smoke chamber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Firebox interior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Damper mechanism</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Ash pit and cleanout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>All joints and elbows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Creosote */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Creosote: Understanding the Enemy
            </h2>
            <p className="text-lg text-muted-foreground">
              Creosote is a byproduct of incomplete wood combustion that sticks to chimney walls and becomes progressively more dangerous over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border-2 border-yellow-500/20 bg-yellow-500/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-yellow-500/20 w-10 h-10 flex items-center justify-center">
                  <span className="text-lg font-bold text-yellow-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Stage 1: Light Creosote</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Fluffy, light-colored deposits that come off relatively easily with regular brushing.
              </p>
              <p className="text-sm font-medium text-yellow-700">Safe but needs regular cleaning</p>
            </div>

            <div className="rounded-lg border-2 border-orange-500/20 bg-orange-500/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-orange-500/20 w-10 h-10 flex items-center justify-center">
                  <span className="text-lg font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Stage 2: Sticky Creosote</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Dark, sticky, tar-like deposits that are harder to remove. Requires professional equipment.
              </p>
              <p className="text-sm font-medium text-orange-700">Professional cleaning needed</p>
            </div>

            <div className="rounded-lg border-2 border-destructive/20 bg-destructive/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-destructive/20 w-10 h-10 flex items-center justify-center">
                  <span className="text-lg font-bold text-destructive">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Stage 3: Glazed Creosote</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Hard, shiny, dark deposits that are extremely flammable and nearly impossible to remove without professional tools.
              </p>
              <p className="text-sm font-medium text-destructive">Severe fire risk—immediate attention required</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-6">
            <p className="text-center text-muted-foreground">
              <strong className="text-foreground">Most Seattle homeowners with regular fireplace use progress through these stages within 1-2 years.</strong> Professional cleaning once yearly prevents buildup from reaching dangerous levels.
            </p>
          </div>
        </div>
      </section>

      {/* How Often Should You Clean */}
      <section className="py-16 sm:py-24 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Chimney Cleaning: How Often?
            </h2>
            <p className="text-lg text-muted-foreground">
              The National Fire Protection Association (NFPA) recommends inspection and cleaning at least once per year.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Annual Cleaning</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Standard recommendation for wood-burning fireplaces in regular use.
              </p>
              <p className="text-sm font-medium text-primary">Baseline for safety</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-foreground">Heavy Use</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                5+ fires per week through winter.
              </p>
              <p className="text-sm font-medium text-orange-600">Every 6-8 months recommended</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Occasional Use</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                A few times per month during winter.
              </p>
              <p className="text-sm font-medium text-primary">Annual cleaning sufficient</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Gas Fireplaces</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Gas burns cleaner than wood.
              </p>
              <p className="text-sm font-medium text-primary">Annual inspection recommended</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-foreground">Unused Chimneys</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Animals nest, debris accumulates.
              </p>
              <p className="text-sm font-medium text-yellow-600">Annual inspection even if unused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 sm:py-24 bg-destructive/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Signs Your Chimney Needs Cleaning Now
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't wait for your annual appointment if you notice these warning signs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Smoke backing up into your home',
              'Fireplace smells musty or smoky',
              'Visible creosote on fireplace walls',
              'Difficulty getting fires to start',
              'Sparks or embers shooting out',
              'Animal sounds in the chimney',
              'Excessive soot falling in fireplace',
              'Strong tar-like odors'
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-card p-4">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{sign}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-destructive/10 border-2 border-destructive/20 p-6 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              If you notice any of these signs, call for professional cleaning immediately.
            </p>
            <p className="text-muted-foreground">Don't wait for the annual appointment.</p>
          </div>
        </div>
      </section>

      {/* Professional vs DIY */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional vs. DIY Chimney Cleaning
            </h2>
            <p className="text-lg text-muted-foreground">
              Why professional cleaning at $289.95 is the smart investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Professional Cleaning</h3>
              </div>
              
              <ul className="space-y-3">
                {[
                  'Safety equipment and training for roof work',
                  'Professional brushes reach all areas',
                  'Complete creosote removal—not just visible areas',
                  'Identifies cracks, damage, and problems',
                  'Proper technique prevents chimney damage',
                  'Professional containment—no soot in home',
                  'Written documentation and warranty',
                  'Peace of mind it\'s done right'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-2xl font-bold text-foreground mb-2">$289.95</p>
                <p className="text-sm text-muted-foreground">Includes complete cleaning + 21-point inspection</p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-destructive/20 w-12 h-12 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">DIY Cleaning Risks</h3>
              </div>
              
              <ul className="space-y-3">
                {[
                  'Falls from roofs cause serious injuries',
                  'Consumer equipment misses critical areas',
                  'Incomplete cleaning leaves fire risks',
                  'Can\'t identify internal cracks or damage',
                  'Wrong technique can damage liners',
                  'Soot throughout the house',
                  'No documentation for insurance',
                  'False sense of security'
                ].map((risk, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{risk}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-destructive/20">
                <p className="text-lg font-semibold text-foreground mb-2">Real Cost of DIY</p>
                <p className="text-sm text-muted-foreground">
                  Equipment: $100-300 • Your time: Several hours • Risk: One chimney fire costs $5,000-10,000 in damage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Benefits */}
      <section className="py-16 sm:py-24 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Chimney Cleaning & Your Fireplace Efficiency
            </h2>
            <p className="text-lg text-muted-foreground">
              A clean chimney performs dramatically better than a dirty one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <Wind className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Better Draft</h3>
              <p className="text-sm text-muted-foreground">
                Creosote restricts airflow. Cleaning removes restrictions, allowing hot gases to exit quickly and efficiently.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <Flame className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Complete Combustion</h3>
              <p className="text-sm text-muted-foreground">
                Good draft means wood burns more completely. More heat in your home, less smoke, less creosote.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <Droplets className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Reduced Smoke</h3>
              <p className="text-sm text-muted-foreground">
                Proper draft prevents smoke from backing up into your living space.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <ThermometerSun className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Lower Heating Costs</h3>
              <p className="text-sm text-muted-foreground">
                Many Seattle homeowners report using 20-30% less wood after professional cleaning.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Equipment Life</h3>
              <p className="text-sm text-muted-foreground">
                Professional cleaning slows deterioration and extends the life of your fireplace and chimney.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mad Hatter */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Seattle Homeowners Choose Mad Hatter
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">45+ Years Local</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Serving Seattle since 1979. We know this climate and what Seattle chimneys need.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Master Certified</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Highest industry credential. Current training, proven techniques, national safety standards.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">21-Point Inspection</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Every cleaning includes comprehensive assessment. You know your chimney's complete condition.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Home Protection</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional containment, careful work, thorough cleanup. Your home stays clean.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Transparent Pricing</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                $289.95 standard service. No hidden fees, no surprise charges.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Honest Communication</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We explain findings in plain language. Only recommend what your chimney actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Schedule Your Seattle Chimney Cleaning Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90 text-pretty">
            Professional chimney cleaning prevents fires, protects your family from carbon monoxide, improves heating efficiency, and extends your chimney's life.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-8 py-4 text-base font-semibold text-foreground shadow-lg hover:bg-background/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Now for Service
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              Request Quote
            </Link>
          </div>

          <p className="text-sm mt-6 text-primary-foreground/80">
            Same-day and next-day service available throughout Seattle and King County
          </p>
        </div>
      </section>
    </div>
  )
}
