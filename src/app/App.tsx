import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { useAuth } from "../features/auth/hooks/useAuth";
import "./App.css";
import { routes } from "./app.routes";

const App = () => {
  const { handleGetme } = useAuth();

  useEffect(() => {
    handleGetme();
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
