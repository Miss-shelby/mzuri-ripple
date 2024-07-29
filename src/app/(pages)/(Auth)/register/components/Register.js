'use client'
import Link from "next/link"
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

 const Register = ({handleNext,values,handleChange,errors})=>{
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
      <>
       <div >
              <h2 className='pt-4 font-bold text-2xl text-center'>Register Your  <span className='font-medium'>E-mail</span></h2>
              <label className='text-black-100 font-medium block w-full mt-5'>
                E-mail
              <input type='text' name='email' onChange={handleChange} value={values.email} className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
            
              <p className="text-red-500">{errors.email}</p>
              </label>
              <div className="relative"> </div>
              <label className='text-black-100 font-medium block w-full mt-5'>
                Password
              <input  type={showPassword ? 'text' : 'password'} name='password' 
              value={values.password} onChange={handleChange}
               className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
              <button type='button' onClick={togglePasswordVisibility} className='absolute right-[25%] top-[66%] transform -translate-y-1/2 text-gray-600'>
                 {showPassword ?  <FiEye /> : <FiEyeOff /> }
                </button>
              <p className="text-red-500 mt-2">{errors.password}</p>
              </label>
             
              <div className='flex justify-center w-full'>
                <button className='btn bg-custom-blue hover:bg-custom-blue
                 text-white w-[10.5rem] mx-auto text-lg font-medium text-center mt-6 h-10 min-h-10' onClick={handleNext}>Next</button>
              </div>
              <div className='flex items-center justify-between mt-6'>
                <hr className='border border-1 border-custom-brown w-[10rem]'/> 
                <p className='text-black-100 mx-3 text-sm'>OR</p>
                <hr className='border border-1 border-custom-brown w-[10rem]'/>
              </div>
              <button className='btn bg-custom-red hover:bg-custom-red text-white w-full text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10'>
              Continue with Google</button>
              <button className='btn bg-custom-blue-100 hover:bg-custom-blue-100 text-white w-full text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10'>
              Continue with Facebook</button>
              {/* <hr className='border border-1 border-custom-brown w-full mt-3'/> */}
              <p className='mt-6 mb-9 text-center font-medium text-black-100'>Already Have an account? <span className='font-bold cursor-pointer'>
                <Link href='/login'> Login</Link></span></p>
            </div>
      </>
    )
  }
export default Register