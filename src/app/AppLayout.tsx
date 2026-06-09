import { Outlet } from "react-router";
import Navbar from "../features/shared/components/Navbar";

const AppLayout = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#07111f]">
        {/* Blue Glow */}
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Cyan Glow */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Purple Glow */}
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <Navbar />

        <main className="pt-10 pb-24 md:pt-20 md:pb-0">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
