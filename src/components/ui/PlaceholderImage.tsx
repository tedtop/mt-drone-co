/**
 * Clearly labeled placeholder for imagery we don't have yet (no stock photos,
 * no scraped competitor images). Replace by dropping a real <Image> in its
 * place once sample/project imagery exists — see README "Placeholders".
 */
export function PlaceholderImage({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} flex items-center justify-center rounded-lg border-2 border-dashed border-brand-700/30 bg-brand-50`}
      role="img"
      aria-label={`Placeholder image: ${label}`}
    >
      <div className="px-4 text-center">
        <svg
          className="mx-auto h-8 w-8 text-brand-700/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 16.5V7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5Zm0 0 5.5-5.5a1.5 1.5 0 0 1 2.12 0L15 15.38m0 0 1.88-1.88a1.5 1.5 0 0 1 2.12 0L21 15.5M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          />
        </svg>
        <p className="mt-2 text-xs font-medium text-brand-700">
          IMAGE PLACEHOLDER
        </p>
        <p className="text-xs text-brand-700">{label}</p>
      </div>
    </div>
  );
}
