import { ArrowLeft, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import useProfile from "../hooks/useProfile";

type EditProfileForm = {
  username: string;
  bio: string;
};

const EditProfile = () => {
  const navigate = useNavigate();

  const { handleUpdateUser } = useProfile();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileForm>({
    defaultValues: {
      username: "",
      bio: "",
    },
  });

  const onSubmit = async (data: EditProfileForm) => {
    try {
      const response = await handleUpdateUser(data);

      if (!response?.success) {
        toast.error(response?.message || "Failed to update profile");
        return;
      }

      toast.success(response.message || "Profile updated successfully");

      navigate("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <main className="mx-auto w-full max-w-160 px-4 py-6 sm:px-5 md:py-8">
      {/* Header */}
      <div className="mb-7 flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#81777E] transition hover:bg-white/[0.04] hover:text-[#F8F3F6]"
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1 className="text-xl font-semibold text-[#F8F3F6]">Edit Profile</h1>

          <p className="mt-1 text-sm text-[#81777E]">
            Update your profile information
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 rounded-2xl border border-white/[0.06] bg-[#151116] p-5 sm:p-6"
      >
        {/* Username */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#D8D0D5]">
            Username
          </label>

          <input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Username cannot exceed 30 characters",
              },
            })}
            placeholder="Enter username"
            className="h-11 w-full rounded-xl border border-white/[0.08] bg-[#0F0B0E] px-4 text-sm text-[#F8F3F6] outline-none placeholder:text-[#625A60] focus:border-[#E7A8BD]/40"
          />

          {errors.username && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#D8D0D5]">
            Bio
          </label>

          <textarea
            {...register("bio", {
              maxLength: {
                value: 160,
                message: "Bio cannot exceed 160 characters",
              },
            })}
            rows={5}
            placeholder="Tell people about yourself..."
            className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#0F0B0E] px-4 py-3 text-sm leading-6 text-[#F8F3F6] outline-none placeholder:text-[#625A60] focus:border-[#E7A8BD]/40"
          />

          {errors.bio && (
            <p className="mt-1.5 text-xs text-red-400">{errors.bio.message}</p>
          )}
        </div>

        {/* Save */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#E7A8BD] text-sm font-semibold text-[#170F13] transition hover:bg-[#edb4c7] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={17} />

          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </main>
  );
};

export default EditProfile;
