"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { name: "Forbes", src: "/placeholder.svg" },
  { name: "Bloomberg", src: "/placeholder.svg" },
  { name: "TechCrunch", src: "/placeholder.svg" },
  { name: "Wall Street Journal", src: "/placeholder.svg" },
  { name: "Business Insider", src: "/placeholder.svg" },
]

export function Recognition() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-base text-gray-600">Recognized as Best for Short-Term Loans by industry experts</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

