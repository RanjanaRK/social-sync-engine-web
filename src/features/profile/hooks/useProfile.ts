// import { useDispatch } from "react-redux";
// import {
//   getCurrentProfile,
//   getPublicProfile,
//   searchUser,
//   updateProfileImage,
// } from "../service/profile.api";
// import { setProfile, updateProfileImageState } from "../state/profile.slice";

// const useProfile = () => {
//   const dispatch = useDispatch();

//   const handleGetProfile = async (username: string) => {
//     const data = await getPublicProfile(username);

//     dispatch(setProfile(data.data));

//     return data;
//   };

//   const handleGetCurrentProfile = async () => {
//     const data = await getCurrentProfile();
//     console.log(data);

//     dispatch(setProfile(data.data));

//     return data;
//   };

//   const handleUpdateProfileImage = async (file: File) => {
//     const res = await updateProfileImage(file);

//     dispatch(updateProfileImageState(res.data.profileImage));

//     return res;
//   };

//   const handleSearchProfile = async (username: string) => {
//     const res = await searchUser(username);

//     return res.data;
//   };

//   return {
//     handleGetProfile,
//     handleGetCurrentProfile,
//     handleUpdateProfileImage,
//     handleSearchProfile,
//   };
// };

// export default useProfile;

import { useDispatch } from "react-redux";

import {
  getCurrentProfile,
  getPublicProfile,
  searchUser,
  updateProfileImage,
  updateUser,
} from "../service/profile.api";

import {
  setProfile,
  setProfileLoading,
  updateProfileImageState,
} from "../state/profile.slice";

const useProfile = () => {
  const dispatch = useDispatch();

  // Public profile
  const handleGetProfile = async (username: string) => {
    try {
      dispatch(setProfileLoading(true));

      const data = await getPublicProfile(username);

      dispatch(setProfile(data.data));

      return data;
    } finally {
      dispatch(setProfileLoading(false));
    }
  };

  // Current user's profile
  const handleGetCurrentProfile = async () => {
    try {
      dispatch(setProfileLoading(true));

      const data = await getCurrentProfile();

      dispatch(setProfile(data.data));

      return data;
    } finally {
      dispatch(setProfileLoading(false));
    }
  };

  // Update profile image
  const handleUpdateProfileImage = async (file: File) => {
    const res = await updateProfileImage(file);

    dispatch(updateProfileImageState(res.data.profileImage));

    return res;
  };

  const handleUpdateUser = async (data: { username: string; bio: string }) => {
    try {
      const response = await updateUser(data);

      return response;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  };

  // Search users
  const handleSearchProfile = async (username: string) => {
    const res = await searchUser(username);

    return res.data;
  };

  return {
    handleGetProfile,
    handleGetCurrentProfile,
    handleUpdateProfileImage,
    handleUpdateUser,
    handleSearchProfile,
  };
};

export default useProfile;
