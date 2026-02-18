import Link from 'next/link'
import { Phone, CheckCircle2, AlertTriangle, Hammer, Droplets, Shield } from 'lucide-react'

export const metadata = {
  title: 'Masonry Repair Seattle | Professional Brick, Mortar & Stone Restoration',
  description: 'Expert masonry repair services across Seattle. 45+ years restoring chimneys, fireplaces, and masonry structures. Professional repointing, brick replacement, and stone restoration.',
}

export default function MasonryRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Masonry Repair: Professional Brick, Mortar & Stone Restoration
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              Quality masonry repair extends your structure's life by decades and prevents expensive replacement. 45+ years of expert restoration across the greater Seattle area.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="tel:+1234567890"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-background px-8 py-3 text-lg font-semibold text-foreground shadow-lg transition-all hover:bg-background/90 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Schedule Service
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-primary-foreground/20 bg-primary-foreground/10 px-8 py-3 text-lg font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20 sm:w-auto"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Masonry deteriorates. Rain, freeze-thaw cycles, age, and structural movement all take their toll on brick, stone, and mortar. Professional restoration uses correct materials, proper technique, and proven methods to restore both function and appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Common Masonry Problems
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Understanding deterioration helps you identify when professional repair is needed
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Mortar Joint Failure */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                <h3 className="text-xl font-semibold">Mortar Joint Failure</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Mortar joints are the most vulnerable part of masonry. Weather exposure weakens mortar—water enters cracks, freezes, expands, and widens damage. Failed mortar allows water deep inside the structure.
              </p>
              <p className="text-sm font-medium text-foreground">
                Solution: Professional repointing with properly matched mortar
              </p>
            </div>

            {/* Brick Spalling */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                <h3 className="text-xl font-semibold">Brick Spalling</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Water penetrates brick, freezes, and forces the face to break off in layers. You'll see crumbling brick, rough surfaces, and fragments at the base. Spalling accelerates once it starts.
              </p>
              <p className="text-sm font-medium text-foreground">
                Solution: Remove damaged bricks, replace with matching units
              </p>
            </div>

            {/* Cracking */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                <h3 className="text-xl font-semibold">Cracking</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Masonry cracks from settlement, thermal cycling, water damage, or structural overload. Cracks allow water entry and weaken structural integrity.
              </p>
              <p className="text-sm font-medium text-foreground">
                Solution: Sealing for minor cracks, structural repair for serious damage
              </p>
            </div>

            {/* Efflorescence */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <Droplets className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Efflorescence</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                White, powdery deposits indicate water moving through masonry, dissolving salts, and depositing them on the surface. Signals a moisture problem causing real damage.
              </p>
              <p className="text-sm font-medium text-foreground">
                Solution: Waterproofing, flashing repair, mortar restoration
              </p>
            </div>

            {/* Leaning or Shifting */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold">Leaning or Shifting</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Chimneys and walls can lean, shift, or separate from structures. Causes include foundation settlement, inadequate support, water damage, and seismic activity.
              </p>
              <p className="text-sm font-medium text-red-600">
                Solution: Professional structural assessment and repair
              </p>
            </div>

            {/* Structural Deterioration */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold">Structural Deterioration</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Combined effects of age, weather, and neglect compromise overall structural integrity. Loose bricks, widespread mortar failure, and visible instability require immediate attention.
              </p>
              <p className="text-sm font-medium text-foreground">
                Solution: Comprehensive restoration or rebuild
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Our Masonry Repair Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Complete restoration services for all masonry structures
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mortar Repointing */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-2xl font-semibold">Mortar Repointing</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                The most common and important masonry repair. Proper repointing restores structural integrity, stops water infiltration, and extends structure life by decades.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Mortar matching for composition, color, and strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Proper removal depth (2-2.5x joint width)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Layered application and proper curing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Joint tooling to match original profile</span>
                </li>
              </ul>
            </div>

            {/* Brick Replacement */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-2xl font-semibold">Brick Replacement</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                When bricks are damaged beyond repair—spalling, cracking, or structurally compromised—professional replacement restores integrity.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Matching size, color, texture, and composition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Careful removal without disturbing surrounding masonry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Installation with matched mortar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Seamless blending with original</span>
                </li>
              </ul>
            </div>

            {/* Stone Repair */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Hammer className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-semibold">Stone Repair</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Stone masonry requires different techniques than brick. Different stone types have different properties requiring specific approaches.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Repointing stone mortar joints</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Replacing damaged stones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Patching and filling stone damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Stabilizing loose or shifted stones</span>
                </li>
              </ul>
            </div>

            {/* Chimney Masonry Repair */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">Chimney Masonry Repair</h3>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Chimneys face unique challenges—exposed to weather on all sides, thermal cycling from fires, and wind and rain impact above the roofline.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Crown repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Flashing repair and sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Full chimney repointing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Partial or full chimney rebuild</span>
                </li>
              </ul>
            </div>

            {/* Fireplace Masonry Repair */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">Fireplace Masonry Repair</h3>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Interior fireplace masonry faces heat stress that exterior masonry doesn't. Repairs use high-temperature refractory materials.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Cracked firebox walls and floors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Deteriorated hearth surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Damaged fireplace surrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Failed interior mortar joints</span>
                </li>
              </ul>
            </div>

            {/* Waterproofing */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-semibold">Waterproofing</h3>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                After repairs, waterproofing provides additional protection. Breathable agents prevent water entry while allowing internal moisture to escape.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Penetrating sealant, not paint or coating</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Doesn't change masonry appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Dramatically reduces water absorption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Prevents freeze-thaw damage cycle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Repair Matters */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Why Professional Masonry Repair Matters
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">Material Knowledge</h3>
              <p className="text-pretty leading-relaxed text-primary-foreground/90">
                Different eras used different mortar compositions. We match materials to prevent accelerated damage from improper repairs.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">Proper Technique</h3>
              <p className="text-pretty leading-relaxed text-primary-foreground/90">
                Joint depth, application method, tooling profile, and curing conditions all affect repair longevity. Experience matters.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">Structural Understanding</h3>
              <p className="text-pretty leading-relaxed text-primary-foreground/90">
                Masonry distributes loads through complex patterns. Repairs must account for structural function, not just appearance.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">Aesthetic Excellence</h3>
              <p className="text-pretty leading-relaxed text-primary-foreground/90">
                Visible repairs should blend seamlessly. Color matching, texture matching, and joint profiles require skill and experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs. Replace */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              When to Repair vs. Replace
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Honest assessment of the most cost-effective approach
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Repair When */}
            <div className="rounded-lg border-2 border-primary/20 bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 shrink-0 text-primary" />
                <h3 className="text-2xl font-semibold">Repair When:</h3>
              </div>
              <ul className="space-y-3 text-pretty leading-relaxed text-muted-foreground">
                <li>• Damage is localized to specific areas</li>
                <li>• The structure is fundamentally sound</li>
                <li>• Proper repair will restore function and appearance</li>
                <li>• Repair extends life for years to come</li>
                <li>• Cost is significantly less than replacement</li>
              </ul>
              <p className="mt-4 font-medium text-foreground">
                Most masonry problems fall into this category
              </p>
            </div>

            {/* Replace When */}
            <div className="rounded-lg border-2 border-orange-500/20 bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 shrink-0 text-orange-500" />
                <h3 className="text-2xl font-semibold">Replace When:</h3>
              </div>
              <ul className="space-y-3 text-pretty leading-relaxed text-muted-foreground">
                <li>• Damage is extensive throughout the structure</li>
                <li>• Structural integrity is seriously compromised</li>
                <li>• Multiple systems are failing simultaneously</li>
                <li>• Repair costs approach replacement costs</li>
                <li>• Safety concerns cannot be adequately addressed</li>
              </ul>
              <p className="mt-4 font-medium text-foreground">
                Less common than many contractors suggest
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-muted/50 p-6 text-center">
            <p className="text-lg font-medium text-foreground">
              We provide honest assessment of which approach makes sense for your situation
            </p>
          </div>
        </div>
      </section>

      {/* Preventing Masonry Damage */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Preventing Masonry Damage
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Proactive maintenance prevents expensive repairs
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Address Water Issues</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Most masonry damage starts with water. Proper flashing, functioning crowns, chimney caps, and waterproofing prevent the majority of problems.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Annual Inspection</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Professional inspection catches deterioration early when repair is affordable. Small problems today become major restoration projects tomorrow.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Prompt Repair</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Small repairs now prevent major restoration later. A $500 repointing job today prevents a $5,000 rebuild next year. Don't wait.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Proper Drainage</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Ensure water drains away from masonry structures. Poor grading and missing gutters cause foundation-level moisture problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Schedule Professional Masonry Repair
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
            Masonry deterioration doesn't stop on its own. Water damage spreads. Failed mortar weakens structures. Spalling accelerates. Professional repair now stops the cycle and restores your masonry for decades of continued service.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="tel:+1234567890"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-background px-8 py-3 text-lg font-semibold text-foreground shadow-lg transition-all hover:bg-background/90 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Call for Assessment
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-primary-foreground/20 bg-primary-foreground/10 px-8 py-3 text-lg font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-primary-foreground/90">
            45 years of masonry expertise serving the greater Seattle area
          </p>
        </div>
      </section>
    </div>
  )
}
