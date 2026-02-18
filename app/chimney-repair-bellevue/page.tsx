export default function ChimneyRepairBellevuePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Chimney Repair Bellevue: Expert Masonry Restoration & Safety Repairs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              45+ years of Master Certified expertise repairing Bellevue chimneys with quality materials, meticulous workmanship, and transparent pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="tel:206-523-2229"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
              >
                Call (206) 523-2229
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-lg"
              >
                Schedule Repair
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Repair Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Chimney Damage Doesn&apos;t Wait</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Small problems compound into expensive emergencies. Professional repair now stops deterioration and protects your Bellevue home.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Bellevue homeowners take pride in their properties. When your chimney needs repair, you want it done right—by certified professionals who understand quality homes and deliver results that last. Mad Hatter Chimney Sweep has repaired Bellevue chimneys for over 45 years with Master Chimney Sweep expertise, transparent pricing, and meticulous workmanship.
              </p>
              <p className="text-lg leading-relaxed">
                A small crack in your chimney crown becomes a major water leak. Deteriorating mortar allows moisture inside your walls. A damaged liner creates fire and carbon monoxide hazards. Professional repair addresses problems before they compound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems - Bellevue Climate Focus */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Common Chimney Problems in Bellevue</h2>
              <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
                Bellevue&apos;s Puget Sound climate is beautiful but harsh on chimneys. Persistent moisture, freeze-thaw cycles, and heavy rainfall accelerate deterioration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Water Damage */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Water Damage</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Flashing failure causing interior leaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Crown cracking from freeze-thaw cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Mortar deterioration and water infiltration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Brick spalling from moisture penetration</span>
                  </li>
                </ul>
              </div>

              {/* Heat & Age Damage */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Heat & Age Damage</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Liner cracking from thermal cycling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Firebox deterioration from intense heat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Damper warping and corrosion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Original materials reaching service life end</span>
                  </li>
                </ul>
              </div>

              {/* Structural Issues */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Structural Issues</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Settling and shifting from ground movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Chimney leaning or separating from home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Seismic activity creating gaps and cracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Compromised structural safety</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Chimney Repair Services</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive repairs using quality materials and proven techniques
              </p>
            </div>

            <div className="space-y-8">
              {/* Flashing Repair */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold">Flashing Repair & Replacement</h3>
                    <p className="text-muted-foreground">
                      Flashing is where most chimney leaks originate. We provide comprehensive flashing service:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Assessment:</strong> Examine existing flashing for gaps, corrosion, separation, and improper installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Repair:</strong> Reseal and reinforce when fundamentally sound but with gaps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Replacement:</strong> Complete removal and reinstallation with proper step-and-counter technique when corroded or improperly installed</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                      Proper flashing work stops leaks at their most common source and prevents water damage to your chimney and home interior.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mortar Repointing */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold">Mortar Repointing</h3>
                    <p className="text-muted-foreground">
                      Professional masonry technique for restoring deteriorated mortar joints:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p><strong>1. Removal:</strong> Carefully remove failed mortar to proper depth without damaging bricks</p>
                        <p><strong>2. Preparation:</strong> Clean joints and dampen for proper adhesion</p>
                      </div>
                      <div className="space-y-2">
                        <p><strong>3. Application:</strong> Apply new mortar matched to original in color, composition, and strength</p>
                        <p><strong>4. Tooling:</strong> Shape mortar for proper drainage and finished appearance</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      Proper repointing restores structural integrity, stops water infiltration, and extends your chimney&apos;s service life by decades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Crown Repair */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold">Crown Repair & Replacement</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="font-semibold">Minor Repair</p>
                        <p className="text-muted-foreground">Small cracks sealed with flexible, weather-resistant sealant that accommodates thermal expansion</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold">Major Repair / Replacement</p>
                        <p className="text-muted-foreground">Extensively damaged crowns require removal and rebuilding with proper slope, materials, and overhang</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      A proper crown is your chimney&apos;s primary defense against water entry from above.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <h3 className="text-xl font-bold">Brick & Stone Restoration</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Brick replacement with matching materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stone masonry repair and restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Partial rebuild for concentrated damage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <h3 className="text-xl font-bold">Chimney Liner Installation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Video camera assessment of damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stainless steel liner installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Proper insulation and draft testing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <h3 className="text-xl font-bold">Firebox Repair</h3>
                  <p className="text-muted-foreground">
                    High-temperature refractory materials designed for extreme fireplace conditions. Restores safe smoke and heat containment.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <h3 className="text-xl font-bold">Cap & Damper Service</h3>
                  <p className="text-muted-foreground">
                    Quality chimney cap installation and modern damper replacement for weather protection and energy efficiency.
                  </p>
                </div>
              </div>

              {/* Waterproofing */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold">Waterproofing</h3>
                    <p className="text-muted-foreground">
                      After repairs are complete, we apply breathable waterproofing sealant to your chimney&apos;s exterior masonry. This prevents water from entering brick and mortar while allowing internal moisture to escape—preventing the freeze-thaw damage cycle that causes so many problems in Bellevue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Repair Process</h2>
              <p className="text-xl text-muted-foreground">
                Systematic approach to every repair project
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Professional Inspection",
                  description: "Our 21-point inspection identifies all problems and their extent. No guessing—we know exactly what needs fixing."
                },
                {
                  step: "2",
                  title: "Detailed Estimate",
                  description: "You receive a written estimate explaining each repair, why it's needed, and what it costs. No surprises."
                },
                {
                  step: "3",
                  title: "Scheduled Service",
                  description: "We schedule at your convenience and arrive when promised."
                },
                {
                  step: "4",
                  title: "Quality Execution",
                  description: "Repairs performed with proper materials, proper techniques, and attention to detail."
                },
                {
                  step: "5",
                  title: "Final Inspection",
                  description: "We verify all repairs meet our standards before considering the job complete."
                },
                {
                  step: "6",
                  title: "Documentation",
                  description: "You receive written documentation of all work performed."
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Bellevue Trusts Mad Hatter */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Bellevue Homeowners Trust Mad Hatter for Repairs</h2>
              <p className="text-xl text-primary-foreground/80">
                45+ years of certified expertise repairing Bellevue&apos;s quality homes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: "45+ Years of Expertise",
                  description: "Thousands of Bellevue chimneys repaired since 1979. We've encountered every problem and know the most effective solutions."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Master Certification",
                  description: "Highest industry credential. Current training in repair techniques, materials, and safety standards."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  title: "Quality Materials",
                  description: "Proper materials for every repair—matched mortar, appropriate flashing metals, quality liners, proven sealants."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  ),
                  title: "Transparent Communication",
                  description: "We explain what we find, what it means, and what it costs. You make informed decisions with complete information."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  title: "Respect for Bellevue Homes",
                  description: "We understand these are quality properties. We work carefully, protect surrounding areas, and deliver lasting results."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Warranty Protection",
                  description: "We stand behind our work. If something isn't right, we fix it."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-primary-foreground/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Preventing Future Repairs</h2>
              <p className="text-xl text-muted-foreground">
                Professional maintenance reduces repair frequency and cost
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Annual Inspection",
                  description: "Catching problems early means smaller, less expensive repairs",
                  cost: "$250-400"
                },
                {
                  title: "Regular Cleaning",
                  description: "Professional cleaning prevents creosote damage and monitors conditions",
                  cost: "$289.95"
                },
                {
                  title: "Chimney Cap",
                  description: "Prevents the leading damage source—water entry",
                  cost: "$200-400"
                },
                {
                  title: "Prompt Small Repairs",
                  description: "A $400 flashing fix prevents $3,000+ in water damage",
                  cost: "Varies"
                }
              ].map((tip, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">{tip.title}</h3>
                    <span className="text-primary font-semibold whitespace-nowrap">{tip.cost}</span>
                  </div>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <p className="text-xl font-semibold">
                Spending $300-500 annually on maintenance prevents repairs costing many times more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Schedule Your Bellevue Chimney Repair</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Chimney damage doesn&apos;t improve with time. Water damage spreads. Deterioration accelerates. Costs increase. Professional repair now stops problems and restores safety.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:206-523-2229"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg w-full sm:w-auto"
              >
                Call (206) 523-2229
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-lg w-full sm:w-auto"
              >
                Request Estimate
              </a>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-lg font-semibold">45 years of certified Bellevue experience</p>
              <p className="text-muted-foreground">Your home deserves expert chimney care</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
