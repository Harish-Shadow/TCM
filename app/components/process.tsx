"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Process() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Funding that moves at your speed.</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-900 dark:border-neutral-50">
                    <span className="text-neutral-900 font-medium dark:text-neutral-50">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Complete the application.</h3>
                  <p className="mt-1 text-gray-500">
                    Answer a few basic questions and upload required documents in just minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-900 dark:border-neutral-50">
                    <span className="text-neutral-900 font-medium dark:text-neutral-50">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Get a decision.</h3>
                  <p className="mt-1 text-gray-500">
                    We'll let you know right away if you're approved and for how much.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-900 dark:border-neutral-50">
                    <span className="text-neutral-900 font-medium dark:text-neutral-50">3</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Receive your funds.</h3>
                  <p className="mt-1 text-gray-500">Sign your documents and get funds as soon as the same day.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg">Apply Now</Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <Image src="/placeholder.svg" alt="Application process demonstration" fill className="object-cover" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-200 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

