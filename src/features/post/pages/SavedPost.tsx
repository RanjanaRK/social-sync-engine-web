import { useEffect, useState } from "react";

import PostCard from "../components/PostCard";
import PostSkeleton from "../components/PostSkeleton";
import usePost from "../hooks/usePost";

type SavedPostType = {
  _id: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  postImage: {
    url: string;
  }[];
  isLiked: boolean;
  userReaction: "like" | "love" | "haha" | "wow" | "sad" | "angry" | null;
  isSaved: boolean;
  user: {
    username: string;
    profileImage: string;
  };
};

const SavedPost = () => {
  const [savedPosts, setSavedPosts] = useState<SavedPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { handleGetSavedPosts } = usePost();

  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        setIsLoading(true);

        const data = await handleGetSavedPosts();

        setSavedPosts(data || []);
      } catch (error) {
        console.error("Failed to fetch saved posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedPosts();
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
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-[#F8F3F6]">Saved Posts</h1>

        <p className="mt-1 text-sm text-[#81777E]">Posts you saved for later</p>
      </div>

      {/* Empty state */}
      {savedPosts.length === 0 ? (
        <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-white/6 bg-[#151116] px-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E7A8BD]/10">
            <span className="text-2xl">🔖</span>
          </div>

          <h2 className="text-base font-semibold text-[#F8F3F6]">
            No saved posts
          </h2>

          <p className="mt-2 max-w-sm text-sm text-[#81777E]">
            Posts you save will appear here so you can easily find them later.
          </p>
        </div>
      ) : (
        /* Saved posts */
        <div className="grid grid-cols-2 gap-2 space-y-5 md:grid-cols-3 md:space-y-6">
          {savedPosts.map((post) => (
            <PostCard
              key={post._id}
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
      )}
    </main>
  );
};

export default SavedPost;
