// import { MessageCircle } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router";
// import usePost from "../hooks/usePost";
// import LikeButton from "./LikeButton";
// import PostCarousel from "./PostCarousel";

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

//   const handleLike = async () => {
//     try {
//       await handleLikePost(id);

//       if (liked) {
//         setLiked(false);
//         setLikesCount((prev) => prev - 1);
//       } else {
//         setLiked(true);
//         setLikesCount((prev) => prev + 1);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1b2a]/80 backdrop-blur-xl">
//         {/* Header */}
//         <div className="flex items-center gap-3 p-4">
//           <Link to={`/profile/${username}`}>
//             <img
//               src={avatar}
//               alt={username}
//               className="h-12 w-12 rounded-full object-cover"
//             />
//           </Link>

//           <h3 className="font-semibold text-white">{username}</h3>
//         </div>

//         {/* Carousel */}
//         <PostCarousel images={images} />

//         {/* Actions */}
//         <div className="p-4">
//           <div className="mb-3 flex gap-6">
//             {/* <button className="flex items-center gap-2 text-gray-300 hover:text-red-500">
//               <Heart size={22} />
//               {likes}
//             </button> */}
//             <LikeButton
//               likesCount={likesCount}
//               isLiked={liked}
//               onLike={handleLike}
//             />

//             <Link
//               to={`/post/${id}`}
//               className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
//             >
//               <MessageCircle size={22} />
//               {comments}
//             </Link>
//           </div>

//           <p className="text-gray-300">
//             <span className="mr-2 font-semibold text-white">{username}</span>
//             {caption}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PostCard;

// import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router";

// import usePost from "../hooks/usePost";
// import LikeButton from "./LikeButton";
// import PostCarousel from "./PostCarousel";

// type PostCardProps = {
//   username: string;
//   avatar: string;
//   caption: string;
//   likes: number;
//   comments: number;
//   images?: {
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

//   const handleLike = async () => {
//     try {
//       await handleLikePost(id);

//       if (liked) {
//         setLiked(false);
//         setLikesCount((prev) => Math.max(0, prev - 1));
//       } else {
//         setLiked(true);
//         setLikesCount((prev) => prev + 1);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <article className="overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#151116] shadow-[0_12px_45px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-white/[0.10]">
//       {/* ================================================= */}
//       {/* Post Header */}
//       {/* ================================================= */}

//       <div className="flex items-center justify-between px-4 py-4 sm:px-5">
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <Link to={`/profile/${username}`} className="relative">
//             <div className="rounded-full bg-gradient-to-br from-[#E7A8BD] to-[#9F526F] p-[1.5px]">
//               <img
//                 src={avatar}
//                 alt={username}
//                 className="h-10 w-10 rounded-full border-2 border-[#151116] object-cover"
//               />
//             </div>
//           </Link>

//           {/* User info */}
//           <div className="leading-tight">
//             <Link
//               to={`/profile/${username}`}
//               className="text-sm font-semibold text-[#F5EFF2] transition-colors hover:text-[#E7A8BD]"
//             >
//               {username}
//             </Link>

//             <p className="mt-1 text-[11px] text-[#756B72]">Shared a moment</p>
//           </div>
//         </div>

//         {/* More */}
//         <button
//           type="button"
//           className="flex h-9 w-9 items-center justify-center rounded-full text-[#756B72] transition hover:bg-white/[0.04] hover:text-[#C8BDC3]"
//           aria-label="More options"
//         >
//           <MoreHorizontal size={19} />
//         </button>
//       </div>

//       {/* ================================================= */}
//       {/* Images */}
//       {/* ================================================= */}

//       <div className="bg-[#0F0D10]">
//         <PostCarousel images={images ?? []} />
//       </div>

//       {/* ================================================= */}
//       {/* Actions */}
//       {/* ================================================= */}

//       <div className="px-4 pt-4 sm:px-5">
//         <div className="flex items-center justify-between">
//           {/* Left actions */}
//           <div className="flex items-center gap-1">
//             {/* Like */}
//             <LikeButton
//               likesCount={likesCount}
//               isLiked={liked}
//               onLike={handleLike}
//             />

