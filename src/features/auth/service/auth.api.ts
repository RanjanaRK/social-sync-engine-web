import axios from "axios";
import type { AuthResponse } from "../utils/authType";
import type { LoginSchemaType, RegisterSchemaType } from "../utils/zodSchema";

const authApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/auth`,
  withCredentials: true,
});

export const register = async (
  rdata: RegisterSchemaType,
): Promise<AuthResponse> => {
  const response = await authApiInstance.post("/register", rdata);

  return response.data;
};

export const login = async (ldata: LoginSchemaType): Promise<AuthResponse> => {
  const response = await authApiInstance.post("/login", ldata);

  return response.data;
};

export const logout = async (): Promise<AuthResponse> => {
  const response = await authApiInstance.post("/logout");

  return response.data;
};

export const getMe = async () => {
  const response = await authApiInstance.get("/me");

  return response.data;
};
