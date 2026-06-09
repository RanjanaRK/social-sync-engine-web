import { postApiInstance } from "../../post/service/post.api";

export const createComment = async (postId: string, content: string) => {
  const response = await postApiInstance.post(`/${postId}/comments`, {
    content,
  });

  return response.data;
};

export const getComments = async (postId: string) => {
  const response = await postApiInstance.get(`/${postId}/comments`);

  return response.data;
};

export const deleteComment = async (postId: string, commentId: string) => {
  const response = await postApiInstance.delete(
    `/${postId}/comments/${commentId}`,
  );

  return response.data;
};
