import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, MapPin, Award, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chimney Sweep Sammamish | Professional Cleaning & Inspection | Mad Hatter',
  description: 'Professional chimney sweep services in Sammamish. 45+ years serving the Eastside with certified cleaning, inspection, and repair. Master Chimney Sweep certified.',
}

export default function ChimneySweepSammamishPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4" />
                Serving Sammamish Since 1979
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Chimney Sweep Services in Sammamish
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Certified chimney cleaning, inspection, and repair for Sammamish's quality homes. Master Chimney Sweep expertise protecting Eastside families for over 45 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Schedule Service
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                Request Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sammamish Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sammamish Chimneys Need Expert Care</h2>
            <p className="text-lg text-muted-foreground">
              Sammamish's elevated plateau setting, wooded environment, and quality homes create unique chimney challenges requiring professional attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background border rounded-lg p-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plateau Climate</h3>
              <p className="text-muted-foreground">
                Elevated setting means cooler temperatures, higher rainfall, and extended burning season producing heavy creosote accumulation.
              </p>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wildlife Activity</h3>
              <p className="text-muted-foreground">
                Natural wooded setting attracts birds, squirrels, and raccoons seeking chimney shelter. Nesting creates serious fire and venting hazards.
              </p>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Heavy Use</h3>
              <p className="text-muted-foreground">
                Sammamish families burn wood regularly through long winters. Consistent use means annual professional cleaning is essential.
              </p>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Homes</h3>
              <p className="text-muted-foreground">
                Sammamish's desirable properties deserve service matching their quality—meticulous work protecting your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Chimney Services</h2>
            <p className="text-lg text-muted-foreground">
              Complete chimney care from certified Master Chimney Sweep technicians.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cleaning */}
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Complete Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Thorough removal of all creosote, soot, and debris from your entire chimney system. Professional containment protects your home.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full flue, smoke chamber, and firebox cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All three creosote stages removed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Wildlife nest and debris removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">21-point inspection included</span>
                </li>
              </ul>
              <p className="text-lg font-bold">Starting at $289.95</p>
            </div>

            {/* Inspection */}
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">21-Point Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive evaluation of your entire chimney system with video camera technology revealing hidden conditions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Exterior: crown, cap, flashing, masonry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Interior: liner, smoke chamber, damper</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Water damage and wildlife assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Written report with photographs</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">Included with every cleaning</p>
            </div>

            {/* Repair */}
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Expert Repair</h3>
              <p className="text-muted-foreground mb-6">
                Professional restoration addressing water damage, masonry deterioration, and structural concerns.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Crown repair and waterproofing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flashing and mortar restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Liner and firebox rebuilding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Wildlife prevention caps</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">Detailed estimates provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sammamish Areas We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Professional chimney service throughout all Sammamish neighborhoods and surrounding Eastside communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">Sammamish Plateau</h3>
              <p className="text-sm text-muted-foreground">Heart of the community with quality family homes and well-used fireplaces</p>
            </div>
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">Pine Lake</h3>
              <p className="text-sm text-muted-foreground">Established properties requiring consistent professional maintenance</p>
            </div>
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">Beaver Lake</h3>
              <p className="text-sm text-muted-foreground">Natural settings with wildlife challenges and heavy fireplace use</p>
            </div>
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">Klahanie</h3>
              <p className="text-sm text-muted-foreground">Planned community with consistent construction and active chimneys</p>
            </div>
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">Sahalee</h3>
              <p className="text-sm text-muted-foreground">Premium properties deserving premium chimney service and care</p>
            </div>
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">Trossachs</h3>
              <p className="text-sm text-muted-foreground">Beautiful homes in wooded settings with elevated maintenance needs</p>
            </div>
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">East Lake Sammamish</h3>
              <p className="text-sm text-muted-foreground">Waterside properties facing additional moisture exposure challenges</p>
            </div>
            <div className="bg-background border rounded-lg p-6">
              <h3 className="font-bold mb-2">Neighboring Communities</h3>
              <p className="text-sm text-muted-foreground">Also serving Issaquah, Redmond, and the greater Eastside</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fireplace Safety in Natural Settings</h2>
            <p className="text-lg text-muted-foreground">
              Living in Sammamish's wooded environment requires extra fire safety awareness and preventive measures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-3">Annual Service</h3>
              <p className="text-sm text-muted-foreground">
                Clean and inspect every year. Heavy users (5+ fires/week) should consider service every 6-8 months.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-3">Spark Arrestor Cap</h3>
              <p className="text-sm text-muted-foreground">
                Essential in wooded areas to prevent embers from landing on vegetation, roofs, or neighboring properties.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-3">Tree Clearance</h3>
              <p className="text-sm text-muted-foreground">
                Maintain 10+ feet between chimney top and overhanging branches to reduce fire risk and debris.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-3">Seasoned Wood Only</h3>
              <p className="text-sm text-muted-foreground">
                Burn properly dried hardwood (6-12 months). Green wood produces excessive creosote and sparks.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-3">CO Detectors</h3>
              <p className="text-sm text-muted-foreground">
                Install on every level. Test monthly. Replace batteries annually. Non-negotiable with fireplaces.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-3">Wildlife Prevention</h3>
              <p className="text-sm text-muted-foreground">
                Quality chimney cap with screening prevents animal entry. Remove nests before using fireplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sammamish Trusts Mad Hatter</h2>
            <p className="text-lg text-primary-foreground/90">
              Over four decades of certified expertise serving Sammamish's quality homes with service matching the community's standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">45+ Years Experience</h3>
                  <p className="text-primary-foreground/80">
                    Serving the Eastside since 1979. Deep experience with Sammamish homes, plateau conditions, and local challenges.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Master Certified</h3>
                  <p className="text-primary-foreground/80">
                    Highest industry credential. Current training, advanced techniques, and adherence to national safety standards.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">21-Point Inspection</h3>
                  <p className="text-primary-foreground/80">
                    Every cleaning includes comprehensive system assessment. Nothing overlooked, all findings documented.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Work</h3>
                  <p className="text-primary-foreground/80">
                    Meticulous service matching Sammamish's quality expectations. We respect your investment and deliver lasting results.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-primary-foreground/80">
                    $289.95 standard service. Detailed repair estimates before work begins. No hidden fees or surprises.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete Solutions</h3>
                  <p className="text-primary-foreground/80">
                    One certified company for all chimney needs. Cleaning, inspection, repair, and installation handled professionally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Your Sammamish Investment
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Professional chimney service keeps your family safe, your fireplace efficient, and your property protected. Call today to schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call for Service
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground border px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Request Estimate
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Same-day and next-day service available throughout Sammamish and the Eastside
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
