import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/page-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/food-bank")({
  head: () =>
    seoHead({
      title: "CHM Food Bank | Darul-ilm Community",
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
        title="CHM Food Bank"
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
              make ends meet. Every month, the Chatham Hill Masjid Food Bank provides food parcels
              to families going through financial difficulty, easing the pressure so no household
              faces a hard month alone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-pill" href="/contact">
                Get support, in confidence
              </a>
              <a className="btn-pill-ghost" href="/get-involved#volunteer">
                Donate food or funds
              </a>
            </div>
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
      </main>
      <SiteFooter />
    </div>
  );
}
