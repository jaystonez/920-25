import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Phone, CheckCircle2, Shield, AlertTriangle, Award, BookOpen, Flame, Wind } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certified Chimney Sweep | Master Certification | Mad Hatter Chimney Sweep',
  description: 'Why certification matters for chimney safety. Master certified chimney sweeps with 45+ years serving Seattle. Professional expertise, proper technique, accurate assessment.',
  keywords: 'certified chimney sweep, master chimney sweep, CSIA certified, chimney certification, professional chimney sweep, Seattle chimney sweep',
}

export default function CertifiedChimneySweepPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080?text=Professional+certified+chimney+sweep+with+credentials+and+safety+equipment')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Master Chimney Sweep Certified
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Certified Chimney Sweep: Why Certification Matters for Your Home's Safety
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
              Master certified professionals with 45+ years serving greater Seattle. The expertise your chimney requires, the safety your family deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a href="tel:+12065234722">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (206) 523-4722
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
                <Link href="/about">Our Credentials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed">
              When you hire a chimney sweep, certification is the single most important credential to verify. A certified chimney sweep has demonstrated knowledge of chimney systems, fire science, building codes, safety practices, and proper maintenance techniques through rigorous testing. An uncertified sweep may lack the training to identify dangerous conditions, use proper techniques, or protect your home. Mad Hatter Chimney Sweep holds Master Chimney Sweep certification—the highest credential in the industry—and has served the greater Seattle area for over 45 years.
            </p>
            <p className="text-lg leading-relaxed">
              Certification isn't just a piece of paper. It represents comprehensive knowledge that protects your home and family from chimney fires, carbon monoxide exposure, and expensive damage caused by improper maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* What Certification Means */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Chimney Sweep Certification Means</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 text-balance">
              Certified chimney sweeps demonstrate expertise across comprehensive knowledge areas
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Chimney System Design</h3>
                <p className="text-muted-foreground">
                  Understanding how different chimney types work—masonry, factory-built, metal-lined—and the specific maintenance each requires.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fire Science</h3>
                <p className="text-muted-foreground">
                  Understanding how creosote forms, what makes it dangerous, how chimney fires start and spread, and what conditions create the highest risk.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Building Codes</h3>
                <p className="text-muted-foreground">
                  Current fire codes, building regulations, and safety standards that apply to chimney construction, maintenance, and repair.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inspection Techniques</h3>
                <p className="text-muted-foreground">
                  How to properly evaluate chimney condition—what to look for, how to interpret findings, and when to recommend repairs.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cleaning Methods</h3>
                <p className="text-muted-foreground">
                  Proper techniques for different chimney types and creosote stages. Incorrect cleaning can damage liners or leave dangerous deposits.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety Practices</h3>
                <p className="text-muted-foreground">
                  Roof safety, containment procedures, equipment handling, and customer protection for chimney work involving heights and combustible materials.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Certification Matters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Certification Matters for Your Safety</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 text-balance">
              Professional expertise protects your home and family
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Flame className="h-6 w-6 text-destructive" />
                  Fire Prevention
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A certified sweep knows how to assess creosote buildup accurately and clean it thoroughly. They understand the difference between Stage 1, Stage 2, and Stage 3 creosote—and why the distinction matters for your safety.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  An uncertified sweep might miss glazed creosote in the smoke chamber, leave deposits in flue elbows, or fail to recognize conditions that indicate elevated fire risk.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Wind className="h-6 w-6 text-primary" />
                  Carbon Monoxide Protection
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A certified sweep evaluates your chimney's venting capability—not just its cleanliness. They check for blockages, draft problems, liner integrity, and conditions that could allow carbon monoxide to enter your home.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive assessment goes beyond simple cleaning to evaluate system safety.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Proper Technique
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Different chimney types require different cleaning approaches. Clay tile liners, stainless steel liners, cast-in-place liners, and unlined chimneys each have specific requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Using the wrong brushes, wrong technique, or excessive force can damage components that are expensive to repair. Certified sweeps know these differences.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Accurate Problem Identification
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During inspection, certified sweeps identify conditions that untrained eyes miss. A hairline crack in a liner, subtle signs of water intrusion, early-stage spalling, deteriorating mortar hidden behind surface appearance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Missing these signs means missing problems that worsen over time. Catching them early saves thousands in repair costs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Risks of Uncertified Services */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Risks of Hiring Uncertified Chimney Services</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Why proper credentials matter for your safety and investment
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-destructive">
                <h3 className="text-xl font-semibold mb-2">Incomplete Cleaning</h3>
                <p className="text-muted-foreground">
                  Without proper training, a sweep may leave dangerous creosote deposits in areas they don't know to clean or can't reach with consumer-grade equipment. The smoke chamber, flue elbows, and interior surfaces require professional tools and knowledge.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <h3 className="text-xl font-semibold mb-2">Chimney Damage</h3>
                <p className="text-muted-foreground">
                  Improper technique can crack clay tile liners, dislodge mortar, damage dampers, or scratch stainless steel liners. These repairs cost hundreds to thousands of dollars and may not be immediately apparent.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <h3 className="text-xl font-semibold mb-2">Missed Safety Hazards</h3>
                <p className="text-muted-foreground">
                  An untrained eye misses cracked liners, failing flashing, deteriorating crowns, and structural problems that certified sweeps identify routinely. These missed conditions can lead to chimney fires, water damage, and carbon monoxide exposure.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <h3 className="text-xl font-semibold mb-2">False Assurance</h3>
                <p className="text-muted-foreground">
                  Perhaps the greatest risk: believing your chimney is safe when it isn't. An uncertified sweep may declare everything fine while missing conditions that a certified professional would flag immediately.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <h3 className="text-xl font-semibold mb-2">Scam Operations</h3>
                <p className="text-muted-foreground">
                  The chimney industry attracts scam operators with tactics including door-to-door solicitation offering extremely cheap cleaning, then "discovering" expensive problems requiring immediate repair. These operators typically lack certification, insurance, and legitimate credentials.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Verify */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How to Verify Chimney Sweep Certification</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 text-balance">
              Protect yourself by verifying credentials before hiring
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Ask for Credentials</h3>
                  <p className="text-muted-foreground">A certified sweep should be able to show their certification card or certificate. Don't be shy about asking—reputable professionals expect it.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Check the Organization</h3>
                  <p className="text-muted-foreground">Verify the certifying body is legitimate. The Chimney Safety Institute of America (CSIA) is the most widely recognized. The National Chimney Sweep Guild (NCSG) is the professional trade association.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Verify Online</h3>
                  <p className="text-muted-foreground">Many certifying organizations maintain online directories of certified professionals. You can search by name or location.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Ask About Continuing Education</h3>
                  <p className="text-muted-foreground">Certification requires ongoing education. Ask when they last completed training updates.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Check Insurance</h3>
                  <p className="text-muted-foreground">Certified professionals carry liability insurance. Ask for proof.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Certified Service Includes */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Certified Service Includes</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 text-balance">
              Comprehensive professional service that protects your home
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Complete Cleaning</h3>
                <p className="text-muted-foreground">All chimney surfaces cleaned thoroughly—main flue, smoke chamber, firebox, damper, and all joints and elbows. Not just a quick brush through.</p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Professional Inspection</h3>
                <p className="text-muted-foreground">Systematic evaluation of your entire chimney system during cleaning. Video camera inspection when warranted.</p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Written Documentation</h3>
                <p className="text-muted-foreground">A report of findings, condition assessments, and recommendations. Not just a verbal summary.</p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Honest Assessment</h3>
                <p className="text-muted-foreground">Clear explanation of what they found and what needs attention. No high-pressure sales tactics.</p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Home Protection</h3>
                <p className="text-muted-foreground">Professional containment of dust and debris. Your home stays as clean as before service.</p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Safety Focus</h3>
                <p className="text-muted-foreground">The primary goal is ensuring your chimney operates safely. Everything else is secondary.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mad Hatter Credentials */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mad Hatter: Master Certified Chimney Sweep</h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Highest Certification Available</h3>
                <p className="text-primary-foreground/90">Our technicians hold Master Chimney Sweep certification—beyond standard certification, demonstrating advanced expertise and extensive experience.</p>
              </div>

              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">45+ Years of Service</h3>
                <p className="text-primary-foreground/90">We've maintained chimneys across the greater Seattle area since 1979. Our experience spans every chimney type and condition.</p>
              </div>

              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Comprehensive 21-Point Inspection</h3>
                <p className="text-primary-foreground/90">Every cleaning includes thorough assessment of your complete chimney system. Nothing gets overlooked.</p>
              </div>

              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-primary-foreground/90">Standard cleaning and inspection starts at $289.95. Repair estimates are detailed and obligation-free.</p>
              </div>

              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Complete Service Capability</h3>
                <p className="text-primary-foreground/90">Cleaning, inspection, repair, restoration, and installation. One certified company for all chimney needs.</p>
              </div>

              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Serving Greater Seattle</h3>
                <p className="text-primary-foreground/90">Seattle, Bellevue, Redmond, Kirkland, Issaquah, Sammamish, Shoreline, and surrounding communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Certified Chimney Service</h2>
            <p className="text-xl mb-8 text-slate-300 text-balance">
              Don't trust your chimney to uncertified services. Certification means knowledge, proper technique, accurate assessment, and genuine safety. Your home and family deserve the protection that certified professional service provides.
            </p>
            <p className="text-lg mb-8 text-slate-400">
              Same-day and next-day service available throughout the greater Seattle area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a href="tel:+12065234722">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (206) 523-4722
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
                <Link href="/chimney-cleaning">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
