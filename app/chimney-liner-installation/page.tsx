import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Shield, CheckCircle2, AlertTriangle, Wrench, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Liner Installation & Replacement Seattle | Mad Hatter Chimney Sweep",
  description: "Professional chimney liner installation and replacement. Stainless steel and cast-in-place liners. Restore safe flue function. 45+ years serving greater Seattle.",
}

export default function ChimneyLinerInstallationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Chimney Liner Installation & Replacement
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Restore Safe Flue Function
            </p>
            <p className="text-lg mb-8 text-slate-300 max-w-3xl mx-auto text-pretty">
              Your chimney liner is the barrier between 2,000-degree flue gases and your home's combustible structure. When that liner is cracked, deteriorated, or missing entirely, heat and carbon monoxide can reach your walls, framing, and living spaces.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="tel:2062746409">
                <Phone className="mr-2 h-5 w-5" />
                Call for Liner Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Liner Does */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What a Chimney Liner Does</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Heat Containment</h3>
                  <p className="text-muted-foreground">
                    Flue gases reach temperatures that would ignite wood framing. The liner contains this heat within the flue, protecting your home's structure.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Gas Containment</h3>
                  <p className="text-muted-foreground">
                    Carbon monoxide and combustion gases must exit through the chimney—not seep into your living spaces. The liner provides a sealed pathway.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Chimney Protection</h3>
                  <p className="text-muted-foreground">
                    Combustion byproducts are corrosive. The liner protects the chimney's masonry from chemical attack by acidic flue gases.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Liners */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Types of Chimney Liners</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Stainless Steel */}
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">Stainless Steel Liners</h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A continuous stainless steel tube inserted down the existing chimney. The most popular replacement option.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Continuous construction—no joints to fail</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Excellent durability, handles thermal cycling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Quick installation—most complete in one day</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">15-25 year or lifetime warranties</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Typical Cost Installed:</p>
                    <p className="text-2xl font-bold text-primary">$1,200 - $2,500</p>
                    <p className="text-sm text-muted-foreground mt-1">Depending on chimney length and diameter</p>
                  </div>
                </CardContent>
              </Card>

              {/* Cast-in-Place */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Cast-in-Place Liners</h3>
                  <p className="text-muted-foreground mb-4">
                    A specialized cement mixture applied to the interior, creating a smooth, seamless liner bonded to masonry walls.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Preserves full flue diameter</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Strengthens chimney structure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Fills cracks and gaps in existing masonry</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Works with offsets and unusual configurations</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Typical Cost Installed:</p>
                    <p className="text-2xl font-bold">$2,000 - $4,000</p>
                    <p className="text-sm text-muted-foreground mt-1">Depending on chimney size and condition</p>
                  </div>
                </CardContent>
              </Card>

              {/* Clay Tile */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Clay Tile Liners</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional liner material found in most masonry chimneys built before the 1980s. Clay tiles stacked during construction.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Good heat resistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Long service life under ideal conditions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cannot be repaired in place when cracked</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Joints between tiles can fail</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    After 30-50 years, clay tile liners commonly show cracking from thermal cycling and deterioration.
                  </p>
                </CardContent>
              </Card>

              {/* Aluminum */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Aluminum Liners</h3>
                  <p className="text-muted-foreground mb-4">
                    Lightweight liners suitable only for gas appliances. Cannot withstand temperatures from wood burning.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-900">Gas Appliances Only</p>
                        <p className="text-sm text-amber-800">Never use aluminum liners with wood-burning fireplaces</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Typical Cost Installed:</p>
                    <p className="text-2xl font-bold">$800 - $1,500</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Liner Service */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Signs Your Liner Needs Attention</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Clay Tile Pieces in Firebox</h3>
                    <p className="text-slate-300 text-sm">Broken liner material falling indicates the liner is deteriorating</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Video Inspection Shows Cracks</h3>
                    <p className="text-slate-300 text-sm">Cracks allow heat and gases to reach the chimney structure</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Smoke or Odors in Adjacent Rooms</h3>
                    <p className="text-slate-300 text-sm">Gases escaping through liner cracks enter living spaces</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Uneven Creosote Accumulation</h3>
                    <p className="text-slate-300 text-sm">Gaps in liner create turbulence causing uneven deposits</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Home Inspector Flags Issues</h3>
                    <p className="text-slate-300 text-sm">Common during pre-purchase inspections of older homes</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Your Chimney is Unlined</h3>
                    <p className="text-slate-300 text-sm">Pre-1940s homes sometimes have no interior liner—requires immediate lining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Installation Process</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-8 h-8 text-primary" />
                Stainless Steel Liner Installation
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Assessment</h4>
                    <p className="text-muted-foreground">We inspect the chimney to verify dimensions, check for obstructions, and confirm the liner will fit properly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Preparation</h4>
                    <p className="text-muted-foreground">The existing chimney is cleaned thoroughly. Any debris or loose material is removed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Liner Insertion</h4>
                    <p className="text-muted-foreground">The stainless steel liner is carefully fed down the chimney from the top, coordinating technicians at both ends.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold mb-1">Connection & Termination</h4>
                    <p className="text-muted-foreground">Liner is connected at the bottom and secured at the top with a cap assembly that seals while providing rain and animal protection.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold mb-1">Insulation (When Required)</h4>
                    <p className="text-muted-foreground">For wood-burning applications in exterior chimneys, insulation fills the space between liner and chimney walls.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6 p-4 bg-slate-50 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="font-semibold">Timeline: Most installations complete in one day</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-8 h-8 text-primary" />
                Cast-in-Place Installation
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Assessment & Preparation</h4>
                    <p className="text-muted-foreground">Similar to stainless steel, plus evaluation of internal chimney surfaces for bonding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Form Insertion</h4>
                    <p className="text-muted-foreground">An inflatable form is positioned inside the chimney.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Material Placement</h4>
                    <p className="text-muted-foreground">The specialized liner mixture is poured or pumped into the space between form and chimney walls.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold mb-1">Curing</h4>
                    <p className="text-muted-foreground">The material cures around the form, bonding to the chimney walls.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold mb-1">Form Removal</h4>
                    <p className="text-muted-foreground">Once cured, the form is deflated and removed, leaving a smooth, continuous liner.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6 p-4 bg-slate-50 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="font-semibold">Timeline: Typically requires 1-2 days including curing time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mad Hatter */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Mad Hatter for Liner Installation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">45+ Years of Installation Experience</h3>
                  <p className="text-muted-foreground">We've installed liners in every type of chimney across the greater Seattle area.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Master Chimney Sweep Certification</h3>
                  <p className="text-muted-foreground">Advanced knowledge of chimney systems, liner requirements, and proper installation techniques.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Both Liner Types Available</h3>
                  <p className="text-muted-foreground">We install stainless steel and cast-in-place liners, recommending what's best for your chimney.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Quality Products</h3>
                  <p className="text-muted-foreground">We use liners from reputable manufacturers with strong warranties.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Complete Service</h3>
                  <p className="text-muted-foreground">From inspection and diagnosis through installation and final testing—one company handles everything.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Video Camera Assessment</h3>
                  <p className="text-muted-foreground">We show you exactly what's happening inside your chimney before recommending solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Liner Assessment</h2>
            <p className="text-xl mb-8 text-balance">
              If you suspect liner problems—or if your chimney hasn't been inspected recently—professional evaluation determines exactly what your liner needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="tel:2062746409">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (206) 274-6409
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link href="/#contact">Schedule Assessment</Link>
              </Button>
            </div>
            <p className="mt-8 text-slate-200">
              45 years of certified expertise serving the greater Seattle area
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
