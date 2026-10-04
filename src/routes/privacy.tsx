import { createFileRoute } from "@tanstack/react-router";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seoHead({
      title: "Privacy Notice | Darul-ilm Community",
      description: "How Darul-ilm Community handles information submitted through this website.",
      path: "/privacy",
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="Your information"
        title="Privacy Notice"
        subtitle="How information submitted through the Darul-ilm Community website is handled."
      />
      <main className="mx-auto max-w-4xl space-y-10 px-6 py-14 text-muted-foreground">
        <section>
          <h2 className="heading-lg text-primary">Information you send us</h2>
          <p className="mt-3 leading-7">
            Contact and volunteer forms ask for the details needed to reply or follow up about
            volunteering. Volunteer information may include your phone number, areas of interest,
            availability and skills. Please do not include sensitive personal details in an initial
            enquiry.
          </p>
        </section>
        <section>
          <h2 className="heading-lg text-primary">How we use it</h2>
          <p className="mt-3 leading-7">
            We use submitted information to respond to your enquiry, discuss volunteer opportunities
            or connect you with a relevant team. Form submissions are delivered to
            Info@darulilmchatham.com through an email delivery provider and may be retained in the
            organisation&apos;s email records while they are needed to handle the enquiry and
            related follow-up.
          </p>
        </section>
        <section>
          <h2 className="heading-lg text-primary">Your choices</h2>
          <p className="mt-3 leading-7">
            You can ask to access, correct or remove information you have sent, or withdraw your
            agreement to be contacted about volunteering, by emailing{" "}
            <a className="text-primary underline" href="mailto:Info@darulilmchatham.com">
              Info@darulilmchatham.com
            </a>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
