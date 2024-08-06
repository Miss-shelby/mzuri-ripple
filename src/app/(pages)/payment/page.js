'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '@/app/_components/Providers/Providers';
import { useRouter } from 'next/navigation'
import { usePaystackPayment } from 'react-paystack';
import {PaystackButton} from 'react-paystack';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';
import ProtectedRoute from '@/app/_components/Protected/Protected';


const PaymentPage =  () => {
  const TestPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  const {authUser,userProject,projectId}= useAuth()
  const [loading, setLoading] = useState(false);
  const router = useRouter(); 
  const token = Cookies.get("token")
  console.log(authUser,userProject);
  console.log(projectId,'id from global context');
  
  const [formFields,setFormFields] = useState({
    email:authUser?.email || '',
    firstname: authUser?.full_name || '',
    lastname: '',
    amount: ''
  })
console.log(formFields);

  const handleFormValue=(e)=>{
    setFormFields({
      ...formFields,
      [e.target.name]:e.target.value,
    })
  }
  const resetFormFields = () => {
    setFormFields({
      email: '',
      firstname: '',
      lastname: '',
      amount: ''
    });
  };
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
  const makepayment = () => {
    if (token){
      axios.post(
        `https://ripple-project-1.onrender.com/api/v1/payment/initialize-payment/`,
        {
          first_name: formFields.firstname,
          last_name: formFields.lastname,
          email: formFields.email,
          amount: formFields.amount,
          project_id: projectId,
        },
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response, 'success response');
        router.push(response.data?.data?.authorization_url);
        // toast.success(message);
        console.log(response.data?.data?.authorization_url);
      })
      .catch(function (error) {
        console.log(error, 'error response');
      });
    }
  };
  
  
  return (
    <div className='flex justify-center items-center mb-[67px] w-[735px] h-[430px] bg-white shadow-custom  mx-auto mt-10'>
        <div className='h-[450px] w-[28rem] relative'>
          <Image src="/payment.avif" alt='cowry image'  fill objectFit='cover' />
        </div>
          <div className='bg-custom-blue flex flex-col h-[450px] px-[30px] w-[28rem]' >
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-6'>E-mail</label>
              <input value={formFields.email} onChange={handleFormValue} 
              type='text' name='email' required 
              className=' rounded-[5px] text-[#e0eafc]  bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-3'>Firstname:</label>
              <input value={formFields.firstname} onChange={handleFormValue} type='text' name='firstname'
               required className='rounded-[5px] text-[#e0eafc]  bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-3'>Lastname:</label>
              <input value={formFields.lastname} onChange={handleFormValue} type='text' name='lastname'
               required className='rounded-[5px] text-[#e0eafc]  bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
              <label className='text-[#e0eafc] text-[10px] uppercase tracking-wide font-medium mt-3'>Amount:</label>
              <input value={formFields.amount} onChange={handleFormValue} type='number' name='amount' required className='rounded-[5px] 
              text-[#e0eafc] bg-transparent h-9 border border-[#cecece] focus:outline-none focus:bg-transparent  w-full mt-3' />
             <button  className='hover:bg-[#dadada] bg-[#bfbfbf] text-custom-blue focus:outline-none rounded-sm w-full uppercase border-0 tracking-wide  text-[10px] font-semibold text-center mx-auto my-8 h-10 min-h-10'  onClick={makepayment}>Pay</button>
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