// import { Bookmark, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router";

// import usePost from "../hooks/usePost";
// import LikeButton from "./LikeButton";
// import PostCarousel from "./PostCarousel";
// import ReactionPicker from "./ReactionPicker";

// type PostCardProps = {
//   username: string;
//   avatar: string;
//   caption: string;
//   likes: number;
//   comments: number;
//   images: {
//     url: string;
//   }[];
//   id: string;
// };

// const PostCard = ({
//   username,
//   avatar,
//   caption,
//   likes,
//   comments,
//   images,
//   id,
// }: PostCardProps) => {
//   const [liked, setLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(likes);

//   const { handleLikePost } = usePost();

//  const handleReaction = async (
//   postId: string,
//   reaction: ReactionType,
// ) => {
//   try {
//     const response = await likePost(postId, reaction);

//     if (!response.success) {
//       return;
//     }

//     setPosts((prevPosts) =>
//       prevPosts.map((post) => {
//         if (post._id !== postId) {
//           return post;
//         }

//         const wasLiked = post.isLiked;
//         const isRemoving =
//           wasLiked && post.userReaction === reaction;

//         return {
//           ...post,

//           isLiked: !isRemoving,

//           userReaction: isRemoving
//             ? null
//             : reaction,

//           likesCount: isRemoving
//             ? Math.max(0, post.likesCount - 1)
//             : wasLiked
//               ? post.likesCount
//               : post.likesCount + 1,
//         };
//       }),
//     );
//   } catch (error) {
//     console.error("Reaction error:", error);
//   }
// };

//   return (
//     <article className="overflow-hidden rounded-[22px] bg-[#151116] shadow-[0_12px_45px_rgba(0,0,0,0.18)] ring-1 ring-white/4.5 transition-all duration-300 hover:ring-white/[0.07]">
//       {/* Header */}

//       <div className="flex items-center justify-between px-4 py-4 sm:px-5">
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <Link to={`/profile/${username}`} className="shrink-0">
//             <div className="rounded-full bg-linear-to-br from-[#E7A8BD] to-[#9F526F] p-[1.5px]">
//               <img
//                 src={avatar}
//                 alt={username}
//                 className="h-10 w-10 rounded-full border-2 border-[#151116] object-cover"
//               />
//             </div>
//           </Link>

//           {/* User info */}
//           <div className="min-w-0 leading-tight">
//             <Link
//               to={`/profile/${username}`}
//               className="block truncate text-sm font-semibold text-[#F5EFF2] transition-colors duration-200 hover:text-[#E7A8BD]"
//             >
//               {username}
//             </Link>

//             <p className="mt-1 text-[11px] text-[#756B72]">Shared a moment</p>
//           </div>
//         </div>

//         {/* More */}
//         <button
//           type="button"
//           className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#756B72] transition-all duration-200 hover:bg-white/4 hover:text-[#C8BDC3]"
//           aria-label="More options"
//         >
//           <MoreHorizontal size={19} />
//         </button>
//       </div>

//       {/* Post Image */}

//       <div className="bg-[#0F0D10]">
//         <PostCarousel images={images} />
//       </div>

//       {/* Content */}

//       <div className="px-4 pt-3 sm:px-5">
//         {/* Actions */}
//         <div className="flex items-center justify-between">
//           {/* Left actions */}
//           <div className="flex items-center gap-1">
//             {/* Like */}
//             <ReactionPicker
//               likesCount={likesCount}
//               userReaction={}
//               onReaction={(reaction) => handleReaction(_id, reaction)}
//             />

//             {/* Comment */}
//             <Link
//               to={`/post/${id}`}
//               className="group flex h-10 items-center gap-2 rounded-xl px-2.5 text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
//             >
//               <MessageCircle
//                 size={20}
//                 strokeWidth={1.8}
//                 className="transition-transform duration-200 group-hover:scale-105"
//               />

//               <span className="text-sm">{comments}</span>
//             </Link>

//             {/* Share */}
//             <button
//               type="button"
//               className="group flex h-10 w-10 items-center justify-center rounded-xl text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
//               aria-label="Share post"
//             >
//               <Share2
//                 size={19}
//                 strokeWidth={1.8}
//                 className="transition-transform duration-200 group-hover:scale-105"
//               />
//             </button>
//           </div>

//           {/* Save */}
//           <button
//             type="button"
//             className="flex h-10 w-10 items-center justify-center rounded-xl text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
//             aria-label="Save post"
//           >
//             <Bookmark size={19} strokeWidth={1.8} />
//           </button>
//         </div>

//         {/* Likes */}

//         {likesCount > 0 && (
//           <p className="mt-1 text-xs font-medium text-[#C8BDC3]">
//             {likesCount.toLocaleString()} {likesCount === 1 ? "like" : "likes"}
//           </p>
//         )}

//         {/* Caption */}

//         <div className="pt-2 pb-5">
//           <p className="text-[13px] leading-6 text-[#B8AFB5]">
//             <Link
//               to={`/profile/${username}`}
//               className="mr-1.5 font-semibold text-[#F3EDF0] transition-colors duration-200 hover:text-[#E7A8BD]"
//             >
//               {username}
//             </Link>

//             {caption}
//           </p>

