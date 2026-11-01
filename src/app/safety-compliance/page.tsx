import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CredentialBadge } from "@/components/ui/Badge";
import { Checklist } from "@/components/ui/Checklist";
import { companyName, flags, legalNotes } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Safety & Compliance",
  description:
    "How we approach FAA Part 107 compliance, airspace authorization, insurance, and safety management at a Montana commercial drone company — including our current operating status.",
};

const smsPrinciples = [
  {
    label: "Pre-flight risk assessment on every job",
    note: "Site survey, airspace check, weather, and population density are evaluated before a mission is scheduled, not just before takeoff.",
  },
  {
    label: "Published weather minimums",
    note: "Wind, visibility, and precipitation thresholds are set in advance and a flight is scrubbed or rescheduled if conditions don't meet them — no exceptions made under schedule pressure.",
  },
  {
    label: "Documented maintenance and pre-flight checklists",
    note: "Every aircraft in service will be flown against a written pre-flight checklist and maintained on a documented schedule, not an informal basis.",
  },
  {
    label: "Incident and near-miss reporting commitment",
    note: "Any incident, near-miss, or airspace deviation will be documented and reported through the appropriate channel (including to the FAA where required) rather than handled informally.",
  },
];

export default function SafetyCompliancePage() {
  return (
    <>
      <section className="bg-topo relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              Safety &amp; Compliance
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A compliance-first operation, stated plainly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {companyName} is a new company. Rather than make blanket claims,
              this page lays out exactly where our certifications, insurance,
              and safety program stand today, and the framework we commit to
              operating under as each piece comes online.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Pilot certification"
          title="FAA Part 107"
        />
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600">
          <p>
            Every commercial drone flight we perform will be flown by a
            pilot holding an FAA Part 107 Remote Pilot Certificate, as
            required by federal law for commercial unmanned aircraft
            operations.
          </p>
          <div>
            <CredentialBadge
              active={flags.hasPart107Pilot}
              label="FAA Part 107 certified pilot on contract"
              pendingLabel="Part 107 certified pilot — to be contracted at contract award"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="Our process"
          title="Airspace and LAANC authorization"
          description="This describes our standard compliance approach to airspace, not a specific pilot's credential."
        />
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600">
          <p>
            Before any flight is scheduled, the site is checked against FAA
            airspace classification. If the location falls within controlled
            airspace that requires authorization, we work through the FAA&apos;s
            Low Altitude Authorization and Notification Capability (LAANC)
            system — or a manual airspace authorization request when LAANC
            isn&apos;t available for the location or altitude needed — before
            the flight date is confirmed.
          </p>
          <p>
            Where a site has additional restrictions (temporary flight
            restrictions, stadium TFRs, critical infrastructure, tribal land,
            or landowner-specific rules), those are identified during
            scoping, and the flight plan is adjusted or the client is told
            up front if a restriction prevents the flight as requested.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Coverage" title="Insurance" />
        <div className="mt-6 max-w-3xl">
          <Checklist
            items={[
              {
                label: "General liability insurance bound",
                done: flags.insuranceLiability,
                note: flags.insuranceLiability
                  ? "Certificate of insurance (COI) available on request."
                  : "To be bound before our first commercial flight.",
              },
              {
                label: "Hull (aircraft physical damage) insurance bound",
                done: flags.insuranceHull,
                note: flags.insuranceHull
                  ? "Certificate of insurance (COI) available on request."
                  : "To be bound once aircraft are acquired.",
              },
              {
                label: "Non-owned / rented aircraft liability rider in place",
                done: flags.insuranceNonOwned,
                note: flags.insuranceNonOwned
                  ? "Certificate of insurance (COI) available on request."
                  : "Relevant while we contract pilots and aircraft ahead of owning our own fleet — to be bound before any flight under that arrangement.",
              },
            ]}
          />
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="Operating framework"
          title="An SMS-style safety approach"
          description="We're building our operation around Safety Management System (SMS) principles from day one — a framework we commit to, not a claim of a flight-hours track record we don't yet have."
        />
        <div className="mt-10 max-w-3xl">
          <Checklist
            items={smsPrinciples.map((p) => ({
              label: p.label,
              done: true,
              note: p.note,
            }))}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Legal notes" title="Montana state law and national parks" />
        <div className="mt-6 max-w-3xl space-y-8 text-slate-600">
          <div>
            <h3 className="text-lg font-bold text-brand-950">Montana state law</h3>
            {legalNotes.montanaTrespassCarveoutVerified ? (
              <p className="mt-2">
                Montana law includes provisions addressing commercial drone
                operations relative to property and privacy. Consult current
                statute text and legal counsel for specifics as they apply to
                your project — this page is informational, not legal advice.
              </p>
            ) : (
              <p className="mt-2">
                Montana law includes provisions addressing drone operations
                relative to property and privacy, and the treatment of
                FAA-compliant commercial operations under that law is a
                detail we have not finished verifying against the current
                statute text. We are not stating a specific legal
                interpretation here. If airspace access or landowner
                permission is a concern for your project, consult current
                Montana statute text and your own legal counsel — this page
                is informational, not legal advice.
              </p>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-950">National parks</h3>
            <p className="mt-2">
              Glacier National Park and Yellowstone National Park prohibit
              drone takeoff, landing, and operation under National Park
              Service regulations. We do not fly in Glacier or Yellowstone,
              and we will decline any request to do so.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
