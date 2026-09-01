// import type { Post } from "../utils/types";

// interface Props {
//   post: Post;
// }

// const PostDetail = ({ post }: Props) => {
//   return (
//     <div className="rounded-xl border border-white/10 bg-[#0f172a] p-5">
//       <div className="flex items-center gap-3">
//         <img
//           src={post.user.profileImage}
//           alt={post.user.username}
//           className="h-12 w-12 rounded-full"
//         />

//         <div>
//           <h3 className="font-semibold text-white">{post.user.username}</h3>
//         </div>
//       </div>

//       <p className="mt-4 text-gray-200">{post.caption}</p>

//       {post.postImage && (
//         <img
//           src={post.postImage[0].url}
//           alt="post"
//           className="mt-4 rounded-lg"
//         />
//       )}
//     </div>
//   );
// };

// export default PostDetail;

import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import type { Post } from "../utils/types";

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <article className="overflow-hidden rounded-[24px] bg-[#151116] shadow-[0_20px_70px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.045]">
      {/* ================================================= */}
      {/* Header */}
      {/* ================================================= */}

      <div className="flex items-center justify-between px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="rounded-full bg-gradient-to-br from-[#E7A8BD] to-[#9F526F] p-[1.5px]">
            <img
              src={post.user.profileImage}
              alt={post.user.username}
              className="h-11 w-11 rounded-full border-2 border-[#151116] object-cover"
            />
          </div>

          {/* User */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5EFF2]">
              {post.user.username}
            </h3>

            <p className="mt-1 text-[11px] text-[#756B72]">Shared a moment</p>
          </div>
        </div>

        {/* More */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#756B72] transition-all duration-200 hover:bg-white/[0.04] hover:text-[#C8BDC3]"
          aria-label="More options"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* ================================================= */}
      {/* Image */}
      {/* ================================================= */}

      {post.postImage?.length > 0 && (
        <div className="overflow-hidden bg-[#0F0D10]">
          <img
            src={post.postImage[0].url}
            alt={`Post by ${post.user.username}`}
            className="block max-h-[700px] w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      )}

      {/* ================================================= */}
      {/* Content */}
      {/* ================================================= */}

      <div className="px-5 pt-4 pb-6 sm:px-6">
        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-xl px-2.5 text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
          >
            <Heart size={20} strokeWidth={1.8} />

            <span className="text-sm">{post.likesCount}</span>
          </button>

          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-xl px-2.5 text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
          >
            <MessageCircle size={20} strokeWidth={1.8} />

            <span className="text-sm">{post.commentsCount}</span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
            aria-label="Share post"
          >
            <Share2 size={19} strokeWidth={1.8} />
          </button>
        </div>

        {/* ================================================= */}
        {/* Likes */}
        {/* ================================================= */}

        {post.likesCount > 0 && (
          <p className="mt-2 text-xs font-medium text-[#C8BDC3]">
            {post.likesCount.toLocaleString()}{" "}
            {post.likesCount === 1 ? "like" : "likes"}
          </p>
        )}

        {/* ================================================= */}
        {/* Caption */}
        {/* ================================================= */}

        <div className="mt-3">
          <p className="text-[14px] leading-7 text-[#B8AFB5]">
            <span className="mr-2 font-semibold text-[#F3EDF0]">
              {post.user.username}
            </span>

            {post.caption}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
