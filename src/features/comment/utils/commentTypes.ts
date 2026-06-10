import type { User } from "../../auth/utils/authType";

export interface Comment {
  _id: string;
  comment: string;
  createdAt: string;

  user: User;
}

export interface CommentResponse {
  success: boolean;
  message: string;
  data: Comment[];
}
