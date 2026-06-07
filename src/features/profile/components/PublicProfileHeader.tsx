import { UserPlus, UserCheck } from "lucide-react";

type Props = {
  username: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  posts: number;
  isFollowing: boolean;
};

const PublicProfileHeader = ({
  username,
  bio,
  avatar,
  followers,
  following,
  posts,
  isFollowing,
}: Props) => {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1b2a]/80 p-5 backdrop-blur-xl md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img
          src={avatar}
          alt={username}
          className="mx-auto h-28 w-28 rounded-full border-4 border-white/10 object-cover md:mx-0 md:h-36 md:w-36"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-black text-white">{username}</h1>

          <p className="mt-3 text-gray-300">{bio}</p>

          <div className="mt-5 flex justify-center gap-8 md:justify-start">
            <div>
              <h3 className="font-bold text-white">{posts}</h3>
              <p className="text-sm text-gray-400">Posts</p>
            </div>

            <div>
              <h3 className="font-bold text-white">{followers}</h3>
              <p className="text-sm text-gray-400">Followers</p>
            </div>

            <div>
              <h3 className="font-bold text-white">{following}</h3>
              <p className="text-sm text-gray-400">Following</p>
            </div>
          </div>

          <button
            className={`mt-6 rounded-2xl px-5 py-2.5 font-semibold transition ${
              isFollowing
                ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "bg-blue-700 text-white hover:bg-blue-600"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {isFollowing ? (
                <>
                  <UserCheck size={18} />
                  Following
                </>
              ) : (
                <>
                  <UserPlus size={18} />
                  Follow
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicProfileHeader;
