import { Signal, Wifi, BatteryFull, Menu, Bell, ChevronDown } from "lucide-react";
import avatar from "@/assets/avatar.png";

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-4 pb-1">
      <span className="text-[15px] font-bold tracking-tight text-foreground">12:01</span>
      <div className="flex items-center gap-1.5 text-foreground">
        <Signal className="h-4 w-4" strokeWidth={2.5} />
        <Wifi className="h-4 w-4" strokeWidth={2.5} />
        <BatteryFull className="h-5 w-5" strokeWidth={2} />
      </div>
    </div>
  );
}

export function AppHeader() {
  return (
    <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 pt-3 pb-4">
      <button aria-label="Open menu" className="shrink-0 p-1 -ml-1">
        <Menu className="h-7 w-7 text-foreground" strokeWidth={2.5} />
      </button>

      <div className="min-w-0">
        <h1 className="truncate text-[22px] font-extrabold leading-tight tracking-tight text-foreground">
          CBO ERP | 9050
        </h1>
        <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
          FY 2023-2024
          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button aria-label="Notifications" className="relative p-1">
          <Bell className="h-6 w-6 text-foreground" strokeWidth={2.2} />
          <span className="absolute -right-0.5 -top-0.5 grid h-[18px] w-[18px] place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            3
          </span>
        </button>
        <button aria-label="Profile" className="shrink-0">
          <img
            src={avatar}
            alt="Profile"
            width={40}
            height={40}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
