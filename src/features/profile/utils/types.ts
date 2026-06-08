import type { User } from "../../auth/utils/authType";
import type { Post } from "../../post/utils/types";

export interface ProfileResponse {
  success: true;
  message: string;
  data: {
    user: User;
    posts: Post[];
    postsCount: number;
  };
}
