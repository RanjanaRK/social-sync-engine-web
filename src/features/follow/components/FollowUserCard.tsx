import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import type { User } from "../../auth/utils/authType";

type Props = {
  user: User;
};

const FollowUserCard = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/profile/${user.username}`)}
      className="group flex w-full items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 text-left transition-all duration-200 hover:border-[#E7A8BD]/20 hover:bg-[#E7A8BD]/[0.045]"
    >
      <img
        src={user.profileImage}
        alt={user.username}
        className="h-12 w-12 shrink-0 rounded-full border border-white/10 object-cover"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-[#F3EDF0]">{user.username}</p>

        {user.bio && (
          <p className="mt-1 truncate text-sm text-[#756B72]">{user.bio}</p>
        )}
      </div>

      <ArrowUpRight
        size={18}
        className="text-[#756B72] transition group-hover:text-[#E7A8BD]"
      />
    </button>
  );
};

export default FollowUserCard;
