import { useDispatch } from "react-redux";
import { getCurrentProfile, getPublicProfile } from "../service/profile.api";
import { setProfile } from "../state/profile.slice";

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
  return {
    handleGetProfile,
    handleGetCurrentProfile,
  };
};

export default useProfile;
