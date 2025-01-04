'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import { useAuth } from "../../Providers/Providers";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname()
  const {authUser} = useAuth()

  const handleNav = () => {
    setNav(!nav);
    
  };
 

  
  return (
    <>
    <div className="flex justify-between fixed z-50  top-0 bg-white items-center w-full px-3 py-6 max-w-[1920px] mx-auto  lg:px-[10rem] ">
      <div className="flex items-center">
        <p className="xl:text-[18px] lg:text-base cursor-pointer "><Link href="/">Discover</Link> <span className="text-[#BFBFBF] px-[12px]  ">|</span> </p>
        <p className="hidden lg:flex  items-center">
            <span className="inline-flex items-center"> <IoIosAdd className="h-5 w-5" /></span> <Link href="/project"> Start a New Project </Link></p>
      </div>
      <h2 className=" hidden lg:block xl:text-[25px] lg:text-lg font-bold cursor-pointer uppercase"><Link href="/">Ripple</Link></h2>
      <div className="flex items-center relative">
        {/* mobile nav */}
      <div className="lg:hidden cursor-pointer relative" onClick={handleNav}>
        {nav ? <IoClose /> :  <RxHamburgerMenu />}
      </div>     
        <p className=" hidden lg:block xl:text-[18px] lg:text-base xl:px-[2rem] lg:px-[1rem] cursor-pointer"><Link href="/dashboard">Dashboard</Link></p>
        {authUser === null && pathname !== '/login' && pathname !== '/register'  && <p className="hidden lg:block xl:text-[18px] lg:text-base xl:px-[2rem] lg:px-[1rem] cursor-pointer"><Link href="/login">Sign in</Link></p>}
      
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
    <div className={`fixed z-40 w-full bg-white overflow-hidden flex flex-col px-3   lg:hidden   origin-top duration-700 ${
              !nav ? "h-0" : "h-full"
            }`}>
            <ul className="text-[#072635] text-sm flex flex-col  mt-14 cursor-pointer font-extrabold font-manrope">
              
            <p className="flex  items-center">
            <span className="inline-flex items-center"> <IoIosAdd className="h-5 w-5" /></span> <Link href="/project">
             Start a New Project </Link></p>
              <button className="bg-[#0069D9] hover:bg-[#0069D9] my-5 rounded-[6px] text-white h-[2rem] min-h-2">
              <Link href="/login"> Sign In</Link></button>
              <li className="  text-base cursor-pointer">
                <Link href="/dashboard">Dashboard</Link></li>
            </ul>
              <div className="flex flex-col  mt-20 ">
              <button className=" btn bg-[#0069D9] hover:bg-[#0069D9] text-left rounded-[6px] text-white h-[2rem]
                 min-h-2"> How it works</button>
          </div>
      </div>
    </>
  );
};

export default NavBar;

export const Button = ({children})=>{
  return (
    <>
     <button className="hidden lg:block btn bg-[#0069D9] hover:bg-[#0069D9] rounded-[6px] text-white xl:text-sm lg:text-xs h-[2rem] pb-2 xl:pt-1 lg:pt-[7px] text-center min-h-2"> {children}</button>
    </>
  )
}
