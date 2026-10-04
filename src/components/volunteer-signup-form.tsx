import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { sendContactEmail } from "@/lib/contact-email";

const volunteerAreas = [
  "Spirituality",
  "Education",
  "New Muslims",
  "Family and Marriage",
  "Youth and Children",
  "Sisters' Development",
  "Zakat Fund",
  "Food Bank",
  "Outreach",
  "Da'wah",
  "Media",
  "Events",
  "Admin",
];

export function VolunteerSignupForm() {
  const [volunteer, setVolunteer] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    areas: [] as string[],
    availability: "",
    skills: "",
    consent: false,
  });
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("sending");

    try {
      await sendContactEmail({
        data: {
          name: volunteer.name,
          email: volunteer.email,
          topic: "volunteering",
          message: [
            `Phone: ${volunteer.phone || "Not provided"}`,
            `Brother or sister: ${volunteer.gender}`,
            `Areas of interest: ${volunteer.areas.join(", ")}`,
            `Availability: ${volunteer.availability}`,
            `Skills: ${volunteer.skills || "Not provided"}`,
          ].join("\n"),
        },
      });
      setSubmissionState("sent");
      setVolunteer({
        name: "",
        email: "",
        phone: "",
        gender: "",
        areas: [],
        availability: "",
        skills: "",
        consent: false,
      });
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <form id="volunteer-form" onSubmit={handleSubmit} className="panel-card space-y-6 p-6 md:p-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-primary">Volunteer sign-up</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Share what you are interested in and when you are usually available.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="volunteer-name" className="block text-sm font-medium text-primary">
            Full name
          </label>
          <input
            id="volunteer-name"
            required
            value={volunteer.name}
            onChange={(event) => setVolunteer({ ...volunteer, name: event.target.value })}
            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
          />
        </div>
        <div>
          <label htmlFor="volunteer-email" className="block text-sm font-medium text-primary">
            Email
          </label>
          <input
            id="volunteer-email"
            type="email"
            required
            value={volunteer.email}
            onChange={(event) => setVolunteer({ ...volunteer, email: event.target.value })}
            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
          />
        </div>
        <div>
          <label htmlFor="volunteer-phone" className="block text-sm font-medium text-primary">
            Phone
          </label>
          <input
            id="volunteer-phone"
            type="tel"
            value={volunteer.phone}
            onChange={(event) => setVolunteer({ ...volunteer, phone: event.target.value })}
            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
          />
        </div>
        <div>
          <label htmlFor="volunteer-gender" className="block text-sm font-medium text-primary">
            Brother or sister
          </label>
          <select
            id="volunteer-gender"
            required
            value={volunteer.gender}
            onChange={(event) => setVolunteer({ ...volunteer, gender: event.target.value })}
            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
          </select>
        </div>
      </div>
      <fieldset>
        <legend className="text-sm font-medium text-primary">Which areas interest you?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerAreas.map((area) => (
            <label key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={volunteer.areas.includes(area)}
                onChange={(event) =>
                  setVolunteer({
                    ...volunteer,
                    areas: event.target.checked
                      ? [...volunteer.areas, area]
                      : volunteer.areas.filter((item) => item !== area),
                  })
                }
                className="h-4 w-4 accent-primary"
              />
              {area}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="volunteer-availability"
            className="block text-sm font-medium text-primary"
          >
            When are you usually free?
          </label>
          <select
            id="volunteer-availability"
            required
            value={volunteer.availability}
            onChange={(event) => setVolunteer({ ...volunteer, availability: event.target.value })}
            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
          >
            <option value="" disabled>
              Select availability
            </option>
            <option>Weekday daytime</option>
            <option>Weekday evening</option>
            <option>Weekends</option>
          </select>
        </div>
        <div>
          <label htmlFor="volunteer-skills" className="block text-sm font-medium text-primary">
            Skills you would like to share
          </label>
          <input
            id="volunteer-skills"
            value={volunteer.skills}
            onChange={(event) => setVolunteer({ ...volunteer, skills: event.target.value })}
            placeholder="Cooking, driving, video editing..."
            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
        <input
          type="checkbox"
          required
          checked={volunteer.consent}
          onChange={(event) => setVolunteer({ ...volunteer, consent: event.target.checked })}
          className="mt-1 h-4 w-4 accent-primary"
        />
        <span>
          I agree to Darul-ilm storing my details to contact me about volunteering. Read our{" "}
          <Link className="text-primary underline" to="/privacy">
            privacy notice
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={submissionState === "sending"}
        className="btn-pill disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submissionState === "sending" ? "Sending..." : "Sign me up"}
      </button>
      <p aria-live="polite" className="text-sm text-muted-foreground">
        {submissionState === "sent" &&
          "JazākAllāhu khayran for offering your time. A member of the team will be in touch."}
        {submissionState === "error" &&
          "We could not send your details. Please email Info@darulilmchatham.com directly."}
      </p>
    </form>
  );
}
