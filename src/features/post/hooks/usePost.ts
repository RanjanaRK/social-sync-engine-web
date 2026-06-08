import { useDispatch } from "react-redux";
import {
  createPost,
  deletePost,
  getAllPosts,
  likePost,
} from "../service/post.api";
import { setPosts } from "../state/post.slice";
import { removePost } from "../../profile/state/profile.slice";

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

  const handleDeletePost = async (postId: string) => {
    const data = await deletePost(postId);

    dispatch(removePost(postId));

    return data;
  };

  const handleLikePost = async (postId: string, emoji: string = "like") => {
    const data = await likePost(postId, emoji);

    return data;
  };

  return {
    handleCreatePost,
    handleGetAllPost,
    handleDeletePost,
    handleLikePost,
  };
};

export default usePost;
