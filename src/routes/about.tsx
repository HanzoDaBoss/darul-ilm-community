import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import bannerImage from "@/assets/darul-ilm-stock-photo-4.jpg";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "Who We Are | Darul-ilm Community",
      description:
        "Learn how Darul-ilm grew from a Chatham madrasa into a community serving Medway through faith, welfare and outreach.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* <PageBanner
        title="About Us"
        eyebrow="Our story"
        subtitle="Raising the Next Generation. Nurturing Hearts and Minds."
      /> */}
      {/* Team hero */}
      <section className="relative isolate h-[420px] overflow-hidden sm:h-[480px] md:h-[500px]">
        {/* Background image */}
        <img
          src={bannerImage}
          alt="Darul-ilm Kent teachers and students"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[25%_35%]"
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
              About Darul-ilm Community
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
              Who we are
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
              A place to belong, grow spiritually and give back.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">A place to belong</h2>
        <p className="mt-4 max-w-6xl text-lg leading-8 text-muted-foreground">
          Darul-ilm Community grew out of something simple: a madrasa that kept growing, and
          families who wanted more than lessons. They wanted a place to belong, to grow spiritually
          and to give back.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Our story</h2>
        <div className="mt-4 max-w-6xl space-y-4 leading-7 text-muted-foreground">
          <p>
            Darul-ilm began in 2017 in a family home in Chatham with three students. Within two
            years, eighty children were learning in every room except the kitchen. In 2019 we moved
            to a bigger home and grew to 120 students, with classes in the hallway and kitchen too.
          </p>
          <p>
            In 2022 we moved into Chatham Hill Masjid and grew past 200 students. Today more than
            300 children learn with us each week.
          </p>
          <p>
            Along the way, our work stretched beyond the classroom: adult classes, a weekly
            spirituality halaqa, youth retreats and da&apos;wah training. Darul-ilm Community brings
            this work together and takes it further, into outreach, media and service to everyone.
          </p>
        </div>

        <h2 className="heading-lg rule-accent mt-12 text-primary">What drives us</h2>
        <p className="mt-4 max-w-6xl leading-7 text-muted-foreground">
          Everything we do follows one arc: know, love, live by taqwā. We want people to truly know
          their Dīn, to love Allah and His Messenger ﷺ, and to live in a way that shows it. For us,
          living by taqwā means being useful to people: feeding the hungry, keeping the lonely
          company, keeping our streets clean and being the best of neighbours.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">For everyone</h2>
        <p className="mt-4 max-w-6xl leading-7 text-muted-foreground">
          Our community work is open to all. Our soup kitchen will not ask who you are, our litter
          picks clean streets we all share, and our doors are open to anyone curious about Islam or
          simply wanting to meet their Muslim neighbours.
        </p>

        <h2 id="who-leads-us" className="heading-lg rule-accent mt-12 text-primary">
          Who leads us
        </h2>
        <p className="mt-4 max-w-6xl leading-7 text-muted-foreground">
          Darul-ilm was founded by Mufti Didar Hasan, who serves as Chair. Our work is carried by a
          growing team of volunteers, brothers and sisters, each looking after an area they care
          about.
        </p>

        {/* <img
          src={classroom}
          alt="Madrasah classroom at Darul-ilm Chatham"
          width={1600}
          height={900}
          loading="lazy"
          className="mt-10 w-full rounded-lg object-cover panel-card"
        /> */}
      </section>

      <SiteFooter />
    </div>
  );
}
