import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/services-data";
import { serviceImages } from "@/lib/images";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-40 w-full overflow-hidden bg-brand-100">
        <Image
          src={serviceImages[service.slug]}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-6">
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
      </div>
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
