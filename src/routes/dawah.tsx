import { createFileRoute } from "@tanstack/react-router";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/dawah")({
  head: () =>
    seoHead({
      title: "Da'wah | Darul-ilm Community",
      description: "Sharing Islam with warmth, wisdom and good character across Medway.",
      path: "/dawah",
    }),
  component: Dawah,
});

function Dawah() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Knowledge, welcome and good character"
        title="Da'wah"
        subtitle="Da'wah begins with being a good neighbour. We want the people around our masjid to know us, trust us and feel welcome to ask us anything."
      />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            We aim to be a bridge between the Muslim community and the wider community of Medway,
            showing the beauty of Islam through information, knowledge and the way we live.
          </p>
          <p>
            Every one of us is an ambassador of Islam. Before anyone reads a leaflet or hears a
            talk, they meet a Muslim. Our honesty, kindness, patience and good manners show what
            Islam is about far more powerfully than words alone.
          </p>
        </div>

        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            [
              "Neighbourhood leaflets",
              "Friendly leaflets for homes around our masjid are coming soon, sharing what Islam is about and inviting neighbours to visit.",
              true,
            ],
            [
              "Sharing Islam with our neighbours",
              "Getting to know local people, groups, schools and faith communities, and sharing the message of Islam with warmth and wisdom.",
            ],
            [
              "Knowledge and information",
              "Clear, friendly answers to questions about Islam in person, in print and online.",
            ],
            [
              "Welcoming visitors",
              "Anyone curious about Islam is welcome to ask questions, visit the masjid and share a cup of tea. Get in touch to arrange a visit.",
            ],
          ].map(([title, body, upcoming]) => (
            <article key={title} className="panel-card p-6">
              {upcoming && <p className="eyebrow">Coming soon</p>}
              <h2 className="font-display text-xl uppercase text-primary">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </section>

        <blockquote className="mx-auto mt-12 max-w-3xl border-l-2 border-accent pl-5 text-lg text-primary">
          <p lang="ar" dir="rtl" className="text-right text-2xl leading-loose">
            ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ
          </p>
          <p className="mt-2 italic">
            “Invite to the way of your Lord with wisdom and good counsel.”
          </p>
          <cite className="mt-2 block text-sm not-italic text-muted-foreground">
            Sūrat al-Naḥl 16:125
          </cite>
        </blockquote>
        <a href="/contact" className="btn-pill mt-10 inline-flex">
          Arrange a visit
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
