import { useDispatch } from "react-redux";
import { setUser } from "../../auth/state/auth.slice";
import { createPost, getAllPosts, likePost } from "../service/post.api";
import { setPosts } from "../state/post.slice";

const usePost = () => {
  const dispatch = useDispatch();

  const handleCreatePost = async (formData: FormData) => {
    const data = await createPost(formData);

    return data;
  };

  const handleGetAllPost = async () => {
    const data = await getAllPosts();

    dispatch(setPosts(data.data));

    return data;
  };

  const handleLikePost = async (postId: string, emoji: string = "like") => {
    const data = await likePost(postId, emoji);

    return data;
  };

  return { handleCreatePost, handleGetAllPost, handleLikePost };
};

export default usePost;
