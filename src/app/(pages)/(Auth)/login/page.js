'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Formik,Form } from 'formik'
import { toast } from 'react-toastify'
import { LoginApi } from '@/app/_components/Apis/api'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Cookies from 'js-cookie'
const LoginPage =  () => {
  const [loading, setLoading] = useState(false);
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
        Cookies.set("token",token)
        
        toast.success('Login succesfull')
        router?.push('/project')
        
      })
      .catch(function (error) {
       
       console.log(error.response.data.detail);
       const errorMsg = error.response.data.detail;
       toast.error(errorMsg)
       
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
              <input type='text' name='email' onChange={handleChange} value={values.email} className='input h-9 input-bordered input-custom-brown w-full mt-3' />
              <div className='flex justify-between mt-7 items-center'>
              <p className='text-black-100 font-medium '>Password   </p>
              <p className='text-[12px]'>Forgot Password?</p>
              </div>
              <input type='password' name='password' value={values.password} onChange={handleChange}  className='input h-9 input-bordered input-custom-brown w-full mt-3' />
              <button type='submit' className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10'>
                {loading?'Loading..' :'Login'}</button>
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
