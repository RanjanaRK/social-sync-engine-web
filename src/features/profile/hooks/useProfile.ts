import { useDispatch } from "react-redux";
import {
  getCurrentProfile,
  getPublicProfile,
  updateProfileImage,
} from "../service/profile.api";
import { setProfile, updateProfileImageState } from "../state/profile.slice";

const useProfile = () => {
  const dispatch = useDispatch();

  const handleGetProfile = async (username: string) => {
    const data = await getPublicProfile(username);

    dispatch(setProfile(data.data));

    return data;
  };

  const handleGetCurrentProfile = async () => {
    const data = await getCurrentProfile();

    dispatch(setProfile(data.data));

    return data;
  };

  const handleUpdateProfileImage = async (file: File) => {
    const res = await updateProfileImage(file);

    dispatch(updateProfileImageState(res.data.profileImage));

    return res;
  };

  return {
    handleGetProfile,
    handleGetCurrentProfile,
    handleUpdateProfileImage,
  };
};

export default useProfile;
