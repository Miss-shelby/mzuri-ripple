// import React, { Suspense } from 'react'
// import { TbCurrencyNaira } from 'react-icons/tb'
// import { numberOfProjects } from '../Apis/api'
// import { getProjectBacking, getProjectLength } from '../_lib/data-service'

// const ProjectFigures = async () => {
  
//     const amount = 1000000

//     const { data: projectLengthData = null, error: projectLengthError = null } = await getProjectLength();
//     const { data: projectBackingData = null, error: projectBackingError = null } = await getProjectBacking();

//     // Set default values
//     const projectNumber = projectLengthError ? 0 : projectLengthData?.data || 0;
//     const projectBacking = projectBackingError ? 0 : projectBackingData?.data || 0;
//   return (
//     <>
//      <p className="text-center font-medium capitalize text-lg  pt-10 pb-7">
//         Raised this month
//       </p>
//     <div className="bg-[#F5F5F5] flex flex-col md:flex-row justify-between px-4 md:px-[3rem] w-full py-4 mb-[4rem]">
      
//         <ProjectLength projectNumber={projectNumber} error={projectLengthError}/>
      
//         <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2">
//         </div>
//         <div className="flex flex-col items-center justify-center text-black-100">
//           <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600]  flex items center"><span className="inline-flex items-center">
//           <TbCurrencyNaira />{amount.toLocaleString('en-US')}</span> </p>
//           <p className="md:font-medium text-xs capitalize md:text-sm lg:text-lg">Towards Creative projects</p>
//         </div>
//         <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2">
          
//         </div>
//               <ProjectBacking projectBacking={projectBacking} error={projectBackingError}/>
      
//       </div>
//     </>
//   )
// }

// const ProjectBacking=({projectBacking})=>{
//   return (
//     <div className="flex flex-col items-center justify-center">
//     <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600] ">
//       {projectBacking}</p>
//     <p className="md:font-medium text-xs md:text-sm lg:text-lg">Project Backing</p>
//   </div>
//   )
// }

// const ProjectLength =   ({projectNumber}) =>{
  
    
//     return (
//     <div className="flex flex-col items-center justify-center text-black-100">
//           <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600] ">
//             { projectNumber}</p>
//           <p className="md:font-medium text-xs md:text-sm lg:text-lg">Projects</p>
//         </div>
//     )
// }

// export default ProjectFigures

"use client"; // Ensure this component is treated as a client component

import React, { useEffect, useState } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { getProjectBacking, getProjectLength } from '../_lib/data-service';

export default function ProjectFigures() {
  const [projectNumber, setProjectNumber] = useState(0);
  const [projectBacking, setProjectBacking] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const fetchData = async () => {
    try {
      const { data: projectLengthData, error: projectLengthError } = await getProjectLength();
      const { data: projectBackingData, error: projectBackingError } = await getProjectBacking();

      if (!projectLengthError && projectLengthData) {
        setProjectNumber(projectLengthData?.data || 0);
      } else {
        setProjectNumber(0);
      }

      if (!projectBackingError && projectBackingData) {
        setProjectBacking(projectBackingData?.data || 0);
      } else {
        setProjectBacking(0);
      }

      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data');
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const amount = 1000000;

  return (
    <>
      <p className="text-center font-medium capitalize text-lg pt-10 pb-7">
        Raised this month
      </p>
      <div className="bg-[#F5F5F5] flex flex-col md:flex-row justify-between px-4 md:px-[3rem] w-full py-4 mb-[4rem]">
        <ProjectLength projectNumber={projectNumber} />
        <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2" />
        <div className="flex flex-col items-center justify-center text-black-100">
          <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600] flex items center">
            <span className="inline-flex items-center">
              <TbCurrencyNaira />{amount.toLocaleString('en-US')}
            </span>
          </p>
          <p className="md:font-medium text-xs capitalize md:text-sm lg:text-lg">Towards Creative projects</p>
        </div>
        <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2" />
        <ProjectBacking projectBacking={projectBacking} />
      </div>
    </>
  );
}

const ProjectBacking = ({ projectBacking }) => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600] ">
      {projectBacking}
    </p>
    <p className="md:font-medium text-xs md:text-sm lg:text-lg">Project Backing</p>
  </div>
);

const ProjectLength = ({ projectNumber }) => (
  <div className="flex flex-col items-center justify-center text-black-100">
    <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600] ">
      {projectNumber}
    </p>
    <p className="md:font-medium text-xs md:text-sm lg:text-lg">Projects</p>
  </div>
);
