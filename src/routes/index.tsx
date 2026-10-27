import { createFileRoute } from "@tanstack/react-router";
import { StatusBar, AppHeader } from "@/components/dashboard/app-header";
import { LaunchBanner } from "@/components/dashboard/launch-banner";
import { OverviewSection } from "@/components/dashboard/overview-section";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { PerformanceCard } from "@/components/dashboard/performance-card";
import { BottomNav } from "@/components/dashboard/bottom-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CBO ERP | 9050 — Field Dashboard" },
      {
        name: "description",
        content:
          "Daily calls, doctor and chemist visits, quick actions and target performance for the CBO ERP pharma field team.",
      },
      { property: "og:title", content: "CBO ERP | 9050 — Field Dashboard" },
      {
        property: "og:description",
        content:
          "Daily calls, doctor and chemist visits, quick actions and target performance for the CBO ERP pharma field team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-background shadow-card">
      <StatusBar />
      <AppHeader />
      <LaunchBanner />
      <OverviewSection />
      <QuickActions />
      <PerformanceCard />
      <BottomNav />
    </div>
  );
}
