import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, TreeDeciduous, Droplets, Home, Bird, Shield, Award, FileCheck, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Chimney Sweep Lake Forest Park | Professional Cleaning & Inspection | Mad Hatter",
  description: "Expert chimney sweep services for Lake Forest Park's forested, lakeside homes. Certified professionals serving mid-century properties for 45+ years. Call for same-day service.",
}

export default function ChimneySweepLakeForestParkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Serving Lake Forest Park Since 1979
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Lake Forest Park: Professional Cleaning & Inspection
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty">
              Expert chimney service for Lake Forest Park's forested, lakeside homes. Certified professionals with 45+ years of experience maintaining mid-century chimney systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+1234567890">Call for Service</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/contact">Schedule Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Lake Forest Park lives up to its name—a community defined by towering trees, lush forest canopy, and proximity to Lake Washington. This beautiful, nature-rich setting creates specific challenges for chimney systems that require professional attention.
            </p>
            <p className="text-lg text-muted-foreground">
              The city's residential character is distinctive: primarily mid-century homes on generous wooded lots, many with original masonry chimneys that have served faithfully for decades. These mature systems—surrounded by trees, exposed to lake-effect moisture, and approaching 50-70 years of age—need expert assessment that only experienced, certified professionals provide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Lake Forest Park Chimneys Need Expert Service */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Lake Forest Park Chimneys Need Expert Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-6">
              <TreeDeciduous className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Forest Canopy Effects</h3>
              <p className="text-muted-foreground">
                Overhanging branches drop debris onto chimney caps. Tree coverage keeps chimneys shaded and damp longer after rain, extending moisture exposure that drives deterioration.
              </p>
            </Card>

            <Card className="p-6">
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lake Proximity Humidity</h3>
              <p className="text-muted-foreground">
                Bordered by Lake Washington, homes experience elevated humidity levels. Moisture-rich air keeps masonry damp and provides water for freeze-thaw damage.
              </p>
            </Card>

            <Card className="p-6">
              <Home className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mid-Century Home Systems</h3>
              <p className="text-muted-foreground">
                Most homes built 1940s-1970s have 50-80 year old chimney systems. Mortar joints need evaluation, liners need assessment, crowns have likely cracked.
              </p>
            </Card>

            <Card className="p-6">
              <Bird className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Wildlife Activity</h3>
              <p className="text-muted-foreground">
                Forested environment means raccoons, squirrels, owls, and birds commonly seek shelter in chimney flues. Nesting materials block flues and create hazards.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Professional Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Professional Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Complete Chimney Cleaning</h3>
              <p className="text-muted-foreground mb-4">
                Thorough removal of all creosote, soot, and debris from your chimney system. Full flue cleaning, smoke chamber service, firebox cleaning, and damper maintenance.
              </p>
              <p className="text-muted-foreground mb-4">
                Professional containment protects your home throughout the process.
              </p>
              <p className="font-semibold text-primary">
                Starting at $289.95 including 21-point inspection
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">21-Point Inspection</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive evaluation of every component. For Lake Forest Park homes, we pay particular attention to age-related deterioration, moisture damage patterns, and tree-related issues specific to your setting.
              </p>
              <p className="text-muted-foreground">
                Written report with photographs and prioritized recommendations.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Chimney Repair & Restoration</h3>
              <p className="text-muted-foreground mb-2">Lake Forest Park's older homes frequently need:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Mortar repointing with properly matched composition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Crown repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Flashing repair and sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Chimney cap installation for wildlife prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Liner evaluation and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Waterproofing with breathable sealant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Animal removal and exclusion screening</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Lake Forest Park Areas We Serve */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Lake Forest Park Areas We Serve
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Sheridan Beach</h3>
              <p className="text-sm text-muted-foreground">Lakefront properties with maximum moisture exposure</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Horizon View</h3>
              <p className="text-sm text-muted-foreground">Elevated homes with weather exposure</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Brookside</h3>
              <p className="text-sm text-muted-foreground">Established neighborhood with mature trees</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Town Center Area</h3>
              <p className="text-sm text-muted-foreground">Residential streets near Third Place Commons</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Burke-Gilman Trail</h3>
              <p className="text-sm text-muted-foreground">Homes along the trail corridor</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">North City Border</h3>
              <p className="text-sm text-muted-foreground">Transitional area toward Shoreline</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Lake Forest Park Trusts Mad Hatter */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Lake Forest Park Trusts Mad Hatter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">45+ Years Local Expertise</h3>
              <p className="text-primary-foreground/90">
                Serving Lake Forest Park since 1979. We know mid-century homes and their chimney systems intimately.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Master Certification</h3>
              <p className="text-primary-foreground/90">
                The highest credential. Advanced knowledge for older, complex chimney systems.
              </p>
            </div>
            <div className="text-center">
              <FileCheck className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Older Home Specialists</h3>
              <p className="text-primary-foreground/90">
                Deep experience with mortar matching, material selection, and techniques mid-century chimneys require.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complete Service</h3>
              <p className="text-primary-foreground/90">
                Cleaning, inspection, repair, restoration, and wildlife exclusion from one certified provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Your Lake Forest Park Chimney Service
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Older chimneys in wooded, moisture-rich settings need consistent professional attention. Annual service is the difference between a chimney that serves another 20 years and one that needs premature replacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+1234567890">Call for Same-Day Service</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule Online</Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-8">
            45 years of certified expertise protecting Lake Forest Park families.
          </p>
        </div>
      </section>
    </div>
  )
}
