import { useDispatch } from "react-redux";
import { getPublicProfile } from "../service/profile.api";
import { setProfile } from "../state/profile.slice";

const useProfile = () => {
  const dispatch = useDispatch();

  const handleGetProfile = async (username: string) => {
    const data = await getPublicProfile(username);

    dispatch(setProfile(data.data));

    return data;
  };

  return {
    handleGetProfile,
  };
};

export default useProfile;
