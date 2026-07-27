import React, { useState } from "react";
import Button from "../Button";
import { Plus } from "lucide-react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    category: "",
    status: "upcoming",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="p-2 text-left">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name your Event"
            className="border border-gray-400 p-2 rounded-md w-full"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="p-2 text-left">
          <label htmlFor="date" className="mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Choose a date"
            className="border border-gray-400 p-2 rounded-md w-full"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div className="p-2 text-left">
          <label htmlFor="date" className="mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter the location"
            className="border border-gray-400 p-2 rounded-md w-full"
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>
        <div className="p-2 text-left">
          <label htmlFor="description" className="mb-1">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Describe your event"
            className="border border-gray-400 p-2 rounded-md w-full"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="p-2 flex gap-4 align-center text-left">
          <div className="w-full">
            <label htmlFor="category" className="mb-1">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="border border-gray-400 p-2 rounded-md w-full"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="conference">Conference</option>
              <option value="music">Music</option>
              <option value="networking">Networking</option>
              <option value="charity">Charity</option>
              <option value="workshop">Workshop</option>
              <option value="exhibition">Exhibition</option>
              <option value="sports">Sports</option>
              <option value="community">Community</option>
            </select>
          </div>

          <div className="w-full">
            <label htmlFor="status" className="mb-1">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="border border-gray-400 p-2 rounded-md w-full"
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option value="upcoming">Upcoming</option>
              <option value="conference">Conference</option>
              <option value="meetup">Meetup</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>
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
