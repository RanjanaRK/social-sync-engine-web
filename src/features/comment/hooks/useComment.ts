import {
  createComment,
  deleteComment,
  getComments,
} from "../service/comment.api";

const useComment = () => {
  const handleCreateComment = async (postId: string, content: string) => {
    return await createComment(postId, content);
  };

  const handleGetComments = async (postId: string) => {
    return await getComments(postId);
  };

  const handleDeleteComment = async (postId: string, commentId: string) => {
    return await deleteComment(postId, commentId);
  };

  return {
    handleCreateComment,
    handleGetComments,
    handleDeleteComment,
  };
};

export default useComment;
