import { Calendar, Phone, Users, Store } from "lucide-react";

const stats = [
  { icon: Phone, value: "12", label: "Daily Calls", target: "/ 20", progress: 60 },
  { icon: Users, value: "8", label: "Doctors Visited", target: "/ 15", progress: 53 },
  { icon: Store, value: "5", label: "Chemists Visited", target: "/ 10", progress: 50 },
];

export function OverviewSection() {
  return (
    <section className="pt-3">
      <div className="flex items-center justify-between gap-2 px-4 pb-3">
        <h2 className="whitespace-nowrap text-[21px] font-extrabold tracking-tight text-foreground">
          Today&rsquo;s Overview
        </h2>
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-foreground">
          <Calendar className="h-4 w-4" strokeWidth={2.2} />
          Mon, 26 Oct 2026
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 px-4">
        {stats.map(({ icon: Icon, value, label, target, progress }) => (
          <div
            key={label}
            className="rounded-2xl border border-border bg-card p-3 shadow-card"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10">
                <Icon className="h-4.5 w-4.5 text-primary" strokeWidth={2.2} />
              </span>
              <span className="text-[24px] font-extrabold leading-none tracking-tight text-foreground">
                {value}
              </span>
            </div>
            <p className="mt-2 text-[11.5px] font-semibold leading-tight text-foreground">
              {label}{" "}
              {target ? (
                <span className="font-medium text-muted-foreground">{target}</span>
              ) : null}
            </p>
            <div className="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
