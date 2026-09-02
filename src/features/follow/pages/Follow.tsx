// import { ArrowLeft, Users } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams, useLocation } from "react-router";

// import type { User } from "../../auth/utils/authType";
// import useFollow from "../hooks/useFollow";
// import FollowUserCard from "../components/FollowUserCard";

// const Follow = () => {
//   const { username } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { handleGetFollowers, handleGetFollowing } = useFollow();

//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);

//   const isFollowers = location.pathname.includes("/followers");

//   useEffect(() => {
//     if (!username) return;

//     const fetchUsers = async () => {
//       try {
//         setLoading(true);

//         const data = isFollowers
//           ? await handleGetFollowers(username)
//           : await handleGetFollowing(username);

//         setUsers(data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [username, isFollowers]);

//   const title = isFollowers ? "Followers" : "Following";

//   return (
//     <main className="min-h-screen px-4 pt-6 pb-24">
//       <div className="mx-auto max-w-xl">
//         {/* Header */}
//         <div className="mb-5 flex items-center gap-3">
//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#BDB3B8] transition hover:bg-white/[0.07] hover:text-white"
//           >
//             <ArrowLeft size={19} />
//           </button>

//           <div>
//             <h1 className="text-xl font-semibold text-[#F8F3F6]">{title}</h1>

//             <p className="text-xs text-[#756B72]">@{username}</p>
//           </div>
//         </div>

//         {/* Loading */}
//         {loading ? (
//           <div className="space-y-3">
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div
//                 key={item}
//                 className="flex animate-pulse items-center gap-4 rounded-2xl bg-white/[0.025] p-4"
//               >
//                 <div className="h-12 w-12 rounded-full bg-white/5" />

//                 <div className="flex-1 space-y-2">
//                   <div className="h-4 w-32 rounded bg-white/5" />
//                   <div className="h-3 w-48 rounded bg-white/[0.03]" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : users.length > 0 ? (
//           <div className="space-y-3">
//             {users.map((user) => (
//               <FollowUserCard key={user._id} user={user} />
//             ))}
//           </div>
//         ) : (
//           <div className="rounded-3xl border border-white/[0.06] bg-white/[0.025] px-6 py-14 text-center">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7A8BD]/10 text-[#E7A8BD]">
//               <Users size={24} />
//             </div>

//             <h2 className="mt-4 font-semibold text-[#F3EDF0]">
//               {isFollowers ? "No followers yet" : "Not following anyone"}
//             </h2>

//             <p className="mt-2 text-sm text-[#756B72]">
//               {isFollowers
//                 ? "When people follow this account, they'll appear here."
//                 : "Accounts this user follows will appear here."}
//             </p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default Follow;

import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";
import type { User } from "../../auth/utils/authType";
import FollowUserCard from "../components/FollowUserCard";
import useFollow from "../hooks/useFollow";

type Tab = "followers" | "following";

const FollowPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { handleGetFollowers, handleGetFollowing } = useFollow();

  const [activeTab, setActiveTab] = useState<Tab>("followers");

  const [followers, setFollowers] = useState<User[]>([]);
  const [following, setFollowing] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.username) return;

    const fetchFollowData = async () => {
      try {
        setLoading(true);

        const [followersData, followingData] = await Promise.all([
          handleGetFollowers(user.username),
          handleGetFollowing(user.username),
        ]);

        setFollowers(followersData);
        setFollowing(followingData);
      } catch (error) {
        console.error("Failed to fetch follow data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowData();
  }, [user?.username]);

  const activeUsers = activeTab === "followers" ? followers : following;

  return (
    <main className="min-h-screen px-4 pt-6 pb-24 sm:px-6">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#E7A8BD] uppercase">
            Your Network
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#F8F3F6]">
            Connections
          </h1>

          <p className="mt-1 text-sm text-[#756B72]">
            Manage the people you follow and the people following you.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-5 rounded-2xl border border-white/[0.06] bg-[#151116] p-1">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("followers")}
              className={`relative rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                activeTab === "followers"
                  ? "bg-[#E7A8BD] text-[#170F13] shadow-[0_6px_20px_rgba(231,168,189,0.12)]"
                  : "text-[#8E858B] hover:bg-white/[0.04] hover:text-[#F3EDF0]"
              }`}
            >
              Followers
              <span
                className={`ml-2 ${
                  activeTab === "followers"
                    ? "text-[#170F13]/70"
                    : "text-[#756B72]"
                }`}
              >
                {followers.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("following")}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                activeTab === "following"
                  ? "bg-[#E7A8BD] text-[#170F13] shadow-[0_6px_20px_rgba(231,168,189,0.12)]"
                  : "text-[#8E858B] hover:bg-white/[0.04] hover:text-[#F3EDF0]"
              }`}
            >
              Following
              <span
                className={`ml-2 ${
                  activeTab === "following"
                    ? "text-[#170F13]/70"
                    : "text-[#756B72]"
                }`}
              >
                {following.length}
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex animate-pulse items-center gap-4 rounded-2xl border border-white/[0.05] bg-[#151116] p-4"
              >
                <div className="h-12 w-12 rounded-full bg-white/[0.06]" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 rounded bg-white/[0.06]" />
                  <div className="h-3 w-48 rounded bg-white/[0.035]" />
                </div>
              </div>
            ))}
          </div>
        ) : activeUsers.length > 0 ? (
          <div className="space-y-3">
            {activeUsers.map((person) => (
              <FollowUserCard key={person._id} user={person} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/[0.06] bg-[#151116] px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7A8BD]/10 text-[#E7A8BD]">
              <Users size={24} />
            </div>

            <h2 className="mt-4 font-semibold text-[#F3EDF0]">
              {activeTab === "followers"
                ? "No followers yet"
                : "You're not following anyone"}
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#756B72]">
              {activeTab === "followers"
                ? "When someone follows you, they'll appear here."
                : "People you follow will appear here."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default FollowPage;
