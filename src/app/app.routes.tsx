import { createBrowserRouter } from "react-router";
import RegisterPage from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import AppLayout from "./AppLayout";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
    ],
  },
]);
