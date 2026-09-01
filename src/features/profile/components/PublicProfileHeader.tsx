import { Pencil } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import type { User } from "../../auth/utils/authType";
import FollowButton from "../../follow/components/FollowButton";
import FollowStats from "../../follow/components/FollowStats";
import useFollow from "../../follow/hooks/useFollow";
import useProfile from "../hooks/useProfile";

type Props = {
  user: User;
  postsCount: number;
  isCurrentUser?: boolean;
};

const PublicProfileHeader = ({
  user,
  postsCount,
  isCurrentUser = false,
}: Props) => {
  const { username, profileImage, bio } = user;

  const { handleUpdateProfileImage } = useProfile();

  const { handleFollowUser, handleUnfollowUser } = useFollow();

  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = async (files: File[]) => {
    const file = files[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    await handleUpdateProfileImage(file);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  //  Follow user
  const handleFollow = async () => {
    await handleFollowUser(user.username);
  };

  //  Unfollow user
  const handleUnfollow = async () => {
    await handleUnfollowUser(user.username);
  };

  return (
    <section className="overflow-hidden rounded-[26px] bg-[#151116] px-5 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.22)] ring-1 ring-white/4.5 sm:px-8 sm:py-8">
      {/* Top subtle accent */}
      <div className="mb-7 h-px w-full bg-linear-to-r from-transparent via-[#E7A8BD]/20 to-transparent" />

      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
        {/* Profile Image */}

        <div {...getRootProps()} className="relative shrink-0">
          <input {...getInputProps()} />

          {/* Pink gradient ring */}
          <div className="rounded-full bg-linear-to-br from-[#E7A8BD] via-[#C77C96] to-[#6D3C50] p-0.5 shadow-[0_10px_35px_rgba(231,168,189,0.10)]">
            <img
              src={preview || profileImage}
              alt={username}
              className="h-28 w-28 rounded-full border-[3px] border-[#151116] object-cover sm:h-32 sm:w-32"
            />
          </div>

          {/* Edit image */}
          {isCurrentUser && (
            <button
              type="button"
              onClick={open}
              className="absolute right-1 bottom-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#151116] bg-[#E7A8BD] text-[#170F13] shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-105 hover:bg-[#F2C6D5]"
              aria-label="Change profile picture"
            >
              <Pencil size={15} strokeWidth={2} />
            </button>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-semibold tracking-[-0.035em] text-[#F8F3F6] sm:text-3xl">
              {username}
            </h1>

            {bio && (
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#8E858B]">
                {bio}
              </p>
            )}
          </div>

          {/* Stats */}

          <div className="mt-5 flex justify-center gap-8 md:justify-start">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-[#F3EDF0]">
                {postsCount}
              </p>

              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-[#756B72] uppercase">
                {postsCount === 1 ? "Post" : "Posts"}
              </p>
            </div>
          </div>

          {/* Action */}

          <div className="mt-5 flex justify-center md:justify-start">
            {isCurrentUser ? (
              <button
                type="button"
                className="rounded-2xl bg-[#E7A8BD] px-5 py-2.5 font-semibold text-[#170F13] transition hover:bg-[#dda0b6]"
              >
                Edit Profile
              </button>
            ) : (
              <FollowButton
                onFollow={handleFollow}
                onUnfollow={handleUnfollow}
              />
            )}
          </div>

          <FollowStats postsCount={postsCount} />
        </div>
      </div>
    </section>
  );
};

export default PublicProfileHeader;
