import axios from "axios";
import type { PostListResponse, PostResponse } from "../utils/types";

const postApiInstance = axios.create({
  baseURL: `${import.meta.env.REACT_APP_API_URL}/api/post`,
  withCredentials: true,
});

export const createPost = async (data: FormData): Promise<PostResponse> => {
  const response = await postApiInstance.post("/create", data);
  return response.data;
};

export const getAllPosts = async (): Promise<PostListResponse> => {
  const response = await postApiInstance.get("/get");
  console.log(response);

  return response.data;
};

export const deletePost = async (postId: string): Promise<PostResponse> => {
  const response = await postApiInstance.delete(`/delete/${postId}`);

  return response.data;
};

export const likePost = async (postId: string, emoji: string = "like") => {
  const response = await postApiInstance.post(`/like/${postId}`, { emoji });

  return response.data;
};
