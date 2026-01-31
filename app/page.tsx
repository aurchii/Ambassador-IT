import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import CapabilityGrid from "@/components/CapabilityGrid";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ServiceCards />
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <CapabilityGrid />
      </section>
      {/* <section className="mx-auto max-w-6xl px-6 py-16">
        <CaseStudyGrid />
      </section> */}
      <CTA />
    </main>
  );
}
