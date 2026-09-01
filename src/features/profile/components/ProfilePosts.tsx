import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";

import type { RootState } from "../../../app/app.store";
import type { Post } from "../../post/utils/types";

type Props = {
  posts: Post[];
  deleteHandle?: (postId: string) => void;
};

const ProfilePosts = ({ posts, deleteHandle }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);

  console.log({ user, posts });

  return (
    <section className="mt-7">
      {/* Section heading */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] text-[#F3EDF0]">
            Posts
          </h2>

          <div className="mt-1 h-px w-8 bg-[#E7A8BD]/50" />
        </div>

        <span className="text-xs text-[#625A60]">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </span>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
        {posts.map((post) => {
          const isOwner = user?._id === (post.user as any);

          return (
            <div
              key={post._id}
              className="group relative aspect-square overflow-hidden rounded-[14px] bg-[#151116] ring-1 ring-white/4.5"
            >
              <img
                src={post.postImage[0]?.url}
                alt={post.caption}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Delete */}
              {isOwner && (
                <button
                  type="button"
                  onClick={() => deleteHandle?.(post._id)}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0B090C]/75 text-[#C8BDC3] opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-[#E58FA8] hover:text-[#170F13]"
                  aria-label="Delete post"
                >
                  <Trash2 size={15} strokeWidth={1.8} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {posts.length === 0 && (
        <div className="flex min-h-55 items-center justify-center rounded-[20px] bg-[#151116] ring-1 ring-white/4.5">
          <div className="text-center">
            <p className="text-sm font-medium text-[#B8AFB5]">No posts yet</p>

            <p className="mt-1 text-xs text-[#625A60]">
              Nothing shared here yet.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfilePosts;
