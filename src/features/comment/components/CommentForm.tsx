// import { zodResolver } from "@hookform/resolvers/zod";
// import { SendHorizontal } from "lucide-react";
// import { useForm } from "react-hook-form";
// import {
//   commentSchema,
//   type CommentSchemaType,
// } from "../../post/utils/zodSchema";

// type CommentFormProps = {
//   onSubmitComment: (comment: string) => Promise<void> | void;

//   isLoading?: boolean;
// };

// const CommentForm = ({
//   onSubmitComment,
//   isLoading = false,
// }: CommentFormProps) => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { isSubmitting },
//   } = useForm<CommentSchemaType>({
//     resolver: zodResolver(commentSchema),
//   });

//   const onSubmit = async (data: CommentSchemaType) => {
//     await onSubmitComment(data.comment);

//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
//       <input
//         {...register("comment", {
//           required: true,
//         })}
//         type="text"
//         placeholder="Write a comment..."
//         className="flex-1 rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white outline-none placeholder:text-gray-500"
//       />

//       <button
//         type="submit"
//         disabled={isLoading || isSubmitting}
//         className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white transition hover:bg-blue-600 disabled:opacity-50"
//       >
//         <SendHorizontal size={18} />
//       </button>
//     </form>
//   );
// };

// export default CommentForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  commentSchema,
  type CommentSchemaType,
} from "../../post/utils/zodSchema";

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
  } = useForm<CommentSchemaType>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data: CommentSchemaType) => {
    await onSubmitComment(data.comment);
    reset();
  };

  const submitting = isLoading || isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      {/* Input */}
      <div className="relative flex-1">
        <input
          {...register("comment")}
          type="text"
          placeholder="Add a comment..."
          disabled={submitting}
          className="h-12 w-full rounded-xl bg-white/[0.025] px-4 pr-4 text-sm text-[#F3EDF0] ring-1 ring-white/[0.07] transition-all duration-200 outline-none placeholder:text-[#625A60] hover:ring-white/[0.11] focus:bg-white/[0.04] focus:ring-2 focus:ring-[#E7A8BD]/35 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {/* Send */}
      <button
        type="submit"
        disabled={submitting}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7A8BD] text-[#170F13] shadow-[0_6px_20px_rgba(231,168,189,0.10)] transition-all duration-200 hover:bg-[#F2C6D5] hover:shadow-[0_8px_25px_rgba(231,168,189,0.16)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Send comment"
      >
        <SendHorizontal size={18} strokeWidth={2} />
      </button>
    </form>
  );
};

export default CommentForm;
