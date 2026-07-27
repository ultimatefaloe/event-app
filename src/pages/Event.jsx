import React from "react";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

const Event = () => {
  const data = events;
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {data.length > 0 ? (
          data.map((event) => <EventCard key={event.id} event={event} />)
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
