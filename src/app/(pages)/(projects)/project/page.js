'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaImage } from "react-icons/fa";

const tabs =[
  'getStarted',
  'projectGoal',
  'projectSetUp'
]
const NewProjectPage = () => {
  const [step,setStep] = useState(1)
  const [activeTab, setActiveTab] = useState(tabs[0])

  const tabBgColors = {
    getStarted: 'bg-custom-green',
    projectGoal: 'bg-custom-gray',
    projectSetUp: 'bg-custom-gray'
  };


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
    
    <div className='flex  items-center  max-w-[1920px] mx-auto px-[10rem]'>
        <div>
      <Image src="/newproject.png" alt='cowry image' height={600} width={540} />
        </div>
        <form className={`${tabBgColors[activeTab]} ml-[8rem] flex flex-col px-[30px] w-[26rem]`}>
          <ul className="steps pt-6">
          {tabs.map((tab,index)=>{
          return ( <li key={tab} className={`step ${step-1 >= index ?' step-primary':'' }`}></li>)
        })}
          </ul>
        {activeTab === 'getStarted'&& <GetStarted  handleNext={handleNext} handlePrevious={handlePrevious} />}
        {activeTab === 'projectGoal'&& <ProjectGoal  handleNext={handleNext} handlePrevious={handlePrevious} />}
        {activeTab === 'projectSetUp'&& <ProjectSetUp  handleNext={handleNext} handlePrevious={handlePrevious} />}
        </form>
    </div>
  )
}

export default NewProjectPage;

export const GetStarted = ({handleNext})=>{
  return (
    <>
     <div>
            <h2 className='pt-6 text-2xl font-medium text-center'>Let’s Get  <span className='uppercase font-bold '>Started</span></h2>
            <label className='text-black-100 font-medium block w-full mt-6'>
              What’s Your Name?
              <input type='text' className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <label className='text-black-100 font-medium block w-full mt-6'>
              Where do you live?
              <select className="select select-bordered text-[13px] w-full h-10 min-h-10 mt-3">
                <option disabled selected >Nepal</option>
              </select>
            </label>
           <div className='relative'>
            <input type='text' placeholder='Zip Code' className='custom-placeholder pl-7 input focus:none text-sm h-9 input-bordered input-custom-brown w-full mt-3' />
           <span className='inline-flex absolute left-2 mr-5 top-[65%] transform -translate-y-1/2 '><CiSearch /></span>
           </div>
            <label className='text-black-100 font-medium block w-full mt-6'>
              What are you fundraising for?
              <select className="select select-bordered text-[13px] w-full h-10 min-h-10 mt-3">
                <option disabled selected>Choose a category</option>
                <option>Tech and design</option>
                <option>Arts</option>
              </select>
            </label>
            <div className='flex justify-end text-right w-full mb-9'>
              <button className='btn bg-custom-blue hover:bg-custom-blue
               text-white text-right w-[10.5rem]  text-lg font-medium  mt-6 h-10 min-h-10' onClick={handleNext}>Next</button>
            </div>
          </div>
    </>
  )
}


export const ProjectGoal = ({handleNext,handlePrevious})=>{
  return (
    <>
     <div>
            <h2 className='pt-6 font-medium text-2xl text-center'>Set your <span className='font-bold uppercase'>Goal </span></h2>
            <label className='text-black-100 font-medium mt-6 w-full block'>
            How much would you like to raise?
            <input type='text' placeholder='Rs.                                                                        NPR'
             className='custom-placeholder input h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <div className='bg-custom-light-blue text-black-100 rounded-[6px] px-4  py-[15px] mt-6'>
              <p className='text-[0.77rem]'>Keep in mind that transaction fees, including credit and debit charges, are deducted from each donation. 
                Also make sure to have a bank account and mailing address with proper documents.Also by continuing you agree to following conditions:</p>
                 <p className='font-medium pt-4'>I am at least 18 years old.</p>
                 <p className='font-medium py-4'>I can verify a government issued ID.</p>
                 <p className='font-medium'>I can verify the legitimacy of the project.</p>
            </div>
            <div className='flex mb-9'>
              <button className='btn bg-custom-red hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
            <button className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'onClick={handleNext}>Next</button>
            </div>
           
          </div>
    </>
  )
}

export const ProjectSetUp = ({handlePrevious})=>{
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
     <div>
        <h2 className='pt-4 text-2xl font-medium text-center'>Setup your  <span className='uppercase font-bold '>RIPPLE </span></h2>
        <label className='text-black-100 font-medium mt-6 w-full block'>
        What’s Your Ripple Title?
            <input type='text'
             className='custom-placeholder input h-9 input-bordered input-custom-brown w-full mt-3' />
         </label>
         <label className='text-black-100 font-medium mt-6 w-full block'>
         What’s Your Ripple About?
         <textarea  className='custom-placeholder input h-20 input-bordered input-custom-brown w-full mt-3'></textarea>
         </label>
         <div>
         
         <p  className='text-black-100 font-medium my-6 w-full block'>Add a Photo/Video</p>
         <input type="file"   id="file-upload" 
         className="hidden file-input file-input-ghost w-full mt-6 input-bordered input-custom-brown h-20 " onChange={handleFileChange} />
         <label  htmlFor="file-upload"
          className='cursor-pointer flex items-center justify-center w-full h-20 border border-custom-brown'>
         <FaImage className='text-xl'/>
         </label>
         {selectedFile && <span className="ml-2">{selectedFile.name}</span>}
         </div>
            <div className='flex mb-9'>
              <button className='btn bg-custom-red hover:bg-custom-red text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
            <button className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'> <Link href='/newprojectview'>Finish</Link></button>
            </div>
          </div>
    </>
  )
}
