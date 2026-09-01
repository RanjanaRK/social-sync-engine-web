// // import { useParams } from "react-router";
// // import PublicProfileHeader from "../components/PublicProfileHeader";
// // import ProfilePosts from "../components/ProfilePosts";
// // import { useSelector } from "react-redux";
// // import type { RootState } from "../../../app/app.store";
// // import useProfile from "../hooks/useProfile";
// // import { useEffect } from "react";

// // const PublicProfilePage = () => {
// //   const { username } = useParams();
// //   const { user, posts, postsCount } = useSelector(
// //     (state: RootState) => state.profile,
// //   );

// //   const { handleGetProfile } = useProfile();

// //   useEffect(() => {
// //     handleGetProfile(username || "");
// //   }, [username]);

// //   return (
// //     <div className="mx-auto max-w-5xl px-4 pt-6 pb-24">
// //       <PublicProfileHeader
// //         username={user?.username}
// //         bio="Frontend Developer | React Enthusiast"
// //         avatar="https://i.pravatar.cc/300"
// //         posts={24}
// //         followers={1250}
// //         following={200}
// //         isFollowing={false}
// //       />

// //       <div className="mt-8">
// //         {posts.map((post) => (
// //           <ProfilePosts key={post._id} posts={post} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PublicProfilePage;

// // import { useEffect } from "react";
// // import { useParams } from "react-router";
// // import { useSelector } from "react-redux";

// // import type { RootState } from "../../../app/app.store";
// // import useProfile from "../hooks/useProfile";

// // import PublicProfileHeader from "../components/PublicProfileHeader";
// // import ProfilePosts from "../components/ProfilePosts";

// // const PublicProfilePage = () => {
// //   const { username } = useParams();

// //   const { user, posts, postsCount } = useSelector(
// //     (state: RootState) => state.profile,
// //   );

// //   const { handleGetProfile } = useProfile();

// //   useEffect(() => {
// //     if (!username) return;

// //     handleGetProfile(username);
// //   }, [username]);

// //   if (!user) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <PublicProfileHeader user={user} postsCount={postsCount} />

// //       <div className="mt-8">
// //         {posts.map((post) => (
// //           <ProfilePosts key={post._id} posts={post} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PublicProfilePage;

// import { useEffect } from "react";
// import { useParams } from "react-router";
// import { useSelector } from "react-redux";

// import type { RootState } from "../../../app/app.store";

// import useProfile from "../hooks/useProfile";

// import PublicProfileHeader from "../components/PublicProfileHeader";
// import ProfilePosts from "../components/ProfilePosts";

// const PublicProfilePage = () => {
//   const { username } = useParams();

//   const { user, posts, postsCount } = useSelector(
//     (state: RootState) => state.profile,
//   );

//   const { handleGetProfile } = useProfile();

//   useEffect(() => {
//     if (!username) return;

//     handleGetProfile(username);
//   }, [username]);

//   if (!user) {
//     return (
//       <div className="flex justify-center py-20">
//         <p className="text-white">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-5xl space-y-8 px-4 py-6">
//       <PublicProfileHeader user={user} postsCount={postsCount} />

//       <div className="grid gap-6">
//         <div className="mt-8">
//           {posts.length > 0 ? (
//             <ProfilePosts posts={posts} />
//           ) : (
//             <div className="rounded-3xl border border-white/10 bg-[#132238] p-10 text-center">
//               <p className="text-gray-400">No posts yet</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PublicProfilePage;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import type { RootState } from "../../../app/app.store";

import PublicProfileHeader from "../components/PublicProfileHeader";
import ProfilePosts from "../components/ProfilePosts";
import useProfile from "../hooks/useProfile";

const PublicProfilePage = () => {
  const { username } = useParams();

  const { user, posts, postsCount } = useSelector(
    (state: RootState) => state.profile,
  );

  const { handleGetProfile } = useProfile();

  useEffect(() => {
    if (!username) return;

    handleGetProfile(username);
  }, [username]);

  /* ===================================================== */
  /* Loading */
  /* ===================================================== */

  if (!user) {
    return (
      <div className="min-h-[70vh] px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* Profile skeleton */}
          <div className="animate-pulse rounded-[26px] bg-[#151116] p-7 ring-1 ring-white/[0.045] sm:p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="h-32 w-32 shrink-0 rounded-full bg-white/[0.05]" />

              <div className="w-full space-y-3 text-center md:text-left">
                <div className="mx-auto h-7 w-40 rounded-lg bg-white/[0.05] md:mx-0" />

                <div className="mx-auto h-4 w-64 rounded-lg bg-white/[0.035] md:mx-0" />

                <div className="mx-auto h-4 w-20 rounded-lg bg-white/[0.035] md:mx-0" />

                <div className="mx-auto h-10 w-28 rounded-xl bg-white/[0.05] md:mx-0" />
              </div>
            </div>
          </div>

          {/* Posts skeleton */}
          <div className="mt-8">
            <div className="mb-4 h-6 w-20 animate-pulse rounded-lg bg-white/[0.05]" />

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square animate-pulse rounded-[14px] bg-[#151116] ring-1 ring-white/[0.045]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================================== */
  /* Page */
  /* ===================================================== */

  return (
    <main className="min-h-screen px-4 pt-6 pb-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Profile Header */}
        <PublicProfileHeader user={user} postsCount={postsCount} />

        {/* Posts */}
        <ProfilePosts posts={posts} />
      </div>
    </main>
  );
};

export default PublicProfilePage;
