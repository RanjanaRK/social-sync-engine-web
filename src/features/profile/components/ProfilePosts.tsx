import type { Post } from "../../post/utils/types";

type Props = {
  posts: Post[];
};

const ProfilePosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-white">Posts</h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id} className="group overflow-hidden rounded-2xl">
            <img
              src={post.postImage[0]?.url}
              alt={post.caption}
              className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfilePosts;
