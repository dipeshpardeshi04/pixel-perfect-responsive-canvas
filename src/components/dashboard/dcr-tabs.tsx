import { useState } from "react";
import {
  FileText,
  LayoutGrid,
  ArrowLeftRight,
  ChartColumn,
  type LucideIcon,
} from "lucide-react";

type Tab = { icon: LucideIcon; label: string };

const tabs: Tab[] = [
  { icon: FileText, label: "DCR" },
  { icon: LayoutGrid, label: "MASTER" },
  { icon: ArrowLeftRight, label: "TRANSACTION" },
  { icon: ChartColumn, label: "REPORTS" },
];

export function DcrTabs() {
  const [active, setActive] = useState("DCR");

  return (
    <div className="px-4 pt-5">
      <div className="flex items-center gap-1 rounded-2xl bg-secondary p-1.5">
        {tabs.map(({ icon: Icon, label }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-1 py-2.5 whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-float"
                  : "text-foreground"
              }`}
            >
              <Icon
                className={isActive ? "h-4 w-4" : "h-4 w-4 opacity-80"}
                strokeWidth={2.4}
              />
              <span className={`text-[11.5px] ${isActive ? "font-bold" : "font-bold"}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
