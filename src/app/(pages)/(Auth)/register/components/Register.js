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
              <h2 className='pt-4 font-bold lg:text-2xl text-xl text-center'>Register Your  <span className='font-medium'>E-mail</span></h2>
              <label className='text-black-100 font-medium block w-full mt-5'>
                E-mail
              <input type='text' name='email' onChange={handleChange} value={values.email} className='input focus:outline-none h-9 input-bordered input-custom-brown w-full mt-3' />
            
              <p className="text-red-500">{errors.email}</p>
              </label>
              <div className=""> 
              <label className="text-black-100 font-medium block w-full mt-5 relative">
                Password
                <div className="relative mt-3">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="input h-9 input-bordered input-custom-brown w-full focus:outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </button>
                </div>
                <p className="text-red-500 mt-2">{errors.password}</p>
              </label>

              </div>
              <div className='flex justify-center w-full'>
                <button className='btn bg-custom-blue hover:bg-custom-blue
                 text-white lg:w-[10.5rem] w-full mx-auto text-lg font-medium 
                 text-center mt-6 lg:h-10 lg:min-h-10' onClick={handleNext}>Next</button>
              </div>
              <div className='flex items-center justify-between mt-6'>
                <hr className='border border-1 border-custom-brown w-[10rem]'/> 
                <p className='text-black-100 mx-3 text-sm'>OR</p>
                <hr className='border border-1 border-custom-brown w-[10rem]'/>
              </div>
              <button className='btn bg-custom-red hover:bg-custom-red text-white w-full text-base 
               lg:text-lg font-medium text-center
               mx-auto mt-6 lg:h-10 lg:min-h-10'>
              Continue with Google</button>
              <button className='btn bg-custom-blue-100 hover:bg-custom-blue-100 text-white
               w-full lg:text-lg text-base  font-medium text-center mx-auto mt-6 lg:h-10 lg:min-h-10'>
              Continue with Facebook</button>
              {/* <hr className='border border-1 border-custom-brown w-full mt-3'/> */}
              <p className='mt-6 mb-9 text-center font-medium text-black-100'>Already Have an account? <span className='font-bold cursor-pointer'>
                <Link href='/login'> Login</Link></span></p>
            </div>
      </>
    )
  }
export default Register