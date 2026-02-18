import { Droplets, Shield, Snowflake, Wrench, Layers, CheckCircle2, XCircle, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chimney Waterproofing Seattle | Protect Your Masonry from Moisture",
  description: "Professional chimney waterproofing in Seattle. Protect your chimney from water damage, freeze-thaw cycles, and mortar deterioration. 45+ years experience. Call today.",
  keywords: "chimney waterproofing Seattle, masonry sealing, chimney protection, water damage prevention, breathable sealant",
}

export default function ChimneyWaterproofingPage() {
  const damageTypes = [
    {
      icon: Snowflake,
      title: "Freeze-Thaw Destruction",
      description: "Water absorbed into masonry expands by 9% when frozen, forcing cracks wider and progressively breaking down the structure through repeated cycles."
    },
    {
      icon: Droplets,
      title: "Mortar Dissolution",
      description: "Water dissolves calcium compounds in mortar over time, weakening the structure and creating white efflorescence deposits on brick surfaces."
    },
    {
      icon: Wrench,
      title: "Steel Corrosion",
      description: "Dampers, flashing, and liner connections corrode when exposed to persistent moisture, weakening components and creating penetration gaps."
    },
    {
      icon: Layers,
      title: "Interior Damage",
      description: "Water migrates inward causing wall staining, drywall damage, paint deterioration, mold growth, and flue liner damage from outside in."
    }
  ]

  const applicationSteps = [
    {
      number: "1",
      title: "Surface Preparation",
      description: "Clean and dry chimney surface. Remove dirt, efflorescence, moss, and loose material for proper adhesion."
    },
    {
      number: "2",
      title: "Repair First",
      description: "Fix any mortar failure, crown damage, or brick problems before waterproofing. Never seal over existing damage."
    },
    {
      number: "3",
      title: "Application",
      description: "Apply waterproofing agent to all exposed masonry by spray for even coverage. Multiple coats ensure thorough protection."
    },
    {
      number: "4",
      title: "Curing",
      description: "Allow 24-48 hours of dry weather for proper curing. Schedule during appropriate weather windows."
    }
  ]

  const whenNeeded = [
    "After mortar repair or repointing work",
    "When you see white efflorescence on bricks",
    "Water stains visible on interior walls or ceilings",
    "Preventively on new or restored chimneys",
    "Bricks feel damp days after rain has stopped",
    "Every 5-7 years for ongoing protection"
  ]

  const professionalBenefits = [
    {
      icon: Shield,
      title: "Commercial-Grade Products",
      description: "Breathable sealants specifically formulated for masonry chimneys, not hardware store water sealers."
    },
    {
      icon: CheckCircle2,
      title: "Proper Preparation",
      description: "Clean, sound surfaces ensure proper adhesion and penetration of waterproofing agent."
    },
    {
      icon: Wrench,
      title: "Repair Integration",
      description: "Identify and fix existing damage before waterproofing. Sealing over damage is counterproductive."
    },
    {
      icon: Layers,
      title: "Complete Coverage",
      description: "Professional spray application ensures even, thorough coverage including hard-to-reach areas."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Chimney Waterproofing: Protect Your Masonry from Pacific Northwest Moisture
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Water destroys more chimneys than fire ever will. In the Pacific Northwest, where annual rainfall exceeds 37 inches and months of persistent dampness keep masonry saturated, chimney waterproofing isn't optional—it's essential protection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#contact">Schedule Waterproofing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/chimney-inspection">Get Inspection First</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Value */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Cost-Effective Protection</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Waterproofing is one of the most cost-effective chimney investments you can make. For <strong className="text-foreground">$200-500</strong>, you dramatically reduce the water absorption that causes the majority of chimney damage—damage that costs thousands to repair once it takes hold.
            </p>
          </div>
        </div>
      </section>

      {/* How Water Damages Chimneys */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Water Damages Chimneys</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Brick and mortar are porous. In the Pacific Northwest, chimneys rarely dry completely from October through May. This persistent saturation enables several destructive processes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {damageTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <Icon className="w-12 h-12 mb-4 text-destructive" />
                      <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                      <p className="text-muted-foreground">{type.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How Waterproofing Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Chimney Waterproofing Works</h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Breathable Protection</h3>
                    <p className="text-muted-foreground mb-4">
                      Professional chimney waterproofing uses breathable sealants that prevent liquid water from entering masonry while allowing water vapor to escape from within. This distinction is critical.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Why Breathability Matters
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Masonry always contains some internal moisture. A non-breathable coating (like paint) traps this moisture inside where it migrates deeper, freezes, and causes damage from within. Breathable waterproofing lets internal moisture escape as vapor while blocking external liquid water from entering.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6">Professional Application Process</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {applicationSteps.map((step) => (
                <Card key={step.number}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When Your Chimney Needs Waterproofing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">When Your Chimney Needs Waterproofing</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {whenNeeded.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing vs Painting */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Waterproofing vs. Painting</h2>
            <p className="text-center text-muted-foreground mb-8">
              Homeowners sometimes consider painting their chimney instead of waterproofing. This is counterproductive:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-6 h-6 text-destructive" />
                    <h3 className="text-xl font-semibold">Painting (Don't Do This)</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Traps moisture inside masonry causing hidden damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Peels as trapped moisture builds pressure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Sits on surface rather than penetrating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Creates ongoing maintenance problems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Professional Waterproofing</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Penetrates masonry at molecular level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Remains breathable, allowing vapor escape</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Invisible—chimney looks the same, just drier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Lasts 5-10 years with minimal maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Longevity */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">How Long Does Waterproofing Last?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Quality breathable waterproofing products typically last <strong className="text-foreground">5-10 years</strong> depending on exposure conditions. South-facing and west-facing chimney surfaces may need reapplication sooner than sheltered surfaces.
            </p>
            <p className="text-muted-foreground">
              We recommend reapplication every <strong className="text-foreground">5-7 years</strong> for chimneys in the greater Seattle area. This maintenance schedule provides continuous protection at minimal cost.
            </p>
          </div>
        </div>
      </section>

      {/* Why Professional Application */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Professional Application</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {professionalBenefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="mt-8 border-primary/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Safety Consideration
                </h3>
                <p className="text-muted-foreground">
                  Chimney waterproofing requires working at roof height around the full chimney perimeter. Professional equipment and training ensure safe application while protecting you and your property.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mad Hatter Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Mad Hatter for Chimney Waterproofing</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">45+ Years of Experience</h3>
                  <p className="text-sm text-muted-foreground">Protecting chimneys from Pacific Northwest moisture since 1979.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Master Chimney Sweep Certification</h3>
                  <p className="text-sm text-muted-foreground">Highest industry credential ensuring expert knowledge.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Commercial-Grade Products</h3>
                  <p className="text-sm text-muted-foreground">Professional breathable sealants formulated specifically for chimneys.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Complete Service</h3>
                  <p className="text-sm text-muted-foreground">Inspection, repair, and waterproofing from one certified company.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Chimney Waterproofing</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              In our climate, waterproofing pays for itself by preventing the water damage that drives most chimney repairs. Protect your chimney before moisture damage develops—or stop existing moisture problems from getting worse.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/#contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Service
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/chimney-inspection">Get Inspection First</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-primary-foreground/80">
              45 years of certified expertise protecting chimneys from Pacific Northwest moisture.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
