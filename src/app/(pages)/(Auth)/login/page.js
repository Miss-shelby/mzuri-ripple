import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center pb-[67px] pt-[62px]'>
        <div>
      <Image src="/cowry.png" alt='cowry image' height={500} width={440} />
        </div>
        <form className='bg-custom-green flex flex-col px-[30px] w-[26rem]'>
            <h2 className='pt-12 font-bold text-2xl'>Hello! <span className='font-medium'>Welcome Back</span></h2>
            <p className='text-black-100 font-medium mt-7'>E-mail</p>
            <input type='text' className='input h-9 input-bordered input-custom-brown w-full mt-3' />
            <div className='flex justify-between mt-7 items-center'>
            <p className='text-black-100 font-medium '>Password   </p>
            <p className='text-[12px]'>Forgot Password?</p>
            </div>
            <input type='password' className='input h-9 input-bordered input-custom-brown w-full mt-3' />
            <button className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10'>Login</button>
            <div className='flex items-center justify-between mt-8'>
              <hr className='border border-1 border-custom-brown w-[10rem]'/> 
              <p className='text-black-100 mx-3 text-sm'>OR</p>
              <hr className='border border-1 border-custom-brown w-[10rem]'/>
            </div>
            <button className='btn bg-custom-red hover:bg-custom-red text-white w-full text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10'>
            Continue with Google</button>
            <button className='btn bg-custom-blue-100 hover:bg-custom-blue-100 text-white w-full text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10'>
            Continue with Facebook</button>
            <hr className='border border-1 border-custom-brown w-full mt-6'/>
            <p className='mt-6 mb-12 text-center font-medium text-black-100'>New to Ripple?<span className='font-bold cursor-pointer'>
              <Link href='/register'> Register</Link></span></p>
        </form>
    </div>
  )
}

export default LoginPage
