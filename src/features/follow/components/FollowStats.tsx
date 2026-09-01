// import { useSelector } from "react-redux";
// import type { RootState } from "../../../app/app.store";

// const FollowStats = () => {
//   const { followers, following } = useSelector(
//     (state: RootState) => state.follow,
//   );

//   return (
//     <div className="mt-5 flex items-center justify-center gap-8 md:justify-start">
//       <div className="text-center md:text-left">
//         <p className="text-lg font-bold text-[#F3EDF0]">
//           {followers.toLocaleString()}
//         </p>

//         <p className="text-xs text-[#756B72]">
//           {followers === 1 ? "Follower" : "Followers"}
//         </p>
//       </div>

//       <div className="h-8 w-px bg-white/10" />

//       <div className="text-center md:text-left">
//         <p className="text-lg font-bold text-[#F3EDF0]">
//           {following.toLocaleString()}
//         </p>

//         <p className="text-xs text-[#756B72]">Following</p>
//       </div>
//     </div>
//   );
// };

// export default FollowStats;

import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";

type Props = {
  postsCount: number;
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

        <p className="text-xs text-[#756B72]">Followers</p>
      </div>

      <div className="h-7 w-px bg-white/10" />

      {/* Following */}
      <div>
        <p className="font-bold text-[#F3EDF0]">{following.toLocaleString()}</p>

        <p className="text-xs text-[#756B72]">Following</p>
      </div>
    </div>
  );
};

export default FollowStats;
