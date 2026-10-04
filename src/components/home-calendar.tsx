import { ArrowUpRight, CalendarDays, CalendarPlus, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { starterEvents, type CommunityEvent } from "@/lib/community-events";
import { getCommunityEvents } from "@/sanity/queries";
import { EventDetailsDialog } from "@/components/event-details-dialog";

const categories = ["All events", "Madrasa", "Halaqas", "Community"] as const;
type Category = (typeof categories)[number];

function getCategory(event: CommunityEvent): Exclude<Category, "All events"> {
  const title = `${event.title} ${event.description ?? ""}`.toLowerCase();
  if (title.includes("madrasa") || title.includes("tajweed") || title.includes("class")) {
    return "Madrasa";
  }
  if (title.includes("halaqa") || title.includes("spiritual")) return "Halaqas";
  return "Community";
}

function sameDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function isPastDay(day: Date) {
  const endOfDay = new Date(day);
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay < new Date();
}

function isPastEvent(event: CommunityEvent) {
  return new Date(event.end) < new Date();
}

function isWeeklyEvent(event: CommunityEvent) {
  return event.repeatWeekly === true;
}

export function HomeCalendar() {
  const [events, setEvents] = useState<CommunityEvent[]>(starterEvents);
  const [month, setMonth] = useState(() => new Date(2026, 8, 1));
  const [category, setCategory] = useState<Category>("All events");
  const [selectedEvent, setSelectedEvent] = useState<CommunityEvent | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const remoteEvents = await getCommunityEvents();
        if (remoteEvents.length > 0) setEvents(remoteEvents);
      } catch {
        return;
      }
    }

    void loadEvents();
  }, []);

  const visibleEvents = useMemo(
    () => events.filter((event) => category === "All events" || getCategory(event) === category),
    [category, events],
  );

  const calendarEvents = useMemo(() => {
    const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
    const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);

    return visibleEvents.flatMap((event) => {
      const eventDate = new Date(event.start);
      if (!isWeeklyEvent(event) || eventDate > monthEnd) {
        return [event];
      }

      const firstOccurrence = new Date(monthStart);
      const daysUntilWeekday = (eventDate.getDay() - firstOccurrence.getDay() + 7) % 7;
      firstOccurrence.setDate(firstOccurrence.getDate() + daysUntilWeekday);

      const duration = new Date(event.end).getTime() - eventDate.getTime();
      const occurrences: CommunityEvent[] = [];
      for (
        const occurrence = firstOccurrence;
        occurrence <= monthEnd;
        occurrence.setDate(occurrence.getDate() + 7)
      ) {
        const start = new Date(occurrence);
        start.setHours(eventDate.getHours(), eventDate.getMinutes(), eventDate.getSeconds());
        occurrences.push({
          ...event,
          _id: `${event._id}-${start.toISOString()}`,
          start: start.toISOString(),
          end: new Date(start.getTime() + duration).toISOString(),
        });
      }
      return occurrences;
    });
  }, [month, visibleEvents]);

  const days = useMemo(() => {
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const start = new Date(firstDay);
    start.setDate(1 - ((firstDay.getDay() + 6) % 7));
    return Array.from({ length: 42 }, (_, index) => {
      const day = new Date(start);
      day.setDate(start.getDate() + index);
      return day;
    });
  }, [month]);

  const monthLabel = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(month);

  const mobileDateFormatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const monthEvents = [...calendarEvents]
    .filter((event) => {
      const eventDate = new Date(event.start);
      return (
        eventDate.getFullYear() === month.getFullYear() && eventDate.getMonth() === month.getMonth()
      );
    })
    .sort((first, second) => first.start.localeCompare(second.start));

  function shiftMonth(amount: number) {
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1));
  }

  return (
    <section className="border-t border-border bg-background" aria-labelledby="home-calendar-title">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12">
        <h2 className="heading-lg rule-accent text-primary">Community calendar</h2>
        <div className="flex flex-col gap-6 border-b border-border pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3 sm:justify-start">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition hover:border-primary hover:text-primary"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <h2
              id="home-calendar-title"
              className="min-w-0 flex-1 text-center text-lg font-medium text-navy sm:min-w-48 sm:flex-none sm:text-xl"
            >
              {monthLabel}
            </h2>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary text-navy transition hover:bg-secondary"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            role="tablist"
            aria-label="Calendar categories"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  category === item
                    ? "bg-navy text-navy-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_19rem]">
          <div>
            <div className="hidden grid-cols-7 border-b border-border pb-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:grid">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="hidden grid-cols-7 border-l border-t border-border md:grid">
              {days.map((day) => {
                const dayEvents = calendarEvents.filter((event) =>
                  sameDay(new Date(event.start), day),
                );
                const inMonth = day.getMonth() === month.getMonth();
                const pastDay = isPastDay(day);
                return (
                  <div
                    key={day.toISOString()}
                    className={`min-h-24 border-b border-r border-border p-2 sm:min-h-28 ${inMonth ? "bg-background" : "bg-secondary/35"} ${pastDay ? "text-muted-foreground/45" : ""}`}
                  >
                    <span
                      className={`text-sm ${inMonth && !pastDay ? "text-navy" : "text-muted-foreground/50"}`}
                    >
                      {day.getDate()}
                    </span>
                    <div className="mt-2 space-y-1">
                      {dayEvents.map((event) => (
                        <button
                          key={event._id}
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                          className={`block w-full truncate rounded border border-transparent px-1.5 py-1 text-left text-[10px] font-semibold transition hover:-translate-y-px hover:border-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isPastEvent(event) ? "bg-muted text-muted-foreground line-through hover:bg-muted/80" : "bg-secondary text-navy hover:bg-secondary/70"}`}
                          title={`View details for ${event.title}`}
                        >
                          {event.title}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-3 md:hidden">
              {monthEvents.length > 0 ? (
                monthEvents.map((event) => (
                  <button
                    key={event._id}
                    type="button"
                    onClick={() => setSelectedEvent(event)}
                    className={`group flex w-full items-center gap-4 rounded-lg border border-border p-4 text-left transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isPastEvent(event) ? "bg-muted/60 opacity-60" : "bg-secondary/35"}`}
                    aria-label={`View details for ${event.title}`}
                  >
                    <div className="min-w-16 border-r border-border pr-4 text-center">
                      <span className="block text-xs font-semibold uppercase text-muted-foreground">
                        {mobileDateFormatter.format(new Date(event.start)).split(" ")[0]}
                      </span>
                      <span className="mt-1 block text-2xl font-semibold leading-none text-navy">
                        {new Date(event.start).getDate()}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
                          new Date(event.start),
                        )}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-sm font-semibold ${isPastEvent(event) ? "text-muted-foreground line-through" : "text-navy"}`}
                      >
                        {event.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {new Intl.DateTimeFormat("en-GB", {
                          hour: "numeric",
                          minute: "2-digit",
                        }).format(new Date(event.start))}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-primary opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </button>
                ))
              ) : (
                <div className="rounded-lg border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground">
                  No events in this month.
                </div>
              )}
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-xl bg-sky-soft p-5 sm:p-6">
            <div>
              <CalendarDays className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-navy">Keep your community close.</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Subscribe on your phone to receive calendar changes as events are updated.
              </p>
            </div>
            <div className="mt-8 space-y-5">
              <a
                href="/halaqas"
                className="inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-full border border-navy px-5 text-sm font-semibold text-navy transition hover:bg-secondary"
              >
                <CalendarPlus className="h-5 w-5" aria-hidden="true" />
                <span>Subscribe to calendar</span>
                <span className="text-xl font-normal leading-none" aria-hidden="true">
                  +
                </span>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <EventDetailsDialog
        event={selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      />
    </section>
  );
}
