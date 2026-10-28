import {
  CalendarDays,
  BriefcaseMedical,
  Bell,
  FlaskConical,
  Pill,
  BellPlus,
  Headphones,
  ListTodo,
  ReceiptText,
  ClipboardList,
  SquareCheck,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Action = { icon: LucideIcon; label: string };

const actions: Action[] = [
  { icon: CalendarDays, label: "Day Plan" },
  { icon: BriefcaseMedical, label: "Dr. Call" },
  { icon: Bell, label: "Dr. Reminder Call" },
  { icon: FlaskConical, label: "Dr. Sample" },
  { icon: MortarPestle, label: "Chemist Call" },
  { icon: BellPlus, label: "Chemist Reminder Call" },
  { icon: Headphones, label: "Customer Call" },
  { icon: ListTodo, label: "Non Listed Calls" },
  { icon: ReceiptText, label: "Expense" },
  { icon: ClipboardList, label: "Summary" },
  { icon: SquareCheck, label: "Final Submit" },
];

export function DcrActions() {
  return (
    <section className="pt-5">
      <h2 className="px-4 pb-3 text-[21px] font-extrabold tracking-tight text-foreground">
        DCR Actions
      </h2>

      <div className="grid grid-cols-3 gap-2.5 px-4">
        {actions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-2 rounded-xl border border-border bg-card p-2.5 text-left shadow-card"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary">
              <Icon className="h-4.5 w-4.5 text-foreground" strokeWidth={2.2} />
            </span>
            <span className="flex-1 text-[11.5px] font-semibold leading-tight text-foreground">
              {label}
            </span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={2.5} />
          </button>
        ))}
      </div>
    </section>
  );
}
