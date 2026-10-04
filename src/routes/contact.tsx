import { useEffect, useState, type ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageBanner } from "@/components/page-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoHead } from "@/lib/seo";
import { sendContactEmail, type ContactForm } from "@/lib/contact-email";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact Us | Darul-ilm Community",
      description: "Contact Darul-ilm Community about visiting, programmes and support in Medway.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const [MapComponent, setMapComponent] = useState<ComponentType | null>(null);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    topic: "general",
    message: "",
  });
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  useEffect(() => {
    let mounted = true;
    void import("@/components/map").then(({ default: LoadedMap }) => {
      if (mounted) setMapComponent(() => LoadedMap);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("sending");

    try {
      await sendContactEmail({ data: form });
      setSubmissionState("sent");
      setForm({ name: "", email: "", topic: "general", message: "" });
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        eyebrow="We would love to hear from you"
        title="Contact Us"
        subtitle="Contact us about visiting the masjid, our programmes, or support in the Medway community."
      />
      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="mb-6 font-display text-2xl font-bold text-primary">Contact details</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Chatham Hill Mosque</h3>
                  <p className="text-muted-foreground">
                    Chatham Hill Masjid
                    <br />
                    22A Chatham Hill, Chatham
                    <br />
                    ME5 7AA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Phone</h3>
                  <p className="text-muted-foreground">
                    Mufti Didar Hasan (Chair):{" "}
                    <a className="text-accent hover:underline" href="tel:07534979369">
                      07534 979369
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Administrator:{" "}
                    <a className="text-accent hover:underline" href="tel:07778200746">
                      07778 200746
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Email</h3>
                  <a
                    className="text-accent hover:underline"
                    href="mailto:Didar@darulilmchatham.com"
                  >
                    Didar@darulilmchatham.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border border-border">
              {MapComponent ? (
                <MapComponent />
              ) : (
                <div
                  className="h-full w-full bg-secondary/40"
                  role="img"
                  aria-label="Map of Chatham Hill Mosque"
                />
              )}
            </div>
          </section>

          <section id="contact-form" className="panel-card h-fit scroll-mt-24 p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold text-primary">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-primary">
                  Subject
                </label>
                <select
                  id="topic"
                  value={form.topic}
                  onChange={(event) =>
                    setForm({ ...form, topic: event.target.value as ContactForm["topic"] })
                  }
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="general">General</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="visiting">Visiting the masjid</option>
                  <option value="new-muslims">New Muslims</option>
                  <option value="family-support">Family support</option>
                  <option value="zakat-food">Zakat or food bank support</option>
                  <option value="media">Media</option>
                  <option value="donations">Donations</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                disabled={submissionState === "sending"}
                className="btn-pill w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submissionState === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p aria-live="polite" className="text-sm text-muted-foreground">
                {submissionState === "sent" && "Thanks, your message has been sent."}
                {submissionState === "error" &&
                  "We could not send your message. Please email Info@darulilmchatham.com directly."}
              </p>
            </form>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
