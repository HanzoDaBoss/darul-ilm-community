import { createFileRoute } from "@tanstack/react-router";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/donate")({
  head: () =>
    seoHead({
      title: "Donate | Darul-ilm Community",
      description: "Support local welfare, spirituality, outreach, da'wah and media in Medway.",
      path: "/donate",
    }),
  component: Donate,
});

const uses = [
  ["Welfare", "Monthly food parcels for Muslim families struggling with household bills."],
  [
    "Outreach",
    "Food and supplies for the weekly soup kitchen, plus equipment for litter picks and travel for elderly visits.",
  ],
  ["Spirituality", "Halaqa resources and programmes that keep hearts connected to Allah."],
  ["Da'wah", "Leaflets for our neighbours and refreshments for visitors to the masjid."],
  ["Media", "Equipment and editing that help our content reach more people."],
];

function Donate() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Your ṣadaqah stays in Medway"
        title="Become a Pillar of the Community"
        subtitle="Your giving helps neighbours turn care into practical service."
      />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          Not every one of us can sit with a struggling family, pack food parcels or guide a couple
          through a difficult time, but every one of us can make it possible. When you give to
          Darul-ilm Community, you help put food on the table for Muslim families facing financial
          hardship, support marriages and families through their hardest seasons, launch our weekly
          soup kitchen, and share the beauty of Islam with our neighbours. It all begins with hearts
          connected to Allah and grows into service for everyone around us. Your ṣadaqah stays right
          here in Medway, reaching people you may pass in the street.
        </p>
        <section className="mt-12">
          <h2 className="heading-lg rule-accent text-primary">Where your money goes</h2>
          <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {uses.map(([title, body]) => (
              <article key={title} className="border-t border-border py-5">
                <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="heading-lg text-primary">Give your zakat with confidence</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
            Zakat is kept in a separate fund and given only to eligible Muslim families who are
            struggling here in Medway. For zakat enquiries, please contact us separately from
            general donations.
          </p>
        </section>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact#contact-form" className="btn-pill">
            Ask about giving
          </a>
          <a href="/zakat" className="btn-pill-ghost">
            Medway Zakat Fund
          </a>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">
          Contact us for current giving details. Donation amounts and payment information are not
          listed here until they have been confirmed.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
