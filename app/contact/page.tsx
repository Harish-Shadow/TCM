"use client"

import { useState } from "react"
import { InnerLayout } from "../components/inner-layout"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How long does the loan approval process take?",
    answer:
      "Our AI-powered system can provide instant decisions on loan applications. If approved, funds be deposited into your account within 24 hours.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with a wide range of small businesses across various industries. Our AI system evaluates each application based on multiple factors, not just traditional credit scores.",
  },
  {
    question: "How does the investor matching process work?",
    answer:
      "Our AI algorithms analyze investor preferences and business profiles to create optimal matches. Investors can review potential opportunities businesses showcase their growth potential.",
  },
  {
    question: "Is my data secure on your platform?",
    answer:
      "Yes, we use bank-level encryption and security measures to protect all data on our platform. We are committed maintaining the highest standards of privacy security.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      subject: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <InnerLayout
      title="Contact & Support"
      description="Get in touch with our team or find answers to common questions."
    >
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Select onValueChange={handleSubjectChange} value={formData.subject}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="investor">Investor Relations</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="captcha"
                    name="captcha"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="captcha" className="ml-2 block text-sm text-gray-900">
                    I'm not a robot
                  </label>
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Additional Contact Options</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-500 mr-2" />
                  <span>support@tcm.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-500 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="mt-8">
                <Button variant="outline" className="flex items-center" onClick={() => (window.location.href = "/faq")}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Visit our Help Center
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  )
}

