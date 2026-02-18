import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Home, Flame, Trees, Shield, CheckCircle2, AlertTriangle, Award, Clock, FileCheck, Phone } from 'lucide-react'

export default function ChimneySweepBothellPage() {
  return (
    <div className="min-w-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Award className="h-3 w-3 mr-1" />
              Serving Bothell Since 1979
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Sweep Bothell: Certified Cleaning & Inspection
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
              Professional chimney services for Bothell homes. From Canyon Park to North Creek, we've protected Bothell families with certified expertise for over 45 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <Link href="/contact">Schedule Service</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 inline mr-1" />
              Same-day and next-day service available
            </p>
          </div>
        </div>
      </section>

      {/* Why Bothell Chimneys Need Service */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Bothell Chimneys Need Annual Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Bothell's location, climate, and housing characteristics create specific challenges for chimney systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Pacific Northwest Moisture</h3>
                    <p className="text-muted-foreground">
                      Over 37 inches of annual rainfall and months of persistent dampness attack mortar, crowns, and flashing. Professional inspection catches moisture damage early.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Varied Housing Stock</h3>
                    <p className="text-muted-foreground">
                      From 1960s ranch homes to modern construction, Bothell's diverse housing requires expertise with different chimney types and age-specific challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Flame className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Active Fireplace Use</h3>
                    <p className="text-muted-foreground">
                      Regular burning generates creosote—flammable deposits that accumulate with every fire. Annual cleaning prevents dangerous buildup.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Trees className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Heavy Tree Coverage</h3>
                    <p className="text-muted-foreground">
                      Overhanging branches drop debris, trap moisture, and provide shelter for wildlife seeking chimney access. Annual inspection addresses these challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Professional Chimney Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete cleaning, inspection, and repair for Bothell homes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Complete Chimney Cleaning</h3>
                <p className="text-muted-foreground mb-6">
                  Professional removal of all creosote from flue, smoke chamber, firebox, and damper. Includes comprehensive 21-point inspection and written report.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Full-length flue cleaning with professional equipment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Smoke chamber and firebox cleaning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete home protection and cleanup</span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary">Starting at $289.95</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive assessment of your entire chimney system using video camera technology. Identifies problems before they become expensive repairs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Exterior and interior assessment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Video camera flue inspection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Written report with recommendations</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Included with every cleaning</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Chimney Repair Services</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Crown Repair</h4>
                    <p className="text-sm text-muted-foreground">Restoring water protection</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Flashing Repair</h4>
                    <p className="text-sm text-muted-foreground">Resealing roof junction</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Mortar Repointing</h4>
                    <p className="text-sm text-muted-foreground">Replacing failed mortar</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Cap Installation</h4>
                    <p className="text-sm text-muted-foreground">Preventing water/animals</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Liner Replacement</h4>
                    <p className="text-sm text-muted-foreground">Restoring safe venting</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Waterproofing</h4>
                    <p className="text-sm text-muted-foreground">Breathable protection</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bothell Neighborhoods */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bothell Neighborhoods We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional chimney service throughout all Bothell communities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Canyon Park',
                'North Creek',
                'Downtown Bothell',
                'Queensborough',
                'Brickyard',
                'Norway Hill',
                'Bothell-Everett Hwy',
                'Maltby Area',
                'Neighboring Communities'
              ].map((neighborhood) => (
                <Card key={neighborhood}>
                  <CardContent className="p-4 text-center">
                    <p className="font-medium">{neighborhood}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Also serving Kenmore, Lake Forest Park, Mill Creek, and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 sm:py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Signs Your Bothell Chimney Needs Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't wait for problems to worsen—schedule service if you notice any of these signs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                sign: "Over a year since last cleaning",
                description: "Annual service is the baseline for safety"
              },
              {
                sign: "Smoke entering your home",
                description: "Indicates blockage or heavy creosote buildup"
              },
              {
                sign: "Musty odors from fireplace",
                description: "Creosote smell, especially in humid weather"
              },
              {
                sign: "Water in or near firebox",
                description: "Flashing, crown, or cap problems"
              },
              {
                sign: "White staining on bricks",
                description: "Efflorescence signals moisture movement"
              },
              {
                sign: "Crumbly or missing mortar",
                description: "Failed mortar compromises structure"
              },
              {
                sign: "Animal sounds in chimney",
                description: "Nesting materials create fire hazards"
              },
              {
                sign: "Difficulty starting fires",
                description: "Poor draft from restricted airflow"
              },
              {
                sign: "Visible dark deposits",
                description: "Creosote accumulation inside firebox"
              }
            ].map((item, index) => (
              <Card key={index} className="border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.sign}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Mad Hatter */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Bothell Chooses Mad Hatter
            </h2>
            <p className="text-lg opacity-90">
              Certified expertise and honest service for over four decades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-foreground/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">45+ Years Local</h3>
              <p className="opacity-90">Serving Bothell since 1979 with deep knowledge of local homes</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-foreground/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Certified</h3>
              <p className="opacity-90">Highest industry credential with proven expertise</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-foreground/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Service</h3>
              <p className="opacity-90">Cleaning, inspection, and repair from one trusted company</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-foreground/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="opacity-90">Clear pricing before work begins—no hidden charges</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-foreground/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Honest Communication</h3>
              <p className="opacity-90">Plain language explanations and genuine recommendations</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-foreground/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">21-Point Inspection</h3>
              <p className="opacity-90">Comprehensive assessment included with every service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Schedule Your Bothell Chimney Service
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Professional chimney service prevents fires, ensures safe venting, and catches damage early. Annual cleaning and inspection is the most important maintenance your fireplace requires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Service Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+12065551234">Call Now</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Same-day and next-day service available throughout Bothell
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
