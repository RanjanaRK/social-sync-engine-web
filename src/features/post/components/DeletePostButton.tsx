// import { toast } from "sonner";
// import usePost from "../hooks/usePost";
// import { Trash2 } from "lucide-react";

// const DeletePostButton = () => {
//     const { handleDeletePost } = usePost();
//   const handleDelete = async (postId: string) => {
//     try {
//       const res = await handleDeletePost(postId);

//       toast.success(res.message);
//     } catch (error) {
//       toast.error("Failed to delete post");
//     }
//   };
//   return (
//     <>
//       <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/40" />

//             {/* Delete Button */}
//             <button
//               onClick={() => handleDelete(postId)}
//               className="absolute right-3 top-3 rounded-full bg-red-500 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
//             >
//               <Trash2 size={18} />
//             </button>
//           </div>
//     </>
//   );
// };

// export default DeletePostButton;
