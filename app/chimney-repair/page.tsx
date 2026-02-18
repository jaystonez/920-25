import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Check, Phone, Wrench, Home, ShieldCheck, Award, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chimney Repair Seattle | Crown, Flashing, Mortar & Liner Repair",
  description: "Professional chimney repair services in Seattle. Crown repair, flashing replacement, repointing, liner installation. 45+ years experience. Licensed & certified.",
}

export default function ChimneyRepairPage() {
  const commonRepairs = [
    {
      name: "Crown Repair",
      signs: "Visible cracks, water stains, concrete pieces at base",
      solutions: "Crown sealing for minor cracks, full replacement for extensive damage",
      cost: "$200-$1,500"
    },
    {
      name: "Flashing Repair",
      signs: "Water stains on ceiling, visible gaps, rusted metal",
      solutions: "Sealing for minor gaps, complete replacement for corrosion",
      cost: "$200-$1,200"
    },
    {
      name: "Mortar Joint Repair",
      signs: "Crumbling mortar, white staining, loose bricks",
      solutions: "Professional repointing with properly matched mortar",
      cost: "$500-$4,000"
    },
    {
      name: "Liner Repair/Replacement",
      signs: "Clay tile pieces in firebox, smoke leaks, video inspection findings",
      solutions: "Stainless steel or cast-in-place liner installation",
      cost: "$1,200-$4,000"
    },
    {
      name: "Chimney Cap",
      signs: "No cap present, rust damage, animal entry",
      solutions: "Stainless steel cap with mesh screening",
      cost: "$200-$800"
    },
    {
      name: "Brick Replacement",
      signs: "Spalling bricks, crumbling surfaces, brick fragments",
      solutions: "Individual brick removal and replacement with matching materials",
      cost: "$50-$150 per brick"
    }
  ]

  const damageCauses = [
    {
      title: "Water Damage",
      description: "The primary enemy of chimneys. Water enters through cracks, failed flashing, and porous masonry, causing widespread deterioration."
    },
    {
      title: "Freeze-Thaw Cycles",
      description: "Water freezes and expands in cracks, forcing them wider. Each cycle progressively destroys mortar and brick."
    },
    {
      title: "Thermal Cycling",
      description: "Repeated heating and cooling stresses materials, particularly clay tile liners, causing cracks over years of use."
    },
    {
      title: "Age and Settling",
      description: "All materials deteriorate over time. Mortar has a finite lifespan. Professional maintenance extends longevity dramatically."
    },
    {
      title: "Poor Construction",
      description: "Chimneys built with inadequate materials or improper techniques develop problems earlier than well-built chimneys."
    }
  ]

  const urgencyLevels = [
    {
      level: "Urgent",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      issues: "Chimney leaning, active water leaks into living spaces, structural cracks, smoke entering rooms, post-fire damage"
    },
    {
      level: "Soon",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      issues: "Deteriorating mortar, cracked crown, minor flashing gaps, spalling bricks, missing cap"
    },
    {
      level: "Scheduled",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      issues: "Cosmetic mortar work, preventive waterproofing, cap upgrade, minor brick repairs"
    }
  ]

  const whyProfessional = [
    {
      icon: Home,
      title: "Height & Safety",
      description: "Roof work requires proper safety equipment and training. Falls cause serious injuries."
    },
    {
      icon: Wrench,
      title: "Materials Knowledge",
      description: "Wrong mortar or sealant can cause more damage. Professionals know what's appropriate."
    },
    {
      icon: ShieldCheck,
      title: "Structural Understanding",
      description: "Repairs affect structural integrity. Improper work creates new hazards."
    },
    {
      icon: FileText,
      title: "Code Compliance",
      description: "Repairs must meet fire codes and building standards. Professional work ensures compliance."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Chimney Repair: Common Problems, Costs & Finding the Right Professional
            </h1>
            <p className="text-xl text-slate-200 mb-8 text-pretty">
              Professional chimney repair stops deterioration, prevents expensive replacement, and ensures your chimney operates safely. 45+ years of certified expertise serving greater Seattle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/#contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Assessment
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/verify-business">Check Contractor Legitimacy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Most Common Chimney Repairs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonRepairs.map((repair, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">{repair.name}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Signs You Need This:</p>
                        <p className="text-sm text-slate-600">{repair.signs}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Solutions:</p>
                        <p className="text-sm text-slate-600">{repair.solutions}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Typical Cost:</p>
                        <p className="text-sm font-bold text-primary">{repair.cost}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Causes Damage */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Causes Chimney Damage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {damageCauses.map((cause, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">{cause.title}</h3>
                    <p className="text-slate-600">{cause.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-lg font-semibold text-blue-900 text-center">
                Water is the primary enemy of chimneys. Most chimney repairs are ultimately water damage repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Urgency */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">When Chimney Repair is Urgent</h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Some problems can wait for scheduled service. Others need immediate attention.
            </p>
            <div className="space-y-4">
              {urgencyLevels.map((level, index) => (
                <Card key={index} className={`border-2 ${level.border} ${level.bg}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className={`h-6 w-6 ${level.color} flex-shrink-0 mt-1`} />
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${level.color}`}>{level.level}</h3>
                        <p className="text-slate-700">{level.issues}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center text-slate-600 italic">
              When in doubt, professional inspection determines urgency accurately.
            </p>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Professional Chimney Repair Matters</h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
              Some minor maintenance is appropriate for handy homeowners, but most chimney repairs require professional expertise.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {whyProfessional.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                          <p className="text-slate-600">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Finding a Professional */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Finding a Qualified Chimney Repair Professional</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Certification</h3>
                      <p className="text-sm text-slate-600">Look for certified professionals from recognized organizations like CSIA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Masonry Experience</h3>
                      <p className="text-sm text-slate-600">Specialized chimney masonry work requires specific knowledge</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Insurance</h3>
                      <p className="text-sm text-slate-600">Liability insurance and workers' comp are essential for roof work</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Written Estimates</h3>
                      <p className="text-sm text-slate-600">Detailed estimates describing work, materials, timeline, and cost</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mad Hatter */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-8">Why Mad Hatter for Chimney Repair</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              <div>
                <h3 className="font-bold text-lg mb-2">45+ Years of Repair Experience</h3>
                <p className="text-slate-300">Thousands of chimneys repaired since 1979. Every type of damage, every challenge.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Master Chimney Sweep Certification</h3>
                <p className="text-slate-300">The highest industry credential for inspection and repair expertise.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Complete Service</h3>
                <p className="text-slate-300">Inspection, cleaning, repair, and restoration from one certified company.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Honest Assessment</h3>
                <p className="text-slate-300">We repair what needs repairing. No overselling, no minimizing real problems.</p>
              </div>
            </div>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/#contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Repair Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Chimney Damage Gets Worse Without Repair</h2>
            <p className="text-lg text-slate-600 mb-8">
              What costs hundreds to fix today costs thousands if left for next year. Professional inspection identifies exactly what your chimney needs, prioritizes urgent issues, and provides clear cost estimates.
            </p>
            <p className="text-xl font-semibold text-slate-900 mb-8">
              45 years of certified expertise serving the greater Seattle area.
            </p>
            <Button size="lg" asChild>
              <Link href="/#contact">
                <Phone className="mr-2 h-5 w-5" />
                Call for Professional Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
