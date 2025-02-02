import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, } from "lucide-react"

import Image from "next/image"

const navigation = {
  solutions: [
    { name: "AI Credit Scoring", href: "#" },
    { name: "Fast Loans", href: "#" },
    { name: "Invoice Financing", href: "#" },
    { name: "Investor Matching", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },

  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className=" mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">


        <div className="md:grid md:grid-cols-4 grid-cols-1  text-left md:gap-8">
          <div>
            <Image className="" src="/img/logo.png" alt="Logo" height={100} width={100} />
            <p className="text-base text-gray-300 hover:text-white flex items-center">TCM is a financial technology (fintech) company that provides small businesses with fast and flexible working capital solutions.</p>
        
          </div>
          <div className="sm:text-center justify-center">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider  uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4 ">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider text-center uppercase">Legal</h3>
            <ul className="mt-4 space-y-4 ">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300  hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>



        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} TCM, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

