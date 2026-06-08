import axios from "axios";
import type { PostListResponse, PostResponse } from "../utils/types";

const postApiInstance = axios.create({
  baseURL: "http://localhost:5000/api/post",
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
