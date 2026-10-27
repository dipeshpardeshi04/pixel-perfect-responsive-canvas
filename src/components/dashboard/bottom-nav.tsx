import { useState } from "react";
import { House, LayoutGrid, ClipboardCheck, ChartColumn, type LucideIcon } from "lucide-react";

type Tab = { icon: LucideIcon; label: string; badge?: number };

const tabs: Tab[] = [
  { icon: House, label: "Home" },
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: ClipboardCheck, label: "Tasks", badge: 3 },
  { icon: ChartColumn, label: "Reports" },
];

function NavItem({ tab, active, onClick }: { tab: Tab; active: boolean; onClick: () => void }) {
  const Icon = tab.icon;
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-1 flex-col items-center gap-1 pt-0.5 ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      <span className="relative">
        <Icon className="h-6 w-6" strokeWidth={active ? 2.5 : 2.2} />
        {tab.badge ? (
          <span className="absolute -right-2 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {tab.badge}
          </span>
        ) : null}
      </span>
      <span className={`text-[11px] ${active ? "font-bold" : "font-medium"}`}>{tab.label}</span>
      {active ? <span className="h-1 w-1 rounded-full bg-primary" /> : <span className="h-1 w-1" />}
    </button>
  );
}

export function BottomNav() {
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="relative mx-auto max-w-md">
        <nav className="grid grid-cols-4 items-start rounded-t-3xl border-t border-border bg-card px-3 pt-3.5 shadow-card">
          {tabs.map((tab) => (
            <NavItem
              key={tab.label}
              tab={tab}
              active={active === tab.label}
              onClick={() => setActive(tab.label)}
            />
          ))}
        </nav>

        <div className="flex justify-center bg-card pb-2 pt-2.5">
          <span className="h-[5px] w-32 rounded-full bg-foreground" />
        </div>
      </div>
    </div>
  );
}
