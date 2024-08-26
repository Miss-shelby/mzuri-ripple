
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
      <p className='pt-4 text-sm'>  You have succesfully backed this project </p>
      <p className='pt-8'><Link href="/">Back Home</Link></p>
      <div className="flowers-container"></div>
    </div>
    </div>
  )

  </>
  
};

export default CongratulatoryPage;

