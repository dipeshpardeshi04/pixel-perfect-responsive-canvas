import { ArrowRight } from "lucide-react";
import productLaunch from "@/assets/product-launch.png";

const dots = [0, 1, 2];

export function LaunchBanner() {
  return (
    <section className="px-4">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-4 py-4 shadow-card">
        {/* backdrop circle + product shot */}
        <div className="pointer-events-none absolute right-[-10px] top-1/2 -translate-y-1/2">
          <div className="relative grid h-[128px] w-[128px] place-items-center">
            <div className="absolute inset-0 rounded-full bg-secondary" />
            <img
              src={productLaunch}
              alt="New medicine range"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative z-10 h-[124px] w-auto translate-y-1 object-contain mix-blend-multiply"
            />
          </div>
        </div>

        <div className="relative z-20 max-w-[62%]">
          <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
            PRODUCT LAUNCH
          </p>
          <h2 className="mt-1.5 text-[21px] font-extrabold leading-[1.15] tracking-tight text-foreground">
            New Range for Better Health
          </h2>
          <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
            Innovative medicines for a healthier tomorrow.
          </p>
          <button className="mt-3 flex items-center gap-2 text-primary">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary shadow-float">
              <ArrowRight className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="text-[14px] font-bold">Know More</span>
          </button>
        </div>

        <div className="relative z-20 mt-2 flex justify-center gap-1.5">
          {dots.map((d) => (
            <span
              key={d}
              className={
                d === 0
                  ? "h-1.5 w-1.5 rounded-full bg-foreground"
                  : "h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
