// import { Outlet } from "react-router";
// import Navbar from "../features/shared/components/Navbar";

// const AppLayout = () => {
//   return (
//     <>
//       <div className="relative min-h-screen overflow-hidden bg-[#07111f]">
//         {/* Blue Glow */}
//         <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

//         {/* Cyan Glow */}
//         <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

//         {/* Purple Glow */}
//         <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

//         <Navbar />

//         <main className="pt-10 pb-24 md:pt-20 md:pb-0">
//           <Outlet />
//         </main>
//       </div>
//     </>
//   );
// };

// export default AppLayout;

import { Outlet } from "react-router";
import Navbar from "../features/shared/components/Navbar";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B090C] text-[#F8F3F6]">
      {/* ================================================= */}
      {/* Ambient Background */}
      {/* ================================================= */}

      {/* Soft rose glow - top left */}
      <div className="pointer-events-none fixed -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#E7A8BD]/[0.045] blur-[130px]" />

      {/* Deep rose glow - bottom right */}
      <div className="pointer-events-none fixed -right-40 -bottom-40 h-[450px] w-[450px] rounded-full bg-[#9F526F]/[0.035] blur-[140px]" />

      {/* Very subtle center light */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,168,189,0.025),transparent_45%)]" />

      {/* ================================================= */}
      {/* Navigation */}
      {/* ================================================= */}

      <Navbar />

      {/* ================================================= */}
      {/* Page Content */}
      {/* ================================================= */}

      <main className="relative z-10 min-h-screen pt-20 pb-24 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
