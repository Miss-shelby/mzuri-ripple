'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Formik,Form } from 'formik'
import { toast } from 'react-toastify'
import { LoginApi } from '@/app/_components/Apis/api'
import { useRouter } from 'next/navigation'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import axios from 'axios'
import Cookies from 'js-cookie'
const PaymentPage =  () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter(); 

  return (
    <div className='flex justify-center items-center pb-[67px] pt-[62px]'>
        <div>
      <Image src="/payment.avif" alt='cowry image' height={200} width={365} />
        </div>
          <form className='bg-custom-green flex flex-col px-[30px] w-[26rem]'>
              <h2 className='pt-8 font-bold text-center text-2xl'>Make <span className='font-medium'>Payments</span></h2>
              <label className='text-black-100 font-medium mt-7'>E-mail</label>
              <input type='text' name='email' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
              <label className='text-black-100 font-medium mt-7'>Firstname:</label>
              <input type='text' name='firstname' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
              <label className='text-black-100 font-medium mt-7'>Lastname:</label>
              <input type='text' name='lastname' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
              <label className='text-black-100 font-medium mt-7'>Amount:</label>
              <input type='tell' name='amount' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
              <button type='submit' 
                disabled={loading} 
              className={`btn ${loading ? 'bg-gray-400' : 'bg-custom-blue'} hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium text-center mx-auto my-8 h-10 min-h-10`}>
                {loading?<span className="Btnloader"></span> :'Pay'}</button>
              
            
              
          </form>
         
    </div>
  )
}

export default PaymentPage
