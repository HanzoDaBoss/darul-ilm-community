import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  topic: z.enum([
    "general",
    "volunteering",
    "visiting",
    "new-muslims",
    "family-support",
    "zakat-food",
    "media",
    "donations",
    "other",
  ]),
  message: z.string().trim().min(1).max(5000),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(contactFormSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const from = process.env["RESEND_FROM_EMAIL"];

    if (!apiKey || !from) {
      throw new Error("Email service is not configured");
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: ["Info@darulilmchatham.com"],
      replyTo: data.email,
      subject: `Website enquiry: ${data.topic} - ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nTopic: ${data.topic}\n\n${data.message}`,
    });

    if (error) {
      console.error("Resend contact email failed", error);
      throw new Error("Unable to send message");
    }

    return { success: true };
  });
