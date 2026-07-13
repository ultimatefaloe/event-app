import { Link, useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../context/EventContext";

export default function EventDetail() {
  const { id } = useParams();
  const { getEvent, deleteEvent } = useEvents();
  const navigate = useNavigate();

  const event = getEvent(id);

  if (!event) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-400">
        Event not found.
        <div className="mt-4">
          <Link to="/" className="text-indigo-600 hover:underline">Back to events</Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (confirm(`Delete "${event.title}"?`)) {
      deleteEvent(id);
      navigate("/");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link to="/" className="text-sm text-indigo-600 hover:underline mb-4 inline-block">
        ← Back to events
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h1 className="text-2xl font-bold text-gray-800">{event.title}</h1>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 whitespace-nowrap">
            {event.category}
          </span>
        </div>

        {event.description && (
          <p className="text-gray-600 mb-4">{event.description}</p>
        )}

        <div className="text-sm text-gray-600 flex flex-col gap-2 mb-6">
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

        <div className="flex gap-2 pt-4 border-t border-gray-100">
          <Link
            to={`/events/${event.id}/edit`}
            className="flex-1 text-center text-sm font-medium bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-2 rounded-md transition-colors"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="flex-1 text-center text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-md transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
