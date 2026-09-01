import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../../../app/app.store";
import useFollow from "../../follow/hooks/useFollow";
import ProfilePosts from "../components/ProfilePosts";
import PublicProfileHeader from "../components/PublicProfileHeader";
import useProfile from "../hooks/useProfile";

const PublicProfilePage = () => {
  const { username } = useParams();

  const { user, posts, postsCount } = useSelector(
    (state: RootState) => state.profile,
  );

  const { user: loggedInUser } = useSelector((state: RootState) => state.auth);

  const { handleGetProfile } = useProfile();

  const { handleGetFollowStatus, handleGetFollowCounts } = useFollow();

  useEffect(() => {
    if (!username) return;

    handleGetProfile(username);

    handleGetFollowStatus(username);

    handleGetFollowCounts(username);
  }, [username]);

  /* Loading */

  if (!user) {
    return (
      <div className="min-h-[70vh] px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* Profile skeleton */}
          <div className="animate-pulse rounded-[26px] bg-[#151116] p-7 ring-1 ring-white/4.5 sm:p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="h-32 w-32 shrink-0 rounded-full bg-white/5" />

              <div className="w-full space-y-3 text-center md:text-left">
                <div className="mx-auto h-7 w-40 rounded-lg bg-white/5 md:mx-0" />

                <div className="mx-auto h-4 w-64 rounded-lg bg-white/[0.035] md:mx-0" />

                <div className="mx-auto h-4 w-20 rounded-lg bg-white/[0.035] md:mx-0" />

                <div className="mx-auto h-10 w-28 rounded-xl bg-white/5 md:mx-0" />
              </div>
            </div>
          </div>

          {/* Posts skeleton */}
          <div className="mt-8">
            <div className="mb-4 h-6 w-20 animate-pulse rounded-lg bg-white/5" />

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square animate-pulse rounded-[14px] bg-[#151116] ring-1 ring-white/4.5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isCurrentUser = loggedInUser?._id === user?._id;

  /* Page */

  return (
    <main className="min-h-screen px-4 pt-6 pb-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Profile Header */}
        <PublicProfileHeader
          user={user}
          postsCount={postsCount}
          isCurrentUser={isCurrentUser}
        />

        {/* Posts */}
        <ProfilePosts posts={posts} />
      </div>
    </main>
  );
};

export default PublicProfilePage;
