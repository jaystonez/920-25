import { CheckCircle, Clock, Award, Heart } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle,
    title: "Certified Professionals",
    description: "Our team is fully trained, certified, and stays current with the latest industry standards and safety protocols.",
  },
  {
    icon: Clock,
    title: "Prompt & Reliable",
    description: "We respect your time. Count on us to arrive on schedule and complete work efficiently without cutting corners.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "We take pride in our work and stand behind it with comprehensive warranties and a satisfaction guarantee.",
  },
  {
    icon: Heart,
    title: "Customer-Focused",
    description: "Your safety and satisfaction are our top priorities. We treat every home as if it were our own.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Why Choose The Mad Hatter Chimney Sweep?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed text-pretty">
              With over 10 years of experience serving our community, we've built our reputation on trust, quality, and exceptional service. When you choose us, you're choosing peace of mind.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/600x500?text=Experienced+chimney+sweep+professional+inspecting+fireplace+with+safety+equipment+and+tools"
                alt="Experienced chimney sweep professional inspecting fireplace with safety equipment and tools"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">2,500+</p>
                <p className="text-sm text-slate-300">Happy Customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</p>
                <p className="text-sm text-slate-300">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-slate-300">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
