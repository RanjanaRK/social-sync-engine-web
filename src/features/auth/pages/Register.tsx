import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";
import { registerSchema, type RegisterSchemaType } from "../utils/zodSchema";
import { Link, useNavigate } from "react-router";
const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  const handleSubmitForm = async (data: RegisterSchemaType) => {
    try {
      const res = await handleRegister(data);

      toast.success(res.message);

      navigate("/");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111f] px-4">
      {/* Background Effects */}
      <div className="absolute top-30 left-30 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute right-30 bottom-30 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-4xl border border-white/10 bg-[#0d1b2a]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-black tracking-tight text-white">
              Join Socially
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              Connect with people around the world
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Username
              </label>

              <input
                {...register("username")}
                type="text"
                placeholder="@username"
                className="w-full rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white transition-all duration-300 outline-none placeholder:text-gray-500 focus:border-blue-400/40 focus:bg-[#17283f]"
              />
              <p>{errors.username?.message}</p>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email
              </label>

              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white transition-all duration-300 outline-none placeholder:text-gray-500 focus:border-blue-400/40 focus:bg-[#17283f]"
              />
              <p>{errors.email?.message}</p>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>

              <input
                {...register("password")}
                type="password"
                placeholder="Create password"
                className="w-full rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white transition-all duration-300 outline-none placeholder:text-gray-500 focus:border-blue-400/40 focus:bg-[#17283f]"
              />
              <p>{errors.password?.message}</p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-700 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-7 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="cursor-pointer text-blue-700 transition hover:text-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
