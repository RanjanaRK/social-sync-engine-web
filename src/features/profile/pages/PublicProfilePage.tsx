import { useParams } from "react-router";
import PublicProfileHeader from "../components/PublicProfileHeader";
import ProfilePosts from "../components/ProfilePosts";

const PublicProfilePage = () => {
  const { userId } = useParams();

  console.log(userId);

  return (
    <div className="mx-auto max-w-5xl px-4 pt-6 pb-24">
      <PublicProfileHeader
        username="John Doe"
        bio="Frontend Developer | React Enthusiast"
        avatar="https://i.pravatar.cc/300"
        posts={24}
        followers={1250}
        following={200}
        isFollowing={false}
      />

      <div className="mt-8">
        <ProfilePosts
          posts={[
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
          ]}
        />
      </div>
    </div>
  );
};

export default PublicProfilePage;
