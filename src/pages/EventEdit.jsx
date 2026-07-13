import { useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import EventForm from "../components/EventForm";

export default function EventEdit() {
  const { id } = useParams();
  const { getEvent, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = getEvent(id);

  if (!event) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-400">
        Event not found.
      </div>
    );
  }

  const handleSubmit = (data) => {
    updateEvent(id, data);
    navigate(`/events/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 w-full max-w-xl">Edit Event</h1>
      <EventForm initialData={event} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </div>
  );
}
