'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
const NavBar = () => {
  const pathname = usePathname()

  return (
    <div className="flex justify-between items-center w-full py-[2rem]">
      <div className="flex items-center">
        <p className="text-[18px]">Discover <span className="text-[#BFBFBF] px-[12px] ">|</span> </p>
        <p className="flex items-center">
            <span className="inline-flex items-center"> <IoIosAdd className="h-5 w-5" /></span> <Link href="/newproject"> Start a New Project </Link></p>
      </div>
      <h2 className="text-[25px] font-bold cursor-pointer"><Link href="/">KICKSTARTER</Link></h2>
      <div className="flex items-center">
        <BsSearch className="h-4 w-4" />
        <p className="text-[18px] px-[2rem] cursor-pointer"><Link href="/login">Sign in</Link></p>
       <Button>{pathname ==='/'? <Link href="/getstarted">How it works</Link>  : pathname.slice(1)}</Button>
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
