import { ChevronDown } from "lucide-react";

const R = 42;
const CIRC = 2 * Math.PI * R;
const PCT = 72;

const bars = [
  { h: 16, cls: "bg-muted-foreground/25" },
  { h: 24, cls: "bg-muted-foreground/25" },
  { h: 20, cls: "bg-muted-foreground/25" },
  { h: 28, cls: "bg-primary/25" },
  { h: 24, cls: "bg-primary/35" },
  { h: 32, cls: "bg-primary/50" },
  { h: 40, cls: "bg-primary/75" },
  { h: 52, cls: "bg-primary" },
];

export function PerformanceCard() {
  return (
    <section className="px-4 pt-7 pb-36">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 pb-4">
        <h2 className="text-[24px] font-extrabold tracking-tight text-foreground">Performance</h2>
        <button className="flex shrink-0 items-center gap-1 text-[14px] font-semibold text-foreground">
          This Month
          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-4 shadow-card">
        <div className="relative shrink-0">
          <svg viewBox="0 0 100 100" className="h-[92px] w-[92px]">
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="var(--color-secondary)"
              strokeWidth="11"
            />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeDasharray={`${(CIRC * PCT) / 100} ${CIRC}`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className="absolute inset-0 grid place-items-center text-[22px] font-extrabold tracking-tight text-foreground">
            72%
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold tracking-tight text-foreground">
            Target Achievement
          </p>
          <p className="mt-1 text-[14px] font-medium text-muted-foreground">144 / 200 Calls</p>
          <div className="mt-3 flex h-[56px] items-end justify-end gap-[5px]">
            {bars.map(({ h, cls }, i) => (
              <span key={i} className={`w-[7px] rounded-full ${cls}`} style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
