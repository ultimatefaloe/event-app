import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import RootLayout from "./components/layouts/RootLayout";
import Event from "./pages/Event";
import NewEvent from "./pages/NewEvent";

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
        element: <Event />
      },
       {
        path: "/events/new",
        element: <NewEvent />
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: (
          <div>
            <h1> This is auth page</h1>
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
