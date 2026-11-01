import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cities, getCityBySlug } from "@/lib/cities-data";
import { getServiceBySlug } from "@/lib/services-data";
import { companyName } from "@/lib/siteConfig";

type CityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return { title: "Service Area" };
  }

  return {
    title: `${city.name} Drone Services`,
    description: `Commercial drone services for the ${city.name}, Montana area: ${city.blurb}`,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const relevantServices = city.relevantServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      <section className="bg-topo relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              {city.region}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Drone Services in {city.name}, Montana
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {city.blurb}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
              {companyName} is Montana-wide from a single base — we don&apos;t
              have a local office or crew permanently stationed in{" "}
              {city.name}, but we regularly plan and fly projects in this
              area and know its airspace and market context.
            </p>
            <div className="mt-8">
              <Button href={`/quote?location=${encodeURIComponent(city.name)}`} variant="primary">
                Request a Quote for {city.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {city.nearbyNotes && city.nearbyNotes.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Local notes"
            title={`What to know about flying near ${city.name}`}
          />
          <div className="mt-8 space-y-4">
            {city.nearbyNotes.map((note) => (
              <div
                key={note}
                className="flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5"
              >
                <svg
                  className="mt-0.5 h-6 w-6 shrink-0 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3.75m0 3.75h.008M10.29 3.86 1.82 18a1.5 1.5 0 0 0 1.29 2.25h17.78A1.5 1.5 0 0 0 22.18 18L13.71 3.86a1.5 1.5 0 0 0-2.42 0Z"
                  />
                </svg>
                <p className="text-sm leading-relaxed text-amber-900">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className={city.nearbyNotes?.length ? "bg-brand-50" : ""}>
        <SectionHeading
          eyebrow="Relevant services"
          title={`Services relevant to ${city.name}`}
          description={`Based on ${city.name}'s local industries and market, these are the service lines we expect to be most relevant in the ${city.region.toLowerCase()} area.`}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relevantServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="focus-ring group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-brand-950 group-hover:text-accent-600">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-950">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a project near {city.name}?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Tell us the service, site, and timeline — we&apos;ll respond
              with next steps for {city.region.toLowerCase()}.
            </p>
          </div>
          <Button
            href={`/quote?location=${encodeURIComponent(city.name)}`}
            variant="primary"
            className="shrink-0"
          >
            Request a Quote
          </Button>
        </div>
      </Section>
    </>
  );
}
