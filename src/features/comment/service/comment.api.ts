import { postApiInstance } from "../../post/service/post.api";
import type { CommentResponse } from "../utils/commentTypes";

export const createComment = async (postId: string, content: string) => {
  const response = await postApiInstance.post(`/posts/${postId}/comments`, {
    comment: content,
  });

  console.log(response);

  return response.data;
};

export const getComments = async (postId: string): Promise<CommentResponse> => {
  const response = await postApiInstance.get(`/posts/${postId}/comments`);
  console.log(response);

  return response.data;
};

export const deleteComment = async (postId: string, commentId: string) => {
  const response = await postApiInstance.delete(
    `/${postId}/comments/${commentId}`,
  );

  return response.data;
};
