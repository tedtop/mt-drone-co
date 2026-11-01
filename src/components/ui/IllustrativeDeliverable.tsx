import Image from "next/image";
import { sampleDeliverableImages } from "@/lib/images";

/**
 * Real aerial/infrared photography standing in for a sample deliverable
 * (orthomosaic map, thermal report, inspection report) — generic industry
 * example photography, not this company's own completed project. Clearly
 * labeled so it never reads as an actual client deliverable. Replace with a
 * real sample (same component shape) once one exists and flip
 * flags.hasSampleDeliverables — see README.
 */
export function IllustrativeDeliverable({
  variant,
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  variant: "orthomosaic" | "thermal" | "inspection";
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} relative overflow-hidden rounded-lg border border-brand-900/10 bg-brand-950`}
    >
      <Image
        src={sampleDeliverableImages[variant]}
        alt={`Illustrative example: ${label}. Generic industry example photography, not an actual client deliverable.`}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/95 to-transparent px-4 pb-3 pt-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
          Illustrative example
        </p>
        <p className="text-xs text-slate-200">{label} — industry example photography, not an actual client deliverable</p>
      </div>
    </div>
  );
}
