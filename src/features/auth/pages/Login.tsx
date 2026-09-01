// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { Link, useNavigate } from "react-router";

// import { useAuth } from "../hooks/useAuth";
// import { loginSchema, type LoginSchemaType } from "../utils/zodSchema";

// const Login = () => {
//   const { handleLogin } = useAuth();

//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginSchemaType>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const handleSubmitForm = async (data: LoginSchemaType) => {
//     try {
//       const res = await handleLogin(data);

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

//       {/* Login Card */}
//       <div className="relative z-10 w-full max-w-md">
//         <div className="rounded-4xl border border-white/10 bg-[#0d1b2a]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
//           {/* Heading */}
//           <div className="mb-8 text-center">
//             <h1 className="text-4xl font-black tracking-tight text-white">
//               Welcome Back
//             </h1>

//             <p className="mt-3 text-sm text-gray-400">
//               Login to continue your social journey
//             </p>
//           </div>

//           {/* Form */}
//           <form className="space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
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

//               <p className="mt-1 text-sm text-red-400">
//                 {errors.email?.message}
//               </p>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-300">
//                 Password
//               </label>

//               <input
//                 {...register("password")}
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full rounded-2xl border border-white/10 bg-[#132238] px-4 py-3 text-white transition-all duration-300 outline-none placeholder:text-gray-500 focus:border-blue-400/40 focus:bg-[#17283f]"
//               />

//               <p className="mt-1 text-sm text-red-400">
//                 {errors.password?.message}
//               </p>
//             </div>

//             {/* Forgot Password */}
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 className="text-sm text-blue-400 transition hover:text-blue-300"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full rounded-2xl bg-blue-700 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40"
//             >
//               Login
//             </button>
//           </form>

//           {/* Footer */}
//           <p className="mt-7 text-center text-sm text-gray-400">
//             Don&apos;t have an account?{" "}
//             <Link
//               to={"/register"}
//               className="cursor-pointer text-blue-700 transition hover:text-blue-500"
//             >
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { ArrowRight, LockKeyhole, Mail, Sparkles } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { Link, useNavigate } from "react-router";

// import { useAuth } from "../hooks/useAuth";
// import { loginSchema, type LoginSchemaType } from "../utils/zodSchema";

// const Login = () => {
//   const { handleLogin } = useAuth();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginSchemaType>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const handleSubmitForm = async (data: LoginSchemaType) => {
//     try {
//       const res = await handleLogin(data);

//       toast.success(res.message);
//       navigate("/");
//     } catch (error: any) {
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data.message);
//       }
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 py-10 font-sans">
//       {/* Ambient background */}
//       <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#d4af37]/[0.07] blur-[120px]" />

//       <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_45%)]" />

//       {/* Main */}
//       <div className="relative z-10 w-full max-w-[430px]">
//         {/* Brand */}
//         <div className="mb-8 text-center">
//           <Link to="/" className="inline-flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e8c878]/20 bg-[#e8c878]/10 shadow-[0_0_30px_rgba(232,200,120,0.08)]">
//               <span className="text-lg font-bold text-[#e8c878]">S</span>
//             </div>

//             <span className="text-2xl font-bold tracking-tight text-white">
//               Social<span className="text-[#e8c878]">Sync</span>
//             </span>
//           </Link>
//         </div>

//         {/* Card */}
//         <div className="rounded-[32px] border border-white/[0.08] bg-[#0a101d]/85 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-9">
//           {/* Header */}
//           <div className="mb-8">
//             <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] text-[#e8c878]">
//               <Sparkles size={20} />
//             </div>

//             <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-[#e8c878] uppercase">
//               Welcome back
//             </p>

//             <h1 className="text-3xl font-bold tracking-[-0.03em] text-white">
//               Good to see you.
//             </h1>

//             <p className="mt-2 text-sm leading-relaxed text-slate-500">
//               Sign in to continue your SocialSync experience.
//             </p>
//           </div>

//           {/* Form */}
//           <form className="space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
//             {/* Email */}
//             <div>
//               <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-300">
//                 Email address
//               </label>

//               <div className="group relative">
//                 <Mail
//                   size={18}
//                   className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-600 transition-colors group-focus-within:text-[#e8c878]"
//                 />

