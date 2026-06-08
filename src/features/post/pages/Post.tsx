import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";
import PostCard from "../components/PostCard";
import usePost from "../hooks/usePost";

const demoPost = {
  username: "sparkle",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",

  caption: "Testing Embla carousel in SocialSync 🚀",

  images: [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    },
    {
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200",
    },
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
    },
    {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    },
  ],
};

const Post = () => {
  const posts = useSelector((state: RootState) => state.post.posts);

  const { handleGetAllPost } = usePost();

  console.log(posts);

  const fetchPosts = async () => {
    const data = await handleGetAllPost();
    console.log(data);
  };

  useEffect(() => {
    fetchPosts();
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
