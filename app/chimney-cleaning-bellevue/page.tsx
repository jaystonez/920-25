import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Shield, Flame, Wind, Eye, CheckCircle, AlertTriangle, Clock, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chimney Cleaning Bellevue | Professional Creosote Removal - Mad Hatter',
  description: 'Professional chimney cleaning in Bellevue. 45+ years of certified expertise removing dangerous creosote buildup. Master certified sweeps. Same-day service available.',
}

export default function ChimneyCleaningBellevuePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-background border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Serving Bellevue & Eastside Communities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Chimney Cleaning Bellevue: Professional Creosote Removal & Fireplace Maintenance
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional chimney cleaning is the most important maintenance step for any Bellevue homeowner with a fireplace. Creosote—the flammable byproduct of burning wood—accumulates inside your chimney with every fire. Left unchecked, it creates genuine fire hazards that threaten your home and family. Mad Hatter Chimney Sweep has provided Bellevue residents with thorough, certified chimney cleaning for over 45 years.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Bellevue homeowners expect quality. When you schedule chimney cleaning, you want a company that does meticulous work, protects your home, explains every finding, and delivers results you can trust. That's exactly what Mad Hatter brings to every Bellevue home we service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="tel:206-659-9090"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (206) 659-9090
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Service
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Master Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Same-Day Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>45+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Cleaning Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Professional Chimney Cleaning Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional cleaning protects your Bellevue home from fire hazards, carbon monoxide exposure, and expensive damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-destructive/10 text-destructive rounded-lg mb-4">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fire Prevention</h3>
              <p className="text-muted-foreground text-sm">
                Remove all stages of dangerous creosote before they reach ignition levels. Stage 3 creosote can ignite at 1,000°F and burn at 2,000+ degrees.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-destructive/10 text-destructive rounded-lg mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Carbon Monoxide Safety</h3>
              <p className="text-muted-foreground text-sm">
                Ensure proper venting of dangerous gases. Creosote and debris restrict airflow, forcing CO back into your home.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                <Wind className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Heating Efficiency</h3>
              <p className="text-muted-foreground text-sm">
                Restore strong draft and complete combustion. Clean chimneys heat better, burn wood completely, and waste less energy.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Early Problem Detection</h3>
              <p className="text-muted-foreground text-sm">
                Identify cracks, water damage, and deterioration during cleaning. Catch problems early when repairs are affordable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creosote Stages */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Understanding the Creosote Threat
            </h2>
            <p className="text-lg text-muted-foreground">
              Every wood fire produces creosote that progresses through increasingly dangerous stages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border-2 border-yellow-500/20 rounded-lg p-6">
              <div className="inline-flex items-center justify-center bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Stage 1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Light & Fluffy</h3>
              <p className="text-muted-foreground mb-4">
                Relatively easy to remove. Present after just a few fires. Appears as a soft, sooty deposit.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Risk Level:</strong> Moderate - Still flammable and accumulates quickly.
              </p>
            </div>

            <div className="bg-card border-2 border-orange-500/20 rounded-lg p-6">
              <div className="inline-flex items-center justify-center bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Stage 2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Sticky & Tar-Like</h3>
              <p className="text-muted-foreground mb-4">
                Harder to remove, requires professional equipment. Develops with regular use over weeks and months.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Risk Level:</strong> High - More flammable and difficult to remove completely.
              </p>
            </div>

            <div className="bg-card border-2 border-destructive/20 rounded-lg p-6">
              <div className="inline-flex items-center justify-center bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-medium mb-4">
                Stage 3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Hard & Glazed</h3>
              <p className="text-muted-foreground mb-4">
                Extremely dangerous. Ignites at ~1,000°F and burns at 2,000+ degrees. Very difficult to remove.
              </p>
              <p className="text-sm text-destructive font-medium">
                <strong>Risk Level:</strong> Extreme - Can crack liners, destroy mortar, and spread fire into walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Cleaning Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Professional Cleaning Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Systematic, thorough service designed for complete creosote removal and home protection.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: '1',
                title: 'Home Preparation',
                description: 'Professional barriers and protective tarps seal your fireplace opening. All dust, soot, and debris contained within the fireplace area. Your home stays completely clean.'
              },
              {
                step: '2',
                title: 'Top-Down Cleaning',
                description: 'Professional-grade brushes and rods precisely sized for your chimney. Working downward from the roofline, we dislodge all creosote from the full flue length.'
              },
              {
                step: '3',
                title: 'Smoke Chamber Cleaning',
                description: 'Thorough cleaning of this critical area where creosote accumulates heavily. Many services skip this—we never do.'
              },
              {
                step: '4',
                title: 'Complete System Cleaning',
                description: 'Main flue, smoke chamber, flue elbows and joints, firebox, damper, and ash pit—every component cleaned thoroughly.'
              },
              {
                step: '5',
                title: '21-Point Inspection',
                description: 'Comprehensive system assessment included with every cleaning. Written report documenting crown, flashing, mortar, bricks, liner, smoke chamber, damper, and firebox condition.'
              },
              {
                step: '6',
                title: 'Professional Cleanup',
                description: 'Complete removal of barriers and materials. Hearth cleaned thoroughly. Your home left exactly as we found it—no soot or debris anywhere.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-card border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-primary/10 border-2 border-primary/20 rounded-lg p-6">
              <p className="text-lg font-semibold text-foreground mb-2">
                Standard Service: $289.95
              </p>
              <p className="text-muted-foreground">
                Includes complete cleaning and full 21-point inspection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Frequency */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Often Should Bellevue Homeowners Clean?
            </h2>
            <p className="text-lg text-muted-foreground">
              Cleaning frequency depends on how you use your fireplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: 'Annual Cleaning',
                frequency: 'Once per year',
                description: 'NFPA recommends at least annual cleaning for any fireplace in regular use. This is the baseline for safety.'
              },
              {
                icon: Flame,
                title: 'Heavy Use',
                frequency: 'Every 6-8 months',
                description: 'If you burn wood 5+ times per week through winter, creosote accumulates faster. More frequent cleaning is essential.'
              },
              {
                icon: Home,
                title: 'Occasional Use',
                frequency: 'Once per year',
                description: 'Even a few fires per month produce creosote that accumulates over time. Annual cleaning is sufficient but don\'t skip it.'
              },
              {
                icon: Wind,
                title: 'Gas Fireplaces',
                frequency: 'Annual inspection',
                description: 'Gas burns cleaner than wood, but annual inspection verifies safe operation, proper venting, and equipment condition.'
              },
              {
                icon: Eye,
                title: 'Unused Fireplaces',
                frequency: 'Annual inspection',
                description: 'Even unused chimneys need inspection. Animals nest, debris accumulates, and deterioration occurs regardless of use.'
              },
              {
                icon: AlertTriangle,
                title: 'After Problems',
                frequency: 'Immediate service',
                description: 'After chimney fires, smoke backup, or water intrusion—professional assessment before using again.'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{item.frequency}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 md:py-24 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 text-destructive rounded-full mb-4">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Signs Your Chimney Needs Immediate Cleaning
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't wait for your annual appointment if you notice any of these warning signs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              'Smoke entering your home during fires',
              'Strong musty or tar-like odors from the fireplace',
              'Visible dark, crusty deposits on firebox walls',
              'Difficulty getting fires started or keeping them burning',
              'Excessive soot falling into the fireplace',
              'Sparks or embers shooting from the chimney top',
              'Cracking or popping sounds during fires',
              'Water stains on walls near the chimney'
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3 bg-card border border-destructive/20 rounded-lg p-4">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{sign}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-destructive mb-4">
              If you notice any of these signs, stop using your fireplace and call for professional service immediately.
            </p>
            <Link 
              href="tel:206-659-9090"
              className="inline-flex items-center justify-center gap-2 bg-destructive text-destructive-foreground hover:bg-destructive/90 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              Emergency Service: (206) 659-9090
            </Link>
          </div>
        </div>
      </section>

      {/* Professional vs DIY */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional vs. DIY Cleaning
            </h2>
            <p className="text-lg text-muted-foreground">
              Why professional cleaning is worth the investment for Bellevue homeowners.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 border-2 border-primary rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Professional Cleaning</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Safety: Professional equipment and insurance for rooftop work',
                  'Thoroughness: Reaches smoke chamber, elbows, and interior surfaces',
                  'Expertise: Identifies problems during cleaning that untrained eyes miss',
                  'Mess Containment: Professional barriers keep your home spotless',
                  'Documentation: Written inspection report for insurance and records',
                  'Proper Equipment: Professional-grade brushes sized for your chimney'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t">
                <p className="text-lg font-semibold text-primary">
                  Investment: $289.95
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete service with 21-point inspection included
                </p>
              </div>
            </div>

            <div className="bg-muted/30 border-2 border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground">DIY Cleaning</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Safety Risk: Falls from roofs cause serious injuries and deaths',
                  'Incomplete: Consumer brushes miss smoke chamber and elbows',
                  'No Expertise: Can\'t identify cracks, water damage, or deterioration',
                  'Messy: Frequently results in soot throughout the house',
                  'No Documentation: No proof of maintenance for insurance',
                  'Wrong Tools: Consumer brushes may damage liner if oversized'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t">
                <p className="text-lg font-semibold text-muted-foreground">
                  Hidden Costs
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Potential damage from incomplete work, missed safety issues, and cleanup expenses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bellevue Neighborhoods */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bellevue Neighborhoods We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional chimney cleaning throughout all of Bellevue and surrounding communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Downtown Bellevue',
              'West Bellevue',
              'Medina',
              'Clyde Hill',
              'Woodridge',
              'Newport',
              'Somerset',
              'Crossroads',
              'Factoria',
              'Lake Hills',
              'Eastgate',
              'Lakemont'
            ].map((neighborhood, index) => (
              <div key={index} className="flex items-center gap-2 bg-card border rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mad Hatter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Bellevue Chooses Mad Hatter
            </h2>
            <p className="text-lg text-muted-foreground">
              Meticulous service that Bellevue homeowners trust for over 45 years.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: '45+ Years Local Expertise',
                description: 'Serving Bellevue since 1979. We understand these homes, this climate, and what Bellevue chimneys need.'
              },
              {
                icon: CheckCircle,
                title: 'Master Certified',
                description: 'Highest industry credential. Current training, proven techniques, national safety standards.'
              },
              {
                icon: Eye,
                title: '21-Point Inspection Included',
                description: 'Every cleaning comes with comprehensive system assessment. You know your chimney\'s complete condition.'
              },
              {
                icon: Home,
                title: 'Meticulous Home Protection',
                description: 'Professional containment, careful work, thorough cleanup. We respect Bellevue\'s quality homes.'
              },
              {
                icon: CheckCircle,
                title: 'Transparent Pricing',
                description: '$289.95 standard service. No hidden fees, no surprise charges. You know exactly what you\'re paying.'
              },
              {
                icon: Shield,
                title: 'Honest Communication',
                description: 'We explain what we find in plain language and recommend only what your chimney actually needs.'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Schedule Your Bellevue Chimney Cleaning
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Professional chimney cleaning prevents fires, protects your family from carbon monoxide, improves heating efficiency, and extends your chimney's life. It's the essential maintenance your fireplace requires.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="tel:206-659-9090"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (206) 659-9090
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Online
              </Link>
            </div>

            <p className="text-muted-foreground">
              <strong className="text-foreground">Same-day and next-day service available throughout Bellevue.</strong>
              <br />
              45 years of certified expertise. Meticulous service Bellevue homeowners trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
