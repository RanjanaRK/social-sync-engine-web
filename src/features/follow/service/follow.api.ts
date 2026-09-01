import axios from "axios";

import type {
  FollowCountsResponse,
  FollowResponse,
  FollowStatusResponse,
} from "../utils/types";

const followApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/follow`,
  withCredentials: true,
});

export const followUser = async (username: string): Promise<FollowResponse> => {
  const response = await followApiInstance.post(`/${username}`);

  console.log({ response });

  return response.data;
};

export const unfollowUser = async (
  username: string,
): Promise<FollowResponse> => {
  const response = await followApiInstance.delete(`/${username}`);

  return response.data;
};

export const getFollowStatus = async (
  username: string,
): Promise<FollowStatusResponse> => {
  const response = await followApiInstance.get(`/status/${username}`);

  return response.data;
};

export const getFollowCounts = async (
  username: string,
): Promise<FollowCountsResponse> => {
  const response = await followApiInstance.get(`/counts/${username}`);

  return response.data;
};
