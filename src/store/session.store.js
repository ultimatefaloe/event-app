import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSessionStore = create()(
  persist(
    (set, get) => ({
      session: null,
      isAuthenticated: () => !!get().session,

      setSession: (user) => {
        set({ session: user })
      },

      clearSession: () => set({ session: null }),

    }),
    {
      name: "auth:session",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
