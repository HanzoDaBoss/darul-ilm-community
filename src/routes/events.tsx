import { createFileRoute } from "@tanstack/react-router";

import { HomeCalendar } from "@/components/home-calendar";
import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/events")({
  head: () =>
    seoHead({
      title: "What's On | Darul-ilm Community",
      description: "Find the weekly spirituality halaqa and upcoming community events in Medway.",
      path: "/events",
    }),
  component: Events,
});

function Events() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Everyone is welcome"
        title="What's on"
        subtitle="From our weekly halaqa to community projects across Medway, there is always something happening. Everyone is welcome unless stated otherwise."
      />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <section className="mx-auto mb-12 max-w-3xl border-b border-border pb-10">
          <p className="eyebrow">Weekly and regular programmes</p>
          <h2 className="heading-lg mt-3 text-primary">Spirituality Halaqa</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            Every Wednesday at 7:40pm at Chatham Hill Masjid. Brothers, sisters and families are
            welcome to join us for a gathering to reflect, learn and reconnect with Allah.
          </p>
        </section>
        <HomeCalendar />
      </main>
      <SiteFooter />
    </div>
  );
}
