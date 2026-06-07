import { z } from "zod";

export const createPostSchema = z.object({
  caption: z.string().max(300, "Caption must be less than 300 characters"),

  image: z
    .instanceof(File, {
      message: "Image is required",
    })
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      "Image must be less than 5MB",
    ),
});

export const commentSchema = z.object({
  comment: z
    .string()
    .trim()
    .min(1, "Comment is required")
    .max(200, "Maximum 200 characters"),
});

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;
export type CommentSchemaType = z.infer<typeof commentSchema>;
