// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// export const useEventStore = create()(
//   persist(
//     (set, get) => ({
//       events: [],
//       loading: false,
//       error: null,

//       eventById: id => {
//         const event = get().events.find((event) => event.id === id);
//         return event || null;
//       },

//       addEvent: (event) =>
//         set((state) => ({
//           events: [
//             ...state.events,
//             {
//               ...event,
//               id: Date.now().toString(),
//               createdAt: new Date().toISOString(),
//               updatedAt: null,
//             },
//           ],
//         })),

//       updateEvent: (id, data) =>
//         set((state) => ({
//           events: state.events.map((event) =>
//             event.id === id
//               ? { ...event, ...data, updatedAt: new Date().toISOString() }
//               : event,
//           ),
//         })),
//       removeEvent: (id) =>
//         set((state) => ({
//           events: state.events.filter((event) => event.id !== id),
//         })),
//     }),
//     {
//       name: "event:storage",
//       storage: createJSONStorage(() => localStorage),
//     },
//   ),
// );

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

      addEvent: (event) => {
        const newEvent = {
          id: get().events.length + 1, // Date.now()
          name: event.name,
          description: event.description,
          date: event.date,
          status: event.status,
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
