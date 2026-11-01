export interface ChecklistItem {
  label: string;
  done: boolean;
  note?: string;
}

export function Checklist({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
              item.done
                ? "bg-emerald-100 text-emerald-700"
                : "bg-slate-100 text-slate-400"
            }`}
            aria-hidden="true"
          >
            {item.done ? "✓" : "–"}
          </span>
          <span>
            <span
              className={item.done ? "text-slate-800" : "text-slate-500"}
            >
              {item.label}
            </span>
            {item.note ? (
              <span className="block text-sm text-slate-400">{item.note}</span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
