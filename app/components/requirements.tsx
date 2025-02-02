"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const requirements = [
  {
    value: "1 Year",
    label: "Time in Business",
  },
  {
    value: "625",
    label: "Minimum Credit Score",
  },
  {
    value: "$100K",
    label: "Annual Revenue",
  },
  {
    value: "Business",
    label: "Bank Account Required",
  },
]

export function Requirements() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Are we a match? Check our minimum requirements.**</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {requirements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{item.value}</p>
                  <p className="mt-2 text-sm text-gray-500">{item.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

