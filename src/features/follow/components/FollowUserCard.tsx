import { ArrowUpRight, UserMinus } from "lucide-react";
import { useNavigate } from "react-router";
import type { User } from "../../auth/utils/authType";

type Props = {
  user: User;
  actionLabel?: string;
  onAction?: () => Promise<void>;
  actionLoading?: boolean;
};

const FollowUserCard = ({
  user,
  actionLabel,
  onAction,
  actionLoading = false,
}: Props) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${user.username}`);
  };

  const handleAction = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (actionLoading || !onAction) return;

    await onAction();
  };

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-200 hover:border-[#E7A8BD]/20 hover:bg-[#E7A8BD]/[0.045]">
      {/* Profile */}
      <button
        type="button"
        onClick={handleProfileClick}
        className="flex min-w-0 flex-1 items-center gap-4 text-left"
      >
        <img
          src={user.profileImage}
          alt={user.username}
          className="h-12 w-12 shrink-0 rounded-full border border-white/10 object-cover"
        />

        <div className="min-w-0">
          <p className="truncate font-semibold text-[#F3EDF0]">
            {user.username}
          </p>

          {user.bio && (
            <p className="mt-1 truncate text-sm text-[#756B72]">{user.bio}</p>
          )}
        </div>
      </button>

      {/* Action */}
      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={handleAction}
          disabled={actionLoading}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3.5 py-2 text-xs font-semibold text-[#D8CDD2] transition hover:border-[#E7A8BD]/30 hover:bg-[#E7A8BD]/10 hover:text-[#E7A8BD] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <UserMinus size={15} />

          {actionLoading ? "Removing..." : actionLabel}
        </button>
      ) : (
        <ArrowUpRight size={18} className="shrink-0 text-[#756B72]" />
      )}
    </div>
  );
};

export default FollowUserCard;
