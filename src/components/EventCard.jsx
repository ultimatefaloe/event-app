import { Link } from "react-router-dom";

const categoryColors = {
  Conference: "bg-blue-100 text-blue-700",
  Workshop: "bg-purple-100 text-purple-700",
  Social: "bg-pink-100 text-pink-700",
  Sports: "bg-green-100 text-green-700",
  Other: "bg-gray-100 text-gray-700",
};

export default function EventCard({ event, onDelete }) {
  const badgeClass = categoryColors[event.category] || categoryColors.Other;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${badgeClass}`}>
          {event.category}
        </span>
      </div>

      <p className="text-sm text-gray-500 line-clamp-2">{event.description}</p>

      <div className="text-sm text-gray-600 flex flex-col gap-1 mt-1">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{event.date} {event.time && `at ${event.time}`}</span>
        </div>
        {event.location && (
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{event.location}</span>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-2 pt-3 border-t border-gray-100">
        <Link
          to={`/events/${event.id}`}
          className="flex-1 text-center text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-700 py-1.5 rounded-md transition-colors"
        >
          View
        </Link>
        <Link
          to={`/events/${event.id}/edit`}
          className="flex-1 text-center text-sm font-medium bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-1.5 rounded-md transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(event.id)}
          className="flex-1 text-center text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600 py-1.5 rounded-md transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
