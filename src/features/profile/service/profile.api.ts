import axios from "axios";
import type { ProfileResponse } from "../utils/types";

const profileApiInstance = axios.create({
  baseURL: "http://localhost:5000/api/user",
  withCredentials: true,
});

export const getPublicProfile = async (
  username: string,
): Promise<ProfileResponse> => {
  const response = await profileApiInstance.get(`/${username}`);

  return response.data;
};

export const getCurrentProfile = async (): Promise<ProfileResponse> => {
  const response = await profileApiInstance.get("/me");

  return response.data;
};
