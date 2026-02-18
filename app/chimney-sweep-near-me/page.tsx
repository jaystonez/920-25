import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle, AlertTriangle, Shield, MapPin, Award, FileCheck, Users, Flame, Wind, Gauge, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Sweep Near Me | Find Certified Service in Greater Seattle | Mad Hatter",
  description: "Looking for a chimney sweep near you? Master certified service throughout Seattle & Eastside. 45+ years experience. Transparent pricing. Same-day service available.",
}

export default function ChimneySweepNearMePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Chimney Sweep Near Me: Find Certified Professional Service in Greater Seattle
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed opacity-95">
            Searching for a chimney sweep near you? If you're in Seattle, Bellevue, or anywhere on the Eastside, Mad Hatter Chimney Sweep is your local certified professional. We've been cleaning, inspecting, and repairing chimneys across the greater Seattle area for over 45 years.
          </p>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            When you search for a chimney sweep nearby, you want someone local, certified, experienced, and trustworthy—that's us. Finding the right chimney sweep matters more than most homeowners realize. An unqualified service can miss dangerous conditions, damage your chimney, or simply not clean thoroughly enough to prevent hazards.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="tel:425-409-2344"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (425) 409-2344
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg"
            >
              Schedule Online
            </Link>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Same-day and next-day service available • Serving all of Greater Seattle
          </p>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What to Look for in a Local Chimney Sweep
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Professional chimney sweeping requires specialized knowledge. Here's what separates qualified professionals from unqualified services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certification Matters</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional chimney sweeping requires specialized knowledge—understanding creosote chemistry, chimney construction, fire science, building codes, and safety protocols.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Look for sweeps who hold credentials from recognized industry organizations like the Chimney Safety Institute of America (CSIA) or equivalent certification bodies.
              </p>
              <p className="font-semibold text-foreground">
                Mad Hatter's technicians hold Master Chimney Sweep certification—the highest credential available in the industry.
              </p>
            </div>

            {/* Local Experience */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Local Experience</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chimney problems vary by region. A sweep who understands your local climate, home construction styles, and area-specific issues provides better service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the greater Seattle area, that means understanding heavy rainfall impacts, freeze-thaw cycles, persistent moisture, local home construction, and wildlife behavior.
              </p>
              <p className="font-semibold text-foreground">
                With 45+ years serving greater Seattle, Mad Hatter understands these conditions intimately.
              </p>
            </div>

            {/* Comprehensive Service */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Service</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The best chimney sweeps don't just clean—they inspect, identify problems, and provide solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Look for complete creosote removal, professional inspection during cleaning, written documentation of findings, clear recommendations with honest assessment, and repair capabilities if problems are found.
              </p>
              <p className="font-semibold text-foreground">
                A sweep who only cleans without inspecting misses problems. Complete service handles everything.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reputable chimney sweeps quote clear prices before work begins. Be wary of extremely low prices (they often indicate incomplete service) or vague estimates that grow after work starts.
              </p>
              <p className="font-semibold text-foreground">
                Mad Hatter's standard cleaning and 21-point inspection starts at $289.95. Repair estimates are detailed and provided before work begins.
              </p>
            </div>

            {/* Insurance */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Insurance & Licensing</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your chimney sweep should carry liability insurance and workers' compensation coverage. This protects you if anything goes wrong during service.
              </p>
              <p className="font-semibold text-foreground">
                Ask for proof of insurance before allowing anyone on your roof. Mad Hatter is fully insured and licensed.
              </p>
            </div>

            {/* Professional Standards */}
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Standards</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional sweeps use proper equipment, protect your home during service, provide written reports, and maintain industry standards.
              </p>
              <p className="font-semibold text-foreground">
                Mad Hatter technicians arrive with professional-grade equipment and maintain meticulous care for your property throughout service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Service */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why You Need a Professional Chimney Sweep
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Fire Prevention</h3>
              <p className="leading-relaxed opacity-95 mb-4">
                Creosote—the flammable byproduct of burning wood—accumulates inside every chimney that's used. Professional sweeping removes these deposits before they reach dangerous levels.
              </p>
              <p className="leading-relaxed opacity-95">
                A chimney fire caused by creosote buildup burns at 2,000+ degrees Fahrenheit, hot enough to crack liners, destroy mortar, and spread fire through your home's walls. The National Fire Protection Association reports that failure to clean chimneys is the leading factor in home heating fires.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Carbon Monoxide Safety</h3>
              <p className="leading-relaxed opacity-95 mb-4">
                A blocked or restricted chimney forces carbon monoxide back into your living space. This invisible, odorless gas is deadly.
              </p>
              <p className="leading-relaxed opacity-95">
                Professional cleaning ensures your chimney vents all combustion gases safely outside your home, protecting your family from this silent threat.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Heating Efficiency</h3>
              <p className="leading-relaxed opacity-95">
                A clean chimney draws better. Better draft means more complete combustion, more heat in your home, and less fuel consumed. Professional cleaning improves your fireplace's performance measurably.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Early Problem Detection</h3>
              <p className="leading-relaxed opacity-95">
                Professional sweeps inspect while they clean. They find cracks, water damage, deterioration, and safety hazards that you'd never see on your own. Early detection saves thousands in repair costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-destructive/10 border-2 border-destructive/20 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-destructive/20 rounded-lg">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Red Flags: Signs of an Unqualified Chimney Sweep</h2>
                <p className="text-lg text-muted-foreground">
                  Protect yourself from unqualified services by watching for these warning signs:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">No Certification</h3>
                  <p className="text-sm text-muted-foreground">If they can't show credentials, they may lack the knowledge to do the job safely and thoroughly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Extremely Low Prices</h3>
                  <p className="text-sm text-muted-foreground">If the price sounds too good to be true, the service probably is too. Thorough cleaning with professional equipment takes time and expertise.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">No Inspection Included</h3>
                  <p className="text-sm text-muted-foreground">A sweep who cleans without inspecting isn't providing complete service. Inspection is essential.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">High-Pressure Sales</h3>
                  <p className="text-sm text-muted-foreground">A reputable sweep explains findings and lets you decide. Pressure to make immediate expensive repairs is a warning sign.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">No Written Report</h3>
                  <p className="text-sm text-muted-foreground">Professional service includes documentation. Verbal-only findings leave no record.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">No Insurance</h3>
                  <p className="text-sm text-muted-foreground">Working on roofs involves risk. An uninsured sweep puts you at liability.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Door-to-Door Solicitation</h3>
                  <p className="text-sm text-muted-foreground">Be cautious of unsolicited chimney sweep offers, especially those that "find" problems requiring immediate expensive repair.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Service Area: Greater Seattle & Eastside
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Mad Hatter Chimney Sweep provides professional service throughout the greater Seattle metropolitan area.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Seattle
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All Seattle neighborhoods including Capitol Hill, Queen Anne, Ballard, Fremont, Wallingford, Ravenna, Magnolia, West Seattle, Columbia City, Beacon Hill, Georgetown, and more.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Eastside
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bellevue, Redmond, Kirkland, Issaquah, Sammamish, Woodinville, Bothell, Kenmore, and surrounding communities.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                North
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shoreline, Lake Forest Park, Edmonds, Mountlake Terrace, Lynnwood, and surrounding areas.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                South
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Renton, Kent, Mercer Island, Newcastle, and surrounding communities.
              </p>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            If you're searching for a chimney sweep near you anywhere in King County, we likely serve your area. Call to confirm.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What to Expect When You Call
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            When you contact Mad Hatter for chimney service, here's what happens:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Schedule at Your Convenience</h3>
                <p className="text-muted-foreground">
                  We offer same-day and next-day service in most areas. Choose a time that works for your schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Arrival</h3>
                <p className="text-muted-foreground">
                  Our certified technician arrives on time with all necessary equipment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Home Protection</h3>
                <p className="text-muted-foreground">
                  We seal your fireplace area before any work begins. Your home stays clean.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Thorough Service</h3>
                <p className="text-muted-foreground">
                  Complete cleaning of all chimney surfaces plus our comprehensive 21-point inspection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
                <p className="text-muted-foreground">
                  We explain everything we find in plain language. No jargon, no pressure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Written Documentation</h3>
                <p className="text-muted-foreground">
                  You receive a report of our findings and any recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Cleanup</h3>
                <p className="text-muted-foreground">
                  We leave your home exactly as we found it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">How often should I have my chimney cleaned?</h3>
              <p className="text-muted-foreground">
                At least once per year if you use your fireplace. More frequently if you burn wood five or more times per week.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">How long does chimney cleaning take?</h3>
              <p className="text-muted-foreground">
                Typically 45-90 minutes depending on chimney condition and accessibility.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Will cleaning make a mess in my home?</h3>
              <p className="text-muted-foreground">
                Not with professional service. We seal the fireplace area before cleaning and contain all dust and debris.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">How much does chimney cleaning cost?</h3>
              <p className="text-muted-foreground">
                Our standard cleaning and 21-point inspection starts at $289.95.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Do gas fireplaces need cleaning?</h3>
              <p className="text-muted-foreground">
                Gas burns cleaner than wood, but annual inspection is still recommended to verify safe operation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">What if you find problems during cleaning?</h3>
              <p className="text-muted-foreground">
                We document findings, explain what we've found, and provide repair estimates if needed. No work is done without your approval.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Are you insured?</h3>
              <p className="text-muted-foreground">
                Yes, fully insured and licensed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Your Chimney Sweep Today
          </h2>
          <p className="text-lg mb-8 leading-relaxed opacity-95 max-w-3xl mx-auto">
            When you search for a chimney sweep near you, you want certified, experienced, trustworthy service. Mad Hatter Chimney Sweep has delivered exactly that to greater Seattle homeowners for over 45 years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="tel:425-409-2344"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (425) 409-2344
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/20 px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors text-lg"
            >
              Request Service Online
            </Link>
          </div>

          <p className="text-lg opacity-90">
            Master Chimney Sweep certified • 45+ years local experience • The professional choice near you
          </p>
        </div>
      </section>
    </main>
  )
}
