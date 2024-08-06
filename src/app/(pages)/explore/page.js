"use client"
import React, { useEffect, useState } from 'react'
import { ProjectCard } from '@/app/_components/ProjectCard';
import Link from 'next/link';
import axios from 'axios';
import { GetProjectsApi } from '@/app/_components/Apis/api';
import Spinner from '@/app/_components/spinner';
import TextExpander from '@/app/_components/shared/TextExpander';

const ExplorePage = () => {
  const initialProjectsList = 12;
  const incrementProjectsList = 6
  const [displayProjects,setDisplayProjects] = useState(initialProjectsList)
  const [allProject,setAllProject] = useState([])
  const [isLoading,setIsLoading] = useState(true)

    const loadMore =()=>{
      setDisplayProjects(prev => prev + incrementProjectsList);
    }
    const loadLess =()=>{
      setDisplayProjects(initialProjectsList);
    }
      useEffect(()=>{
        handleFetch()
       },[])
     
       const handleFetch = ()=>{
         setIsLoading(true)
         axios.get(`${GetProjectsApi}`,{
         })
        .then(function (response) {
       // handle success
       console.log(response, 'response from home page ');
       console.log(response.status);
       if(response.status === 200){
       setAllProject(response.data.data)
       setIsLoading(false)
       }
     
       })
      .catch(function (error) {
       // handle error
       console.log(error);
       // setIsLoading(false)
        });
       }
   
      
  return (
    
    <div className='w-full max-w-[1920px] mx-auto min-h-screen  px-[10rem] bg-white'>
      <h4 className='text-black-100 font-bold text-2xl mt-10 ' >Explore</h4>
      
     {isLoading?<Spinner/> : (
      <div>
       <div className='grid grid-cols-3 gap-4 mt-6  w-full'>
       {allProject.slice(0,displayProjects).map((project)=>{
         return (
          <Link href={`/explore/${project.id}`} key={project.id} >
             <ProjectCard title={project.title} 
             expander={<TextExpander collapsedNumber={20}>{project?.about}</TextExpander>}
             startPrice={project.amount} endPrice={project.amount} location={project.state}
              img="/clean2.png" height={186} width={389}/>
          </Link>
         )
       })}
       </div>
       <div className='flex justify-center mt-[53px]'>
        {displayProjects < allProject.length ?(<button onClick={loadMore} className='font-medium mb-16 px-[30px] rounded-[6px] py-2 text-lg bg-custom-blue text-center text-white'>
          Load More</button>) :<button onClick={loadLess} className='font-medium mb-16 px-[30px] rounded-[6px] py-2 text-lg bg-custom-blue text-center text-white'>
          Load less</button>}
    
      </div>
       </div>
       
     )}
     
    </div>
  )
}

export default ExplorePage
