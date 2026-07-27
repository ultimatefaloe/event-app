import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import RootLayout from "./components/layouts/RootLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Event from "./pages/Event";
import NewEvent from "./pages/NewEvent";
import EventDetail from "./pages/EventDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Event />,
      },
      {
        path: "/events/new",
        element: <NewEvent />,
      },
      {
        path: "/events/:id",
        element: <EventDetail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: (
          <div>
            <h1 className="text-white text-6xl"> This is Login Auth page</h1>
          </div>
        ),
      },
      {
        path: "/auth/register",
        element: (
          <div>
            <h1 className="text-white text-6xl"> This is Register Auth page</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404 Not Found</h1>
      </div>
    ),
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
