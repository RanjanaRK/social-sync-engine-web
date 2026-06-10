import { useEffect, useState } from "react";
import type { Comment } from "../../comment/utils/commentTypes";
import useComment from "../../comment/hooks/useComment";

interface Props {
  postId: string;
  refreshTrigger?: number;
}

const CommentList = ({ postId, refreshTrigger }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const { handleGetComments, handleDeleteComment } = useComment();

  const fetchComments = async () => {
    try {
      const res = await handleGetComments(postId);

      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId, refreshTrigger]);

  const removeComment = async (commentId: string) => {
    try {
      await handleDeleteComment(postId, commentId);

      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  if (comments.length === 0) {
    return <p className="text-center text-gray-400">No comments yet.</p>;
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="rounded-xl border border-white/10 bg-[#132238] p-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-white">{comment.user.username}</h4>

            <button
              onClick={() => removeComment(comment._id)}
              className="text-sm text-red-400 hover:text-red-300"
            >
              Delete
            </button>
          </div>

          <p className="mt-2 text-gray-300">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
