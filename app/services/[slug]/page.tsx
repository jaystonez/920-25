import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Phone } from "lucide-react"

const services = {
  "chimney-inspection-sweeping": {
    title: "Chimney Inspection & Sweeping",
    description: "Professional chimney inspection and cleaning services to ensure your chimney is safe, clean, and operating efficiently.",
    longDescription: "Regular chimney inspections and sweeping are essential for the safety and efficiency of your fireplace or heating system. Our CSIA-certified technicians provide comprehensive inspections using state-of-the-art video camera technology to identify any issues before they become major problems.",
    benefits: [
      "Prevents dangerous chimney fires from creosote buildup",
      "Identifies structural issues early",
      "Improves fireplace efficiency and draft",
      "Removes blockages and debris",
      "Extends the life of your chimney system",
      "Ensures compliance with insurance requirements"
    ],
    services: [
      "Level 1, 2, and 3 NFPA Inspections",
      "Video Camera Chimney Scans",
      "Creosote Removal (All Stages)",
      "Bird Nest and Debris Removal",
      "Chimney Cap and Damper Inspection",
      "Annual Maintenance Programs"
    ],
    process: [
      "Initial Assessment - We evaluate your chimney's condition and discuss your concerns",
      "Thorough Inspection - Using cameras and visual inspection to check all components",
      "Professional Cleaning - Removing creosote, soot, and debris from top to bottom",
      "Final Report - Detailed findings with photos and recommendations",
      "Follow-up Care - Scheduling future maintenance and addressing any repairs needed"
    ]
  },
  "chimney-repairs": {
    title: "Chimney Repairs",
    description: "Expert masonry and structural chimney repairs to restore safety and functionality to your chimney system.",
    longDescription: "From minor mortar repairs to major structural work, our experienced masons can handle all types of chimney repairs. We use high-quality materials and time-tested techniques to ensure lasting results that protect your home.",
    benefits: [
      "Prevents water damage and deterioration",
      "Restores structural integrity",
      "Eliminates safety hazards",
      "Improves energy efficiency",
      "Increases home value",
      "Prevents costly future repairs"
    ],
    services: [
      "Chimney Crown Repair and Replacement",
      "Tuckpointing and Repointing",
      "Firebox Repair and Rebuilds",
      "Smoke Chamber Restoration",
      "Damper Repair and Replacement",
      "Brick and Stone Replacement"
    ],
    process: [
      "Damage Assessment - Comprehensive evaluation of repair needs",
      "Detailed Estimate - Clear pricing with no hidden costs",
      "Skilled Repairs - Expert masonry work by certified technicians",
      "Quality Materials - Premium mortar, brick, and sealants",
      "Final Inspection - Ensuring all repairs meet safety standards"
    ]
  },
  "chimney-relining": {
    title: "Chimney Relining",
    description: "Professional chimney liner installation and repair to ensure safe venting of combustion gases.",
    longDescription: "A properly installed chimney liner is crucial for the safe operation of your fireplace or heating appliance. We install high-quality stainless steel and cast-in-place liners that meet all code requirements and provide decades of reliable service.",
    benefits: [
      "Prevents carbon monoxide leaks",
      "Protects chimney structure from heat and corrosion",
      "Improves draft and efficiency",
      "Allows use of multiple fuel types safely",
      "Meets current building codes",
      "Lifetime warranty options available"
    ],
    services: [
      "Stainless Steel Liner Installation",
      "Cast-in-Place Liner Systems",
      "Flexible Liner Systems",
      "Rigid Liner Installation",
      "Oil Furnace Liner Installation",
      "Liner Repair and Replacement"
    ],
    process: [
      "System Evaluation - Determining the right liner for your needs",
      "Precise Measurements - Ensuring proper fit and sizing",
      "Professional Installation - Top-to-bottom liner installation",
      "Insulation - Adding insulation for improved performance",
      "Connection - Proper connection to appliance and chimney cap"
    ]
  },
  "waterproofing-leak-repair": {
    title: "Waterproofing & Leak Repair",
    description: "Comprehensive chimney leak detection and waterproofing services to protect your home from water damage.",
    longDescription: "Water is the number one enemy of masonry chimneys. Our waterproofing and leak repair services protect your chimney from water infiltration that can cause serious structural damage and costly repairs.",
    benefits: [
      "Prevents freeze-thaw damage",
      "Stops interior water stains and damage",
      "Eliminates musty odors from moisture",
      "Extends chimney lifespan significantly",
      "Protects against mold and mildew",
      "Reduces heating and cooling costs"
    ],
    services: [
      "Chimney Flashing Repair and Installation",
      "Chimney Cap Installation",
      "Chase Cover Replacement",
      "Waterproofing Treatment Application",
      "Crown Sealing",
      "Leak Detection and Diagnosis"
    ],
    process: [
      "Leak Detection - Identifying all sources of water entry",
      "Root Cause Analysis - Determining why leaks are occurring",
      "Comprehensive Repairs - Fixing flashing, crowns, and other issues",
      "Waterproofing Application - Applying breathable water repellent",
      "Preventive Measures - Installing caps and covers for long-term protection"
    ]
  },
  "stove-fireplace-installation": {
    title: "Stove & Fireplace Installation",
    description: "Professional installation of wood stoves, gas fireplaces, inserts, and fireplace accessories.",
    longDescription: "Whether you're adding a new heating appliance or upgrading your existing fireplace, our certified installers ensure safe, code-compliant installation that maximizes efficiency and performance.",
    benefits: [
      "Code-compliant installation for safety and insurance",
      "Maximizes heating efficiency",
      "Proper venting for clean operation",
      "Professional finishing for aesthetic appeal",
      "Warranty protection through proper installation",
      "Expert advice on appliance selection"
    ],
    services: [
      "Wood Stove Installation",
      "Gas Fireplace Installation",
      "Fireplace Insert Installation",
      "Pellet Stove Installation",
      "Glass Door Installation",
      "Hearth Pad Construction"
    ],
    process: [
      "Consultation - Discussing your heating needs and preferences",
      "Site Preparation - Ensuring proper clearances and venting",
      "Professional Installation - Expert setup of your new appliance",
      "Venting System - Proper liner and venting installation",
      "Final Testing - Ensuring safe and efficient operation"
    ]
  },
  "rebuilds-restorations": {
    title: "Rebuilds & Restorations",
    description: "Complete chimney rebuilding and restoration services for severely damaged or deteriorating chimneys.",
    longDescription: "When repairs aren't enough, our complete rebuild and restoration services can give you a like-new chimney. From partial rebuilds to complete reconstructions, we restore chimneys to their original beauty and functionality.",
    benefits: [
      "Addresses severe structural damage",
      "Improves home safety dramatically",
      "Increases property value",
      "Opportunity to upgrade and modernize",
      "Long-lasting solution (50+ years)",
      "Custom design options available"
    ],
    services: [
      "Partial Chimney Rebuilds",
      "Complete Chimney Reconstruction",
      "Brick and Stone Replacement",
      "Fireplace Rebuilding",
      "Stone Veneer Installation",
      "Cultured Stone Application"
    ],
    process: [
      "Structural Assessment - Determining extent of rebuild needed",
      "Design Planning - Creating a rebuild plan that meets your needs",
      "Safe Demolition - Removing damaged sections carefully",
      "Expert Reconstruction - Building with quality materials and craftsmanship",
      "Finishing Touches - Ensuring beautiful appearance and proper function"
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]
  
  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }

  return {
    title: `${service.title} | The Mad Hatter Chimney Sweep`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/services" className="text-primary hover:underline mb-4 inline-block">
                ← Back to All Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed">{service.longDescription}</p>
              </div>

              {/* Benefits */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Services Offered */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Our Services Include</h2>
                  <ul className="space-y-3">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Our Process</h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => {
                      const [title, description] = step.split(' - ')
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">{title}</h3>
                            <p className="text-muted-foreground">{description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Contact us today for a free inspection and estimate
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="/#contact">Request Free Estimate</Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                      asChild
                    >
                      <a href="tel:2062746409">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (206) 274-6409
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
