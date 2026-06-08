import { Home, Menu, PlusSquare, User, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import LogoutButton from "../../auth/components/LogoutButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      {/* <header className="sticky top-4 z-50 hidden px-4 md:block"> */}
      <header className="fixed top-0 right-0 left-0 z-50 h-16 ...">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-3xl border border-white/20 bg-white/5 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-2xl">
          {/* Logo */}
          <Link
            to="/"
            className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent"
          >
            SocialSync
          </Link>

          {/* Search */}
          <input
            type="text"
            placeholder="Search users..."
            className="w-80 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-md outline-none"
          />

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
            >
              <Home size={22} />
            </Link>

            <Link
              to="/create-post"
              className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
            >
              <PlusSquare size={22} />
            </Link>

            <Link
              to="/following"
              className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
            >
              <Users size={22} />
            </Link>

            <Link
              to="/profile"
              className="rounded-xl p-3 text-gray-300 transition hover:bg-white/10 hover:text-blue-400"
            >
              <User size={22} />
            </Link>

            <LogoutButton />
          </div>
        </nav>
      </header>

      {/* Mobile Top Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent"
          >
            SocialSync
          </Link>

          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="text-white" />
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 p-4">
            <input
              type="text"
              placeholder="Search users..."
              className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            />

            <div className="flex flex-col gap-3">
              <LogoutButton />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 z-50 flex w-[95%] max-w-md -translate-x-1/2 items-center justify-around rounded-3xl border border-white/20 bg-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-2xl md:hidden">
        <Link to="/" className="text-gray-300">
          <Home size={24} />
        </Link>

        <Link to="/following" className="text-gray-300">
          <Users size={24} />
        </Link>

        <Link
          to="/create-post"
          className="rounded-full bg-blue-600 p-3 text-white"
        >
          <PlusSquare size={24} />
        </Link>

        <Link to="/profile" className="text-gray-300">
          <User size={24} />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
