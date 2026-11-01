import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, type ChecklistItem } from "@/components/ui/Checklist";
import { CredentialBadge } from "@/components/ui/Badge";
import {
  companyLegalName,
  companyName,
  contact,
  flags,
  naicsCodes,
  siteUrl,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Government and Enterprise",
  description:
    "On-call UAS surge capacity for federal, state, tribal, and local agencies and enterprise buyers — FAA-compliant, and transparent about exactly what's in place versus in progress toward contract readiness.",
};

const coreCompetencies = [
  "Aerial mapping and photogrammetry (orthomosaics, point clouds, 3D models)",
  "Utility and infrastructure visual/thermal inspection",
  "On-call wildfire and prescribed-burn aerial reconnaissance",
  "Search and rescue / public-safety aerial support under agency direction",
  "Construction and asset progress monitoring",
  "Agricultural and rangeland aerial assessment",
];

const differentiators = [
  "Direct, responsive communication with a single point of contact — no subcontractor layers.",
  "Flight operations built around FAA compliance and airspace deconfliction from day one, not retrofitted.",
  "An explicit, public readiness checklist (below) instead of vague claims about capacity or experience.",
  "Procurement approach built around Blue UAS / NDAA-compliant aircraft for work that requires it.",
];

const readinessChecklist: ChecklistItem[] = [
  {
    label: "LLC formed and in good standing",
    done: flags.llcFormed,
    note: !flags.llcFormed ? "In progress." : undefined,
  },
  {
    label: "General liability insurance bound",
    done: flags.insuranceLiability,
    note: !flags.insuranceLiability
      ? "To be bound before first commercial flight."
      : undefined,
  },
  {
    label: "FAA Part 107 pilot and registered aircraft in place",
    done: flags.hasPart107Pilot && flags.hasAircraft,
    note:
      !flags.hasPart107Pilot || !flags.hasAircraft
        ? "Pilot and/or aircraft to be brought on at contract award or as volume warrants."
        : undefined,
  },
  {
    label: "SAM.gov registration with active UEI",
    done: flags.samRegistered,
    note: !flags.samRegistered
      ? "Not yet registered — required before any direct federal award."
      : undefined,
  },
  {
    label: "NDAA-compliant (Blue UAS) fleet plan in place",
    done: flags.ndaaCompliantFleet,
    note: !flags.ndaaCompliantFleet
      ? "Procurement plan prioritizes NDAA-compliant platforms; no aircraft owned yet."
      : undefined,
  },
  {
    label: "Capability statement finalized",
    done: flags.capabilityStatementAvailable,
    note: !flags.capabilityStatementAvailable
      ? "On-page summary available now (below); full PDF in progress."
      : undefined,
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial unmanned aircraft systems (UAS) services",
  provider: {
    "@type": "Organization",
    name: companyLegalName,
    url: siteUrl,
  },
  areaServed: {
    "@type": "State",
    name: "Montana",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Federal, state, tribal, and local government agencies; enterprise buyers",
  },
  description:
    "On-call UAS surge capacity and inspection, mapping, and reconnaissance services positioned for government and enterprise procurement, built around FAA compliance and transparent contract-readiness status.",
};

export default function GovernmentEnterprisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="bg-topo relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              Government and Enterprise
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              On-call UAS surge capacity, built for public-agency and
              enterprise procurement.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {companyName} is positioning as an on-call UAS resource for
              federal, state, tribal, and local agencies, and for enterprise
              buyers who need FAA-compliant drone capacity without standing
              up an in-house program. We are early-stage, and we lead with
              that fact rather than hide it: the checklist below shows
              exactly what is in place today and what is still in progress
              toward full contract readiness.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
              That transparency is itself part of the pitch — a vendor who
              tells you precisely where it stands on insurance, registration,
              and fleet compliance is one you can plan around with
              confidence, whether you&apos;re scoping a future solicitation
              or just getting on our radar early.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contract-readiness" variant="primary">
                See Contract Readiness Checklist
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                className="ring-white/30 text-white hover:bg-white/10"
              >
                Contact Procurement
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="capability-statement">
        <SectionHeading
          eyebrow="Capability Statement"
          title="Capability statement summary"
          description="A short on-page summary of core competencies, differentiators, and company data for contracting officers and procurement teams evaluating us for a solicitation."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-brand-950">
              Core competencies
            </h3>
            <ul className="mt-4 space-y-2">
              {coreCompetencies.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold text-brand-950">
              Differentiators
            </h3>
            <ul className="mt-4 space-y-2">
              {differentiators.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-brand-950">Company data</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="text-slate-500">Legal name</dt>
                <dd className="text-right font-medium text-slate-800">{companyLegalName}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="text-slate-500">UEI</dt>
                <dd className="text-right font-medium text-slate-800">
                  [PENDING SAM.GOV REGISTRATION]
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="text-slate-500">CAGE code</dt>
                <dd className="text-right font-medium text-slate-800">
                  [PENDING SAM.GOV REGISTRATION]
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="text-slate-500">Primary NAICS</dt>
                <dd className="text-right font-medium text-slate-800">
                  {naicsCodes.find((n) => n.primary)?.code ?? "TBD"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">State</dt>
                <dd className="text-right font-medium text-slate-800">Montana</dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-slate-100 pt-6">
              {flags.capabilityStatementAvailable ? (
                <Button href="/capability-statement.pdf" variant="secondary">
                  Download Capability Statement (PDF)
                </Button>
              ) : (
                <div>
                  <p className="text-sm text-slate-600">
                    A finalized capability statement PDF is not published yet.
                    Capability statement available on request — contact us
                    and we&apos;ll send the current version directly.
                  </p>
                  <a
                    href={`mailto:${contact.proceurementEmail}`}
                    className="focus-ring mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-brand-900 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800"
                  >
                    Email {contact.proceurementEmail}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-50" id="naics-codes">
        <SectionHeading
          eyebrow="NAICS Codes"
          title="NAICS codes we operate under"
          description="Codes relevant to our services that we are considering for SAM.gov registration. Final NAICS selection will be confirmed during registration, in consultation with an accountant or registration specialist."
        />
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-950 text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Code</th>
                <th scope="col" className="px-4 py-3 font-semibold">Description</th>
                <th scope="col" className="px-4 py-3 font-semibold">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {naicsCodes.map((naics) => (
                <tr key={naics.code}>
                  <td className="px-4 py-3 font-mono text-slate-700">{naics.code}</td>
                  <td className="px-4 py-3 text-slate-700">{naics.label}</td>
                  <td className="px-4 py-3">
                    {naics.primary ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200">
                        Primary
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                        Secondary
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="contract-readiness">
        <SectionHeading
          eyebrow="Contract Readiness Checklist"
          title="Where we actually stand"
        />
        <p className="mt-4 max-w-3xl text-slate-600">
          Every item below is tied directly to our real operating status —
          nothing here is marked done until it actually is. We&apos;d rather
          show you an honest, in-progress checklist than a vague claim of
          readiness we can&apos;t back up. We think that transparency is a
          genuine differentiator against competitors who only describe
          capability in general terms.
        </p>
        <div className="mt-8 max-w-2xl rounded-xl border border-slate-200 bg-white p-6">
          <Checklist items={readinessChecklist} />
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="Who we work with"
          title="Federal, state, tribal, and local agencies"
          description="We're positioning to support public-sector UAS needs across levels of government, without claiming any specific past award or relationship we don't yet have."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-brand-950">
              Federal agencies
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              A natural fit for on-call UAS solicitations and small-business
              set-aside categories under NAICS codes like 541370, where
              agencies need surge aerial data collection capacity without
              standing up their own flight program.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-brand-950">
              State agencies
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Montana state agencies — including land management, transportation,
              and emergency management functions headquartered in Helena —
              are a priority market for mapping, inspection, and on-call
              wildfire support engagements.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-brand-950">
              Tribal governments
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Tribal land management, infrastructure, and natural resource
              programs often face the same surge-capacity gap as rural
              county agencies — on-call aerial data collection without a
              standing in-house UAS program.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-brand-950">
              Local governments and utilities
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Counties, municipalities, electric cooperatives, and public
              works departments needing inspection, mapping, or public-safety
              aerial support without committing to full-time equipment and
              staffing.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Equipment approach"
          title="Built around NDAA-compliant procurement"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-slate-600">
          <p>
            We do not currently own any aircraft. As we build out our fleet,
            our procurement plan prioritizes Blue UAS / NDAA-compliant
            platforms for any work that requires it — rather than
            standardizing on hardware we&apos;d later have to replace for a
            federal or state buyer. We&apos;re not naming a specific
            drone manufacturer or model here, since we don&apos;t want to
            claim ownership of, or promote, hardware we don&apos;t yet have
            in service.
          </p>
          <div>
            <CredentialBadge
              active={flags.ndaaCompliantFleet}
              label="NDAA-compliant fleet in service"
              pendingLabel="NDAA-compliant fleet — procurement plan in place, aircraft not yet acquired"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-brand-950" id="contact">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Contracting officers and procurement teams
          </h2>
          <p className="mt-4 text-slate-300">
            Working a solicitation, RFI, or RFQ that could fit our
            service lines? Reach out directly — we&apos;re glad to respond
            to early market research and sources-sought notices even before
            we&apos;re fully registered.
          </p>
          <dl className="mt-6 space-y-2 text-slate-200">
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Procurement email:</dt>
              <dd>
                <a
                  href={`mailto:${contact.proceurementEmail}`}
                  className="focus-ring underline hover:text-accent-400"
                >
                  {contact.proceurementEmail}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Phone:</dt>
              <dd>
                <a href={`tel:${contact.phoneHref}`} className="focus-ring underline hover:text-accent-400">
                  {contact.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </>
  );
}
