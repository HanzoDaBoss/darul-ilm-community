import { createFileRoute } from "@tanstack/react-router";
import { Youtube } from "lucide-react";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/media")({
  head: () =>
    seoHead({
      title: "Media | Darul-ilm Community",
      description: "Reminders, talks and stories from Darul-ilm Community in Medway.",
      path: "/media",
    }),
  component: Media,
});

const mediaWork = [
  [
    "Protecting our īmān",
    "Reminders, talks and stories that keep Muslims, young and old, connected to Allah and confident in their faith.",
  ],
  [
    "Defending our faith",
    "Clear, calm answers to common questions and misconceptions about Islam.",
  ],
  [
    "Sharing the message",
    "Warm, accessible content that helps non-Muslims understand Islam and the people who practise it.",
  ],
  [
    "Sharing our work",
    "Photos and short videos of our programmes and projects, so people know what is on and how to join.",
  ],
];

function Media() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Faith and media"
        title="Media"
        subtitle="Today, much of what people learn about Islam comes from a screen. Our media department creates content for Muslims and non-Muslims alike."
      />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <p className="eyebrow">Live now · YouTube content is being published</p>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
          We produce content to protect our īmān, defend our faith and share the message of Islam
          with the world.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {mediaWork.map(([title, body]) => (
            <article key={title} className="panel-card p-6">
              <h2 className="font-display text-xl uppercase text-primary">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://www.youtube.com/@darul-ilmchatham4240"
            target="_blank"
            rel="noreferrer"
            className="btn-pill inline-flex items-center gap-2"
          >
            <Youtube className="h-5 w-5" aria-hidden="true" />
            Watch on YouTube
          </a>
          <a href="/get-involved#volunteer" className="btn-pill-ghost inline-flex items-center">
            Join the media team
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
