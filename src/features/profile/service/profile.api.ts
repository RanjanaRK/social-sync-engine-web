import axios from "axios";
import type { ProfileResponse, SearchResponse } from "../utils/types";

const profileApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/user`,
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

export const searchUser = async (username: string): Promise<SearchResponse> => {
  const response = await profileApiInstance.get("/all", {
    params: {
      username: username,
    },
  });

  return response.data;
};