//             {/* Comments */}
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
//             <Heart size={19} strokeWidth={1.8} />
//           </button>
//         </div>

//         {/* ================================================= */}
//         {/* Like count */}
//         {/* ================================================= */}

//         {likesCount > 0 && (
//           <p className="mt-2 text-xs font-medium text-[#C8BDC3]">
//             {likesCount.toLocaleString()} {likesCount === 1 ? "like" : "likes"}
//           </p>
//         )}

//         {/* ================================================= */}
//         {/* Caption */}
//         {/* ================================================= */}

//         <div className="pt-2 pb-5">
//           <p className="text-[13px] leading-6 text-[#B8AFB5]">
//             <Link
//               to={`/profile/${username}`}
//               className="mr-1.5 font-semibold text-[#F3EDF0] hover:text-[#E7A8BD]"
//             >
//               {username}
//             </Link>

//             {caption}
//           </p>

//           {comments > 0 && (
//             <Link
//               to={`/post/${id}`}
//               className="mt-2 inline-block text-xs text-[#6F666D] transition-colors hover:text-[#A99CA4]"
//             >
//               View all {comments} comments
//             </Link>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// };

// export default PostCard;

import { Bookmark, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import usePost from "../hooks/usePost";
import LikeButton from "./LikeButton";
import PostCarousel from "./PostCarousel";

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
};

const PostCard = ({
  username,
  avatar,
  caption,
  likes,
  comments,
  images,
  id,
}: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const { handleLikePost } = usePost();

  const handleLike = async () => {
    try {
      await handleLikePost(id);

      if (liked) {
        setLiked(false);
        setLikesCount((prev) => Math.max(0, prev - 1));
      } else {
        setLiked(true);
        setLikesCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className="overflow-hidden rounded-[22px] bg-[#151116] shadow-[0_12px_45px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.045] transition-all duration-300 hover:ring-white/[0.07]">
      {/* ================================================= */}
      {/* Header */}
      {/* ================================================= */}

      <div className="flex items-center justify-between px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <Link to={`/profile/${username}`} className="shrink-0">
            <div className="rounded-full bg-gradient-to-br from-[#E7A8BD] to-[#9F526F] p-[1.5px]">
              <img
                src={avatar}
                alt={username}
                className="h-10 w-10 rounded-full border-2 border-[#151116] object-cover"
              />
            </div>
          </Link>

          {/* User info */}
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

        {/* More */}
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#756B72] transition-all duration-200 hover:bg-white/[0.04] hover:text-[#C8BDC3]"
          aria-label="More options"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>

      {/* ================================================= */}
      {/* Post Image */}
      {/* ================================================= */}

      <div className="bg-[#0F0D10]">
        <PostCarousel images={images} />
      </div>

      {/* ================================================= */}
      {/* Content */}
      {/* ================================================= */}

      <div className="px-4 pt-3 sm:px-5">
        {/* Actions */}
        <div className="flex items-center justify-between">
          {/* Left actions */}
          <div className="flex items-center gap-1">
            {/* Like */}
            <LikeButton
              likesCount={likesCount}
              isLiked={liked}
              onLike={handleLike}
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

            {/* Share */}
            <button
              type="button"
              className="group flex h-10 w-10 items-center justify-center rounded-xl text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
              aria-label="Share post"
            >
              <Share2
                size={19}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:scale-105"
              />
            </button>
          </div>

          {/* Save */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#81777E] transition-all duration-200 hover:bg-white/[0.035] hover:text-[#E7A8BD]"
            aria-label="Save post"
          >
            <Bookmark size={19} strokeWidth={1.8} />
          </button>
        </div>

        {/* ================================================= */}
        {/* Likes */}
        {/* ================================================= */}

        {likesCount > 0 && (
          <p className="mt-1 text-xs font-medium text-[#C8BDC3]">
            {likesCount.toLocaleString()} {likesCount === 1 ? "like" : "likes"}
          </p>
        )}

        {/* ================================================= */}
        {/* Caption */}
        {/* ================================================= */}

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
