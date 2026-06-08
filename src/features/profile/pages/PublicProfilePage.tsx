// import { useParams } from "react-router";
// import PublicProfileHeader from "../components/PublicProfileHeader";
// import ProfilePosts from "../components/ProfilePosts";
// import { useSelector } from "react-redux";
// import type { RootState } from "../../../app/app.store";
// import useProfile from "../hooks/useProfile";
// import { useEffect } from "react";

// const PublicProfilePage = () => {
//   const { username } = useParams();
//   const { user, posts, postsCount } = useSelector(
//     (state: RootState) => state.profile,
//   );

//   const { handleGetProfile } = useProfile();

//   useEffect(() => {
//     handleGetProfile(username || "");
//   }, [username]);

//   return (
//     <div className="mx-auto max-w-5xl px-4 pt-6 pb-24">
//       <PublicProfileHeader
//         username={user?.username}
//         bio="Frontend Developer | React Enthusiast"
//         avatar="https://i.pravatar.cc/300"
//         posts={24}
//         followers={1250}
//         following={200}
//         isFollowing={false}
//       />

//       <div className="mt-8">
//         {posts.map((post) => (
//           <ProfilePosts key={post._id} posts={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PublicProfilePage;

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
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <PublicProfileHeader user={user} postsCount={postsCount} />

//       <div className="mt-8">
//         {posts.map((post) => (
//           <ProfilePosts key={post._id} posts={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PublicProfilePage;

import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import type { RootState } from "../../../app/app.store";

import useProfile from "../hooks/useProfile";

import PublicProfileHeader from "../components/PublicProfileHeader";
import ProfilePosts from "../components/ProfilePosts";

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

  if (!user) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6">
      <PublicProfileHeader user={user} postsCount={postsCount} />

      <div className="grid gap-6">
        <div className="mt-8">
          {posts.length > 0 ? (
            <ProfilePosts posts={posts} />
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#132238] p-10 text-center">
              <p className="text-gray-400">No posts yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicProfilePage;
