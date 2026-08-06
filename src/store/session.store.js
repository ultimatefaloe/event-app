import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create()(
  persist(
    (set, get) => ({
      user: null,
      users: null,
      isAuthenticated: false,
      session: null,
      loading: false,
      error: null,

      setSession: (session) => set({ session }),
      clearSession: () => set({ session: null }),

    }),
    {
      name: "auth:session",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
