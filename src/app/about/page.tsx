import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { companyName } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we started a Montana commercial drone company, how we think about compliance and transparency, and what we're building toward.",
};

const principles = [
  {
    title: "Compliance first, not compliance eventually",
    description:
      "Every process on this site — airspace checks, LAANC authorization, insurance, safety management — is being built in before we take our first paid flight, not bolted on after a problem.",
  },
  {
    title: "Transparency about where we are",
    description:
      "We'd rather tell a prospective client or agency exactly what's in place and what's still in progress than paper over gaps with vague marketing language. Our Safety & Compliance page is written to be checked, not just read.",
  },
  {
    title: "Built toward government-contract readiness",
    description:
      "From NAICS code selection to SAM.gov registration to insurance structure, we're setting the business up to be a credible vendor for public-agency work, not retrofitting a hobby operation after the fact.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-topo relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              About {companyName}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A new company, built deliberately from day one.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {companyName} doesn&apos;t have a long history to tell you about
              — we&apos;re a brand-new Montana commercial drone services
              company. What we can tell you is why we started, how we&apos;re
              building the operation, and what we&apos;re working toward.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Why we started"
          title="Montana needs a drone services provider that treats compliance as the product"
        />
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600">
          <p>
            Commercial drone work in Montana spans a huge range of
            needs — construction and real estate marketing, agricultural and
            land mapping, utility and infrastructure inspection, and on-call
            support for wildfire and public safety agencies. Much of that
            work, especially for public agencies and larger commercial
            clients, depends on a vendor that can document FAA compliance,
            carry real insurance, and operate inside controlled airspace
            correctly every time.
          </p>
          <p>
            We started {companyName} to build that kind of operation from the
            ground up, rather than starting with ad-hoc flying and adding
            compliance later. That means some of what a more established
            company could already claim — years of flight hours, a client
            list, an owned fleet — isn&apos;t true for us yet. We think being
            upfront about that, while showing exactly how we&apos;re closing
            each gap, is a better foundation for trust than overstating where
            we are.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Why Montana" title="Built here, for here" />
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600">
          <p>
            Montana&apos;s geography is exactly where drone data has an
            advantage: long rural utility corridors, large agricultural and
            timber parcels, wildfire-prone terrain, and construction and
            infrastructure projects spread across a state with a small
            population relative to its land area. We&apos;re organizing our
            service area and operations around Montana specifically —
            understanding the airspace, land ownership patterns, and public
            agencies here — rather than treating it as one territory among
            many for an out-of-state operator.
          </p>
          <p>
            See our{" "}
            <Link href="/service-area" className="font-semibold text-accent-600 hover:text-accent-500">
              service area
            </Link>{" "}
            for where we currently operate.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How we operate" title="Our operating philosophy" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg font-bold text-brand-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Our team" title="Pilots and operations" />
        <div className="mt-6 max-w-3xl">
          <p className="text-slate-600">
            Pilot and operations team: to be announced as we grow. We are not
            listing names or bios here because, beyond the founders setting
            up this business, that team doesn&apos;t exist yet — and we&apos;d
            rather leave this section honestly placeholder than invent one.
            See our{" "}
            <Link
              href="/safety-compliance"
              className="font-semibold text-accent-600 hover:text-accent-500"
            >
              Safety &amp; Compliance
            </Link>{" "}
            page for exactly what we commit to on hiring, certification, and
            insurance as that team comes together.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-950">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Want to know exactly where we stand before you hire us?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Our Safety &amp; Compliance page lays out our certification,
              insurance, and safety program status in detail.
            </p>
          </div>
          <Button href="/safety-compliance" variant="primary" className="shrink-0">
            View Safety &amp; Compliance
          </Button>
        </div>
      </Section>
    </>
  );
}
