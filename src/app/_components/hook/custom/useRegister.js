import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { registerApi } from '../../Apis/api';
import { toast } from 'react-toastify';
import * as yup from 'yup'
const useRegister = () => {
    const [loading, setLoading] = useState(false);
  

    const router = useRouter();

    const onSubmitHandler = async (values) => {
        if (loading) return;
        setLoading(true);
    
        const form = {
          email: values.email,
          password: values.password,
          full_name: values.fullname,
          date_of_birth: values.dob,
          phone: values.phoneNumber,
          address: values.address,
        };
    
        try {
          const response = await fetch(`${registerApi}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
    
          const json = await response.json();
    
          if (response?.status === 200 || response?.status === 202  || response?.status === 201 ||  response.ok) {
            const sucessMessage = json?.message;
            toast.success(sucessMessage || "Registration successful");
            setLoading(false);
            router?.push('/login')
            return;
          } else if (response?.status === 400 || response?.status === 401 ||  response?.status === 403 ||response?.status === 404 ) {
            toast.error(json?.message ||  json?.detail || json?.error || json?.data ||        response?.statusText ||
                "An error occured"
            );
            setLoading(false);
            return;
          } else {
            setLoading(false);
            toast.error(json?.message || json?.detail || json?.error || json?.data ||  response?.statusText || "An error occured" );
            return;
          }
        } catch (error) {
         
          toast.error(error?.error || error || "A server error occured");
        
        } finally {
          setLoading(false);
        }
      };

        //default form values
  const defaultValues = {
    email: "",
    password: "",
    fullname: "",
    dob: "",
    phoneNumber: "",
    address: "",
  };

    //validation schema

    const formSchema = yup.object({
        email: yup
          .string()
          .email("Invalid email address")
          .required("Email is required")
          .test(
            "is-valid-email",
            'Email must contain "@" and end with ".com"',
            (value) => value && value.includes("@") && value.endsWith(".com")
          ),
        fullname: yup
          .string()
          .required("Name is required")
          .min(8, "Name must be at least 8 characters long"),
        password: yup
          .string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters long")
          .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase letter, one number, and one special character"
          ),
        dob: yup
          .string()
          .required("Date of birth is required")
          .matches(
            /^\d{4}-\d{2}-\d{2}$/,
            "Date of birth must be in the format YYYY-MM-DD"
          )
          .test(
            "is-valid-date",
            "Date of birth cannot be in the future",
            (value) => !value || new Date(value) <= new Date()
          ),
        phoneNumber: yup
          .string()
          .required("Phone number is required")
          .matches(
            /^\+\d{7,64}$/,
            "Phone number must be in the form +2348103567322 and between 7 to 64 characters long"
          ),
        address: yup
          .string()
          .required("Address is required")
          .min(8, "Address must be at least 8 characters long"),
      });

      return {loading,onSubmitHandler,defaultValues,formSchema}
}

export {useRegister}