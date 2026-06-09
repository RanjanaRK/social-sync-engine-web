import { useDispatch } from "react-redux";
import { getMe, login, logout, register } from "../service/auth.api";
import { setError, setLoading, setUser } from "../state/auth.slice";
import type { LoginSchemaType, RegisterSchemaType } from "../utils/zodSchema";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async (rData: RegisterSchemaType) => {
    const response = await register(rData);

    dispatch(setUser(response.user));

    return response;
  };

  const handleLogin = async (lData: LoginSchemaType) => {
    try {
      dispatch(setLoading(true));

      const response = await login(lData);

      dispatch(setUser(response.user));

      return response;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogout = async () => {
    const response = await logout();

    dispatch(setUser(null));

    // console.log(dispatch(setUser(response.user)));

    return response;
  };

  const handleGetme = async () => {
    try {
      dispatch(setLoading(true));

      const data = await getMe();
      // console.log(data.user);

      if (data.user) {
        dispatch(setUser(data.user));
      }
    } catch (error: any) {
      // console.log(error);

      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { handleRegister, handleLogin, handleLogout, handleGetme };
};
