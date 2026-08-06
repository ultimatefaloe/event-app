import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create()(
  persist(
    (set, get) => ({
      users: null,
      loading: false,
      error: null,

      login: (data) => {
        const { email, password } = data;

        const user = get().users?.find(
          (user) => user.email.toLowerCase() === email.toLowerCase(),
        );

        if (!user) {
          return {
            succes: false,
            message: "User not found",
            data: null,
          };
        }

        if (user.password !== password) {
          return {
            succes: false,
            message: "Incorrect password",
            data: null,
          };
        }

        return {
          succes: true,
          message: "Login successful",
          data: user,
        };

        // call the session store to set the session
        // we are going to handle the session in the session store, so we don't need to set it here, returning the user is not found or incorrect password
      },
      register: (data) => {
        const { users } = get();
        const { email } = data;

        const userExist = users?.find(
          (user) => user.email.toLowerCase() === email.toLowerCase(),
        );

        if (userExist) {
          return {
            succes: false,
            message: "User already exists",
            data: null,
          };
        }

        set((state) => ({
          users: state.users
            ? [
                ...state.users,
                {
                  ...data,
                  id: Date.now().toString(),
                  createdAt: new Date().toISOString(),
                  updatedAt: null,
                },
              ]
            : [
                {
                  ...data,
                  id: Date.now().toString(),
                  createdAt: new Date().toISOString(),
                  updatedAt: null,
                },
              ],
        }));

        return {
          succes: true,
          message: "User registered successfully",
          data: data,
        };
      },
    }),
    {
      name: "auth:storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   agreeTerms: string;
//   createdAt: string;
//   updatedAt: string | null;
// }
