import { Phone, Shield, Flame, Wind, Home, CheckCircle, AlertTriangle, Clock, Gauge, Droplets } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fireplace Cleaning Service | Professional Cleaning & Safety | Mad Hatter',
  description: 'Professional fireplace cleaning for safe, efficient operation. Expert creosote removal, damper service, and complete system cleaning. 45+ years serving Seattle.',
}

export default function FireplaceCleaningPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Fireplace Cleaning: Professional Service for Safe, Efficient Operation
          </h1>
          <p className="text-lg md:text-xl mb-8 text-pretty leading-relaxed opacity-95">
            A clean fireplace is a safe fireplace. Whether you burn wood, use gas, or have a decorative fireplace you're thinking about using again, professional cleaning ensures safe operation, prevents fire hazards, and improves heating efficiency. Mad Hatter Chimney Sweep has provided professional fireplace cleaning across the greater Seattle area for over 45 years.
          </p>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Fireplace cleaning goes beyond sweeping out ashes. Professional service addresses the entire system—firebox, damper, smoke chamber, flue, and chimney—removing creosote, soot, debris, and obstructions that compromise safety and performance. A truly clean fireplace operates better, heats better, and protects your family.
          </p>
        </div>
      </section>

      {/* Why Essential Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why Professional Fireplace Cleaning is Essential
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Professional fireplace cleaning protects your home and family from serious hazards while improving performance and efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fire Prevention */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Flame className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fire Prevention</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every wood fire produces creosote—a flammable, tar-like substance that coats the interior surfaces of your fireplace and chimney. As creosote accumulates, it progresses through three increasingly dangerous stages.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Stage 3, creosote can ignite at temperatures around 1,000 degrees Fahrenheit. A creosote fire burns at 2,000+ degrees—hot enough to crack chimney liners, destroy mortar, warp metal components, and spread fire into your home's walls and attic.
              </p>
              <p className="font-semibold text-foreground">
                Professional cleaning removes all stages of creosote from every surface, eliminating this fire risk.
              </p>
            </div>

            {/* Carbon Monoxide Safety */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Wind className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Carbon Monoxide Safety</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your fireplace produces carbon monoxide during combustion. Normally, this gas vents safely up the chimney and outside. But when the chimney is blocked by creosote, debris, or animal nests, carbon monoxide backs up into your living space.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Carbon monoxide is colorless and odorless. It causes headaches, nausea, confusion, and death.
              </p>
              <p className="font-semibold text-foreground">
                Professional fireplace cleaning ensures your venting system works properly, keeping this dangerous gas outside where it belongs.
              </p>
            </div>

            {/* Heating Efficiency */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Gauge className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Heating Efficiency</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A dirty fireplace doesn't heat well. Creosote restricts airflow through the chimney, reducing draft. Poor draft means incomplete combustion—your wood smolders instead of burning cleanly, producing more smoke, less heat, and more creosote.
              </p>
              <p className="font-semibold text-foreground">
                Professional cleaning restores full airflow. Your fireplace draws strongly, wood burns completely, and more heat enters your home. Many homeowners notice a dramatic improvement in heating performance after cleaning.
              </p>
            </div>

            {/* Air Quality */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Air Quality</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A poorly functioning fireplace sends smoke into your living space. Even small amounts of smoke reduce indoor air quality, aggravate allergies and respiratory conditions, and leave odors in furniture and fabrics.
              </p>
              <p className="font-semibold text-foreground">
                Professional cleaning ensures smoke goes up the chimney, not into your rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Professional Fireplace Cleaning Includes
            </h2>
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</span>
                  Firebox Cleaning
                </h3>
                <ul className="space-y-2 ml-11">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Complete ash and debris removal from firebox and ash pit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Soot removal from walls and ceiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Creosote removal from all firebox surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Inspection for cracks and deterioration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</span>
                  Damper Cleaning and Testing
                </h3>
                <ul className="space-y-2 ml-11">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Remove soot, creosote, and rust from damper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Verify damper opens fully for proper draft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Test that damper closes completely for energy efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Identify warping, corrosion, or malfunction issues</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</span>
                  Smoke Chamber Cleaning
                </h3>
                <p className="text-muted-foreground ml-11 mb-3">
                  The smoke chamber sits above the damper and below the flue where hot gases collect. It's one of the most critical areas to clean and one of the most frequently neglected.
                </p>
                <ul className="space-y-2 ml-11">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Remove creosote from all smoke chamber surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Clean walls, corners, and transition area into flue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Address primary ignition point for chimney fires</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">4</span>
                  Flue and Chimney Cleaning
                </h3>
                <ul className="space-y-2 ml-11">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional brushes sized for your specific flue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Remove all creosote from full flue length</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Thorough cleaning of flue elbows and transitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Inspect and clean flue connections and joints</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">5</span>
                  Chimney Cap and Crown
                </h3>
                <ul className="space-y-2 ml-11">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Clear debris and nesting material from cap and screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Examine crown for cracks or water damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Different Fireplace Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Different Fireplace Types, Different Cleaning Needs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Wood-Burning Fireplaces</h3>
                <p className="text-muted-foreground mb-3">
                  Produce the most creosote and require the most frequent cleaning. Annual cleaning is minimum. Heavy users (5+ fires/week) need service every 6-8 months.
                </p>
                <p className="text-sm text-muted-foreground">
                  Includes: firebox, damper, smoke chamber, flue, and chimney exterior
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Gas Fireplaces</h3>
                <p className="text-muted-foreground mb-3">
                  Burn cleaner than wood—no creosote. Still need annual inspection because gas logs accumulate soot, pilot lights need verification, and venting must be checked.
                </p>
                <p className="text-sm text-muted-foreground">
                  Focus: burner assembly, logs, glass, venting, thermocouple, and safety systems
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Wood Stoves and Inserts</h3>
                <p className="text-muted-foreground mb-3">
                  Produce significant creosote—often more than open fireplaces because they burn at lower temperatures, promoting creosote formation.
                </p>
                <p className="text-sm text-muted-foreground">
                  Includes: stove interior, baffle, catalytic combustor, stovepipe, flue, gasket inspection
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Pellet Stoves</h3>
                <p className="text-muted-foreground mb-3">
                  Burn compressed wood pellets and produce less creosote than traditional wood, but create ash and carbon deposits requiring regular cleaning.
                </p>
                <p className="text-sm text-muted-foreground">
                  Includes: burn pot, heat exchanger, exhaust vent, auger, electrical, and ignition systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Cleaning */}
      <section className="py-16 md:py-24 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Signs Your Fireplace Needs Cleaning Now
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              {'Don\'t wait for your annual appointment if you notice:'}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-card border border-destructive/20 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Smoke Entering Room</h3>
                  <p className="text-sm text-muted-foreground">Indicates blockage, draft problems, or heavy buildup</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card border border-destructive/20 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Strong Odors</h3>
                  <p className="text-sm text-muted-foreground">Creosote has distinctive musty, tar-like smell</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card border border-destructive/20 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Visible Deposits</h3>
                  <p className="text-sm text-muted-foreground">Dark, crusty buildup on firebox walls or damper</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card border border-destructive/20 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Difficulty Starting Fires</h3>
                  <p className="text-sm text-muted-foreground">Poor draft from restricted airflow makes fires sluggish</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card border border-destructive/20 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Excessive Soot</h3>
                  <p className="text-sm text-muted-foreground">Black soot falling into firebox or coating hearth</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card border border-destructive/20 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Animal Sounds/Odors</h3>
                  <p className="text-sm text-muted-foreground">Creatures block flue and create hazards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Frequency */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Often Should You Clean?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Wood Fireplaces</h3>
                  <p className="text-muted-foreground">At least annually. More often with heavy use (5+ fires per week every 6-8 months).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gas Fireplaces</h3>
                  <p className="text-muted-foreground">Annual inspection, cleaning as needed based on findings.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Wood Stoves/Inserts</h3>
                  <p className="text-muted-foreground">At least annually. Heavy users every 6-8 months due to higher creosote production.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Pellet Stoves</h3>
                  <p className="text-muted-foreground">Annual professional cleaning plus regular owner maintenance throughout the season.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Unused Fireplaces</h3>
                  <p className="text-muted-foreground">{'Annual inspection even if not in use—animals and deterioration don\'t wait for you to light a fire.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional vs DIY */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional vs. DIY Fireplace Cleaning
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">What You Can Do</h3>
              <p className="leading-relaxed opacity-95 mb-4">
                Regular ash removal, wiping glass doors, and keeping the hearth clean. These are appropriate homeowner tasks.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">What Requires a Professional</h3>
              <p className="leading-relaxed opacity-95 mb-4">
                Creosote removal, flue cleaning, smoke chamber cleaning, damper service, and system inspection. These tasks require specialized equipment, training, and knowledge.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg leading-relaxed opacity-95">
              Professional cleaning costs <span className="font-bold">$289.95</span> at Mad Hatter—including our 21-point inspection. The cost of a chimney fire, carbon monoxide incident, or major repair makes professional cleaning the obvious investment.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Professional Fireplace Cleaning
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Your fireplace is meant to provide warmth, comfort, and ambiance. Professional cleaning ensures it does so safely and efficiently. Don't wait until a problem develops—annual professional cleaning prevents the vast majority of fireplace-related hazards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="tel:425-409-2344"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (425) 409-2344
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg"
            >
              Schedule Online
            </Link>
          </div>

          <p className="text-muted-foreground">
            Master certified technicians • 45+ years of experience • Same-day service available throughout the greater Seattle area
          </p>
        </div>
      </section>
    </main>
  )
}
