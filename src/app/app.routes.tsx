import { createBrowserRouter } from "react-router";
import RegisterPage from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import AppLayout from "./AppLayout";
import CreatePost from "../features/post/pages/CreatePost";
import Post from "../features/post/pages/Post";
import Profile from "../features/profile/pages/Profile";
import PublicProfilePage from "../features/profile/pages/PublicProfilePage";
import Protected from "../features/auth/components/Protected";

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
        element: (
          <Protected>
            <Post />
          </Protected>
        ),
      },
      {
        path: "/create-post",
        element: (
          <Protected>
            <CreatePost />,
          </Protected>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected>
            <Profile />,
          </Protected>
        ),
      },
      {
        path: "/profile/:username",
        element: (
          <Protected>
            <PublicProfilePage />,
          </Protected>
        ),
      },
    ],
  },
]);