//                 <input
//                   {...register("email")}
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] py-3.5 pr-4 pl-11 text-sm text-white transition-all duration-300 outline-none placeholder:text-slate-600 hover:border-white/[0.14] focus:border-[#e8c878]/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(232,200,120,0.04)]"
//                 />
//               </div>

//               {errors.email?.message && (
//                 <p className="mt-2 text-xs text-rose-400">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <div className="mb-2 flex items-center justify-between">
//                 <label className="text-xs font-semibold tracking-wide text-slate-300">
//                   Password
//                 </label>

//                 <button
//                   type="button"
//                   className="text-[11px] font-medium text-slate-500 transition hover:text-[#e8c878]"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               <div className="group relative">
//                 <LockKeyhole
//                   size={18}
//                   className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-600 transition-colors group-focus-within:text-[#e8c878]"
//                 />

//                 <input
//                   {...register("password")}
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] py-3.5 pr-4 pl-11 text-sm text-white transition-all duration-300 outline-none placeholder:text-slate-600 hover:border-white/[0.14] focus:border-[#e8c878]/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(232,200,120,0.04)]"
//                 />
//               </div>

//               {errors.password?.message && (
//                 <p className="mt-2 text-xs text-rose-400">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Login */}
//             <button
//               type="submit"
//               className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f1d58a] to-[#c29a3d] py-3.5 text-sm font-bold text-[#080d18] shadow-[0_12px_30px_rgba(212,175,55,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(212,175,55,0.25)] active:translate-y-0"
//             >
//               Sign in
//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="my-7 flex items-center gap-4">
//             <div className="h-px flex-1 bg-white/[0.07]" />
//             <span className="text-[10px] font-medium tracking-widest text-slate-600 uppercase">
//               SocialSync
//             </span>
//             <div className="h-px flex-1 bg-white/[0.07]" />
//           </div>

//           {/* Register */}
//           <p className="text-center text-sm text-slate-500">
//             New to SocialSync?{" "}
//             <Link
//               to="/register"
//               className="font-semibold text-[#e8c878] transition hover:text-[#f1d58a]"
//             >
//               Create an account
//             </Link>
//           </p>
//         </div>

//         <p className="mt-6 text-center text-[10px] tracking-widest text-slate-700 uppercase">
//           Connect · Share · Create
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { ArrowRight, LockKeyhole, Mail, Sparkles } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { Link, useNavigate } from "react-router";

// import { useAuth } from "../hooks/useAuth";
// import { loginSchema, type LoginSchemaType } from "../utils/zodSchema";

// const Login = () => {
//   const { handleLogin } = useAuth();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginSchemaType>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const handleSubmitForm = async (data: LoginSchemaType) => {
//     try {
//       const res = await handleLogin(data);

//       toast.success(res.message);
//       navigate("/");
//     } catch (error: any) {
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data?.message);
//       }
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090812] px-4 py-10 font-sans">
//       {/* ================= BACKGROUND ================= */}

//       {/* Lavender glow */}
//       <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-violet-500/[0.10] blur-[130px]" />

//       {/* Pink glow */}
//       <div className="pointer-events-none absolute -right-40 -bottom-40 h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.08] blur-[130px]" />

//       {/* Center glow */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(192,132,252,0.08),transparent_42%)]" />

//       {/* Subtle grid */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.025]" />

//       {/* ================= CONTENT ================= */}

//       <div className="relative z-10 w-full max-w-[430px]">
//         {/* ================= LOGO ================= */}

//         <div className="mb-8 flex justify-center">
//           <Link to="/" className="group flex items-center gap-3">
//             {/* Logo icon */}
//             <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/[0.08] shadow-[0_0_35px_rgba(192,132,252,0.10)] transition-all duration-300 group-hover:border-fuchsia-300/30 group-hover:shadow-[0_0_40px_rgba(217,70,239,0.18)]">
//               <Sparkles size={18} className="text-violet-300" />

//               {/* tiny dot */}
//               <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.8)]" />
//             </div>

//             {/* Logo text */}
//             <span className="text-2xl font-bold tracking-[-0.04em] text-white">
//               Social
//               <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
//                 Sync
//               </span>
//             </span>
//           </Link>
//         </div>

//         {/* ================= CARD ================= */}

//         <div className="rounded-[30px] border border-white/[0.08] bg-[#11101c]/85 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-9">
//           {/* Top glow */}
//           <div className="pointer-events-none absolute left-1/2 h-20 w-64 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-3xl" />

//           {/* ================= HEADING ================= */}

//           <div className="relative mb-8">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/10 bg-violet-400/[0.06] px-3 py-1.5">
//               <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />

//               <span className="text-[10px] font-semibold tracking-[0.2em] text-violet-300 uppercase">
//                 Welcome back
//               </span>
//             </div>

//             <h1 className="text-[32px] leading-tight font-bold tracking-[-0.04em] text-white">
//               Good to see you
//               <span className="text-violet-300">.</span>
//             </h1>

