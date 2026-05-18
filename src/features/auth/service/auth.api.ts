import axios from "axios";
import type { AuthResponse } from "../utils/authType";

const authApiInstance = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

export const register = async (rdata: any): Promise<AuthResponse> => {
  const response = await authApiInstance.post("/register", rdata);

  return response.data;
};
