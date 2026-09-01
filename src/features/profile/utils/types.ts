import type { User } from "../../auth/utils/authType";
import type { Post, PostImage, PostVisibility } from "../../post/utils/types";

export interface ProfileResponse {
  success: true;
  message: string;
  data: {
    user: User;
    posts: Post[];
    postsCount: number;
  };
}

export interface ProfilePost {
  _id: string;
  caption: string;
  postImage: PostImage[];

  likesCount: number;
  commentsCount: number;

  visibility: PostVisibility;

  user: string; // User ID

  createdAt: string;
  updatedAt: string;
}

export interface ProfilePostsResponse {
  success: true;
  message: string;
  data: ProfilePost[];
}
export interface SearchResponse {
  success: true;
  message: string;
  data: User[];
}
