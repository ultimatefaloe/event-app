import React from "react";

const EventCard = ({ event }) => {
  const { name, description, date, status, category, createdAt, updatedAt } = event;

  return (
    <div className="p-2 rounded-lg border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        {/* Left */}
        <div className="text-left">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
        {/* right */}
        <div className="flex flex-col gap-2">
          <span className="py px-3 rounded-full bg-green-400/30 border border-green-400">
            {status}
          </span>
          <span className="py px-3 rounded-full bg-green-400/30 border border-green-400">
            {category}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">
          {updatedAt ? `Updated: ${updatedAt}` : `Created: ${createdAt}`}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
