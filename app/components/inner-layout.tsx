import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface InnerLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export function InnerLayout({ children, title, description }: InnerLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-gray-50 py-16 mt-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">{description}</p>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  )
}

