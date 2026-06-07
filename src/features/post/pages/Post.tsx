import PostCard from "../components/PostCard";

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
  return (
    <>
      {/* <div className="mx-auto flex h-screen flex-col items-center justify-center"> */}
      <div className="mx-auto w-full max-w-2xl px-3 py-4 sm:px-4 md:px-6">
        <PostCard
          username={demoPost.username}
          avatar={demoPost.avatar}
          caption={demoPost.caption}
          likes={125}
          comments={18}
          images={demoPost.images}
        />
        <PostCard
          username={demoPost.username}
          avatar={demoPost.avatar}
          caption={demoPost.caption}
          likes={125}
          comments={18}
          images={demoPost.images}
        />
        <PostCard
          username={demoPost.username}
          avatar={demoPost.avatar}
          caption={demoPost.caption}
          likes={125}
          comments={18}
          images={demoPost.images}
        />
      </div>
    </>
  );
};

export default Post;
