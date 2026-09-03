import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import usePost from "../hooks/usePost";
import { Link } from "react-router";

type SavedPostType = {
  _id: string;
  caption: string;
  postImage: {
    url: string;
  }[];
  user: {
    username: string;
  };
};

const SavedPost = () => {
  const [savedPosts, setSavedPosts] = useState<SavedPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { handleGetSavedPosts } = usePost();

  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
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
      <main className="mx-auto w-full max-w-160 px-4 py-7">
        <p className="text-sm text-[#81777E]">Loading saved posts...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-160 px-4 py-7">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7A8BD]/10">
          <Bookmark size={20} className="text-[#E7A8BD]" />
        </div>

        <div>
          <h1 className="text-xl font-semibold text-[#F8F3F6]">Saved Posts</h1>

          <p className="text-sm text-[#81777E]">Your saved posts</p>
        </div>
      </div>

      {/* Empty */}
      {savedPosts.length === 0 ? (
        <div className="rounded-2xl border border-white/6 bg-[#151116] px-6 py-16 text-center">
          <Bookmark size={32} className="mx-auto mb-3 text-[#81777E]" />

          <h2 className="text-base font-medium text-[#F8F3F6]">
            No saved posts
          </h2>

          <p className="mt-1 text-sm text-[#81777E]">
            Posts you save will appear here.
          </p>
        </div>
      ) : (
        /* Posts */
        <div className="grid grid-cols-2 space-y-4 md:grid-cols-3">
          {savedPosts.map((post) => (
            <Link
              key={post._id}
              to={`/post/${post._id}`}
              className="block overflow-hidden rounded-2xl border border-white/6 bg-[#151116] transition hover:border-[#E7A8BD]/20 hover:shadow-lg hover:shadow-[#E7A8BD]/5"
            >
              {/* User */}
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-[#F8F3F6]">
                  @{post.user.username}
                </p>
              </div>

              {/* Post image */}
              {post.postImage?.[0]?.url && (
                <img
                  src={post.postImage[0].url}
                  alt="Saved post"
                  className="aspect-square w-full object-cover"
                />
              )}

              {/* Caption */}
              {post.caption && (
                <div className="px-4 py-3">
                  <p className="text-sm leading-6 text-[#C8C0C5]">
                    <span className="mr-2 font-semibold text-[#F8F3F6]">
                      @{post.user.username}
                    </span>

                    {post.caption}
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default SavedPost;
