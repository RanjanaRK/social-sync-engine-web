import type { Post } from "../utils/types";

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0f172a] p-5">
      <div className="flex items-center gap-3">
        <img
          src={post.user.profileImage}
          alt={post.user.username}
          className="h-12 w-12 rounded-full"
        />

        <div>
          <h3 className="font-semibold text-white">{post.user.username}</h3>
        </div>
      </div>

      <p className="mt-4 text-gray-200">{post.caption}</p>

      {post.postImage && (
        <img
          src={post.postImage[0].url}
          alt="post"
          className="mt-4 rounded-lg"
        />
      )}
    </div>
  );
};

export default PostDetail;
