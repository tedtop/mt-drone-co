import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { flags } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about our drone services, certifications, insurance, pricing, and service area in Montana.",
};

interface Faq {
  question: string;
  answer: ReactNode;
}

const insuranceAnswer = flags.insuranceLiability || flags.hasPart107Pilot ? (
  <>
    <p>
      Every flight we perform is flown by an FAA Part 107 certified remote
      pilot, as required by federal law for commercial drone operations.
      {flags.insuranceLiability
        ? " We carry general liability insurance, with a certificate of insurance (COI) available on request."
        : " Liability insurance is bound before our first commercial flight — see our Safety & Compliance page for current status."}
    </p>
  </>
) : (
  <p>
    We&apos;re a new company, so we&apos;re answering this honestly rather
    than with a blanket &quot;yes&quot;: our FAA Part 107 pilot and our
    liability insurance are being put in place before we take on our first
    commercial flight, not claimed in advance. See our{" "}
    <Link href="/safety-compliance" className="font-semibold text-accent-600 hover:text-accent-700">
      Safety &amp; Compliance
    </Link>{" "}
    page for exactly where each of those stands right now.
  </p>
);

const ownAircraftAnswer = flags.hasAircraft ? (
  <p>
    Yes — we operate our own FAA-registered aircraft. See our{" "}
    <Link href="/safety-compliance" className="font-semibold text-accent-600 hover:text-accent-700">
      Safety &amp; Compliance
    </Link>{" "}
    page for details.
  </p>
) : (
  <p>
    Not yet. As a new company, our business model is to contract a
    certified pilot and acquire the specific aircraft best suited to a
    project at the time a contract is awarded, rather than carrying a fixed
    fleet and billing to justify it. This lets us match the aircraft
    (standard, thermal, LiDAR, etc.) to the job instead of whatever we
    happen to already own. Our{" "}
    <Link href="/safety-compliance" className="font-semibold text-accent-600 hover:text-accent-700">
      Safety &amp; Compliance
    </Link>{" "}
    page tracks our progress toward owning a fleet directly.
  </p>
);

const faqs: Faq[] = [
  {
    question: "Do you fly in national parks like Glacier or Yellowstone?",
    answer: (
      <p>
        No. Glacier National Park and Yellowstone National Park prohibit
        drone takeoff, landing, and operation under National Park Service
        regulations, and we do not fly in either park. We&apos;ll decline
        any request to do so.
      </p>
    ),
  },
  {
    question: "Are you licensed and insured?",
    answer: insuranceAnswer,
  },
  {
    question: "Do you own your own drones?",
    answer: ownAircraftAnswer,
  },
  {
    question: "How is pricing determined?",
    answer: (
      <p>
        We don&apos;t publish flat-rate pricing, because the right drone,
        flight plan, and deliverable format vary a lot by project. Every job
        gets a custom quote based on location, scope, timeline, and the
        deliverables you need. Use our{" "}
        <Link href="/quote" className="font-semibold text-accent-600 hover:text-accent-700">
          quote request form
        </Link>{" "}
        to get a quote scoped to your project.
      </p>
    ),
  },
  {
    question: "Do you work with government agencies?",
    answer: (
      <p>
        Yes — public-agency and government work, including on-call support
        arrangements, is a core part of what we&apos;re building toward. See
        our{" "}
        <Link
          href="/government-enterprise"
          className="font-semibold text-accent-600 hover:text-accent-700"
        >
          Government &amp; Enterprise
        </Link>{" "}
        page for procurement details and current registration status.
      </p>
    ),
  },
  {
    question: "What areas of Montana do you serve?",
    answer: (
      <p>
        See our{" "}
        <Link href="/service-area" className="font-semibold text-accent-600 hover:text-accent-700">
          Service Area
        </Link>{" "}
        page for the cities and regions we currently cover. If your project
        is outside that list, reach out — we may still be able to help.
      </p>
    ),
  },
  {
    question: "How far in advance do I need to book?",
    answer: (
      <p>
        It depends on the project and the season. Simple single-site flights
        can sometimes be scheduled within a week, weather permitting;
        projects that need airspace authorization, multi-site coordination,
        or a specific weather window should be booked several weeks out
        where possible. Tell us your timeline when you request a quote and
        we&apos;ll let you know what&apos;s realistic.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-topo relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              FAQ
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently asked questions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Straight answers, including where we honestly stand as a new
              company.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Questions" title="What people ask us" />
        <div className="mt-8 max-w-3xl divide-y divide-brand-900/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-brand-950">
                {faq.question}
                <span
                  className="shrink-0 text-xl text-accent-600 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 text-slate-600">{faq.answer}</div>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
