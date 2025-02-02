"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative bg-neutral-900 overflow-hidden pt-16 dark:bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              className="sm:text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Grow your business — </span>{""}
                <span className="block text-neutral-50 xl:inline dark:text-neutral-900">on your own terms.</span>
              </h1>
              <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                Small business financing made simple. Apply in minutes.
              </p>
              <div className="mt-5 sm:mt-8  flex sm:gap-2 sm:flex-wrap justify-center gap-5 lg:justify-start">
                <div className="rounded-md shadow">
                  <Button
                    size="lg"
                    className="md:w-full flex items-center justify-center px-8 py-3 sm:px-2 text-base font-medium rounded-md text-neutral-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 dark:text-neutral-50"
                  >
                    Apply Now
                  </Button>
                </div>
                <div className=" rounded-md sm:ml-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="md:w-full flex items-center  sm:px-2 justify-center px-8 py-3 text-base font-medium rounded-md text-dark border-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full">
          <div className="absolute inset-0 bg-blue-100 rounded-bl-[80px]">
            <Image
              className="h-full w-full object-cover"
              src="/placeholder.svg"
              alt="Business owners working together"
              width={800}
              height={600}
              priority
            />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-200 rounded-full" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

