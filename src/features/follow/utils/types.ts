export interface FollowData {
  _id?: string;
  follower?: string;
  followee?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FollowResponse {
  success: true;
  message: string;
  data: FollowData;
}

export interface FollowStatusResponse {
  success: true;
  message?: string;
  data: {
    isFollowing: boolean;
  };
}

export interface FollowCountsResponse {
  success: true;
  message?: string;
  data: {
    followers: number;
    following: number;
  };
}

import type { User } from "../../auth/utils/authType";

export interface FollowUsersResponse {
  success: boolean;
  data: User[];
}
