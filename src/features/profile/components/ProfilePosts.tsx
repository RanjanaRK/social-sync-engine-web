import { toast } from "sonner";
import usePost from "../../post/hooks/usePost";
import type { Post } from "../../post/utils/types";
import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/app.store";

type Props = {
  posts: Post[];
  deleteHandle?: (postId: string) => void;
};

const ProfilePosts = ({ posts, deleteHandle }: Props) => {
  // const { handleDeletePost } = usePost();

  const { user } = useSelector((state: RootState) => state.auth);

  // const handleDelete = async (postId: string) => {
  //   try {
  //     console.log("Component:", postId);
  //     const res = await handleDeletePost(postId);

  //     toast.success(res.message);
  //   } catch {
  //     toast.error("Failed to delete post");
  //   }
  // };

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-white">Posts</h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={post.postImage[0]?.url}
              alt={post.caption}
              className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
            />

            {user?._id === post.user?._id && (
              <button
                onClick={() => deleteHandle?.(post._id)}
                className="absolute top-3 right-3 rounded-full bg-red-500 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfilePosts;
