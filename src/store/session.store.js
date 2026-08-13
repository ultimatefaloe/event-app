import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSessionStore = create()(
  persist(
    (set, get) => ({
      session: null,
      loading: false,
      error: null,

      setSession: (session) => {
        console.log("Setting session:", session);
        set({ session })
      },
      clearSession: () => set({ session: null }),

    }),
    {
      name: "auth:session",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
