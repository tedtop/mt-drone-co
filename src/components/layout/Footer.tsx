import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { companyName, contact, social } from "@/lib/siteConfig";
import { services } from "@/lib/services-data";
import { cities } from "@/lib/cities-data";

const socialLinks: Array<{
  key: keyof typeof social;
  label: string;
  path: string; // SVG path data for a simple 24x24 icon
}> = [
  {
    key: "linkedin",
    label: "LinkedIn",
    path: "M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.75H5.67V18h2.67ZM7 8.63a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08ZM18.34 18v-4.5c0-2.4-1.28-3.52-3-3.52-1.38 0-2 .76-2.34 1.3V9.75h-2.67S10.35 10 10.35 18H13v-4.47c0-.24.02-.47.09-.64.19-.47.63-.96 1.37-.96.96 0 1.34.73 1.34 1.8V18h2.54Z",
  },
  {
    key: "instagram",
    label: "Instagram",
    path: "M12 2.5c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.75 1.14.5.5.85 1.04 1.14 1.72.25.62.42 1.35.47 2.4.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.6 4.6 0 0 1-1.14 1.75 4.65 4.65 0 0 1-1.72 1.14c-.62.25-1.35.42-2.4.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.6 4.6 0 0 1-1.75-1.14 4.65 4.65 0 0 1-1.14-1.72c-.25-.62-.42-1.35-.47-2.4C2.51 15.06 2.5 14.72 2.5 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.14-1.75A4.65 4.65 0 0 1 5.89 2.56c.62-.25 1.35-.42 2.4-.47C9.35 2.04 9.69 2.5 12 2.5Zm0 2.13c-2.67 0-2.99.01-4.04.06-.87.04-1.34.19-1.65.31-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.27.78-.31 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.19 1.34.31 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.27 1.65.31 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.19 1.65-.31.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.27-.78.31-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.19-1.34-.31-1.65-.16-.42-.36-.71-.67-1.02a2.7 2.7 0 0 0-1.02-.67c-.31-.12-.78-.27-1.65-.31-1.05-.05-1.37-.06-4.04-.06Zm0 3.62a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 2.13a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Zm4.78-3.36a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z",
  },
  {
    key: "youtube",
    label: "YouTube",
    path: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z",
  },
];

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
          {socialLinks.some((s) => social[s.key]) ? (
            <div className="mt-4 flex gap-3">
              {socialLinks
                .filter((s) => social[s.key])
                .map((s) => (
                  <a
                    key={s.key}
                    href={social[s.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
            </div>
          ) : null}
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
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
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
