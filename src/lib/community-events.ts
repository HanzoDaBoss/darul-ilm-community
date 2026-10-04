export type CommunityEventStatus = "scheduled" | "postponed" | "cancelled";

export type CommunityEvent = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  start: string;
  end: string;
  repeatWeekly?: boolean;
  location?: string;
  organiser?: string;
  status: CommunityEventStatus;
  updatedAt?: string;
};

export const starterEvents: CommunityEvent[] = [
  {
    _id: "starter-wednesday-halaqa",
    title: "Weekly Spiritual Halaqa",
    slug: "weekly-spiritual-halaqa",
    description: "A weekly gathering for reflection, learning and renewing the heart.",
    start: "2026-09-23T19:40:00+01:00",
    end: "2026-09-23T20:40:00+01:00",
    repeatWeekly: true,
    location: "Chatham Hill Mosque",
    organiser: "Darul-ilm Kent",
    status: "scheduled",
  },
];

export function formatEventDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function formatEventTime(start: string, end: string) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${formatter.format(new Date(start))} - ${formatter.format(new Date(end))}`;
}

export function toCalendarDate(value: string) {
  return new Date(value)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

export function downloadEventCalendar(event: CommunityEvent) {
  if (event.status === "cancelled") return;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Darul-ilm Community//EN",
    "BEGIN:VEVENT",
    `UID:${event._id}@darulilmcommunity.org`,
    `DTSTAMP:${toCalendarDate(new Date().toISOString())}`,
    `DTSTART:${toCalendarDate(event.start)}`,
    `DTEND:${toCalendarDate(event.end)}`,
    `SUMMARY:${escapeCalendarText(event.title)}`,
    `DESCRIPTION:${escapeCalendarText(event.description ?? "Darul-ilm Community event")}`,
    `LOCATION:${escapeCalendarText(event.location ?? "")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.slug}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeCalendarText(value: string) {
  return value.replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");
}
