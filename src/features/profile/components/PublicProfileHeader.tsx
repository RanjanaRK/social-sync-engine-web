// // import { UserPlus } from "lucide-react";
// // import type { User } from "../../auth/utils/authType";
// // import ProfileImageUpload from "./ProfileImageUpload";

// // type Props = {
// //   user: User;
// //   postsCount: number;
// //   isCurrentUser?: boolean;
// // };

// // const PublicProfileHeader = ({
// //   user,
// //   postsCount,
// //   isCurrentUser = false,
// // }: Props) => {
// //   const { username, profileImage, bio } = user;

// //   return (
// //     <section className="rounded-3xl border border-white/10 bg-[#132238] p-6">
// //       <div className="flex flex-col items-center gap-6 md:flex-row">
// //         <img
// //           src={profileImage}
// //           alt={username}
// //           className="h-32 w-32 rounded-full object-cover"
// //         />

// //         <ProfileImageUpload />

// //         <div className="flex-1 text-center md:text-left">
// //           <h1 className="text-3xl font-black text-white">{username}</h1>
// //           <h3 className="text-3xl font-black text-white">{bio}</h3>

// //           <div className="mt-5 flex justify-center gap-8 md:justify-start">
// //             <div>
// //               <h3 className="font-bold text-white">{postsCount}</h3>

// //               <p className="text-sm text-gray-400">Posts</p>
// //             </div>
// //           </div>

// //           <div className="mt-6">
// //             {isCurrentUser ? (
// //               <button className="rounded-2xl bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-600">
// //                 Edit Profile
// //               </button>
// //             ) : (
// //               <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10">
// //                 <span className="flex items-center gap-2">
// //                   <UserPlus size={18} />
// //                   Follow
// //                 </span>
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PublicProfileHeader;

// import { UserPlus, Pencil } from "lucide-react";
// import type { User } from "../../auth/utils/authType";
// import { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import useProfile from "../hooks/useProfile";

// type Props = {
//   user: User;
//   postsCount: number;
//   isCurrentUser?: boolean;
// };

// const PublicProfileHeader = ({
//   user,
//   postsCount,
//   isCurrentUser = false,
// }: Props) => {
//   const { username, profileImage, bio } = user;

//   const { handleUpdateProfileImage } = useProfile();

//   const [preview, setPreview] = useState<string | null>(null);

//   const onDrop = async (files: File[]) => {
//     const file = files[0];
//     if (!file) return;

//     setPreview(URL.createObjectURL(file));

//     await handleUpdateProfileImage(file);
//   };

//   const { getRootProps, getInputProps, open } = useDropzone({
//     onDrop,
//     accept: { "image/*": [] },
//     multiple: false,
//     noClick: true, // ❌ disable default click
//     noKeyboard: true,
//   });

//   return (
//     <section className="rounded-3xl border border-white/10 bg-[#132238] p-6">
//       <section className="flex flex-col items-center gap-6 md:flex-row">
//         <div {...getRootProps()} className="relative">
//           <input {...getInputProps()} />

//           <img
//             src={preview || profileImage}
//             className="h-32 w-32 rounded-full border border-white/20 object-cover"
//           />
//           {/* Pencil icon */}
//           {isCurrentUser && (
//             <button
//               onClick={open} // ✅ trigger dropzone manually
//               className="absolute right-2 bottom-2 rounded-full bg-black/70 p-2 text-white hover:bg-black"
//             >
//               <Pencil size={16} />
//             </button>
//           )}
//         </div>
//         {/* Info */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-3xl font-black text-white">{username}</h1>
//           <p className="text-gray-300">{bio}</p>

//           <div className="mt-5 flex justify-center gap-8 md:justify-start">
//             <div>
//               <h3 className="font-bold text-white">{postsCount}</h3>
//               <p className="text-sm text-gray-400">Posts</p>
//             </div>
//           </div>

//           <div className="mt-6">
//             {isCurrentUser ? (
//               <button className="rounded-2xl bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-600">
//                 Edit Profile
//               </button>
//             ) : (
//               <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10">
//                 <span className="flex items-center gap-2">
//                   <UserPlus size={18} />
//                   Follow
//                 </span>
//               </button>
//             )}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default PublicProfileHeader;

import { Pencil, UserPlus } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

import type { User } from "../../auth/utils/authType";
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

  return (
    <section className="overflow-hidden rounded-[26px] bg-[#151116] px-5 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.045] sm:px-8 sm:py-8">
      {/* Top subtle accent */}
      <div className="mb-7 h-px w-full bg-gradient-to-r from-transparent via-[#E7A8BD]/20 to-transparent" />

      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
        {/* ================================================= */}
        {/* Profile Image */}
        {/* ================================================= */}

        <div {...getRootProps()} className="relative shrink-0">
          <input {...getInputProps()} />

          {/* Pink gradient ring */}
          <div className="rounded-full bg-gradient-to-br from-[#E7A8BD] via-[#C77C96] to-[#6D3C50] p-[2px] shadow-[0_10px_35px_rgba(231,168,189,0.10)]">
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

        {/* ================================================= */}
        {/* Profile Info */}
        {/* ================================================= */}

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

          {/* ================================================= */}
          {/* Stats */}
          {/* ================================================= */}

          <div className="mt-5 flex justify-center gap-8 md:justify-start">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-[#F3EDF0]">
                {postsCount}
              </p>

              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-[#756B72] uppercase">
                Posts
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* Action */}
          {/* ================================================= */}

          <div className="mt-5 flex justify-center md:justify-start">
            {isCurrentUser ? (
              <button
                type="button"
                className="rounded-xl bg-[#E7A8BD] px-5 py-2.5 text-sm font-semibold text-[#170F13] shadow-[0_7px_22px_rgba(231,168,189,0.10)] transition-all duration-200 hover:bg-[#F2C6D5] hover:shadow-[0_9px_28px_rgba(231,168,189,0.16)] active:scale-[0.98]"
              >
                Edit profile
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-[#E7A8BD] px-5 py-2.5 text-sm font-semibold text-[#170F13] shadow-[0_7px_22px_rgba(231,168,189,0.10)] transition-all duration-200 hover:bg-[#F2C6D5] hover:shadow-[0_9px_28px_rgba(231,168,189,0.16)] active:scale-[0.98]"
              >
                <UserPlus size={16} />
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicProfileHeader;
