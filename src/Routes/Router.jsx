import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: LogIn,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
