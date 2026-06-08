// import { UserPlus } from "lucide-react";
// import type { User } from "../../auth/utils/authType";
// import ProfileImageUpload from "./ProfileImageUpload";

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

//   return (
//     <section className="rounded-3xl border border-white/10 bg-[#132238] p-6">
//       <div className="flex flex-col items-center gap-6 md:flex-row">
//         <img
//           src={profileImage}
//           alt={username}
//           className="h-32 w-32 rounded-full object-cover"
//         />

//         <ProfileImageUpload />

//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-3xl font-black text-white">{username}</h1>
//           <h3 className="text-3xl font-black text-white">{bio}</h3>

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
//       </div>
//     </section>
//   );
// };

// export default PublicProfileHeader;

import { UserPlus, Pencil } from "lucide-react";
import type { User } from "../../auth/utils/authType";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
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
    accept: { "image/*": [] },
    multiple: false,
    noClick: true, // ❌ disable default click
    noKeyboard: true,
  });

  return (
    <section className="rounded-3xl border border-white/10 bg-[#132238] p-6">
      <section className="flex flex-col items-center gap-6 md:flex-row">
        <div {...getRootProps()} className="relative">
          <input {...getInputProps()} />

          <img
            src={preview || profileImage}
            className="h-32 w-32 rounded-full border border-white/20 object-cover"
          />
          {/* Pencil icon */}
          {isCurrentUser && (
            <button
              onClick={open} // ✅ trigger dropzone manually
              className="absolute right-2 bottom-2 rounded-full bg-black/70 p-2 text-white hover:bg-black"
            >
              <Pencil size={16} />
            </button>
          )}
        </div>
        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-black text-white">{username}</h1>
          <p className="text-gray-300">{bio}</p>

          <div className="mt-5 flex justify-center gap-8 md:justify-start">
            <div>
              <h3 className="font-bold text-white">{postsCount}</h3>
              <p className="text-sm text-gray-400">Posts</p>
            </div>
          </div>

          <div className="mt-6">
            {isCurrentUser ? (
              <button className="rounded-2xl bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-600">
                Edit Profile
              </button>
            ) : (
              <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10">
                <span className="flex items-center gap-2">
                  <UserPlus size={18} />
                  Follow
                </span>
              </button>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PublicProfileHeader;
