import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import type { RootState } from "../../../app/app.store";

type Props = {
  children: ReactNode;
};

const Protected = ({ children }: Props) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
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
