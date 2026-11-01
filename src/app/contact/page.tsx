import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { contact, companyName } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${companyName} — phone, email, mailing address, and procurement contact.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-topo relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in touch.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              For general questions, press inquiries, or anything that
              doesn&apos;t need a full project scope, reach us directly below.
              If you already have a project to scope, use our quote request
              form instead — it gets your details to us faster.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Reach us" title="Contact information" />
            <dl className="mt-8 space-y-6 text-slate-600">
              <div>
                <dt className="text-sm font-semibold text-brand-950">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${contact.phoneHref}`} className="text-accent-600 hover:text-accent-500">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-950">General inquiries</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className="text-accent-600 hover:text-accent-500">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-950">
                  Procurement / contracting officers
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.proceurementEmail}`}
                    className="text-accent-600 hover:text-accent-500"
                  >
                    {contact.proceurementEmail}
                  </a>
                  <span className="mt-1 block text-sm text-slate-500">
                    For government and enterprise procurement contacts — see
                    also our Government &amp; Enterprise page.
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-950">Mailing address</dt>
                <dd className="mt-1">
                  {contact.addressLine1}
                  <br />
                  {contact.addressCity}, {contact.addressState} {contact.addressZip}
                  <span className="mt-1 block text-sm text-slate-500">
                    {contact.mailingNote}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl bg-brand-50 p-8">
            <h2 className="text-xl font-bold text-brand-950">Response time</h2>
            <p className="mt-3 text-slate-600">
              We respond to general inquiries within one to two business
              days. For time-sensitive requests — including active wildfire
              or public-safety support needs — call us directly rather than
              relying on email or the website.
            </p>
            <div className="mt-6 rounded-lg border border-brand-700/20 bg-white p-6">
              <h3 className="text-lg font-bold text-brand-950">
                Have a project to scope?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Our quote request form collects the details we need — service
                type, location, timeline, and whether this is a private or
                public-agency engagement — so we can respond with next steps
                instead of a round of back-and-forth email.
              </p>
              <Button href="/quote" variant="primary" className="mt-4">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
