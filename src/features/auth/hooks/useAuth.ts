import { getCurrentUser, login, logout, register } from "../service/auth.api";
import { setUser } from "../state/auth.slice";
import type { LoginSchemaType, RegisterSchemaType } from "../utils/zodSchema";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async (rData: RegisterSchemaType) => {
    const response = await register(rData);

    dispatch(setUser(response.user));

    return response;
  };

  const handleLogin = async (lData: LoginSchemaType) => {
    const response = await login(lData);

    dispatch(setUser(response.user));

    // console.log(dispatch(setUser(response.user)));

    return response;
  };

  const handleLogout = async () => {
    const response = await logout();

    dispatch(setUser(null));

    // console.log(dispatch(setUser(response.user)));

    return response;
  };

  const handleGetCurrentUser = async () => {
    const response = await getCurrentUser();

    dispatch(setUser(response.user));

    return response;
  };

  return { handleRegister, handleLogin, handleLogout, handleGetCurrentUser };
};
