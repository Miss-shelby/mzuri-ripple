'use client'
import { CiLogout } from "react-icons/ci";
import LogoutModal from "./LogOutModal";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAuth } from "./Providers/Providers";

function SignOutButton() {
    const token = Cookies.get("token")
    const router = useRouter()
    const [showModal, setShowModal] = useState(false);
    const {logOut} = useAuth()

  const handleOpenModal = () => {
   
    setShowModal(true);
  };

  const handleCloseModal = () => {
    Cookies.remove("token")
    logOut()
    router.push("/")
    setShowModal(false);
  };
  const handleCloseModalNo = () => {
    setShowModal(false);
  };
  return (
    <>
    <button onClick={handleOpenModal} 
    className={`py-3 px-5 hover:bg-[#eff3f4] relative ${showModal ? 'blur-sm' : ''} transition duration-300
     hover:text-custom-black  flex items-center gap-4 font-semibold text-primary-200 w-full`}>
      <CiLogout className='h-5 w-5 ' />
      <span>Sign out</span>
    </button>
    {showModal &&  <LogoutModal  onCloseYes={handleCloseModal} onCloseNo={handleCloseModalNo} show={showModal}/>}
   
    </>
  );
}

export default SignOutButton;
