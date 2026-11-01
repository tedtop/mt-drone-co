import Link from "next/link";
import { Service } from "@/lib/services-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
        {categoryLabel[service.category]}
      </p>
      <h3 className="mt-2 text-lg font-bold text-brand-950 group-hover:text-accent-600">
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
  );
}

const categoryLabel: Record<Service["category"], string> = {
  visual: "Photo & Video",
  data: "Mapping & Data",
  inspection: "Inspection",
  "public-safety": "Public Safety",
  land: "Land & Ag",
  advisory: "Advisory",
};
