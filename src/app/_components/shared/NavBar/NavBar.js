import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full py-[2rem]">
      <div className="flex items-center">
        <p className="text-[18px]">
          Discover <span className="text-[#BFBFBF] px-[9px]">|</span>{" "}
        </p>
        <p className="flex items-center text-[18px]">
          <span>
            <IoIosAdd className="h-5 w-5" />
          </span>
          Start a New Project
        </p>
      </div>
      <h2 className="text-[25px] font-bold">KICKSTARTER</h2>
      <div className="flex items-center">
        <BsSearch className="h-4 w-4" />
        <p className="text-[18px] px-[2rem]">Sign in</p>
        <button className="btn bg-[#0069D9] rounded-[6px] text-white text-sm h-[2rem] pb-2 pt-1 text-center min-h-2"> How it works</button>
      </div>
    </div>
  );
};

export default NavBar;
