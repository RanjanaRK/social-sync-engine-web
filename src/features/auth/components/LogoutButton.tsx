import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";
import axios from "axios";

const LogoutButton = () => {
  const { handleLogout } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await handleLogout();

      toast.success(res.message);

      navigate("/login");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 font-semibold text-red-400 transition-all duration-300 hover:border-red-400/40 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30"
    >
      <span className="relative z-10 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H9m4 8H7a2 2 0 01-2-2V6a2 2 0 012-2h6"
          />
        </svg>
        Logout
      </span>
    </button>
  );
};

export default LogoutButton;
