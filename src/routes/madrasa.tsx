import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/page-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/madrasa")({
  head: () =>
    seoHead({
      title: "Madrasa | Darul-ilm Community",
      description: "Children's Qur'an and Islamic studies classes across Chatham and Gillingham.",
      path: "/madrasa",
    }),
  component: Madrasa,
});

function Madrasa() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Learning and formation"
        title="Madrasa"
        subtitle="A strong foundation in Qur'an, Islamic studies and character for children across Medway."
      />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="panel-card p-7">
            <p className="eyebrow">Chatham</p>
            <h2 className="heading-lg mt-4 text-primary">Chatham School</h2>
            <p className="mt-4 text-muted-foreground">
              Weekday and weekend classes at Chatham Hill Masjid for ages 5-16.
            </p>
          </article>
          <article className="panel-card p-7">
            <p className="eyebrow">Gillingham</p>
            <h2 className="heading-lg mt-4 text-primary">Gillingham School</h2>
            <p className="mt-4 text-muted-foreground">
              Weekend Qur'an and Islamic studies classes at KMWA Mosque.
            </p>
          </article>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-3 pt-6 mt-8">
          <a
            href="https://school.darulilmkent.org"
            className="btn-pill"
            target="_blank"
            rel="noreferrer"
          >
            Visit the Darul Ilm website
          </a>
        </div>
        <section className="mt-16 max-w-3xl">
          <h2 className="heading-lg rule-accent text-primary">What children learn</h2>
          <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
            {[
              "Qur'an recitation and memorisation",
              "Aqidah, Fiqh, Sirah and Islamic history",
              "Du'as, Akhlaaq and Adab",
              "Confidence, discipline and service",
            ].map((item) => (
              <li key={item} className="border-l-2 border-accent pl-4">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
