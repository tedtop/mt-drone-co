import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us the service, location, and timeline for your project — private job or public-agency procurement — and we'll follow up within 1–2 business days.",
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; location?: string }>;
}) {
  const params = await searchParams;

  const requestedService = params.service;
  const initialService = services.some((s) => s.slug === requestedService)
    ? (requestedService as string)
    : "";
  const initialLocation = params.location ?? "";

  return (
    <Section>
      <SectionHeading
        eyebrow="Request a Quote"
        title="Tell us about your project"
        description="Private project or public-agency procurement — give us the basics and we'll follow up within 1–2 business days to confirm scope and timeline. We're a new operation building toward larger contracts, so for very small or informal requests, expect a conversation about fit and timing rather than next-day dispatch."
      />
      <div className="mt-10 max-w-3xl">
        <QuoteForm initialService={initialService} initialLocation={initialLocation} />
      </div>
    </Section>
  );
}
