import { useDispatch } from "react-redux";
import { removePost } from "../../profile/state/profile.slice";
import {
  createPost,
  deletePost,
  getAllPosts,
  getSavedPosts,
  getSinglePost,
  likePost,
  savePost,
} from "../service/post.api";
import { setPostLoading, setPosts } from "../state/post.slice";
import type { ReactionType } from "../utils/types";

const usePost = () => {
  const dispatch = useDispatch();

  const handleCreatePost = async (formData: FormData) => {
    const data = await createPost(formData);

    return data;
  };

  const handleGetAllPost = async () => {
    try {
      dispatch(setPostLoading(true));

      const response = await getAllPosts();

      dispatch(setPosts(response.data));

      return response;
    } finally {
      dispatch(setPostLoading(false));
    }
  };

  const handleGetSinglePost = async (postId: string) => {
    const res = await getSinglePost(postId);

    return res.data;
  };

  const handleDeletePost = async (postId: string) => {
    const data = await deletePost(postId);

    dispatch(removePost(postId));

    return data;
  };

  const handleLikePost = async (postId: string, emoji: ReactionType) => {
    try {
      const response = await likePost(postId, emoji);

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSavePost = async (postId: string) => {
    try {
      const response = await savePost(postId);

      return response;
    } catch (error) {
      console.error("Save post error:", error);
      throw error;
    }
  };

  const handleGetSavedPosts = async () => {
    try {
      const response = await getSavedPosts();

      return response.data;
    } catch (error) {
      console.error("Get saved posts error:", error);

      throw error;
    }
  };

  return {
    handleCreatePost,
    handleGetAllPost,
    handleGetSinglePost,
    handleDeletePost,
    handleLikePost,
    handleSavePost,
    handleGetSavedPosts,
  };
};

export default usePost;
