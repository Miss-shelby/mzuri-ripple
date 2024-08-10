
"use client"
import { GetProjectsApi } from '@/app/_components/Apis/api';
import { useAuth } from '@/app/_components/Providers/Providers';
import Spinner from '@/app/_components/spinner';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const colors = ['#ffeb3b', '#ff5722', '#4caf50', '#2196f3', '#e91e63'];
const shapes = ['circle', 'square', 'triangle'];

const CongratulatoryPage = () => {
  // const {authUser,userProject,projectId}= useAuth()
  // const projectId = Cookies.get("projectId")
  // const projectId='66a0e6d46aa4773bb5462d91'
  console.log(projectId,'project id');
  
// const token =  Cookies.get("token")
// const[projectData,setProjectData] = useState({})
// const [isLoading,setIsloading] = useState(true)



  // const fetchdata= async ()=>{
  //   if(!projectId) return;
  //   setIsloading(true)
  //   try {
  //     const response = await fetch(`${GetProjectsApi}/project/${projectId}`, {
  //       method: "GET",
  //       headers:{
  //         accept:'application/json',
  //         Authorization: `Bearer ${token}`
  //       }
        
  //     });

  //     const json = await response.json();

  //     if (response?.status === 200 || response?.status === 202  || response?.status === 201 ||  response.ok) {
  //       setProjectData(json.data)
  //       setIsloading(false)
  //       return;
  //     } else if (response?.status === 400 || response?.status === 401 ||  response?.status === 403 ||response?.status === 404 ) {
  //      console.log(response.error);
  //      setIsloading(false)
  //       return;
  //     } else {
  //       console.log(response.error);
  //       setIsloading(false)
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(error);

      
  //   } finally {
  //     setIsloading(false)
  //   }
  // };
  
  useEffect(() => {
  // fetchdata()
    const createFlower = () => {
      const flower = document.createElement('div');
      flower.className = `flower ${shapes[Math.floor(Math.random() * shapes.length)]}`;
      flower.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      flower.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)]; 
      flower.style.left = `${Math.random() * 100}%`;
      flower.style.animationDuration = '10s';
      const flowersContainer = document.querySelector('.flowers-container');
      if (flowersContainer) {
        flowersContainer.appendChild(flower);
      }
      setTimeout(() => {
        flower.remove();
      }, 10000); 
    };

  
    const interval = setInterval(createFlower,100);

    
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

   
    return () => clearInterval(interval);
  }, []);

  return  <>
  
(
    <div className='w-full shadow-2xl flex flex-col items-center pt-28 min-h-screen'>
    <div className="congrats-container">
      <h1>Thank You💖!</h1>
      <p className='pt-4 text-sm text-custom-green-200'>  Project  has been succesfully backed </p>
      <p className='pt-8'><Link href="/">Back Home</Link></p>
      <div className="flowers-container"></div>
    </div>
    </div>
  )

  </>
  
};

export default CongratulatoryPage;

