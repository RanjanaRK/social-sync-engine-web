import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";
import ProfilePosts from "../components/ProfilePosts";
import PublicProfileHeader from "../components/PublicProfileHeader";
import useProfile from "../hooks/useProfile";

const Profile = () => {
  const { user, posts, postsCount } = useSelector(
    (state: RootState) => state.profile,
  );

  const { handleGetCurrentProfile } = useProfile();

  useEffect(() => {
    handleGetCurrentProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-4 pt-6 pb-24 md:pb-8">
        <PublicProfileHeader
          user={user}
          postsCount={postsCount}
          isCurrentUser={true}
        />

        <div className="mt-8">
          <ProfilePosts posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Profile;
