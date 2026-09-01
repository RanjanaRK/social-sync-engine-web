import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import useComment from "../../comment/hooks/useComment";
import type { Comment } from "../../comment/utils/commentTypes";

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
    return (
      <div className="py-8 text-center">
        <p className="text-sm text-[#756B72]">No comments yet.</p>

        <p className="mt-1 text-xs text-[#514A4F]">
          Be the first to share your thoughts.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="group flex items-start justify-between gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-white/[0.025]"
        >
          {/* Comment content */}
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-6 text-[#B8AFB5]">
              <span className="mr-2 font-semibold text-[#F3EDF0]">
                {comment.user.username}
              </span>

              {comment.comment}
            </p>
          </div>

          {/* Delete */}
          <button
            type="button"
            onClick={() => removeComment(comment._id)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#625960] opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-[#E58FA8]/[0.08] hover:text-[#E58FA8]"
            aria-label="Delete comment"
          >
            <Trash2 size={15} strokeWidth={1.8} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
