import { useState } from "react";

const tabs = ["DCR", "MASTER", "TRANSACTION"];

export function DcrTabs() {
  const [active, setActive] = useState("DCR");

  return (
    <div className="px-4 pt-5">
      <div className="flex items-center gap-1 rounded-2xl bg-secondary p-1.5">
        {tabs.map((label) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`flex-1 whitespace-nowrap rounded-xl px-1 py-2.5 text-[12.5px] font-bold tracking-wide transition-colors ${
                isActive ? "bg-primary text-primary-foreground shadow-float" : "text-foreground"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
