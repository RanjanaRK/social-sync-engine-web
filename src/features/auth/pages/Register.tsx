// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { useAuth } from "../hooks/useAuth";
// import { registerSchema, type RegisterSchemaType } from "../utils/zodSchema";
// import { Link, useNavigate } from "react-router";
// const Register = () => {
//   const { handleRegister } = useAuth();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(registerSchema),
//     defaultValues: { username: "", email: "", password: "" },
//   });

//   const handleSubmitForm = async (data: RegisterSchemaType) => {
//     try {
//       const res = await handleRegister(data);

//       toast.success(res.message);

//       navigate("/");
//     } catch (error: any) {
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data.message);
//       }
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111f] px-4">
//       {/* Background Effects */}
//       <div className="absolute top-30 left-30 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

//       <div className="absolute right-30 bottom-30 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]"></div>

//       {/* Register Card */}
//       <div className="relative z-10 w-full max-w-md">
//         <div className="rounded-4xl border border-white/10 bg-[#0d1b2a]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
//           {/* Heading */}
//           <div className="mb-8 text-center">
//             <h1 className="text-4xl font-black tracking-tight text-white">
//               Join Socially
//             </h1>

//             <p className="mt-3 text-sm text-gray-400">
//               Connect with people around the world
//             </p>
//           </div>

//           {/* Form */}
//           <form className="space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
//             {/* Username */}
//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-300">
//                 Username
//               </label>

//               <input
//                 {...register("username")}
//                 type="text"
//                 placeholder="@username"
//                 className="w-full rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white transition-all duration-300 outline-none placeholder:text-gray-500 focus:border-blue-400/40 focus:bg-[#17283f]"
//               />
//               <p>{errors.username?.message}</p>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-300">
//                 Email
//               </label>

