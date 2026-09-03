import type { User } from "../../auth/utils/authType";

export type ReactionType = "like" | "love" | "haha" | "wow" | "sad" | "angry";

export interface PostImage {
  url: string;
  fileId: string;
}
export type PostVisibility = "public" | "private" | "friends";

export interface Post {
  _id: string;
  caption: string;
  postImage: PostImage[];
  likesCount: number;
  isLiked: boolean;
  userReaction: ReactionType | null;
  isSaved: boolean;
  commentsCount: number;
  visibility: PostVisibility;
  user: User; // User ID
  createdAt: string;
  updatedAt: string;
}

export interface PostResponse {
  success: true;
  message: string;
  data: Post;
}

export interface PostListResponse {
  success: true;
  message: string;
  data: Post[];
}
