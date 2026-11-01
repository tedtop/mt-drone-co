import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { companyName, contact } from "@/lib/siteConfig";
import { services } from "@/lib/services-data";
import { cities } from "@/lib/cities-data";

// Static build-time year (avoided new Date() at render time — Next's Cache
// Components feature flags runtime-dynamic values during static prerendering).
const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-900/10 bg-brand-950 text-slate-300">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{companyName}</p>
          <p className="mt-2 text-sm text-slate-400">
            Montana-based commercial drone services. Aerial imagery, mapping,
            inspection, and on-call public-agency support.
          </p>
          <p className="mt-4 text-sm">
            <a href={`tel:${contact.phoneHref}`} className="focus-ring hover:text-white">
              {contact.phone}
            </a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${contact.email}`} className="focus-ring hover:text-white">
              {contact.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="focus-ring hover:text-white">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="focus-ring font-medium text-accent-400 hover:text-accent-300">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Service Area</p>
          <ul className="mt-3 space-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-area/${c.slug}`} className="focus-ring hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/government-enterprise" className="focus-ring hover:text-white">Government & Enterprise</Link></li>
            <li><Link href="/safety-compliance" className="focus-ring hover:text-white">Safety & Compliance</Link></li>
            <li><Link href="/about" className="focus-ring hover:text-white">About</Link></li>
            <li><Link href="/contact" className="focus-ring hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="focus-ring hover:text-white">FAQ</Link></li>
            <li><Link href="/privacy" className="focus-ring hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {companyName}. All rights reserved.</p>
          <p>
            Operations conducted only where FAA-authorized. See{" "}
            <Link href="/safety-compliance" className="focus-ring underline hover:text-slate-300">
              Safety &amp; Compliance
            </Link>
            .
          </p>
        </Container>
      </div>
    </footer>
  );
}
