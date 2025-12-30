import Hero from "@/components/hero"
import Features from "@/components/features"
import Announcements from "@/components/announcements"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Announcements />
      <CTA />
    </main>
  )
}
