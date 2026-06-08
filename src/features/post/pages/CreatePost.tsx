import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import ImageDropzone from "../components/ImageDropzone";
import {
  createPostSchema,
  type CreatePostSchemaType,
} from "../utils/zodSchema";
import usePost from "../hooks/usePost";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const { handleCreatePost } = usePost();
  const navigate = useNavigate();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
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
      }
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-2xl p-4">
      <div className="rounded-4xl border border-white/10 bg-[#0d1b2a]/80 p-8 backdrop-blur-2xl">
        <h1 className="mb-6 text-3xl font-black text-white">Create Post</h1>

        <form onSubmit={handleSubmit(handlePost)} className="space-y-5">
          <div>
            <textarea
              {...register("caption")}
              rows={5}
              placeholder="What's happening?"
              className="w-full resize-none rounded-3xl border border-white/10 bg-[#132238] p-4 text-white outline-none"
            />

            <div className="mt-2 flex justify-between">
              <p className="text-sm text-red-400">{errors.caption?.message}</p>

              <p className="text-sm text-gray-400">
                {caption?.length || 0}/300
              </p>
            </div>
          </div>

          <ImageDropzone
            images={images}
            onChange={(files) =>
              setValue("images", files, {
                shouldValidate: true,
              })
            }
          />

          <p className="text-sm text-red-400">{errors.images?.message}</p>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-700 py-3 font-bold text-white transition hover:bg-blue-600"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
