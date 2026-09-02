// import { Home, Menu, PlusSquare, User, Users } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router";
// import LogoutButton from "../../auth/components/LogoutButton";
// import SearchField from "./SearchField";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <header className="fixed top-0 right-0 left-0 z-50 hidden h-16 px-4 md:block">
//         <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/20 bg-white/5 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-2xl">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent"
//           >
//             SocialSync
//           </Link>

//           {/* Search */}
//           <SearchField />

//           {/* Navigation */}
//           <div className="flex items-center gap-2">
//             <Link
//               to="/"
//               className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
//             >
//               <Home size={22} />
//             </Link>

//             <Link
//               to="/create-post"
//               className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
//             >
//               <PlusSquare size={22} />
//             </Link>

//             <Link
//               to="/following"
//               className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
//             >
//               <Users size={22} />
//             </Link>

//             <Link
//               to="/profile"
//               className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
//             >
//               <User size={22} />
//             </Link>

//             <LogoutButton />
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Top Bar */}
//       <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl md:hidden">
//         <div className="flex items-center justify-between px-4 py-4">
//           <Link
//             to="/"
//             className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent"
//           >
//             SocialSync
//           </Link>

//           <button onClick={() => setIsOpen(!isOpen)}>
//             <Menu className="text-white" />
//           </button>
//         </div>

//         {isOpen && (
//           <div className="border-t border-white/10 p-4">
//             <SearchField />

//             <div className="flex flex-col gap-3">
//               <LogoutButton />
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Mobile Bottom Navigation */}
//       <nav className="fixed bottom-4 left-1/2 z-50 flex w-[95%] max-w-md -translate-x-1/2 items-center justify-around rounded-3xl border border-white/20 bg-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-2xl md:hidden">
//         <Link to="/" className="text-gray-300">
//           <Home size={24} />
//         </Link>

//         <Link to="/following" className="text-gray-300">
//           <Users size={24} />
//         </Link>

//         <Link
//           to="/create-post"
//           className="rounded-full bg-blue-600 p-3 text-white"
//         >
//           <PlusSquare size={24} />
//         </Link>

//         <Link to="/profile" className="text-gray-300">
//           <User size={24} />
//         </Link>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import { Home, Menu, Plus, User, Users, X } from "lucide-react";
// import { useState } from "react";
// import { Link, useLocation } from "react-router";
// import LogoutButton from "../../auth/components/LogoutButton";
// import SearchField from "./SearchField";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   const navItemClass = (path: string) =>
//     `group relative flex items-center justify-center rounded-2xl p-3 transition-all duration-300 ${
//       isActive(path)
//         ? "bg-white/[0.08] text-[#e8c878] shadow-[inset_0_0_20px_rgba(232,200,120,0.05)]"
//         : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
//     }`;

//   return (
//     <>
//       {/* ================= DESKTOP NAVBAR ================= */}
//       <header className="fixed top-0 right-0 left-0 z-50 hidden px-6 pt-4 md:block">
//         <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-[24px] border border-white/[0.08] bg-[#080d18]/85 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
//           {/* Logo */}
//           <Link to="/" className="group flex items-center gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e8c878]/20 bg-[#e8c878]/10 shadow-[0_0_25px_rgba(232,200,120,0.08)] transition-all duration-300 group-hover:border-[#e8c878]/40 group-hover:bg-[#e8c878]/15">
//               <span className="text-sm font-bold text-[#e8c878]">S</span>
//             </div>

//             <div className="leading-none">
//               <h1 className="text-[19px] font-bold tracking-[-0.03em] text-white">
//                 Social
//                 <span className="text-[#e8c878]">Sync</span>
//               </h1>

//               <p className="mt-1 text-[8px] font-medium tracking-[0.25em] text-slate-500 uppercase">
//                 Connect · Share · Create
//               </p>
//             </div>
//           </Link>

//           {/* Search */}
//           <div className="mx-8 w-full max-w-md">
//             <SearchField />
//           </div>

//           {/* Navigation */}
//           <div className="flex items-center gap-1">
//             {/* Home */}
//             <Link to="/" className={navItemClass("/")} title="Home">
//               <Home size={20} strokeWidth={isActive("/") ? 2.2 : 1.8} />

//               {isActive("/") && (
//                 <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#e8c878] shadow-[0_0_8px_#e8c878]" />
//               )}
//             </Link>

//             {/* Create */}
//             <Link
//               to="/create-post"
//               className={navItemClass("/create-post")}
//               title="Create Post"
//             >
//               <Plus size={21} strokeWidth={2} />

//               {isActive("/create-post") && (
//                 <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#e8c878] shadow-[0_0_8px_#e8c878]" />
//               )}
//             </Link>

//             {/* Following */}
//             <Link
//               to="/following"
//               className={navItemClass("/following")}
//               title="Following"
//             >
//               <Users
//                 size={20}
//                 strokeWidth={isActive("/following") ? 2.2 : 1.8}
//               />

//               {isActive("/following") && (
//                 <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#e8c878] shadow-[0_0_8px_#e8c878]" />
//               )}
//             </Link>

