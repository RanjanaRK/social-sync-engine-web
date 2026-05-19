import { register } from "../service/auth.api";
import { setUser } from "../state/auth.slice";
import type { RegisterSchemaType } from "../utils/zodSchema";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async (rData: RegisterSchemaType) => {
    const response = await register(rData);

    dispatch(setUser(response.user));
  };

  return { handleRegister };
};
