import {
  Bell,
  Bookmark,
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
              to="/saved"
              className={navItemClass(isActive("/saved"))}
              aria-label="saved"
            >
              <Bookmark
                size={20}
                strokeWidth={isActive("/saved") ? 2.2 : 1.8}
              />

              {isActive("/saved") && (
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
