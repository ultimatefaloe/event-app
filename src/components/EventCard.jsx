import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Edit, Trash2 } from "lucide-react";

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
    <div
      className="p-3 rounded-lg border border-blue-400 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/events/${id}`)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start justify-between gap-1">
          <h3 className="font-bold text-sm sm:text-base flex-1 min-w-0 break-words">
            {name}
          </h3>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <span className="px-2 py-0.5 rounded-full bg-green-400/30 border border-green-400 text-xs">
              {status}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-400/30 border border-blue-400 text-xs">
              {category}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
              {description}
            </p>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
          <div className="flex gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="p-1.5 hover:bg-blue-50 rounded"
            >
              <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="p-1.5 hover:bg-red-50 rounded"
            >
              <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
            </button>
          </div>
        </div>

        <p className="text-right text-xs text-gray-400 border-t border-gray-100 pt-1">
          {updatedAt ? `Updated: ${updatedAt}` : `Created: ${createdAt}`}
        </p>
      </div>
    </div>
  );
  Delete;
};

export default EventCard;
