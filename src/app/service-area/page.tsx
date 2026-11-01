import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { cities } from "@/lib/cities-data";
import { companyName } from "@/lib/siteConfig";
import { cityImages, heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Montana-wide commercial drone coverage from a single base — see hub cities and request a quote for your location.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PhotoHero image={heroImages.serviceArea} py="py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Service Area
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Montana-wide coverage, from a single base.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            {companyName} operates across the entire state of Montana from
            one home base — we are not claiming offices or local crews
            stationed in every city below. These are the regional hubs
            where we see the most demand and know the local airspace and
            market context well. If your project is somewhere else in
            Montana, we still want to hear about it: we travel statewide on
            request.
          </p>
        </div>
      </PhotoHero>

      <Section>
        <SectionHeading
          eyebrow="Regional hubs"
          title="Pick your area for local context"
          description="Each page below covers the services, market context, and any airspace or legal notes relevant to that part of the state."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-area/${city.slug}`}
              className="focus-ring group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-36 w-full overflow-hidden bg-brand-100">
                <Image
                  src={cityImages[city.slug]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                  {city.region}
                </p>
                <h3 className="mt-2 text-lg font-bold text-brand-950 group-hover:text-accent-600">
                  {city.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {city.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                  View {city.name} details
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <div className="rounded-xl border border-brand-900/10 bg-white p-8">
          <h2 className="text-xl font-bold text-brand-950">
            Don&apos;t see your town listed?
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            The cities above are our highest-demand regional hubs, not the
            limit of where we work. We fly anywhere in Montana on request —
            tell us your location when you request a quote and we&apos;ll
            factor in travel and local airspace considerations from there.
          </p>
          <Button href="/quote" variant="primary" className="mt-4">
            Request a Quote
          </Button>
        </div>
      </Section>
    </>
  );
}
