import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { useAuth } from '../../Providers/Providers';
import axios from 'axios';
import { LoginApi } from '../../Apis/api';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const useLogin = () => {
    const searchParams = useSearchParams()
  const pathname = searchParams.get('path')

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
        const token = response.data.access_token;
        Cookies.set("token",token, { path: "/" })
        toast.success('Login succesfull')

        if(pathname === '/payment'){
          router?.push('/payment')
        } 
        else {
          router?.push('/dashboard')
        }        
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
            
          } else {
            toast.error('An unexpected error occurred');
           
          }
        } else {
          toast.error('Network error. Please check your connection.');
         
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
return {loading,showPassword,togglePasswordVisibility,defaultValues,onSubmitHandler}
}

export { useLogin}