//             {/* Profile */}
//             <Link
//               to="/profile"
//               className={navItemClass("/profile")}
//               title="Profile"
//             >
//               <User size={20} strokeWidth={isActive("/profile") ? 2.2 : 1.8} />

//               {isActive("/profile") && (
//                 <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#e8c878] shadow-[0_0_8px_#e8c878]" />
//               )}
//             </Link>

//             {/* Divider */}
//             <div className="mx-2 h-7 w-px bg-white/[0.08]" />

//             {/* Logout */}
//             <LogoutButton />
//           </div>
//         </nav>
//       </header>

//       {/* ================= MOBILE TOP BAR ================= */}
//       <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.07] bg-[#050914]/90 backdrop-blur-2xl md:hidden">
//         <div className="flex h-[68px] items-center justify-between px-5">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2.5">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e8c878]/20 bg-[#e8c878]/10">
//               <span className="text-sm font-bold text-[#e8c878]">S</span>
//             </div>

//             <span className="text-[18px] font-bold tracking-tight text-white">
//               Social<span className="text-[#e8c878]">Sync</span>
//             </span>
//           </Link>

//           {/* Menu */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         <div
//           className={`overflow-hidden border-t border-white/[0.06] transition-all duration-300 ${
//             isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           } `}
//         >
//           <div className="space-y-4 px-5 py-5">
//             <SearchField />

//             <div className="grid grid-cols-2 gap-2">
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/"
//                 className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${
//                   isActive("/")
//                     ? "bg-[#e8c878]/10 text-[#e8c878]"
//                     : "text-slate-400"
//                 }`}
//               >
//                 <Home size={18} />
//                 Home
//               </Link>

//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/following"
//                 className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${
//                   isActive("/following")
//                     ? "bg-[#e8c878]/10 text-[#e8c878]"
//                     : "text-slate-400"
//                 }`}
//               >
//                 <Users size={18} />
//                 Following
//               </Link>

//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/create-post"
//                 className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${
//                   isActive("/create-post")
//                     ? "bg-[#e8c878]/10 text-[#e8c878]"
//                     : "text-slate-400"
//                 }`}
//               >
//                 <Plus size={18} />
//                 Create
//               </Link>

//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/profile"
//                 className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${
//                   isActive("/profile")
//                     ? "bg-[#e8c878]/10 text-[#e8c878]"
//                     : "text-slate-400"
//                 }`}
//               >
//                 <User size={18} />
//                 Profile
//               </Link>
//             </div>

//             <div className="border-t border-white/[0.06] pt-4">
//               <LogoutButton />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ================= MOBILE BOTTOM NAV ================= */}
//       <nav className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-28px)] max-w-md -translate-x-1/2 items-center justify-around rounded-[26px] border border-white/[0.09] bg-[#080d18]/90 px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden">
//         {/* Home */}
//         <Link
//           to="/"
//           className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
//             isActive("/")
//               ? "bg-white/[0.07] text-[#e8c878]"
//               : "text-slate-500 hover:text-white"
//           } `}
//         >
//           <Home size={21} />
//         </Link>

//         {/* Following */}
//         <Link
//           to="/following"
//           className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
//             isActive("/following")
//               ? "bg-white/[0.07] text-[#e8c878]"
//               : "text-slate-500 hover:text-white"
//           } `}
//         >
//           <Users size={21} />
//         </Link>

//         {/* Create */}
//         <Link
//           to="/create-post"
//           className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f1d58a] to-[#b89132] text-[#080d18] shadow-[0_8px_25px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-105 active:scale-95"
//         >
//           <Plus size={24} strokeWidth={2.5} />

//           <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-[#080d18] bg-white" />
//         </Link>

//         {/* Profile */}
//         <Link
//           to="/profile"
//           className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
//             isActive("/profile")
//               ? "bg-white/[0.07] text-[#e8c878]"
//               : "text-slate-500 hover:text-white"
//           } `}
//         >
//           <User size={21} />
//         </Link>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import {
  Bell,
  Heart,
  Home,
  Menu,
  Plus,
  Search,
  User,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

