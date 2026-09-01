import { UserCheck, UserPlus } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";

type Props = {
  onFollow: () => Promise<void>;
  onUnfollow: () => Promise<void>;
};

const FollowButton = ({ onFollow, onUnfollow }: Props) => {
  const { isFollowing, isLoading } = useSelector(
    (state: RootState) => state.follow,
  );

  const handleClick = async () => {
    if (isLoading) return;

    if (isFollowing) {
      await onUnfollow();
    } else {
      await onFollow();
    }
  };

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={handleClick}
      className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
        isFollowing
          ? "border border-white/10 bg-white/6 text-[#D8CDD2] hover:border-[#E7A8BD]/30 hover:bg-[#E7A8BD]/10 hover:text-[#E7A8BD]"
          : "bg-[#E7A8BD] text-[#24171D] shadow-[0_8px_25px_rgba(231,168,189,0.18)] hover:bg-[#efb8ca] hover:shadow-[0_8px_30px_rgba(231,168,189,0.25)]"
      } disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {isFollowing ? (
        <>
          <UserCheck size={17} />
          Following
        </>
      ) : (
        <>
          <UserPlus size={17} />
          Follow
        </>
      )}
    </button>
  );
};

export default FollowButton;
