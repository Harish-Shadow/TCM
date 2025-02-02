"use client"

import { motion } from "framer-motion"

const stats = [
  { id: 1, name: "10-Minute", description: "Application Process" },
  { id: 2, name: "$1B", description: "Total Funding" },
  { id: 3, name: "A+ Rating", description: "Better Business Bureau" },
]

export function Stats() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">{stat.name}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

