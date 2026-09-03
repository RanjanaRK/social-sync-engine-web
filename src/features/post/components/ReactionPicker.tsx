import { useState } from "react";
import { Heart } from "lucide-react";
import type { ReactionType } from "../utils/types";

type ReactionPickerProps = {
  likesCount: number;
  userReaction: ReactionType | null;
  onReaction: (reaction: ReactionType) => void;
  isLoading?: boolean;
};

const reactions: {
  type: ReactionType;
  emoji: string;
  label: string;
}[] = [
  {
    type: "like",
    emoji: "👍",
    label: "Like",
  },
  {
    type: "love",
    emoji: "❤️",
    label: "Love",
  },
  {
    type: "haha",
    emoji: "😂",
    label: "Haha",
  },
  {
    type: "wow",
    emoji: "😮",
    label: "Wow",
  },
  {
    type: "sad",
    emoji: "😢",
    label: "Sad",
  },
  {
    type: "angry",
    emoji: "😡",
    label: "Angry",
  },
];

const ReactionPicker = ({
  likesCount,
  userReaction,
  onReaction,
  isLoading = false,
}: ReactionPickerProps) => {
  const [open, setOpen] = useState(false);

  const selectedReaction = reactions.find(
    (reaction) => reaction.type === userReaction,
  );

  const handleReaction = (reaction: ReactionType) => {
    onReaction(reaction);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Reaction picker */}
      {open && (
        <div className="absolute bottom-full left-0 z-50 mb-2 flex items-center gap-1 rounded-full border border-white/10 bg-[#181318] px-2 py-2 shadow-2xl shadow-black/40">
          {reactions.map((reaction) => (
            <button
              key={reaction.type}
              type="button"
              disabled={isLoading}
              onClick={() => handleReaction(reaction.type)}
              title={reaction.label}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xl transition-all duration-200 hover:-translate-y-1 hover:scale-125 ${
                userReaction === reaction.type ? "scale-110 bg-white/10" : ""
              }`}
            >
              {reaction.emoji}
            </button>
          ))}
        </div>
      )}

      {/* Main reaction button */}
      <button
        type="button"
        disabled={isLoading}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-medium transition-all disabled:opacity-50"
      >
        {selectedReaction ? (
          <span className="text-xl">{selectedReaction.emoji}</span>
        ) : (
          <Heart
            size={22}
            className="text-gray-300 transition-colors hover:text-[#E7A8BD]"
          />
        )}

        <span className={userReaction ? "text-[#E7A8BD]" : "text-gray-300"}>
          {likesCount}
        </span>
      </button>
    </div>
  );
};

export default ReactionPicker;
