"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { InnerLayout } from "../components/inner-layout"
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"

const steps = [
  {
    title: "Application",
    description: "Fill out our simple online application form.",
    details:
      "Our user-friendly application process takes just a few minutes. You'll provide basic information about your business, financial history, and funding needs.",
  },
  {
    title: "AI Assessment",
    description: "Our AI system analyzes your application and financial data.",
    details:
      "Our advanced AI algorithms review your application, considering thousands of data points to assess business's financial health and potential.",
  },
  {
    title: "Approval",
    description: "Receive an instant decision on your loan application.",
    details:
      "Thanks to our AI-powered system, you'll get an immediate response on your application status, including approved loan amount and terms.",
  },
  {
    title: "Funding",
    description: "If approved, receive funds in your account within 24 hours.",
    details:
      "Once you accept the loan terms, we initiate fund transfer process. In most cases, you'll have access to funds within one business day.",
  },
]

const testimonials = [
  {
    name: "Jane Doe",
    company: "Tech Startup X",
    quote:
      "TCM's AI-powered lending platform helped us secure funding in record time, allowing to seize a crucial market opportunity.",
  },
  {
    name: "John Smith",
    company: "Local Retail Y",
    quote:
      "The invoice financing feature has been a game-changer for our cash flow management. We can now take on larger orders with confidence.",
  },
]

export default function HowItWorksPage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <InnerLayout
      title="How It Works"
      description="Learn about our streamlined process for getting your business the funding it needs."
    >
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-2 border-indigo-500 rounded-full">
                    <span className="text-indigo-500 font-medium">{index + 1}</span>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">{step.title}</span>
                  {expandedStep === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedStep === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{step.details}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Customer Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </InnerLayout>
  )
}

