'use client'
import { ProjectsApi } from '@/app/_components/Apis/api';
import NigeriaStatesDropDown from '@/app/_components/NigeriaStateDropdown/NigeriaStates';
import ProtectedRoute from '@/app/_components/Protected/Protected';
import { useAuth } from '@/app/_components/Providers/Providers';
import Cookies from 'js-cookie';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaImage } from "react-icons/fa";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const tabs =[
  'getStarted',
  'projectGoal',
  'projectSetUp'
]
const NewProjectPage = () => {
  const {authUser,setUserProject,userProject}= useAuth()

  const [step,setStep] = useState(1)
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [loading,setLoading] = useState(false)
  const [selectedState, setSelectedState] = useState("");
  const [states,setStates] = useState([])
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [name,setName] = useState(authUser?.full_name)
  const [category,setCategory] = useState("")
  const[amount,setAmount] = useState("")
  const[projectTitle,setProjectTitle] = useState("")
  const[projectDuration,setProjectDuration] = useState("")
  const[projectAbout,setProjectAbout] = useState("")
  const[address,setAddress] = useState("")
console.log(authUser);

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

  const token = Cookies.get("token")
  // console.log(token);
  const router = useRouter()
const submitForm=(e)=>{
  e.preventDefault()
  if (loading) return;
  setLoading(true);
  const formData = new FormData();
  formData.append("name", name);
  formData.append("state", selectedState);
  formData.append("zipcode", 423115); 
  const amountAsNumber = parseFloat(amount);
  formData.append("amount", amountAsNumber);
  formData.append("amount", amount);
  formData.append("title", projectTitle);
  formData.append("categories", category);
  formData.append("duration", projectDuration);
  formData.append("address", address);
  formData.append("about", projectAbout);
  formData.append("picture_or_video", selectedFile);
    axios.post(`${ProjectsApi}`, formData
    ,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
        ContentType: " multipart/form-data",
      },
    },
  )
    .then(function (response) {
      console.log(response,'response from project');
      const projectId = response.data.data;
      Cookies.set("projectId",projectId)
      console.log(projectId,'project id');
      setUserProject(response.data.data)
      const sucessMessage =  response.data?.message
      toast.success(sucessMessage);
      router?.push('/newprojectview')
     
    })
    .catch(function (error) {
      console.log(error.response);
      let errorMessage = error.response?.data?.message 
       if (error.response?.status === 400) {
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred.');
      };

    })
    .finally(function(){
      setLoading(false)
    })

console.log(selectedFile);
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
        {activeTab === 'getStarted'&& <GetStarted name={name}setName={setName}
        category={category} setCategory={setCategory} states={states} setStates={setStates} 
        selectedState={selectedState}  setSelectedState={setSelectedState}
        handleNext={handleNext} handlePrevious={handlePrevious} address={address} setAddress={setAddress} />}


        {activeTab === 'projectGoal'&& <ProjectGoal amount={amount} setAmount={setAmount}  
        handleNext={handleNext} handlePrevious={handlePrevious} />}


        {activeTab === 'projectSetUp'&& <ProjectSetUp loading={loading} selectedFile={selectedFile}
         projectTitle={projectTitle} setProjectTitle={setProjectTitle}  projectDuration={projectDuration}
          setProjectDuration={setProjectDuration}
          projectAbout={projectAbout} setProjectAbout={setProjectAbout}
         handleFileChange={handleFileChange}
         setSelectedFile={selectedFile} handleNext={handleNext} handlePrevious={handlePrevious} submitForm={submitForm} />}
        </form>
    </div>
  )
}



