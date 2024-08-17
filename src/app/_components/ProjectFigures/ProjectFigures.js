import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import { numberOfProjects } from '../Apis/api'
import { getProjectBacking, getProjectLength } from '../_lib/data-service'

const ProjectFigures = async () => {
    let projectNumber ;
    let projectBacking ;
    const amount =1000000
    const { data, error } = await getProjectLength();
    if (error) {
        console.log('Failed to fetch project length:', error);
       
        
    } else {
        projectNumber = data.data;
        console.log(projectNumber,'number');
        console.log('Project length:', data);
    }
    
    const { backingsData, Backingserror } = await getProjectBacking();
    if (error) {
        console.log('Failed to fetch project length:', Backingserror);
       
        
    } else {
        projectBacking = backingsData.data;
        console.log('Project backing:', backingsData);
    }
  return (
    <>
     <p className="text-center font-medium capitalize text-lg  pt-10 pb-7">
        Raised this month
      </p>
    <div className="bg-[#F5F5F5] flex flex-col md:flex-row justify-between px-4 md:px-[3rem] w-full py-4 mb-[4rem]">
        <ProjectLength projectNumber={projectNumber}/>
        <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2">
        </div>
        <div className="flex flex-col items-center justify-center text-black-100">
          <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600]  flex items center"><span className="inline-flex items-center">
          <TbCurrencyNaira />{amount.toLocaleString('en-US')}</span> </p>
          <p className="md:font-medium text-xs capitalize md:text-sm lg:text-lg">Towards Creative projects</p>
        </div>
        <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2">
          {" "}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600] ">{projectBacking}</p>
          <p className="md:font-medium text-xs md:text-sm lg:text-lg">Project Backing</p>
        </div>
      </div>
    </>
  )
}



const ProjectLength =   ({projectNumber}) =>{
  
    
    return (
    <div className="flex flex-col items-center justify-center text-black-100">
          <p className="text-sm md:text-[20px] lg:text-[28px] md:font-[600] ">{projectNumber}</p>
          <p className="md:font-medium text-xs md:text-sm lg:text-lg">Projects</p>
        </div>
    )
}

export default ProjectFigures