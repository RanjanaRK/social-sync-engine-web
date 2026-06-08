import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";
import ProfilePosts from "../components/ProfilePosts";
import PublicProfileHeader from "../components/PublicProfileHeader";
import useProfile from "../hooks/useProfile";
import usePost from "../../post/hooks/usePost";
import { toast } from "sonner";

const Profile = () => {
  const { user, posts, postsCount } = useSelector(
    (state: RootState) => state.profile,
  );
  const { handleDeletePost } = usePost();

  const { handleGetCurrentProfile } = useProfile();

  useEffect(() => {
    handleGetCurrentProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  // const { user } = useSelector((state: RootState) => state.auth);

  const handleDelete = async (postId: string) => {
    try {
      console.log("Component:", postId);
      const res = await handleDeletePost(postId);

      toast.success(res.message);
    } catch {
      toast.error("Failed to delete post");
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-4 pt-6 pb-24 md:pb-8">
        <PublicProfileHeader
          user={user}
          postsCount={postsCount}
          isCurrentUser={true}
        />

        <div className="mt-8">
          <ProfilePosts posts={posts} deleteHandle={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default Profile;
