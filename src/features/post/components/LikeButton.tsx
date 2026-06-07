import { Heart } from "lucide-react";

type LikeButtonProps = {
  likesCount: number;
  isLiked: boolean;
  onLike: () => void;
  isLoading?: boolean;
};

const LikeButton = ({
  likesCount,
  isLiked,
  onLike,
  isLoading = false,
}: LikeButtonProps) => {
  return (
    <button
      disabled={isLoading}
      onClick={onLike}
      className="flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-medium transition-all duration-200 disabled:opacity-50"
    >
      <Heart
        size={22}
        className={`transition-all duration-200 ${
          isLiked
            ? "fill-red-500 text-red-500"
            : "text-gray-300 hover:text-red-400"
        }`}
      />

      <span className={isLiked ? "text-red-400" : "text-gray-300"}>
        {likesCount}
      </span>
    </button>
  );
};

export default LikeButton;
