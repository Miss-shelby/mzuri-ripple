"use client";

import React, { useState } from 'react';
import SideNavigation from './components/SideNavigation';
import ProtectedRoute from '@/app/_components/Protected/Protected';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='w-full bg-[#fafafa] max-w-[1920px] mx-auto min-h-screen mt-4 border border-t-2 
      px-[1rem] md:px-[5rem] lg:px-[10rem]  grid grid-cols-1 md:grid-cols-[16rem_1fr] h-full gap-6 md:gap-12'>

      {/* Mobile Toggle Button */}
      <button 
        className='md:hidden p-2 bg-gray-200 rounded-md mb-4'
        onClick={toggleSidebar}
        aria-label='Toggle Sidebar'
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 md:relative md:translate-x-0 md:block`}
      >
        <SideNavigation closeSidebar={toggleSidebar}  />
        {/* Close Button in Sidebar */}
        <button 
          className='md:hidden p-2 bg-red-500 text-white rounded-md mt-2'
          onClick={toggleSidebar}
        >
          Close
        </button>
      </div>

      {/* Content */}
      <div className='py-1'>{children}</div>
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
