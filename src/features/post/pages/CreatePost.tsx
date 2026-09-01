import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";

import ImageDropzone from "../components/ImageDropzone";
import {
  createPostSchema,
  type CreatePostSchemaType,
} from "../utils/zodSchema";
import usePost from "../hooks/usePost";

const CreatePost = () => {
  const { handleCreatePost } = usePost();
  const navigate = useNavigate();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostSchemaType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      caption: "",
      images: [],
    },
  });

  const images = watch("images");
  const caption = watch("caption");

  const handlePost = async (data: CreatePostSchemaType) => {
    const formData = new FormData();

    formData.append("caption", data.caption);

    data.images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const res = await handleCreatePost(formData);

      toast.success(res.message);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? "Failed to create post");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7A8BD]/10 ring-1 ring-[#E7A8BD]/20">
              <ImagePlus size={18} className="text-[#E7A8BD]" />
            </div>

            <span className="text-xs font-medium tracking-[0.18em] text-[#E7A8BD] uppercase">
              Create
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[#F8F3F6] sm:text-4xl">
            Share something
          </h1>

          <p className="mt-2 text-sm text-[#756B72]">
            Share a moment, thought, or story with your community.
          </p>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-[28px] bg-[#151116] shadow-[0_25px_80px_rgba(0,0,0,0.28)] ring-1 ring-white/5">
          {/* Top accent */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-[#E7A8BD]/40 to-transparent" />

          <form
            onSubmit={handleSubmit(handlePost)}
            className="space-y-6 p-5 sm:p-7"
          >
            {/* Caption */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-[#D8CDD2]">
                  Caption
                </label>

                <span
                  className={`text-xs ${
                    (caption?.length || 0) > 270
                      ? "text-[#E7A8BD]"
                      : "text-[#625A60]"
                  }`}
                >
                  {caption?.length || 0}/300
                </span>
              </div>

              <textarea
                {...register("caption")}
                rows={6}
                maxLength={300}
                placeholder="What's on your mind?"
                className="w-full resize-none rounded-2xl border border-white/[0.07] bg-[#0F0C10] px-4 py-4 text-sm leading-6 text-[#F3EDF0] transition outline-none placeholder:text-[#514A4F] focus:border-[#E7A8BD]/40 focus:ring-4 focus:ring-[#E7A8BD]/5"
              />

              {errors.caption?.message && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.caption.message}
                </p>
              )}
            </div>

            {/* Images */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-[#D8CDD2]">
                  Photos
                </label>

                <span className="text-xs text-[#625A60]">
                  {images?.length || 0}/5
                </span>
              </div>

              <ImageDropzone
                images={images}
                onChange={(files) =>
                  setValue("images", files, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              />

              {errors.images?.message && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.images.message}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Bottom actions */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#81777D] transition hover:bg-white/4 hover:text-[#C8BDC3]"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#E7A8BD] px-6 py-2.5 text-sm font-semibold text-[#24171D] shadow-[0_8px_28px_rgba(231,168,189,0.14)] transition-all duration-200 hover:bg-[#F2C6D5] hover:shadow-[0_10px_32px_rgba(231,168,189,0.22)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#24171D]/30 border-t-[#24171D]" />
                    Publishing...
                  </>
                ) : (
                  <>
                    Publish
                    <Send
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Hint */}
        <p className="mt-4 text-center text-[11px] text-[#514A4F]">
          You can upload up to 5 images per post.
        </p>
      </div>
    </main>
  );
};

export default CreatePost;
