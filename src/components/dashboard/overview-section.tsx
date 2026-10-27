import { Calendar, ChevronRight, Phone, Users, Store, ClipboardCheck } from "lucide-react";

const stats = [
  { icon: Phone, value: "12", label: "Daily Calls", target: "/ 20", progress: 60 },
  { icon: Users, value: "8", label: "Doctors Visited", target: "/ 15", progress: 53 },
  { icon: Store, value: "5", label: "Chemists Visited", target: "/ 10", progress: 50 },
  { icon: ClipboardCheck, value: "3", label: "Pending Tasks", target: null, progress: 55 },
];

export function OverviewSection() {
  return (
    <section className="pt-7">
      <div className="flex items-center justify-between gap-2 px-4 pb-4">
        <h2 className="whitespace-nowrap text-[21px] font-extrabold tracking-tight text-foreground">
          Today&rsquo;s Overview
        </h2>
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-foreground">
          <Calendar className="h-4 w-4" strokeWidth={2.2} />
          Mon, 26 Oct 2026
        </div>
      </div>

      <div className="relative">
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
          {stats.map(({ icon: Icon, value, label, target, progress }) => (
            <div
              key={label}
              className="w-[42vw] max-w-[170px] shrink-0 rounded-2xl border border-border bg-card p-4 shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" strokeWidth={2.2} />
              </span>
              <p className="mt-3 text-[28px] font-extrabold leading-none tracking-tight text-foreground">
                {value}
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-tight text-foreground">{label}</p>
              {target ? (
                <p className="mt-1 text-[13px] font-medium text-muted-foreground">{target}</p>
              ) : null}
              <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Scroll overview"
          className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-card shadow-card"
        >
          <ChevronRight className="h-4 w-4 text-foreground" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
