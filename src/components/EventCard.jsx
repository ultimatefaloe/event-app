import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Edit } from "lucide-react";
import { Trash2 } from "lucide-react";

const EventCard = ({ event, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    description,
    date,
    status,
    category,
    createdAt,
    updatedAt,
  } = event;

  return (
    <div className="p-2 rounded-lg border border-blue-400 cursor-pointer">
      <div className="flex justify-between items-center mb-2">
        {/* Left */}
        <div className="text-left space-y-4">
          {/* Top alignment */}
          <div
            className="flex items-center justify-between gap-2"
            onClick={() => navigate(`/events/${id}`)}
          >
            <h3 className="font-bold">{name}</h3>
            <div className="flex items-center gap-2">
              <span className="py px-3 rounded-full bg-green-400/30 border border-green-400">
                {status}
              </span>
              <span className="py px-3 rounded-full bg-blue-400/30 border border-blue-400">
                {category}
              </span>
            </div>
          </div>

          {/* center alignmenent */}
          <div className="flex gap-2 items-center justify-between">
            {/* Descriptions */}
            <div className="div">
              <p className="text-sm text-gray-500">{description}</p>
              <p className="text-xs text-gray-400">{date}</p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col gap-2 z-50">
              <button onClick={onEdit} className="flex items-center gap-1 p-2">
                <Edit className="w-4 h-4" className="text-blue-500" />
              </button>
              <button
                onClick={onDelete}
                className="flex items-center gap-1 p-2"
              >
                <Trash2 className="w-4 h-4" className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
        {/* right */}
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">
          {updatedAt ? `Updated: ${updatedAt}` : `Created: ${createdAt}`}
        </p>
      </div>
    </div>
  );
  Delete;
};

export default EventCard;
