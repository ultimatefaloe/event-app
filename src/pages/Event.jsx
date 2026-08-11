import React from "react";
import EventCard from "../components/EventCard";
import { useEventStore } from "../store/event.store";

const Event = () => {
  // const { events: ev, loading, error, updateEvent, deleteEvent  } = useEventStore();
  // const events = useEventStore((state) => state.events);
  // const loading = useEventStore((state) => state.loading);
  // const error = useEventStore((state) => state.error);
  // const updateEvent = useEventStore((state) => state.updateEvent);
  // const deleteEvent = useEventStore((state) => state.removeEvent);
  const events = useEventStore(s => s.events);
  const loading = useEventStore((state) => state.loading);
  const error = useEventStore((state) => state.error);
  const updateEvent = useEventStore((state) => state.updateEvent);
  const deleteEvent = useEventStore((state) => state.removeEvent);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 text-lg font-bold">Loading Events...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-red-500 text-lg font-bold">Error: {error}</p>
          </div>
        ) : events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={() => updateEvent(event.id, event)}
              onDelete={() => deleteEvent(event.id)}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 text-lg font-bold">No Events Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
