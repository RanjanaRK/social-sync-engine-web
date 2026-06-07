import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";

type CommentFormData = {
  comment: string;
};

type CommentFormProps = {
  onSubmitComment: (comment: string) => Promise<void> | void;
  isLoading?: boolean;
};

const CommentForm = ({
  onSubmitComment,
  isLoading = false,
}: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CommentFormData>();

  const onSubmit = async (data: CommentFormData) => {
    await onSubmitComment(data.comment);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      <input
        {...register("comment", {
          required: true,
        })}
        type="text"
        placeholder="Write a comment..."
        className="flex-1 rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-400/40"
      />

      <button
        type="submit"
        disabled={isLoading || isSubmitting}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white transition hover:bg-blue-600 disabled:opacity-50"
      >
        <SendHorizontal size={18} />
      </button>
    </form>
  );
};

export default CommentForm;
