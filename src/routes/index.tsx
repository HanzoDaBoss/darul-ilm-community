import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import quranClass from "@/assets/halaqa-food.jpeg";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Darul-ilm Community | Medway",
      description:
        "Learned in the classroom. Lived in the community. Serving Medway through faith, welfare and outreach.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="flex min-h-[calc(100svh-4.5rem)] flex-col sm:min-h-[calc(100svh-5rem)]">
        <section className="relative isolate flex flex-1 overflow-hidden">
          <div className="relative flex w-full flex-1">
            <img
              src={quranClass}
              alt="Students engaged in a Darul-ilm Kent classroom"
              className="absolute inset-0 -z-30 h-full w-full object-cover object-[25%_5%]"
            />

            <div className="absolute inset-0 -z-20 bg-black/5" />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="mx-auto flex w-full max-w-7xl items-end px-6 pb-12 pt-16 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
              <div className="max-w-3xl welcome-up">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary sm:text-base"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                >
                  Darul-ilm Community
                </p>

                <h1 className="font-display text-5xl font-bold uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  Learned in the classroom.
                  <br />
                  Lived in the community.
                </h1>

                <div className="my-5 h-1 w-14 rounded-full bg-primary" />

                <h2
                  className="max-w-2xl font-display text-md font-semibold leading-7 text-white sm:text-xl md:text-xl lg:text-2xl lg:leading-9"
                  style={{ textShadow: "0 3px 8px rgba(0,0,0,0.9)" }}
                >
                  Darul-ilm began as a classroom. Today it is becoming a community, of students,
                  parents and neighbours working together to serve Medway. There is a place for you
                  in it.
                </h2>

                {/* <p
                  className="mt-4 max-w-xl text-sm leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-8"
                  style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95)" }}
                >
                  Faith, welfare, outreach and service for our whole community, Muslim and
                  non-Muslim.
                </p> */}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/get-involved#volunteer"
                    className="btn-pill inline-flex min-h-[50px] items-center justify-center gap-2 px-7 text-base"
                  >
                    Get Involved
                  </a>

                  <a
                    href="/events"
                    className="btn-pill-ghost inline-flex min-h-[50px] items-center justify-center gap-2 bg-background px-7 text-base"
                  >
                    What&apos;s On
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band-navy">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-5 text-center text-sm text-navy-foreground/85">
            <span className="font-semibold text-accent">Serving Medway since 2017</span>
            <span className="hidden text-navy-foreground/30 sm:inline">|</span>
            <span>Based at Chatham Hill Masjid</span>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-6 pt-16 welcome-up">
        <h2 className="heading-lg rule-accent text-navy">More than a madrasa</h2>
        <div className="mt-4 max-w-6xl space-y-4 text-lg leading-8 text-muted-foreground">
          <p>
            Since 2017, Darul-ilm has been teaching the children of Medway to know their Dīn, love
            Allah and His Messenger ﷺ, and live by taqwā. Living by taqwā never stays inside a
            classroom. It shows up in how we treat our neighbours, how we look after the lonely and
            the hungry, and how we carry ourselves in the wider community.
          </p>
          <p>
            Darul-ilm Community is where that happens. It brings together our spirituality
            programmes, outreach projects, da&apos;wah work and media under one roof, with one aim:
            the wellbeing of our whole community, Muslim and non-Muslim.
          </p>
          <blockquote className="border-l-2 border-accent pl-5 text-primary">
            <p lang="ar" dir="rtl" className="text-left text-2xl leading-loose">
              خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ
            </p>
            <p className="mt-2 italic">“The best of people are those most beneficial to people.”</p>
            <cite className="mt-2 block text-sm not-italic text-muted-foreground">
              Al-Ṭabarānī, al-Muʿjam al-Awsaṭ; graded ḥasan by al-Albānī, Ṣaḥīḥ al-Jāmiʿ no. 3289
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">How we serve Medway</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Spirituality",
              body: "The starting point of our community. When our hearts are connected to Allah, everything else follows: good character, service and da'wah.",
              to: "/halaqas" as const,
              cta: "JOIN US",
            },
            {
              title: "Education",
              body: "Children's Qur'an and Islamic studies, with adult class and Tajweed details being confirmed.",
              to: "/madrasa" as const,
              cta: "EXPLORE EDUCATION",
            },
            {
              title: "Medway Zakat Fund",
              body: "Becoming the zakat hub for Medway: collecting your zakat and passing it on to eligible local families, with dignity and care.",
              to: "/zakat" as const,
              cta: "FIND OUT MORE",
            },
            {
              title: "CHM Food Bank",
              body: "Monthly food parcels for Muslim families going through financial difficulty, so no household faces a hard month alone.",
              to: "/food-bank" as const,
              cta: "GET SUPPORT",
            },
            {
              title: "Da'wah",
              body: "A bridge between Muslims and the wider community, sharing the beauty of Islam through knowledge, information and good character.",
              to: "/dawah" as const,
              cta: "DISCOVER ISLAM",
            },
            {
              title: "Media",
              body: "Content for Muslims and non-Muslims that protects our īmān, defends our faith and shares the message of Islam.",
              to: "/media" as const,
              cta: "WATCH OUR CONTENT",
            },
            {
              title: "Family and Marriage Support",
              body: "Confidential marriage guidance and support through divorce, with premarital courses and parenting programmes on the way.",
              to: "/family-support" as const,
              cta: "TALK TO US",
            },
            {
              title: "Youth and Children",
              body: "Youth clubs, mentoring, sport, trips and leadership, so young Muslims feel the masjid truly belongs to them.",
              to: "/youth" as const,
              cta: "FIND OUT MORE",
              upcoming: true,
            },
          ].map((card) => (
            <article key={card.title} className="panel-card flex flex-col p-6">
              {card.upcoming && <span className="eyebrow">Coming soon</span>}
              <h3 className="mt-2 font-display text-xl uppercase text-primary">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
              <Link
                to={card.to}
                className="mt-auto pt-5 font-display text-base uppercase tracking-wide text-accent hover:underline"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow">Every Wednesday at 7:40pm</p>
            <h2 className="heading-lg mt-3 text-primary">Spirituality Halaqa</h2>
            <p className="mt-2 text-sm text-muted-foreground">Chatham Hill Masjid</p>
          </div>
          <div>
            <p className="leading-7 text-muted-foreground">
              For brothers, sisters and families. Spirituality is the starting point of our
              community: when our hearts are linked to Allah, everything else follows. Everyone is
              welcome.
            </p>
            <a
              href="/events"
              className="mt-4 inline-flex font-semibold text-primary hover:underline"
            >
              See all events
            </a>
          </div>
        </div>
      </section>

      <section className="band-navy">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow text-accent">Every contribution matters</p>
            <h2 className="heading-lg mt-3 text-navy-foreground">Your time is a form of ṣadaqah</h2>
          </div>
          <div>
            <p className="leading-7 text-navy-foreground/85">
              Whether you can give an hour a month or an evening a week, there is a place for you.
              Pack food parcels, help us launch the soup kitchen, deliver leaflets to our
              neighbours, join a litter pick or help with media.
            </p>
            <a href="/get-involved#volunteer" className="btn-pill mt-5 inline-flex">
              Become a volunteer
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 text-center">
        <h2 className="heading-lg text-primary">Become a Pillar of the Community</h2>
        <p className="mx-auto mt-4 max-w-4xl text-muted-foreground text-justify">
          Not every one of us can sit with a struggling family, pack food parcels or guide a couple
          through a difficult time, but every one of us can make it possible. When you give to
          Darul-ilm Community, you help put food on the table for Muslim families going through
          financial hardship, support marriages and families through their hardest seasons, launch
          our weekly soup kitchen, and share the beauty of Islam with our neighbours. It all begins
          with hearts connected to Allah and grows into service for everyone around us. Your ṣadaqah
          stays right here in Medway, reaching people you may pass in the street.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/donate" className="btn-pill">
            Donate now
          </a>
          <a href="/zakat" className="btn-pill-ghost">
            Give Zakat
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
