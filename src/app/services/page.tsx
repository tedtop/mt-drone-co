import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services-data";
import { companyName } from "@/lib/siteConfig";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The full Montana drone services lineup: aerial photo and video, mapping and photogrammetry, surveying support, utility and thermal inspection, construction monitoring, real estate, agriculture, wildfire and public-safety support, event coverage, and training.",
};

export default function ServicesPage() {
  return (
    <>
      <PhotoHero image={heroImages.services} py="py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Twelve service lines, one FAA-compliant process
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            {companyName} covers a wide range of commercial drone work across
            Montana — from a single real estate flight to a standing on-call
            agreement with a public agency. Whatever the brief, every
            engagement runs through the same flight planning, airspace
            authorization, and delivery process described below.
          </p>
        </div>
      </PhotoHero>

      <Section>
        <SectionHeading
          eyebrow="Browse by service"
          title="Find the right service for your project"
          description="Each service page breaks down who it's built for, what's included, what you'll receive, and how the engagement runs."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-brand-950">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Tell us the project, location, and timeline — private work or
              public-agency procurement — and we&apos;ll point you to the
              right service and next steps.
            </p>
          </div>
          <Button href="/quote" variant="primary" className="shrink-0">
            Request a Quote
          </Button>
        </div>
      </Section>
    </>
  );
}
