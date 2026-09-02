const ProfileSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-6 pb-24 md:pb-8">
      {/* Profile header */}
      <div className="animate-pulse overflow-hidden rounded-[26px] bg-[#151116] px-5 py-7 ring-1 ring-white/4.5 sm:px-8 sm:py-8">
        <div className="mb-7 h-px w-full bg-white/5" />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          {/* Avatar */}
          <div className="h-28 w-28 shrink-0 rounded-full bg-white/5 sm:h-32 sm:w-32" />

          {/* Content */}
          <div className="w-full space-y-4 text-center md:text-left">
            <div className="mx-auto h-7 w-36 rounded-lg bg-white/5 md:mx-0" />

            <div className="mx-auto h-3 w-64 rounded bg-white/[0.035] md:mx-0" />

            <div className="mx-auto h-3 w-48 rounded bg-white/[0.035] md:mx-0" />

            {/* Stats */}
            <div className="flex justify-center gap-8 md:justify-start">
              <div className="space-y-2">
                <div className="mx-auto h-5 w-8 rounded bg-white/5 md:mx-0" />
                <div className="h-2.5 w-12 rounded bg-white/[0.035]" />
              </div>

              <div className="space-y-2">
                <div className="mx-auto h-5 w-8 rounded bg-white/5 md:mx-0" />
                <div className="h-2.5 w-16 rounded bg-white/[0.035]" />
              </div>

              <div className="space-y-2">
                <div className="mx-auto h-5 w-8 rounded bg-white/5 md:mx-0" />
                <div className="h-2.5 w-16 rounded bg-white/[0.035]" />
              </div>
            </div>

            {/* Button */}
            <div className="mx-auto h-10 w-28 rounded-xl bg-white/5 md:mx-0" />
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="mt-8">
        <div className="mb-5 h-5 w-20 rounded bg-white/5" />

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-[14px] bg-[#151116] ring-1 ring-white/4.5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
