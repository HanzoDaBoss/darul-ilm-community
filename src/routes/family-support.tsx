import { createFileRoute } from "@tanstack/react-router";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/family-support")({
  head: () =>
    seoHead({
      title: "Family and Marriage Support | Darul-ilm Community",
      description:
        "Marriage guidance and support through divorce, rooted in the Qur'an and Sunnah.",
      path: "/family-support",
    }),
  component: FamilySupport,
});

const futureServices = [
  [
    "Marriage introductions",
    "A respectful, Islamic way for single Muslims and their families to meet suitable spouses.",
  ],
  [
    "Premarital education",
    "Courses for couples before nikāḥ on rights, responsibilities, communication and building a home on taqwā.",
  ],
  ["Family mediation", "Helping family members resolve disagreements fairly and with mercy."],
  [
    "Parenting programmes",
    "Workshops on raising children with love, faith and confidence in today's world.",
  ],
  [
    "Strengthening Islamic homes",
    "Programmes that help families bring worship, good manners and warmth into everyday home life.",
  ],
];

function FamilySupport() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Guidance rooted in the Qur'an and Sunnah"
        title="Family and Marriage Support"
        subtitle="Strong families are the foundation of a strong community. We support Muslims through married and family life, including the difficult seasons."
      />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <blockquote className="mx-auto mb-10 max-w-3xl border-l-2 border-accent pl-5 text-lg text-primary">
          <p lang="ar" dir="rtl" className="text-right text-2xl leading-loose">
            وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
          </p>
          <p className="mt-2 italic">“And He placed between you affection and mercy.”</p>
          <cite className="mt-2 block text-sm not-italic text-muted-foreground">
            Sūrat al-Rūm 30:21
          </cite>
        </blockquote>
        <div className="grid gap-5 sm:grid-cols-2">
          <article className="panel-card p-6">
            <p className="eyebrow">Available now</p>
            <h2 className="mt-3 font-display text-xl uppercase text-primary">Marriage guidance</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Confidential support for couples facing difficulties, helping them understand each
              other, resolve problems and find their way back to affection and mercy.
            </p>
          </article>
          <article className="panel-card p-6">
            <p className="eyebrow">Available now</p>
            <h2 className="mt-3 font-display text-xl uppercase text-primary">
              Support through divorce
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Guidance and care for individuals and families going through separation, so it is
              handled with fairness, dignity and the guidance of the Sharīʿah.
            </p>
          </article>
        </div>
        <section className="mt-12">
          <p className="eyebrow">Coming soon</p>
          <h2 className="heading-lg mt-3 text-primary">More support for families</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {futureServices.map(([title, body]) => (
              <article key={title} className="border-t border-border pt-4">
                <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>
        <p className="mx-auto mt-10 max-w-3xl text-sm leading-6 text-muted-foreground">
          To protect your privacy, please use the form to request a conversation only. Do not
          include personal or sensitive details in your initial message.
        </p>
        <a href="/contact#contact-form" className="btn-pill mt-5 inline-flex">
          Request a confidential conversation
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
