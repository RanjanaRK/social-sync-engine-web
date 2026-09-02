import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../../../app/app.store";
import useFollow from "../../follow/hooks/useFollow";
import ProfilePosts from "../components/ProfilePosts";
import PublicProfileHeader from "../components/PublicProfileHeader";
import useProfile from "../hooks/useProfile";
import ProfileSkeleton from "../components/ProfileSkeleton";

const PublicProfilePage = () => {
  const { username } = useParams();

  const { user, posts, postsCount, isLoading } = useSelector(
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

  if (isLoading || !user) {
    return <ProfileSkeleton />;
  }

  const isCurrentUsername = loggedInUser?.username === user?.username;
  /* Page */

  return (
    <main className="min-h-screen px-4 pt-6 pb-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Profile Header */}
        <PublicProfileHeader
          user={user}
          postsCount={postsCount}
          isCurrentUser={isCurrentUsername}
        />

        {/* Posts */}
        <ProfilePosts posts={posts} />
      </div>
    </main>
  );
};

export default PublicProfilePage;
