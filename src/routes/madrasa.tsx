import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/page-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/madrasa")({
  head: () =>
    seoHead({
      title: "Education | Darul-ilm Community",
      description:
        "Qur'an and Islamic studies for children, with adult class information coming soon.",
      path: "/madrasa",
    }),
  component: Madrasa,
});

function Madrasa() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Learning is where Darul-ilm started"
        title="Education"
        subtitle="Qur'an and the essentials of the Dīn, taught with care and a focus on character."
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          Learning is where Darul-ilm started, and it remains at the heart of everything we do. We
          teach the Qur&apos;an and the essentials of the Dīn, helping learners grow in knowledge
          and recite the Book of Allah beautifully and correctly.
        </p>
        <section className="mt-10 max-w-3xl border-y border-border py-7">
          <p className="eyebrow">Children&apos;s madrasa · ages 5 to 16</p>
          <h2 className="heading-lg mt-3 text-primary">Qur&apos;an and Islamic studies</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Weekday evening and weekend classes. Full details and enrolment are handled by the
            children&apos;s madrasa website.
          </p>
          <a
            href="https://school.darulilmkent.org"
            className="btn-pill mt-5 inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Visit the madrasa website
          </a>
        </section>
        <p className="max-w-3xl leading-7 text-muted-foreground">
          Adult Islamic studies and Tajweed classes for adults and new Muslims are being confirmed.
          We will share details when their days, times and topics are set.
        </p>
        <a href="/contact" className="btn-pill-ghost mt-5 inline-flex">
          Ask about classes
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
