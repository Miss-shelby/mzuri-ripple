import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { registerApi } from '../Apis/api';


const useRegister = () => {
  const [loading, setLoading] = useState(false);
    
const register =(values)=>{
  if (loading) return;
  setLoading(true);
    axios.post(`${registerApi}`, {
      email: values.email,
      password: values.password,
      full_name:values.fullname,
      date_of_birth:values.dob,
      phone:values.phoneNumber,
      address:values.address,
    })
    .then(function (response) {
      const sucessMessage =  response.data?.message
      toast.success(sucessMessage);
      router?.push('/login')
    })
    .catch(function (error) {
      console.log(error,'error status');

      toast.error(error.error || 'An unexpected error occured')
      // let errorMessage = error.response?.data?.message 
      // let errorMessageTwo = error.response?.data?.detail[0]?.msg
      // if (errorMessage?.includes(':')) {
      //   errorMessage = errorMessage.split(':')[1].trim();
      // }
      // if (error.response?.status===422){
      //   toast.error(errorMessageTwo)
      // }
      //  if (error.response?.status === 400 ) {
      //   toast.error(errorMessage);
      // } else if (error.response?.status ===422) {
      //   toast.error(errorMessageTwo)
      // }else{
      //   toast.error('An unexpected error occurred,try again');
      // }

    })
    .finally(function(){
      setLoading(false)
    })

}
}