"use client";

import React, { useState } from "react";
import SideNavigation from "./components/SideNavigation";
import ProtectedRoute from "@/app/_components/Protected/Protected";
import { RiDashboardFill } from "react-icons/ri";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full bg-[#fafafa] mt-[6rem] grid sm:grid-cols-2 grid-cols-1 gap-4   max-w-[1920px] mx-auto min-h-screen border
     border-t-2 px-[1rem] md:px-[5rem] lg:px-[10rem]">
      {/* Mobile Toggle Button */}
      <RiDashboardFill
        className="md:hidden px-1 h-[10px] mt-2 text-custom-blue py-0 text-sm text-left w-fit rounded-md"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      />

      {/* Content Area */}
      <div className="grid grid-cols-1 h-full gap-4 md:gap-8">
        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-[#fcfefe] shadow-lg h-full transform ${
            isSidebarOpen ? "translate-x-0 h-full" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 md:block z-[40]`}
        >
          <SideNavigation closeSidebar={toggleSidebar} />
        </div>
      </div>
        <div className="py-1 z-[10]">{children}</div>
    </div>
  );
};

export default function ProtectedLayout({ children }) {
  return (
    <ProtectedRoute>
      <Layout>{children}</Layout>
    </ProtectedRoute>
  );
}
