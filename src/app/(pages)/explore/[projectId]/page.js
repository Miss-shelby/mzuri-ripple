
import ProjectNavigation from '@/app/_components/AllProjects/Navigation';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { GoTag } from "react-icons/go";
import { BsFillGeoFill } from "react-icons/bs";
import DashboardNavigation from './components/dashboardLinks';
import { useAuth } from '@/app/_components/Providers/Providers';
import {  useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { GetProjectsApi } from '@/app/_components/Apis/api';
import axios from 'axios';

const NewProject = async ({params}) => {
 console.log(params.artId);
  const response  = await fetch(`${GetProjectsApi}/${params.artId}`)
  const data = await response.json()
  console.log(data);
const {name,title,address,location} = data.data;
  return (
    <section className=' mt-[68px] mb-5'>
              <p className='font-bold text-2xl mb-8 pl-[10rem]'>{projectName}</p>
        <div className='flex w-full max-w-[1920px] mx-auto px-[10rem]'>
            <div>
               <div className='relative w-[800px] h-[500px]'>
                <Image src={imageUrl} alt='Project picture' className='w-full h-full' fill priority/>
               </div>
                <p className='text-black-100 mt-6 font-medium text-lg'>{projectOwner} is organizing this fundraiser to benefit society</p>
                <div className='flex mt-6 items-center text-black-100 text-lg font-medium'>
                    <p className='border-black-100 h-8 pr-4 border-r-2'>Created 1 day ago </p>
                    <p className='flex items-center px-4 border-black-100 h-8   border-r-2 '><GoTag /><span className='inline-flex  pl-4'>Personal Use </span></p>
                    <p className='flex items-center pl-4 '><BsFillGeoFill />  <span className='px-5 inline-flex '>{location}</span></p>
                   
                </div>
            </div>
            <div className="card w-[420px] h-fit shadow-2xl ml-6 ">
                <div className="card-body gap-0 px-4 py-6">
                <div className="gradient-border"></div>
                <div id="grad"></div>
                    <h2 className="text-custom-green-200 text-2xl font-bold pt-6">{userProject?.amount}</h2>
                    <p className='font-medium text-sm text-black-100 mt-2'>pledged of 0 goal</p>
                    <p className='text-custom-green-200 text-2xl font-bold pt-6 '>0</p>
                    <p className='font-medium text-sm text-black-100 mt-2'>backers</p>
                    <p className='text-custom-green-200 text-2xl font-bold pt-6'>10</p>
                    <p className='font-medium text-sm text-black-100 '>days to go</p>
                    <div className="card-actions justify-center mt-6">
                        <button className="btn text-lg font-medium hover:bg-custom-green-100 h-10 min-h-10 bg-custom-green-200 text-white Back this project w-full">Back this project</button>
                        <button className="btn text-lg font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white Back this project w-full">Share</button>
                    </div>
                </div>
            </div>
        </div>
        <UserDashboard projectOwner={projectOwner} imageUrl ={imageUrl } projectStory={projectStory} />
    </section>
  )
}

export default NewProject

const projectLinks = [
    {
      name: 'campaign', 
    },
    {
        name: 'updates',
        
    },
    {
      name: 'comments',
      
    },
  ];
export const UserDashboard=({imageUrl ,projectOwner,projectStory})=>{
    return (
        <div className='mt-9 mb-6 '>
            <nav className=' '>
              <DashboardNavigation links={projectLinks} projectOwner={projectOwner} imageUrl ={imageUrl } projectStory={projectStory} />
            </nav>
        </div>
    )
}