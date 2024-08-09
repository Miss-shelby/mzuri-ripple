// import React from 'react'
// import { FaCheck } from "react-icons/fa6";
// import { PiCheckFatThin } from "react-icons/pi";
// const SucessPage = () => {
//   return (
//     <div className='flex flex-col justify-center min-h-screen w-full items-center  bg-[#f3f4f6]    mx-auto '>
//       <div className=' w-[535px] h-[300px] bg-white rounded-sm'>
//         <h2 className='text-center text-custom-green-200 font-medium text-lg pt-14'>Thank You for Backing this Project!!</h2>
//         <div className='h-20 w-20 mx-auto mt-10 rounded-full bg-custom-green-200 flex flex-col items-center justify-center'>
//         {/* <FaCheck /> */}
//         <PiCheckFatThin />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SucessPage


// src/components/CongratulatoryPage.js





"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';


const colors = ['#ffeb3b', '#ff5722', '#4caf50', '#2196f3', '#e91e63'];
const shapes = ['circle', 'square', 'triangle'];

const CongratulatoryPage = () => {
  useEffect(() => {
    // Function to create flower elements
    const createFlower = () => {
      const flower = document.createElement('div');
      flower.className = `flower ${shapes[Math.floor(Math.random() * shapes.length)]}`;
      flower.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      flower.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)]; // For triangles
      flower.style.left = `${Math.random() * 100}%`;
      flower.style.animationDuration = '10s';
      document.querySelector('.flowers-container').appendChild(flower);
      setTimeout(() => {
        flower.remove();
      }, 10000); // Remove flower after 10 seconds
    };

    // Create flowers at intervals
    const interval = setInterval(createFlower,100);

    // Stop creating flowers after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full shadow-2xl flex flex-col items-center pt-28 min-h-screen'>
    <div className="congrats-container">
      <h1>Thank You💖!</h1>
      <p className='pt-4'> You have succesfully backed the project</p>
      <p className='pt-4'><Link href="/">Back Home</Link></p>
      <div className="flowers-container"></div>
    </div>
    </div>
  );
};

export default CongratulatoryPage;

