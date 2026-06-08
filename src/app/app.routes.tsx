import { createBrowserRouter } from "react-router";
import RegisterPage from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import AppLayout from "./AppLayout";
import CreatePost from "../features/post/pages/CreatePost";
import Post from "../features/post/pages/Post";
import Profile from "../features/profile/pages/Profile";
import PublicProfilePage from "../features/profile/pages/PublicProfilePage";

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
        element: <Post />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/:username",
        element: <PublicProfilePage />,
      },
    ],
  },
]);
