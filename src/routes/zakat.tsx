import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/page-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/zakat")({
  head: () =>
    seoHead({
      title: "Medway Zakat Fund | Darul-ilm Community",
      description:
        "Give zakat locally and support eligible Muslim families in Medway with dignity and care.",
      path: "/zakat",
    }),
  component: Zakat,
});

function Zakat() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Local support, handled with care"
        title="Medway Zakat Fund"
        subtitle="Our aim is to become the trusted local place to give zakat and support eligible families here in Medway."
      />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <blockquote className="mx-auto mb-10 max-w-3xl border-l-2 border-accent pl-5 text-lg text-primary">
          <p lang="ar" dir="rtl" className="text-right text-2xl leading-loose">
            خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا
          </p>
          <p className="mt-2 italic">
            “Take from their wealth a charity by which you purify them and cause them to grow.”
          </p>
          <cite className="mt-2 block text-sm not-italic text-muted-foreground">
            Sūrat al-Tawbah 9:103
          </cite>
        </blockquote>
        <section className="mx-auto max-w-3xl">
          <h2 className="heading-lg rule-accent text-primary">A local amanah</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Many Muslim families nearby are quietly struggling. Your zakat can be the difference for
            them this month.
          </p>
        </section>
        <section className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            [
              "Collecting zakat",
              "Your zakat is kept in a separate fund and never mixed with general donations.",
            ],
            [
              "Supporting local families",
              "We pass zakat on to eligible Muslim individuals and families in Medway facing financial hardship.",
            ],
            [
              "Dignity and discretion",
              "Every application is handled in confidence. No family is named, and help is given with care and respect.",
            ],
          ].map(([title, body]) => (
            <article key={title} className="panel-card p-6">
              <h2 className="font-display text-xl uppercase text-primary">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </section>
        <p className="mx-auto mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">
          Please contact us to request the support process or current giving details. Do not include
          personal or sensitive information in your first message.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="btn-pill" href="/contact">
            Apply for support, in confidence
          </a>
          <a className="btn-pill-ghost" href="/contact">
            Give your zakat
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
