'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Formik,Form } from 'formik'
import * as yup from 'yup'
import Register from './components/Register'
import PersonalInfo from './components/PersonalInfo'
import PaymentGateway from './components/Payment'

const tabs =[
  'register',
  'personal-info',
  'payment-gateway'
]
const RegisterPage = () => {
  const [step,setStep] = useState(1)
  const [activeTab, setActiveTab] = useState(tabs[0])

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
  console.log(values);
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
  email: yup.string().email('Invalid email address').required('Email is required'),
  fullname: yup.string().required('name is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  dob: yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),
  phoneNumber: yup.string()
    .required('Phone number is required')
    .matches(/^[\d\s+()-]{10,}$/, 'Invalid phone number format'),
  address: yup.string().required('Address is required'),
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
              <Form className='bg-custom-green flex flex-col px-[30px] w-[26rem]'>
                    <ul className="steps pt-14">
                    {tabs.map((tab,index)=>{
                    return ( <li key={tab} className={`step ${step-1 >= index ?' step-primary':'' }`}></li>)
                  })}
                    </ul>
                  {activeTab === 'register'&& <Register errors={errors} values={values} handleChange={handleChange} handleNext={handleNext} handlePrevious={handlePrevious} />}
                  {activeTab === 'personal-info'&& <PersonalInfo errors={errors} values={values} handleChange={handleChange}  handleNext={handleNext} handlePrevious={handlePrevious} />}
                  {activeTab === 'payment-gateway'&& <PaymentGateway  handleNext={handleNext} submitForm={submitForm} handlePrevious={handlePrevious} />}
                 
              </Form>
            )
          }}
        </Formik>

    </div>
  )
}

export default RegisterPage;





