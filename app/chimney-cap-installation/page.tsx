import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Droplets, Bird, Flame, Wind, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Cap Installation Seattle | Mad Hatter Chimney Sweep",
  description: "Professional chimney cap installation in Seattle. Protect your chimney from water, animals, and debris. Stainless steel, copper, and custom caps available. 45+ years experience.",
}

export default function ChimneyCapInstallationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Chimney Cap Installation: Protect Your Chimney from Water, Animals & Debris
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              A chimney cap is the simplest, most cost-effective protection you can add to your chimney system. For $200-400 installed, a quality chimney cap prevents water entry, blocks animals from nesting in your flue, stops debris accumulation, and contains sparks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:2062746409">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (206) 274-6409
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                <Link href="/#contact">Schedule Installation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What a Chimney Cap Does */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What a Chimney Cap Does</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Water Protection</h3>
                <p className="text-muted-foreground">
                  Deflects rain away from the flue opening. In the Pacific Northwest—where rainfall exceeds 37 inches annually—an uncapped chimney absorbs hundreds of gallons of water over a single winter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Bird className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Animal Exclusion</h3>
                <p className="text-muted-foreground">
                  Mesh screening prevents birds, raccoons, and squirrels from entering. Animals build nests that block the flue—creating fire hazards and carbon monoxide risks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Debris Prevention</h3>
                <p className="text-muted-foreground">
                  Stops leaves, needles, twigs, and other debris from falling into the chimney. Debris accumulates on the smoke shelf and in the flue, creating blockages and fire fuel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Flame className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Spark Containment</h3>
                <p className="text-muted-foreground">
                  Mesh screening contains sparks and embers that rise with hot gases. Prevents burning embers from landing on your roof or nearby vegetation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Wind className="h-12 w-12 text-sky-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Downdraft Prevention</h3>
                <p className="text-muted-foreground">
                  Some cap designs reduce wind-induced downdrafts that push smoke back into your home during windy conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Chimney Caps */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Chimney Caps</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Standard Single-Flue Caps</h3>
                <p className="text-sm text-muted-foreground mb-4">Best for: Single-flue chimneys, most residential fireplaces</p>
                <p className="mb-4">Metal lid with mesh screening that fits over a single flue opening. Available in stainless steel, copper, and galvanized steel.</p>
                <p className="font-semibold text-primary">Cost installed: $200-350</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Multi-Flue Caps</h3>
                <p className="text-sm text-muted-foreground mb-4">Best for: Chimneys with multiple flues</p>
                <p className="mb-4">Larger cap that covers the entire chimney top, protecting multiple flue openings under one structure. Also protects the chimney crown.</p>
                <p className="font-semibold text-primary">Cost installed: $400-800</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Top-Mount Damper Caps</h3>
                <p className="text-sm text-muted-foreground mb-4">Best for: Improved energy efficiency</p>
                <p className="mb-4">Combination cap and damper with a cable running down to the firebox. When closed, seals the chimney top completely—better efficiency than throat dampers.</p>
                <p className="font-semibold text-primary">Cost installed: $350-600</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Custom Caps</h3>
                <p className="text-sm text-muted-foreground mb-4">Best for: Unusual chimney configurations</p>
                <p className="mb-4">Custom fabrication for non-standard flue sizes or aesthetic requirements. Available in copper, stainless steel, or painted steel.</p>
                <p className="font-semibold text-primary">Cost installed: $500-1,200</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cap Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choosing the Right Cap Material</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-2" />
                  <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">RECOMMENDED</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Stainless Steel</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Best value for most homeowners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Resists corrosion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>15-20+ year lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Lifetime warranties</span>
                  </li>
                </ul>
                <p className="text-sm text-center text-muted-foreground">Best for Pacific Northwest climate</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="h-12 w-12 bg-amber-600 rounded-full mx-auto mb-2"></div>
                  <span className="inline-block bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-semibold">PREMIUM</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Copper</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Develops attractive patina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Extremely durable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>30+ year lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Adds aesthetic value</span>
                  </li>
                </ul>
                <p className="text-sm text-center text-muted-foreground">Popular on upscale homes</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="h-12 w-12 bg-slate-400 rounded-full mx-auto mb-2"></div>
                  <span className="inline-block bg-slate-400 text-white text-xs px-3 py-1 rounded-full font-semibold">BUDGET</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Galvanized Steel</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                    <span>Lower upfront cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                    <span>Corrodes faster in wet climate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                    <span>5-10 year lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                    <span>Requires earlier replacement</span>
                  </li>
                </ul>
                <p className="text-sm text-center text-muted-foreground">Not ideal for Seattle climate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional vs DIY */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Professional Installation Matters</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Correct Sizing</h3>
              <p className="text-slate-300">We measure your flue and select the correct size. Too small leaves gaps. Too large doesn't secure properly.</p>
            </div>

            <div className="text-center">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Proper Securing</h3>
              <p className="text-slate-300">Caps must withstand Pacific Northwest windstorms. Professional fastening methods for your chimney type.</p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Safety</h3>
              <p className="text-slate-300">Professional equipment, training, and insurance protect everyone involved when working on your roof.</p>
            </div>

            <div className="text-center">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Inspection Opportunity</h3>
              <p className="text-slate-300">While installing your cap, we examine the crown, flashing, and visible chimney components.</p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Warranty</h3>
              <p className="text-slate-300">Professional installation maintains manufacturer warranties that DIY installation may void.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Cap Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Signs You Need Cap Service</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xl">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">No cap present</h3>
                <p className="text-muted-foreground">Your chimney is completely unprotected. Install one immediately.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xl">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">Visible rust or corrosion</h3>
                <p className="text-muted-foreground">Your current cap is failing and will soon stop protecting.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xl">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">Damaged or torn screening</h3>
                <p className="text-muted-foreground">Animals and debris can enter through torn mesh.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-xl">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">Cap is loose or tilted</h3>
                <p className="text-muted-foreground">Wind has displaced it. It may blow off entirely in the next storm.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xl">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">Animals entering the chimney</h3>
                <p className="text-muted-foreground">Your cap is missing, damaged, or has inadequate screening.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xl">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">Water in the firebox after rain</h3>
                <p className="text-muted-foreground">Multiple possible causes, but a missing or damaged cap is the first thing to check.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mad Hatter */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Mad Hatter for Chimney Cap Installation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-10 w-10 text-green-600 mb-3" />
                <h3 className="font-bold mb-2">45+ Years of Experience</h3>
                <p className="text-sm text-muted-foreground">We've installed thousands of caps across every chimney type in the greater Seattle area.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-10 w-10 text-green-600 mb-3" />
                <h3 className="font-bold mb-2">Correct Cap Selection</h3>
                <p className="text-sm text-muted-foreground">We recommend the right type and material for your specific chimney, climate exposure, and budget.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-10 w-10 text-green-600 mb-3" />
                <h3 className="font-bold mb-2">Professional Installation</h3>
                <p className="text-sm text-muted-foreground">Properly sized, securely fastened, and installed to last through Pacific Northwest weather.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-10 w-10 text-green-600 mb-3" />
                <h3 className="font-bold mb-2">Combined Service</h3>
                <p className="text-sm text-muted-foreground">Cap installation pairs naturally with cleaning and inspection. One visit handles everything.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-10 w-10 text-green-600 mb-3" />
                <h3 className="font-bold mb-2">Quality Products</h3>
                <p className="text-sm text-muted-foreground">We install caps from reputable manufacturers with strong warranties.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Chimney Cap Installation</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty">
            A chimney cap is affordable protection against expensive problems. Water damage, animal intrusion, and debris accumulation all cost far more to resolve than cap installation prevents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:2062746409">
                <Phone className="mr-2 h-5 w-5" />
                Call (206) 274-6409
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/#contact">Request Quote</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm">Same-day service often available throughout the greater Seattle area</p>
        </div>
      </section>
    </main>
  )
}
