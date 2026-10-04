import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/page-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/halaqas")({
  head: () =>
    seoHead({
      title: "Spirituality | Darul-ilm Community",
      description: "Join the weekly spirituality halaqa at Chatham Hill Masjid.",
      path: "/halaqas",
    }),
  component: Halaqas,
});

function Halaqas() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="The starting point of our community"
        title="Spirituality"
        subtitle="Everything else we do grows from hearts connected to Allah."
      />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <blockquote className="mb-10 border-l-2 border-accent pl-5 text-lg text-primary">
          <p lang="ar" dir="rtl" className="text-right text-2xl leading-loose">
            أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
          </p>
          <p className="mt-2 italic">“Verily, in the remembrance of Allah do hearts find rest.”</p>
          <cite className="mt-2 block text-sm not-italic text-muted-foreground">
            Sūrat al-Raʿd 13:28
          </cite>
        </blockquote>
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Spirituality is the starting point of our community. Everything else we do grows from
            it. When our hearts are truly connected to Allah, the rest of our īmān follows. We
            become people who fulfil His commandments, are good to our neighbours, serve those in
            need and share Islam through our words and character.
          </p>
          <p>
            Our programmes give people space to slow down, reflect and reconnect with Allah,
            together.
          </p>
        </div>
        <section className="mt-12 border-y border-border py-8">
          <p className="eyebrow">Every Wednesday at 7:40pm</p>
          <h2 className="heading-lg mt-3 text-primary">Weekly Spirituality Halaqa</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
            At Chatham Hill Masjid, for brothers, sisters and families. This is the heart of our
            community: a place to build our connection with Allah, which gives rise to everything
            else, from being good neighbours to serving others.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Seasonal programme details will be shared when confirmed.
          </p>
          <a href="/events" className="btn-pill mt-6 inline-flex">
            See all events
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
