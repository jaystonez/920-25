import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Shield, FileText, Clock, Users, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Apartment Chimney Sweep Seattle | Multi-Unit Building Specialists",
  description: "Specialized chimney service for apartments, condos, and multi-unit buildings in Seattle. 45+ years experience with shared flue systems, HOA compliance, and property management coordination.",
}

export default function ApartmentChimneySweepSeattle() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Multi-Unit Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Apartment Chimney Sweep Seattle
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-balance">
              Specialized Service for Multi-Unit Buildings
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Apartment and condominium chimneys require specialized expertise that most chimney services don't offer. 
              Multi-unit buildings have unique challenges—shared flue systems, access coordination, building management 
              requirements, and safety regulations that differ from single-family homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/#contact">Schedule Building Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="tel:2062746409">Call (206) 274-6409</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Specialized Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Apartment Chimneys Need Specialized Service
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shared Flue Systems</h3>
                <p className="text-slate-600 mb-4">
                  Many apartment buildings use shared chimney systems where multiple units vent through the same chimney structure.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Cross-contamination risk between units</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Coordinated service requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complex diagnostic needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Building Access & Coordination</h3>
                <p className="text-slate-600 mb-4">
                  Apartment chimney service requires coordination that single-family work doesn't.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tenant scheduling and access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Roof access procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Common area protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Regulatory Requirements</h3>
                <p className="text-slate-600 mb-4">
                  Multi-unit buildings face fire code and safety regulations that single-family homes don't.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fire code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Insurance requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Liability protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Apartment & Condo Services
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Building-Wide Chimney Assessment</h3>
                <p className="text-slate-600 mb-4">
                  We evaluate the entire chimney system as a whole, not just individual unit connections:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>System Mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Condition Assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority Identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Budget Planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Unit-by-Unit Cleaning</h3>
                <p className="text-slate-600 mb-4">
                  We clean each unit's fireplace and chimney connection thoroughly:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complete firebox cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Damper cleaning and testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Flue connection cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Creosote removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Individual unit inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Per-unit documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Shared System Maintenance</h3>
                <p className="text-slate-600 mb-4">
                  Beyond individual units, we maintain the shared chimney infrastructure:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Main chimney flue cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Crown and cap maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Flashing inspection and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Masonry assessment and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>System-wide safety evaluation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Property Managers & HOAs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">For Property Managers</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Managing chimney maintenance across a building
              </h2>
              <p className="text-slate-600 mb-6">
                Managing chimney maintenance across a building requires a service provider who understands your needs:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Efficient Scheduling</strong>
                    <span className="text-slate-600 text-sm">
                      We coordinate with your tenant communication and access systems to complete work with minimal disruption
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Clear Documentation</strong>
                    <span className="text-slate-600 text-sm">
                      Detailed reports for each unit and the overall system that satisfy insurance requirements
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Budget-Friendly Approach</strong>
                    <span className="text-slate-600 text-sm">
                      Building-wide service at competitive per-unit pricing
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Single Point of Contact</strong>
                    <span className="text-slate-600 text-sm">
                      One certified company handles all chimney needs—no coordinating multiple contractors
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">For Condo Owners & HOAs</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Condo chimney maintenance
              </h2>
              <p className="text-slate-600 mb-6">
                Condo chimney maintenance involves shared responsibility and collective decision-making:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">HOA Compliance</strong>
                    <span className="text-slate-600 text-sm">
                      Documentation that satisfies HOA maintenance requirements and demonstrates due diligence
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Individual Unit Service</strong>
                    <span className="text-slate-600 text-sm">
                      Condo owners can schedule individual service for their unit's fireplace
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Building-Wide Programs</strong>
                    <span className="text-slate-600 text-sm">
                      Annual service programs covering all units for consistent maintenance
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Board Presentations</strong>
                    <span className="text-slate-600 text-sm">
                      Clear, non-technical summaries for board meetings and owner communications
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Seattle Apartment Areas We Serve
            </h2>
            <p className="text-center text-slate-600 mb-8">
              We provide apartment and condo chimney service throughout Seattle:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Capitol Hill - historic apartment buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Queen Anne - established buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ballard / Fremont - mixed vintage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>University District - residential buildings</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>First Hill / Central District</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>West Seattle - condominiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Wallingford / Green Lake</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Columbia City / Beacon Hill</span>
                </li>
              </ul>
            </div>
            <p className="text-center text-slate-600 mt-6">
              We also serve apartment and condo buildings throughout Bellevue, Redmond, Kirkland, and the greater Eastside.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Apartment Chimney Service
            </h2>
            <p className="text-xl text-slate-300 mb-8 text-balance">
              Multi-unit chimney maintenance protects your building, your tenants, and your investment. 
              Professional service ensures safety compliance, prevents expensive damage, and provides the documentation your building requires.
            </p>
            <p className="text-slate-400 mb-8">
              45 years of Seattle apartment and condo chimney expertise. The specialized service your multi-unit building deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/#contact">Request Building Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="tel:2062746409">Call (206) 274-6409</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
