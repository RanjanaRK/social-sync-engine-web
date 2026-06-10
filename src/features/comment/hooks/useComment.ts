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
    const res = await getComments(postId);

    console.log(res.data);

    return res;
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
