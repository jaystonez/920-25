import { CheckCircle, Shield, Home, AlertTriangle, DollarSign, Camera, Wrench, Eye } from 'lucide-react'
import Link from 'next/link'

export default function ChimneyInspectionBellevuePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chimney Inspection Bellevue: Certified Professional Assessment & Safety Evaluation
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              A professional chimney inspection is the smartest investment a Bellevue homeowner can make for their fireplace. You can't see inside your chimney to assess damage, creosote levels, or hidden hazards. A certified inspection reveals exactly what's happening—before small problems become expensive emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:+1234567890" 
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Schedule Inspection
              </Link>
              <Link 
                href="#inspection-process" 
                className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                21-Point Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bellevue Homes Need Inspection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Bellevue Homes Need Professional Inspection
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Bellevue's quality homes deserve quality care. Many properties here feature substantial fireplaces and chimney systems that represent significant investment. Professional inspection protects that investment by catching deterioration early, ensuring safe operation, and providing documentation that supports your home's value.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hidden Damage Detection</h3>
                <p className="text-muted-foreground">
                  The most dangerous chimney problems hide where you can't see them. Cracked liners, internal water damage, deteriorating mortar behind the facade, and structural weakness all lurk inside the chimney. Professional inspection with video camera technology finds these issues before they cause leaks, fires, or structural failure.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fire Safety Verification</h3>
                <p className="text-muted-foreground">
                  Creosote accumulation is invisible from your living room. Professional inspection measures buildup levels and assesses fire risk. If cleaning is needed, you know before a chimney fire makes it obvious.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-3">Carbon Monoxide Prevention</h3>
                <p className="text-muted-foreground">
                  A chimney that looks fine from outside can have internal blockages or liner cracks that allow carbon monoxide to seep into your home. Inspection verifies that your chimney vents all combustion gases safely outside.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Property Value Protection</h3>
                <p className="text-muted-foreground">
                  Documented professional inspections showing a well-maintained chimney strengthen your position when selling, refinancing, or filing insurance claims. Buyers and insurers value professional documentation.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cost Prevention</h3>
                <p className="text-muted-foreground">
                  A small crack in flashing costs $400-600 to repair today. That same crack, undetected for a year, causes wall damage costing $3,000-5,000. Annual inspection is insurance against expensive surprises.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Video Camera Technology</h3>
                <p className="text-muted-foreground">
                  We insert a specialized camera into the flue to examine interior surfaces you cannot see from above or below. This reveals cracks, gaps, deterioration, obstructions, and damage that are completely invisible from outside.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21-Point Inspection Process */}
      <section id="inspection-process" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Comprehensive 21-Point Inspection
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our inspection goes far beyond a quick visual check. We systematically examine every component of your chimney system.
            </p>

            {/* Exterior Assessment */}
            <div className="mb-12">
              <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold">Exterior Assessment</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Chimney Crown</h4>
                      <p className="text-muted-foreground">
                        We examine the concrete cap for cracks, proper slope, adequate overhang, and effective water shedding. In Bellevue's wet climate, crown condition is critical—a compromised crown allows water directly into the chimney structure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Flashing</h4>
                      <p className="text-muted-foreground">
                        Every inch of the chimney-to-roof seal is examined for gaps, corrosion, separation, and proper installation. Flashing failure is the #1 source of chimney leaks in Bellevue homes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Mortar Joints</h4>
                      <p className="text-muted-foreground">
                        We assess mortar throughout the chimney's exterior for softening, cracking, missing sections, and freeze-thaw damage. Failed mortar allows water entry and compromises structural integrity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Brick and Stone</h4>
                      <p className="text-muted-foreground">
                        We check for spalling (breaking apart), cracking, loosening, and deterioration. Damaged masonry weakens the chimney and accelerates further deterioration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Chimney Cap</h4>
                      <p className="text-muted-foreground">
                        We verify presence, security, proper sizing, and functional condition. A missing or damaged cap invites water, animals, and debris.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Structural Assessment</h4>
                      <p className="text-muted-foreground">
                        We evaluate the chimney for leaning, shifting, separation from the home, and overall structural soundness.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Roof Condition</h4>
                      <p className="text-muted-foreground">
                        We examine the roof area surrounding the chimney for water damage, deterioration, or other problems related to chimney function.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior and Flue Assessment */}
            <div className="mb-12">
              <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold">Interior and Flue Assessment</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Creosote Evaluation</h4>
                      <p className="text-muted-foreground">
                        We measure creosote accumulation and identify which stage it has reached. This determines how urgently cleaning is needed and whether special removal techniques are required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Camera className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Video Camera Inspection</h4>
                      <p className="text-muted-foreground">
                        We insert a specialized camera into the flue to examine interior surfaces you cannot see from above or below. This reveals cracks, gaps, deterioration, obstructions, and damage that are completely invisible from outside.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Chimney Liner</h4>
                      <p className="text-muted-foreground">
                        We assess liner integrity, looking for cracks, holes, corrosion, and proper sizing. A compromised liner is a serious safety hazard.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Smoke Chamber</h4>
                      <p className="text-muted-foreground">
                        We evaluate the smoke chamber's condition, shape, and cleanliness. This critical transition area between firebox and flue accumulates creosote and shows wear.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Damper Operation</h4>
                      <p className="text-muted-foreground">
                        We test the damper for smooth operation, proper sealing when closed, and full opening when in use. A malfunctioning damper wastes energy and can restrict draft.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Firebox Integrity</h4>
                      <p className="text-muted-foreground">
                        We examine the firebox interior for cracks, deterioration, and proper construction. Damaged fireboxes allow smoke and heat to escape into walls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Performance Evaluation */}
            <div>
              <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold">System Performance Evaluation</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Draft Assessment</h4>
                      <p className="text-muted-foreground">
                        We evaluate whether your chimney draws properly. Poor draft causes smoke backup, incomplete combustion, and inefficient heating.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Venting Safety</h4>
                      <p className="text-muted-foreground">
                        We verify that combustion gases—including carbon monoxide—exit safely through the chimney rather than entering your living space.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Water Intrusion Evidence</h4>
                      <p className="text-muted-foreground">
                        We look for signs of water damage throughout the system—staining, efflorescence, rust, and moisture-related deterioration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Animal Activity</h4>
                      <p className="text-muted-foreground">
                        We check for nesting materials, droppings, damage, and entry points that indicate wildlife has accessed your chimney.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Inspection Levels Explained
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">Level 1</div>
                  <div className="text-sm text-muted-foreground mb-4">Visual Inspection</div>
                  <div className="text-2xl font-bold mb-1">$150-250</div>
                </div>
                <p className="text-muted-foreground mb-4">
                  A basic visual assessment of accessible chimney areas—both exterior and interior visible surfaces.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Exterior visual inspection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Interior visible surfaces</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic condition assessment</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Appropriate for annual maintenance on well-maintained chimneys with no known problems.
                </p>
              </div>

              <div className="bg-card border-2 border-primary rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">Level 2</div>
                  <div className="text-sm text-muted-foreground mb-4">Video Camera Inspection</div>
                  <div className="text-2xl font-bold mb-1">$250-400</div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Includes everything in Level 1 plus interior video camera inspection of the flue.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Level 1</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold">Interior video camera</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Reveals hidden damage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Video stills in report</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Our standard recommendation for most Bellevue homeowners—thorough assessment at reasonable cost.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">Level 3</div>
                  <div className="text-sm text-muted-foreground mb-4">Comprehensive Testing</div>
                  <div className="text-2xl font-bold mb-1">$400-600</div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Includes everything in Level 2 plus specialized testing and measurement.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Level 2</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Draft measurement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Carbon monoxide testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Flue gas temperature analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Moisture detection</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Appropriate for homes with recurring problems or building code compliance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Inspection */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              When Bellevue Homeowners Need Inspection
            </h2>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Annually</h3>
                    <p className="text-muted-foreground">
                      The National Fire Protection Association recommends yearly inspection for any home with a fireplace. This is the single most effective step for chimney safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Home className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Before Purchasing a Home</h3>
                    <p className="text-muted-foreground">
                      Standard home inspections give chimneys only cursory attention. If you're buying a Bellevue property with a fireplace, a certified chimney inspection identifies problems that general inspectors miss.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Before Selling Your Home</h3>
                    <p className="text-muted-foreground">
                      Recent professional inspection showing a well-maintained chimney eliminates buyer concerns and prevents negotiation delays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">After Chimney Fire</h3>
                    <p className="text-muted-foreground">
                      Even a small chimney fire can cause internal damage. Professional inspection assesses the extent and determines whether repairs are needed before using the fireplace again.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">After Extended Non-Use</h3>
                    <p className="text-muted-foreground">
                      If your fireplace sat unused for a year or more, inspect before the first fire. Animals may have nested, debris may have accumulated, and deterioration may have occurred.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-destructive rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">When You Notice Problems</h3>
                    <p className="text-muted-foreground">
                      Smoke backing up, unusual odors, water stains near the chimney, visible exterior damage, or difficulty starting fires—any warrant immediate inspection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Findings in Bellevue */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Common Inspection Findings in Bellevue
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Based on 45+ years serving Bellevue homes, these are the most common issues we identify during inspection.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Flashing Deterioration</h3>
                <p className="text-muted-foreground mb-3">
                  Bellevue's rainfall tests flashing constantly. Many homes show gaps or corrosion that allow water entry.
                </p>
                <div className="text-sm">
                  <span className="font-semibold">Typical Repair:</span> $400-800
                  <br />
                  <span className="font-semibold">Prevents:</span> Thousands in water damage
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Mortar Joint Failure</h3>
                <p className="text-muted-foreground mb-3">
                  Freeze-thaw cycles degrade mortar over time. We frequently find softened or missing mortar in Bellevue chimneys over 20 years old.
                </p>
                <div className="text-sm">
                  <span className="font-semibold">Typical Repair:</span> $1,500-3,000
                  <br />
                  <span className="font-semibold">Depends on:</span> Extent of damage
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Crown Cracking</h3>
                <p className="text-muted-foreground mb-3">
                  Very common in our climate. Small cracks can be sealed affordably. Extensive damage requires crown replacement.
                </p>
                <div className="text-sm">
                  <span className="font-semibold">Sealing:</span> $200-400
                  <br />
                  <span className="font-semibold">Replacement:</span> $800-1,500
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Moderate Creosote Buildup</h3>
                <p className="text-muted-foreground mb-3">
                  Regular fireplace users typically show moderate accumulation requiring professional cleaning. This is normal and expected—it's why annual service matters.
                </p>
                <div className="text-sm">
                  <span className="font-semibold">Solution:</span> Professional cleaning
                  <br />
                  <span className="font-semibold">Cost:</span> $289.95 (includes inspection)
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Missing Chimney Caps</h3>
                <p className="text-muted-foreground mb-3">
                  Surprisingly common, especially on older Bellevue homes. Cap installation is one of the most cost-effective chimney improvements.
                </p>
                <div className="text-sm">
                  <span className="font-semibold">Installation:</span> $200-400
                  <br />
                  <span className="font-semibold">Prevents:</span> Water, animals, debris entry
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Liner Wear</h3>
                <p className="text-muted-foreground mb-3">
                  Homes with original clay tile liners sometimes show cracking from decades of thermal cycling. Liner replacement restores safety and improves performance.
                </p>
                <div className="text-sm">
                  <span className="font-semibold">Replacement:</span> $1,200-2,000
                  <br />
                  <span className="font-semibold">Benefit:</span> Restored safety
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing an Inspector */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Choosing a Chimney Inspector in Bellevue
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Not all inspections are equal. Look for these qualifications:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Certification</h3>
                    <p className="text-muted-foreground text-sm">
                      Certified Chimney Sweep or equivalent credential from a recognized industry organization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Video Camera Capability</h3>
                    <p className="text-muted-foreground text-sm">
                      Interior flue inspection requires specialized equipment. Without it, the inspector can't see the most important areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Home className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Local Experience</h3>
                    <p className="text-muted-foreground text-sm">
                      An inspector who understands Bellevue homes, local climate conditions, and area-specific chimney problems provides more relevant assessment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Detailed Reporting</h3>
                    <p className="text-muted-foreground text-sm">
                      Written reports with photographs, condition ratings, and specific recommendations—not just a verbal summary.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">No-Pressure Assessment</h3>
                    <p className="text-muted-foreground text-sm">
                      A good inspector explains findings honestly without pressuring you into immediate repairs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Insurance and Licensing</h3>
                    <p className="text-muted-foreground text-sm">
                      Proper credentials and coverage protect both you and the inspector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bellevue Trusts Mad Hatter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Bellevue Trusts Mad Hatter
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">45+ Years Serving Bellevue</h3>
                <p className="text-primary-foreground/90">
                  We've inspected thousands of Bellevue chimneys since 1979. Our experience with local homes and conditions is unmatched.
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Master Chimney Sweep Certification</h3>
                <p className="text-primary-foreground/90">
                  The highest industry credential. Current training, advanced inspection techniques, and adherence to national standards.
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Comprehensive 21-Point Process</h3>
                <p className="text-primary-foreground/90">
                  Nothing gets overlooked. Every component of your chimney system receives professional attention.
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Video Camera Technology</h3>
                <p className="text-primary-foreground/90">
                  We see inside your chimney where problems hide. Visual-only inspection misses critical interior conditions.
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Honest Assessment</h3>
                <p className="text-primary-foreground/90">
                  We report what we find—accurately and completely. We don't create urgency where none exists, and we don't minimize real problems.
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Transparent Pricing</h3>
                <p className="text-primary-foreground/90">
                  Inspection costs are clear upfront. Repair estimates are detailed and obligation-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Bellevue Chimney Inspection
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Professional inspection is the foundation of chimney safety and maintenance. One annual assessment catches problems early, prevents expensive damage, and ensures your family's safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:+1234567890" 
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Call for Inspection
              </Link>
              <Link 
                href="/contact" 
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Schedule Online
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Same-day and next-day service available throughout Bellevue
            </p>
            <p className="text-lg font-semibold mt-4">
              45 years of certified expertise protecting Bellevue families. Your chimney deserves professional assessment.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
