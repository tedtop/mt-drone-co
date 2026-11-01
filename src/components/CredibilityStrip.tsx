import { flags } from "@/lib/siteConfig";
import { CredentialBadge } from "@/components/ui/Badge";

/**
 * Flag-driven trust strip. Every badge reflects the real current state of the
 * business — "in progress" badges are shown honestly rather than omitted,
 * since the pitch to enterprise/government buyers is transparency about
 * exactly where we are in standing up operations.
 */
export function CredibilityStrip() {
  return (
    <div className="border-y border-brand-900/10 bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-between">
          <p className="text-sm font-semibold text-brand-900">
            Current operating status:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <CredentialBadge
              active={flags.hasPart107Pilot}
              label="FAA Part 107 pilot on contract"
              pendingLabel="Part 107 pilot — to be contracted at contract award"
            />
            <CredentialBadge
              active={flags.hasAircraft}
              label="Aircraft fleet in service"
              pendingLabel="Aircraft — to be acquired at contract award"
            />
            <CredentialBadge
              active={flags.llcFormed}
              label="LLC formed"
              pendingLabel="LLC formation — in progress"
            />
            <CredentialBadge
              active={flags.insuranceLiability}
              label="Liability insurance bound"
              pendingLabel="Insurance — to be bound before first flight"
            />
            <CredentialBadge
              active={flags.samRegistered}
              label="SAM.gov registered"
              pendingLabel="SAM.gov registration — in progress"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
