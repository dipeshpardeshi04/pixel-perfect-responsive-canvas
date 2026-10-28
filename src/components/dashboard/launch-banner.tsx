import { ArrowRight } from "lucide-react";
import productLaunch from "@/assets/product-launch.png";

const dots = [0, 1, 2];

export function LaunchBanner() {
  return (
    <section className="px-4">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-accent p-5 shadow-card">
        {/* backdrop circle + product shot */}
        <div className="pointer-events-none absolute right-[-16px] top-1/2 -translate-y-1/2">
          <div className="relative grid h-[200px] w-[200px] place-items-center">
            <div className="absolute inset-0 rounded-full bg-card/70" />
            <img
              src={productLaunch}
              alt="New medicine range"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative z-10 h-[190px] w-auto translate-y-1 object-contain mix-blend-multiply"
            />
          </div>
        </div>

        <div className="relative z-20 max-w-[58%]">
          <p className="text-[11px] font-bold tracking-[0.18em] text-muted-foreground">
            PRODUCT LAUNCH
          </p>
          <h2 className="mt-2 text-[26px] font-extrabold leading-[1.12] tracking-tight text-foreground">
            New Range for Better Health
          </h2>
          <p className="mt-2 text-sm leading-snug text-muted-foreground">
            Innovative medicines for a healthier tomorrow.
          </p>
          <button className="mt-4 flex items-center gap-2.5 text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary shadow-float">
              <ArrowRight className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="text-[15px] font-bold">Know More</span>
          </button>
        </div>

        <div className="relative z-20 mt-4 flex justify-center gap-2">
          {dots.map((d) => (
            <span
              key={d}
              className={
                d === 0
                  ? "h-2 w-2 rounded-full bg-foreground"
                  : "h-2 w-2 rounded-full bg-muted-foreground/30"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
