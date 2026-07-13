import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import EventForm from "../components/EventForm";

export default function EventCreate() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addEvent(data);
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 w-full max-w-xl">Create Event</h1>
      <EventForm onSubmit={handleSubmit} submitLabel="Create Event" />
    </div>
  );
}