//             <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
//               Sign in to continue your journey with your people, ideas, and
//               moments.
//             </p>
//           </div>

//           {/* ================= FORM ================= */}

//           <form className="space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
//             {/* Email */}
//             <div>
//               <label className="mb-2.5 block text-xs font-semibold tracking-wide text-slate-300">
//                 Email address
//               </label>

//               <div className="group relative">
//                 <Mail
//                   size={18}
//                   className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-600 transition-colors duration-300 group-focus-within:text-violet-300"
//                 />

//                 <input
//                   {...register("email")}
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] py-3.5 pr-4 pl-11 text-sm text-white transition-all duration-300 outline-none placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(192,132,252,0.05)]"
//                 />
//               </div>

//               {errors.email?.message && (
//                 <p className="mt-2 text-xs text-rose-400">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <div className="mb-2.5 flex items-center justify-between">
//                 <label className="text-xs font-semibold tracking-wide text-slate-300">
//                   Password
//                 </label>

//                 <button
//                   type="button"
//                   className="text-[11px] font-medium text-slate-500 transition-colors hover:text-fuchsia-300"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               <div className="group relative">
//                 <LockKeyhole
//                   size={18}
//                   className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-600 transition-colors duration-300 group-focus-within:text-violet-300"
//                 />

//                 <input
//                   {...register("password")}
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] py-3.5 pr-4 pl-11 text-sm text-white transition-all duration-300 outline-none placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(192,132,252,0.05)]"
//                 />
//               </div>

//               {errors.password?.message && (
//                 <p className="mt-2 text-xs text-rose-400">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* ================= LOGIN BUTTON ================= */}

//             <button
//               type="submit"
//               className="group mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-300 py-3.5 text-sm font-bold text-[#100b18] shadow-[0_12px_35px_rgba(192,132,252,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(217,70,239,0.28)] active:translate-y-0 active:scale-[0.99]"
//             >
//               <span>Sign in</span>

//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </form>

//           {/* ================= DIVIDER ================= */}

//           <div className="my-7 flex items-center gap-4">
//             <div className="h-px flex-1 bg-white/[0.07]" />

//             <div className="flex items-center gap-1.5">
//               <span className="h-1 w-1 rounded-full bg-violet-400/50" />
//               <span className="text-[9px] font-medium tracking-[0.2em] text-slate-600 uppercase">
//                 SocialSync
//               </span>
//               <span className="h-1 w-1 rounded-full bg-fuchsia-400/50" />
//             </div>

//             <div className="h-px flex-1 bg-white/[0.07]" />
//           </div>

//           {/* ================= REGISTER ================= */}

//           <p className="text-center text-sm text-slate-500">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="font-semibold text-violet-300 transition-colors hover:text-fuchsia-300"
//             >
//               Create one
//             </Link>
//           </p>
//         </div>

//         {/* Footer */}
//         <div className="mt-6 flex items-center justify-center gap-2">
//           <span className="h-1 w-1 rounded-full bg-violet-400/50" />

//           <p className="text-[9px] font-medium tracking-[0.25em] text-slate-700 uppercase">
//             Connect · Share · Create
//           </p>

//           <span className="h-1 w-1 rounded-full bg-fuchsia-400/50" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

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
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#E7A8BD]/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[420px] w-[420px] rounded-full bg-[#9F526F]/[0.05] blur-[130px]" />

      {/* Subtle radial light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,168,189,0.045),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[410px]">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7A8BD]/15 bg-[#E7A8BD]/[0.06] transition-all duration-300 group-hover:border-[#E7A8BD]/30 group-hover:bg-[#E7A8BD]/10">
              <span className="text-lg text-[#E7A8BD]">♡</span>
            </div>

            <span className="text-[17px] font-semibold tracking-[-0.03em] text-[#F8F3F6]">
              Social
              <span className="text-[#E7A8BD]">Sync</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-[24px] border border-white/[0.08] bg-[#151116]/95 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
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
                  className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pr-4 pl-10 text-sm text-[#F8F3F6] transition-all duration-200 outline-none placeholder:text-[#5F575D] hover:border-white/[0.13] focus:border-[#E7A8BD]/40 focus:bg-white/[0.04] focus:ring-4 focus:ring-[#E7A8BD]/[0.04]"
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
                  className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pr-11 pl-10 text-sm text-[#F8F3F6] transition-all duration-200 outline-none placeholder:text-[#5F575D] hover:border-white/[0.13] focus:border-[#E7A8BD]/40 focus:bg-white/[0.04] focus:ring-4 focus:ring-[#E7A8BD]/[0.04]"
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
