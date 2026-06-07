import ProfileHeader from "../components/ProfileHeader";
import ProfilePosts from "../components/ProfilePosts";

const Profile = () => {
  const posts = [
    {
      id: "1",
      image: "https://picsum.photos/id/10/600/600",
    },
    {
      id: "2",
      image: "https://picsum.photos/id/20/600/600",
    },
    {
      id: "3",
      image: "https://picsum.photos/id/30/600/600",
    },
    {
      id: "4",
      image: "https://picsum.photos/id/40/600/600",
    },
    {
      id: "5",
      image: "https://picsum.photos/id/50/600/600",
    },
  ];
  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-4 pt-6 pb-24 md:pb-8">
        <ProfileHeader />

        <div className="mt-8">
          <ProfilePosts posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Profile;