export const GetStarted = ({handleNext,name,setName,setCategory,
  states={states}, setStates={setStates},address={address},setAddress={setAddress},
  selectedState={selectedState},setSelectedState={setSelectedState}})=>{
  return (
    <>
     <div>
            <h2 className='pt-6 text-2xl font-medium text-center'>Let’s Get  <span className='uppercase font-bold '>Started</span></h2>
            <label className='text-black-100 font-medium block w-full mt-6'>
              What’s Your Name?
              <input type='text' value={name} minLength="8" required onChange={(e) => setName(e.target.value)} className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
            <NigeriaStatesDropDown selectedState={selectedState} states={states} setStates={setStates} setSelectedState={setSelectedState}/>
            <label className='text-black-100 font-medium block w-full mt-6'>
             Where do You Live?
              <input type='text' value={address} minLength="8" required onChange={(e) => setAddress(e.target.value)} className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
            </label>
           <div className='relative'>
            <input type='text' placeholder='Zip Code' className='custom-placeholder pl-7 input focus:none text-sm h-9 input-bordered input-custom-brown w-full mt-3' />
           <span className='inline-flex absolute left-2 mr-5 top-[65%] transform -translate-y-1/2 '><CiSearch /></span>
           </div>
            <label className='text-black-100 font-medium block w-full mt-6'>
              What are you fundraising for?
              <select required onChange={(e) => setCategory(e.target.value)} className="select select-bordered text-[13px] w-full h-10 min-h-10 mt-3">
                <option >Choose a category</option>
                <option value="Design and Tech">Design and Tech</option>
                <option value="Arts&Illustration">Arts&Illustration</option>
                <option value="Film">Film</option>
                <option value="Music">Music</option>
                <option value="Food &Craft">Food & Craft</option>
                <option value="Game">Game</option>
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


export const ProjectGoal = ({handleNext,handlePrevious,setAmount,amount})=>{
  // console.log(amount);
  return (
    <>
     <div>
            <h2 className='pt-6 font-medium text-2xl text-center'>Set your <span className='font-bold uppercase'>Goal </span></h2>
            <label className='text-black-100 font-medium mt-6 w-full block'>
            How much would you like to raise?
            <input type='tel'required value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='#                                                                        Nr'
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

export const ProjectSetUp = ({handlePrevious,selectedFile,handleFileChange,
  projectTitle,setProjectTitle,projectAbout,setProjectAbout,projectDuration,setProjectDuration,submitForm,loading})=>{
 
  console.log(selectedFile,'selcted file');
  console.log(projectAbout,projectTitle,projectDuration);
  return (
    <>
     <div>
        <h2 className='pt-4 text-2xl font-medium text-center'>Setup your  <span className='uppercase font-bold '>RIPPLE </span></h2>
        <label className='text-black-100 font-medium mt-6 w-full block'>
        What’s Your Ripple Title?
            <input type='text' minLength="8" required value={projectTitle} onChange={(e)=>setProjectTitle(e.target.value)}
             className='custom-placeholder input h-9 input-bordered input-custom-brown w-full mt-3' />
         </label>
         <label className='text-black-100 font-medium mt-6 w-full block'>
        What’s Your Ripple Duration?
            <input type='date' required value={projectDuration} onChange={(e)=>setProjectDuration(e.target.value)}
             className='custom-placeholder input h-9 input-bordered input-custom-brown w-full mt-3' />
         </label>
         <label className='text-black-100 font-medium mt-6 w-full block'>
         What’s Your Ripple About?
         <textarea value={projectAbout} onChange={(e)=>setProjectAbout(e.target.value)} 
         required minLength="150" className='custom-placeholder input h-14 input-bordered input-custom-brown w-full mt-3'></textarea>
         </label>
         <div>
         
         <p  className='text-black-100 font-medium my-6 w-full block'>Add a Photo/Video</p>
         <input type="file"   id="file-upload" 
         className="hidden file-input file-input-ghost w-full mt-6 input-bordered input-custom-brown h-20 " onChange={handleFileChange} />
         <label  htmlFor="file-upload"
          className='cursor-pointer flex items-center justify-center w-full h-14 border border-custom-brown'>
         <FaImage className='text-xl'/>
         </label>
         {selectedFile && <span className="ml-2">{selectedFile.name}</span>}
         </div>
            <div className='flex mb-9'>
              <button className='btn bg-custom-red hover:bg-custom-red text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
            <button onClick={submitForm} className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
            text-center mx-auto mt-6 h-10 min-h-10'> {loading?'loading..':'Finish'}</button>
            </div>
          </div>
    </>
  )
}


export default function ProtectedNewProjectPage() {
  return (
    <ProtectedRoute>
      <NewProjectPage />
    </ProtectedRoute>
  );
}