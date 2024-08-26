'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import ProtectedRoute from '@/app/_components/Protected/Protected';
import { usePayment } from '@/app/_components/hook/custom/usePayment';
const PaymentPage =  () => {
  // const componentProps = {
  //   email: formFields.email,
  //   amount: formFields.amount * 100,
  //   firstName: formFields.firstname,
  //   lastName: formFields.lastname,
  //   id:projectId,
  //   publicKey: TestPublicKey,
  //   label: "Ripple Team",
  //   onSuccess: ({ reference }) => {
  //     let message = `Payment complete! Reference ${reference}`;
  //       axios.post(`https://ripple-project-1.onrender.com/api/v1/payment/initialize-payment/`)
  //       .then(function (response) {
  //         console.log(response,'sucess response');
  //         toast.success(message)
  //       })
  //       .catch(function (error) {
  //         console.log(error,'error response');
          
  //       });
       
  //       // router?.push('/')
  //     resetFormFields();
  //   },
  //   onClose: () => {
  //     toast.error("Transcation cancelled")
  //     // router?.push('/')
  //   }
  // };
 
  const {loading,handleFormValue,makepayment,formFields} = usePayment()
  
  return (
    <div className='flex justify-center items-center mb-[67px] w-[735px] h-[430px] bg-white shadow-custom  mx-auto mt-10'>
        <div className='h-[450px] w-[28rem] relative'>
          <Image src="/payment.avif" alt='cowry image'  fill objectFit='cover' />
        </div>
          <div className='bg-custom-blue flex flex-col h-[450px] px-[30px] w-[28rem]' >
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-6'>E-mail</label>
              <input value={formFields.email} onChange={handleFormValue} 
              type='text' name='email' required readOnly
              className=' rounded-[5px] text-custom-black text-sm  bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-3'>Firstname:</label>
              <input value={formFields.firstname} readOnly onChange={handleFormValue} type='text' name='firstname'
               required className='rounded-[5px]text-custom-black text-sm bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-3'>Lastname:</label>
              <input value={formFields.lastname} onChange={handleFormValue} type='text' name='lastname'
               required className='rounded-[5px] text-custom-black text-sm  bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-3'>Amount:</label>
              <input value={formFields.amount} onChange={handleFormValue} type='number' name='amount' required className='rounded-[5px] 
              text-custom-black text-sm bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
             <button disabled={loading} className={` ${loading ? "bg-[#7e7c7c]" : "bg-[#bfbfbf] hover:bg-[#dadada]"} text-custom-blue focus:outline-none rounded-sm w-full 
              uppercase border-0 tracking-wide text-[10px] font-semibold text-center mx-auto my-8 h-10 min-h-10`}
          onClick={makepayment}>
          {loading ? <span className="Btnloader"></span> : 'Pay'}
        </button>
{/* 
            <PaystackButton text='pay'
             className='hover:bg-[#dadada] bg-[#bfbfbf] text-custom-blue focus:outline-none rounded-sm w-full 
             uppercase border-0 tracking-wide  text-[10px] font-semibold text-center mx-auto my-8 h-10 min-h-10'  {...componentProps}/> */}
          </div>
         
    </div>
  )
}



export default function ProtectedPaymentPage() {
  return (
    <ProtectedRoute>
      <PaymentPage/>
    </ProtectedRoute>
  );
}