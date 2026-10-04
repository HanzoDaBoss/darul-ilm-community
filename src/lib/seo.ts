const configuredSiteUrl = import.meta.env.VITE_SITE_URL || "https://school.darulilmkent.org";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

type SeoOptions = {
  title: string;
  description: string;
  path: string;
};

export function seoHead({ title, description, path }: SeoOptions) {
  const url = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Darul-ilm Community",
  url: siteUrl,
  logo: absoluteUrl("/favicon.png"),
  description:
    "Darul-ilm Community connects families across Medway with education, welfare, food support and spiritual gatherings.",
  email: "mailto:Info@darulilmchatham.com",
  sameAs: [
    "https://www.youtube.com/@darul-ilmchatham4240",
    "https://www.instagram.com/darulilmchatham",
  ],
};
