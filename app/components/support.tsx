"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Support() {
  return (
    <div className="bg-neutral-900 dark:bg-neutral-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white">
              {"We're fluent in small business — and ready to take your call."}
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              {"You don't need to be an expert in small business loans. Our team of specialists is here to help you every step of the way."}
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" className="text-neutral-900 dark:text-neutral-50">
                (888) 555-0123
              </Button>
              <p className="mt-2 text-sm text-gray-200">Mon - Fri, 8am - 7pm ET</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg" alt="Customer support team" fill className="object-cover" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-200 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

