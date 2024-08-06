import React from 'react'
import SideNavigation from './components/SideNavigation'
import ProtectedRoute from '@/app/_components/Protected/Protected';


const Layout = ({children}) => {
  
  return (
    <div className='w-full  bg-[#fafafa]   max-w-[1920px] mx-auto min-h-screen mt-4 border border-t-2  px-[10rem] grid grid-cols-[16rem_1fr] h-full gap-12'>
        <SideNavigation/>
        <div className='py-1'>{children}</div>
     
    </div>
  )
}

export default function ProtectedLayout({children}) {
    return (
      <ProtectedRoute>
        <Layout >{children}</Layout>
      </ProtectedRoute>
    );
  }

