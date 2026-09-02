const PostSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-[26px] bg-[#151116] ring-1 ring-white/4.5">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <div className="h-10 w-10 animate-pulse rounded-full bg-white/5" />

        <div className="flex-1 space-y-2">
          <div className="h-3.5 w-28 animate-pulse rounded bg-white/5" />
          <div className="h-2.5 w-20 animate-pulse rounded bg-white/[0.035]" />
        </div>

        <div className="h-7 w-7 animate-pulse rounded-full bg-white/5" />
      </div>

      {/* Image */}
      <div className="aspect-square w-full animate-pulse bg-white/[0.035]" />

      {/* Actions */}
      <div className="flex items-center gap-5 px-4 pt-4 sm:px-5">
        <div className="h-6 w-6 animate-pulse rounded-full bg-white/5" />
        <div className="h-6 w-6 animate-pulse rounded-full bg-white/5" />
        <div className="h-6 w-6 animate-pulse rounded-full bg-white/5" />
      </div>

      {/* Likes */}
      <div className="px-4 pt-3 sm:px-5">
        <div className="h-3.5 w-20 animate-pulse rounded bg-white/5" />
      </div>

      {/* Caption */}
      <div className="space-y-2 px-4 pt-3 pb-5 sm:px-5">
        <div className="h-3 w-full animate-pulse rounded bg-white/[0.035]" />
        <div className="h-3 w-3/4 animate-pulse rounded bg-white/[0.035]" />
      </div>
    </div>
  );
};

export default PostSkeleton;
