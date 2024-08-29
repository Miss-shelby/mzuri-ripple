'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { useAuth } from "../../Providers/Providers";
const NavBar = () => {
  const pathname = usePathname()
  const {authUser} = useAuth()

  
  return (
    <div className="flex justify-between sticky z-40 top-0 items-center w-full  py-[2rem]  max-w-[1920px] mx-auto  px-[10rem] bg-white">
      <div className="flex items-center">
        <p className="text-[18px] cursor-pointer "><Link href="/explore">Discover</Link> <span className="text-[#BFBFBF] px-[12px] ">|</span> </p>
        <p className="flex items-center">
            <span className="inline-flex items-center"> <IoIosAdd className="h-5 w-5" /></span> <Link href="/project"> Start a New Project </Link></p>
      </div>
      <h2 className="text-[25px] font-bold cursor-pointer uppercase"><Link href="/">Ripple</Link></h2>
      <div className="flex items-center">
      
        <p className="text-[18px] px-[2rem] cursor-pointer"><Link href="/dashboard">Dashboard</Link></p>
        {authUser === null && pathname !== '/login' && pathname !== '/register'  && <p className="text-[18px] px-[2rem] cursor-pointer"><Link href="/login">Sign in</Link></p>}
      
       {
        <Button>
        {pathname === '/login' && <Link href="/register">Register</Link>}
        {pathname === '/explore' && <Link href="/getstarted">Get Started</Link>}
        {pathname == '/register' && <Link href="/login"> Login</Link>}
        {pathname !== '/login' && pathname !== '/explore' && pathname !== '/register' && (<Link href="/getstarted">How it works</Link> )}
      </Button>
      
       }
       
      </div>
    </div>
  );
};

export default NavBar;

export const Button = ({children})=>{
  return (
    <>
     <button className="btn bg-[#0069D9] hover:bg-[#0069D9] rounded-[6px] text-white text-sm h-[2rem] pb-2 pt-1 text-center min-h-2"> {children}</button>
    </>
  )
}
