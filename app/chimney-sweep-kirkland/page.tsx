import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Flame, 
  Shield, 
  Gauge, 
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Snowflake,
  Home,
  Phone
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Chimney Sweep Kirkland | Professional Cleaning & Inspection | Mad Hatter",
  description: "Certified chimney sweep services in Kirkland. Professional cleaning, 21-point inspection, and repairs for lakeside properties. 45+ years serving Kirkland families. Call now.",
}

export default function ChimneySweepKirklandPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-foreground/10 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Serving Kirkland Since 1979
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Kirkland: Certified Cleaning, Inspection & Repair
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Professional chimney services for Kirkland's lakeside homes. Master Chimney Sweep certified with 45+ years protecting Eastside families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20" asChild>
                <Link href="/chimney-inspection">21-Point Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kirkland Climate Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Kirkland Chimneys Need Professional Care
            </h2>
            <p className="text-lg text-muted-foreground">
              Kirkland's lakeside location creates unique challenges. Lake Washington proximity means elevated moisture, accelerating chimney deterioration faster than inland properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Lake Moisture</h3>
                <p className="text-sm text-muted-foreground">
                  Lake Washington proximity creates elevated humidity accelerating mortar deterioration and masonry damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Freeze-Thaw Cycles</h3>
                <p className="text-sm text-muted-foreground">
                  Winter freezing and spring warming stress masonry through repeated expansion cycles widening cracks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Established Homes</h3>
                <p className="text-sm text-muted-foreground">
                  Many Kirkland homes are 40-70 years old with original chimneys needing professional assessment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Active Use</h3>
                <p className="text-sm text-muted-foreground">
                  Regular fireplace use generates creosote requiring annual professional removal to prevent fires.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Cleaning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Chimney Cleaning for Kirkland Homes
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete creosote removal, 21-point inspection, and professional documentation. Starting at $289.95.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">The Creosote Problem</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Stage 1: Light & Fluffy</p>
                      <p className="text-sm text-muted-foreground">Relatively easy to remove with professional brushing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-700 dark:text-orange-400">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Stage 2: Sticky & Tar-Like</p>
                      <p className="text-sm text-muted-foreground">Requires professional equipment and technique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-700 dark:text-red-400">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Stage 3: Hard & Glazed</p>
                      <p className="text-sm text-muted-foreground">Extremely flammable—can ignite at 1,000°F creating 2,000°F chimney fire</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Most Kirkland homeowners who use fireplaces regularly reach Stage 2 within a year. Professional cleaning removes all stages safely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Beyond Fire Prevention</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Carbon Monoxide Protection</p>
                      <p className="text-sm text-muted-foreground">Ensures proper venting of deadly invisible gas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Improved Efficiency</p>
                      <p className="text-sm text-muted-foreground">Clean chimneys draw better—more heat, less wood</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Problem Detection</p>
                      <p className="text-sm text-muted-foreground">Catch cracks, water damage, deterioration early</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Our Cleaning Process</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Professional home protection with barriers and tarps",
                  "Top-down cleaning with professional-grade brushes",
                  "Complete smoke chamber and flue cleaning",
                  "21-point inspection included with every cleaning",
                  "Written report with photographs and findings",
                  "Thorough cleanup—your home stays pristine"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-lg font-semibold">
                  Standard Service: <span className="text-primary">$289.95</span>
                </p>
                <p className="text-sm text-muted-foreground">Includes complete cleaning and full 21-point inspection</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inspection Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Chimney Inspection
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional assessment identifies hidden problems before they become expensive emergencies. Every cleaning includes our complete 21-point inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">Exterior Assessment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Crown condition & water shedding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Flashing integrity & sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mortar joint condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Masonry condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cap presence & function</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">Interior Assessment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Video camera flue inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Liner integrity evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Creosote level assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Smoke chamber condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Damper operation testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">System Performance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Draft functionality testing</span>
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
                    <span>Animal activity signs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Structural integrity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kirkland Neighborhoods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving All Kirkland Neighborhoods
            </h2>
            <p className="text-lg text-muted-foreground">
              From waterfront properties to hillside homes, we provide professional chimney service throughout Kirkland.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Downtown Kirkland & Waterfront",
              "Juanita",
              "Houghton",
              "Totem Lake",
              "Kingsgate",
              "Finn Hill",
              "Bridle Trails",
              "Norkirk & Market"
            ].map((neighborhood, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="font-medium text-center">{neighborhood}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Kirkland Homeowners Choose Mad Hatter
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Quality homes deserve quality care. We deliver the certified expertise and meticulous workmanship Kirkland properties require.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-bold mb-2">45+ Years Serving the Eastside</h3>
              <p className="text-sm text-primary-foreground/80">
                Since 1979, maintaining Kirkland chimneys. Our local experience is unmatched.
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-bold mb-2">Master Chimney Sweep Certified</h3>
              <p className="text-sm text-primary-foreground/80">
                Highest industry credential. Current training and national safety standards.
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-bold mb-2">Lakeside Property Specialists</h3>
              <p className="text-sm text-primary-foreground/80">
                Deep experience with Lake Washington moisture challenges.
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-bold mb-2">21-Point Inspection Included</h3>
              <p className="text-sm text-primary-foreground/80">
                Comprehensive assessment with every cleaning—nothing overlooked.
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-bold mb-2">Transparent Pricing</h3>
              <p className="text-sm text-primary-foreground/80">
                $289.95 standard service. Detailed repair estimates. No surprises.
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-bold mb-2">Quality Workmanship</h3>
              <p className="text-sm text-primary-foreground/80">
                We respect Kirkland homes. Careful work, home protection, results that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Schedule Your Kirkland Chimney Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional cleaning prevents fires, ensures safe venting, and catches lakeside moisture damage early. Same-day and next-day service available throughout Kirkland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Mad Hatter Today
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/chimney-cleaning">Learn About Our Services</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                45 years of certified expertise protecting Eastside families
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
