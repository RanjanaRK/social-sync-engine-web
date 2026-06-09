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
    <>
      {/* <div className="mx-auto flex h-screen flex-col items-center justify-center"> */}
      <div className="mx-auto w-full max-w-2xl space-y-6 px-3 py-4 sm:px-4 md:px-6">
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
    </>
  );
};

export default Post;
