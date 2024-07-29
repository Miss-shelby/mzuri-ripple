'use client'
import ProtectedRoute from '@/app/_components/Protected/Protected';
import { useAuth } from '@/app/_components/Providers/Providers';
import Cookies from 'js-cookie';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import GetStarted from './components/GetStarted';
import ProjectGoal from './components/ProjectGoal';
import ProjectSetUp from './components/ProjectSetup';
import { ProjectsApi } from '@/app/_components/Apis/api';

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


  const [formValues, setFormValues] = useState({
    selectedState:"",
    selectedFile: null,
    name: authUser?.full_name || "",
    category: "",
    amount: 0,
    projectTitle: "",
    projectDuration: "",
    projectAbout: "",
    address: authUser?.address|| "",
    projectDuration: "",
  });


const handleInputChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "selectedFile") {
    setFormValues({
      ...formValues,
      [name]: files[0],
    });
  } else {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
};

const validateForm = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let key in formValues) {
    if (!formValues[key]) {
      toast.error(`${key} is required`);
      return false;
    }
  }

  if (formValues.name.length < 8) {
    toast.error('Name must be at least 8 characters long');
    return false;
  }

  if (formValues.address.length < 8) {
    toast.error('Address must be at least 8 characters long');
    return false;
  }

  if (formValues.projectTitle.length < 8) {
    toast.error('Project title must be at least 8 characters long');
    return false;
  }

  if (formValues.projectAbout.length < 150) {
    toast.error('Project about must be at least 150 characters long');
    return false;
  }

  if (new Date(formValues.projectDuration) <= today) {
    toast.error('Project duration must be a future date');
    return false;
  }

  return true;
};
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
const submitForm = async (e)=>{
  e.preventDefault()
  if (loading) return;
  if (!validateForm()) return;
  setLoading(true);
  const formData = new FormData();
  formData.append("name", formValues.name);
  formData.append("state", formValues.selectedState);
  formData.append("zipcode", 423115); 
  formData.append("amount", formValues.amount);
  formData.append("title", formValues.projectTitle);
  formData.append("categories", formValues.category);
  formData.append("duration", formValues.projectDuration);
  formData.append("address", formValues.address);
  formData.append("about", formValues.projectAbout);
  formData.append("picture_or_video", formValues.selectedFile);

    try {
    const response = await fetch(`https://ripple-project-1.onrender.com/api/v1/projects/`,{
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const json = await response.json();

    if (response?.status === 200 || response?.status === 202  || response?.status === 201 ||  response.ok) {
      const projectId = json?.data;
      Cookies.set("projectId",projectId)
      setUserProject(json?.data)
      const sucessMessage = json?.message;
      toast.success(sucessMessage || "Registration successful");
      setLoading(false);
      router?.push('/newprojectview')
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
    console.log(error);

    toast.error(error?.error || error || "A server error occured");
  
  } finally {
    setLoading(false);
  }
};
 
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
          {activeTab === 'getStarted'&& <GetStarted 
          handleNext={handleNext} handlePrevious={handlePrevious} formValues={formValues} handleInputChange={handleInputChange} />}


          {activeTab === 'projectGoal'&& <ProjectGoal   
          handleNext={handleNext} handlePrevious={handlePrevious} formValues={formValues} handleInputChange={handleInputChange} />}


          {activeTab === 'projectSetUp'&& <ProjectSetUp loading={loading}
          formValues={formValues} handleInputChange={handleInputChange} handleNext={handleNext} handlePrevious={handlePrevious} submitForm={submitForm} />}
          </form>
      </div>
    )

}


export default function ProtectedNewProjectPage() {
  return (
    <ProtectedRoute>
      <NewProjectPage />
    </ProtectedRoute>
  );
}