'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const tabs =[
  'register',
  'personal-info',
  'payment-gateway'
]
const RegisterPage = () => {
  const [step,setStep] = useState(1)
  const [activeTab, setActiveTab] = useState(tabs[0])
  console.log(activeTab);
  console.log(step);
    const handlePrevious = ()=>{
        if ( step > 1){
            setStep((curStep)=>curStep -1)
            setActiveTab(tabs[step - 2])
        }
    }
    const handleNext =()=>{
        if (step  < tabs.length){
            setStep((curStep)=> curStep +1)
            setActiveTab(tabs[step]) 
          } 
    }
  return (
    
    <div className='flex justify-center items-center pb-[67px] pt-16'>
        <div>
      <Image src="/register.png" alt='cowry image' height={500} width={440} />
        </div>
        <form className='bg-custom-green flex flex-col px-[30px] w-[26rem]'>
          <ul className="steps pt-14">
          {tabs.map((tab,index)=>{
          return ( <li key={tab} className={`step ${step-1 >= index ?' step-primary':'' }`}></li>)
        })}
          </ul>
        {activeTab === 'register'&& <Register handleNext={handleNext} handlePrevious={handlePrevious} />}
        {activeTab === 'personal-info'&& <PersonalInfo  handleNext={handleNext} handlePrevious={handlePrevious} />}
        {activeTab === 'payment-gateway'&& <PaymentGateway  handleNext={handleNext} handlePrevious={handlePrevious} />}
        </form>
    </div>
  )
}

export default RegisterPage;

export const Register = ({handleNext})=>{
  return (
    <>
     <div>
            <h2 className='pt-4 font-bold text-2xl text-center'>Register Your  <span className='font-medium'>E-mail</span></h2>
            <label className='text-black-100 font-medium block w-full mt-5'>
              E-mail
            <input type='text' className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <label className='text-black-100 font-medium block w-full mt-5'>
              Password
            <input type='password' className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
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


export const PersonalInfo = ({handleNext,handlePrevious})=>{
  return (
    <>
     <div>
            <h2 className='pt-6 font-bold text-2xl text-center'>Register Your   <span className='font-medium'>Personal Info</span></h2>
            <label className='text-black-100 font-medium mt-6 w-full block'>
            Name
            <input type='text' className='input h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <label className='text-black-100 font-medium  mt-6 w-full block'>
            Date of Birth
            <input type='text' className='input h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <label className='text-black-100 font-medium  mt-6 w-full block'>
            Phone No.
            <input type='tell' className='input h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <label className='text-black-100 font-medium  mt-6 w-full block'>
            Address
            <input type='text' className='input h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <div className='flex mb-12'>
            <button className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'onClick={handleNext}>Next</button>
              <button className='btn bg-custom-red hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
            </div>
           
          </div>
    </>
  )
}

export const PaymentGateway = ({handlePrevious})=>{
  return (
    <>
     <div>
            <h2 className='pt-5  text-2xl font-medium  text-center'>Register Your   <span className='font-bold'>Payment Way</span></h2>
            <div className='flex justify-between mt-7 items-center'>
            <p className='text-black-100 text-lg font-medium '>Choose your payment option   </p>
            <p className='text-base font-normal'>Skip</p>
            </div>
            <div className=''>
              <button className='btn  border-custom-green-100 hover:bg-custom-green-100
               text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your E-Sewa Account</button>
                <button className='btn  border-custom-green-100 hover:bg-custom-green-100
               text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your Khalti Account</button>
                <button className='btn  border-custom-green-100 hover:bg-custom-green-100
               text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your Thaili Account</button>
                <button className='btn  border-custom-green-100 hover:bg-custom-green-100
               text-black-100 w-full mx-auto font-medium text-center mt-6 h-10 min-h-10'>Connect Your FonePay Account</button>
                 <button className='btn  border-custom-green-100 hover:bg-custom-green-100
               text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your Paypal Account</button>
            </div>
            <div className='flex mb-[3.7rem]'>
            <button className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'> <Link href='/login'>Finish</Link></button>
              <button className='btn bg-custom-red hover:bg-custom-red text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
            </div>
          </div>
    </>
  )
}
