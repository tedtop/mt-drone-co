import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services-data";
import { companyName } from "@/lib/siteConfig";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Montana Commercial Drone Services",
  description:
    "Aerial photography and video, mapping and photogrammetry, utility and thermal inspection, and on-call wildfire and public-agency drone support across Montana.",
};

const howWeWork = [
  {
    step: "01",
    title: "Scope the mission",
    description:
      "We talk through your deliverables, site, timeline, and whether this is a private or public-agency engagement before anything is quoted.",
  },
  {
    step: "02",
    title: "Plan airspace and access",
    description:
      "Every flight is checked against controlled airspace, LAANC authorization needs, and any site-specific restrictions before scheduling.",
  },
  {
    step: "03",
    title: "Fly and capture",
    description:
      "Flights are flown to the brief, with a weather contingency window built in rather than a single all-or-nothing flight day.",
  },
  {
    step: "04",
    title: "Process and deliver",
    description:
      "Data is processed into the format your team actually uses — reports, orthomosaics, edited video, or raw files — and delivered on an agreed timeline.",
  },
];

export default function Home() {
  return (
    <>
      <PhotoHero image={heroImages.home}>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Montana Commercial Drone Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Aerial data and imagery for the people who build, maintain, and protect Montana.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            {companyName} provides commercial drone services across Montana —
            aerial photo and video, mapping and photogrammetry, utility and
            thermal inspection, and on-call support for wildfire and public
            safety agencies. Built from day one around FAA compliance and
            government-contracting readiness.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/quote" variant="primary">
              Request a Quote
            </Button>
            <Button href="/government-enterprise" variant="ghost" className="ring-white/30 text-white hover:bg-white/10">
              Government &amp; Enterprise
            </Button>
          </div>
        </div>
      </PhotoHero>

      <CredibilityStrip />

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Twelve service lines, one FAA-compliant operation"
          description="From a single real estate flight to a standing on-call agreement with a public agency, every engagement runs through the same compliance-first process."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="How we work"
          title="A predictable process, from first call to delivered data"
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((item) => (
            <div key={item.step}>
              <p className="text-3xl font-bold text-accent-600">{item.step}</p>
              <h3 className="mt-2 text-lg font-bold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Sample deliverables"
          title="What a finished deliverable looks like"
          description="Labeled placeholders below — real sample deliverables (orthomosaic, thermal report, inspection report) will be added here once available. See Safety & Compliance for our current operating status."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <PlaceholderImage label="Sample orthomosaic map" />
          <PlaceholderImage label="Sample thermal inspection report" />
          <PlaceholderImage label="Sample utility inspection report" />
        </div>
      </Section>

      <Section className="bg-brand-950">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a project, or a contract you&apos;re scoping?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Tell us the service, location, and timeline — private project or
              public-agency procurement, we&apos;ll respond with next steps.
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
