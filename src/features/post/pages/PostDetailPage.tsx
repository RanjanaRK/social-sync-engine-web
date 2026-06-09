import { useParams } from "react-router";
import PostDetail from "../components/PostDetail";
import CommentList from "../../comment/components/CommentList";
import { useEffect, useState } from "react";
import type { Post } from "../utils/types";
import usePost from "../hooks/usePost";
import useComment from "../../comment/hooks/useComment";
import CommentForm from "../../comment/components/CommentForm";

const PostDetailPage = () => {
  const { postId } = useParams();

  const { handleGetSinglePost } = usePost();
  const { handleCreateComment } = useComment();

  const [post, setPost] = useState<Post | null>(null);
  const [refreshComments, setRefreshComments] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;

      const res = await handleGetSinglePost(postId);

      setPost(res.post);
    };

    fetchPost();
  }, [postId]);

  const submitComment = async (comment: string) => {
    if (!postId) return;

    await handleCreateComment(postId, comment);

    setRefreshComments((prev) => prev + 1);
  };

  if (!post) {
    return <div className="py-10 text-center text-white">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <PostDetail post={post} />

      <div className="mt-6">
        <CommentForm onSubmitComment={submitComment} />
      </div>

      <div className="mt-6">
        <CommentList postId={postId!} refreshTrigger={refreshComments} />
      </div>
    </div>
  );
};

export default PostDetailPage;
