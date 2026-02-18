import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Chimney Sweep Woodinville | Professional Cleaning & Inspection',
  description: 'Professional chimney sweep services in Woodinville. 45+ years experience. Master certified. Complete cleaning, inspection & repair. Same-day service available.',
}

export default function ChimneySweepWoodinvillePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Serving Woodinville Since 1979
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Chimney Sweep Woodinville: Professional Cleaning & Inspection
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Woodinville homeowners rely on their fireplaces through the long, wet winters of the Pacific Northwest. Surrounded by the Sammamish River Valley's lush landscape and the foothills of the Cascades, Woodinville properties face constant moisture exposure that takes a toll on chimney systems. Mad Hatter Chimney Sweep has provided Woodinville residents with certified professional chimney service for over 45 years.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="tel:+1234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Woodinville Chimneys Need Care */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Why Woodinville Chimneys Need Professional Care
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
              Woodinville's valley location, wooded properties, and active fireplace use create unique chimney challenges
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Moisture and Rainfall</h3>
              <p className="text-muted-foreground">
                Over 40 inches of annual rainfall in a valley that traps moisture. This persistent dampness attacks chimney mortar, crowns, flashing, and masonry relentlessly. Professional inspection catches moisture damage early.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Wooded Properties & Wildlife</h3>
              <p className="text-muted-foreground">
                Mature trees drop debris on chimneys, creating moisture traps. Raccoons, squirrels, and birds frequently nest in flues—blocking them and creating fire hazards from nesting materials.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Heavy Fireplace Use</h3>
              <p className="text-muted-foreground">
                Woodinville's cooler valley microclimate means 6 months of regular burning from October through April. This produces significant creosote accumulation requiring professional removal to prevent chimney fires.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Mix of Home Ages</h3>
              <p className="text-muted-foreground">
                From older farmstead properties and 1970s-80s developments to modern custom homes. Each era presents different chimney challenges requiring specialized expertise and maintenance approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Our Professional Services
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
              Complete chimney care from certified Master Chimney Sweep professionals
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">Chimney Cleaning</h3>
              <p className="mb-4 text-muted-foreground">
                Complete creosote removal from main flue, smoke chamber, firebox, damper, and all joints. Professional equipment sized for your specific flue. Your home stays completely clean throughout.
              </p>
              <div className="mt-auto">
                <p className="text-sm font-medium text-primary">Starting at $289.95</p>
                <p className="text-sm text-muted-foreground">Includes 21-point inspection</p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">21-Point Inspection</h3>
              <p className="mb-4 text-muted-foreground">
                Comprehensive evaluation of crown, cap, flashing, mortar, masonry, liner (video camera), smoke chamber, damper, firebox, draft, and water intrusion. Written report with photographs provided.
              </p>
              <div className="mt-auto">
                <p className="text-sm font-medium">Included with cleaning</p>
                <p className="text-sm text-muted-foreground">Complete documentation</p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">Chimney Repair</h3>
              <p className="mb-4 text-muted-foreground">
                Crown repair, flashing restoration, mortar repointing, cap installation, liner replacement, waterproofing, and animal removal. Materials matched to your chimney for seamless results.
              </p>
              <div className="mt-auto">
                <p className="text-sm font-medium">Detailed estimates provided</p>
                <p className="text-sm text-muted-foreground">No hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Woodinville Neighborhoods We Serve
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
              Professional chimney service throughout all Woodinville communities
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Downtown Woodinville</h3>
              <p className="text-sm text-muted-foreground">Established homes near town center</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Hollywood Hills</h3>
              <p className="text-sm text-muted-foreground">Wine country estates</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Cottage Lake</h3>
              <p className="text-sm text-muted-foreground">Properties in natural settings</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Wellington</h3>
              <p className="text-sm text-muted-foreground">Quality developments</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Bear Creek</h3>
              <p className="text-sm text-muted-foreground">Homes near creek corridor</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">North Woodinville</h3>
              <p className="text-sm text-muted-foreground">Rural properties with heavy fireplace use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Why Woodinville Trusts Mad Hatter
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  45+
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Years Serving the Eastside</h3>
                <p className="text-sm text-muted-foreground">
                  Maintaining Woodinville chimneys since 1979. We know these homes, this valley climate, and the specific challenges Woodinville chimneys face.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Master Chimney Sweep Certification</h3>
                <p className="text-sm text-muted-foreground">
                  The highest industry credential. Current training, advanced techniques, and adherence to national safety standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  21
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Complete Service</h3>
                <p className="text-sm text-muted-foreground">
                  Cleaning, inspection, repair, and restoration from one certified company. One call handles everything your chimney needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  $
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Honest Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  We report what we find—accurately. No invented urgency, no minimized problems. Clear communication you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Schedule Your Woodinville Chimney Service
            </h2>
            <p className="mb-8 text-balance text-lg text-muted-foreground">
              Annual professional service protects your home, your family, and your chimney investment. Don't wait for problems to announce themselves—professional inspection finds them early when repair is affordable.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="tel:+1234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Same-Day Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request Inspection</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              45 years of certified expertise protecting Woodinville families
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
