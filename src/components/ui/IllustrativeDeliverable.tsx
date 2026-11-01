import Image from "next/image";

/**
 * Real photography standing in for a sample deliverable (orthomosaic map,
 * thermal report, inspection imagery, etc) — generic industry example
 * photography relevant to the service shown, not this company's own
 * completed project. Clearly labeled so it never reads as an actual client
 * deliverable. Replace `src` with a real sample (same component shape) once
 * one exists and flip flags.hasSampleDeliverables — see README.
 */
export function IllustrativeDeliverable({
  src,
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  src: string;
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} relative overflow-hidden rounded-lg border border-brand-900/10 bg-brand-950`}
    >
      <Image
        src={src}
        alt={`Illustrative example: ${label}. Generic industry example photography, not an actual client deliverable.`}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/95 to-transparent px-4 pb-3 pt-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
          Example output
        </p>
        <p className="text-xs text-slate-200">{label} — industry example photography, not an actual client deliverable</p>
      </div>
    </div>
  );
}
