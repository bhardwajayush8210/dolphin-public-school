import Hero from "@/components/hero";
// import Features from "@/components/features";
import CurriculumSection from "@/components/curriculum-section";
import WhyDolphinSection from "@/components/why-dolphin-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <Features /> */}
      <CurriculumSection />
      <WhyDolphinSection />
      <TestimonialsSection />
      <CTA />
    </main>
  );
}
