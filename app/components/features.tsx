"use client"

import { motion } from "framer-motion"
import { FileCheck, Zap, Shield } from "lucide-react"

const features = [
  {
    name: "Easy process",
    description: "You can apply and upload directly from your application, no need to go through a lengthy process.",
    icon: FileCheck,
  },
  {
    name: "Fast funding",
    description: "Once all your info is verified, you'll get funds deposited into account.",
    icon: Zap,
  },
  {
    name: "No hard credit pull",
    description: "Check your eligibility without affecting credit score.",
    icon: Shield,
  },
]

export function Features() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">See why business owners choose us.</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900/10 dark:bg-neutral-50/10">
                  <feature.icon className="h-8 w-8 text-neutral-900 dark:text-neutral-50" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

