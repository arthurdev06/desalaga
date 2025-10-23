import Hero from '@/components/Hero'
import Statistics from '@/components/Statistics'
import Solutions from '@/components/Solutions'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import "./globals.css" 

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Statistics />
      <Solutions />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}