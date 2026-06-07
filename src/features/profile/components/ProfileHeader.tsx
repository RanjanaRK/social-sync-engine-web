import { UserPlus } from "lucide-react";

const ProfileHeader = () => {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1b2a]/80 p-5 backdrop-blur-xl md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        {/* Avatar */}
        <div className="flex justify-center md:block">
          <img
            src="https://i.pravatar.cc/300"
            alt="profile"
            className="h-28 w-28 rounded-full border-4 border-white/10 object-cover md:h-36 md:w-36"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-black text-white md:text-3xl">
            Sparkle K
          </h1>

          <p className="mt-1 text-gray-400">@sparklek</p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
            Full Stack Developer • MERN Stack • Building SocialSync 🚀
          </p>

          {/* Stats */}
          <div className="mt-5 flex justify-center gap-8 md:justify-start">
            <div>
              <h3 className="text-xl font-bold text-white">12</h3>
              <p className="text-sm text-gray-400">Posts</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">1.2K</h3>
              <p className="text-sm text-gray-400">Followers</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">245</h3>
              <p className="text-sm text-gray-400">Following</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-center gap-3 md:justify-start">
            <button className="rounded-2xl bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-600">
              Edit Profile
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-white transition hover:bg-white/10">
              <span className="flex items-center gap-2">
                <UserPlus size={18} />
                Follow
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
