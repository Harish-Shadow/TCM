"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "The convenience made it worth it—no ability to have drive anywhere.",
    author: "John D.",
    role: "Small Business Owner",
    rating: 5,
  },
  {
    quote: "We had a great experience. The process was very straightforward.",
    author: "Sarah M.",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote: "Best lending experience I've ever had.",
    author: "Michael R.",
    role: "Restaurant Owner",
    rating: 5,
  },
  {
    quote: "Quick and easy process with excellent customer service.",
    author: "Lisa K.",
    role: "Retail Business Owner",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by thousands of business owners like you.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

