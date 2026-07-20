import React, { useState } from "react";
import Button from "../Button";
import { Plus } from "lucide-react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDes: "",
    eventDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="p-2 text-left">
          <label htmlFor="eventName" className="mb-1">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            placeholder="Enter event name"
            className="border border-gray-400 p-2 rounded-md w-full"
            // onChange={(e) =>
            //   setFormData({ ...formData, eventName: e.target.value })
            // }
          />
        </div>
        <div className="p-2 text-left">
          <label htmlFor="eventDes" className="mb-1">
            Event Description
          </label>
          <input
            type="text"
            name="eventDes"
            id="eventDes"
            placeholder="Enter event description"
            className="border border-gray-400 p-2 rounded-md w-full"
            // onChange={(e) =>
            //   setFormData({ ...formData, eventDes: e.target.value })
            // }
          />
        </div>
        <div className="p-2 text-left">
          <label htmlFor="eventDate" className="mb-1">
            Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            placeholder="Enter event date"
            className="border border-gray-400 p-2 rounded-md w-full"
            // onChange={(e) =>
            //   setFormData({ ...formData, eventDate: e.target.value })
            // }
          />
        </div>
        <div className="p-2 mt-2">
          <Button type="submit">
            <span className="text-white font-bold">Create Event</span>
            <Plus className="text-white" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
