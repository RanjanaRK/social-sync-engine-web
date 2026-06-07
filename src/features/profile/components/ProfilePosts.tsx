type Props = {
  posts: {
    id: string;
    image: string;
  }[];
};

const ProfilePosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-5 text-xl font-bold text-white">Posts</h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="group overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt=""
              className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfilePosts;
