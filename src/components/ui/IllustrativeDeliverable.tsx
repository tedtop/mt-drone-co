/**
 * Stylized, generic illustration standing in for a sample deliverable
 * (orthomosaic map, thermal report, inspection report) — not a real client
 * deliverable. Clearly labeled as illustrative so it never reads as an
 * actual completed project. Replace with a real sample (via next/image)
 * once one exists and flip flags.hasSampleDeliverables — see README.
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
      role="img"
      aria-label={`Illustrative example: ${label}. Not an actual client deliverable.`}
    >
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {variant === "orthomosaic" && <OrthomosaicArt />}
        {variant === "thermal" && <ThermalArt />}
        {variant === "inspection" && <InspectionArt />}
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/95 to-transparent px-4 pb-3 pt-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
          Illustrative example
        </p>
        <p className="text-xs text-slate-300">{label} — not an actual client deliverable</p>
      </div>
    </div>
  );
}

function OrthomosaicArt() {
  const cells = [];
  const cols = 10;
  const rows = 8;
  const w = 400 / cols;
  const h = 300 / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const shade = (r * cols + c) % 5;
      const fills = ["#2d4a3e", "#35563f", "#3f6248", "#4a6e4f", "#2a4236"];
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={c * w}
          y={r * h}
          width={w}
          height={h}
          fill={fills[shade]}
          stroke="#1a2e23"
          strokeWidth={0.5}
        />
      );
    }
  }
  return (
    <g>
      {cells}
      <g stroke="#f5a623" strokeWidth={1.5} fill="none" opacity={0.85}>
        <polyline points="20,260 90,220 150,230 210,180 270,190 330,140 380,120" />
      </g>
      <g fill="#f5a623" opacity={0.9}>
        <circle cx={90} cy={220} r={3} />
        <circle cx={210} cy={180} r={3} />
        <circle cx={330} cy={140} r={3} />
      </g>
    </g>
  );
}

function ThermalArt() {
  return (
    <g>
      <defs>
        <radialGradient id="hot1" cx="35%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="45%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
        <radialGradient id="hot2" cx="70%" cy="65%" r="35%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="60%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
      </defs>
      <rect width={400} height={300} fill="#1e1b4b" />
      <rect width={400} height={300} fill="url(#hot1)" opacity={0.9} />
      <rect width={400} height={300} fill="url(#hot2)" opacity={0.7} />
      <g stroke="#0f0f2d" strokeWidth={1} opacity={0.3}>
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={(i + 1) * 37.5} x2={400} y2={(i + 1) * 37.5} />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={(i + 1) * 40} y1={0} x2={(i + 1) * 40} y2={300} />
        ))}
      </g>
    </g>
  );
}

function InspectionArt() {
  return (
    <g>
      <rect width={400} height={300} fill="#0f1b2e" />
      <g stroke="#3a5a7a" strokeWidth={2} fill="none">
        <line x1={60} y1={260} x2={60} y2={40} />
        <line x1={340} y1={260} x2={340} y2={40} />
        <line x1={20} y1={70} x2={380} y2={55} />
        <line x1={20} y1={130} x2={380} y2={115} />
        <line x1={20} y1={190} x2={380} y2={175} />
      </g>
      <g fill="#f5a623">
        <circle cx={200} cy={62} r={5} />
        <rect x={190} y={52} width={20} height={20} fill="none" stroke="#f5a623" strokeWidth={2} />
      </g>
      <g fill="#64748b" fontSize="11" fontFamily="monospace">
        <text x={20} y={285}>SPAN 04 — STRUCTURE OK</text>
        <text x={250} y={285}>FLAG: 1</text>
      </g>
    </g>
  );
}
