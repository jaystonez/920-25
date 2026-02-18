import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Springfield",
    rating: 5,
    text: "Absolutely fantastic service! They were professional, thorough, and explained everything they were doing. Our chimney has never worked better. Highly recommend!",
  },
  {
    name: "Michael Chen",
    location: "Riverside",
    rating: 5,
    text: "After getting quotes from three companies, The Mad Hatter offered the best value and service. They arrived on time, did a meticulous job, and left no mess behind.",
  },
  {
    name: "Emily Rodriguez",
    location: "Oakmont",
    rating: 5,
    text: "We had an emergency chimney issue and they responded immediately. The team was knowledgeable, friendly, and fixed the problem quickly. True professionals!",
  },
  {
    name: "David Thompson",
    location: "Maplewood",
    rating: 5,
    text: "I've been using their services for 5 years now. They're consistent, reliable, and always go above and beyond. Wouldn't trust anyone else with our chimney.",
  },
  {
    name: "Jennifer Martinez",
    location: "Lakeside",
    rating: 5,
    text: "The inspection was incredibly thorough. They found issues we didn't know existed and provided clear solutions. Their honesty and expertise are unmatched.",
  },
  {
    name: "Robert Williams",
    location: "Hillcrest",
    rating: 5,
    text: "Great experience from start to finish. Fair pricing, excellent communication, and top-notch workmanship. Our fireplace looks and works like new!",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            See more reviews on{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Google
            </a>
            {" "}and{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Yelp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
