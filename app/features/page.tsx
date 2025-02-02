"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { InnerLayout } from "../components/inner-layout"
import { Brain, Clock, FileText, Users, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const features = [
  {
    name: "AI-Generated Credit Scores & Risk Management",
    shortDescription: "Leverage AI to reduce lending risks and make informed decisions.",
    icon: Brain,
    details:
      "Our AI-powered credit scoring system analyzes thousands of data points to provide accurate and fair assessments. This innovative approach allows us consider factors beyond traditional scores, giving small businesses a better chance at securing funding.",
  },
  {
    name: "1-Day Loan Strategy",
    shortDescription: "Experience fast approvals and funding for your business needs.",
    icon: Clock,
    details:
      "With our streamlined process and advanced AI technology, we can approve fund loans within 24 hours. This rapid turnaround time ensures that your business access capital when you need it most, without the long wait times associated with traditional lenders.",
  },
  {
    name: "AI-Powered Invoice Financing",
    shortDescription: "Automate your cash flow with intelligent invoice financing solutions.",
    icon: FileText,
    details:
      "Our AI-driven invoice financing solution analyzes your invoices and customer payment patterns to offer competitive rates. This allows you unlock the value in accounts receivable, improving cash flow helping business grow.",
  },
  {
    name: "Investor Platform",
    shortDescription: "Connect your business with potential investors seamlessly.",
    icon: Users,
    details:
      "Our investor platform uses AI matching algorithms to connect businesses with the right investors. This intelligent process considers factors such as industry, growth stage, and funding needs create mutually beneficial partnerships.",
  },
  {
    name: "AI Product Sales",
    shortDescription: "Access AI-driven financial tools as a service for your business.",
    icon: ShoppingCart,
    details:
      "We offer our cutting-edge AI financial tools as a service, allowing businesses to leverage advanced technology without the need for significant in-house development. From predictive cash flow analysis AI-powered forecasting, can give your business competitive edge.",
  },
]

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <InnerLayout
      title="Our Innovative Features"
      description="Discover how TCM's AI-powered solutions can revolutionize your business finances."
    >
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white mb-4">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-base text-gray-500 mb-4">{feature.shortDescription}</p>
                  <Button onClick={() => setSelectedFeature(feature)} className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedFeature?.name}</DialogTitle>
            <DialogDescription>{selectedFeature?.details}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setSelectedFeature(null)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </InnerLayout>
  )
}

