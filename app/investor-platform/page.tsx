"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { InnerLayout } from "../components/inner-layout"
import { Button } from "@/components/ui/button"
import { BarChart, PieChart, TrendingUp, Shield, Users } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const investorFeatures = [
  {
    name: "Diversified Portfolio",
    description: "Invest in a wide range of small businesses across various industries.",
    icon: PieChart,
    details:
      "Our AI-driven platform allows you to diversify your investments across multiple sectors, reducing risk and maximizing potential returns. You can easily spread investment different business types, industries, levels.",
  },
  {
    name: "AI-Powered Matching",
    description: "Our AI algorithms match you with businesses that fit your investment criteria.",
    icon: TrendingUp,
    details:
      "Our sophisticated AI algorithms analyze your investment preferences, risk tolerance, and goals to match you with the most suitable small businesses. This personalized approach ensures that you're presented opportunities align strategy.",
  },
  {
    name: "Real-Time Analytics",
    description: "Access detailed analytics and performance metrics for your investments.",
    icon: BarChart,
    details:
      "Our platform provides comprehensive, real-time analytics on your investment portfolio. Track key performance indicators, monitor business growth, and make data-driven decisions with our intuitive dashboard detailed reports.",
  },
  {
    name: "Secure Transactions",
    description: "Bank-level security ensures your investments are safe and protected.",
    icon: Shield,
    details:
      "We prioritize the security of your investments and personal information. Our platform uses bank-level encryption, multi-factor authentication, regular audits to ensure that data transactions are always protected.",
  },
]

const howItWorksSteps = [
  { title: "Register", description: "Create your investor account on our platform." },
  { title: "Set Preferences", description: "Define your investment criteria and risk tolerance." },
  { title: "Review Opportunities", description: "Explore AI-matched investment opportunities." },
  { title: "Invest", description: "Choose your investments and allocate funds securely." },
  { title: "Monitor & Grow", description: "Track performance and reinvest for continued growth." },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Angel Investor",
    quote:
      "TCM's AI-driven platform has revolutionized my investment strategy. The quality of businesses I've been matched with is impressive, and the returns have exceeded expectations.",
  },
  {
    name: "Michael Chen",
    role: "Venture Capitalist",
    quote:
      "The real-time analytics and performance tracking on TCM's platform give me unprecedented insight into my investments. It's changed the way I manage portfolio.",
  },
]

export default function InvestorPlatformPage() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof investorFeatures)[0] | null>(null)

  return (
    <InnerLayout
      title="Partner with TCM for Smarter Investments"
      description="Join our platform to connect with promising small businesses and diversify your investment portfolio AI-powered insights."
    >
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">For Investors</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Invest in the Future of Small Business
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our AI-driven platform connects you with vetted small businesses, offering attractive returns and
              supporting economic growth.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {investorFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="relative cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">How It Works for Investors</h3>
            <div className="flex flex-wrap justify-center items-center">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex flex-col items-center mx-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-500 font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">Investor Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-gray-600 mb-4 italic">`&quot;{testimonial.quote}&quot;`</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" onClick={() => (window.location.href = "/contact")}>
              Join as an Investor
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Ready to start? Contact us to learn more about investment opportunities.
            </p>
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

