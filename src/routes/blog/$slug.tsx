import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, UserRound } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPostBySlug } from "@/sanity/queries";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => getPostBySlug(params.slug),
  head: ({ loaderData, params }) =>
    seoHead({
      title: loaderData?.post?.title
        ? `${loaderData.post.title} | Darul-ilm Kent`
        : "Blog | Darul-ilm Kent",
      description:
        loaderData?.post?.excerpt ||
        "News, reflections and updates from Darul-ilm Kent, serving the Medway community.",
      path: `/blog/${params.slug}`,
    }),
  component: BlogPost,
});

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-justify leading-8 text-muted-foreground">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="mb-5 mt-12 font-display text-4xl font-bold leading-tight text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <div className="mb-5 mt-14 pt-6">
        <div aria-hidden="true" className="mb-5 flex items-center gap-3">
          <span className="h-1 w-12 rounded-full bg-gold" />
          <span className="h-px flex-1 bg-gold/60" />
        </div>
        <h2 className="font-display text-3xl font-bold leading-tight text-primary">{children}</h2>
      </div>
    ),
    h3: ({ children }) => (
      <div className="mb-4 mt-10 pt-5">
        <div aria-hidden="true" className="mb-4 h-px w-full bg-border" />
        <h3 className="font-display text-2xl font-bold leading-tight text-primary">{children}</h3>
      </div>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-8 font-display text-xl font-bold leading-tight text-primary">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="mb-3 mt-7 font-display text-lg font-bold leading-tight text-primary">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="mb-2 mt-6 font-display text-base font-bold leading-tight text-primary">
        {children}
      </h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-accent pl-5 font-display text-xl italic text-primary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");

      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="font-semibold text-primary underline decoration-accent underline-offset-4 hover:text-accent"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-justify text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-justify text-muted-foreground">
        {children}
      </ol>
    ),
  },
};

function BlogPost() {
  const { post, previous, next } = Route.useLoaderData();

  if (!post) {
    return (
      <div className="min-h-screen blog-route">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Blog</p>
          <h1 className="heading-lg mt-4 text-primary">Article not found</h1>
          <p className="mt-4 text-muted-foreground">
            This article may have been unpublished or the link may be incorrect.
          </p>
          <Link to="/blog" className="btn-pill mt-8 inline-flex">
            Back to the blog
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen blog-route">
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-4xl px-6 py-14 md:py-20">
          <Link to="/blog" className="text-sm font-semibold text-primary hover:text-accent">
            ← Back
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <time
                dateTime={post.publishedAt ?? undefined}
                className="inline-flex items-center gap-2 text-accent"
              >
                <CalendarDays className="h-4 w-4" />
                {post.publishedAt ? formatDate(post.publishedAt) : "Unpublished"}
              </time>
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4 text-accent" />
                {post.author || "Darul-ilm Kent"}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-accent" />
                {post.readTime || 5} min read
              </span>
            </div>
            <h1 className="heading-xl mt-4 max-w-3xl text-primary">
              {post.title || "Untitled article"}
            </h1>
            {post.excerpt && (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {post.excerpt}
              </p>
            )}
          </header>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title || "Blog article"}
              className="mt-10 aspect-[16/9] w-full rounded-sm object-cover"
            />
          )}

          <div className="prose-site mx-auto mt-10 max-w-3xl">
            {post.body?.length ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className="text-muted-foreground">This article does not have any content yet.</p>
            )}
          </div>

          <div className="mt-10 border-t border-border pt-5 text-sm font-semibold text-muted-foreground">
            By {post.author || "Darul-ilm Kent"}
          </div>

          {(previous || next) && (
            <nav
              className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-2"
              aria-label="Blog post navigation"
            >
              {previous ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: previous.slug }}
                  className="group rounded-md border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <ArrowLeft className="h-4 w-4 text-accent" /> Previous post
                  </span>
                  <span className="mt-2 block font-display text-lg leading-tight text-primary group-hover:text-accent">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to="/blog/$slug"
                  params={{ slug: next.slug }}
                  className="group rounded-md border border-border bg-secondary/40 p-4 text-right transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <span className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Next post <ArrowRight className="h-4 w-4 text-accent" />
                  </span>
                  <span className="mt-2 block font-display text-lg leading-tight text-primary group-hover:text-accent">
                    {next.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}