import LogoutButton from "../../auth/components/LogoutButton";
import SearchField from "./SearchField";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const navItemClass = (active: boolean) =>
    `group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
      active
        ? "text-[#E7A8BD]"
        : "text-[#81777E] hover:bg-white/[0.04] hover:text-[#E8E0E4]"
    }`;

  return (
    <>
      {/* Desktop Navbar */}

      <header className="fixed top-0 right-0 left-0 z-50 hidden px-4 pt-4 md:block">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/[0.07] bg-[#110E12]/90 px-5 shadow-[0_12px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7A8BD]/15 bg-[#E7A8BD]/6 transition-all duration-200 group-hover:border-[#E7A8BD]/30 group-hover:bg-[#E7A8BD]/10">
              <img src="/favicon.png" alt="logo" className="h-4 w-4" />
            </div>

            <span className="text-[16px] font-semibold tracking-[-0.03em] text-[#F8F3F6]">
              Social
              <span className="text-[#E7A8BD]">Sync</span>
            </span>
          </Link>

          {/* Search */}
          <div className="mx-8 hidden w-full max-w-sm lg:block">
            <SearchField />
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className={navItemClass(isActive("/"))}
              aria-label="Home"
            >
              <Home size={20} strokeWidth={isActive("/") ? 2.2 : 1.8} />

              {isActive("/") && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#E7A8BD]" />
              )}
            </Link>

            {/* Following */}
            <Link
              to="/follow"
              className={navItemClass(isActive("/following"))}
              aria-label="Following"
            >
              <Users
                size={20}
                strokeWidth={isActive("/following") ? 2.2 : 1.8}
              />

              {isActive("/following") && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#E7A8BD]" />
              )}
            </Link>

            {/* Create */}
            <Link
              to="/create-post"
              className="group mx-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7A8BD] text-[#180F14] shadow-[0_5px_20px_rgba(231,168,189,0.12)] transition-all duration-200 hover:bg-[#F2C6D5] hover:shadow-[0_8px_25px_rgba(231,168,189,0.18)] active:scale-95"
              aria-label="Create post"
            >
              <Plus size={20} strokeWidth={2.2} />
            </Link>

            {/* Notifications */}
            <Link
              to="/notifications"
              className={navItemClass(isActive("/notifications"))}
              aria-label="Notifications"
            >
              <Bell
                size={20}
                strokeWidth={isActive("/notifications") ? 2.2 : 1.8}
              />

              {isActive("/notifications") && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#E7A8BD]" />
              )}
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className={navItemClass(isActive("/profile"))}
              aria-label="Profile"
            >
              <User size={20} strokeWidth={isActive("/profile") ? 2.2 : 1.8} />

              {isActive("/profile") && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#E7A8BD]" />
              )}
            </Link>

            {/* Logout */}
            <div className="ml-2 border-l border-white/[0.07] pl-3">
              <LogoutButton />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Top Navbar */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#0B090C]/95 backdrop-blur-xl md:hidden">
        <div className="flex h-15 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E7A8BD]/15 bg-[#E7A8BD]/6">
              <img src="/favicon.png" alt="logo" className="h-4 w-4" />
            </div>

            <span className="text-[15px] font-semibold text-[#F8F3F6]">
              Social
              <span className="text-[#E7A8BD]">Sync</span>
            </span>
          </Link>

          {/* Mobile actions */}
          <div className="flex items-center gap-1">
            <Link
              to="/search"
              className="hover:bg-white/4hover:text-[#E8E0E4] flex h-9 w-9 items-center justify-center rounded-xl text-[#81777E]"
            >
              <Search size={20} />
            </Link>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-[#81777E] transition hover:bg-white/4 hover:text-[#E8E0E4]"
              aria-label="Menu"
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-white/[0.07] bg-[#110E12] px-4 py-4">
            <div className="mb-4">
              <SearchField />
            </div>

            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/4hover:text-[#E7A8BD] flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#B8AFB5]"
              >
                <Home size={19} />
                Home
              </Link>

              <Link
                to="/following"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/4hover:text-[#E7A8BD] flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#B8AFB5]"
              >
                <Users size={19} />
                Following
              </Link>

              <Link
                to="/create-post"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/4hover:text-[#E7A8BD] flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#B8AFB5]"
              >
                <Plus size={19} />
                Create post
              </Link>

              <Link
                to="/notifications"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/4hover:text-[#E7A8BD] flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#B8AFB5]"
              >
                <Bell size={19} />
                Notifications
              </Link>

              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/4hover:text-[#E7A8BD] flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#B8AFB5]"
              >
                <User size={19} />
                Profile
              </Link>

              <div className="mt-3 border-t border-white/[0.07] pt-3">
                <LogoutButton />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}

      <nav className="fixed right-4 bottom-4 left-4 z-50 flex h-16 items-center justify-around rounded-2xl border border-white/8 bg-[#110E12]/95 px-2 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden">
        {/* Home */}
        <Link
          to="/"
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
            isActive("/") ? "text-[#E7A8BD]" : "text-[#756B72]"
          }`}
        >
          <Home size={21} />
        </Link>

        {/* Following */}
        <Link
          to="/following"
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
            isActive("/following") ? "text-[#E7A8BD]" : "text-[#756B72]"
          }`}
        >
          <Users size={21} />
        </Link>

        {/* Create */}
        <Link
          to="/create-post"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7A8BD] text-[#180F14] shadow-[0_5px_20px_rgba(231,168,189,0.15)] transition hover:bg-[#F2C6D5] active:scale-95"
        >
          <Plus size={22} strokeWidth={2.3} />
        </Link>

        {/* Notifications */}
        <Link
          to="/notifications"
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
            isActive("/notifications") ? "text-[#E7A8BD]" : "text-[#756B72]"
          }`}
        >
          <Bell size={21} />
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
            isActive("/profile") ? "text-[#E7A8BD]" : "text-[#756B72]"
          }`}
        >
          <User size={21} />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
