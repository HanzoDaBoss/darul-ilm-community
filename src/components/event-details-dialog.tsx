import { CalendarPlus, Clock3, MapPin } from "lucide-react";

import {
  downloadEventCalendar,
  formatEventDate,
  formatEventTime,
  type CommunityEvent,
} from "@/lib/community-events";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type EventDetailsDialogProps = {
  event: CommunityEvent | null;
  onOpenChange: (open: boolean) => void;
};

export function EventDetailsDialog({ event, onOpenChange }: EventDetailsDialogProps) {
  return (
    <Dialog open={event !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-xl">
        {event && (
          <>
            <DialogHeader className="pr-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Community event
              </p>
              <DialogTitle className="font-display text-2xl uppercase text-primary">
                {event.title}
              </DialogTitle>
              <DialogDescription>
                {event.description ?? "Join us for this community gathering."}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 border-y border-border py-5 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {formatEventDate(event.start)}
                  <br />
                  {formatEventTime(event.start, event.end)}
                </span>
              </div>
              {event.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{event.location}</span>
                </div>
              )}
              {event.organiser && (
                <div>
                  <span className="font-semibold text-navy">Organised by:</span> {event.organiser}
                </div>
              )}
            </div>

            <DialogFooter>
              <button
                type="button"
                onClick={() => downloadEventCalendar(event)}
                disabled={event.status === "cancelled"}
                className="btn-pill inline-flex items-center justify-center gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-45"
              >
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Add to calendar
              </button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
