import { useEffect } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../../../app/app.store";
import PostCard from "../components/PostCard";
import usePost from "../hooks/usePost";
import PostSkeleton from "../components/PostSkeleton";

const Post = () => {
  const { posts, isLoading } = useSelector((state: RootState) => state.post);

  const { handleGetAllPost } = usePost();

  useEffect(() => {
    handleGetAllPost();
  }, []);

  if (isLoading) {
    return (
      <main className="mx-auto w-full max-w-160 px-3 py-5 sm:px-5 md:py-7">
        <div className="space-y-5 md:space-y-6">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-160 px-3 py-5 sm:px-5 md:py-7">
      <div className="space-y-5 md:space-y-6">
        {posts.map((post) => (
          <PostCard
            id={post._id}
            username={post.user.username}
            avatar={post.user.profileImage}
            caption={post.caption}
            likes={post.likesCount}
            comments={post.commentsCount}
            images={post.postImage}
            isLiked={post.isLiked}
            userReaction={post.userReaction}
            isSaved={post.isSaved}
          />
        ))}
      </div>
    </main>
  );
};

export default Post;
