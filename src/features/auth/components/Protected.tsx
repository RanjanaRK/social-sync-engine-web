import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";
import type { ReactNode } from "react";
import { Navigate } from "react-router";

type Props = {
  children: ReactNode;
};

const Protected = ({ children }: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const loading = useSelector((state: RootState) => state.auth.loading);

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Protected;
