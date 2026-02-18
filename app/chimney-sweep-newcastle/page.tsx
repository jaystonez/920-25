import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Chimney Sweep Newcastle | Professional Cleaning & Inspection',
  description: 'Newcastle chimney sweep services by Mad Hatter. Certified cleaning, inspection & repair for hillside homes. 45+ years serving Newcastle. Call for same-day service.',
}

export default function NewcastleChimneySweepPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600?text=Newcastle+hillside+homes+with+dramatic+Lake+Washington+views+and+exposed+chimneys')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Serving Newcastle Since 1979
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Newcastle: Professional Cleaning & Inspection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Expert chimney care for Newcastle's hillside homes. Certified cleaning, comprehensive inspection, and professional repair services for properties with elevated weather exposure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:206-679-3920">
                  <Phone className="mr-2 h-5 w-5" />
                  (206) 679-3920
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                <Link href="/contact">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Newcastle sits perched above Lake Washington with some of the most stunning views on the Eastside—and some of the most weather-exposed chimneys. The hillside terrain that gives Newcastle homes their dramatic sightlines also exposes chimney systems to wind, rain, and temperature swings that accelerate deterioration. Mad Hatter Chimney Sweep has provided Newcastle homeowners with certified professional chimney service for over 45 years.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the upscale developments of Newcastle Hills and Olympus to the established homes along Coal Creek Parkway, Newcastle properties feature quality construction with fireplaces built for regular use. These systems deserve the expert care that keeps them safe, efficient, and structurally sound.
            </p>
          </div>
        </div>
      </section>

      {/* Why Newcastle Chimneys Need Attention */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Newcastle Chimneys Need Professional Attention</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Elevated Exposure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Newcastle's hillside location means chimneys face more wind and weather than homes in sheltered valleys. Wind-driven rain penetrates mortar joints and flashing more aggressively. Temperature fluctuations are more extreme at elevation. This additional exposure accelerates deterioration, making annual inspection especially important.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Quality Homes, Quality Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Newcastle's residential character leans toward well-built homes with substantial fireplace installations. Many properties feature large masonry chimneys, premium stone surrounds, and multiple fireplace systems. These represent significant investment and require technicians who understand complex, high-end chimney configurations.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Active Use Through Winter</h3>
              <p className="text-muted-foreground leading-relaxed">
                Newcastle residents use their fireplaces frequently from October through April. The cooler temperatures at elevation and the comfort of gathering around a fire in homes with sweeping views means regular burning—and regular creosote accumulation that needs professional removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Professional Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Complete Chimney Cleaning</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We remove all creosote from your chimney system—full flue length, smoke chamber, firebox, and damper—using professional equipment sized for your specific chimney. Your home stays completely clean throughout thanks to professional containment.
              </p>
              <p className="text-primary font-semibold text-lg">Starting at $289.95</p>
              <p className="text-sm text-muted-foreground">Includes 21-point inspection</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every cleaning includes systematic evaluation of your complete chimney. We examine:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Crown, cap, and flashing condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mortar and masonry integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Liner, smoke chamber, damper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Overall structure and safety</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">Written report with photographs provided</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Chimney Repair</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional repair services including:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Crown repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Flashing restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mortar repointing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Chimney cap installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Liner replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Brick and stone repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Waterproofing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newcastle Neighborhoods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Newcastle Neighborhoods We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Newcastle Hills</h3>
              <p className="text-muted-foreground text-sm">Premium developments with substantial chimney systems</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Olympus</h3>
              <p className="text-muted-foreground text-sm">Quality homes with panoramic views and weather exposure</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Coal Creek</h3>
              <p className="text-muted-foreground text-sm">Established neighborhood near the natural area</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Lake Boren</h3>
              <p className="text-muted-foreground text-sm">Residential area with varied home styles</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">China Wall / May Creek</h3>
              <p className="text-muted-foreground text-sm">Homes along the southern corridor</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Newcastle Golf Club</h3>
              <p className="text-muted-foreground text-sm">Upscale properties with quality construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mad Hatter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Newcastle Trusts Mad Hatter</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">45+</div>
              <p className="text-primary-foreground/90 font-medium">Years of Eastside Expertise</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Serving Newcastle since 1979</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Master</div>
              <p className="text-primary-foreground/90 font-medium">Chimney Sweep Certification</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Highest industry credential</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Premium</div>
              <p className="text-primary-foreground/90 font-medium">Home Experience</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Quality care for quality homes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Complete</div>
              <p className="text-primary-foreground/90 font-medium">Service Range</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Cleaning, inspection, repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Your Newcastle Chimney Service</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Annual professional service protects your home, your family, and your chimney investment. Same-day and next-day service available throughout Newcastle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:206-679-3920">
                <Phone className="mr-2 h-5 w-5" />
                Call (206) 679-3920
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Request Service Online</Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-8">
            <strong>45 years of certified expertise protecting Newcastle families.</strong>
          </p>
        </div>
      </section>
    </div>
  )
}