//               <input
//                 {...register("email")}
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white transition-all duration-300 outline-none placeholder:text-gray-500 focus:border-blue-400/40 focus:bg-[#17283f]"
//               />
//               <p>{errors.email?.message}</p>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-300">
//                 Password
//               </label>

//               <input
//                 {...register("password")}
//                 type="password"
//                 placeholder="Create password"
//                 className="w-full rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white transition-all duration-300 outline-none placeholder:text-gray-500 focus:border-blue-400/40 focus:bg-[#17283f]"
//               />
//               <p>{errors.password?.message}</p>
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="w-full rounded-2xl bg-blue-700 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Footer */}
//           <p className="mt-7 text-center text-sm text-gray-400">
//             Already have an account?{" "}
//             <Link
//               to={"/login"}
//               className="cursor-pointer text-blue-700 transition hover:text-blue-500"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { registerSchema, type RegisterSchemaType } from "../utils/zodSchema";
const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
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
        toast.error(error.response?.data?.message);
      }
    }
  };
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B090C] px-4 py-10">
      {" "}
      {/* ================================================= */}{" "}
      {/* Background */}{" "}
      {/* ================================================= */}{" "}
      <div className="pointer-events-none fixed -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#E7A8BD]/[0.045] blur-[130px]" />{" "}
      <div className="pointer-events-none fixed -right-40 -bottom-40 h-[450px] w-[450px] rounded-full bg-[#9F526F]/[0.035] blur-[140px]" />{" "}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,168,189,0.025),transparent_45%)]" />{" "}
      {/* ================================================= */}{" "}
      {/* Register Container */}{" "}
      {/* ================================================= */}{" "}
      <div className="relative z-10 w-full max-w-[410px]">
        {" "}
        {/* Logo */}{" "}
        <div className="mb-7 flex justify-center">
          {" "}
          <Link to="/" className="group flex items-center gap-2.5">
            {" "}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7A8BD]/15 bg-[#E7A8BD]/[0.06] transition-all duration-200 group-hover:border-[#E7A8BD]/30 group-hover:bg-[#E7A8BD]/10">
              {" "}
              <span className="text-lg leading-none text-[#E7A8BD]">
                {" "}
                ♡{" "}
              </span>{" "}
            </div>{" "}
            <span className="text-[16px] font-semibold tracking-[-0.03em] text-[#F8F3F6]">
              {" "}
              Social <span className="text-[#E7A8BD]">Sync</span>{" "}
            </span>{" "}
          </Link>{" "}
        </div>{" "}
        {/* Card */}{" "}
        <div className="rounded-[24px] border border-white/[0.08] bg-[#151116]/95 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
          {" "}
          {/* Heading */}{" "}
          <div className="mb-7">
            {" "}
            <h1 className="text-[28px] font-semibold tracking-[-0.04em] text-[#F8F3F6]">
              {" "}
              Create your account{" "}
            </h1>{" "}
            <p className="mt-2 text-sm leading-6 text-[#8E858B]">
              {" "}
              Join SocialSync and share your world.{" "}
            </p>{" "}
          </div>{" "}
          {/* Form */}{" "}
          <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-5">
            {" "}
            {/* ================================================= */}{" "}
            {/* Username */}{" "}
            {/* ================================================= */}{" "}
            <div>
              {" "}
              <label className="mb-2 block text-xs font-medium text-[#B9AFB5]">
                {" "}
                Username{" "}
              </label>{" "}
              <div className="group relative">
                {" "}
                <UserRound
                  size={17}
                  strokeWidth={1.7}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#71676E] transition-colors duration-200 group-focus-within:text-[#E7A8BD]"
                />{" "}
                <input
                  {...register("username")}
                  type="text"
                  placeholder="@username"
                  className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pr-4 pl-10 text-sm text-[#F8F3F6] transition-all duration-200 outline-none placeholder:text-[#5F575D] hover:border-white/[0.13] focus:border-[#E7A8BD]/40 focus:bg-white/[0.04] focus:ring-4 focus:ring-[#E7A8BD]/[0.04]"
                />{" "}
              </div>{" "}
              {errors.username?.message && (
                <p className="mt-1.5 text-xs text-[#E58FA8]">
                  {" "}
                  {errors.username.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
            {/* ================================================= */}{" "}
            {/* Email */}{" "}
            {/* ================================================= */}{" "}
            <div>
              {" "}
              <label className="mb-2 block text-xs font-medium text-[#B9AFB5]">
                {" "}
                Email{" "}
              </label>{" "}
              <div className="group relative">
                {" "}
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#71676E] transition-colors duration-200 group-focus-within:text-[#E7A8BD]"
                />{" "}
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pr-4 pl-10 text-sm text-[#F8F3F6] transition-all duration-200 outline-none placeholder:text-[#5F575D] hover:border-white/[0.13] focus:border-[#E7A8BD]/40 focus:bg-white/[0.04] focus:ring-4 focus:ring-[#E7A8BD]/[0.04]"
                />{" "}
              </div>{" "}
              {errors.email?.message && (
                <p className="mt-1.5 text-xs text-[#E58FA8]">
                  {" "}
                  {errors.email.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
            {/* ================================================= */}{" "}
            {/* Password */}{" "}
            {/* ================================================= */}{" "}
            <div>
              {" "}
              <label className="mb-2 block text-xs font-medium text-[#B9AFB5]">
                {" "}
                Password{" "}
              </label>{" "}
              <div className="group relative">
                {" "}
                <LockKeyhole
                  size={17}
                  strokeWidth={1.7}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#71676E] transition-colors duration-200 group-focus-within:text-[#E7A8BD]"
                />{" "}
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pr-11 pl-10 text-sm text-[#F8F3F6] transition-all duration-200 outline-none placeholder:text-[#5F575D] hover:border-white/[0.13] focus:border-[#E7A8BD]/40 focus:bg-white/[0.04] focus:ring-4 focus:ring-[#E7A8BD]/[0.04]"
                />{" "}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3.5 -translate-y-1/2 text-[#71676E] transition-colors duration-200 hover:text-[#C8BDC3]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {" "}
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}{" "}
                </button>{" "}
              </div>{" "}
              {errors.password?.message && (
                <p className="mt-1.5 text-xs text-[#E58FA8]">
                  {" "}
                  {errors.password.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
            {/* ================================================= */}{" "}
            {/* Create Account */}{" "}
            {/* ================================================= */}{" "}
            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-[#E7A8BD] text-sm font-semibold text-[#170F13] shadow-[0_8px_25px_rgba(231,168,189,0.12)] transition-all duration-200 hover:bg-[#F2C6D5] hover:shadow-[0_10px_35px_rgba(231,168,189,0.18)] active:scale-[0.99]"
            >
              {" "}
              Create account{" "}
            </button>{" "}
          </form>{" "}
          {/* Divider */}{" "}
          <div className="my-7 flex items-center gap-3">
            {" "}
            <div className="h-px flex-1 bg-white/[0.07]" />{" "}
            <span className="text-[9px] font-medium tracking-[0.18em] text-[#554D52]">
              {" "}
              SOCIALSYNC{" "}
            </span>{" "}
            <div className="h-px flex-1 bg-white/[0.07]" />{" "}
          </div>{" "}
          {/* Login */}{" "}
          <p className="text-center text-sm text-[#81777E]">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#E7A8BD] transition-colors duration-200 hover:text-[#F2C6D5]"
            >
              {" "}
              Sign in{" "}
            </Link>{" "}
          </p>{" "}
        </div>{" "}
        {/* Bottom tagline */}{" "}
        <p className="mt-6 text-center text-[10px] font-medium tracking-[0.18em] text-[#514A4F] uppercase">
          {" "}
          Share · Connect · Belong{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};
export default Register;
