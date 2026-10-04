import { CalendarPlus, Clock3, Info, MapPin, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

import {
  downloadEventCalendar,
  formatEventDate,
  formatEventTime,
  starterEvents,
  type CommunityEvent,
} from "@/lib/community-events";
import { getCommunityEvents } from "@/sanity/queries";
import { EventDetailsDialog } from "@/components/event-details-dialog";

const statusCopy = {
  scheduled: "Scheduled",
  postponed: "Postponed",
  cancelled: "Cancelled",
} as const;

function getUpcomingEvents(events: CommunityEvent[]) {
  const now = new Date();

  return events
    .flatMap((event) => {
      if (!event.repeatWeekly) return [event];

      const firstStart = new Date(event.start);
      while (firstStart <= now) firstStart.setDate(firstStart.getDate() + 7);
      const duration = new Date(event.end).getTime() - new Date(event.start).getTime();

      return Array.from({ length: 8 }, (_, index) => {
        const start = new Date(firstStart);
        start.setDate(firstStart.getDate() + index * 7);
        return {
          ...event,
          _id: `${event._id}-${start.toISOString()}`,
          start: start.toISOString(),
          end: new Date(start.getTime() + duration).toISOString(),
        };
      });
    })
    .filter((event) => new Date(event.end).getTime() >= now.getTime() - 86_400_000)
    .sort((first, second) => first.start.localeCompare(second.start));
}

export function CommunityCalendar() {
  const [events, setEvents] = useState<CommunityEvent[]>(starterEvents);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CommunityEvent | null>(null);
  const upcomingEvents = getUpcomingEvents(events);

  async function refreshEvents() {
    setRefreshing(true);
    try {
      const remoteEvents = await getCommunityEvents();
      if (remoteEvents.length > 0) setEvents(remoteEvents);
      setLastUpdated(new Date());
    } catch {
      setLastUpdated(null);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    void refreshEvents();
    const interval = window.setInterval(() => void refreshEvents(), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section aria-live="polite">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
        <div>
          <p className="eyebrow">Live community calendar</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Event changes are checked automatically every minute.
            {lastUpdated ? ` Last checked ${lastUpdated.toLocaleTimeString("en-GB")}.` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={() => void refreshEvents()}
          disabled={refreshing}
          className="btn-pill-ghost inline-flex items-center gap-2 text-sm disabled:opacity-60"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} aria-hidden="true" />
          Refresh updates
        </button>
      </div>

      <div className="space-y-5">
        {upcomingEvents.length === 0 ? (
          <p className="border-t border-border py-8 text-muted-foreground">
            No additional events are scheduled just now. Check back for updates.
          </p>
        ) : (
          upcomingEvents.map((event) => (
            <article
              key={event._id}
              className="panel-card group relative cursor-pointer p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:p-8"
              role="button"
              tabIndex={0}
              title="View event details"
              onClick={() => setSelectedEvent(event)}
              onKeyDown={(keyboardEvent) => {
                if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
                  keyboardEvent.preventDefault();
                  setSelectedEvent(event);
                }
              }}
            >
              <Info
                className="absolute right-5 top-5 h-5 w-5 text-primary opacity-40 transition group-hover:opacity-100 md:right-7 md:top-7"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${
                        event.status === "scheduled"
                          ? "bg-secondary text-primary"
                          : event.status === "postponed"
                            ? "bg-accent/15 text-accent"
                            : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {statusCopy[event.status]}
                    </span>
                    {event.updatedAt && (
                      <span className="text-xs text-muted-foreground">
                        Updated {formatEventDate(event.updatedAt)}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 font-display text-2xl uppercase text-primary">
                    {event.title}
                  </h2>
                  {event.description && (
                    <p className="mt-3 max-w-2xl text-muted-foreground">{event.description}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={(clickEvent) => {
                    clickEvent.stopPropagation();
                    downloadEventCalendar(event);
                  }}
                  disabled={event.status === "cancelled"}
                  className="btn-pill inline-flex shrink-0 items-center gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                  Add to calendar
                </button>
              </div>
              <div className="mt-6 grid gap-3 border-t border-border pt-5 text-sm text-muted-foreground sm:grid-cols-2">
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>
                    {formatEventDate(event.start)} · {formatEventTime(event.start, event.end)}
                  </span>
                </span>
                {event.location && (
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                    {event.location}
                  </span>
                )}
              </div>
            </article>
          ))
        )}
      </div>
      <EventDetailsDialog
        event={selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      />
    </section>
  );
}
