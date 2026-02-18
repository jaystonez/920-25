import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle2, AlertTriangle, Flame, Wind, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Cleaning Seattle | Professional Creosote Removal",
  description: "Professional chimney cleaning and creosote removal in Seattle. Master certified technicians with 45+ years experience. Same-day service available.",
}

export default function ChimneyCleaningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Chimney Cleaning: Why It Matters, What It Costs & How to Choose a Professional
          </h1>
          <p className="text-xl text-slate-300 mb-8 text-pretty leading-relaxed">
            Chimney cleaning is the single most important maintenance task for any home with a fireplace. The National Fire Protection Association identifies failure to clean chimneys as the leading factor in home heating fires.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Cleaning
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Professional chimney cleaning removes creosote—the flammable byproduct of burning wood—before it reaches dangerous levels, prevents carbon monoxide buildup, and improves your fireplace's heating efficiency. Mad Hatter Chimney Sweep has provided professional chimney cleaning across the greater Seattle area for over 45 years.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether you're a first-time homeowner trying to understand chimney maintenance or a longtime fireplace user who wants to make sure you're getting proper service, this guide covers everything you need to know about chimney cleaning—how it works, how often you need it, what it should cost, and how to find a qualified professional.
          </p>
        </div>
      </section>

      {/* Creosote Stages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">How Creosote Forms and Why It's Dangerous</h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto text-pretty">
            Understanding creosote is understanding why chimney cleaning matters. Every wood fire produces gases that cool and condense on chimney walls—forming creosote.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-yellow-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Flame className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Stage 1 Creosote</h3>
                    <p className="text-sm text-slate-600 mb-3">Light, dustlike or flaky deposit</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">Forms with good combustion and strong draft. Easiest to remove and least dangerous—but still flammable and accumulates over time.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Flame className="h-8 w-8 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Stage 2 Creosote</h3>
                    <p className="text-sm text-slate-600 mb-3">Thicker, tar-like or flaky deposit</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">Forms when combustion is less complete—from burning unseasoned wood or restricting air supply. Harder to remove and more flammable than Stage 1.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-600">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Flame className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Stage 3 Creosote</h3>
                    <p className="text-sm text-slate-600 mb-3">Hard, glazed coating (shiny tar)</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">Most dangerous stage. Extremely difficult to remove. Ignites at 1,000°F and burns at 2,000+°F—hot enough to crack liners and spread fire into home framing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">What Professional Chimney Cleaning Involves</h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto text-pretty">
            Professional chimney cleaning is a systematic process, not a quick sweep with a brush
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg">Preparation</h3>
                </div>
                <p className="text-slate-700">Seal fireplace opening with professional drop cloths and barriers. Contains all soot and debris within the fireplace area. Zero mess in your home.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-bold text-lg">Top-Down Cleaning</h3>
                </div>
                <p className="text-slate-700">Professional-grade brushes sized for your flue, working downward through the full chimney length. Gravity brings all loosened material to the firebox.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-bold text-lg">Smoke Chamber</h3>
                </div>
                <p className="text-slate-700">Critical area above the damper where creosote accumulates heavily. Many budget services skip this entirely. Professional cleaning addresses it thoroughly.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-bold text-lg">Component Cleaning</h3>
                </div>
                <p className="text-slate-700">Complete service includes damper mechanism, firebox interior, ash pit, and all accessible joints. Every surface that contacts smoke gets attention.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">5</span>
                  </div>
                  <h3 className="font-bold text-lg">Inspection</h3>
                </div>
                <p className="text-slate-700">Thorough cleaning gives access to evaluate the entire system. Checking for cracks, water damage, deterioration, and safety hazards during the process.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">6</span>
                  </div>
                  <h3 className="font-bold text-lg">Documentation</h3>
                </div>
                <p className="text-slate-700">Written report describing findings, chimney condition, and recommendations. Proof of maintenance for insurance and condition tracking baseline.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Frequency Guidelines */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center">How Often Should You Clean Your Chimney?</h2>
          <p className="text-lg text-slate-600 mb-12 text-center text-pretty">
            The straightforward answer: at least once per year if you use your fireplace. But the real answer depends on how you use it:
          </p>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Regular Use (2-4 fires per week)</h3>
                    <p className="text-slate-700">Annual cleaning is the minimum. This is most homeowners.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Heavy Use (5+ fires per week, primary heat)</h3>
                    <p className="text-slate-700">Every 6-8 months. Heavy use generates creosote faster than occasional burning.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Occasional Use (few times per month)</h3>
                    <p className="text-slate-700">Annual cleaning is sufficient, but don't skip it. Even modest use accumulates creosote over a season.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-slate-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Gas Fireplaces</h3>
                    <p className="text-slate-700">Annual inspection. Gas doesn't produce creosote, but systems still need safety verification.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Unused Fireplaces</h3>
                    <p className="text-slate-700">Annual inspection regardless. Animals nest in unused chimneys, debris accumulates, and deterioration occurs whether you light fires or not.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="text-slate-800 font-medium">
              <strong>NFPA Standard:</strong> Chimneys should be inspected annually and cleaned when inspection reveals it's necessary. For most wood-burning fireplaces in regular use, that means annual cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">What Chimney Cleaning Should Cost</h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto text-pretty">
            Professional chimney cleaning typically costs between $200 and $400 for standard service
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-t-4 border-yellow-500">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-slate-900">$100-150</p>
                  <p className="text-sm text-slate-600 mt-1">Budget Services</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Quick brush through main flue</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">No smoke chamber cleaning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Minimal inspection</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">No documentation</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 italic">Be cautious. You get what you pay for.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-green-600 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-slate-900">$200-350</p>
                  <p className="text-sm text-slate-600 mt-1">Standard Professional</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Complete cleaning of all surfaces</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Professional inspection</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Written documentation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Certified technicians</p>
                  </div>
                </div>
                <p className="text-sm text-green-700 font-medium mt-4">Legitimate certified service</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-600">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-slate-900">$350-500</p>
                  <p className="text-sm text-slate-600 mt-1">Premium Service</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Everything in standard service</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Video camera inspection</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Flue interior documentation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Complete visual record</p>
                  </div>
                </div>
                <p className="text-sm text-blue-700 font-medium mt-4">Recommended for older chimneys</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <p className="text-lg font-medium text-slate-900">
              Mad Hatter's standard cleaning and 21-point inspection starts at <span className="text-primary font-bold">$289.95</span> in the greater Seattle area
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Red Flags: Signs of an Unqualified Chimney Sweep</h2>
          <p className="text-slate-300 mb-12 text-center max-w-3xl mx-auto text-pretty">
            Protect yourself from unqualified services:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">No Certification</h3>
                <p className="text-slate-300">If they can't show credentials, they may lack the knowledge to do the job safely and thoroughly.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Extremely Low Prices</h3>
                <p className="text-slate-300">If the price sounds too good to be true, the service probably is too. Thorough cleaning takes time and expertise.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">No Inspection Included</h3>
                <p className="text-slate-300">A sweep who cleans without inspecting isn't providing complete service. Inspection is essential.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">High-Pressure Sales</h3>
                <p className="text-slate-300">A reputable sweep explains findings and lets you decide. Pressure for immediate expensive repairs is a warning sign.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">No Written Report</h3>
                <p className="text-slate-300">Professional service includes documentation. Verbal-only findings leave no record.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">No Insurance</h3>
                <p className="text-slate-300">Working on roofs involves risk. An uninsured sweep puts you at liability.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Door-to-Door Solicitation</h3>
                <p className="text-slate-300">Be cautious of unsolicited offers, especially those that "find" problems requiring immediate expensive repair.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mad Hatter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Mad Hatter Chimney Sweep</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Master Certified</h3>
                <p className="text-slate-700">Highest industry credential. Advanced inspection techniques and comprehensive knowledge.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">45+ Years Experience</h3>
                <p className="text-slate-700">Serving Seattle since 1979. Thousands of chimneys cleaned and maintained.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Wind className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Complete Service</h3>
                <p className="text-slate-700">Thorough cleaning of all surfaces, professional inspection, and written documentation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Chimney Cleaning Today</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-balance">
            Chimney cleaning isn't optional maintenance—it's essential fire prevention and safety protection for your home and family.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (206) 274-6409
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Request Quote
            </Button>
          </div>
          <p className="mt-6 text-primary-foreground/80">
            Master certified technicians. Same-day service available throughout the greater Seattle area.
          </p>
        </div>
      </section>
    </main>
  )
}
