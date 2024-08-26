import React, { useState } from 'react'
import { useAuth } from '../../Providers/Providers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const usePayment = () => {
    const {authUser,userProject,projectId}= useAuth()
    const [loading, setLoading] = useState(false);
    const router = useRouter(); 
    const token = Cookies.get("token")
  
    
    const [formFields,setFormFields] = useState({
      email:authUser?.email || '',
      firstname: authUser?.full_name || '',
      lastname: '',
      amount: ''
    })

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

      const makepayment = () => {
        if (token){
          setLoading(true)
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
            setLoading(false)
            router.push(response.data?.data?.authorization_url);
            Cookies.set("projectId", projectId);
           
          })
          .catch(function (error) {
            setLoading(false)
            toast.error(error?.response?.data?.detail || error?.response?.message || error?.status || error?.message )
           
          });
        }
      };

      return {loading,makepayment,handleFormValue,formFields}
}

export {usePayment}