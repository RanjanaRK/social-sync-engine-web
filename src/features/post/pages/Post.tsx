import { useEffect } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../../../app/app.store";
import PostCard from "../components/PostCard";
import usePost from "../hooks/usePost";

const Post = () => {
  const posts = useSelector((state: RootState) => state.post.posts);

  const { handleGetAllPost } = usePost();

  useEffect(() => {
    handleGetAllPost();
  }, []);

  return (
    <main className="mx-auto w-full max-w-160 px-3 py-5 sm:px-5 md:py-7">
      <div className="space-y-5 md:space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            username={post.user.username}
            avatar={post.user.profileImage}
            caption={post.caption}
            likes={post.likesCount}
            comments={post.commentsCount}
            images={post.postImage}
            id={post._id}
          />
        ))}
      </div>
    </main>
  );
};

export default Post;
