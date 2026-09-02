import { useDispatch } from "react-redux";

import {
  followUser,
  getFollowCounts,
  getFollowers,
  getFollowing,
  getFollowStatus,
  removeFollower,
  unfollowUser,
} from "../service/follow.api";

import {
  setFollowCounts,
  setFollowLoading,
  setFollowStatus,
} from "../state/follow.slice";

const useFollow = () => {
  const dispatch = useDispatch();

  // FOLLOW
  const handleFollowUser = async (username: string) => {
    try {
      dispatch(setFollowLoading(true));

      const response = await followUser(username);

      // Change button immediately
      dispatch(setFollowStatus(true));

      // Get latest counts
      await handleGetFollowCounts(username);

      return response;
    } finally {
      dispatch(setFollowLoading(false));
    }
  };

  // UNFOLLOW
  const handleUnfollowUser = async (username: string) => {
    try {
      dispatch(setFollowLoading(true));

      const response = await unfollowUser(username);

      // Change button immediately
      dispatch(setFollowStatus(false));

      // Get latest counts
      await handleGetFollowCounts(username);

      return response;
    } finally {
      dispatch(setFollowLoading(false));
    }
  };

  // REMOVE FOLLOWER
  const handleRemoveFollower = async (username: string) => {
    try {
      dispatch(setFollowLoading(true));

      const response = await removeFollower(username);

      return response;
    } finally {
      dispatch(setFollowLoading(false));
    }
  };

  // FOLLOW STATUS
  const handleGetFollowStatus = async (username: string) => {
    const response = await getFollowStatus(username);

    dispatch(setFollowStatus(response.data.isFollowing));

    return response;
  };

  // FOLLOW COUNTS
  const handleGetFollowCounts = async (username: string) => {
    const response = await getFollowCounts(username);

    dispatch(
      setFollowCounts({
        followers: response.data.followers,
        following: response.data.following,
      }),
    );

    return response;
  };

  // FOLLOWERS
  const handleGetFollowers = async (username: string) => {
    const response = await getFollowers(username);

    return response.data;
  };

  // FOLLOWING
  const handleGetFollowing = async (username: string) => {
    const response = await getFollowing(username);

    return response.data;
  };

  return {
    handleFollowUser,
    handleUnfollowUser,
    handleRemoveFollower,
    handleGetFollowStatus,
    handleGetFollowCounts,
    handleGetFollowers,
    handleGetFollowing,
  };
};

export default useFollow;
