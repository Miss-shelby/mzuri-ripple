"use client"
import React, { useEffect, useState } from 'react'
import { ProjectCard } from '@/app/_components/ProjectCard';
import Link from 'next/link';
import axios from 'axios';
import { GetProjectsApi } from '@/app/_components/Apis/api';
import Spinner from '@/app/_components/spinner';
import TextExpander from '@/app/_components/shared/TextExpander';
import { toast } from 'react-toastify';
import { useFetchProjects } from '@/app/_components/hook/custom/useFetchProjects';

const ExplorePage = () => {
  const initialProjectsList = 12;
  const incrementProjectsList = 6
  const [displayProjects,setDisplayProjects] = useState(initialProjectsList)

    const {allProjects,isLoading,error,handleFetch} = useFetchProjects()
    const loadMore =()=>{
      setDisplayProjects(prev => prev + incrementProjectsList);
    }
    const loadLess =()=>{
      setDisplayProjects(initialProjectsList);
    }
      useEffect(()=>{
        handleFetch()
       },[])
     
      
  return (
    
    <div className='w-full max-w-[1920px] mx-auto min-h-screen  px-[10rem] bg-white'>
      <h4 className='text-black-100 font-bold text-2xl mt-10 ' >Explore</h4>
      
     {isLoading?<Spinner/> : 
      error? 
      <p className='text-red-500 capitalize font-medium mt-4'>Failed to load featured projects😓 </p> 
      :  (
      <div>
       <div className='grid grid-cols-3 gap-4 mt-6  w-full'>
       {allProjects.slice(0,displayProjects).map((project)=>{
         return (
          <Link onClick={()=>console.log('testing')}
           href={`/explore/${project.id}`} key={project.id} >
             <ProjectCard title={project.title} 
             expander={<TextExpander collapsedNumber={20}>{project?.about}</TextExpander>}
             startPrice={project.amount} endPrice={project.amount} location={project.state}
              img="/clean2.png" height={186} width={389}/>
          </Link>
         )
       })}
       </div>
       <div className='flex justify-center mt-[53px]'>
        {displayProjects < allProjects.length ?(<button onClick={loadMore} className='font-medium mb-16 px-[30px] rounded-[6px] py-2 text-lg bg-custom-blue text-center text-white'>
          Load More</button>) :<button onClick={loadLess} className='font-medium mb-16 px-[30px] rounded-[6px] py-2 text-lg bg-custom-blue text-center text-white'>
          Load less</button>}
    
      </div>
       </div>
       
     )}
     
    </div>
  )
}

export default ExplorePage
