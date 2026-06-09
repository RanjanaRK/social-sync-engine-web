import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { useAuth } from "../features/auth/hooks/useAuth";
import "./App.css";
import { routes } from "./app.routes";

const App = () => {
  const { handleGetMe } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
