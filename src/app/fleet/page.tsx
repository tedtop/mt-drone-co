import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CredentialBadge } from "@/components/ui/Badge";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { companyName, flags } from "@/lib/siteConfig";
import { fleetImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fleet & Equipment",
  description:
    "The platform classes we plan to operate, from entry-level rapid-deployment aircraft to enterprise inspection-class drones with thermal and zoom payloads.",
};

interface PlatformTier {
  name: string;
  image: string;
  exampleClass: string;
  description: string;
  usedFor: string[];
}

const tiers: PlatformTier[] = [
  {
    name: "Entry-Level / Rapid Deployment",
    image: fleetImages.entryLevel,
    exampleClass: "Sub-250g consumer class (e.g. DJI Mini series)",
    description:
      "Small, light, fast to deploy. No FAA registration threshold issues at sub-250g, easy to get airborne for a quick look or a simple shot list.",
    usedFor: ["Aerial Photography and Videography", "Real Estate and Land", "Event Coverage"],
  },
  {
    name: "Mapping & Photogrammetry Class",
    image: fleetImages.prosumer,
    exampleClass: "RTK-enabled prosumer class (e.g. DJI Mavic 3 Enterprise series)",
    description:
      "Longer flight time and RTK/PPK positioning for survey-grade accuracy — the workhorse class for structured mapping missions, not just stills.",
    usedFor: [
      "Mapping and Photogrammetry",
      "Surveying Support",
      "Construction Progress Monitoring",
      "Agriculture and Land Management",
    ],
  },
  {
    name: "Enterprise Inspection Class",
    image: fleetImages.enterprise,
    exampleClass: "Weather-sealed enterprise class (e.g. DJI Matrice 30/350 series)",
    description:
      "Weather-sealed, longer range, built for repeat utility and infrastructure inspection cycles — the class utilities and agencies actually standardize on for recurring programs.",
    usedFor: [
      "Power Line and Utility Inspection",
      "Wildfire and Prescribed Burn Support",
      "Search and Rescue / Public Safety Support",
    ],
  },
  {
    name: "Sensor Payloads",
    image: fleetImages.thermalSensor,
    exampleClass: "Radiometric thermal, zoom, and mapping-grade camera payloads",
    description:
      "Not a separate airframe — interchangeable payload options we plan to pair with the mapping and enterprise classes above, matched to what the job actually needs.",
    usedFor: ["Thermal Inspection", "Power Line and Utility Inspection", "Wildfire and Prescribed Burn Support"],
  },
];

export default function FleetPage() {
  return (
    <>
      <PhotoHero image={fleetImages.enterprise} py="py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Fleet &amp; Equipment
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The platform range we&apos;re built to operate — entry-level to enterprise.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            {companyName} is structured around matching the aircraft to the
            job, not flying whatever happens to already be in a bag. Here&apos;s
            the platform range we scope projects around, from quick
            rapid-deployment recon up to enterprise-grade inspection
            aircraft.
          </p>
          <div className="mt-6">
            <CredentialBadge
              active={flags.hasAircraft}
              label="Fleet currently in service"
              pendingLabel="No aircraft owned yet — acquired per our hire-pilot, buy-aircraft-at-contract-award model"
            />
          </div>
        </div>
      </PhotoHero>

      <Section>
        <SectionHeading
          eyebrow="How we think about equipment"
          title="Match the aircraft to the job, not the job to whatever we own"
          description="As a new company, we don't own aircraft yet — our business model is to bring on a certified pilot and acquire the specific platform a project needs once a contract is awarded, rather than carrying a fixed fleet and billing to justify it. The classes below are what we scope and quote against; exact models are confirmed per project and may change as the platform market evolves."
        />
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="Platform classes"
          title="Four classes, matched to the mission"
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={tier.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-950">{tier.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent-600">
                  {tier.exampleClass}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tier.description}
                </p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Used for
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {tier.usedFor.map((use) => (
                      <li
                        key={use}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
                      >
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-800">
            A note on federal/NDAA-compliant work
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-amber-900">
            The classes above describe our general commercial equipment plan.
            Many DJI-class platforms are not NDAA-compliant or Blue UAS-listed,
            and some federal procurements require hardware that is. For work
            that specifically requires Blue UAS / NDAA-compliant equipment, we
            plan to source from that approved list rather than this general
            lineup — see our{" "}
            <a
              href="/government-enterprise"
              className="focus-ring font-semibold underline hover:text-amber-700"
            >
              Government &amp; Enterprise
            </a>{" "}
            page for how we approach that distinction.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-950">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a project that needs a specific platform class?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Tell us the service and site, and we&apos;ll scope the right
              equipment class for it.
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