//           {/* Comments */}
//           {comments > 0 && (
//             <Link
//               to={`/post/${id}`}
//               className="mt-2 inline-block text-xs text-[#6F666D] transition-colors duration-200 hover:text-[#A99CA4]"
//             >
//               View all {comments} {comments === 1 ? "comment" : "comments"}
//             </Link>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// };

// export default PostCard;

import { Bookmark, MessageCircle, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import usePost from "../hooks/usePost";
import PostCarousel from "./PostCarousel";
import ReactionPicker from "./ReactionPicker";
import { toast } from "sonner";

type ReactionType = "like" | "love" | "haha" | "wow" | "sad" | "angry";

type PostCardProps = {
  username: string;
  avatar: string;
  caption: string;
  likes: number;
  comments: number;
  images: {
    url: string;
  }[];
  id: string;

  isLiked: boolean;
  userReaction: ReactionType | null;
  isSaved: boolean;
};
const PostCard = ({
  username,
  avatar,
  caption,
  likes,
  comments,
  images,
  id,
  isLiked,
  userReaction,
  isSaved,
}: PostCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);
  const [reaction, setReaction] = useState<ReactionType | null>(userReaction);
  const [saved, setSaved] = useState(isSaved);

  const { handleLikePost, handleSavePost } = usePost();

  const handleReaction = async (newReaction: ReactionType) => {
    try {
      const response = await handleLikePost(id, newReaction);

      if (!response?.success) {
        return;
      }

      const isRemoving = liked && reaction === newReaction;

      if (isRemoving) {
        setLiked(false);
        setReaction(null);
        setLikesCount((prev) => Math.max(0, prev - 1));
        return;
      }

      // User already has a reaction,
      // so changing emoji doesn't change likes count.
      if (liked) {
        setReaction(newReaction);
        return;
      }

      // New reaction
      setLiked(true);
      setReaction(newReaction);
      setLikesCount((prev) => prev + 1);
    } catch (error) {
      console.error("Reaction error:", error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await handleSavePost(id);

      if (!response?.success) {
        return;
      }

      setSaved(response.isSaved);
      toast.success(response.message);
    } catch (error: any) {
      console.error("Save post error:", error);
      toast.error(error.response?.data?.message ?? "Something went wrong");
    }
  };

  return (
    <article className="overflow-hidden rounded-[22px] bg-[#151116] shadow-[0_12px_45px_rgba(0,0,0,0.18)] ring-1 ring-white/4.5 transition-all duration-300 hover:ring-white/[0.07]">
      <div className="flex items-center justify-between px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${username}`} className="shrink-0">
            <div className="rounded-full bg-linear-to-br from-[#E7A8BD] to-[#9F526F] p-[1.5px]">
              <img
                src={avatar}
                alt={username}
                className="h-10 w-10 rounded-full border-2 border-[#151116] object-cover"
              />
            </div>
          </Link>

          <div className="min-w-0 leading-tight">
            <Link
              to={`/profile/${username}`}
              className="block truncate text-sm font-semibold text-[#F5EFF2] transition-colors duration-200 hover:text-[#E7A8BD]"
            >
              {username}
            </Link>

            <p className="mt-1 text-[11px] text-[#756B72]">Shared a moment</p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#756B72] transition-all duration-200 hover:bg-white/4 hover:text-[#C8BDC3]"
          aria-label="More options"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>

      {/* Post Image */}

      <div className="bg-[#0F0D10]">
        <PostCarousel images={images} />
      </div>

      {/* Content */}

      <div className="px-4 pt-3 sm:px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ReactionPicker
              likesCount={likesCount}
              userReaction={reaction}
              onReaction={handleReaction}
            />

            {/* Comment */}

            <Link
              to={`/post/${id}`}
              className="group flex h-10 items-center gap-2 rounded-xl px-2.5 text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
            >
              <MessageCircle
                size={20}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:scale-105"
              />

              <span className="text-sm">{comments}</span>
            </Link>
          </div>

          {/* Save */}

          <button
            type="button"
            onClick={handleSave}
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
              saved
                ? "text-[#E7A8BD]"
                : "text-[#81777E] hover:bg-white/[0.035] hover:text-[#E7A8BD]"
            }`}
            aria-label={saved ? "Unsave post" : "Save post"}
          >
            <Bookmark
              size={19}
              strokeWidth={1.8}
              className={saved ? "fill-[#E7A8BD]" : ""}
            />
          </button>
        </div>

        {/* Likes */}

        {likesCount > 0 && (
          <p className="mt-1 text-xs font-medium text-[#C8BDC3]">
            {likesCount.toLocaleString()} {likesCount === 1 ? "like" : "likes"}
          </p>
        )}

        {/* Caption */}

        <div className="pt-2 pb-5">
          <p className="text-[13px] leading-6 text-[#B8AFB5]">
            <Link
              to={`/profile/${username}`}
              className="mr-1.5 font-semibold text-[#F3EDF0] transition-colors duration-200 hover:text-[#E7A8BD]"
            >
              {username}
            </Link>

            {caption}
          </p>

          {/* Comments */}

          {comments > 0 && (
            <Link
              to={`/post/${id}`}
              className="mt-2 inline-block text-xs text-[#6F666D] transition-colors duration-200 hover:text-[#A99CA4]"
            >
              View all {comments} {comments === 1 ? "comment" : "comments"}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
