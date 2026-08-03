import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// interface EventStore {
//   events: Event[];

//   addEvent: (event: Event) => void;
//   updateEvent: (id: string, data: Partial<Event>) => void;
//   removeEvent: (id: string) => void;
//   clearEvents: () => void;
// }

// export const useEventStore = create()(
//   persist(
//     (set) => ({
//       events: [],

//       addEvent: (event) =>
//         set((state) => ({
//           events: [...state.events, event],
//         })),

//       updateEvent: (id, data) =>
//         set((state) => ({
//           events: state.events.map((event) =>
//             event.id === id ? { ...event, ...data } : event,
//           ),
//         })),

//       removeEvent: (id) =>
//         set((state) => ({
//           events: state.events.filter((event) => event.id !== id),
//         })),

//       clearEvents: () => set({ events: [] }),
//     }),
//     {
//       name: "event-storage",
//       storage: createJSONStorage(() => localStorage),
//     },
//   ),
// );

export const useEventStore = create()(
  persist(
    (set, get) => ({
      events: [],
      loading: false,
      error: null,
      eventById: (id) => {
        const event = get.events.find((event) => event.id === id);
        return event || null;
      },
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),

      updateEvent: (id, data) =>
        set((state) => ({
          events: state.events.map((event) => {
            event.id === id
              ? { ...event, ...data, updatedAt: new Date().toISOString() }
              : event;
            // if(event.id === id) {
            //   return {...event, ...data, updatedAt: new Date().toISOString()};
            // }
            // return event;
          }),
        })),
      removeEvent: (id) => set((state) => ({ events: state.events.filter((event) => event.id !== id) }))
    }),
    {
      name: "event:storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
