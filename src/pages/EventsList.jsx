import { useState } from "react";
import { useEvents } from "../context/EventContext";
import EventCard from "../components/EventCard";

export default function EventsList() {
  const { events, deleteEvent } = useEvents();
  const [search, setSearch] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  const filtered = events
    .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const handleDelete = (id) => {
    if (confirmId === id) {
      deleteEvent(id);
      setConfirmId(null);
    } else {
      setConfirmId(id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-800">My Events</h1>
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {events.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg mb-2">No events yet</p>
          <p className="text-sm">Click "+ New Event" above to create your first one.</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center py-20 text-gray-400">No events match your search.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((event) => (
            <div key={event.id} className="relative">
              <EventCard event={event} onDelete={handleDelete} />
              {confirmId === event.id && (
                <div className="absolute inset-0 bg-white/95 rounded-xl flex flex-col items-center justify-center gap-3 p-4">
                  <p className="text-sm font-medium text-gray-700 text-center">
                    Delete "{event.title}"?
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-md"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setConfirmId(null)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
