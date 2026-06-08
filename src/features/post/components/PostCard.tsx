import { Heart, MessageCircle } from "lucide-react";
import PostCarousel from "./PostCarousel";
import LikeButton from "./LikeButton";
import { Link } from "react-router";

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
  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1b2a]/80 backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <Link to={`/profile/${username}`}>
            <img
              src={avatar}
              alt={username}
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>

          <h3 className="font-semibold text-white">{username}</h3>
        </div>

        {/* Carousel */}
        <PostCarousel images={images} />

        {/* Actions */}
        <div className="p-4">
          <div className="mb-3 flex gap-6">
            {/* <button className="flex items-center gap-2 text-gray-300 hover:text-red-500">
              <Heart size={22} />
              {likes}
            </button> */}
            <LikeButton isLiked={false} likesCount={likes} onLike={() => {}} />

            <button className="flex items-center gap-2 text-gray-300 hover:text-blue-400">
              <MessageCircle size={22} />
              {comments}
            </button>
          </div>

          <p className="text-gray-300">
            <span className="mr-2 font-semibold text-white">{username}</span>
            {caption}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
