import axios from "axios";
import type { ProfileResponse } from "../utils/types";

const profileApiInstance = axios.create({
  baseURL: `${import.meta.env.REACT_APP_API_URL}/api/user`,
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

export const updateProfileImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await profileApiInstance.patch("/profile-image", formData);

  return res.data;
};
