'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Formik,Form } from 'formik'
import * as yup from 'yup'
import Register from './components/Register'
import PersonalInfo from './components/PersonalInfo'
import PaymentGateway from './components/Payment'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { registerApi } from '@/app/_components/Apis/api'
import { toast } from 'react-toastify'

const tabs =[
  'register',
  'personal-info',
  'payment-gateway'
]
const RegisterPage = () => {
  const [step,setStep] = useState(1)
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [user,setUser] = useState('')
  const [loading, setLoading] = useState(false);
  const [message,setMessage] = useState('')

  const router = useRouter(); 

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



const onSubmitHandler=(values)=>{
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
      // console.log(error,'error from db');
      console.log(error.response.status,'error status');
      let errorMessage = error.response?.data?.message 
      if (errorMessage.includes(':')) {
        errorMessage = errorMessage.split(':')[1].trim();
      }


       if (error.response?.status === 400) {
        toast.error(errorMessage);
      } 

    })
    .finally(function(){
      setLoading(false)
    })

}


    //default form values
const defaultValues={
  email:'',
  password:'',
  fullname:'',
  dob:'',
  phoneNumber:'',
  address:''
}

//validation schema 

const formSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required')
  .test(
    'is-valid-email',
    'Email must contain "@" and end with ".com"',
    (value) => value && value.includes('@') && value.endsWith('.com')
  ),
  fullname: yup.string().required('Name is required').min(8, 'Name must be at least 8 characters long'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one number, and one special character'
    ),
    dob: yup.string()
    .required('Date of birth is required')
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Date of birth must be in the format YYYY-MM-DD'
    )
    .test(
      'is-valid-date',
      'Date of birth cannot be in the future',
      (value) => !value || new Date(value) <= new Date()
    ),
    phoneNumber: yup.string()
    .required('Phone number is required')
    .matches(
      /^\+\d{7,64}$/,
      'Phone number must be in the form +2348103567322 and between 7 to 64 characters long'
    ),
  address: yup.string().required('Address is required').min(8, 'Address must be at least 8 characters long'),
});

  return (
    
    <div className='flex justify-center items-center pb-[67px] pt-16'>
        <div>
      <Image src="/register.png" alt='cowry image' height={500} width={440} />
        </div>
        <Formik onSubmit={onSubmitHandler} validationSchema={formSchema} initialValues={defaultValues}>
          {({
            values,
            handleChange,
            submitForm,
            errors
          }) =>{
            return (
              <Form className='bg-custom-green flex flex-col px-[30px] w-[26rem] h-[650px]'>
                    <ul className="steps pt-14">
                    {tabs.map((tab,index)=>{
                    return ( <li key={tab} className={`step ${step-1 >= index ?' step-primary':'' }`}></li>)
                  })}
                    </ul>
                  {activeTab === 'register'&& <Register errors={errors} values={values} handleChange={handleChange} handleNext={handleNext} handlePrevious={handlePrevious} />}
                  {activeTab === 'personal-info'&& <PersonalInfo errors={errors} values={values} handleChange={handleChange}  handleNext={handleNext} handlePrevious={handlePrevious} />}
                  {activeTab === 'payment-gateway'&& <PaymentGateway  handleNext={handleNext} submitForm={submitForm} loading={loading} handlePrevious={handlePrevious} />}
                 
              </Form>
            )
          }}
        </Formik>

    </div>
  )
}

export default RegisterPage;





