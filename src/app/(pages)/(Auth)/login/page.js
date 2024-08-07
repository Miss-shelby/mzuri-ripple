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
import { useAuth } from '@/app/_components/Providers/Providers'
const LoginPage =  () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {userProject } = useAuth()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter(); 
  const formData = new FormData();

  const onSubmitHandler= async (values)=>{
    formData.append("username", values.email);
    formData.append("password", values.password);
    if (loading ) return;
    setLoading(true)
  await axios
      .post(`${LoginApi}`, formData, { headers: {'Content-Type': 'multipart/form-data' }})
      .then(function (response) {
        console.log(response, "response from db");
        const token = response.data.access_token;
        Cookies.set("token",token, { path: "/" })
        console.log(token,'token from login page');
        toast.success('Login succesfull')
        router?.push('/dashboard')
        
      })
      .catch(function (error) {
        if (error?.response) {
          const { status, data } = error.response;
  
          if (status === 400) {
            toast.error(data.detail);
            console.log(error,'400 error');
          } else if (status === 500) {
            toast.error('Server error. Please try again later.');
            console.log(error,'500');
          } else if (status === 401 || status === 403 || status === 404) {
            toast.error(`Error: ${status}`);
            console.log(error,'status ');
          } else {
            toast.error('An unexpected error occurred');
            console.log(error,'unexpected error');
          }
        } else {
          toast.error('Network error. Please check your connection.');
          console.log(error,'netwok errror');
        }
      })
   
       
      
      .finally(function(){
        setLoading(false)
      })

} 

  const defaultValues ={
    email:'',
    password:''
  }

 

  return (
    <div className='flex justify-center items-center pb-[67px] pt-[62px]'>
        <div>
      <Image src="/cowry.png" alt='cowry image' height={500} width={440} />
        </div>

        <Formik initialValues={defaultValues} onSubmit={onSubmitHandler}>
          {({
            values,
            handleChange
          })=>{
            return(

          <Form className='bg-custom-green flex flex-col px-[30px] w-[26rem]'>
              <h2 className='pt-12 font-bold text-2xl'>Hello! <span className='font-medium'>Welcome Back</span></h2>
              <p className='text-black-100 font-medium mt-7'>E-mail</p>
              <input type='text' name='email' required onChange={handleChange} value={values.email} className='input h-9 input-bordered input-custom-brown w-full mt-3' />
              <div className='flex justify-between mt-7 items-center relative'>
              <p className='text-black-100 font-medium '>Password   </p>
              <p className='text-[12px]'>Forgot Password?</p>
              </div>
              <input  type={showPassword ? 'text' : 'password'} name='password'
               required value={values.password} onChange={handleChange}
                 className='input h-9 input-bordered input-custom-brown w-full mt-3' />
                 <button type='button' onClick={togglePasswordVisibility} 
                 className='absolute right-[25%] top-[61%] transform -translate-y-1/2 text-gray-600'>
                 {showPassword ?  <FiEye /> : <FiEyeOff /> }
                </button>

              <button type='submit' 
                disabled={loading} 
              className={`btn ${loading ? 'bg-gray-400' : 'bg-custom-blue'} hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10`}>
                {loading?<span className="Btnloader"></span> :'Login'}</button>
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
          </Form>
            )
          }}
        </Formik>
    </div>
  )
}

export default LoginPage
