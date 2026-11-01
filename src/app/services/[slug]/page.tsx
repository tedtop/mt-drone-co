import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Checklist } from "@/components/ui/Checklist";
import { getServiceBySlug, services, type Service } from "@/lib/services-data";
import { companyLegalName, siteUrl } from "@/lib/siteConfig";
import { serviceImages } from "@/lib/images";

type RouteParams = { slug: string };

const categoryLabel: Record<Service["category"], string> = {
  visual: "Photo & Video",
  data: "Mapping & Data",
  inspection: "Inspection",
  "public-safety": "Public Safety",
  land: "Land & Ag",
  advisory: "Advisory",
};

export function generateStaticParams(): RouteParams[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

function getRelatedServices(current: Service, limit = 3): Service[] {
  const sameCategory = services.filter(
    (s) => s.slug !== current.slug && s.category === current.category
  );
  const otherCategory = services.filter(
    (s) => s.slug !== current.slug && s.category !== current.category
  );
  return [...sameCategory, ...otherCategory].slice(0, limit);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const quoteHref = `/quote?service=${service.slug}`;
  const relatedServices = getRelatedServices(service);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: companyLegalName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "State",
      name: "Montana",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <PhotoHero image={serviceImages[service.slug]} py="py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            {categoryLabel[service.category]}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            {service.heroDescription}
          </p>
          <div className="mt-8">
            <Button href={quoteHref} variant="primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </PhotoHero>

      {/* Ideal for */}
      <Section>
        <SectionHeading
          eyebrow="Ideal for"
          title="Who this service is built for"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {service.idealFor.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Capabilities */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="What's included" title="Capabilities" />
        <div className="mt-10 max-w-3xl">
          <Checklist
            items={service.capabilities.map((capability) => ({
              label: capability,
              done: true,
            }))}
          />
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <SectionHeading eyebrow="Deliverables" title="What you'll receive" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((deliverable) => (
            <div
              key={deliverable.name}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-brand-950">
                {deliverable.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Our process" title="How this engagement runs" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <div key={step}>
              <p className="text-3xl font-bold text-accent-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sample deliverable image */}
      <Section>
        <SectionHeading
          eyebrow="Sample deliverable"
          title="What a finished deliverable looks like"
          description="Labeled placeholder below — a real sample deliverable will be added here once available."
        />
        <div className="mt-10 max-w-xl">
          <PlaceholderImage
            label={`Sample ${service.shortTitle.toLowerCase()} deliverable`}
          />
        </div>
      </Section>

      {/* Honesty / legal notes callout — must stay visible, not buried */}
      {service.notes && service.notes.length > 0 ? (
        <Section className="pt-0">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-800">
              Important notes
            </h3>
            <ul className="mt-3 space-y-2">
              {service.notes.map((note) => (
                <li key={note} className="text-sm leading-relaxed text-amber-900">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      {/* Related services */}
      {relatedServices.length > 0 ? (
        <Section className="bg-brand-50">
          <SectionHeading eyebrow="Related" title="Other services to consider" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="focus-ring group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                  {categoryLabel[related.category]}
                </p>
                <h3 className="mt-2 text-base font-bold text-brand-950 group-hover:text-accent-600">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {/* Closing CTA */}
      <Section className="bg-brand-950">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to scope this project?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Tell us the location and timeline — private project or
              public-agency procurement — and we&apos;ll respond with next
              steps.
            </p>
          </div>
          <Button href={quoteHref} variant="primary" className="shrink-0">
            Request a Quote
          </Button>
        </div>
      </Section>
    </>
  );
}
