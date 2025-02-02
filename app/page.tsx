import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { Stats } from "@/components/stats"
import { Process } from "@/components/process"
import { Requirements } from "@/components/requirements"
import { Testimonials } from "@/components/testimonials"
import { Recognition } from "@/components/recognition"
import { Support } from "@/components/support"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        
        <Hero />
        <Stats />
        <Products />
        <Features />
        <Process />
        <Requirements />
        <Testimonials />
        <Recognition />
        <Support />
      </main>
      <Footer/>
    </div>
  )
}

