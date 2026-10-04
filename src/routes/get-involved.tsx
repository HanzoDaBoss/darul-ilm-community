import { createFileRoute } from "@tanstack/react-router";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VolunteerSignupForm } from "@/components/volunteer-signup-form";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/get-involved")({
  head: () =>
    seoHead({
      title: "Get Involved | Darul-ilm Community",
      description:
        "Volunteer with Darul-ilm Community. Find a programme and tell us how you would like to help serve Medway.",
      path: "/get-involved",
    }),
  component: GetInvolved,
});

function GetInvolved() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Your time is a form of ṣadaqah"
        title="Get involved"
        subtitle="Darul-ilm Community runs on people who give their time. You do not need special skills, just a willingness to help. Tell us a little about yourself and we will find the right place for you."
      />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <section className="mx-auto mb-10 max-w-3xl">
          <h2 className="heading-lg rule-accent text-primary">Join a programme</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Most of our programmes are free and open to drop in. For retreats and courses, book
            through the{" "}
            <a className="text-primary underline" href="/events">
              Events page
            </a>
            . Children&apos;s madrasa applications are handled at{" "}
            <a
              className="text-primary underline"
              href="https://school.darulilmkent.org"
              target="_blank"
              rel="noreferrer"
            >
              school.darulilmkent.org
            </a>
            .
          </p>
        </section>

        <section id="volunteer" className="scroll-mt-24">
          <VolunteerSignupForm />
        </section>

        <section className="mx-auto mt-12 max-w-3xl border-t border-border pt-8">
          <h2 className="heading-lg text-primary">Building our teams</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            We are building teams in family and marriage support, youth and children, sisters&apos;
            development and support for new Muslims. If you have the skills or simply the heart to
            help, we would love to hear from you.
          </p>
          <a
            href="#volunteer-form"
            className="mt-4 inline-flex font-semibold text-primary hover:underline"
          >
            Join a team
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
