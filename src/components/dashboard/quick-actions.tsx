import {
  CalendarCheck2,
  UserRound,
  Store,
  Bell,
  FlaskConical,
  ReceiptText,
  ChartColumn,
  FileCheck2,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Action = { icon: LucideIcon; label: string; accent: boolean };

const actions: Action[] = [
  { icon: CalendarCheck2, label: "Day Plan", accent: true },
  { icon: UserRound, label: "Doctor Visit", accent: false },
  { icon: Store, label: "Chemist Visit", accent: true },
  { icon: Bell, label: "Reminder Calls", accent: false },
  { icon: FlaskConical, label: "Sample", accent: false },
  { icon: ReceiptText, label: "Expense", accent: false },
  { icon: ChartColumn, label: "Reports", accent: true },
  { icon: FileCheck2, label: "Final Submit", accent: false },
];

export function QuickActions() {
  return (
    <section className="pt-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 pb-3">
        <h2 className="text-[24px] font-extrabold tracking-tight text-foreground">Quick Actions</h2>
        <button className="flex shrink-0 items-center gap-0.5 text-[14px] font-bold text-foreground">
          View All
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 px-4">
        {actions.map(({ icon: Icon, label, accent }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card px-1 py-4 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary">
              <Icon
                className={accent ? "h-5.5 w-5.5 text-primary" : "h-5.5 w-5.5 text-foreground"}
                strokeWidth={2.2}
              />
            </span>
            <span className="text-center text-[11.5px] font-semibold leading-tight text-foreground">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
