import type { User } from "../../auth/utils/authType";

export interface Comment {
  _id: string;
  content: string;
  createdAt: string;

  user: User;
}

export interface CommentResponse {
  success: boolean;
  message: string;
  data: Comment[];
}
