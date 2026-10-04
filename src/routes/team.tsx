import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import bannerImage from "@/assets/class-photo.jpg";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () =>
    seoHead({
      title: "Our Team | Darul-ilm Community",
      description: "Learn who leads Darul-ilm Community and how volunteers help serve Medway.",
      path: "/team",
    }),
  component: Team,
});

function Team() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* Team hero */}
      <section className="relative isolate h-[420px] overflow-hidden sm:h-[480px] md:h-[500px]">
        {/* Background image */}
        <img
          src={bannerImage}
          alt="Darul-ilm Kent teachers and students"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Very subtle overall darkening */}
        <div className="absolute inset-0 -z-20 bg-black/10" />

        {/* Darker left side for typography */}
        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-r
            from-black/75
            via-black/40
            to-transparent
          "
        />

        {/* Subtle bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 -z-10 h-1/2
            bg-gradient-to-t
            from-black/55
            to-transparent
          "
        />

        {/* Hero text */}
        <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-12 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16">
          <div className="max-w-3xl">
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-primary
                sm:text-base
              "
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Community leadership
            </p>

            <h1
              className="
                font-display
                text-5xl
                font-bold
                uppercase
                leading-[0.9]
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
              "
              style={{
                textShadow: "0 4px 10px rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.55)",
              }}
            >
              Our Team
            </h1>

            {/* Accent line */}
            <div
              className="my-5 h-1 w-14 rounded-full bg-primary"
              style={{
                boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            />

            <p
              className="
                max-w-2xl
                text-base
                leading-7
                text-white
                sm:text-lg
                sm:leading-8
              "
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 5px 18px rgba(0,0,0,0.45)",
              }}
            >
              Darul-ilm was founded by Mufti Didar Hasan, who serves as Chair. Our work is carried
              by a growing team of volunteers, brothers and sisters, each looking after an area they
              care about.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">Who leads us</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          Darul-ilm was founded by Mufti Didar Hasan, who serves as Chair. Our work is carried by a
          growing team of volunteers, brothers and sisters, each looking after an area they care
          about.
        </p>
        <a href="/get-involved#volunteer" className="btn-pill mt-7 inline-flex">
          Join the volunteer team
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
