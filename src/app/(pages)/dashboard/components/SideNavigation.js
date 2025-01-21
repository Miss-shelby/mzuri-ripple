"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FcHome } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import SignOutButton from '@/app/_components/SignOut';
const navLinks = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: <FcHome  className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'projects',
    href: '/dashboard/projects',
    icon: <GrProjects className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'user profile',
    href: '/dashboard/profile',
    icon: <FaRegUserCircle className='h-5 w-5 text-primary-600' />,
  },
];

function SideNavigation({closeSidebar}) {

  const hideBar=()=>{
    closeSidebar()
  }
  //for active link
  const pathname = usePathname()
 

  
  return (
    <nav className='  shadow-lg pt-6 bg-[#fcfefe] fixed w-full inset-0 pb-4 z-50 mt-[6rem] sm:mt-0'>
      <ul className='flex flex-col gap-2 h-full text-lg text-custom-black'>
        {navLinks.map((link) => (
          <li key={link.name} onClick={hideBar}>
            <Link
              className={`py-3 pl-4 hover:bg-[#eff3f4] hover:text-primary-100
                 transition-colors flex items-center
                  gap-4 font-semibold text-primary-200 ${pathname === link.href? "bg-[#eff3f4]" :""}`}
              href={link.href}
            >
              {link.icon}
              <span className='capitalize'>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='mt-auto'>
          <SignOutButton />
          <button 
          className='md:hidden ml-4  p-2 bg-red-500 text-white rounded-md mt-2'
          onClick={closeSidebar} 
        >
          Close
        </button>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
