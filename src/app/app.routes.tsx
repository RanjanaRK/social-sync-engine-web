import { lazy } from "react";
import Protected from "../features/auth/components/Protected";
import { createBrowserRouter } from "react-router";
import PostDetailPage from "../features/post/pages/PostDetailPage";

const Login = lazy(() => import("../features/auth/pages/Login"));
const RegisterPage = lazy(() => import("../features/auth/pages/Register"));

const CreatePost = lazy(() => import("../features/post/pages/CreatePost"));
const Post = lazy(() => import("../features/post/pages/Post"));

const Profile = lazy(() => import("../features/profile/pages/Profile"));
const PublicProfilePage = lazy(
  () => import("../features/profile/pages/PublicProfilePage"),
);

const AppLayout = lazy(() => import("./AppLayout"));

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
        path: "/post/:postId",
        element: (
          <Protected>
            <PostDetailPage />
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
