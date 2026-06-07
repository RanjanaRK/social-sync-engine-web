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

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;
