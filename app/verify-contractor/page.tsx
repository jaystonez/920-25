import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2, XCircle, Shield, MapPin, FileCheck, Phone, CreditCard } from "lucide-react"

export const metadata = {
  title: "How to Verify a Chimney Contractor | Avoid Scams | The Mad Hatter",
  description: "Protect yourself from chimney sweep scams. Learn how to verify legitimate contractors and spot common fraud tactics in the Seattle area.",
}

export default function VerifyContractorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Get Scammed: How to Verify Your Chimney Contractor
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              The Seattle area has been infiltrated by fraudulent chimney companies using fake addresses, 
              bait-and-switch pricing, and operating without proper licenses. Learn how to protect yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">🚨 Red Flags: Signs of a Scam Operation</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <XCircle className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-900">Suspiciously Low Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-red-800">
                  <p className="mb-2"><strong>The Bait:</strong> "$99 Chimney Sweep & Inspection!"</p>
                  <p className="text-sm">Professional chimney services cost $250-450 due to labor, equipment, and insurance. 
                  Scammers use low prices to get in your door, then hit you with thousands in "emergency repairs."</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <XCircle className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-900">Fake Local Addresses</CardTitle>
                </CardHeader>
                <CardContent className="text-red-800">
                  <p className="mb-2"><strong>The Trick:</strong> UPS Store addresses or hijacked locations</p>
                  <p className="text-sm">Many scam operations list addresses at UPS Stores (look for "Suite #") or even 
                  preschools and residential homes to appear local. They have no real shop or local presence.</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <XCircle className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-900">No License or Insurance</CardTitle>
                </CardHeader>
                <CardContent className="text-red-800">
                  <p className="mb-2"><strong>The Risk:</strong> Operating without WA L&I registration</p>
                  <p className="text-sm">If a contractor isn't licensed and bonded, YOU are liable for injuries on your property. 
                  Plus, there's no recourse if they damage your home or start a fire due to poor work.</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <XCircle className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-900">Multiple Identical Listings</CardTitle>
                </CardHeader>
                <CardContent className="text-red-800">
                  <p className="mb-2"><strong>The Scheme:</strong> Same company, 50 different names</p>
                  <p className="text-sm">Search results dominated by companies with nearly identical websites, phone numbers that 
                  redirect to the same call center, and the same person answering for multiple "businesses."</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <XCircle className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-900">High-Pressure Scare Tactics</CardTitle>
                </CardHeader>
                <CardContent className="text-red-800">
                  <p className="mb-2"><strong>The Switch:</strong> "Your chimney is a fire hazard!"</p>
                  <p className="text-sm">Once inside, technicians claim to find "immediate dangers" requiring thousands in repairs. 
                  They pressure you to sign contracts on the spot or claim they can't leave the chimney in "unsafe condition."</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <XCircle className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-900">Shell Company Switching</CardTitle>
                </CardHeader>
                <CardContent className="text-red-800">
                  <p className="mb-2"><strong>The Escape:</strong> New name when complaints pile up</p>
                  <p className="text-sm">When one company gets too many bad reviews or BBB complaints, they simply 
                  start a new LLC and abandon the old one. No accountability, no refunds, no recourse.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">✅ How to Verify a Legitimate Contractor</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <CardTitle>Check Washington State L&I Registration</CardTitle>
                      <CardDescription>This is the #1 most important step</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Go directly to the Washington State Department of Labor & Industries website:</p>
                  <Button asChild className="mb-4">
                    <a href="https://secure.lni.wa.gov/verify/" target="_blank" rel="noopener noreferrer">
                      Verify Contractor on L&I Website →
                    </a>
                  </Button>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Look up the contractor's name and license number</li>
                    <li>• Verify the registration is CURRENT and not expired</li>
                    <li>• Check that insurance and bond are active</li>
                    <li>• Look for any violations or complaints</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <CardTitle>Verify the Physical Address</CardTitle>
                      <CardDescription>Make sure they have a real local shop</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Google the address separately - does a shop actually exist there?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Is it a suite number at a UPS Store or shipping center? RED FLAG</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Drive by before hiring - can you see signage and a real business?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Is it a residential address or a preschool? MAJOR RED FLAG</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <CardTitle>Check BBB and Online Reviews Carefully</CardTitle>
                      <CardDescription>But know that scammers manipulate these too</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Look for patterns in negative reviews: bait-and-switch, same rep for multiple companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Check if the company is BBB ACCREDITED vs. just using the BBB logo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Search for the business name + "scam" or "complaint" on Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Multiple 5-star reviews posted on the same day? Likely fake</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <CardTitle>Get Everything in Writing</CardTitle>
                      <CardDescription>Before any work begins</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Written estimate with TOTAL cost, not just "starting at $99"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Clear scope of work - exactly what will be done</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Warranty information and terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Company's L&I registration number on the contract</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <CardTitle>Trust Your Gut</CardTitle>
                      <CardDescription>If something feels off, it probably is</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Tech immediately finds "emergency" problems requiring thousands? Walk away.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Pressure to sign or pay immediately? RED FLAG.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Company name on truck doesn't match who you hired? Stop the work.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>No written estimate or contract before starting? Don't allow them to begin.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mad Hatter Verification */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 mx-auto mb-6 text-green-400" />
              <h2 className="text-3xl font-bold mb-4">How to Verify The Mad Hatter Chimney Sweep</h2>
              <p className="text-lg text-white/80">We encourage you to verify us before hiring. Here's how:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <FileCheck className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-white">Our L&I Registration</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><strong className="text-white">License #:</strong> [YOUR LICENSE NUMBER]</p>
                  <p className="text-sm mb-4">Fully bonded and insured. Verify us at secure.lni.wa.gov/verify/</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://secure.lni.wa.gov/verify/" target="_blank" rel="noopener noreferrer">
                      Verify Our License →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-white">Our Real Shop Location</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><strong className="text-white">Address:</strong> [YOUR ACTUAL SHOP ADDRESS]</p>
                  <p className="text-sm mb-4">Not a UPS box. Not a hijacked address. A real, physical shop you can visit.</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="[GOOGLE MAPS LINK]" target="_blank" rel="noopener noreferrer">
                      View on Google Maps →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <Phone className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-white">Direct Owner Contact</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><strong className="text-white">Phone:</strong> (206) 274-6409</p>
                  <p className="text-sm">One phone number, one business. When you call, you get us - not a call center managing 50 fake companies.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CreditCard className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-white">Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><strong className="text-white">Standard Sweep:</strong> $295-395</p>
                  <p className="text-sm">No bait-and-switch. Written estimate before work begins. No high-pressure tactics.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/#contact">Get Your Free, Honest Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <AlertTriangle className="w-10 h-10 text-amber-600 mb-2" />
                <CardTitle className="text-xl">Been Scammed? Report It</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">If you've been victimized by a fraudulent chimney service, report it to:</p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Washington Attorney General:</strong> <a href="https://www.atg.wa.gov/file-complaint" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">atg.wa.gov/file-complaint</a></li>
                  <li><strong>Better Business Bureau:</strong> <a href="https://www.bbb.org/file-a-complaint" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">bbb.org/file-a-complaint</a></li>
                  <li><strong>WA Dept of Labor & Industries:</strong> Call 1-800-647-0982</li>
                  <li><strong>Federal Trade Commission:</strong> <a href="https://reportfraud.ftc.gov" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">reportfraud.ftc.gov</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
