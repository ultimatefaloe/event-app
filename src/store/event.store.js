// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// export const useEventStore = create()(
//   persist(
//     (set, get) => ({
//       events: [],
//       loading: false,
//       error: null,
//       eventById: (id) => {
//         const event = get().events.find((event) => event.id === id);
//         return event || null;
//       },
//       addEvent: (event) =>
//         set((state) => ({ events: [...state.events, event] })),

//       updateEvent: (id, data) =>
//         set((state) => ({
//           events: state.events.map((event) => {
//             event.id === id
//               ? { ...event, ...data, updatedAt: new Date().toISOString() }
//               : event;
//           }),
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

export const useEventStore = create()(
  persist(
    (set, get) => ({
      events: [],
      loading: false,
      error: null,

      eventById: id => {
        const event = get().events.find((event) => event.id === id);
        return event || null;
      },

      addEvent: (event) =>
        set((state) => ({
          events: [
            ...state.events,
            {
              ...event,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
              updatedAt: null,
            },
          ],
        })),

      updateEvent: (id, data) =>
        set((state) => ({
          events: state.events.map((event) =>
            event.id === id
              ? { ...event, ...data, updatedAt: new Date().toISOString() }
              : event,
          ),
        })),
      removeEvent: (id) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        })),
    }),
    {
      name: "event:storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
