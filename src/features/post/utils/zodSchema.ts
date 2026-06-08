import { z } from "zod";

export const createPostSchema = z.object({
  caption: z.string().max(300, "Caption must be less than 300 characters"),

  images: z
    .array(z.instanceof(File))
    .min(1, "At least one image is required")
    .max(5, "Maximum 5 images"),
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
