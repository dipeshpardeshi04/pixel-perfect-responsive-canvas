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
  type LucideIcon,
} from "lucide-react";

type Action = { icon: LucideIcon; label: string };

const actions: Action[] = [
  { icon: CalendarDays, label: "Day Plan" },
  { icon: BriefcaseMedical, label: "Dr. Call" },
  { icon: Bell, label: "Dr. Reminder Call" },
  { icon: FlaskConical, label: "Dr. Sample" },
  { icon: Pill, label: "Chemist Call" },
  { icon: BellPlus, label: "Chemist Reminder Call" },
  { icon: Headphones, label: "Customer Call" },
  { icon: ListTodo, label: "Non Listed Calls" },
  { icon: ReceiptText, label: "Expense" },
  { icon: ClipboardList, label: "Summary" },
  { icon: SquareCheck, label: "Final Submit" },
];

export function DcrActions() {
  return (
    <section className="pt-4">
      <div className="grid grid-cols-3 gap-3 px-4">
        {actions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card px-2 py-5 shadow-card"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary">
              <Icon className="h-7 w-7 text-foreground" strokeWidth={2} />
            </span>
            <span className="text-center text-[12.5px] font-semibold leading-tight text-foreground">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
