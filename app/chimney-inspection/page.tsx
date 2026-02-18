import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, CheckCircle, Camera, FileText, Shield, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Inspection Seattle | Professional Level 1, 2 & 3 Inspections",
  description: "Professional chimney inspection services in Seattle. Level 1, 2, and 3 inspections with video camera technology. 45+ years of certified expertise. Same-day service available.",
}

export default function ChimneyInspectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Chimney Inspection: What to Expect, What It Costs & Why It Matters
              </h1>
              <p className="text-xl text-slate-300 mb-8 text-pretty">
                Professional inspection finds hidden problems before they become fires, carbon monoxide leaks, or expensive emergencies. 45+ years of certified inspection expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Inspection
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                  Learn About Levels
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                A chimney inspection reveals what's happening inside a system you can't see. Cracks, creosote buildup, water damage, structural problems, and safety hazards all hide behind brick walls and inside flue passages that are invisible from your living room. Professional inspection finds these problems before they become fires, carbon monoxide leaks, or expensive emergencies.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The National Fire Protection Association recommends annual chimney inspection for every home with a fireplace, wood stove, or fuel-burning appliance that vents through a chimney. This isn't an upsell—it's a safety standard based on decades of fire investigation data showing that undetected chimney problems cause preventable home fires and carbon monoxide poisoning.
              </p>
            </div>
          </div>
        </section>

        {/* Three Levels of Inspection */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Three Levels of Chimney Inspection
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Level 1 */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold">Level 1</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-4">
                      Covers all readily accessible areas without specialized tools.
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-slate-900">What's Covered:</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Chimney exterior inspection</li>
                        <li>• Firebox interior</li>
                        <li>• Visible flue surfaces</li>
                        <li>• Basic draft assessment</li>
                        <li>• Clearances check</li>
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">When Appropriate:</p>
                      <p className="text-sm text-slate-600">
                        Annual maintenance inspection when no changes have been made and no problems are suspected.
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <p className="text-2xl font-bold text-primary">$150-250</p>
                      <p className="text-sm text-slate-500">Typical cost</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Level 2 */}
                <Card className="border-2 border-primary shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Camera className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">Level 2</h3>
                    </div>
                    
                    <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      RECOMMENDED
                    </div>
                    
                    <p className="text-slate-600 mb-4">
                      Includes Level 1 plus video camera inspection of flue interior.
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-slate-900">What's Added:</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Video camera flue scan</li>
                        <li>• Attic/crawlspace assessment</li>
                        <li>• Clearance verification</li>
                        <li>• Detailed component evaluation</li>
                        <li>• Video documentation</li>
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">When Appropriate:</p>
                      <p className="text-sm text-slate-600">
                        Home sales, after chimney fires, fuel type changes, or whenever thorough evaluation is needed.
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <p className="text-2xl font-bold text-primary">$250-500</p>
                      <p className="text-sm text-slate-500">Typical cost</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Level 3 */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-2xl font-bold">Level 3</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-4">
                      Includes Level 2 plus access to concealed areas requiring component removal.
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-slate-900">What's Added:</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Removal of chase/wall coverings</li>
                        <li>• Full structural evaluation</li>
                        <li>• Hidden damage assessment</li>
                        <li>• Comprehensive documentation</li>
                        <li>• Code compliance verification</li>
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">When Appropriate:</p>
                      <p className="text-sm text-slate-600">
                        Suspected serious hazards, after significant chimney fires, or when structural damage extent is unclear.
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <p className="text-2xl font-bold text-primary">$500-2,000+</p>
                      <p className="text-sm text-slate-500">Depending on access required</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-slate-700">
                  <strong>Our Recommendation:</strong> Level 2 is our standard recommendation for most homeowners because the video camera inspection reveals conditions that are simply invisible otherwise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Inspector Examines */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What a Professional Inspector Examines
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Exterior */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Chimney Exterior</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Crown</p>
                        <p className="text-sm text-slate-600">Cracks, slope, overhang, water pooling signs</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Chimney Cap</p>
                        <p className="text-sm text-slate-600">Presence, security, sizing, condition</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Flashing</p>
                        <p className="text-sm text-slate-600">Gaps, corrosion, lifting, water penetration</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Masonry</p>
                        <p className="text-sm text-slate-600">Brick/mortar condition, cracks, efflorescence</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Structure</p>
                        <p className="text-sm text-slate-600">Leaning, shifting, separation, foundation</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Interior */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Chimney Interior</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Flue Liner</p>
                        <p className="text-sm text-slate-600">Cracks, gaps, corrosion, proper sizing, integrity</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Creosote Levels</p>
                        <p className="text-sm text-slate-600">Accumulation measurement and stage identification</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Obstructions</p>
                        <p className="text-sm text-slate-600">Nests, debris, collapsed sections</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Smoke Chamber</p>
                        <p className="text-sm text-slate-600">Condition, shape, creosote accumulation</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Firebox & Performance */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Firebox & Performance</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Firebox Integrity</p>
                        <p className="text-sm text-slate-600">Walls, floor, back wall cracks or deterioration</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Damper</p>
                        <p className="text-sm text-slate-600">Operation, sealing, overall condition</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Hearth</p>
                        <p className="text-sm text-slate-600">Code compliance, size, proper materials</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Draft</p>
                        <p className="text-sm text-slate-600">Proper draw verification</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Clearances</p>
                        <p className="text-sm text-slate-600">Adequate spacing from combustibles</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need Inspection */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                When You Need a Chimney Inspection
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Annually", desc: "Every chimney in use should be inspected yearly. This is the NFPA recommendation and the single most effective step for chimney safety." },
                  { title: "Before Buying a Home", desc: "Standard home inspections give chimneys minimal attention. Specialized inspection identifies problems general inspectors miss." },
                  { title: "Before Selling", desc: "Recent professional inspection showing well-maintained chimney supports asking price and prevents negotiation delays." },
                  { title: "After a Chimney Fire", desc: "Even small fires can cause internal damage invisible from outside. Professional inspection determines extent of damage." },
                  { title: "After Severe Weather", desc: "Earthquakes, severe wind, and ice storms can damage structures. Post-event inspection verifies integrity." },
                  { title: "After Long Inactivity", desc: "If fireplace unused for a year+, inspect before first fire. Conditions change during inactivity." },
                  { title: "When You Notice Problems", desc: "Smoke backup, unusual odors, visible damage, water intrusion, or poor draft warrant professional inspection." },
                  { title: "Before First Use", desc: "New homeowners should have chimney inspected before using inherited fireplace for the first time." }
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Report Should Include */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What Your Inspection Report Should Include
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Component-by-Component Assessment",
                    desc: "Each part of the chimney system evaluated and rated—not just 'chimney looks okay' but specific findings for crown, flashing, mortar, bricks, liner, smoke chamber, damper, and firebox."
                  },
                  {
                    icon: Camera,
                    title: "Photographs & Video",
                    desc: "Visual documentation of findings, especially problems or areas of concern. Level 2 inspections include still images from camera inspection showing interior flue conditions."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Safety Findings",
                    desc: "Any conditions that represent immediate safety concerns, clearly identified and prioritized so you know what needs attention first."
                  },
                  {
                    icon: CheckCircle,
                    title: "Recommendations & Estimates",
                    desc: "Specific repair or maintenance recommendations prioritized by urgency, with approximate costs for recommended work allowing you to plan and budget."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-100 rounded-lg">
                <p className="text-slate-700 leading-relaxed">
                  This documentation serves multiple purposes—guiding your maintenance decisions, supporting insurance claims if damage occurs, and providing buyers with professional assessment during home sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection vs Home Inspection */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Chimney Inspection vs. Home Inspection
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-slate-300">Home Inspection</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Visual check from ground</li>
                    <li>• Quick look inside firebox</li>
                    <li>• Catches obvious problems only</li>
                    <li>• Generalist covering entire home</li>
                    <li>• No specialized tools</li>
                    <li>• Misses most chimney issues</li>
                  </ul>
                </div>

                <div className="bg-primary p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Chimney Inspection</h3>
                  <ul className="space-y-2">
                    <li>• Complete exterior assessment</li>
                    <li>• Video camera flue inspection</li>
                    <li>• Finds hidden problems</li>
                    <li>• Specialist chimney knowledge</li>
                    <li>• Professional equipment</li>
                    <li>• Comprehensive evaluation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-yellow-400">Important:</strong> If you're buying a home with a fireplace, a dedicated chimney inspection by a certified chimney professional is strongly recommended in addition to the general home inspection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mad Hatter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Mad Hatter for Chimney Inspection
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "45+ Years of Inspection Experience", desc: "Since 1979, we've inspected thousands of chimneys. Our knowledge of what to look for and what findings mean is unmatched in greater Seattle." },
                  { icon: CheckCircle, title: "Master Chimney Sweep Certification", desc: "The highest industry credential. Advanced inspection techniques, current standards, and comprehensive knowledge." },
                  { icon: FileText, title: "21-Point Inspection Process", desc: "Systematic evaluation covering every component. Nothing overlooked." },
                  { icon: Camera, title: "Video Camera Technology", desc: "We see inside your chimney where the most important conditions hide." },
                  { icon: FileText, title: "Complete Documentation", desc: "Detailed reports with photographs, condition ratings, and prioritized recommendations." },
                  { icon: CheckCircle, title: "Full Service", desc: "Inspection, cleaning, and repair from one certified company. If we find problems, we fix them." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Chimney Inspection
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Professional inspection is the foundation of chimney safety. One annual assessment prevents fires, catches damage early, and ensures your family's safety. It's the smartest investment a fireplace owner can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (206) 274-6409
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                  Request Inspection
                </Button>
              </div>
              <p className="mt-8 text-slate-400">
                Same-day and next-day service available throughout the greater Seattle area
              </p>
              <p className="mt-4 text-lg font-semibold text-primary">
                45 years of certified expertise. Your chimney deserves professional assessment.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
