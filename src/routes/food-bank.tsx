import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/page-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/food-bank")({
  head: () =>
    seoHead({
      title: "Food Bank | Darul-ilm Community",
      description:
        "Monthly food parcels for Muslim families facing financial difficulty in Medway.",
      path: "/food-bank",
    }),
  component: FoodBank,
});

function FoodBank() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Monthly food parcels"
        title="Food Bank"
        subtitle="No household should face a hard month alone."
      />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <blockquote className="mx-auto mb-10 max-w-3xl border-l-2 border-accent pl-5 text-lg text-primary">
          <p lang="ar" dir="rtl" className="text-right text-2xl leading-loose">
            وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا
          </p>
          <p className="mt-2 italic">
            “And they give food, despite their love for it, to the poor, the orphan and the
            captive.”
          </p>
          <cite className="mt-2 block text-sm not-italic text-muted-foreground">
            Sūrat al-Insān 76:8
          </cite>
        </blockquote>
        <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <h2 className="heading-lg rule-accent text-primary">A local point of support</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              With household bills rising, many Muslim families in Medway are finding it hard to
              make ends meet. Every month, our Food Bank provides food parcels to families going
              through financial difficulty, easing the pressure so no household faces a hard month
              alone.
            </p>
          </div>
          <aside className="panel-card bg-secondary/40 p-6">
            <p className="eyebrow">Get in touch</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              A friendly face and a confidential conversation, so families know they are not on
              their own. Contact us to ask about collection arrangements and current needs.
            </p>
            <a
              className="mt-5 inline-block font-semibold text-primary hover:underline"
              href="tel:07534979369"
            >
              Ask about food bank support
            </a>
          </aside>
        </section>
        <section className="mt-14" aria-labelledby="food-bank-options">
          <h2 id="food-bank-options" className="heading-lg rule-accent text-primary">
            Get support or give support
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose the option that best suits you. Both forms open in a new tab.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="panel-card flex flex-col p-6 md:p-8">
              <p className="eyebrow">For families</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary">
                Apply for a food parcel
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                If your household is facing financial difficulty, complete our application form to
                request support from the food bank.
              </p>
              <a
                className="btn-pill mt-6 self-center"
                href="https://forms.gle/GCZTh4unXUp9jwdS9"
                target="_blank"
                rel="noreferrer"
              >
                Open application form
              </a>
            </article>
            <article className="panel-card flex flex-col p-6 md:p-8">
              <p className="eyebrow">Support local families</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary">
                Donate to the food bank
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                Your donation helps provide monthly food parcels for families in Medway. Give
                through our Zeffy donation page.
              </p>
              <a
                className="btn-pill-ghost mt-6 self-center"
                href="https://www.zeffy.com/en-GB/donation-form/donate-to-change-lives-28863"
                target="_blank"
                rel="noreferrer"
              >
                Donate through Zeffy
              </a>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
