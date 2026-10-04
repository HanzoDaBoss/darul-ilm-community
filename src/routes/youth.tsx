import { createFileRoute } from "@tanstack/react-router";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/youth")({
  head: () =>
    seoHead({
      title: "Youth and Children | Darul-ilm Community",
      description: "Youth programmes are being developed for young Muslims across Medway.",
      path: "/youth",
    }),
  component: Youth,
});

const plannedProgrammes = [
  ["Youth clubs", "A safe, welcoming space to meet, have fun and belong."],
  ["Teenage halaqas", "Honest conversations about faith and the real questions young people face."],
  ["Mentoring", "Trusted role models guiding young people through the pressures of growing up."],
  [
    "Sport and trips",
    "Football, outdoor activities and trips that keep young people active and connected.",
  ],
  [
    "Leadership development",
    "Building the skills and confidence to lead, at the masjid and beyond.",
  ],
  [
    "Careers support",
    "Advice, workshops and links with Muslim professionals to help young people plan their future.",
  ],
  ["Someone to talk to", "A listening ear, with referral to professional help where needed."],
  [
    "24-hour youth retreats",
    "A full day and night away to grow in faith, friendship and character.",
  ],
];

function Youth() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Coming soon"
        title="Youth and Children"
        subtitle="Our young people are not just the future of this community, they are part of it now."
      />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
          Beyond the madrasa classroom, we want to create a place where young Muslims grow in faith,
          build friendships, find good role models and feel that the masjid truly belongs to them.
        </p>
        <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
          {plannedProgrammes.map(([title, body]) => (
            <article key={title} className="border-t border-border py-5">
              <h2 className="font-display text-lg font-semibold text-primary">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
          Programmes are in development. Register your interest and we will share updates when
          activities are ready.
        </p>
        <a href="/get-involved#volunteer" className="btn-pill mt-5 inline-flex">
          Register your interest
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
