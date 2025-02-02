"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Clock } from "lucide-react"

const products = [
  {
    title: "TCM Line of Credit",
    description: "A revolving credit line that gives you more flexibility.",
    features: [
      "Credit lines from $10k - $250k",
      "Flexible repayment terms of up to 12 months",
      "Only pay for what you use",
    ],
    icon: CreditCard,
  },
  {
    title: "TCM Term Loan",
    description: "A one-time loan with fixed monthly payments.",
    features: ["Loan amounts from $25k - $500k", "Repayment terms up to 24 months", "Competitive fixed rates"],
    icon: Clock,
  },
]

export function Products() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Funding options built to work for you.</h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-neutral-900/10 rounded-lg flex items-center justify-center mb-4 dark:bg-neutral-50/10">
                    <product.icon className="w-6 h-6 text-neutral-900 dark:text-neutral-50" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-neutral-900 mt-1 dark:text-neutral-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

