import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock3, HeartHandshake, UserRound } from "lucide-react";
import { useState } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPosts, type PostSummary } from "@/sanity/queries";
import quranClass from "@/assets/darul-ilm-stock-photo-5.jpg";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  loader: () => getPosts(),
  head: () =>
    seoHead({
      title: "Blog | Darul-ilm Kent",
      description:
        "News, reflections and updates from Darul-ilm Kent, serving the Medway community.",
      path: "/blog",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = Route.useLoaderData();
  const [search, setSearch] = useState("");
  const [audience, setAudience] = useState<AudienceFilter>("all");
  const searchTerm = search.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !searchTerm ||
      [post.title, post.excerpt, post.author].some((value) =>
        value?.toLowerCase().includes(searchTerm),
      );
    const matchesAudience = audience === "all" || post.audience?.includes(audience);

    return matchesSearch && matchesAudience;
  });

  return (
    <div className="min-h-screen blog-route">
      <SiteHeader />
      {/* <PageBanner
        eyebrow="From Darul-ilm Kent"
        title="Our Blog"
        subtitle="News, reflections and updates from our schools and the wider Medway community."
      /> */}
      {/* Contact hero */}
      <section className="relative isolate h-[400px] overflow-hidden sm:h-[450px] md:h-[480px]">
        {/* Background image */}
        <img
          src={quranClass}
          alt="Children learning at Darul-ilm Kent"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Subtle overall darkening */}
        <div className="absolute inset-0 -z-20 bg-black/10" />

        {/* Left-side gradient for typography */}
        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-r
            from-black/75
            via-black/40
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 -z-10 h-1/2
            bg-gradient-to-t
            from-black/55
            to-transparent
          "
        />

        {/* Hero content */}
        <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-10 sm:px-8 sm:pb-12 md:px-12 md:pb-14 lg:px-16">
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
              Community
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
              Blogs
            </h1>

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
              News, reflections and updates from Darul-ilm Kent.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="mb-10 flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-center sm:justify-between">
          <label className="sr-only" htmlFor="blog-search">
            Search blog posts
          </label>
          <input
            id="blog-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search blog posts..."
            className="h-12 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring sm:max-w-sm"
          />
          <div className="flex flex-wrap gap-2" aria-label="Filter posts by audience">
            {(
              [
                ["all", "All posts"],
                ["students", "Students"],
                ["parents", "Parents"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={audience === value}
                onClick={() => setAudience(value)}
                className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                  audience === value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-navy hover:bg-secondary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {posts.length === 0 ? (
          <div className="panel-card px-6 py-12 text-center">
            <h2 className="font-display text-2xl uppercase text-primary">No posts yet</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              New articles and updates will appear here once they are published in the Darul-ilm
              Studio.
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="panel-card px-6 py-12 text-center">
            <h2 className="font-display text-2xl uppercase text-primary">No matching posts</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Try another search term or choose a different audience.
            </p>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-8">
              {filteredPosts[0] && <FeaturedPost post={filteredPosts[0]} />}

              {filteredPosts.length > 1 && (
                <div className="grid gap-8 md:grid-cols-2">
                  {filteredPosts.slice(1, 3).map((post) => (
                    <BlogCard key={post._id} post={post} />
                  ))}
                </div>
              )}

              {filteredPosts.length > 3 && (
                <div className="grid gap-8 md:grid-cols-2">
                  {filteredPosts.slice(3).map((post) => (
                    <BlogCard key={post._id} post={post} />
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <section className="panel-card p-6">
                <h2 className="rule-accent font-display text-xl font-bold text-primary">
                  Latest posts
                </h2>
                <div className="divide-y divide-border">
                  {filteredPosts.slice(0, 3).map((post) => (
                    <Link
                      key={post._id}
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="block py-4 text-sm font-semibold leading-snug text-navy transition-colors hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </section>

              <section className="panel-card rounded-xl p-6 text-navy shadow-[0_20px_50px_-28px_oklch(0.26_0.06_250_/_0.5)]">
                <HeartHandshake className="h-6 w-6" />
                <h2 className="mt-4 border-b border-navy/20 pb-3 font-display text-xl font-bold">
                  Support the madrasa
                </h2>
                <p className="mt-4 text-sm leading-6">
                  Help us continue providing high-quality Islamic education for children and the
                  wider Medway community.
                </p>
                <a
                  href="https://www.zeffy.com/en-GB/ticketing/darul-ilm-kent-2026-pillars"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
                >
                  Donate via Zeffy
                </a>
              </section>
            </aside>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function FeaturedPost({ post }: { post: PostSummary }) {
  return (
    <article className="panel-card overflow-hidden border-primary/30">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <PostImage post={post} className="aspect-[16/9]" />
        <div className="p-6 md:p-8">
          <PostMeta post={post} />
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
              {post.excerpt}
            </p>
          )}
          <PostFooter post={post} featured />
        </div>
      </Link>
    </article>
  );
}

function BlogCard({ post }: { post: PostSummary }) {
  return (
    <article className="panel-card overflow-hidden">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <PostImage post={post} className="aspect-[16/10]" />
        <div className="flex min-h-52 flex-col p-6">
          <PostMeta post={post} />
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-primary">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {post.excerpt}
            </p>
          )}
          <PostFooter post={post} />
        </div>
      </Link>
    </article>
  );
}

function PostImage({ post, className }: { post: PostSummary; className: string }) {
  return post.imageUrl ? (
    <img
      src={post.imageUrl}
      alt={post.title}
      className={`w-full object-cover ${className}`}
      loading="lazy"
    />
  ) : (
    <div className={`flex items-center justify-center bg-secondary px-6 text-center ${className}`}>
      <span className="font-display text-2xl uppercase text-primary">Darul-ilm Kent</span>
    </div>
  );
}

function PostMeta({ post }: { post: PostSummary }) {
  return (
    <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
      <span className="inline-flex items-center gap-2">
        <CalendarDays className="h-3.5 w-3.5 text-accent" />
        {formatDate(post.publishedAt)}
      </span>
      <span className="inline-flex items-center gap-2">
        <Clock3 className="h-3.5 w-3.5 text-accent" />
        {post.readTime || 5} min read
      </span>
    </div>
  );
}

function PostFooter({ post, featured = false }: { post: PostSummary; featured?: boolean }) {
  return (
    <div
      className={`mt-6 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-primary ${
        featured ? "md:mt-8" : ""
      }`}
    >
      <span className="inline-flex items-center gap-2">
        <UserRound className="h-4 w-4 text-accent" />
        {post.author || "Darul-ilm Kent"}
      </span>
      <span className="inline-flex items-center gap-2">
        Read article <ArrowRight className="h-4 w-4 text-accent" />
      </span>
    </div>
  );
}

type AudienceFilter = "all" | "students" | "parents";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}
