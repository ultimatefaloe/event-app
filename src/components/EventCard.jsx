import React from "react";

// interface Event{
//   id: number,
//   name: string,
//   description: string,
//   date: Date,
//   category:  "conference" | "meetup" | "workshop" | "webinar",
//   status: "upcoming" | "ongoing" | "completed"
//   createdAt: Date,
//   update: Date
// }

const EventCard = () => {
  return (
    <div className="p-2 rounded-lg border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        {/* Left */}
        <div className="text-left">
          <h3 className="font-bold">Event Name</h3>
          <p className="text-sm text-gray-500">Event Description</p>
          <p className="text-xs text-gray-400">Event Date</p>
        </div>
        {/* right */}
        <div className="flex flex-col gap-2">
          <span className="py px-3 rounded-full bg-green-400/30 border border-green-400">
            Status
          </span>
          <span className="py px-3 rounded-full bg-green-400/30 border border-green-400">
            category
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">Created At/ Update At</p>
      </div>
    </div>
  );
};

export default EventCard;
