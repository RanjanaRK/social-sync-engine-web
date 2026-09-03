import axios from "axios";
import type {
  PostListResponse,
  PostResponse,
  ReactionType,
} from "../utils/types";

export const postApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/post`,
  withCredentials: true,
});

export const createPost = async (data: FormData): Promise<PostResponse> => {
  const response = await postApiInstance.post("/create", data);
  return response.data;
};

export const getAllPosts = async (): Promise<PostListResponse> => {
  const response = await postApiInstance.get("/get");

  return response.data;
};

export const getSinglePost = async (postId: string): Promise<PostResponse> => {
  const response = await postApiInstance.get(`/get/${postId}`);

  return response.data;
};

export const deletePost = async (postId: string): Promise<PostResponse> => {
  const response = await postApiInstance.delete(`/delete/${postId}`);

  return response.data;
};

export const likePost = async (postId: string, emoji: ReactionType) => {
  const response = await postApiInstance.post(`/like/${postId}`, { emoji });

  return response.data;
};

export const savePost = async (postId: string) => {
  const response = await postApiInstance.post(`/saved/${postId}`);

  return response.data;
};

export const getSavedPosts = async (): Promise<PostListResponse> => {
  const response = await postApiInstance.get("/saved");

  return response.data;
};
