import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";

type Props = {
  postsCount: number;
  username: string;
};

const FollowStats = ({ postsCount }: Props) => {
  const { followers, following } = useSelector(
    (state: RootState) => state.follow,
  );

  return (
    <div className="flex items-center gap-7 pt-3">
      {/* Posts */}
      <div>
        <p className="font-bold text-[#F3EDF0]">{postsCount}</p>

        <p className="text-xs text-[#756B72]">
          {postsCount === 1 ? "Post" : "Posts"}
        </p>
      </div>

      <div className="h-7 w-px bg-white/10" />

      {/* Followers */}
      <div>
        <p className="font-bold text-[#F3EDF0]">{followers.toLocaleString()}</p>

        <p className="text-xs text-[#756B72] transition hover:text-[#E7A8BD]">
          Followers
        </p>
      </div>

      <div className="h-7 w-px bg-white/10" />

      {/* Following */}
      <div>
        <p className="font-bold text-[#F3EDF0]">{following.toLocaleString()}</p>

        <p className="text-xs text-[#756B72] transition hover:text-[#E7A8BD]">
          Following
        </p>
      </div>
    </div>
  );
};

export default FollowStats;
