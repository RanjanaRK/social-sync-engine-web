import { UserPlus } from "lucide-react";
import type { User } from "../../auth/utils/authType";

type Props = {
  user: User;
  postsCount: number;
};

const PublicProfileHeader = ({ user, postsCount }: Props) => {
  const { username, profileImage, bio } = user;

  return (
    <section className="rounded-3xl border border-white/10 bg-[#132238] p-6">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <img
          src={profileImage}
          alt={username}
          className="h-32 w-32 rounded-full object-cover"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-black text-white">{username}</h1>
          <h3 className="text-3xl font-black text-white">{bio}</h3>

          <div className="mt-5 flex justify-center gap-8 md:justify-start">
            <div>
              <h3 className="font-bold text-white">{postsCount}</h3>

              <p className="text-sm text-gray-400">Posts</p>
            </div>
          </div>

          <button className="mt-6 rounded-2xl bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-600">
            <span className="flex items-center justify-center gap-2">
              <UserPlus size={18} />
              Follow
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicProfileHeader;
