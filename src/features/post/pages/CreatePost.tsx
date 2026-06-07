import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import ImageDropzone from "../components/ImageDropzone";
import {
  createPostSchema,
  type CreatePostSchemaType,
} from "../utils/zodSchema";

const CreatePost = () => {
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
    },
  });

  const image = watch("image");
  const caption = watch("caption");

  const handleCreatePost = async (data: CreatePostSchemaType) => {
    const formData = new FormData();

    formData.append("caption", data.caption);
    formData.append("image", data.image);

    console.log("submit");
  };

  return (
    <div className="mx-auto mt-4 max-w-2xl p-4">
      <div className="rounded-4xl border border-white/10 bg-[#0d1b2a]/80 p-8 backdrop-blur-2xl">
        <h1 className="mb-6 text-3xl font-black text-white">Create Post</h1>

        <form onSubmit={handleSubmit(handleCreatePost)} className="space-y-5">
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
            image={image}
            onChange={(file) =>
              setValue("image", file, {
                shouldValidate: true,
              })
            }
          />

          <p className="text-sm text-red-400">{errors.image?.message}</p>

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
