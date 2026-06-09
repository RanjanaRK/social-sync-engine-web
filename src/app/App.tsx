import { RouterProvider } from "react-router";
import "./App.css";
import { routes } from "./app.routes";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useEffect } from "react";

const App = () => {
  const { handleGetCurrentUser } = useAuth();

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
