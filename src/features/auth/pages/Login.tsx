import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";

import { useAuth } from "../hooks/useAuth";
import { loginSchema, type LoginSchemaType } from "../utils/zodSchema";

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitForm = async (data: LoginSchemaType) => {
    try {
      const res = await handleLogin(data);

      toast.success(res.message);
      navigate("/");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B090C] px-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-105 w-105 rounded-full bg-[#E7A8BD]/6 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 -bottom-40 h-105 w-105 rounded-full bg-[#9F526F]/5 blur-[130px]" />

      {/* Subtle radial light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,168,189,0.045),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-102.5">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7A8BD]/15 bg-[#E7A8BD]/6 transition-all duration-300 group-hover:border-[#E7A8BD]/30 group-hover:bg-[#E7A8BD]/10">
              <span className="text-lg text-[#E7A8BD]">♡</span>
            </div>

            <span className="text-[17px] font-semibold tracking-[-0.03em] text-[#F8F3F6]">
              Social
              <span className="text-[#E7A8BD]">Sync</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xlborder border-white/8 bg-[#151116]/95 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-[28px] font-semibold tracking-[-0.04em] text-[#F8F3F6]">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#8E858B]">
              Sign in to continue sharing your moments.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-medium text-[#B9AFB5]">
                Email
              </label>

              <div className="group relative">
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#71676E] transition-colors duration-200 group-focus-within:text-[#E7A8BD]"
                />

                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-white/8 bg-white/2.5 pr-4 pl-10 text-sm text-[#F8F3F6] transition-all duration-200 outline-none placeholder:text-[#5F575D] hover:border-white/13 focus:border-[#E7A8BD]/40 focus:bg-white/4 focus:ring-4 focus:ring-[#E7A8BD]/4"
                />
              </div>

              {errors.email?.message && (
                <p className="mt-1.5 text-xs text-[#E58FA8]">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-medium text-[#B9AFB5]">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs text-[#81777E] transition-colors duration-200 hover:text-[#E7A8BD]"
                >
                  Forgot password?
                </button>
              </div>

              <div className="group relative">
                <LockKeyhole
                  size={17}
                  strokeWidth={1.7}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#71676E] transition-colors duration-200 group-focus-within:text-[#E7A8BD]"
                />

                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-white/8 bg-white/2.5 pr-11 pl-10 text-sm text-[#F8F3F6] transition-all duration-200 outline-none placeholder:text-[#5F575D] hover:border-white/13 focus:border-[#E7A8BD]/40 focus:bg-white/4 focus:ring-4 focus:ring-[#E7A8BD]/4"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3.5 -translate-y-1/2 text-[#71676E] transition-colors duration-200 hover:text-[#C8BDC3]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>

              {errors.password?.message && (
                <p className="mt-1.5 text-xs text-[#E58FA8]">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-[#E7A8BD] text-sm font-semibold text-[#170F13] shadow-[0_8px_25px_rgba(231,168,189,0.12)] transition-all duration-200 hover:bg-[#F2C6D5] hover:shadow-[0_10px_35px_rgba(231,168,189,0.18)] active:scale-[0.99]"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/[0.07]" />

            <span className="text-[9px] font-medium tracking-[0.18em] text-[#554D52]">
              SOCIALSYNC
            </span>

            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          {/* Register */}
          <p className="text-center text-sm text-[#81777E]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[#E7A8BD] transition-colors duration-200 hover:text-[#F2C6D5]"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* Bottom tagline */}
        <p className="mt-6 text-center text-[10px] font-medium tracking-[0.18em] text-[#514A4F] uppercase">
          Share · Connect · Belong
        </p>
      </div>
    </div>
  );
};

export default Login;
