import { Phone, CheckCircle2, Flame, Shield, Wind, Eye, Wrench, MapPin, Award, Users, FileCheck, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Chimney Sweep Redmond | Professional Cleaning & Inspection | Mad Hatter',
  description: 'Certified chimney sweep services in Redmond. Professional cleaning, 21-point inspection, and repair. Serving Education Hill, Grass Lawn, Novelty Hill. 45+ years experience.',
}

export default function ChimneySweepRedmond() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600?text=Redmond+homes+with+fireplace+chimneys+and+modern+architecture')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Serving Redmond Since 1979</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Redmond: Professional Cleaning & Inspection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Certified chimney service for Redmond homes. From Education Hill to Novelty Hill, we provide thorough cleaning, comprehensive inspection, and expert repair for every Redmond neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:206-284-8444"
                className="inline-flex items-center justify-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                206-284-8444
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Service
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Master Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>45+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>21-Point Inspection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Cleaning Matters */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Professional Cleaning Matters
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Every fire deposits creosote inside your chimney—the leading cause of residential chimney fires. Professional cleaning removes dangerous deposits, improves efficiency, and catches problems early.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Flame className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fire Prevention</h3>
              <p className="text-muted-foreground">
                Creosote ignites at 1,000°F, creating chimney fires reaching 2,000°F+ that crack liners and spread into walls. Professional cleaning eliminates this risk.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Carbon Monoxide Safety</h3>
              <p className="text-muted-foreground">
                Blocked chimneys cause deadly carbon monoxide to back up into your home. Professional cleaning ensures dangerous gases vent safely outside.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Better Performance</h3>
              <p className="text-muted-foreground">
                Clean chimneys draw properly. Strong draft means complete combustion, faster heating, and less firewood consumed.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Early Detection</h3>
              <p className="text-muted-foreground">
                During cleaning, we inspect your entire system and catch cracks, deterioration, and damage before they become expensive emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Cleaning Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Chimney Cleaning Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Our professional cleaning addresses every surface in your chimney system using industry-leading equipment and techniques.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Full Creosote Removal</h4>
                    <p className="text-muted-foreground text-sm">All three stages of creosote removed from full flue, smoke chamber, firebox, and damper assembly</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Top-Down Professional Method</h4>
                    <p className="text-muted-foreground text-sm">Starting at roofline with professional brushes sized for your chimney—gravity assists removal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">21-Point Inspection Included</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive system evaluation with written report, photographs, and prioritized recommendations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Home Protection</h4>
                    <p className="text-muted-foreground text-sm">Complete containment at fireplace keeps your home pristine throughout the process</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">$289.95</span>
                  <span className="text-muted-foreground">starting price</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Includes complete cleaning and full 21-point inspection
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">What Gets Cleaned</h3>
              <div className="space-y-3">
                {[
                  'Main flue—full length, all surfaces',
                  'Smoke chamber—where gases collect before flue',
                  'Firebox—complete interior cleaning',
                  'Damper—cleaned and tested for operation',
                  'Ash pit—cleared of accumulated debris',
                  'Flue elbows and joints—hard-to-reach areas',
                  'All connection points and transitions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21-Point Inspection */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive 21-Point Inspection
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Every cleaning includes systematic evaluation of your complete chimney system. You receive detailed documentation suitable for your records and any real estate transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exterior Assessment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Chimney crown condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flashing integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Mortar joint strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Brick and stone condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Chimney cap function</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Structural stability</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Interior & Flue</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creosote accumulation levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flue integrity via video camera</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Liner condition assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Smoke chamber integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Damper operation and sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Firebox condition</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">System Function</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Draft performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Venting safety verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Water intrusion evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Animal entry signs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Overall deterioration rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Safety compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Chimney Repair
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Redmond's wet winters and freeze-thaw cycles take a toll on chimneys. When damage occurs, professional repair restores safety and function.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Flashing Repair',
                description: 'Repair or replace deteriorated flashing at chimney-to-roof junction—the most common leak source'
              },
              {
                title: 'Mortar Repointing',
                description: 'Remove failed mortar and replace with fresh mortar matched to original composition and color'
              },
              {
                title: 'Crown Repair',
                description: 'Seal minor cracks or rebuild extensively damaged crowns with proper slope and materials'
              },
              {
                title: 'Brick Replacement',
                description: 'Replace spalling or damaged bricks with matching replacements for structural strength'
              },
              {
                title: 'Liner Installation',
                description: 'Install modern stainless steel liners for cracked or deteriorated originals'
              },
              {
                title: 'Chimney Cap',
                description: 'Install quality caps that prevent water, animals, and debris while maintaining draft'
              }
            ].map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redmond Neighborhoods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Redmond Neighborhoods We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional chimney service throughout all Redmond communities—from downtown to Novelty Hill.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Downtown Redmond', detail: 'Older homes with established chimneys' },
              { name: 'Education Hill', detail: 'Family homes with well-used fireplaces' },
              { name: 'Grass Lawn', detail: 'Mixed-age homes, varied services' },
              { name: 'Overlake', detail: 'Newer construction, modern systems' },
              { name: 'Idylwood', detail: 'Established neighborhood, aging chimneys' },
              { name: 'Willows/Rose Hill', detail: 'Quality homes deserving quality service' },
              { name: 'Novelty Hill/Union Hill', detail: 'Larger properties, substantial chimneys' },
              { name: 'Bear Creek', detail: 'Wooded areas, heavy fireplace use' }
            ].map((neighborhood, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{neighborhood.name}</h3>
                    <p className="text-sm text-muted-foreground">{neighborhood.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Redmond Trusts Mad Hatter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Redmond Homeowners Trust Mad Hatter
            </h2>
            <p className="text-lg text-primary-foreground/90">
              45+ years of certified expertise serving Redmond families with quality chimney care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Award className="h-8 w-8 mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">45+ Years Experience</h3>
              <p className="text-primary-foreground/80">
                Serving the greater Eastside since 1979. That experience means we've seen every chimney problem and know how to fix it.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Award className="h-8 w-8 mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">Master Certified</h3>
              <p className="text-primary-foreground/80">
                Certified Master Chimney Sweep—the highest credential in the industry. Current training, proper technique, national standards.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <FileCheck className="h-8 w-8 mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">21-Point Inspection</h3>
              <p className="text-primary-foreground/80">
                Comprehensive assessment included with every cleaning. We examine your entire system and report what we find.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Users className="h-8 w-8 mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-primary-foreground/80">
                $289.95 standard service. Detailed repair estimates before work begins. No hidden fees, no surprise charges.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Shield className="h-8 w-8 mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">Respect Your Home</h3>
              <p className="text-primary-foreground/80">
                We protect your property during service, work cleanly, and clean up thoroughly. Redmond homeowners expect quality—we deliver it.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <CheckCircle2 className="h-8 w-8 mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">Complete Service</h3>
              <p className="text-primary-foreground/80">
                Cleaning, inspection, repair, installation—we handle everything chimney-related. One trusted company for all needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chimney Safety for Redmond Families
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential safety practices every Redmond fireplace owner should follow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Annual Service is Essential
              </h3>
              <p className="text-sm text-muted-foreground">
                The NFPA recommends annual inspection and cleaning. This single step prevents the majority of chimney-related incidents.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Use Seasoned Wood Only
              </h3>
              <p className="text-sm text-muted-foreground">
                Green or wet wood produces more creosote. Burn only properly seasoned hardwood (dried 6-12 months minimum) to reduce buildup.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Install CO Detectors
              </h3>
              <p className="text-sm text-muted-foreground">
                Every home with a fireplace should have carbon monoxide detectors on every level. Test them monthly.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Don't Ignore Warning Signs
              </h3>
              <p className="text-sm text-muted-foreground">
                Smoke backing up, unusual odors, visible damage, water stains near chimney—call for professional service immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Redmond Chimney Service
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90 text-pretty">
            Professional maintenance prevents fires, protects your family, improves efficiency, and extends your chimney's lifespan. Same-day and next-day service available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:206-284-8444"
              className="inline-flex items-center justify-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              206-284-8444
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Online
            </Link>
          </div>

          <p className="mt-8 text-primary-foreground/80">
            45 years of certified expertise. Thousands of satisfied Redmond customers.
          </p>
        </div>
      </section>
    </div>
  )
}
