import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { events } from "../data/events";

export const useEventStore = create()(
  persist(
    (set, get) => ({
      events: [],
      loading: false,
      error: null,

      eventById: (id) => {
        const event = get().events.find((event) => event.id === id);
        if (!event) {
          return {
            success: false,
            message: `Event with ${id} is not found`,
            data: null,
          };
        }
        return {
          success: true,
          message: "Event retrieve successfully",
          data: event,
        };
      },

      // eventsByCategorySlug: (slug) => {
      //   const events = get().events.filter((event) => event.category === slug);
      //   if (!events || events.length === 0) {
      //     return {
      //       success: false,
      //       message: `Events with category ${slug} is not found`,
      //       data: null,
      //     };
      //   }
      //   return {
      //     success: true,
      //     message: "Events retrieve successfully",
      //     data: events,
      //   };
      // },

      addEvent: (event) => {
        // do validation and ensure the session id && user is Authenticated
        // get your slug, toLowercase, trim, replace spaces with dashes, remove special characters
        const newEvent = {
          id: get().events.length + 1, // Date.now()
          name: event.name,
          // userId: session.id
          description: event.description,
          date: event.date,
          status: event.status,
          // slug: event.name
          //   .toLowerCase()
          //   .trim()
          //   .replace(/\s+/g, "-")
          //   .replace(/[^a-z0-9-]/g, ""),
          category: eveeventtData.category,
          location: event.location,
          createdAt: new Date().toISOString(),
          updatedAt: null,
        };

        set((state) => ({
          events: [newEvent, ...state.events],
        }));

        return {
          success: true,
          message: "Event created successfully",
          data: newEvent,
        };
      },

      updateEvent: (id, data) => {
        // do validation and ensure the session id is the same as the event userId before updating
        const event = get().events.find((event) => event.id === id);
        if (!event) {
          return {
            success: false,
            message: "Invalid event id",
            data: null,
          };
        }

        const updatedEvent = {
          ...event,
          ...data,
          updatedAt: new Date().toISOString(),
        };

        set((state) => ({
          events: state.events.map((event) =>
            event.id === id ? updatedEvent : event,
          ),
        }));

        return {
          success: true,
          message: "Event updated successfully",
          data: updatedEvent,
        };
      },

      deleteEvent: (id) => {
        // do validation and ensure the session id is the same as the event userId before updating
        const event = get().events.find((event) => event.id === id);
        if (!event) {
          return {
            success: false,
            message: "Invalid event id",
            data: null,
          };
        }

        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        }));

        return {
          success: true,
          message: "Event deleted successfully",
          data: null,
        };
      },
    }),
    {
      name: "event:storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
